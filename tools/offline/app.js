/* 爬宠体型参照 · 离线版前端逻辑
 *
 * 设计要点
 *  · **复用小程序同一份数据与同一份计算逻辑**（构建时把 curves.js / calc.js / i18n 整块内联），
 *    所以离线版与小程序**不会出现"同一个物种算出两个答案"**。
 *  · 纯前端、无网络请求，`file://` 直接打开即可用。
 *  · 反馈走 `mailto:`，不需要任何后端，也**不调用任何隐私接口**。
 *  · 只报告偏差程度，不给"正常/异常"结论 —— 与本项目的一贯口径一致。
 */
(function () {
  'use strict';

  var SPECIES = window.__SPECIES__ || [];
  var calc = window.__CALC__;
  var LOC = window.__LOCALES__ || { zh: {} };
  var FEEDBACK_EMAIL = window.__FEEDBACK_EMAIL__ || '';
  var APP_VER = window.__APP_VER__ || '';

  // ---------------- 语言 ----------------
  // 离线版**专属**、小程序里不存在的文案，单独放这里叠加，
  // 不去污染 miniprogram/i18n（那两份有一致性测试，加无关键会牵连）。
  var OFFLINE_TEXT = {
    zh: {
      fbMailHint: '离线版没有服务器，反馈通过你的邮件客户端发出。收件箱：',
      fbSubmitMail: '用邮件发送',
      offlineBadge: '离线版',
    },
    en: {
      fbMailHint: 'This offline build has no server; feedback is sent from your own mail app to:',
      fbSubmitMail: 'Send by email',
      offlineBadge: 'Offline',
    },
  };
  var locale = (function () {
    try {
      var s = localStorage.getItem('locale');
      if (s && LOC[s]) return s;
    } catch (e) { /* file:// 下 localStorage 可能不可用 */ }
    var lang = (navigator.language || 'zh').toLowerCase();
    return lang.indexOf('zh') === 0 ? 'zh' : 'en';
  })();
  function t() {
    var base = LOC[locale] || LOC.zh || {};
    var extra = OFFLINE_TEXT[locale] || OFFLINE_TEXT.zh;
    var out = {};
    var k;
    for (k in base) if (Object.prototype.hasOwnProperty.call(base, k)) out[k] = base[k];
    for (k in extra) if (Object.prototype.hasOwnProperty.call(extra, k)) out[k] = extra[k];
    return out;
  }
  function setLocale(l) {
    if (!LOC[l]) return;
    locale = l;
    try { localStorage.setItem('locale', l); } catch (e) { /* 忽略 */ }
  }

  // ---------------- 小工具 ----------------
  function h(s) {
    return String(s === null || s === undefined ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function num(x, d) {
    if (x === null || x === undefined || isNaN(x)) return '—';
    return Number(x).toFixed(d === undefined ? 1 : d);
  }
  function spName(sp) {
    if (locale === 'en') return sp.en || sp.latin || sp.zh || '';
    return sp.zh || sp.latin || '';
  }
  function taxonLabel(k) {
    var m = { turtle: 'taxonTurtle', snake: 'taxonSnake', lizard: 'taxonLizard', amphibian: 'taxonAmphibian' };
    return t()[m[k]] || k;
  }
  function groupText(c) { return locale === 'en' ? (c.groupEn || c.group) : (c.groupZh || c.group); }
  function calText(c) { return locale === 'en' ? (c.caliberTextEn || c.caliber) : (c.caliberText || c.caliber); }
  function caveatTexts(c) {
    var map = t().caveatTexts || {};
    return (c.caveats || []).map(function (k) { return map[k]; }).filter(Boolean);
  }

  // ---------------- 搜索索引（与小程序同一套字段） ----------------
  var INDEX = {};
  SPECIES.forEach(function (sp) {
    var parts = [sp.zh, sp.latin, sp.en, sp.py, sp.pyi]
      .concat(sp.alias || [], sp.aliasEn || []);
    INDEX[sp.id] = parts.filter(Boolean).join(' ').toLowerCase();
  });

  // ---------------- 状态 ----------------
  // lowOpen：低可靠区块（U1 未发表数据）是否展开。
  // ⚠️ **默认 false** —— 用户必须主动点开才看得到（红线 R2，见 docs/42 §3）。
  // tab: 当前页签（对齐小程序：曲线类型 + 查询对照）
  // gi:  当前选中的分组下标
  // docCaliber / docTerms: 页尾两个可展开说明
  var S = { q: '', taxon: '', cmp: null, lowOpen: false,
            tab: 'length_weight', gi: 0, docCaliber: false, docTerms: false };

  function cur() {
    var hash = location.hash || '#/';
    if (hash.indexOf('#/s/') === 0) {
      return { view: 'detail', id: decodeURIComponent(hash.slice(4)) };
    }
    if (hash === '#/feedback') return { view: 'feedback' };
    return { view: 'index' };
  }
  function byId(id) {
    for (var i = 0; i < SPECIES.length; i++) if (SPECIES[i].id === id) return SPECIES[i];
    return null;
  }
  function go(hash) { location.hash = hash; }

  // ---------------- 图表（内联 SVG，无外部依赖） ----------------
  function svgFrame(w, hgt, pad) {
    return { w: w, h: hgt, l: pad.l, r: w - pad.r, t: pad.t, b: hgt - pad.b };
  }
  function linePath(pts) {
    return pts.map(function (p, i) { return (i ? 'L' : 'M') + p[0].toFixed(2) + ' ' + p[1].toFixed(2); }).join(' ');
  }
  /** 体长-体重图：**双对数**轴，幂函数在图上是一条直线。 */
  function chartLW(c) {
    var segs = c.segments || [];
    if (!segs.length) return '';
    var lo = Infinity, hi = -Infinity, ylo = Infinity, yhi = -Infinity;
    var curves = [];
    segs.forEach(function (s) {
      var xs = [], ys = [];
      var n = 40;
      for (var i = 0; i <= n; i++) {
        var L = s.lo + (s.hi - s.lo) * (i / n);
        var M = s.a * Math.pow(L, s.b);
        xs.push(L); ys.push(M);
      }
      curves.push({ s: s, xs: xs, ys: ys });
      xs.forEach(function (x) { if (x < lo) lo = x; if (x > hi) hi = x; });
      ys.forEach(function (y) { if (y < ylo) ylo = y; if (y > yhi) yhi = y; });
    });
    var W = 860, H = 340, P = { l: 62, r: 16, t: 16, b: 40 };
    var f = svgFrame(W, H, P);
    var lx0 = Math.log10(lo), lx1 = Math.log10(hi);
    var ly0 = Math.log10(ylo), ly1 = Math.log10(yhi);
    var px = (lx1 - lx0) || 1, py = (ly1 - ly0) || 1;
    function X(v) { return f.l + ((Math.log10(v) - lx0) / px) * (f.r - f.l); }
    function Y(v) { return f.b - ((Math.log10(v) - ly0) / py) * (f.b - f.t); }
    var out = ['<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg">'];
    // 网格 + 刻度
    for (var gi = 0; gi <= 4; gi++) {
      var gx = f.l + (f.r - f.l) * gi / 4, gy = f.t + (f.b - f.t) * gi / 4;
      var vx = Math.pow(10, lx0 + px * gi / 4), vy = Math.pow(10, ly1 - py * gi / 4);
      out.push('<line x1="' + gx + '" y1="' + f.t + '" x2="' + gx + '" y2="' + f.b + '" stroke="#e9efe9"/>');
      out.push('<line x1="' + f.l + '" y1="' + gy + '" x2="' + f.r + '" y2="' + gy + '" stroke="#e9efe9"/>');
      out.push('<text x="' + gx + '" y="' + (f.b + 15) + '" font-size="11" fill="#8a988f" text-anchor="middle">' + Math.round(vx) + '</text>');
      out.push('<text x="' + (f.l - 6) + '" y="' + (gy + 4) + '" font-size="11" fill="#8a988f" text-anchor="end">' + (vy >= 100 ? Math.round(vy) : vy.toFixed(1)) + '</text>');
    }
    // 曲线段
    curves.forEach(function (k, idx) {
      var pts = [];
      for (var i = 0; i < k.xs.length; i++) pts.push([X(k.xs[i]), Y(k.ys[i])]);
      out.push('<path d="' + linePath(pts) + '" fill="none" stroke="' + (k.s.interp ? '#b03a2e' : '#2f6f4e') + '" stroke-width="2.4"' +
        (k.s.interp ? ' stroke-dasharray="7 5"' : '') + '/>');
    });
    out.push('<text x="' + ((f.l + f.r) / 2) + '" y="' + (H - 6) + '" font-size="11" fill="#6b7a72" text-anchor="middle">' + h(t().fieldLength || '体长') + '</text>');
    out.push('</svg>');
    return out.join('');
  }
  /** 年龄-体长图：按模型采样（两段线性会自然画出折点）。 */
  function chartAge(c) {
    var t95 = calc.t95Of(c);
    var maxT = (c.coverage && c.coverage.domain && c.coverage.domain[1]) || t95 || 10;
    if (maxT <= 0) maxT = 10;
    var pts = [], ys = [];
    var n = 80;
    var lastOk = null;
    for (var i = 0; i <= n; i++) {
      var x = (maxT * i) / n;
      var r = calc.estLengthByAge(c, x);
      if (!r.ok) { pts.push(null); continue; }
      pts.push([x, r.value]); ys.push(r.value);
      lastOk = r.value;
    }
    if (!ys.length) return '';
    var ylo = Math.min.apply(null, ys), yhi = Math.max.apply(null, ys);
    var padY = (yhi - ylo) * 0.08 || 1;
    ylo -= padY; yhi += padY;
    var W = 860, H = 340, P = { l: 62, r: 16, t: 16, b: 40 };
    var f = svgFrame(W, H, P);
    function X(v) { return f.l + (v / (maxT || 1)) * (f.r - f.l); }
    function Y(v) { return f.b - ((v - ylo) / (yhi - ylo || 1)) * (f.b - f.t); }
    var out = ['<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg">'];
    for (var gi = 0; gi <= 4; gi++) {
      var gx = f.l + (f.r - f.l) * gi / 4, gy = f.t + (f.b - f.t) * gi / 4;
      var vx = maxT * gi / 4, vy = yhi - (yhi - ylo) * gi / 4;
      out.push('<line x1="' + gx + '" y1="' + f.t + '" x2="' + gx + '" y2="' + f.b + '" stroke="#e9efe9"/>');
      out.push('<line x1="' + f.l + '" y1="' + gy + '" x2="' + f.r + '" y2="' + gy + '" stroke="#e9efe9"/>');
      out.push('<text x="' + gx + '" y="' + (f.b + 15) + '" font-size="11" fill="#8a988f" text-anchor="middle">' + vx.toFixed(vx < 10 ? 1 : 0) + '</text>');
      out.push('<text x="' + (f.l - 6) + '" y="' + (gy + 4) + '" font-size="11" fill="#8a988f" text-anchor="end">' + Math.round(vy) + '</text>');
    }
    // 实测覆盖区（分母区间）：浅底
    if (c.coverage && c.coverage.domain) {
      out.push('<rect x="' + X(0) + '" y="' + f.t + '" width="' + (X(c.coverage.domain[1]) - X(0)) +
        '" height="' + (f.b - f.t) + '" fill="#2f6f4e" opacity="0.05"/>');
    }
    // 断点竖线（两段线性）
    if (c.model === 'two_segment_linear' && c.params && c.params.t_break_years) {
      var bx = X(c.params.t_break_years);
      out.push('<line x1="' + bx + '" y1="' + f.t + '" x2="' + bx + '" y2="' + f.b +
        '" stroke="#b03a2e" stroke-width="1.2" stroke-dasharray="5 4"/>');
    }
    // 曲线
    var sub = [];
    pts.forEach(function (p) { if (p) sub.push([X(p[0]), Y(p[1])]); });
    out.push('<path d="' + linePath(sub) + '" fill="none" stroke="#2f6f4e" stroke-width="2.4"/>');
    if (t95) {
      out.push('<line x1="' + X(t95) + '" y1="' + f.t + '" x2="' + X(t95) + '" y2="' + f.b +
        '" stroke="#8a988f" stroke-width="1" stroke-dasharray="4 4"/>');
    }
    out.push('<text x="' + ((f.l + f.r) / 2) + '" y="' + (H - 6) + '" font-size="11" fill="#6b7a72" text-anchor="middle">' + h(t().fieldAge || '年龄') + '</text>');
    out.push('</svg>');
    return out.join('');
  }

  // ---------------- 曲线卡 ----------------
  function curveCard(c) {
    var o = [];
    o.push('<div class="card">');
    o.push('<div class="curve-head"><span class="g">' + h(groupText(c)) + '</span>' +
      '<span class="pill ' + (String(c.group).indexOf('captive') === 0 ? 'tag-captive' : 'tag-wild') + '">' +
      (String(c.group).indexOf('captive') === 0 ? h(t().labelGroups ? '' : '') : '') + '</span>' +
      '<span class="pill">' + h(calText(c)) + '</span>' +
      '<span class="pill">' + h(c.nTextEn && locale === 'en' ? c.nTextEn : c.nText) + '</span>' +
      (c.sourceShort ? '<span class="pill">' + h(c.sourceShort) + '</span>' : '') +
      '</div>');
    if (c.kind === 'length_weight') {
      o.push('<div class="scroll" style="margin-top:10px"><table class="tb"><thead><tr>' +
        '<th>' + h(t().thRange || '体长区间') + '</th><th>' + h(t().thEquation || '方程') + '</th>' +
        '<th>R²</th><th>SD</th></tr></thead><tbody>');
      (c.segments || []).forEach(function (s) {
        o.push('<tr><td>' + num(s.lo, 0) + '–' + num(s.hi, 0) + ' mm</td>' +
          '<td class="mono">M = ' + Number(s.a).toExponential(3) + ' × L^' + Number(s.b).toFixed(4) + '</td>' +
          '<td class="num">' + (s.r2 === null || s.r2 === undefined ? '—' : Number(s.r2).toFixed(4)) + '</td>' +
          '<td class="num">' + (s.sd === null || s.sd === undefined ? '—' : Number(s.sd).toFixed(4)) + '</td></tr>');
      });
      o.push('</tbody></table></div>');
      o.push(chartLW(c));
    } else {
      o.push('<div class="muted" style="margin-top:8px">' + h(locale === 'en' ? (c.modelTextEn || c.model || '') : (c.modelText || c.model || '')) + '</div>');
      o.push('<div class="mono tiny" style="margin-top:4px">' + h(modelParams(c)) + '</div>');
      o.push('<div class="muted" style="margin-top:4px">t95：' + h(c.t95Text || '—') + '</div>');
      o.push(chartAge(c));
    }
    if (c.band95 !== null && c.band95 !== undefined) {
      // ⚠️ i18n 的 band95Label 结尾**自带冒号**（「该组实测 95% 波动范围：」），
      //    再补一个就变成「： ： ±31.7%」—— 第一版就重复了。
      o.push('<div class="muted" style="margin-top:6px">' + h(t().band95Label || '95% 波动带：') + '±' + num(c.band95, 1) + '%</div>');
    }
    if (c.coverage && c.coverageText) {
      o.push('<div class="muted">' + h(t().coverage || '覆盖度') + '：' + h(c.coverageText) + '　' + h(c.coverageBasis || '') + '</div>');
    }
    var cav = caveatTexts(c);
    if (cav.length) {
      o.push('<div class="box caveat"><b>' + h(t().caveatTitle || '需要注意') + '</b><ul>' +
        cav.map(function (x) { return '<li>' + h(x) + '</li>'; }).join('') + '</ul></div>');
    }
    o.push('<div class="tiny" style="margin-top:8px">' + h(t().sourceLabel || '来源') + '：' + h(c.source || '') + '</div>');
    o.push('</div>');
    return o.join('');
  }
  function modelParams(c) {
    var p = c.params || {};
    if (c.model === 'two_segment_linear') {
      return 'L(t) = ' + num(p.L0_mm, 1) + ' + ' + num(p.m1_mm_per_year, 2) + '·t　(t ≤ ' + num(p.t_break_years, 3) + ' yr)；' +
        '其后以 ' + num(p.m2_mm_per_year, 3) + ' mm/yr 延伸　（单位 mm / 年）';
    }
    var s = [];
    if (p.Linf !== undefined) s.push('Linf=' + num(p.Linf, 1));
    if (p.k !== undefined) s.push('k=' + num(p.k, 4));
    if (p.t0 !== undefined) s.push('t0=' + num(p.t0, 3));
    if (p.L0 !== undefined) s.push('L0=' + num(p.L0, 1));
    if (p.ti !== undefined) s.push('ti=' + num(p.ti, 3));
    return s.join('　');
  }

  // ---------------- 详情页 ----------------
  var CMP_MODES = [
    { k: 'length', label: 'LW' },
    { k: 'weight', label: 'WL' },
    { k: 'age', label: 'AL' },
  ];
  function ensureCmp(sp) {
    if (S.cmp && S.cmp.id === sp.id) return S.cmp;
    var cals = calc.calibersOf(sp.curves, 'length_weight')
      .concat(calc.calibersOf(sp.curves, 'age_length'))
      .filter(function (v, i, a) { return a.indexOf(v) === i; });
    S.cmp = {
      id: sp.id, mode: 'length', caliber: cals[0] || '', group: '',
      L: '', M: '', age: '', rows: [], hint: '', title: '', extrapolated: false,
    };
    return S.cmp;
  }
  function cmpCalibers(sp, mode) {
    return calc.calibersOf(sp.curves, mode === 'age' ? 'age_length' : 'length_weight');
  }
  function cmpGroups(sp, mode, cal) {
    return calc.groupsOf(sp.curves, mode === 'age' ? 'age_length' : 'length_weight', cal);
  }
  function runCompare(sp) {
    var c = ensureCmp(sp);
    var cal = c.caliber;
    c.rows = []; c.hint = ''; c.title = ''; c.extrapolated = false;
    if (!cal) { c.hint = t().hNoCaliber || '该物种没有可用口径'; return; }
    var f = c.group || '';
    if (c.mode === 'length') {
      var L = parseFloat(c.L), M = parseFloat(c.M);
      var hasL = !isNaN(L) && L > 0, hasM = !isNaN(M) && M > 0;
      if (hasL) {
        c.rows = calc.compareByLength(sp.curves, cal, L, hasM ? M : null, f);
        // 标题按小程序的原样拼法：cmpTitleLength + 值 + ' mm · ' + 口径
        c.title = (t().cmpTitleLength || '体长 ') + L + ' mm · ' + calc.caliberLabel(cal);
        if (!hasM) c.hint = t().hFillWeight || '';
      } else if (hasM) {
        c.rows = calc.compareByWeight(sp.curves, cal, M, f);
        c.title = (t().cmpTitleWeight || '体重 ') + M + ' g · ' + calc.caliberLabel(cal);
      } else {
        c.hint = t().hEnterLengthOrWeight || '请输入体长或体重。';
      }
    } else {
      var age = parseFloat(c.age);
      if (!isNaN(age) && age > 0) {
        c.rows = calc.compareByAge(sp.curves, cal, age, f);
        c.extrapolated = c.rows.some(function (r) { return r.extrapolated; });
        c.title = (t().cmpTitleAge || '年龄 ') + age + ' ' + (t().unitYear || '年') + ' · ' + calc.caliberLabel(cal);
      } else {
        c.hint = t().hEnterAge || '请输入年龄（年）。';
      }
    }
  }
  function cmpPanel(sp) {
    var c = ensureCmp(sp);
    var cals = cmpCalibers(sp, c.mode);
    if (cals.indexOf(c.caliber) < 0) c.caliber = cals[0] || '';
    var groups = cmpGroups(sp, c.mode, c.caliber);
    if (c.group && groups.indexOf(c.group) < 0) c.group = '';
    var o = [];
    o.push('<div class="card"><h2>' + h(t().tabCompare || '查询对照') + '</h2>');
    // 查询方式
    o.push('<div class="chips">');
    // ⚠️ 模式与小程序**保持一致：只有两个**（体长·体重 / 年龄）。
    //    「按体重反推体长」不是独立模式，而是体长·体重模式的一种输入组合 ——
    //    第一版自造了第三个模式，既多出一个要自己编的标签，又与小程序行为不一致。
    [['length', t().queryByLW || '按体长或体重查询'], ['age', t().queryByAge || '按年龄查询']]
      .forEach(function (m) {
        o.push('<button class="chip ' + (c.mode === m[0] ? 'on' : '') + '" data-cmpmode="' + m[0] + '">' + h(m[1]) + '</button>');
      });
    o.push('</div>');
    if (!cals.length) {
      o.push('<div class="box err">' + h(c.mode === 'age' ? (t().hNoAgeCurve || '该物种暂无年龄曲线') : (t().hNoCaliberForMode || '该模式暂无可用的体长-体重曲线')) + '</div>');
      o.push('</div>');
      return o.join('');
    }
    // 口径
    o.push('<div class="muted" style="margin-top:12px">' + h(t().caliberCount || '测量口径') + '</div>');
    o.push('<div class="chips">' + cals.map(function (x) {
      return '<button class="chip ' + (c.caliber === x ? 'on' : '') + '" data-cmpcal="' + h(x) + '">' + h(calc.caliberLabel(x)) + '</button>';
    }).join('') + '</div>');
    // 分组（用户要求：给用户选择根据哪一组曲线查询的权力）
    if (groups.length) {
      o.push('<div class="muted" style="margin-top:12px">' + h(t().groupPickTitle || '参照分组') + '</div>');
      o.push('<div class="chips">');
      o.push('<button class="chip ' + (c.group === '' ? 'on' : '') + '" data-cmpgrp="">' + h(t().groupAll || '全部分组') + '</button>');
      groups.forEach(function (g) {
        o.push('<button class="chip ' + (c.group === g ? 'on' : '') + '" data-cmpgrp="' + h(g) + '">' + h(calc.groupLabel(g)) + '</button>');
      });
      o.push('</div>');
    }
    // 输入
    o.push('<div style="margin-top:12px">');
    if (c.mode === 'length') {
      o.push('<div class="field"><label>' + h(t().fieldLength || '体长 (mm)') + '</label><input class="input" id="inL" type="number" step="any" value="' + h(c.L) + '"></div>');
      o.push('<div class="field"><label>' + h(t().fieldWeight || '体重 (g)') + '（' + h(t().fbOptional || '可选') + '）</label><input class="input" id="inM" type="number" step="any" value="' + h(c.M) + '"></div>');
      o.push('<div class="tiny">' + h(t().helpLW || '') + '</div>');
    } else {
      o.push('<div class="field"><label>' + h(t().fieldAge || '年龄 (年)') + '</label><input class="input" id="inAge" type="number" step="any" value="' + h(c.age) + '"></div>');
      o.push('<div class="tiny">' + h(t().helpAge || '') + '</div>');
    }
    o.push('<button class="btn" data-cmpgo="1">' + h(t().btnQuery || '查询') + '</button>');
    o.push('<button class="btn ghost" data-cmprst="1">' + h(t().btnClear || '清空') + '</button>');
    o.push('</div>');
    if (c.hint) o.push('<div class="box err">' + h(c.hint) + '</div>');
    // 结果
    if (c.rows.length) {
      o.push('<hr class="sep"><h3>' + h(c.title) + '</h3>');
      o.push('<div class="scroll"><table class="tb"><thead><tr>' +
        '<th>' + h(t().thGroup || '分组') + '</th><th class="num">' + h(c.mode === 'weight' ? (t().thRefLength || '参照体长') : (t().thRefWeight || '参照体重')) + '</th>' +
        '<th class="num">' + h(t().thDelta || '偏差') + '</th><th>' + h(t().thSegment || '数据段') + '</th>' +
        '<th class="num">' + h(t().coverage || '覆盖度') + '</th></tr></thead><tbody>');
      c.rows.forEach(function (r) {
        var est = r.estText || (num(r.est, 1) + (c.mode === 'weight' ? ' mm' : ' g'));
        o.push('<tr class="' + (r.dup ? '' : '') + '"><td>' + h(locale === 'en' ? (r.labelEn || r.group) : (r.label || r.group)) +
          (r.interp ? ' <span class="pill interp">' + h(t().interpolated || '插值') + '</span>' : '') + '</td>' +
          '<td class="num">' + h(est) + '</td>' +
          '<td class="num">' + h(r.deltaText || '—') + '</td>' +
          '<td>' + h(r.segText || '') + '</td>' +
          '<td class="num">' + h(r.cov || '') + '</td></tr>');
      });
      o.push('</tbody></table></div>');
      if (c.mode === 'length' && c.rows.some(function (r) { return r.estW; })) {
        // ⚠️ i18n 把这句话拆成三段（weightFromGroup / 名称 / weightFromGroupEnd），
        //    因为小程序端 WXML 不能做字符串拼接。离线版这里同样按段拼，
        //    不要自己另写一句 —— 否则同一件事两处文案会各自漂移。
        o.push('<div class="tiny" style="margin-top:8px">' +
          c.rows.filter(function (r) { return r.estW; }).map(function (r) {
            return h(t().weightFromGroup || '取自「') + h(r.wGroup) + h(t().weightFromGroupEnd || '」') +
              ' → ' + h(r.estWText) + (r.wSameGroup ? '' : '（' + h(t().hFillWeight || '') + '）');
          }).join('；') + '</div>');
      }
      if (c.extrapolated) {
        // hExtrapolated / hExtrapolatedEnd 同样是分段文案
        o.push('<div class="box scope">' + h(t().hExtrapolated || '注意：有 ') +
          c.rows.filter(function (r) { return r.extrapolated; }).length +
          h(t().hExtrapolatedEnd || ' 条曲线属外推。') + '</div>');
      }
    }
    o.push('<div class="tiny" style="margin-top:8px">' + h(t().tableFootnote || '本表只报告与参照数据的偏离程度，不代表健康与否。') + '</div>');
    o.push('</div>');
    return o.join('');
  }
  // ================= 详情页 =================
  // ⚠️ 这里刻意**对齐微信小程序详情页的结构**，不自己发明：
  //      上方页签（体长-体重 / 年龄-体长 / 查询对照）
  //      → 曲线页签下：分组选择器 + **只显示选中的那一条曲线**
  //      → 查询对照页签下：对照表
  //      → 页尾两个可展开说明（测量口径 / 其他术语）
  //    之前这里是"把所有曲线一次堆出来"，既没法筛选，也没有口径与术语说明。

  /** 把一条曲线补齐成"可直接渲染"的形态（等价于小程序里的 decorate()）。 */
  function decorateCurve(c) {
    var o = {};
    var k;
    for (k in c) if (Object.prototype.hasOwnProperty.call(c, k)) o[k] = c[k];
    o.groupText = groupText(c);
    o.caliberTextX = calText(c);
    o.nTextX = (locale === 'en' ? c.nTextEn : c.nText) || '';
    o.tagClass = String(c.group).indexOf('wild') === 0 ? 'tag-wild' : 'tag-captive';
    o.coverageTextX = c.coverageText || '';
    o.coverageBasisX = (locale === 'en' ? c.coverageBasisEn : c.coverageBasis) || '';
    o.band95Text = (c.band95 === null || c.band95 === undefined) ? '' : ('±' + num(c.band95, 1) + '%');
    o.modelTextX = (locale === 'en' ? c.modelTextEn : c.modelText) || c.model || '';
    o.t95TextX = c.t95Text || '—';
    o.caveatTexts = caveatTexts(c);
    if (c.segments) {
      o.segments = c.segments.map(function (s) {
        return {
          // ⚠️⚠️ **数值字段必须原样带下去** —— 下游 chartLW() 要用 a 与 b 画曲线
          //     （M = a × L^b）。上一版只复制了展示字段，把 a/b 丢了 →
          //      图表 y 轴全是 NaN。6577 项测试全绿，是截图抓出来的。
          a: s.a, b: s.b, r2: s.r2, sd: s.sd, interp: !!s.interp,
          lo: s.lo, hi: s.hi,
          typeText: s.interp ? (t().interpolated || '插值') : (t().measured || '实测'),
          typeClass: s.interp ? 'tag-interp' : 'tag-wild',
          // ⚠️ 展示串必须在这里算好 —— 与小程序同一条规矩（那边是因为 WXML 不能调方法）
          eqText: 'M = ' + Number(s.a).toExponential(3) + ' × L^' + Number(s.b).toFixed(4),
          metricText: (s.r2 === null || s.r2 === undefined)
            ? (t().noMetrics || '')
            : (t().thR2 + ' ' + Number(s.r2).toFixed(4) + ' · ' + t().thSD + ' ' + Number(s.sd).toFixed(4)),
        };
      });
    }
    return o;
  }

  /** 当前物种在当前页签下可选的分组（每条曲线一组）。 */
  function groupsFor(sp, kind) {
    return (sp.curves || []).filter(function (c) { return c.kind === kind; })
      .map(function (c) { return decorateCurve(c); });
  }

  function tabsFor(sp) {
    var o = [];
    if ((sp.curves || []).some(function (c) { return c.kind === 'length_weight'; })) {
      o.push({ key: 'length_weight', label: t().tabLW || '体长-体重' });
    }
    if ((sp.curves || []).some(function (c) { return c.kind === 'age_length'; })) {
      o.push({ key: 'age_length', label: t().tabAL || '年龄-体长' });
    }
    o.push({ key: 'compare', label: t().tabCompare || '查询对照' });
    return o;
  }

  function curveCardView(cu, withChart) {
    var o = [];
    o.push('<div class="card">');
    o.push('<h2>' + h(t().curve || '曲线') + '</h2>');
    if (withChart) {
      o.push(cu.kind === 'length_weight' ? chartLW(cu) : chartAge(cu));
    }
    if (cu.coverage) {
      o.push('<div class="tiny" style="margin-top:8px">' +
        '<span class="tag ' + h(cu.tagClass) + '">' + h(t().coverage || '数据覆盖度') + ' ' +
        h(cu.coverageTextX) + '</span></div>');
      if (cu.coverageBasisX) o.push('<div class="tiny">' + h(cu.coverageBasisX) + '</div>');
    }
    if (cu.segments && cu.segments.length) {
      o.push('<div class="muted" style="margin-top:12px">' + h(t().lwEquationTitle || '') + '</div>');
      cu.segments.forEach(function (sg) {
        o.push('<div class="seg-body">');
        o.push('<div><span class="tag ' + h(sg.typeClass) + '">' + h(sg.typeText) + '</span>' +
          '<span class="seg-range">' + sg.lo + ' – ' + sg.hi + ' mm</span></div>');
        o.push('<div class="mono seg-eq">' + h(sg.eqText) + '</div>');
        o.push('<div class="tiny">' + h(sg.metricText) + '</div>');
        o.push('</div>');
      });
      o.push('<div class="muted">' + h(t().interpolatedNote || '') + '</div>');
    }
    if (cu.kind === 'age_length') {
      o.push('<div class="muted" style="margin-top:12px">' + h(cu.modelTextX) + '</div>');
      o.push('<div class="muted">t95：' + h(cu.t95TextX) + '</div>');
    }
    // 波动范围：没有就明说「原文未报告」，不能让用户以为不确定度为零
    if (cu.band95Text) {
      o.push('<div class="muted" style="margin-top:8px">' + h(t().band95Label || '') + h(cu.band95Text) + '</div>');
    } else {
      o.push('<div class="muted" style="margin-top:8px">' + h(t().band95Missing || '') + '</div>');
    }
    if (cu.caveatTexts && cu.caveatTexts.length) {
      o.push('<div class="box caveat"><b>' + h(t().caveatTitle || '需要注意') + '</b><ul>' +
        cu.caveatTexts.map(function (x) { return '<li>' + h(x) + '</li>'; }).join('') + '</ul></div>');
    }
    o.push('<div class="tiny" style="margin-top:8px">' + h(t().sourceLabel || '来源') + '：' +
      h(cu.source || '') + '（' + h(cu.evidence || '') + '）</div>');
    o.push('</div>');
    return o.join('');
  }

  function viewDetail(sp) {
    if (!sp) {
      return '<div class="card"><div class="box err">' + h(t().notFound || '找不到该物种') +
        '</div><a href="#/">← ' + h(t().appTitle || '返回') + '</a></div>';
    }
    var o = [];
    // ---- 标题卡 ----
    o.push('<div class="card"><h2 style="margin:0">' + h(spName(sp)) +
      '<span class="lt">' + h(sp.latin || '') + '</span></h2>');
    o.push('<div class="tiny" style="margin-top:4px">' + h(taxonLabel(sp.taxon)) + ' · ' + h(sp.en || '') + '</div>');
    if (sp.scopeShort) {
      o.push('<div class="box scope">' + h(locale === 'en' ? (sp.scopeShortEn || sp.scopeShort) : sp.scopeShort) + '</div>');
    }
    o.push('</div>');

    // ---- 无数据物种：说明 + 文献 + 征集告示 ----
    if (!sp.curves || !sp.curves.length) {
      o.push('<div class="card">');
      o.push('<div class="big-none">' + h(t().speciesEmptyTitle || t().layerEmptyTitle || '') + '</div>');
      o.push('<div class="muted" style="margin-top:8px">' + h(t().speciesEmptyBody || '') + '</div>');
      if (sp.refs && sp.refs.length) {
        o.push('<div class="tiny" style="margin-top:12px"><b>' + h(t().refsTitle || '查过的文献') +
          '</b><ul>' + sp.refs.map(function (x) { return '<li>' + h(x) + '</li>'; }).join('') + '</ul></div>');
      }
      o.push(donateBox());
      o.push('</div>');
      o.push(docAccordions(sp));
      o.push(footerLinks());
      return o.join('');
    }

    // ---- 页签 ----
    var tabs = tabsFor(sp);
    if (!tabs.some(function (x) { return x.key === S.tab; })) S.tab = tabs[0].key;
    o.push('<div class="card"><div class="row tabs">');
    tabs.forEach(function (x) {
      o.push('<button class="tab ' + (S.tab === x.key ? 'tab-on' : '') + '" data-tabk="' + h(x.key) + '">' +
        h(x.label) + '</button>');
    });
    o.push('</div></div>');

    if (S.tab === 'compare') {
      o.push(cmpPanel(sp));
    } else {
      var list = groupsFor(sp, S.tab);
      if (!list.length) {
        // 本层无数据 —— 这里正是最该放征集告示的地方
        o.push('<div class="card">');
        o.push('<div class="big-none">' + h(t().layerEmptyTitle || '') + '</div>');
        o.push('<div class="muted" style="margin-top:8px">' + h(t().layerEmptyBody1 || '') + '</div>');
        o.push('<div class="muted" style="margin-top:8px">' + h(t().layerEmptyBody2 || '') + '</div>');
        o.push(donateBox());
        o.push('</div>');
      } else {
        if (S.gi >= list.length) S.gi = 0;
        // ---- 分组选择器（这是用户要的"按分组筛选"）----
        o.push('<div class="card"><h2>' + h(t().groupsCount || '分组') + '（' + list.length + '）</h2>');
        o.push('<div class="row" style="flex-wrap:wrap">');
        list.forEach(function (g, i) {
          o.push('<button class="chip ' + (S.gi === i ? 'chip-on' : '') + '" data-gi="' + i + '">' +
            '<span class="' + h(g.tagClass) + '">' + h(g.groupText) + '</span>' +
            '<span class="muted" style="margin-left:8px">' + h(g.nTextX) + ' · ' + h(g.caliberTextX) + '</span>' +
            (g.caliberInferred ? '<span class="tag tag-interp" style="margin-left:8px">' +
              h(t().caliberInferredTag || '口径未说明') + '</span>' : '') +
            '</button>');
        });
        o.push('</div></div>');
        // ---- 选中的那一条曲线 ----
        o.push(curveCardView(list[S.gi], true));
      }
      o.push(lowRelSection(sp, S.tab));
      o.push('<div class="card"><div class="muted">' + h(t().goCompareHint || '') + '</div></div>');
    }

    o.push(docAccordions(sp));
    o.push(footerLinks());
    return o.join('');
  }

  /** 未发表数据（U1）：与小程序同一套呈现，**默认折叠**。 */
  function lowRelSection(sp, kind) {
    var low = (sp.lowRelCurves || []).filter(function (c) { return c.kind === kind; });
    if (!low.length) return '';
    var o = [];
    o.push('<div class="card lowrel-card">');
    o.push('<h2>' + h(t().lowRelTitle || '未发表数据') + '</h2>');
    o.push('<div class="muted">' + h(t().lowRelLead || '') + '</div>');
    o.push('<button class="lowrel-toggle" data-lowtoggle="1">' +
      h(S.lowOpen ? (t().lowRelClose || '收起') : (t().lowRelOpen || '展开查看')) +
      (S.lowOpen ? '' : '（' + low.length + '）') + '</button>');
    if (S.lowOpen) {
      o.push('<div class="lowrel-warn">' +
        [t().lowRelWarnNoMix, t().lowRelWarnSingle, t().lowRelWarnSample, t().lowRelWhy]
          .filter(Boolean).map(function (x) { return '<div class="lowrel-warn-item">' + h(x) + '</div>'; }).join('') +
        '</div>');
      low.forEach(function (c) {
        var d = decorateCurve(c);
        o.push('<div class="lowrel-item">');
        o.push('<div class="muted">' + h(d.groupText) + ' · ' + h(d.caliberTextX) + ' · ' + h(d.nTextX) + '</div>');
        if (c.kind === 'length_weight') {
          (d.segments || []).forEach(function (sg) {
            o.push('<div class="tiny mono">' + sg.lo + '–' + sg.hi + ' mm　' + h(sg.eqText) + '</div>');
          });
        } else {
          o.push('<div class="muted">' + h(d.modelTextX) + '　t95：' + h(d.t95TextX) + '</div>');
        }
        o.push('<div class="muted" style="margin-top:8px">' + h(t().sourceLabel || '来源') + '：' + h(c.source || '') + '</div>');
        o.push('</div>');
      });
    }
    o.push('</div>');
    return o.join('');
  }

  /** 页尾两个可展开说明（测量口径 / 其他术语）—— 之前离线版完全没有。 */
  function docAccordions() {
    var o = [];
    o.push('<div class="card">');
    o.push('<div class="accordion-head" data-doc="caliber">' +
      '<span class="h2" style="margin:0">' + h(t().docCaliberTitle || '测量口径') + '</span>' +
      '<span class="arrow">' + h(S.docCaliber ? (t().collapse || '收起') : (t().expand || '展开')) + '</span></div>');
    o.push('<div class="muted" style="margin-top:6px">' + h(t().docCaliberOneLine || '') + '</div>');
    if (S.docCaliber) {
      o.push('<div class="doc-body">');
      o.push('<div class="muted">' + h(t().docCaliberLead || '') + '</div>');
      o.push('<div class="doc-item"><div class="doc-t">' + h(t().docCaliberSVLTitle || '') + '</div>' +
        '<div class="muted">' + h(t().docCaliberSVLBody || '') + '</div></div>');
      o.push('<div class="doc-item"><div class="doc-t">' + h(t().docCaliberTurtleTitle || '') + '</div>' +
        '<div class="muted">' + h(t().docCaliberTurtleBody || '') + '</div></div>');
      o.push('<div class="muted" style="margin-top:10px"><b>' + h(t().docCaliberWhyStrong || '') + '</b>' +
        h(t().docCaliberWhyBody || '') + '</div>');
      o.push('<div class="muted" style="margin-top:10px"><b>' + h(t().docCaliberListStrong || '') + '</b>' +
        h(t().docCaliberListBody || '') + '</div>');
      o.push('</div>');
    }
    o.push('</div>');

    o.push('<div class="card">');
    o.push('<div class="accordion-head" data-doc="terms">' +
      '<span class="h2" style="margin:0">' + h(t().docTermsTitle || '其他术语') + '</span>' +
      '<span class="arrow">' + h(S.docTerms ? (t().collapse || '收起') : (t().expand || '展开')) + '</span></div>');
    if (S.docTerms) {
      o.push('<div class="doc-body">' +
        (t().docTerms || []).map(function (x) { return '<div class="muted">' + h(x) + '</div>'; }).join('') +
        '</div>');
    }
    o.push('</div>');
    return o.join('');
  }

  function footerLinks() {
    return '<div style="margin:16px 0"><a href="#/">← ' + h(t().chooseSpecies || '返回物种列表') + '</a></div>' +
      '<div class="foot">' + h(t().disclaimer || '') + '</div>';
  }

  // ---------------- 列表页 ----------------
  function viewIndex() {
    var q = S.q.trim().toLowerCase();
    var list = SPECIES.filter(function (sp) {
      if (S.taxon && sp.taxon !== S.taxon) return false;
      if (q && (INDEX[sp.id] || '').indexOf(q) < 0) return false;
      return true;
    });
    var o = [];
    o.push('<div class="card">');
    o.push('<div class="muted">' + h(t().appIntro || '') + '</div>');
    o.push('<div style="margin-top:10px"><input class="search" id="q" type="search" placeholder="' +
      h(t().searchPlaceholder || '搜索物种（中文名 / 俗名 / 学名 / 拼音）') + '" value="' + h(S.q) + '" autocomplete="off"></div>');
    o.push('<div class="chips">');
    [['', t().taxonAll || '全部'], ['turtle', t().taxonTurtle || '龟'], ['snake', t().taxonSnake || '蛇'],
      ['lizard', t().taxonLizard || '蜥蜴·守宫'], ['amphibian', t().taxonAmphibian || '蛙·蝾螈']].forEach(function (x) {
      o.push('<button class="chip ' + (S.taxon === x[0] ? 'on' : '') + '" data-taxon="' + x[0] + '">' + h(x[1]) + '</button>');
    });
    o.push('</div>');
    o.push('<div class="tiny" style="margin-top:8px">' + list.length + ' / ' + SPECIES.length + '</div>');
    o.push('</div>');
    if (!list.length) {
      o.push('<div class="card"><div class="muted">' + h(t().searchNoMatch || '没有匹配的物种') + '</div>' +
        '<div class="tiny" style="margin-top:6px">' + h(t().searchNoMatchHint || '可以到「反馈」页告诉我们你想加的物种。') + '</div></div>');
    }
    list.forEach(function (sp) {
      var n = (sp.curves || []).length;
      var has = n > 0;
      o.push('<button class="sp" data-go="' + h(sp.id) + '">' +
        '<div class="nm">' + h(spName(sp)) + '<span class="lt">' + h(sp.latin || '') + '</span>' +
        '<span class="badge ' + (has ? 'has' : 'none') + '">' + (has ? (n + ' 条曲线') : (t().noData || '暂无数据')) + '</span></div>' +
        '<div class="meta">' + h(taxonLabel(sp.taxon)) + (sp.caliberSummary ? ' · ' + h(sp.caliberSummary) : '') + '</div>' +
        '</button>');
    });
    o.push('<div class="foot">' + h(t().disclaimer || '') + '<br><a href="#/feedback">' + h(t().feedbackEntry || '希望增加哪个物种？') + '</a></div>');
    return o.join('');
  }

  // ---------------- 反馈页（mailto） ----------------
  // ⚠️ 这里**不调用任何剪贴板 / 隐私接口** —— 用 mailto: 打开本机邮件客户端，
  //    同时把正文用 <pre> 展示出来，用户也可自行选中复制。
  //    离线场景下这是唯一不需要服务器的送达方式。
  function loadFb() {
    var v = { species: '', note: '' };
    try {
      v.species = localStorage.getItem('fb_species') || '';
      v.note = localStorage.getItem('fb_note') || '';
    } catch (e) { /* 忽略 */ }
    return v;
  }
  function saveFb(v) {
    try {
      localStorage.setItem('fb_species', v.species || '');
      localStorage.setItem('fb_note', v.note || '');
    } catch (e) { /* 忽略 */ }
  }
  function fbText() {
    var v = loadFb();
    return '【' + (t().fbSummaryTitle || '我希望增加的物种') + '】\n' +
      (t().fbFieldSpecies || '物种名') + ' ' + (v.species || '—') + '\n' +
      (v.note ? (t().fbFieldNote || '补充说明') + ' ' + v.note + '\n' : '') +
      '\n— 来自「爬宠体型参照」离线版 ' + APP_VER;
  }
  /**
   * 征集数据的告示。
   * 放两处：反馈页，以及「本层暂无可靠数据」的详情页 ——
   * 后者价值更高：正在看这个空缺的人，恰恰最可能手里有一批数据。
   * 口径刻意写成「有较大的种群」，**不预设对方是繁殖者** ——
   * 有规模的玩家同样可以提供（用户明确提过这一点）。
   */
  function donateBox(variant) {
    // 反馈页与详情页**场景不同**：详情页可以说"这个物种"，
    // 反馈页用户还没说是什么物种，只能泛指。所以文案分两套。
    var isFb = variant === 'fb';
    return '<div class="donate-box">' +
      '<div class="donate-title">' + h(isFb ? (t().donateFbTitle || '') : (t().donateTitle || '')) + '</div>' +
      '<div class="donate-body">' + h(isFb ? (t().donateFbBody || '') : (t().donateBody || '')) + '</div>' +
      '<div class="donate-body">' + h(t().donateWho || '') + '</div>' +
      '<div class="donate-how">' + h(t().donateHow || '') + '</div>' +
      '<div class="donate-mail">' + h(t().donateMail || '') + '</div>' +
      '</div>';
  }

  function viewFeedback() {
    var v = loadFb();
    var txt = fbText();
    var subj = '爬宠体型参照 · 希望增加的物种';
    var mailto = 'mailto:' + FEEDBACK_EMAIL +
      '?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(txt);
    var o = [];
    o.push('<div class="card"><h2>' + h(t().fbTitle || '想要哪个物种') + '</h2>');
    // ⚠️ 顺序：开场白 → 告示。第一版把告示插在开场白**之前**，读起来很突兀。
    o.push('<div class="muted">' + h(t().fbIntro || '') + '</div>');
    // 反馈页用 'fb' 变体：这里用户还没说是什么物种，不能写「这个物种」
    o.push(donateBox('fb'));
    o.push('<div class="box scope">' + h(t().fbMailHint || '') + '<br><b>' + h(FEEDBACK_EMAIL) + '</b></div>');
    o.push('<div class="field"><label>' + h(t().fbFieldSpecies || '物种名') + '</label>' +
      '<input class="input" id="fbSpecies" value="' + h(v.species) + '" placeholder="' + h(t().fbPhSpecies || '') + '"></div>');
    o.push('<div class="muted tiny">' + h(t().fbSpeciesHelp || '') + '</div>');
    o.push('<div class="field"><label>' + h(t().fbFieldNote || '补充说明') + '（' + h(t().fbOptional || '可选') + '）</label>' +
      '<textarea class="input" id="fbNote" placeholder="' + h(t().fbPhNote || '') + '">' + h(v.note) + '</textarea></div>');
    o.push('<button class="btn" data-fbmail="1">' + h(t().fbSubmitMail || '用邮件发送') + '</button>');
    o.push('<button class="btn ghost" data-fbshow="1">' + h(t().fbCopy || '显示反馈内容') + '</button>');
    o.push('<div class="field" style="margin-top:14px"><label>' + h(t().fbCopyTextTitle || '反馈内容') + '</label>' +
      '<pre class="mirror" id="fbMirror">' + h(txt) + '</pre></div>');
    o.push('<div class="tiny">' + h(t().fbLongPress || '') + '</div>');
    o.push('</div>');
    o.push('<div style="margin:16px 0"><a href="#/">← ' + h(t().chooseSpecies || '返回物种列表') + '</a></div>');
    return o.join('');
  }

  // ---------------- 渲染与事件 ----------------
  var app = null;
  function render() {
    if (!app) app = document.getElementById('app');
    var r = cur();
    var html = '';
    if (r.view === 'detail') html = viewDetail(byId(r.id));
    else if (r.view === 'feedback') html = viewFeedback();
    else html = viewIndex();
    app.innerHTML = '<div class="wrap">' + html + '</div>';
    fillBanner();
    // 列表页：保持搜索框焦点
    if (r.view === 'index' && S.q) {
      var qi = document.getElementById('q');
      if (qi) { qi.focus(); try { qi.setSelectionRange(qi.value.length, qi.value.length); } catch (e) {} }
    }
  }

  document.addEventListener('click', function (ev) {
    var el = ev.target;
    while (el && el !== document.body && !(el.dataset && (el.dataset.go || el.dataset.taxon !== undefined ||
      el.dataset.cmpmode || el.dataset.cmpcal !== undefined || el.dataset.cmpgrp !== undefined ||
      el.dataset.cmpgo || el.dataset.cmprst || el.dataset.fbmail || el.dataset.fbshow ||
      el.dataset.lowtoggle || el.dataset.tabk !== undefined ||
      el.dataset.gi !== undefined || el.dataset.doc !== undefined))) {
      el = el.parentNode;
    }
    if (!el || el === document.body) return;
    var d = el.dataset || {};
    var r = cur();
    var sp = r.view === 'detail' ? byId(r.id) : null;
    if (d.go !== undefined) { go('#/s/' + encodeURIComponent(d.go)); return; }
    if (d.taxon !== undefined) { S.taxon = d.taxon; render(); return; }
    // 低可靠区块的展开/收起。默认折叠，用户主动点才开（红线 R2）。
    if (d.lowtoggle) { S.lowOpen = !S.lowOpen; render(); return; }
    // 页签切换：换页签时分组下标归零，否则会停在上一页签的下标上
    if (d.tabk !== undefined) { S.tab = d.tabk; S.gi = 0; render(); return; }
    // 分组切换（用户要的「按分组筛选」）
    if (d.gi !== undefined) { S.gi = parseInt(d.gi, 10) || 0; render(); return; }
    // 页尾说明展开/收起
    if (d.doc === 'caliber') { S.docCaliber = !S.docCaliber; render(); return; }
    if (d.doc === 'terms') { S.docTerms = !S.docTerms; render(); return; }
    if (d.cmpmode) { ensureCmp(sp).mode = d.cmpmode; ensureCmp(sp).rows = []; render(); return; }
    if (d.cmpcal !== undefined) { ensureCmp(sp).caliber = d.cmpcal; ensureCmp(sp).group = ''; ensureCmp(sp).rows = []; render(); return; }
    if (d.cmpgrp !== undefined) { ensureCmp(sp).group = d.cmpgrp; ensureCmp(sp).rows = []; render(); return; }
    if (d.cmprst) { var c = ensureCmp(sp); c.L = ''; c.M = ''; c.age = ''; c.rows = []; c.hint = ''; render(); return; }
    if (d.cmpgo) {
      var c2 = ensureCmp(sp);
      var iL = document.getElementById('inL'), iM = document.getElementById('inM'), iA = document.getElementById('inAge');
      if (iL) c2.L = iL.value;
      if (iM) c2.M = iM.value;
      if (iA) c2.age = iA.value;
      runCompare(sp);
      render();
      return;
    }
    if (d.fbmail) {
      var v = { species: (document.getElementById('fbSpecies') || {}).value || '',
                note: (document.getElementById('fbNote') || {}).value || '' };
      saveFb(v);
      if (!v.species.trim()) { alert(t().fbEmpty || '请先填写物种名'); return; }
      render();   // 先刷新，让 <pre> 反映最新内容
      var txt = fbText();
      location.href = 'mailto:' + FEEDBACK_EMAIL + '?subject=' +
        encodeURIComponent('爬宠体型参照 · 希望增加的物种') + '&body=' + encodeURIComponent(txt);
      return;
    }
    if (d.fbshow) {
      var m = document.getElementById('fbMirror');
      if (m) { m.scrollIntoView({ behavior: 'smooth', block: 'center' }); m.style.borderColor = '#2f6f4e'; }
      return;
    }
  });

  document.addEventListener('input', function (ev) {
    var el = ev.target;
    if (el && el.id === 'q') { S.q = el.value; render(); return; }
    if (el && (el.id === 'fbSpecies' || el.id === 'fbNote')) {
      saveFb({ species: (document.getElementById('fbSpecies') || {}).value || '',
               note: (document.getElementById('fbNote') || {}).value || '' });
    }
  });
  // 让回车直接触发查询
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Enter' && ev.target && /^in(L|M|Age)$/.test(ev.target.id || '')) {
      var r = cur();
      if (r.view !== 'detail') return;
      var sp = byId(r.id); if (!sp) return;
      var c = ensureCmp(sp);
      if (c.mode === 'age') c.age = ev.target.value;
      else if (ev.target.id === 'inL') c.L = ev.target.value;
      else c.M = ev.target.value;
      runCompare(sp); render();
    }
  });

  // 语言切换按钮
  document.addEventListener('click', function (ev) {
    if (ev.target && ev.target.id === 'lang') {
      setLocale(locale === 'zh' ? 'en' : 'zh');
      document.documentElement.lang = locale === 'zh' ? 'zh' : 'en';
      render();
    }
  });

  // ⚠️⚠️ **必须监听 hashchange**。
  //    第一版漏了它 —— 点击物种会改 `location.hash`，浏览器地址变了，
  //    但**页面完全不会重新渲染**，等于「导航失灵」。
  //    这类 bug 单看首屏截图是发现不了的（首屏正常），只有真的点一下才暴露。
  window.addEventListener('hashchange', function () {
    // 换页/换物种时把低可靠区块**收回折叠**，
    // 否则上一个物种的展开状态会串到下一个物种（等于变相"默认展开"）。
    S.lowOpen = false;
    // 同样要重置页签与分组 —— 否则上一条记录的页签会串到下一条，
    // 比如从只有年龄曲线的物种切到只有体长-体重的物种，会停在空页签上。
    S.tab = 'length_weight';
    S.gi = 0;
    window.scrollTo(0, 0);
    render();
  });

  /** 填顶部横幅文案。语言切换后要跟着变，所以在 render 里同步刷新。 */
  function fillBanner() {
    var tx = document.getElementById('collectText');
    var lk = document.getElementById('collectLink');
    if (tx) tx.textContent = t().bannerText || '';
    if (lk) lk.textContent = (t().bannerLink || '') + ' ›';
  }

  // 初始渲染
  document.documentElement.lang = locale === 'zh' ? 'zh' : 'en';
  render();
})();
