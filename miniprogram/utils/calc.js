// 爬宠体型参照 · 核心计算（纯逻辑，不依赖任何小程序 API，可单独测试）
//
// 设计原则（见 spec/37_数据卡格式规范.md）：
//   · 曲线由多个区间拼成，须按体长选对区间；
//   · 【口径不可混算】—— 对照表只在同口径内比较；
//   · 只报偏差程度，不做任何「正常/异常」判断。

const T95_CONST = Math.log(20); // ln(20) ≈ 2.9957

// 口径统一显示为「中文（英文缩写）」，避免用户看不懂 SCL / CLmax 这类缩写
const CALIBER_ZH = {
  SCL: ['直甲长', 'SCL'],
  CLmax: ['最大甲长', 'CLmax'],
  midline_CL: ['中线甲长', 'midline CL'],
  MCL: ['最大甲壳长', 'MCL'],
  PL: ['腹甲长', 'PL'],
  SVL: ['吻肛长', 'SVL'],
  TL: ['全长', 'TL'],
};
function caliberLabel(code) {
  const v = CALIBER_ZH[code];
  return v ? v[0] + '（' + v[1] + '）' : String(code);
}
function groupLabel(group) {
  const m = {
    wild_male: '野外·雄性', wild_female: '野外·雌性', wild_mixed: '野外·混合',
    captive_male: '家养·雄性', captive_female: '家养·雌性', captive_mixed: '家养·混合',
  };
  return m[group] || String(group);
}

/**
 * 按体长选区间。区间为闭区间。
 * @returns {{seg:object|null, out:boolean}}
 */
function pickByLength(curve, L) {
  const segs = curve.segments || [];
  for (let i = 0; i < segs.length; i++) {
    if (L >= segs[i].lo && L <= segs[i].hi) return { seg: segs[i], out: false };
  }
  return { seg: null, out: true };
}

/** 由体长估计体重（g）。L 单位 mm。 */
function estWeight(curve, L) {
  const r = pickByLength(curve, L);
  if (!r.seg) return { ok: false, reason: 'out_of_range' };
  const M = r.seg.a * Math.pow(L, r.seg.b);
  return { ok: true, value: M, seg: r.seg, interpolated: !!r.seg.interp };
}

/** 由体重逆推体长（mm）。各区间内 M 对 L 单调递增，逐段判断值域。 */
function estLength(curve, M) {
  const segs = curve.segments || [];
  for (let i = 0; i < segs.length; i++) {
    const s = segs[i];
    const mLo = s.a * Math.pow(s.lo, s.b);
    const mHi = s.a * Math.pow(s.hi, s.b);
    if (M >= mLo && M <= mHi) {
      const L = Math.pow(M / s.a, 1 / s.b);
      return { ok: true, value: L, seg: s, interpolated: !!s.interp };
    }
  }
  return { ok: false, reason: 'out_of_range' };
}

/**
 * 按模型求 L(t)。**必须按 curve.model 分派。**
 *
 * ⚠️ 这里曾经无条件用 von Bertalanffy 公式。而 schema 与校验器允许 5 种模型
 * （von_bertalanffy / gompertz / logistic / richards / two_segment_linear），
 * 于是一条 gompertz 记录会被**当成 VBGF 静默算出错误数字** —— 比崩溃更危险。
 * 现在：支持的分派计算，不支持的**明确返回 ok:false**，绝不猜。
 *
 * 各模型参数约定与生长曲线形状（**体长一律 mm、时间一律年**）：
 *
 *   von_bertalanffy    Linf, k, t0, L0              L = Linf − (Linf − L0)·e^(−k(t − t0))
 *   gompertz           Linf, k, ti                  L = Linf·e^(−e^(−k(t − ti)))
 *   logistic           Linf, k, ti                  L = Linf / (1 + e^(−k(t − ti)))
 *   two_segment_linear m1_mm_per_year, m2_mm_per_year, t_break_years, L0_mm
 *                      t ≤ tb : L = L0 + m1·t
 *                      t >  tb : L = L0 + m1·tb + m2·(t − tb)
 *
 * ⚠️ **`two_segment_linear` 是「描述性」模型，不是渐近生长函数**（2026-10-07 新增，应六角恐龙而加）：
 * 有些动物（如六角恐龙）的生长是「**先近线性上升、到某个年龄后骤然转平**」的两段形态，
 * 用三种渐近模型拟合时 **RMSE 看着能接受，却在转折点附近系统性偏低** ——
 * 六角恐龙在数据最密的 19–20 月处**低估 17–21%**，会把一只正常的 19 月龄个体报成偏差。
 * 本项目以**误报率**为判定标准，故宁可新增一个忠实描述数据的分段模型。
 * **代价**：它没有渐近线 → `Linf` 与 `t95` 在数学上**无定义**（见 `t95Of`）。
 *
 * 三种渐近模型（VBGF/Gompertz/logistic）单调递增，且 ti 是拐点年龄（曲线在此处斜率最大）。
 * 同一组数据用不同模型拟合出的参数不可互相代入。
 */
const SUPPORTED_MODELS = {
  von_bertalanffy: 1, gompertz: 1, logistic: 1, two_segment_linear: 1,
};

function estLengthByAge(curve, t) {
  const p = curve.params || {};
  const model = curve.model || 'von_bertalanffy';

  // ⚠️ `two_segment_linear` 没有 Linf / k，必须在下面那个「参数不全」的判断**之前**处理，
  //    否则会先被 !Linf || !k 拦下、返回 no_model。
  if (model === 'two_segment_linear') {
    const m1 = p.m1_mm_per_year, m2 = p.m2_mm_per_year, tb = p.t_break_years;
    if (m1 == null || m2 == null || tb == null) return { ok: false, reason: 'no_model' };
    const L0 = (p.L0_mm === undefined || p.L0_mm === null) ? 0 : p.L0_mm;
    const Lb = (p.L_at_break_mm === undefined || p.L_at_break_mm === null)
      ? L0 + m1 * tb : p.L_at_break_mm;
    const v = t <= tb ? L0 + m1 * t : Lb + m2 * (t - tb);
    // 体长不可能为负（t 为负或参数异常时）；宁可拒答也不报负数
    if (!(v > 0)) return { ok: false, reason: 'degenerate' };
    return { ok: true, value: v, model: model };
  }

  const Linf = p.Linf;
  const k = p.k;
  if (!Linf || !k) return { ok: false, reason: 'no_model' };
  if (!SUPPORTED_MODELS[model]) {
    // richards 等尚未实现 —— 宁可拒答，也不能套错公式
    return { ok: false, reason: 'unsupported_model', model: model };
  }

  if (model === 'gompertz') {
    const ti = p.ti || 0;
    return { ok: true, value: Linf * Math.exp(-Math.exp(-k * (t - ti))), model: model };
  }
  if (model === 'logistic') {
    const ti = p.ti || 0;
    return { ok: true, value: Linf / (1 + Math.exp(-k * (t - ti))), model: model };
  }

  // von Bertalanffy
  const t0 = p.t0 || 0;
  const L0 = (p.L0 === undefined || p.L0 === null) ? 0 : p.L0;
  return { ok: true, value: Linf - (Linf - L0) * Math.exp(-k * (t - t0)), model: model };
}

/**
 * 该曲线达到 Linf 的 95% 所需的年龄。
 *
 * ⚠️ **必须按模型算**。`ln(20)/k` 只是 **VBGF 在 L0=0 时**的退化解；
 * 对 Gompertz / logistic 用它会算错（奶蛇那条 Gompertz：惯例式 11.1 年 vs 严格解 12.97 年，差 17%）。
 * 三种渐近模型都有闭式解（令 L(t) = 0.95·Linf）：
 *   von_bertalanffy  t0 + ln((Linf − L0)/(0.05·Linf)) / k
 *   gompertz         ti + ln(1/0.0512933)/k = ti + 2.970195/k
 *   logistic         ti + ln(19)/k          = ti + 2.944439/k
 * 返回 null 表示参数不足、模型未实现、**或该模型在数学上没有 t95**。
 *
 * ⚠️ **`two_segment_linear` 恒返回 null**（2026-10-07）：它**没有渐近线**，
 * 第二条线段的斜率 m2 虽小但非零，体长会一直线性增长下去 ——
 * 「达到渐近体长 95% 的年龄」**在数学上不存在**。
 * **硬套一个数字（例如拿 m2 代进 ln(20)/k）是错的**：那会给出一个既非该模型、
 * 也非任何已定义量的数值，而界面会把它当成「该曲线达到成熟所需年龄」展示给用户。
 * 故这里返回 null，由界面显示「—」，并由**记录里显式存的 `coverage.domain`** 提供覆盖度分母
 * （`coverage.domain` 本来就是逐记录存储的，不依赖重算）。
 */
function t95Of(curve) {
  const p = (curve && curve.params) || {};
  const model = (curve && curve.model) || 'von_bertalanffy';
  const Linf = p.Linf, k = p.k;
  if (!isModelSupported(model)) return null;
  // 两段线性没有渐近线 → 没有 t95。绝不硬造数字。
  if (model === 'two_segment_linear') return null;
  if (!Linf || !k) return null;
  if (model === 'gompertz') return (p.ti || 0) + Math.log(1 / 0.0512933) / k;
  if (model === 'logistic') return (p.ti || 0) + Math.log(19) / k;
  const t0 = p.t0 || 0;
  const L0 = (p.L0 === undefined || p.L0 === null) ? 0 : p.L0;
  if (L0 >= Linf) return t0 + T95_CONST / k;   // 参数异常时退回惯例式，不返回 NaN
  return t0 + Math.log((Linf - L0) / (0.05 * Linf)) / k;
}

/** 该模型是否已实现（给 UI 判断要不要显示该条曲线）。 */
function isModelSupported(model) {
  return !!SUPPORTED_MODELS[model || 'von_bertalanffy'];
}

/** 偏差百分比：(实测 - 估计) / 估计 × 100 */
function deviation(obs, est) {
  if (!est) return null;
  return ((obs - est) / est) * 100;
}

function fmt(x, digits) {
  if (x === null || x === undefined || isNaN(x)) return '—';
  const d = digits === undefined ? 2 : digits;
  return Number(x).toFixed(d);
}

/** 该物种在某一层上用到的全部口径（去重保序） */
function calibersOf(curves, kind) {
  const out = [];
  (curves || []).forEach((c) => {
    if (c.kind === kind && out.indexOf(c.caliber) < 0) out.push(c.caliber);
  });
  return out;
}

/** 该物种在某一层、某一口径下的全部分组（去重保序） */
function groupsOf(curves, kind, caliber) {
  const out = [];
  (curves || []).forEach((c) => {
    if (c.kind === kind && c.caliber === caliber && out.indexOf(c.groupZh) < 0) out.push(c.groupZh);
  });
  return out;
}

/** 来源压缩成短标签，用于表内区分同组的不同种群 */
function shortSrc(s) {
  if (!s) return '';
  let t = s;
  const cut1 = t.indexOf(' (');
  if (cut1 > 0) t = t.slice(0, cut1);
  const cut2 = t.indexOf(',');
  if (cut2 > 0) t = t.slice(0, cut2);
  t = t.trim();
  return t.length > 30 ? t.slice(0, 30) + '…' : t;
}

/**
 * 若同一分组名在表中出现多次（例如赫尔曼陆龟的两份野生年龄曲线来自不同种群），
 * 则给每行补一个可区分的 label；否则 label 就等于分组名。
 */
function labelize(rows) {
  const count = {};
  rows.forEach((r) => { count[r.group] = (count[r.group] || 0) + 1; });
  rows.forEach((r) => {
    const dup = count[r.group] > 1 && r.sourceShort;
    r.dup = !!dup;
    // 中文标签（默认）
    r.label = dup ? (r.group + '（' + r.sourceShort + '）') : r.group;
    // 英文标签：供 i18n 使用
    r.labelEn = dup ? ((r.groupEn || r.group) + ' (' + r.sourceShort + ')') : (r.groupEn || r.group);
  });
  return rows;
}

/**
 * 【同长对照】给定体长，列出【同一口径下】所有分组的参照体重。
 * 不同口径的曲线绝不会出现在同一张表里。
 * @param {Array}  curves  该物种全部曲线
 * @param {string} caliber 口径
 * @param {number} L       体长 mm
 * @param {number} [obsM]  可选：实测体重 g（给了就算偏差）
 * @param {string} [groupFilter] 可选：只看某一分组（'' 或省略 = 全部分组）。
 *        ⚠️ 2026-10-07 新增 —— 用户明确要求「**给用户选择根据哪一组的曲线进行查询的权力**」。
 *        此前表格虽然列出所有分组，但用户无法只看其中一组，也无法指定用哪一组做对照。
 */
function compareByLength(curves, caliber, L, obsM, groupFilter) {
  const rows = [];
  const hasObs = (obsM !== null && obsM !== undefined && !isNaN(obsM) && obsM > 0);
  (curves || []).forEach((c) => {
    if (c.kind !== 'length_weight' || c.caliber !== caliber) return;
    if (groupFilter && c.group !== groupFilter) return;
    const r = estWeight(c, L);
    if (!r.ok) return;
    rows.push({
      group: c.groupZh,
      groupKey: c.group,
      sourceShort: shortSrc(c.source),
      source: c.source,
      n: c.n,
      nText: '样本 ' + c.n,
      caliberText: c.caliberText || caliberLabel(c.caliber),
      est: r.value,
      estText: fmt(r.value, 1) + ' g',
      delta: hasObs ? deviation(obsM, r.value) : null,
      deltaText: hasObs ? (deviation(obsM, r.value) > 0 ? '+' : '') + fmt(deviation(obsM, r.value), 1) + '%' : '',
      interp: r.interpolated,
      segText: r.seg.lo + '–' + r.seg.hi + ' mm',
      cov: c.coverage ? c.coverage.run + '/' + c.coverage.total : '',
      covRatio: c.coverage ? c.coverage.ratio : null,
      band95: c.band95,
    });
  });
  rows.sort((a, b) => a.est - b.est);
  return labelize(rows);
}

/**
 * 【同龄对照】给定年龄，列出【同一口径下】所有分组的参照体长。
 * 若存在同口径的体长-体重曲线，再复合出参照体重（并标注体重取自哪一组）。
 * @param {Array}  curves  该物种全部曲线
 * @param {string} caliber 口径
 * @param {number} t       年龄（年）
 * @param {string} [groupFilter] 可选：只看某一分组（'' 或省略 = 全部分组）。
 *        ⚠️ 2026-10-07 新增 —— 见 compareByLength 的说明。
 */
function compareByAge(curves, caliber, t, groupFilter) {
  const rows = [];
  (curves || []).forEach((c) => {
    if (c.kind !== 'age_length' || c.caliber !== caliber) return;
    if (groupFilter && c.group !== groupFilter) return;
    const r = estLengthByAge(c, t);
    if (!r.ok) return;
    // ⚠️ 必须走 t95Of（按模型算），不能无条件用 T95_CONST / k ——
    //    Gompertz/logistic 会算错（差 17%），而 two_segment_linear **没有 k**，
    //    直接除会得到 NaN，界面上就会显示「NaN 年」。
    const t95 = t95Of(c);
    const row = {
      group: c.groupZh,
      groupKey: c.group,
      sourceShort: shortSrc(c.source),
      source: c.source,
      n: c.n,
      nText: '样本 ' + c.n,
      caliberText: c.caliberText || caliberLabel(c.caliber),
      est: r.value,
      estText: fmt(r.value, 1) + ' mm',
      t95,
      // t95 为 null（如两段线性）时明确显示「—」，不显示 NaN
      t95Text: t95 == null ? '—' : fmt(t95, 1) + ' 年',
      extrapolated: t95 == null ? false : t > t95,
      cov: c.coverage ? c.coverage.run + '/' + c.coverage.total : '',
      covRatio: c.coverage ? c.coverage.ratio : null,
      estW: null,
      estWText: '',
      wGroup: '',
      wSameGroup: false,
    };
    // 复合层：只在【同口径】的体长-体重曲线存在时才计算
    const allLw = (curves || []).filter((x) => x.kind === 'length_weight' && x.caliber === c.caliber);
    const same = allLw.filter((x) => x.group === c.group);
    const lw = same[0] || allLw[0];
    if (lw) {
      const w = estWeight(lw, r.value);
      if (w.ok) {
        row.estW = w.value;
        row.estWText = fmt(w.value, 1) + ' g';
        row.wGroup = lw.groupZh;
        row.wSameGroup = same.length > 0;
      }
    }
    rows.push(row);
  });
  rows.sort((a, b) => b.est - a.est);
  return labelize(rows);
}

/**
 * 【同长对照·按体重】给定体重，列出【同一口径下】所有分组的参照体长。
 * 与 compareByLength 互补：那个是「已知体长求体重」，这个是「已知体重求体长」。
 * @param {Array}  curves  该物种全部曲线
 * @param {string} caliber 口径
 * @param {number} M       体重 g
 * @param {string} [groupFilter] 可选：只看某一分组（'' 或省略 = 全部分组）。
 *        ⚠️ 2026-10-08 补 —— 此前只有 compareByLength / compareByAge 支持选分组，
 *        这一条漏了，导致用户在「按体重查询」模式下**选不了分组**（选了也没用）。
 */
function compareByWeight(curves, caliber, M, groupFilter) {
  const rows = [];
  (curves || []).forEach((c) => {
    if (c.kind !== 'length_weight' || c.caliber !== caliber) return;
    if (groupFilter && c.group !== groupFilter) return;
    const r = estLength(c, M);
    if (!r.ok) return;
    rows.push({
      group: c.groupZh,
      groupKey: c.group,
      sourceShort: shortSrc(c.source),
      source: c.source,
      n: c.n,
      nText: '样本 ' + c.n,
      caliberText: c.caliberText || caliberLabel(c.caliber),
      est: r.value,
      estText: fmt(r.value, 1) + ' mm',
      interp: r.interpolated,
      segText: r.seg.lo + '–' + r.seg.hi + ' mm',
      cov: c.coverage ? c.coverage.run + '/' + c.coverage.total : '',
      covRatio: c.coverage ? c.coverage.ratio : null,
      band95: c.band95,
      estW: null,
      estWText: '',
    });
  });
  rows.sort((a, b) => b.est - a.est);
  return labelize(rows);
}

module.exports = {
  T95_CONST,
  CALIBER_ZH,
  caliberLabel,
  groupLabel,
  pickByLength,
  estWeight,
  estLength,
  estLengthByAge,
  isModelSupported,
  t95Of,
  SUPPORTED_MODELS,
  deviation,
  fmt,
  calibersOf,
  groupsOf,
  compareByLength,
  compareByAge,
  compareByWeight,
};
