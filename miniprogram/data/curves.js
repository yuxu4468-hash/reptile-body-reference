// 由 tools/build_miniprogram_data.py 自动生成，请勿手工修改
// 源: data/curves.json + data/species_meta.json
module.exports = [
 {
  "id": "Ambystoma_mavortium",
  "zh": "虎纹钝口螈",
  "latin": "Ambystoma mavortium",
  "en": "Barred Tiger Salamander",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "吻肛长（SVL）、全长（TL）",
  "caliberSummaryEn": "Snout–vent length (SVL), Total length (TL)",
  "py": "huwendunkouyuan",
  "pyi": "hwdky",
  "alias": [
   "虎纹蝾螈",
   "虎斑蝾螈",
   "横带虎纹钝口螈",
   "虎纹钝口螈",
   "tiger salamander"
  ],
  "aliasEn": [
   "Tiger Salamander",
   "Barred Tiger Salamander"
  ],
  "scopeShort": "⚠️ 本卡只有幼体（有外鳃）的数据（SVL 17–26 mm），不含陆生成体。⚠️ 「虎纹蝾螈」是复合体：本卡是 A. mavortium（横带），A. tigrinum（东部）是另一个种、本卡不适用。",
  "scopeShortEn": "⚠️ Larval (externally gilled) data only (SVL 17-26 mm); adult terrestrial animals are not covered. ⚠️ \"Tiger salamander\" is a complex: this card is A. mavortium; the eastern A. tigrinum is a separate species and is not covered.",
  "taxon": "amphibian",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 56,
    "nText": "样本 56",
    "nTextEn": "n = 56",
    "source": "Tornabene BJ & Breuner CW 2026. Survival and sublethal effects of amphibians exposed to NaCl and brines from energy production - morphology data [dataset]. PANGAEA, doi:10.1594/PANGAEA.913841（CC-BY-4.0）",
    "evidence": "L1",
    "sourceShort": "Tornabene 2026",
    "caveats": [
     "single_wild_population"
    ],
    "coverage": {
     "run": 3,
     "total": 15,
     "ratio": 0.2,
     "domain": [
      17.0,
      98.0
     ],
     "dataRanges": [
      [
       17.4,
       26.29
      ]
     ]
    },
    "coverageText": "3/15 = 20%",
    "coverageBasis": "分母 = 该物种完整体型范围 17–98 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 17–98 mm",
    "segments": [
     {
      "lo": 17.4,
      "hi": 26.29,
      "a": 0.0017895575636250535,
      "b": 1.8579,
      "r2": 0.7542,
      "sd": 0.0478,
      "interp": false,
      "src": "Tornabene BJ & Breuner CW 2026, PANGAEA, doi:10.1594/PANGAEA.913841（个体级 Mass[g] + SVL[mm] 原始数据，CC-BY-4.0）"
     }
    ],
    "band95": 24.1
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 1028,
    "nText": "观测 1028 次",
    "nTextEn": "n = 1028 observations",
    "source": "[陆生成体 metamorph] Kirk MA, Reider KE, Lackey ACR, Thomas SA & Whiteman HH 2023. The role of environmental variation in mediating fitness trade-offs for an amphibian polyphenism. Journal of Animal Ecology 92(9):1815-1827. doi:10.1111/1365-2656.13974 —— 个体级原始数据：Dryad doi:10.5061/dryad.z612jm6h9 (version 240229, Tradeoffs_JAE_Trait_Data.csv)",
    "evidence": "L1",
    "sourceShort": "[陆生成体 2023",
    "caveats": [
     "single_wild_population",
     "gravid_females_not_identified"
    ],
    "coverage": {
     "run": 10,
     "total": 15,
     "ratio": 0.6667,
     "domain": [
      17.0,
      129.0
     ],
     "dataRanges": [
      [
       60.0,
       129.0
      ]
     ]
    },
    "coverageText": "10/15 = 67%",
    "coverageBasis": "分母 = 该物种完整体型范围 17–129 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 17–129 mm",
    "segments": [
     {
      "lo": 60.0,
      "hi": 129.0,
      "a": 5.6096257877751504e-06,
      "b": 3.358808247189951,
      "r2": 0.6607803274824153,
      "sd": 0.09385247534628609,
      "interp": false,
      "src": "Kirk MA, Reider KE, Lackey ACR, Thomas SA & Whiteman HH 2023. The role of environmental variation in mediating fitness trade-offs for an amphibian polyphenism. Journal of Animal Ecology 92(9):1815-1827. doi:10.1111/1365-2656.13974 —— Dryad doi:10.5061/dryad.z612jm6h9 (version 240229, Tradeoffs_JAE_Trait_Data.csv)"
     }
    ],
    "band95": 52.7
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 3317,
    "nText": "观测 3317 次",
    "nTextEn": "n = 3317 observations",
    "source": "[幼态持续 paedomorph] Kirk MA, Reider KE, Lackey ACR, Thomas SA & Whiteman HH 2023. The role of environmental variation in mediating fitness trade-offs for an amphibian polyphenism. Journal of Animal Ecology 92(9):1815-1827. doi:10.1111/1365-2656.13974 —— 个体级原始数据：Dryad doi:10.5061/dryad.z612jm6h9 (version 240229, Tradeoffs_JAE_Trait_Data.csv)",
    "evidence": "L1",
    "sourceShort": "[幼态持续 2023",
    "caveats": [
     "single_wild_population",
     "gravid_females_not_identified"
    ],
    "coverage": {
     "run": 9,
     "total": 15,
     "ratio": 0.6,
     "domain": [
      17.0,
      129.0
     ],
     "dataRanges": [
      [
       64.0,
       125.0
      ]
     ]
    },
    "coverageText": "9/15 = 60%",
    "coverageBasis": "分母 = 该物种完整体型范围 17–129 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 17–129 mm",
    "segments": [
     {
      "lo": 64.0,
      "hi": 125.0,
      "a": 6.272883108940399e-05,
      "b": 2.861668445959173,
      "r2": 0.72248411979228,
      "sd": 0.06712316006735522,
      "interp": false,
      "src": "Kirk MA, Reider KE, Lackey ACR, Thomas SA & Whiteman HH 2023. The role of environmental variation in mediating fitness trade-offs for an amphibian polyphenism. Journal of Animal Ecology 92(9):1815-1827. doi:10.1111/1365-2656.13974 —— Dryad doi:10.5061/dryad.z612jm6h9 (version 240229, Tradeoffs_JAE_Trait_Data.csv)"
     }
    ],
    "band95": 35.4
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "TL",
    "caliberText": "全长（TL）",
    "caliberTextEn": "Total length (TL)",
    "n": 1009,
    "nText": "观测 1009 次",
    "nTextEn": "n = 1009 observations",
    "source": "[陆生成体 metamorph] Kirk MA, Reider KE, Lackey ACR, Thomas SA & Whiteman HH 2023. The role of environmental variation in mediating fitness trade-offs for an amphibian polyphenism. Journal of Animal Ecology 92(9):1815-1827. doi:10.1111/1365-2656.13974 —— 个体级原始数据：Dryad doi:10.5061/dryad.z612jm6h9 (version 240229, Tradeoffs_JAE_Trait_Data.csv)",
    "evidence": "L1",
    "sourceShort": "[陆生成体 2023",
    "caveats": [
     "single_wild_population",
     "gravid_females_not_identified"
    ],
    "coverage": {
     "run": 10,
     "total": 15,
     "ratio": 0.6667,
     "domain": [
      83.0,
      278.0
     ],
     "dataRanges": [
      [
       116.0,
       230.0
      ]
     ]
    },
    "coverageText": "10/15 = 67%",
    "coverageBasis": "分母 = 该物种完整体型范围 83–278 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 83–278 mm",
    "segments": [
     {
      "lo": 116.0,
      "hi": 230.0,
      "a": 2.6653954289933608e-05,
      "b": 2.649592419970964,
      "r2": 0.6469953446751786,
      "sd": 0.09613508081597445,
      "interp": false,
      "src": "Kirk MA, Reider KE, Lackey ACR, Thomas SA & Whiteman HH 2023. The role of environmental variation in mediating fitness trade-offs for an amphibian polyphenism. Journal of Animal Ecology 92(9):1815-1827. doi:10.1111/1365-2656.13974 —— Dryad doi:10.5061/dryad.z612jm6h9 (version 240229, Tradeoffs_JAE_Trait_Data.csv)"
     }
    ],
    "band95": 54.3
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "TL",
    "caliberText": "全长（TL）",
    "caliberTextEn": "Total length (TL)",
    "n": 3211,
    "nText": "观测 3211 次",
    "nTextEn": "n = 3211 observations",
    "source": "[幼态持续 paedomorph] Kirk MA, Reider KE, Lackey ACR, Thomas SA & Whiteman HH 2023. The role of environmental variation in mediating fitness trade-offs for an amphibian polyphenism. Journal of Animal Ecology 92(9):1815-1827. doi:10.1111/1365-2656.13974 —— 个体级原始数据：Dryad doi:10.5061/dryad.z612jm6h9 (version 240229, Tradeoffs_JAE_Trait_Data.csv)",
    "evidence": "L1",
    "sourceShort": "[幼态持续 2023",
    "caveats": [
     "single_wild_population",
     "gravid_females_not_identified"
    ],
    "coverage": {
     "run": 13,
     "total": 15,
     "ratio": 0.8667,
     "domain": [
      83.0,
      278.0
     ],
     "dataRanges": [
      [
       109.0,
       278.0
      ]
     ]
    },
    "coverageText": "13/15 = 87%",
    "coverageBasis": "分母 = 该物种完整体型范围 83–278 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 83–278 mm",
    "segments": [
     {
      "lo": 109.0,
      "hi": 278.0,
      "a": 4.947152095482173e-05,
      "b": 2.54200694261602,
      "r2": 0.7438294789319136,
      "sd": 0.06434131983535032,
      "interp": false,
      "src": "Kirk MA, Reider KE, Lackey ACR, Thomas SA & Whiteman HH 2023. The role of environmental variation in mediating fitness trade-offs for an amphibian polyphenism. Journal of Animal Ecology 92(9):1815-1827. doi:10.1111/1365-2656.13974 —— Dryad doi:10.5061/dryad.z612jm6h9 (version 240229, Tradeoffs_JAE_Trait_Data.csv)"
     }
    ],
    "band95": 33.7
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 1284,
    "nText": "观测 1284 次",
    "nTextEn": "n = 1284 observations",
    "source": "[陆生成体 metamorph] Kirk MA, Reider KE, Lackey ACR, Thomas SA & Whiteman HH 2023. The role of environmental variation in mediating fitness trade-offs for an amphibian polyphenism. Journal of Animal Ecology 92(9):1815-1827. doi:10.1111/1365-2656.13974；Kirk MA, Lackey ACR, Reider KE, Thomas SA, Anderson TL & Whiteman HH 2026. Spatial and temporal variation in climate and conflict explains 35 years of developmental plasticity in a polyphenism. Oikos 2026(8). doi:10.1002/oik.12270 —— 个体级原始数据：Dryad doi:10.5061/dryad.z612jm6h9 (version 240229, Tradeoffs_JAE_Trait_Data.csv)；Dryad doi:10.5061/dryad.4tmpg4frq (version 444272, Master_Morph_Plasticity_Data_R.csv)",
    "evidence": "L1",
    "sourceShort": "[陆生成体 2023",
    "caveats": [
     "single_wild_population"
    ],
    "coverage": {
     "run": 13,
     "total": 15,
     "ratio": 0.8667,
     "domain": [
      0.0,
      7.405349629499729
     ],
     "dataRanges": [
      [
       1.0,
       32.0
      ]
     ]
    },
    "coverageText": "13/15 = 87%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 7.4 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 7.4 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 95.36,
     "k": 0.2812,
     "t0": 0.0,
     "L0": 57.1
    },
    "t95": 7.405682909847291,
    "t95Text": "7.4 年",
    "t95TextEn": "7.4 yr"
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 4109,
    "nText": "观测 4109 次",
    "nTextEn": "n = 4109 observations",
    "source": "[幼态持续 paedomorph] Kirk MA, Reider KE, Lackey ACR, Thomas SA & Whiteman HH 2023. The role of environmental variation in mediating fitness trade-offs for an amphibian polyphenism. Journal of Animal Ecology 92(9):1815-1827. doi:10.1111/1365-2656.13974；Kirk MA, Lackey ACR, Reider KE, Thomas SA, Anderson TL & Whiteman HH 2026. Spatial and temporal variation in climate and conflict explains 35 years of developmental plasticity in a polyphenism. Oikos 2026(8). doi:10.1002/oik.12270 —— 个体级原始数据：Dryad doi:10.5061/dryad.z612jm6h9 (version 240229, Tradeoffs_JAE_Trait_Data.csv)；Dryad doi:10.5061/dryad.4tmpg4frq (version 444272, Master_Morph_Plasticity_Data_R.csv)",
    "evidence": "L1",
    "sourceShort": "[幼态持续 2023",
    "caveats": [
     "single_wild_population"
    ],
    "coverage": {
     "run": 14,
     "total": 15,
     "ratio": 0.9333,
     "domain": [
      0.0,
      9.402875074130709
     ],
     "dataRanges": [
      [
       1.0,
       25.0
      ]
     ]
    },
    "coverageText": "14/15 = 93%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 9.4 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 9.4 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 89.86,
     "k": 0.1962,
     "t0": 0.0,
     "L0": 61.43
    },
    "t95": 9.403283871431627,
    "t95Text": "9.4 年",
    "t95TextEn": "9.4 yr"
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Ambystoma_mexicanum",
  "zh": "墨西哥钝口螈",
  "latin": "Ambystoma mexicanum",
  "en": "Axolotl",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "全长（TL）、吻肛长（SVL）",
  "caliberSummaryEn": "Total length (TL), Snout–vent length (SVL)",
  "py": "moxigedunkouyuan",
  "pyi": "mxgdky",
  "alias": [
   "六角恐龙",
   "墨西哥钝口螈",
   "美西螈",
   "六角龙",
   "axolotl"
  ],
  "aliasEn": [
   "Axolotl",
   "Mexican Axolotl"
  ],
  "scopeShort": "⚠️ 本卡只有体长-体重；年龄-体长暂不提供 —— 该种的生长是两段线性，项目现有模型在此数据上有约 ±18% 的系统误差，会误报。",
  "scopeShortEn": "⚠️ Length-weight only. Age-length is withheld: this species grows in two linear phases, and the standard growth models carry about ±18% systematic error here, which would produce false deviations.",
  "taxon": "amphibian",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "TL",
    "caliberText": "全长（TL）",
    "caliberTextEn": "Total length (TL)",
    "n": 27,
    "nText": "样本 27",
    "nTextEn": "n = 27",
    "source": "Vieu S, Le Poul N, Tur L, Aupée C, Kerbrat-Copy R, Bouhsina N, Cojean O, Fusellier M (2024) Ultrasound description of the coelomic cavity of the axolotl (Ambystoma mexicanum) in a clinically healthy population: a pilot study. Scientific Reports 14:11787. DOI 10.1038/s41598-024-62264-z（PMC11116527，全文已核；Crossref 已核 DOI/卷/年）",
    "evidence": "L1",
    "sourceShort": "Vieu 2024",
    "caveats": [
     "gravid_females_not_identified",
     "single_captive_population",
     "small_n"
    ],
    "coverage": {
     "run": 6,
     "total": 15,
     "ratio": 0.4,
     "domain": [
      175.0,
      300.0
     ],
     "dataRanges": [
      [
       175.0,
       300.0
      ]
     ]
    },
    "coverageText": "6/15 = 40%",
    "coverageBasis": "分母 = 该物种完整体型范围 175–300 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 175–300 mm",
    "segments": [
     {
      "lo": 175.0,
      "hi": 300.0,
      "a": 0.0021792,
      "b": 1.9147,
      "r2": 0.7003,
      "sd": 0.0827,
      "interp": false,
      "src": "Vieu S, Le Poul N, Tur L, Aupée C, Kerbrat-Copy R, Bouhsina N, Cojean O, Fusellier M (2024) Scientific Reports 14:11787, Table 1（逐个体 Sex / Length(cm) / Weight(g)）"
     }
    ],
    "band95": 42.4
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "TL",
    "caliberText": "全长（TL）",
    "caliberTextEn": "Total length (TL)",
    "n": 220,
    "nText": "样本 220",
    "nTextEn": "n = 220",
    "source": "Riquelme-Guzmán C, Schuez M, Böhm A, Knapp D, Edwards-Jorquera S, Ceccarelli AS, Chara O, Rauner M, Sandoval-Guzmán T (2022) Postembryonic development and aging of the appendicular skeleton in Ambystoma mexicanum. Developmental Dynamics 251(6):1015-1034. DOI 10.1002/dvdy.407（两段线性模型参数见 Table 2；n = 220 见 Results 与 Fig. 1B）",
    "evidence": "L2",
    "sourceShort": "Riquelme-Guzmán 2022",
    "caveats": [
     "single_captive_population"
    ],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      0.0,
      20.8333
     ],
     "dataRanges": [
      [
       0.0,
       20.8333
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 该曲线覆盖的年龄范围 20.8 年（本模型无渐近线，不是 ln(20)/k）",
    "coverageBasisEn": "Denominator = the age range the curve covers (20.8 yr); this model has no asymptote, so ln(20)/k does not apply",
    "model": "two_segment_linear",
    "modelText": "两段线性生长模型",
    "modelTextEn": "two-segment linear growth model",
    "params": {
     "L0_mm": 0.0,
     "m1_mm_per_year": 137.28,
     "m2_mm_per_year": 3.9,
     "t_break_years": 1.6558,
     "L_at_break_mm": 227.3,
     "equation": "t ≤ t_break：L = L0 + m1·t；t > t_break：L = L_at_break + m2·(t − t_break)   （L 单位 mm，t 单位年）",
     "source_units": "原文以 **cm** 给出，已按项目统一口径换算为 **mm**：L0 = 0 ± 1e-14 cm；m1 = 1.144 ± 0.003 cm/月；m2 = 0.0325 ± 0.0006 cm/月；a_t = 19.87 ± 0.07 月（原文 Table 2，误差为 bootstrap） ⚠️ 若沿用 cm 会与全库 mm 口径产生 10 倍误差。",
     "hill_growth_model": {
      "form": "dL/da = r(a)·L, r(a) = r_inf + (r0 − r_inf)/(1 + (a/a_GR)^n)",
      "r0_per_year": 3.876,
      "r_inf_per_year": 0.01392,
      "n": 5.6,
      "a_GR_years": 0.8225,
      "source_units": "r0 = 0.323 ± 0.002 /月；r_inf = 0.00116 ± 0.00003 /月；n = 5.6 ± 0.07；a_GR = 9.87 ± 0.05 月（原文 Table 4）"
     },
     "no_asymptote": "⚠️ **本模型没有渐近线** —— m2 虽小但非零，体长会一直线性增长。故 `Linf` 与 `t95` 在数学上**无定义**，不得硬套 ln(20)/k 之类公式造数字。"
    },
    "t95": null,
    "t95Text": "—",
    "t95TextEn": "—"
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 220,
    "nText": "样本 220",
    "nTextEn": "n = 220",
    "source": "Riquelme-Guzmán C, Schuez M, Böhm A, Knapp D, Edwards-Jorquera S, Ceccarelli AS, Chara O, Rauner M, Sandoval-Guzmán T (2022) Postembryonic development and aging of the appendicular skeleton in Ambystoma mexicanum. Developmental Dynamics 251(6):1015-1034. DOI 10.1002/dvdy.407（两段线性模型参数见 Table 3；n = 220）",
    "evidence": "L2",
    "sourceShort": "Riquelme-Guzmán 2022",
    "caveats": [
     "single_captive_population"
    ],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      0.0,
      20.8333
     ],
     "dataRanges": [
      [
       0.0,
       20.8333
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 该曲线覆盖的年龄范围 20.8 年（本模型无渐近线，不是 ln(20)/k）",
    "coverageBasisEn": "Denominator = the age range the curve covers (20.8 yr); this model has no asymptote, so ln(20)/k does not apply",
    "model": "two_segment_linear",
    "modelText": "两段线性生长模型",
    "modelTextEn": "two-segment linear growth model",
    "params": {
     "L0_mm": 0.0,
     "m1_mm_per_year": 74.16,
     "m2_mm_per_year": 2.424,
     "t_break_years": 1.5833,
     "L_at_break_mm": 117.4,
     "equation": "t ≤ t_break：L = L0 + m1·t；t > t_break：L = L_at_break + m2·(t − t_break)   （L 单位 mm，t 单位年）",
     "source_units": "原文以 **cm** 给出，已按项目统一口径换算为 **mm**：L0 = 8e-16 ± 2e-16 cm（即 0）；m1 = 0.618 ± 0.002 cm/月；m2 = 0.0202 ± 0.0004 cm/月；a_t = 19.00 ± 0.07 月（原文 Table 3，误差为 bootstrap） ⚠️ 若沿用 cm 会与全库 mm 口径产生 10 倍误差。",
     "hill_growth_model": {
      "form": "dL/da = r(a)·L, r(a) = r_inf + (r0 − r_inf)/(1 + (a/a_GR)^n)",
      "r0_per_year": 2.964,
      "r_inf_per_year": 0.01704,
      "n": 7.8,
      "a_GR_years": 0.9225,
      "source_units": "r0 = 0.247 ± 0.001 /月；r_inf = 0.00142 ± 0.00002 /月；n = 7.8 ± 0.1；a_GR = 11.07 ± 0.05 月（原文 Table 5）"
     },
     "no_asymptote": "⚠️ **本模型没有渐近线** —— m2 虽小但非零，体长会一直线性增长。故 `Linf` 与 `t95` 在数学上**无定义**，不得硬套 ln(20)/k 之类公式造数字。"
    },
    "t95": null,
    "t95Text": "—",
    "t95TextEn": "—"
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Apalone_ferox",
  "zh": "佛罗里达鳖",
  "latin": "Apalone ferox",
  "en": "Florida Softshell Turtle",
  "status": "ok",
  "hasAL": false,
  "caliberSummary": "直甲长（SCL）",
  "caliberSummaryEn": "Straight carapace length (SCL)",
  "py": "foluolidabie",
  "pyi": "flldb",
  "alias": [
   "佛罗里达鳖",
   "佛鳖",
   "佛罗里达软壳龟"
  ],
  "aliasEn": [
   "Florida Softshell Turtle"
  ],
  "scopeShort": "⚠️ 同属还有孔雀鳖 A. spinifera 与光滑鳖 A. mutica（体型小得多）；且宠物圈已知有 A. ferox × A. spinifera 杂交个体在流通。本卡只覆盖 A. ferox。",
  "scopeShortEn": "⚠️ The genus also includes the spiny (A. spinifera) and smooth (A. mutica) softshells, which are much smaller, and hybrids of A. ferox × A. spinifera are known in the pet trade. This card covers A. ferox only.",
  "taxon": "turtle",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 120,
    "nText": "样本 120",
    "nTextEn": "n = 120",
    "source": "Munscher E., Siders Z.A., Skibsted M., Letcher S., Morrison M., Walde A.D. 2025. Multivariate sexual size dimorphism in the Florida softshell turtle (Apalone ferox). Hydrobiologia 853:1305-1318. DOI 10.1007/s10750-025-05975-2；摘要页 https://link.springer.com/article/10.1007/s10750-025-05975-2",
    "evidence": "L2",
    "sourceShort": "Munscher 2025",
    "caveats": [
     "digitized_from_figure",
     "no_spread_reported",
     "single_wild_population"
    ],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      46.0,
      566.0
     ],
     "dataRanges": [
      [
       46.0,
       566.0
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 该物种完整体型范围 46–566 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 46–566 mm",
    "segments": [
     {
      "lo": 46.0,
      "hi": 566.0,
      "a": 7.527e-05,
      "b": 3.0433,
      "r2": null,
      "sd": null,
      "interp": false,
      "src": "Munscher E., Siders Z.A., Skibsted M., Letcher S., Morrison M., Walde A.D. 2025. Multivariate sexual size dimorphism in the Florida softshell turtle (Apalone ferox). Hydrobiologia 853:1305-1318. DOI 10.1007/s10750-025-05975-2（正文付费；本段由公开可见的 Fig. 2A 曲线数字化后本项目重拟合）"
     }
    ],
    "band95": null
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Boa_imperator",
  "zh": "红尾蚺",
  "latin": "Boa imperator",
  "en": "Central American Boa",
  "status": "ok",
  "hasAL": false,
  "caliberSummary": "吻肛长（SVL）",
  "caliberSummaryEn": "Snout–vent length (SVL)",
  "py": "hongweiran",
  "pyi": "hwr",
  "alias": [
   "红尾蚺",
   "红尾蟒",
   "BCI",
   "中美红尾蚺",
   "普通红尾蚺",
   "博阿蟒"
  ],
  "aliasEn": [
   "Boa Constrictor",
   "BCI",
   "Common Boa",
   "Central American Boa"
  ],
  "scopeShort": "⚠️ 本卡是 BCI = Boa imperator（中美红尾蚺），不是南美的 Boa constrictor（BCB）。⚠️ 卡内两条曲线分别是大陆型与岛屿侏儒型（两者不可互相外推）；宠物圈常见的是大陆型，请按你的个体来源选择。",
  "scopeShortEn": "⚠️ This card covers BCI (Boa imperator), not the South American Boa constrictor (BCB). ⚠️ The two curves are mainland and island-dwarf forms and must not be extrapolated to each other; the common pet form is the mainland one.",
  "taxon": "snake",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 38,
    "nText": "样本 38",
    "nTextEn": "n = 38",
    "source": "【大陆型 MAINLAND 子集】Card DC et al. (2019) Genome Biology and Evolution 11(11):3123-3143（DOI 10.1093/gbe/evz226）；Figshare 10.6084/m9.figshare.9793013.v2 → FileS03（`Mainland/Island = Mainland` 的 38 个个体：Belize City, Belize n=7 / Belmopan, Belize n=15 / Mainland Belize n=16）。曲线由本项目现拟合。",
    "evidence": "L1",
    "sourceShort": "【大陆型 2019",
    "caveats": [
     "small_n",
     "single_wild_population",
     "gravid_females_not_identified"
    ],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      440,
      2260
     ],
     "dataRanges": [
      [
       440,
       2260
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 该物种完整体型范围 440–2260 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 440–2260 mm",
    "segments": [
     {
      "lo": 440,
      "hi": 2260,
      "a": 4.14496e-08,
      "b": 3.392,
      "r2": 0.9871,
      "sd": 0.0961,
      "interp": false,
      "src": "同主记录；38 个大陆个体级 (SVL, Mass) 配对现拟合"
     }
    ],
    "band95": 54.3
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 194,
    "nText": "样本 194",
    "nTextEn": "n = 194",
    "source": "【岛屿侏儒型 ISLAND 子集】Card DC et al. (2019) Genome Biology and Evolution 11(11):3123-3143（DOI 10.1093/gbe/evz226）；Figshare 10.6084/m9.figshare.9793013.v2 → FileS03（`Mainland/Island = Island` 的 194 个个体：Cayo Cochino Menor 84 / Cayo Cochino Major 18 / West Snake 41 / Crawl 26 / Lagoon 12 / False Cay 9 / Douglas 4）。曲线由本项目现拟合。",
    "evidence": "L1",
    "sourceShort": "【岛屿侏儒型 2019",
    "caveats": [
     "gravid_females_not_identified"
    ],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      391,
      1780
     ],
     "dataRanges": [
      [
       391,
       1780
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 该物种完整体型范围 391–1780 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 391–1780 mm",
    "segments": [
     {
      "lo": 391,
      "hi": 1780,
      "a": 4.92693e-07,
      "b": 2.9981,
      "r2": 0.9426,
      "sd": 0.1096,
      "interp": false,
      "src": "同主记录；194 个岛屿个体级 (SVL, Mass) 配对现拟合"
     }
    ],
    "band95": 64.0
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Carettochelys_insculpta",
  "zh": "猪鼻龟（二爪鳖）",
  "latin": "Carettochelys insculpta",
  "en": "Pig-nosed Turtle",
  "status": "ok",
  "hasAL": false,
  "caliberSummary": "体长（原文未说明量法）",
  "caliberSummaryEn": "Length (method not stated) (not stated)",
  "py": "zhubigui",
  "pyi": "zbg",
  "alias": [
   "二爪鳖",
   "两爪鳖",
   "猪鼻龟",
   "飞河龟",
   "New Guinea Plateless Turtle"
  ],
  "aliasEn": [
   "Pig-nosed Turtle",
   "Fly River Turtle"
  ],
  "scopeShort": "⚠️ 「两爪鳖」是科名与属名，不是另一个种——本种是该科属唯一现存成员，与「猪鼻龟」是同一个种。",
  "scopeShortEn": "⚠️ \"Two-clawed turtle\" is the family/genus name, not a separate species; this is the only living member of that family, and is the same animal as the pig-nosed turtle.",
  "taxon": "turtle",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "unspecified",
    "caliberText": "体长（原文未说明量法）",
    "caliberTextEn": "Length (method not stated) (not stated)",
    "n": 48,
    "nText": "样本 48",
    "nTextEn": "n = 48",
    "source": "Georges, A. & Kennett, R. 1989. Dry-season distribution and ecology of Carettochelys insculpta in Kakadu National Park, northern Australia. Australian Wildlife Research 16:323-335. DOI 10.1071/WR9890323；全文 PDF（Georges 实验室站点）http://georges.biomatix.org/storage/app/uploads/public/5a0/d7e/ae6/5a0d7eae68e1a775950330.pdf",
    "evidence": "L1",
    "sourceShort": "Georges 1989",
    "caveats": [
     "caliber_unspecified",
     "no_spread_reported"
    ],
    "coverage": {
     "run": 14,
     "total": 15,
     "ratio": 0.933,
     "domain": [
      52.0,
      570.0
     ],
     "dataRanges": [
      [
       52.0,
       523.0
      ]
     ]
    },
    "coverageText": "14/15 = 93%",
    "coverageBasis": "分母 = 该物种完整体型范围 52–570 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 52–570 mm",
    "segments": [
     {
      "lo": 52.0,
      "hi": 523.0,
      "a": 0.00021488,
      "b": 2.88,
      "r2": 0.997,
      "sd": null,
      "interp": false,
      "src": "Georges, A. & Kennett, R. 1989. Dry-season distribution and ecology of Carettochelys insculpta (Chelonia: Carettochelydidae) in Kakadu National Park, northern Australia. Australian Wildlife Research 16:323-335. 全文 PDF: http://georges.biomatix.org/storage/app/uploads/public/5a0/d7e/ae6/5a0d7eae68e1a775950330.pdf"
     }
    ],
    "band95": null,
    "caliberInferred": true,
    "caliberUncertaintyLen": 5.0,
    "caliberUncertaintyPct": 15.1
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Centrochelys_sulcata",
  "zh": "苏卡达陆龟",
  "latin": "Centrochelys sulcata",
  "en": "African Spurred Tortoise",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "直甲长（SCL）",
  "caliberSummaryEn": "Straight carapace length (SCL)",
  "py": "sukadaluogui",
  "pyi": "skdlg",
  "alias": [
   "苏卡达",
   "苏卡达陆龟",
   "非洲盾臂龟",
   "刺腿陆龟",
   "Sulcata"
  ],
  "aliasEn": [
   "African Spurred Tortoise",
   "Sulcata Tortoise"
  ],
  "scopeShort": "本卡数据来自圈养种群（幼体段与一组 n=3 个体），不含野生个体的实测体长-体重。",
  "scopeShortEn": "The data come from captive animals (juvenile length-weight and one small age series); no measured wild length-weight data are included.",
  "taxon": "turtle",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 31,
    "nText": "样本 31",
    "nTextEn": "n = 31",
    "source": "Merchán M., Coll M. & Fournier R. (2005) Macromorfometría de juveniles de Geochelone sulcata (Testudines: Testudinidae) en Costa Rica. Revista de Biología Tropical 53(1-2): 213-225. doi:10.15517/rbt.v53i1-2.14419（开放获取全文 PDF 已获取；Cuadro 3 与 Cuadro 1）",
    "evidence": "L1",
    "sourceShort": "Merchán 2005",
    "caveats": [
     "single_captive_population",
     "small_n"
    ],
    "coverage": {
     "run": 2,
     "total": 15,
     "ratio": 0.133,
     "domain": [
      36.0,
      860.0
     ],
     "dataRanges": [
      [
       61.0,
       124.7
      ]
     ]
    },
    "coverageText": "2/15 = 13%",
    "coverageBasis": "分母 = 该物种完整体型范围 36–860 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 36–860 mm",
    "segments": [
     {
      "lo": 61.0,
      "hi": 124.7,
      "a": 0.0014421154,
      "b": 2.593,
      "r2": 0.989,
      "sd": 0.0284,
      "interp": false,
      "src": "Merchán, Coll & Fournier 2005, Rev. Biol. Trop. 53(1-2):213-225, Cuadro 3（原文 log10 PESO = 2.593·log10 LRE − 2.841，n=31，F=2688.6）；本项目换算为 M(g)=a·L(mm)^b，a=10^(−2.841)"
     }
    ],
    "band95": 13.7
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 3,
    "nText": "样本 3",
    "nTextEn": "n = 3",
    "source": "Ritz J., Griebeler E.M., Huber R. & Clauss M. (2010) Body size development of captive and free-ranging African spurred tortoises (Geochelone sulcata): high plasticity in reptilian growth rates. Herpetological Journal 20(3): 213-216. 开放获取全文 PDF（British Herpetological Society）已获取；Table 1 + Fig. 1",
    "evidence": "L1",
    "sourceShort": "Ritz 2010",
    "caveats": [
     "single_captive_population",
     "small_n"
    ],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      0.0,
      10.62
     ],
     "dataRanges": [
      [
       0.0,
       18.6
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 10.6 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 10.6 yr",
    "model": "logistic",
    "modelText": "logistic 生长方程",
    "modelTextEn": "logistic growth equation",
    "params": {
     "Linf": 664.9,
     "k": 0.384,
     "ti": 2.957
    },
    "t95": 10.624809841579271,
    "t95Text": "10.6 年",
    "t95TextEn": "10.6 yr"
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Ceratophrys_cranwelli",
  "zh": "绿角蛙",
  "latin": "Ceratophrys cranwelli",
  "en": "Chacoan Horned Frog",
  "status": "ok",
  "hasAL": false,
  "caliberSummary": "吻肛长（SVL）",
  "caliberSummaryEn": "Snout–vent length (SVL)",
  "py": "lujiaowa",
  "pyi": "ljw",
  "alias": [
   "角蛙",
   "南美角蛙",
   "查科角蛙"
  ],
  "aliasEn": [
   "Horned Frog",
   "Pacman Frog"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "amphibian",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 8,
    "nText": "样本 8",
    "nTextEn": "n = 8",
    "source": "Lappin AK, Wilcox SC, Moriarty DJ, Stoeppler SAR, Evans SE & Jones MEH 2017. Bite force in the horned frog (Ceratophrys cranwelli) with implications for extinct giant frogs. Scientific Reports 7:11968. doi:10.1038/s41598-017-11968-6 — 个体级原始数据见 Supplementary Table S1",
    "evidence": "L1",
    "sourceShort": "Lappin 2017",
    "caveats": [],
    "coverage": {
     "run": 9,
     "total": 15,
     "ratio": 0.6,
     "domain": [
      25,
      130
     ],
     "dataRanges": [
      [
       39.8,
       95.6
      ]
     ]
    },
    "coverageText": "9/15 = 60%",
    "coverageBasis": "分母 = 该物种完整体型范围 25–130 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 25–130 mm",
    "segments": [
     {
      "lo": 39.8,
      "hi": 95.6,
      "a": 0.000242006,
      "b": 2.8951,
      "r2": 0.9304,
      "sd": 0.1525,
      "interp": false,
      "src": "Lappin et al. 2017, Sci Rep 7:11968 — Supplementary Table S1（个体级 BodyLength + BodyMass 原始数据，58 个配对观测）"
     }
    ],
    "band95": 34.8
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Ceratophrys_ornata",
  "zh": "钟角蛙",
  "latin": "Ceratophrys ornata",
  "en": "Argentine Horned Frog",
  "status": "no_data",
  "hasAL": false,
  "caliberSummary": "",
  "caliberSummaryEn": "",
  "py": "zhongjiaowa",
  "pyi": "zjw",
  "alias": [
   "角蛙",
   "阿根廷角蛙",
   "钟角"
  ],
  "aliasEn": [
   "Horned Frog",
   "Pacman Frog",
   "Argentine Horned Frog"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "amphibian",
  "refs": [
   "Ibáñez 2025, Herpetological Conservation and Biology 20(3)（野生，仅体重）",
   "AmphibiaWeb 物种条目（仅均值）",
   "Deichmann 2008（36 种新热带蛙 SVL-体重回归，尚未取得）"
  ],
  "curves": [],
  "lowRelCurves": []
 },
 {
  "id": "Chamaeleo_calyptratus",
  "zh": "高冠变色龙",
  "latin": "Chamaeleo calyptratus",
  "en": "Veiled Chameleon",
  "status": "ok",
  "hasAL": false,
  "caliberSummary": "吻肛长（SVL）",
  "caliberSummaryEn": "Snout–vent length (SVL)",
  "py": "gaoguanbianselong",
  "pyi": "ggbsl",
  "alias": [
   "高冠变色龙",
   "也门变色龙",
   "高冠避役",
   "面纱变色龙"
  ],
  "aliasEn": [
   "Veiled Chameleon",
   "Yemen Chameleon"
  ],
  "scopeShort": "⚠️ 本卡数据来自圈养人工繁育个体（且样本小：15 个体 / 26 次观测），没有野生种群数据。⚠️ 样本量远低于本项目其它卡，请谨慎参考。",
  "scopeShortEn": "⚠️ Captive captive-bred animals only, with a small sample (15 individuals / 26 observations); no wild-population data. ⚠️ The sample is far smaller than other cards in this project.",
  "taxon": "lizard",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 26,
    "nText": "观测 26 次",
    "nTextEn": "n = 26 observations",
    "source": "Laslie KC (2018) Investigations of Biotremors in the Veiled Chameleon (Chamaeleo calyptratus). MSc thesis, Western Kentucky University (TopSCHOLAR: Masters Theses & Specialist Projects). https://digitalcommons.wku.edu/theses/3067 —— Table 1, p.17–18",
    "evidence": "L1",
    "sourceShort": "Laslie 2018",
    "caveats": [
     "small_n",
     "single_captive_population",
     "gravid_females_not_identified"
    ],
    "coverage": {
     "run": 11,
     "total": 15,
     "ratio": 0.733,
     "domain": [
      43,
      300
     ],
     "dataRanges": [
      [
       43,
       230
      ]
     ]
    },
    "coverageText": "11/15 = 73%",
    "coverageBasis": "分母 = 该物种完整体型范围 43–300 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 43–300 mm",
    "segments": [
     {
      "lo": 43,
      "hi": 230,
      "a": 3.4126462e-05,
      "b": 2.9127,
      "r2": 0.9751,
      "sd": 0.118,
      "interp": false,
      "src": "Laslie KC (2018) Investigations of Biotremors in the Veiled Chameleon (Chamaeleo calyptratus). MSc thesis, Western Kentucky University (TopSCHOLAR: Masters Theses & Specialist Projects). https://digitalcommons.wku.edu/theses/3067 —— Table 1, p.17–18。存档副本：http://web.archive.org/web/20240511222547/https://digitalcommons.wku.edu/cgi/viewcontent.cgi?article=4071&context=theses"
     }
    ],
    "band95": 93.5
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_male",
    "groupZh": "家养·雄性",
    "groupEn": "Captive · Male",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 16,
    "nText": "观测 16 次",
    "nTextEn": "n = 16 observations",
    "source": "Laslie KC (2018) Investigations of Biotremors in the Veiled Chameleon (Chamaeleo calyptratus). MSc thesis, Western Kentucky University (TopSCHOLAR). https://digitalcommons.wku.edu/theses/3067 —— Table 1",
    "evidence": "L1",
    "sourceShort": "Laslie 2018",
    "caveats": [
     "small_n",
     "single_captive_population"
    ],
    "coverage": {
     "run": 11,
     "total": 15,
     "ratio": 0.733,
     "domain": [
      43,
      300
     ],
     "dataRanges": [
      [
       47,
       230
      ]
     ]
    },
    "coverageText": "11/15 = 73%",
    "coverageBasis": "分母 = 该物种完整体型范围 43–300 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 43–300 mm",
    "segments": [
     {
      "lo": 47,
      "hi": 230,
      "a": 2.1950912e-05,
      "b": 2.9802,
      "r2": 0.9886,
      "sd": 0.0783,
      "interp": false,
      "src": "Laslie KC (2018) Investigations of Biotremors in the Veiled Chameleon (Chamaeleo calyptratus). MSc thesis, Western Kentucky University (TopSCHOLAR). https://digitalcommons.wku.edu/theses/3067 —— Table 1, p.17–18（仅雄性）"
     }
    ],
    "band95": 38.4
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_female",
    "groupZh": "家养·雌性",
    "groupEn": "Captive · Female",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 10,
    "nText": "观测 10 次",
    "nTextEn": "n = 10 observations",
    "source": "Laslie KC (2018) Investigations of Biotremors in the Veiled Chameleon (Chamaeleo calyptratus). MSc thesis, Western Kentucky University (TopSCHOLAR). https://digitalcommons.wku.edu/theses/3067 —— Table 1",
    "evidence": "L1",
    "sourceShort": "Laslie 2018",
    "caveats": [
     "small_n",
     "single_captive_population",
     "gravid_females_not_identified"
    ],
    "coverage": {
     "run": 8,
     "total": 15,
     "ratio": 0.533,
     "domain": [
      43,
      300
     ],
     "dataRanges": [
      [
       43,
       179
      ]
     ]
    },
    "coverageText": "8/15 = 53%",
    "coverageBasis": "分母 = 该物种完整体型范围 43–300 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 43–300 mm",
    "segments": [
     {
      "lo": 43,
      "hi": 179,
      "a": 2.3942661e-05,
      "b": 3.0297,
      "r2": 0.973,
      "sd": 0.1328,
      "interp": false,
      "src": "Laslie KC (2018) Investigations of Biotremors in the Veiled Chameleon (Chamaeleo calyptratus). MSc thesis, Western Kentucky University (TopSCHOLAR). https://digitalcommons.wku.edu/theses/3067 —— Table 1, p.17–18（仅雌性）"
     }
    ],
    "band95": 73.5
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Chelydra_serpentina",
  "zh": "北美拟鳄龟",
  "latin": "Chelydra serpentina",
  "en": "Common Snapping Turtle",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "中线甲长（midline CL）、直甲长（SCL）、最大甲长（CLmax）",
  "caliberSummaryEn": "Midline carapace length (midline CL), Straight carapace length (SCL), Maximum carapace length (CLmax)",
  "py": "nieluogui",
  "pyi": "nlg",
  "alias": [
   "鳄龟",
   "小鳄龟",
   "北美拟鳄龟",
   "磕头龟",
   "snapping turtle",
   "拟鳄龟",
   "北美小鳄龟"
  ],
  "aliasEn": [
   "Snapping Turtle",
   "Common Snapping Turtle"
  ],
  "scopeShort": "数据仅来自北美种群（C. serpentina）；中美拟鳄龟与南美拟鳄龟是另外的种，本卡不适用。",
  "scopeShortEn": "Data are from North American populations only (C. serpentina). The Central and South American snapping turtles are separate species and are not covered.",
  "taxon": "turtle",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "midline_CL",
    "caliberText": "中线甲长（midline CL）",
    "caliberTextEn": "Midline carapace length (midline CL)",
    "n": 68,
    "nText": "样本 68",
    "nTextEn": "n = 68",
    "source": "Dekker 2015 (MS thesis, Univ. Idaho), North Dakota / Moldowan 2015 / Power & Gilhen 2018 / Brown 2020",
    "evidence": "L2",
    "sourceShort": "Dekker 2015",
    "caveats": [],
    "coverage": {
     "run": 14,
     "total": 15,
     "ratio": 0.933,
     "domain": [
      29.0,
      494.0
     ],
     "dataRanges": [
      [
       29,
       150
      ],
      [
       150,
       300
      ],
      [
       300,
       440
      ]
     ]
    },
    "coverageText": "14/15 = 93%",
    "coverageBasis": "分母 = 该物种完整体型范围 29–494 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 29–494 mm",
    "segments": [
     {
      "lo": 29,
      "hi": 150,
      "a": 0.000755,
      "b": 2.7607,
      "r2": 0.9983,
      "sd": 0.044,
      "interp": false,
      "src": "Moldowan 2015 / Power & Gilhen 2018 / Brown 2020"
     },
     {
      "lo": 150,
      "hi": 300,
      "a": 0.00029140817331482993,
      "b": 2.95069443215613,
      "r2": null,
      "sd": null,
      "interp": true,
      "src": "（区间之间的桥接插值，非实测）"
     },
     {
      "lo": 300,
      "hi": 440,
      "a": 0.0003,
      "b": 2.9456,
      "r2": 0.968,
      "sd": 0.0227,
      "interp": false,
      "src": "Dekker 2015 (MS thesis, Univ. Idaho), North Dakota"
     }
    ],
    "band95": 22.5
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_female",
    "groupZh": "家养·雌性",
    "groupEn": "Captive · Female",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 33,
    "nText": "样本 33",
    "nTextEn": "n = 33",
    "source": "Ruhr et al. 2021, Proc R Soc B 288:20210213",
    "evidence": "L1",
    "sourceShort": "Ruhr 2021",
    "caveats": [],
    "coverage": {
     "run": 5,
     "total": 15,
     "ratio": 0.333,
     "domain": [
      29.0,
      494.0
     ],
     "dataRanges": [
      [
       97,
       246
      ]
     ]
    },
    "coverageText": "5/15 = 33%",
    "coverageBasis": "分母 = 该物种完整体型范围 29–494 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 29–494 mm",
    "segments": [
     {
      "lo": 97,
      "hi": 246,
      "a": 0.0001794,
      "b": 3.096,
      "r2": 0.988,
      "sd": 0.0273,
      "interp": false,
      "src": "Ruhr et al. 2021, Proc R Soc B 288:20210213"
     }
    ],
    "band95": 13.4
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_male",
    "groupZh": "野外·雄性",
    "groupEn": "Wild · Male",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 55,
    "nText": "样本 55",
    "nTextEn": "n = 55",
    "source": "Suriyamongkol et al. 2023, HerpConBio 18(1):196-203",
    "evidence": "L1",
    "sourceShort": "Suriyamongkol 2023",
    "caveats": [],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      0,
      13.6
     ],
     "dataRanges": [
      [
       0,
       20
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 13.6 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 13.6 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 314.5,
     "k": 0.22,
     "L0": 30.8,
     "t0": 0.0
    },
    "t95": 13.148479723765005,
    "t95Text": "13.1 年",
    "t95TextEn": "13.1 yr"
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_female",
    "groupZh": "野外·雌性",
    "groupEn": "Wild · Female",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 60,
    "nText": "样本 60",
    "nTextEn": "n = 60",
    "source": "Suriyamongkol et al. 2023, HerpConBio 18(1):196-203",
    "evidence": "L1",
    "sourceShort": "Suriyamongkol 2023",
    "caveats": [],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      0,
      7.5
     ],
     "dataRanges": [
      [
       0,
       20
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 7.5 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 7.5 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 278.9,
     "k": 0.4,
     "L0": 30.8,
     "t0": 0.0
    },
    "t95": 7.196777174045757,
    "t95Text": "7.2 年",
    "t95TextEn": "7.2 yr"
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_male",
    "groupZh": "野外·雄性",
    "groupEn": "Wild · Male",
    "caliber": "CLmax",
    "caliberText": "最大甲长（CLmax）",
    "caliberTextEn": "Maximum carapace length (CLmax)",
    "n": 51,
    "nText": "样本 51",
    "nTextEn": "n = 51",
    "source": "Iverson, Smith & Rettig 2022, Herpetology Notes 15:51-53",
    "evidence": "L1",
    "sourceShort": "Iverson 2022",
    "caveats": [],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      0,
      29.3
     ],
     "dataRanges": [
      [
       0,
       30
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 29.3 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 29.3 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 380.156,
     "k": 0.1024,
     "L0": 29.1,
     "t0": 0.0
    },
    "t95": 28.47750325840075,
    "t95Text": "28.5 年",
    "t95TextEn": "28.5 yr"
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_female",
    "groupZh": "野外·雌性",
    "groupEn": "Wild · Female",
    "caliber": "CLmax",
    "caliberText": "最大甲长（CLmax）",
    "caliberTextEn": "Maximum carapace length (CLmax)",
    "n": 23,
    "nText": "样本 23",
    "nTextEn": "n = 23",
    "source": "Iverson, Smith & Rettig 2022, Herpetology Notes 15:51-53",
    "evidence": "L1",
    "sourceShort": "Iverson 2022",
    "caveats": [],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      0,
      20.7
     ],
     "dataRanges": [
      [
       0,
       30
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 20.7 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 20.7 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 317.402,
     "k": 0.1447,
     "L0": 29.1,
     "t0": 0.0
    },
    "t95": 20.038505225451118,
    "t95Text": "20.0 年",
    "t95TextEn": "20.0 yr"
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Correlophus_ciliatus",
  "zh": "睫角守宫",
  "latin": "Correlophus ciliatus",
  "en": "Crested Gecko",
  "status": "rejected",
  "hasAL": false,
  "caliberSummary": "",
  "caliberSummaryEn": "",
  "py": "jiejiaoshougong",
  "pyi": "jjsg",
  "alias": [
   "睫角",
   "睫毛守宫",
   "冠角守宫"
  ],
  "aliasEn": [
   "Crested Gecko"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "lizard",
  "refs": [
   "Brundage 2024（圈养配对序列，n=60）",
   "figshare 10.6084/m9.figshare.14220098（个体级原始数据，尚未取得）"
  ],
  "curves": [],
  "lowRelCurves": []
 },
 {
  "id": "Cuora_flavomarginata",
  "zh": "黄缘闭壳龟",
  "latin": "Cuora flavomarginata",
  "en": "Yellow-margined Box Turtle",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "直甲长（SCL）",
  "caliberSummaryEn": "Straight carapace length (SCL)",
  "py": "huangyuanbihegui",
  "pyi": "hybhg",
  "alias": [
   "黄缘",
   "黄缘盒龟",
   "食蛇龟",
   "黄缘闭壳龟"
  ],
  "aliasEn": [
   "Yellow-margined Box Turtle",
   "Chinese Box Turtle"
  ],
  "scopeShort": "闭壳龟：腹甲有韧带可动，量体长时请与原文口径（SCL 直甲长）保持一致。",
  "scopeShortEn": "A box turtle with a hinged plastron; measure consistently with the stated method (SCL, straight carapace length).",
  "taxon": "turtle",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 6,
    "nText": "样本 6",
    "nTextEn": "n = 6",
    "source": "张斯荷, 付香斌 (2013) 黄缘盒龟年龄与生长形态的关系. 信阳师范学院学报(自然科学版) 26(1):76-79. DOI:10.3969/j.issn.1003-0972.2013.01.018（全文 PDF 已获取：http://journal.xynu.edu.cn/cn/article/pdf/preview/480ad94f-b5a6-4e37-9ed6-f6783eb5bf29.pdf）",
    "evidence": "L1",
    "sourceShort": "张斯荷 2013",
    "caveats": [
     "small_n",
     "extrapolation_only",
     "single_wild_population"
    ],
    "coverage": {
     "run": 7,
     "total": 15,
     "ratio": 0.467,
     "domain": [
      0.0,
      13.83
     ],
     "dataRanges": [
      [
       7.0,
       12.0
      ]
     ]
    },
    "coverageText": "7/15 = 47%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 13.8 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 13.8 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 173.72,
     "k": 0.2166,
     "t0": 0.0,
     "L0": 0.0
    },
    "t95": 13.830712250941787,
    "t95Text": "13.8 年",
    "t95TextEn": "13.8 yr"
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 70,
    "nText": "样本 70",
    "nTextEn": "n = 70",
    "source": "周贵谭, 潘凤莲, 吴遵霖 (2003) 乌龟、黄喉拟水鱼及黄缘盒龟生长特征的比较. 水产科学 22(1):32-33. 文章编号 1003-1111(2003)01-0032-02",
    "evidence": "L1",
    "sourceShort": "周贵谭 2003",
    "caveats": [
     "single_captive_population",
     "no_spread_reported"
    ],
    "coverage": {
     "run": 2,
     "total": 15,
     "ratio": 0.133,
     "domain": [
      35.0,
      190.0
     ],
     "dataRanges": [
      [
       41.5,
       50.7
      ]
     ]
    },
    "coverageText": "2/15 = 13%",
    "coverageBasis": "分母 = 该物种完整体型范围 35–190 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 35–190 mm",
    "segments": [
     {
      "lo": 41.5,
      "hi": 50.7,
      "a": 9.66952e-05,
      "b": 3.1678,
      "r2": 0.9932,
      "sd": null,
      "interp": false,
      "src": "周贵谭, 潘凤莲, 吴遵霖 (2003) 乌龟、黄喉拟水鱼及黄缘盒龟生长特征的比较. 水产科学 22(1):32-33. 文章编号 1003-1111(2003)01-0032-02（全文 PDF 已获取，含“万方数据”水印）"
     }
    ],
    "band95": null
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Eublepharis_macularius",
  "zh": "豹纹守宫",
  "latin": "Eublepharis macularius",
  "en": "Leopard Gecko",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "全长（TL）",
  "caliberSummaryEn": "Total length (TL)",
  "py": "baowenshougong",
  "pyi": "bwsg",
  "alias": [
   "豹纹",
   "豹守",
   "豹纹蜥"
  ],
  "aliasEn": [
   "Leopard Gecko"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "lizard",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "TL",
    "caliberText": "全长（TL）",
    "caliberTextEn": "Total length (TL)",
    "n": 14,
    "nText": "样本 14",
    "nTextEn": "n = 14",
    "source": "Ramadhani MR, Fahrudin, Mohamad K (2016) Berat Badan Dan Morfometrik Leopard Gecko (Eublepharis macularius) Pada Berbagai Umur. Undergraduate final assignment, IPB University. repository.ipb.ac.id/handle/123456789/84878",
    "evidence": "L2",
    "sourceShort": "Ramadhani 2016",
    "caveats": [],
    "coverage": {
     "run": 7,
     "total": 15,
     "ratio": 0.467,
     "domain": [
      0.0,
      3.48
     ],
     "dataRanges": [
      [
       0.25,
       1.7917
      ]
     ]
    },
    "coverageText": "7/15 = 47%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 3.5 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 3.5 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 238.937264,
     "k": 0.860002,
     "t0": 0.0,
     "L0": 98.793654
    },
    "t95": 2.8630153562070486,
    "t95Text": "2.9 年",
    "t95TextEn": "2.9 yr"
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Hemitheconyx_caudicinctus",
  "zh": "肥尾守宫",
  "latin": "Hemitheconyx caudicinctus",
  "en": "African Fat-tailed Gecko",
  "status": "ok",
  "hasAL": false,
  "caliberSummary": "吻肛长（SVL）",
  "caliberSummaryEn": "Snout–vent length (SVL)",
  "py": "feiweishougong",
  "pyi": "fwsg",
  "alias": [
   "肥尾",
   "非洲肥尾守宫",
   "肥尾守宮"
  ],
  "aliasEn": [
   "Fat-tailed Gecko",
   "AFT"
  ],
  "scopeShort": "本卡只覆盖 Hemitheconyx caudicinctus；同科不同属的豹纹守宫 Eublepharis macularius 另有其卡。",
  "scopeShortEn": "This card covers Hemitheconyx caudicinctus only. The leopard gecko (Eublepharis macularius) is a different genus with its own card.",
  "taxon": "lizard",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 16,
    "nText": "观测 16 次",
    "nTextEn": "n = 16 observations",
    "source": "Spawls S (2008) Notes on the natural history of the eublepharid gecko Hemitheconyx caudicinctus in northwestern Ghana. Herpetological Bulletin 106: 7–13. (British Herpetological Society; 一手全文 PDF)",
    "evidence": "L1",
    "sourceShort": "Spawls 2008",
    "caveats": [
     "digitized_from_figure",
     "small_n",
     "single_wild_population"
    ],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      48.0,
      145.0
     ],
     "dataRanges": [
      [
       48.0,
       141.0
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 该物种完整体型范围 48–145 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 48–145 mm",
    "segments": [
     {
      "lo": 48.0,
      "hi": 141.0,
      "a": 1.30943e-05,
      "b": 3.0698,
      "r2": 0.8331,
      "sd": 0.1436,
      "interp": false,
      "src": "Spawls S (2008) Herpetological Bulletin 106: 7–13, Fig. 3（本项目数字化）"
     }
    ],
    "band95": 93.7
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Heterodon_nasicus",
  "zh": "猪鼻蛇",
  "latin": "Heterodon nasicus",
  "en": "Plains Hognose Snake",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "全长（TL）、吻肛长（SVL）",
  "caliberSummaryEn": "Total length (TL), Snout–vent length (SVL)",
  "py": "zhubishe",
  "pyi": "zbs",
  "alias": [
   "猪鼻",
   "西部猪鼻蛇",
   "猪鼻蛇"
  ],
  "aliasEn": [
   "Hognose Snake",
   "Western Hognose"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "snake",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_male",
    "groupZh": "野外·雄性",
    "groupEn": "Wild · Male",
    "caliber": "TL",
    "caliberText": "全长（TL）",
    "caliberTextEn": "Total length (TL)",
    "n": 158,
    "nText": "样本 158",
    "nTextEn": "n = 158",
    "source": "Platt, D.R. 1969. Natural history of the hognose snakes Heterodon platyrhinos and Heterodon nasicus. University of Kansas Publications, Museum of Natural History 18(4):253-420.（Fig. 4，p.267；全文扫描：Internet Archive item universityofkans196818univ，leaf 284 = p.267）",
    "evidence": "L1",
    "sourceShort": "Platt 1969",
    "caveats": [
     "no_spread_reported"
    ],
    "coverage": {
     "run": 13,
     "total": 15,
     "ratio": 0.867,
     "domain": [
      177.0,
      918.0
     ],
     "dataRanges": [
      [
       260.0,
       800.0
      ]
     ]
    },
    "coverageText": "13/15 = 87%",
    "coverageBasis": "分母 = 该物种完整体型范围 177–918 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 177–918 mm",
    "segments": [
     {
      "lo": 260.0,
      "hi": 800.0,
      "a": 4.778976101359718e-07,
      "b": 2.99,
      "r2": null,
      "sd": null,
      "interp": false,
      "src": "Platt, D.R. 1969. Natural history of the hognose snakes Heterodon platyrhinos and Heterodon nasicus. University of Kansas Publications, Museum of Natural History 18(4):253-420.（Fig. 4，p.267；全文扫描：Internet Archive item universityofkans196818univ，leaf 284 = p.267）"
     }
    ],
    "band95": null
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_female",
    "groupZh": "野外·雌性",
    "groupEn": "Wild · Female",
    "caliber": "TL",
    "caliberText": "全长（TL）",
    "caliberTextEn": "Total length (TL)",
    "n": 167,
    "nText": "样本 167",
    "nTextEn": "n = 167",
    "source": "Platt, D.R. 1969. Natural history of the hognose snakes Heterodon platyrhinos and Heterodon nasicus. University of Kansas Publications, Museum of Natural History 18(4):253-420.（Fig. 4，p.267；全文扫描：Internet Archive item universityofkans196818univ，leaf 284 = p.267）",
    "evidence": "L1",
    "sourceShort": "Platt 1969",
    "caveats": [
     "no_spread_reported"
    ],
    "coverage": {
     "run": 13,
     "total": 15,
     "ratio": 0.867,
     "domain": [
      177.0,
      918.0
     ],
     "dataRanges": [
      [
       260.0,
       800.0
      ]
     ]
    },
    "coverageText": "13/15 = 87%",
    "coverageBasis": "分母 = 该物种完整体型范围 177–918 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 177–918 mm",
    "segments": [
     {
      "lo": 260.0,
      "hi": 800.0,
      "a": 8.559675331216499e-07,
      "b": 2.9,
      "r2": null,
      "sd": null,
      "interp": false,
      "src": "Platt, D.R. 1969. Natural history of the hognose snakes Heterodon platyrhinos and Heterodon nasicus. University of Kansas Publications, Museum of Natural History 18(4):253-420.（Fig. 4，p.267；全文扫描：Internet Archive item universityofkans196818univ，leaf 284 = p.267）"
     }
    ],
    "band95": null
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_male",
    "groupZh": "野外·雄性",
    "groupEn": "Wild · Male",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 67,
    "nText": "样本 67",
    "nTextEn": "n = 67",
    "source": "Platt, D.R. 1969. Natural history of the hognose snakes Heterodon platyrhinos and Heterodon nasicus. Univ. Kansas Publ. Mus. Nat. Hist. 18(4):253-420.（Table 33，p.355；全文扫描：Internet Archive item universityofkans196818univ，leaf 372 = p.355）",
    "evidence": "L2",
    "sourceShort": "Platt 1969",
    "caveats": [],
    "coverage": {
     "run": 4,
     "total": 15,
     "ratio": 0.267,
     "domain": [
      0.0,
      6.644191849182145
     ],
     "dataRanges": [
      [
       0.0,
       3.75
      ]
     ]
    },
    "coverageText": "4/15 = 27%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 6.6 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 6.6 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 421.497,
     "k": 0.450875,
     "L0": 145.677,
     "t0": 0.0
    },
    "t95": 5.703727402542444,
    "t95Text": "5.7 年",
    "t95TextEn": "5.7 yr"
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_female",
    "groupZh": "野外·雌性",
    "groupEn": "Wild · Female",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 57,
    "nText": "样本 57",
    "nTextEn": "n = 57",
    "source": "Platt, D.R. 1969. Natural history of the hognose snakes Heterodon platyrhinos and Heterodon nasicus. Univ. Kansas Publ. Mus. Nat. Hist. 18(4):253-420.（Table 33，p.355；全文扫描：Internet Archive item universityofkans196818univ，leaf 372 = p.355）",
    "evidence": "L2",
    "sourceShort": "Platt 1969",
    "caveats": [],
    "coverage": {
     "run": 6,
     "total": 15,
     "ratio": 0.4,
     "domain": [
      0.0,
      9.90648086296867
     ],
     "dataRanges": [
      [
       0.0,
       3.75
      ]
     ]
    },
    "coverageText": "6/15 = 40%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 9.9 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 9.9 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 646.484,
     "k": 0.302398,
     "L0": 149.096,
     "t0": 0.0
    },
    "t95": 9.03959096925515,
    "t95Text": "9.0 年",
    "t95TextEn": "9.0 yr"
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Iguana_iguana",
  "zh": "绿鬣蜥",
  "latin": "Iguana iguana",
  "en": "Green Iguana",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "吻肛长（SVL）",
  "caliberSummaryEn": "Snout–vent length (SVL)",
  "py": "lvliexi",
  "pyi": "llx",
  "alias": [
   "绿鬣蜥",
   "绿鬣",
   "绿蜥",
   "鬣蜥",
   "IG"
  ],
  "aliasEn": [
   "Green Iguana",
   "Common Green Iguana"
  ],
  "scopeShort": "⚠️ 本卡的口径是 SVL（不含尾）；绿鬣蜥尾长约为 SVL 的 2.3–2.4 倍，若你量的是全长（TL），不能直接套用本卡。⚠️ 数据来自单一圈养种群。",
  "scopeShortEn": "⚠️ This card uses SVL (excluding the tail). A green iguana's tail is about 2.3–2.4x its SVL, so a total-length measurement cannot be compared directly. ⚠️ The data come from one captive population.",
  "taxon": "lizard",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_male",
    "groupZh": "家养·雄性",
    "groupEn": "Captive · Male",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 96,
    "nText": "样本 96",
    "nTextEn": "n = 96",
    "source": "Phillips JA, Alberts AC, Pratt NC (1993) Differential resource use, growth, and the ontogeny of social relationships in the green iguana. Physiology & Behavior 53(1): 81-88. Table 1, p.85. 全文 PDF（ISG Library 重印本）：http://library.iucn-isg.org/documents/1993/Phillips_1993_Physiology_and_Behavior.pdf",
    "evidence": "L1",
    "sourceShort": "Phillips 1993",
    "caveats": [
     "single_captive_population"
    ],
    "coverage": {
     "run": 7,
     "total": 15,
     "ratio": 0.467,
     "domain": [
      55.0,
      500.0
     ],
     "dataRanges": [
      [
       64.9,
       254.1
      ]
     ]
    },
    "coverageText": "7/15 = 47%",
    "coverageBasis": "分母 = 该物种完整体型范围 55–500 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 55–500 mm",
    "segments": [
     {
      "lo": 64.9,
      "hi": 254.1,
      "a": 0.00032777016,
      "b": 2.5742,
      "r2": 0.9954,
      "sd": 0.0413,
      "interp": false,
      "src": "Phillips JA, Alberts AC, Pratt NC (1993) Differential resource use, growth, and the ontogeny of social relationships in the green iguana. Physiology & Behavior 53(1): 81-88. Table 1, p.85. 全文 PDF（ISG Library 重印本）：http://library.iucn-isg.org/documents/1993/Phillips_1993_Physiology_and_Behavior.pdf"
     }
    ],
    "band95": 20.5
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_female",
    "groupZh": "家养·雌性",
    "groupEn": "Captive · Female",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 96,
    "nText": "样本 96",
    "nTextEn": "n = 96",
    "source": "Phillips JA, Alberts AC, Pratt NC (1993) Differential resource use, growth, and the ontogeny of social relationships in the green iguana. Physiology & Behavior 53(1): 81-88. Table 1, p.85. 全文 PDF（ISG Library 重印本）：http://library.iucn-isg.org/documents/1993/Phillips_1993_Physiology_and_Behavior.pdf",
    "evidence": "L1",
    "sourceShort": "Phillips 1993",
    "caveats": [
     "single_captive_population"
    ],
    "coverage": {
     "run": 8,
     "total": 15,
     "ratio": 0.533,
     "domain": [
      55.0,
      500.0
     ],
     "dataRanges": [
      [
       64.3,
       265.0
      ]
     ]
    },
    "coverageText": "8/15 = 53%",
    "coverageBasis": "分母 = 该物种完整体型范围 55–500 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 55–500 mm",
    "segments": [
     {
      "lo": 64.3,
      "hi": 265.0,
      "a": 0.00043014214,
      "b": 2.5083,
      "r2": 0.9951,
      "sd": 0.0438,
      "interp": false,
      "src": "Phillips JA, Alberts AC, Pratt NC (1993) Differential resource use, growth, and the ontogeny of social relationships in the green iguana. Physiology & Behavior 53(1): 81-88. Table 1, p.85. 全文 PDF（ISG Library 重印本）：http://library.iucn-isg.org/documents/1993/Phillips_1993_Physiology_and_Behavior.pdf"
     }
    ],
    "band95": 21.9
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "captive_male",
    "groupZh": "家养·雄性",
    "groupEn": "Captive · Male",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 96,
    "nText": "样本 96",
    "nTextEn": "n = 96",
    "source": "Phillips JA, Alberts AC, Pratt NC (1993) Differential resource use, growth, and the ontogeny of social relationships in the green iguana. Physiology & Behavior 53(1): 81-88. Table 1, p.85. 全文 PDF（ISG Library 重印本）：http://library.iucn-isg.org/documents/1993/Phillips_1993_Physiology_and_Behavior.pdf",
    "evidence": "L1",
    "sourceShort": "Phillips 1993",
    "caveats": [
     "single_captive_population",
     "extrapolation_only"
    ],
    "coverage": {
     "run": 6,
     "total": 15,
     "ratio": 0.4,
     "domain": [
      0.0,
      3.98
     ],
     "dataRanges": [
      [
       0.0,
       1.44
      ]
     ]
    },
    "coverageText": "6/15 = 40%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 4.0 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 4.0 yr",
    "model": "gompertz",
    "modelText": "Gompertz 生长方程",
    "modelTextEn": "Gompertz growth equation",
    "params": {
     "Linf": 425.9,
     "k": 0.8992,
     "ti": 0.6793
    },
    "t95": 3.982452957766231,
    "t95Text": "4.0 年",
    "t95TextEn": "4.0 yr"
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "captive_female",
    "groupZh": "家养·雌性",
    "groupEn": "Captive · Female",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 96,
    "nText": "样本 96",
    "nTextEn": "n = 96",
    "source": "Phillips JA, Alberts AC, Pratt NC (1993) Differential resource use, growth, and the ontogeny of social relationships in the green iguana. Physiology & Behavior 53(1): 81-88. Table 1, p.85. 全文 PDF（ISG Library 重印本）：http://library.iucn-isg.org/documents/1993/Phillips_1993_Physiology_and_Behavior.pdf",
    "evidence": "L1",
    "sourceShort": "Phillips 1993",
    "caveats": [
     "single_captive_population",
     "extrapolation_only"
    ],
    "coverage": {
     "run": 6,
     "total": 15,
     "ratio": 0.4,
     "domain": [
      0.0,
      3.64
     ],
     "dataRanges": [
      [
       0.0,
       1.44
      ]
     ]
    },
    "coverageText": "6/15 = 40%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 3.6 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 3.6 yr",
    "model": "gompertz",
    "modelText": "Gompertz 生长方程",
    "modelTextEn": "Gompertz growth equation",
    "params": {
     "Linf": 421.6,
     "k": 0.9863,
     "ti": 0.6323
    },
    "t95": 3.6437520324682096,
    "t95Text": "3.6 年",
    "t95TextEn": "3.6 yr"
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Kinosternon_baurii",
  "zh": "果核蛋龟（果核泥龟）",
  "latin": "Kinosternon baurii",
  "en": "Striped Mud Turtle",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "腹甲长（PL）",
  "caliberSummaryEn": "Plastron length (PL)",
  "py": "guohedangui",
  "pyi": "ghdg",
  "alias": [
   "蛋龟",
   "果核",
   "果核泥龟",
   "三线蛋龟",
   "条纹动胸龟"
  ],
  "aliasEn": [
   "Striped Mud Turtle",
   "Egg Turtle"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "turtle",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "PL",
    "caliberText": "腹甲长（PL）",
    "caliberTextEn": "Plastron length (PL)",
    "n": 19,
    "nText": "样本 19",
    "nTextEn": "n = 19",
    "source": "Iverson, J.B. 1979. The female reproductive cycle in north Florida Kinosternon baurii (Testudines: Kinosternidae). Brimleyana 1:37-46. 全文 PDF：https://archive.org/download/biostor-217880/biostor-217880.pdf",
    "evidence": "L2",
    "sourceShort": "Iverson 1979",
    "caveats": [],
    "coverage": {
     "run": 7,
     "total": 15,
     "ratio": 0.467,
     "domain": [
      0.0,
      15.03
     ],
     "dataRanges": [
      [
       1.0,
       7.0
      ]
     ]
    },
    "coverageText": "7/15 = 47%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 15.0 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 15.0 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 104.1,
     "k": 0.1993,
     "t0": 0.0,
     "L0": 0.0
    },
    "t95": 15.03127081562464,
    "t95Text": "15.0 年",
    "t95TextEn": "15.0 yr"
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Lampropeltis_brooksi",
  "zh": "布鲁克王蛇",
  "latin": "Lampropeltis brooksi",
  "en": "Brook's Kingsnake",
  "status": "no_data",
  "hasAL": false,
  "caliberSummary": "",
  "caliberSummaryEn": "",
  "py": "bulukewangshe",
  "pyi": "blkws",
  "alias": [
   "布鲁克王蛇",
   "布鲁克",
   "佛州王蛇",
   "佛罗里达王蛇"
  ],
  "aliasEn": [
   "Brook's Kingsnake",
   "Florida Kingsnake"
  ],
  "scopeShort": "⚠️ 本种（暂无数据）在分类上有分歧：可能应记作 Lampropeltis floridana 或列为 L. getula 的亚种/异名。「布鲁克王蛇」在宠物圈还常与东部王蛇 L. getula（即本项目已删除的复合体条目）混淆。",
  "scopeShortEn": "⚠️ Taxonomy is disputed: this may belong under Lampropeltis floridana, or be treated as a subspecies/synonym of L. getula. In the pet trade \"Brook's kingsnake\" is also often confused with the eastern kingsnake (L. getula).",
  "taxon": "snake",
  "refs": [
   "Barbour 1919（*brooksi* 原始描述，正模 1,350 mm，模式产地 Dade Co.）",
   "Blanchard 1921:62（最大 *floridana* 1,753 mm）",
   "Duellman & Schwartz 1958:305（判 *brooksi* 为 *floridana* 次异名）",
   "Krysko 2001 p.39–40（同判）",
   "Krysko et al. 2017, J Heredity 108(3):226–238（提升 floridana 为独立种）",
   "Godley et al. 2017（n=34 成体 SVL+质量，**只给均值**；索取逐只表是唯一翻盘路径）",
   "Meshaka & Layne 2015（358 页，已核，无可用数据）"
  ],
  "curves": [],
  "lowRelCurves": []
 },
 {
  "id": "Lampropeltis_californiae",
  "zh": "加州王蛇",
  "latin": "Lampropeltis californiae",
  "en": "California Kingsnake",
  "status": "ok",
  "hasAL": false,
  "caliberSummary": "吻肛长（SVL）",
  "caliberSummaryEn": "Snout–vent length (SVL)",
  "py": "jiazhouwangshen",
  "pyi": "jzws",
  "alias": [
   "王蛇",
   "加州王",
   "加州蛇"
  ],
  "aliasEn": [
   "California Kingsnake",
   "Kingsnake"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "snake",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 360,
    "nText": "样本 360",
    "nTextEn": "n = 360",
    "source": "Pino-Vera, Abreu-Acosta & Foronda 2024, Data in Brief 52:110001（Mendeley Data 10.17632/gd884g8g7s.2，'Table 1 -Snakes.xlsx'）—— 大加那利岛入侵种群",
    "evidence": "L1",
    "sourceShort": "Pino-Vera 2024",
    "caveats": [],
    "coverage": {
     "run": 12,
     "total": 15,
     "ratio": 0.8,
     "domain": [
      190,
      1500
     ],
     "dataRanges": [
      [
       360.0,
       1270.0
      ]
     ]
    },
    "coverageText": "12/15 = 80%",
    "coverageBasis": "分母 = 该物种完整体型范围 190–1500 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 190–1500 mm",
    "segments": [
     {
      "lo": 360.0,
      "hi": 1270.0,
      "a": 2.554190990226877e-06,
      "b": 2.6769,
      "r2": 0.887,
      "sd": 0.1002,
      "interp": false,
      "src": "Pino-Vera, Abreu-Acosta & Foronda 2024, Data in Brief 52:110001（Mendeley Data 10.17632/gd884g8g7s.2，'Table 1 -Snakes.xlsx'）—— 大加那利岛入侵种群"
     }
    ],
    "band95": 58.1
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_male",
    "groupZh": "野外·雄性",
    "groupEn": "Wild · Male",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 150,
    "nText": "样本 150",
    "nTextEn": "n = 150",
    "source": "Pino-Vera, Abreu-Acosta & Foronda 2024, Data in Brief 52:110001（Mendeley Data 10.17632/gd884g8g7s.2，'Table 1 -Snakes.xlsx'）—— 大加那利岛入侵种群",
    "evidence": "L1",
    "sourceShort": "Pino-Vera 2024",
    "caveats": [],
    "coverage": {
     "run": 11,
     "total": 15,
     "ratio": 0.733,
     "domain": [
      190,
      1500
     ],
     "dataRanges": [
      [
       390.0,
       1270.0
      ]
     ]
    },
    "coverageText": "11/15 = 73%",
    "coverageBasis": "分母 = 该物种完整体型范围 190–1500 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 190–1500 mm",
    "segments": [
     {
      "lo": 390.0,
      "hi": 1270.0,
      "a": 1.5213959466201118e-06,
      "b": 2.7629,
      "r2": 0.9076,
      "sd": 0.0936,
      "interp": false,
      "src": "Pino-Vera, Abreu-Acosta & Foronda 2024, Data in Brief 52:110001（Mendeley Data 10.17632/gd884g8g7s.2，'Table 1 -Snakes.xlsx'）—— 大加那利岛入侵种群"
     }
    ],
    "band95": 54.9
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_female",
    "groupZh": "野外·雌性",
    "groupEn": "Wild · Female",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 184,
    "nText": "样本 184",
    "nTextEn": "n = 184",
    "source": "Pino-Vera, Abreu-Acosta & Foronda 2024, Data in Brief 52:110001（Mendeley Data 10.17632/gd884g8g7s.2，'Table 1 -Snakes.xlsx'）—— 大加那利岛入侵种群",
    "evidence": "L1",
    "sourceShort": "Pino-Vera 2024",
    "caveats": [],
    "coverage": {
     "run": 9,
     "total": 15,
     "ratio": 0.6,
     "domain": [
      190,
      1500
     ],
     "dataRanges": [
      [
       550.0,
       1250.0
      ]
     ]
    },
    "coverageText": "9/15 = 60%",
    "coverageBasis": "分母 = 该物种完整体型范围 190–1500 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 190–1500 mm",
    "segments": [
     {
      "lo": 550.0,
      "hi": 1250.0,
      "a": 9.724612479386372e-06,
      "b": 2.4732,
      "r2": 0.7871,
      "sd": 0.1009,
      "interp": false,
      "src": "Pino-Vera, Abreu-Acosta & Foronda 2024, Data in Brief 52:110001（Mendeley Data 10.17632/gd884g8g7s.2，'Table 1 -Snakes.xlsx'）—— 大加那利岛入侵种群"
     }
    ],
    "band95": 58.1
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Lampropeltis_triangulum",
  "zh": "奶蛇",
  "latin": "Lampropeltis triangulum",
  "en": "Milk Snake",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "吻肛长（SVL）",
  "caliberSummaryEn": "Snout–vent length (SVL)",
  "py": "naishe",
  "pyi": "ns",
  "alias": [
   "奶蛇",
   "牛奶蛇",
   "东美奶蛇"
  ],
  "aliasEn": [
   "Milk Snake",
   "Eastern Milk Snake"
  ],
  "scopeShort": "⚠️ 原「奶蛇」是复合体，已拆分：西部奶蛇 L. gentilis、红奶蛇 L. elapsoides 是另外的种，本卡只覆盖 L. triangulum s.s.（东部）。",
  "scopeShortEn": "⚠️ \"Milk snake\" was a species complex and has been split: the western milk snake (L. gentilis) and the scarlet kingsnake (L. elapsoides) are separate species. This card covers L. triangulum s.s. (eastern) only.",
  "taxon": "snake",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 55,
    "nText": "样本 55",
    "nTextEn": "n = 55",
    "source": "Fitch, H.S. & R.R. Fleet. 1970. Natural history of the milk snake (Lampropeltis triangulum) in northeastern Kansas. Herpetologica 26(4):387-396.（p.392–394「GROWTH」节；全文 PDF：https://webapps.fhsu.edu/ksherp/bibFiles/6471.pdf ，关键页已 300 dpi 渲染核对）",
    "evidence": "L2",
    "sourceShort": "Fitch 1970",
    "caveats": [
     "age_from_size_frequency",
     "small_n",
     "extrapolation_only"
    ],
    "coverage": {
     "run": 4,
     "total": 15,
     "ratio": 0.267,
     "domain": [
      0,
      11.10752688172043
     ],
     "dataRanges": [
      [
       0,
       2.67
      ]
     ]
    },
    "coverageText": "4/15 = 27%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 11.1 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 11.1 yr",
    "model": "gompertz",
    "modelText": "Gompertz 生长方程",
    "modelTextEn": "Gompertz growth equation",
    "params": {
     "Linf": 1034.47,
     "k": 0.2697,
     "ti": 1.963
    },
    "t95": 12.97595936085797,
    "t95Text": "13.0 年",
    "t95TextEn": "13.0 yr"
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 8,
    "nText": "观测 8 次",
    "nTextEn": "n = 8 observations",
    "source": "Fitch, H.S. & R.R. Fleet. 1970. Natural history of the milk snake (Lampropeltis triangulum) in northeastern Kansas. Herpetologica 26(4):387-396.（Table 2, p.394；全文 PDF 已取得：Kansas Herpetofaunal Atlas 文献镜像 https://webapps.fhsu.edu/ksherp/bibFiles/6471.pdf ，关键页已 300 dpi 渲染逐一核对）",
    "evidence": "L1",
    "sourceShort": "Fitch 1970",
    "caveats": [
     "small_n",
     "single_wild_population"
    ],
    "coverage": {
     "run": 7,
     "total": 15,
     "ratio": 0.467,
     "domain": [
      190,
      800
     ],
     "dataRanges": [
      [
       375,
       630
      ]
     ]
    },
    "coverageText": "7/15 = 47%",
    "coverageBasis": "分母 = 该物种完整体型范围 190–800 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 190–800 mm",
    "segments": [
     {
      "lo": 375,
      "hi": 630,
      "a": 2.78639e-07,
      "b": 3.0093,
      "r2": 0.981,
      "sd": 0.0383,
      "interp": false,
      "src": "Fitch & Fleet 1970, Herpetologica 26(4):387-396（Table 2, p.394）"
     }
    ],
    "band95": 18.9
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Litoria_caerulea",
  "zh": "白氏树蛙",
  "latin": "Litoria caerulea",
  "en": "White's Tree Frog",
  "status": "ok",
  "hasAL": false,
  "caliberSummary": "吻肛长（SVL）、体长（原文未说明量法）",
  "caliberSummaryEn": "Snout–vent length (SVL), Length (method not stated) (not stated)",
  "py": "baishishuwa",
  "pyi": "bssw",
  "alias": [
   "白氏树蛙",
   "老爷蛙",
   "白氏树蟾",
   "澳洲绿树蛙",
   "怀特树蛙"
  ],
  "aliasEn": [
   "White's Tree Frog",
   "Australian Green Tree Frog",
   "Dumpy Tree Frog"
  ],
  "scopeShort": "⚠️ 本卡只有圈养个体的数据，且样本很小（n=21 / n=42）。⚠️ 本种在文献中有 四个属名（Litoria / Ranoidea / Dryopsophus / Pelodryas）—— 都是同一个种。",
  "scopeShortEn": "⚠️ Captive data only, with small samples (n=21 / n=42). ⚠️ This species appears in the literature under four genus names (Litoria / Ranoidea / Dryopsophus / Pelodryas) - all the same species.",
  "taxon": "amphibian",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 21,
    "nText": "样本 21",
    "nTextEn": "n = 21",
    "source": "Ohmer MEB, Cramp RL, White CR & Franklin CE (2015) Skin sloughing rate increases with chytrid fungus infection load in a susceptible amphibian. Functional Ecology 29(5):674–682. doi:10.1111/1365-2435.12370 。个体级原始数据：Dryad doi:10.5061/dryad.h1j85（Functional Ecology 数据集；README 明写 “Snout-vent length (SVL, mm)” 与 “Mass (g)”）",
    "evidence": "L1",
    "sourceShort": "Ohmer 2015",
    "caveats": [
     "small_n",
     "single_captive_population"
    ],
    "coverage": {
     "run": 5,
     "total": 15,
     "ratio": 0.333,
     "domain": [
      50.0,
      115.0
     ],
     "dataRanges": [
      [
       61.93,
       80.2
      ]
     ]
    },
    "coverageText": "5/15 = 33%",
    "coverageBasis": "分母 = 该物种完整体型范围 50–115 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 50–115 mm",
    "segments": [
     {
      "lo": 61.93,
      "hi": 80.2,
      "a": 0.001776936058,
      "b": 2.2599,
      "r2": 0.641,
      "sd": 0.053,
      "interp": false,
      "src": "Ohmer MEB, Cramp RL, White CR & Franklin CE (2015) Functional Ecology 29(5):674–682, doi:10.1111/1365-2435.12370 — 个体级数据：Dryad doi:10.5061/dryad.h1j85（工作表 Sloughing timing_endpoint 的 SVL (mm) 与 Mass (g)）"
     }
    ],
    "band95": 18.8
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "unspecified",
    "caliberText": "体长（原文未说明量法）",
    "caliberTextEn": "Length (method not stated) (not stated)",
    "n": 42,
    "nText": "样本 42",
    "nTextEn": "n = 42",
    "source": "Fu M & Waldman B (2019) Ancestral chytrid pathogen remains hypervirulent following its long coevolution with amphibian hosts. Proceedings of the Royal Society B 286(1904):20190833. doi:10.1098/rspb.2019.0833 。个体级原始数据：Dryad doi:10.5061/dryad.79n5686",
    "evidence": "L1",
    "sourceShort": "Fu 2019",
    "caveats": [
     "caliber_unspecified",
     "single_captive_population"
    ],
    "coverage": {
     "run": 7,
     "total": 15,
     "ratio": 0.467,
     "domain": [
      50.0,
      115.0
     ],
     "dataRanges": [
      [
       54.91,
       84.61
      ]
     ]
    },
    "coverageText": "7/15 = 47%",
    "coverageBasis": "分母 = 该物种完整体型范围 50–115 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 50–115 mm",
    "segments": [
     {
      "lo": 54.91,
      "hi": 84.61,
      "a": 0.00031610907,
      "b": 2.6326,
      "r2": 0.7916,
      "sd": 0.0616,
      "interp": false,
      "src": "Fu M & Waldman B (2019) Proc R Soc B 286(1904):20190833, doi:10.1098/rspb.2019.0833 — 个体级数据：Dryad doi:10.5061/dryad.79n5686（工作表 Sheet1 首块 “body mass (g)” 与 “length (mm)”，n=42）"
     }
    ],
    "band95": 27.5,
    "caliberInferred": true,
    "caliberUncertaintyLen": 5.0,
    "caliberUncertaintyPct": 13.7,
    "band95Combined": true
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Macrochelys_spp",
  "zh": "大鳄龟（属）",
  "latin": "Macrochelys spp.",
  "en": "Alligator Snapping Turtle (genus)",
  "status": "ok",
  "hasAL": false,
  "caliberSummary": "直甲长（SCL）、最大甲壳长（MCL）",
  "caliberSummaryEn": "Straight carapace length (SCL), Maximum carapace length (MCL)",
  "py": "daeluogui",
  "pyi": "dlg",
  "alias": [
   "鳄龟",
   "真鳄龟",
   "大鳄",
   "巨鳄龟"
  ],
  "aliasEn": [
   "Alligator Snapping Turtle"
  ],
  "scopeShort": "属级条目，混合大鳄龟属的种；不区分到种。",
  "scopeShortEn": "Genus-level entry; pools the species of Macrochelys without splitting.",
  "taxon": "turtle",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 29,
    "nText": "样本 29",
    "nTextEn": "n = 29",
    "source": "Trauth et al. 2016, J. Arkansas Acad. Sci. 70:235-247",
    "evidence": "L1",
    "sourceShort": "Trauth 2016",
    "caveats": [],
    "coverage": {
     "run": 7,
     "total": 15,
     "ratio": 0.467,
     "domain": [
      30,
      800
     ],
     "dataRanges": [
      [
       300,
       557
      ]
     ]
    },
    "coverageText": "7/15 = 47%",
    "coverageBasis": "分母 = 该物种完整体型范围 30–800 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 30–800 mm",
    "segments": [
     {
      "lo": 300,
      "hi": 557,
      "a": 9.3759e-05,
      "b": 3.1537,
      "r2": 0.9866,
      "sd": 0.0286,
      "interp": false,
      "src": "Trauth et al. 2016, J. Arkansas Acad. Sci. 70:235-247"
     }
    ],
    "band95": 14.1
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "MCL",
    "caliberText": "最大甲壳长（MCL）",
    "caliberTextEn": "Maximum carapace length (MCL)",
    "n": 298,
    "nText": "样本 298",
    "nTextEn": "n = 298",
    "source": "Dreslik 2017, Illinois Natural History Survey report",
    "evidence": "L1",
    "sourceShort": "Dreslik 2017",
    "caveats": [],
    "coverage": {
     "run": 6,
     "total": 15,
     "ratio": 0.4,
     "domain": [
      30,
      800
     ],
     "dataRanges": [
      [
       74,
       113
      ],
      [
       113,
       324
      ]
     ]
    },
    "coverageText": "6/15 = 40%",
    "coverageBasis": "分母 = 该物种完整体型范围 30–800 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 30–800 mm",
    "segments": [
     {
      "lo": 74,
      "hi": 113,
      "a": 0.00076741,
      "b": 2.7025,
      "r2": 0.9597,
      "sd": 0.0285,
      "interp": false,
      "src": "Dreslik 2017, Illinois Natural History Survey report"
     },
     {
      "lo": 113,
      "hi": 324,
      "a": 5.0787e-05,
      "b": 3.2734,
      "r2": 0.9821,
      "sd": 0.0443,
      "interp": false,
      "src": "Dreslik 2017, Illinois Natural History Survey report"
     }
    ],
    "band95": 22.6
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Malaclemys_terrapin",
  "zh": "钻纹龟",
  "latin": "Malaclemys terrapin",
  "en": "Diamondback Terrapin",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "腹甲长（PL）",
  "caliberSummaryEn": "Plastron length (PL)",
  "py": "zuanwengui",
  "pyi": "zwg",
  "alias": [
   "钻纹",
   "菱斑龟",
   "钻纹水龟"
  ],
  "aliasEn": [
   "Diamondback Terrapin",
   "Terrapin"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "turtle",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_female",
    "groupZh": "野外·雌性",
    "groupEn": "Wild · Female",
    "caliber": "PL",
    "caliberText": "腹甲长（PL）",
    "caliberTextEn": "Plastron length (PL)",
    "n": 333,
    "nText": "样本 333",
    "nTextEn": "n = 333",
    "source": "Guzy JC, Denton MJ, Cherkiss MS, Smith BJ, Roche DC, Hart KM (2025) Capture histories and body size data for a population of mangrove diamond-backed terrapins (Malaclemys terrapin rhizophorarum), Everglades National Park, Florida, USA, 2001-2019. U.S. Geological Survey Data Release. doi:10.5066/P13UKAUV（伴随论文 Guzy et al. 2025, Ecology and Evolution 15(5):e71347）",
    "evidence": "L1",
    "sourceShort": "Guzy 2025",
    "caveats": [],
    "coverage": {
     "run": 9,
     "total": 15,
     "ratio": 0.6,
     "domain": [
      25.0,
      200.0
     ],
     "dataRanges": [
      [
       103.0,
       192.0
      ]
     ]
    },
    "coverageText": "9/15 = 60%",
    "coverageBasis": "分母 = 该物种完整体型范围 25–200 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 25–200 mm",
    "segments": [
     {
      "lo": 103.0,
      "hi": 192.0,
      "a": 0.000288314,
      "b": 2.9613,
      "r2": 0.9055,
      "sd": 0.0369,
      "interp": false,
      "src": "Guzy JC, Denton MJ, Cherkiss MS, Smith BJ, Roche DC, Hart KM (2025) Capture histories and body size data for a population of mangrove diamond-backed terrapins (Malaclemys terrapin rhizophorarum), Everglades National Park, Florida, USA, 2001-2019. U.S. Geological Survey Data Release. doi:10.5066/P13UKAUV（伴随论文 Guzy et al. 2025, Ecology and Evolution 15(5):e71347）"
     }
    ],
    "band95": 18.5
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_male",
    "groupZh": "野外·雄性",
    "groupEn": "Wild · Male",
    "caliber": "PL",
    "caliberText": "腹甲长（PL）",
    "caliberTextEn": "Plastron length (PL)",
    "n": 323,
    "nText": "样本 323",
    "nTextEn": "n = 323",
    "source": "Guzy JC, Denton MJ, Cherkiss MS, Smith BJ, Roche DC, Hart KM (2025) Capture histories and body size data for a population of mangrove diamond-backed terrapins (Malaclemys terrapin rhizophorarum), Everglades National Park, Florida, USA, 2001-2019. U.S. Geological Survey Data Release. doi:10.5066/P13UKAUV（伴随论文 Guzy et al. 2025, Ecology and Evolution 15(5):e71347）",
    "evidence": "L1",
    "sourceShort": "Guzy 2025",
    "caveats": [],
    "coverage": {
     "run": 4,
     "total": 15,
     "ratio": 0.267,
     "domain": [
      25.0,
      200.0
     ],
     "dataRanges": [
      [
       90.0,
       120.0
      ]
     ]
    },
    "coverageText": "4/15 = 27%",
    "coverageBasis": "分母 = 该物种完整体型范围 25–200 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 25–200 mm",
    "segments": [
     {
      "lo": 90.0,
      "hi": 120.0,
      "a": 0.00169853,
      "b": 2.5955,
      "r2": 0.7905,
      "sd": 0.0298,
      "interp": false,
      "src": "Guzy JC, Denton MJ, Cherkiss MS, Smith BJ, Roche DC, Hart KM (2025) Capture histories and body size data for a population of mangrove diamond-backed terrapins (Malaclemys terrapin rhizophorarum), Everglades National Park, Florida, USA, 2001-2019. U.S. Geological Survey Data Release. doi:10.5066/P13UKAUV（伴随论文 Guzy et al. 2025, Ecology and Evolution 15(5):e71347）"
     }
    ],
    "band95": 14.7
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "PL",
    "caliberText": "腹甲长（PL）",
    "caliberTextEn": "Plastron length (PL)",
    "n": 656,
    "nText": "样本 656",
    "nTextEn": "n = 656",
    "source": "Guzy JC, Denton MJ, Cherkiss MS, Smith BJ, Roche DC, Hart KM (2025) Capture histories and body size data for a population of mangrove diamond-backed terrapins (Malaclemys terrapin rhizophorarum), Everglades National Park, Florida, USA, 2001-2019. U.S. Geological Survey Data Release. doi:10.5066/P13UKAUV（伴随论文 Guzy et al. 2025, Ecology and Evolution 15(5):e71347）",
    "evidence": "L1",
    "sourceShort": "Guzy 2025",
    "caveats": [],
    "coverage": {
     "run": 10,
     "total": 15,
     "ratio": 0.667,
     "domain": [
      25.0,
      200.0
     ],
     "dataRanges": [
      [
       90.0,
       192.0
      ]
     ]
    },
    "coverageText": "10/15 = 67%",
    "coverageBasis": "分母 = 该物种完整体型范围 25–200 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 25–200 mm",
    "segments": [
     {
      "lo": 90.0,
      "hi": 192.0,
      "a": 0.000671551,
      "b": 2.7946,
      "r2": 0.9836,
      "sd": 0.034,
      "interp": false,
      "src": "Guzy JC, Denton MJ, Cherkiss MS, Smith BJ, Roche DC, Hart KM (2025) Capture histories and body size data for a population of mangrove diamond-backed terrapins (Malaclemys terrapin rhizophorarum), Everglades National Park, Florida, USA, 2001-2019. U.S. Geological Survey Data Release. doi:10.5066/P13UKAUV（伴随论文 Guzy et al. 2025, Ecology and Evolution 15(5):e71347）"
     }
    ],
    "band95": 16.9
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_male",
    "groupZh": "野外·雄性",
    "groupEn": "Wild · Male",
    "caliber": "PL",
    "caliberText": "腹甲长（PL）",
    "caliberTextEn": "Plastron length (PL)",
    "n": 6318,
    "nText": "观测 6318 次",
    "nTextEn": "n = 6318 observations",
    "source": "Tokash AF (2018) Somatic Growth in Head-started Diamond-backed Terrapins, Malaclemys terrapin, and their Wild Counterparts. MS thesis, Ohio University (92 pp.) Table 3",
    "evidence": "L1",
    "sourceShort": "Tokash 2018",
    "caveats": [],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      0.0,
      7.55
     ],
     "dataRanges": [
      [
       0.0,
       10.5
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 7.5 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 7.5 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 116.16,
     "k": 0.397,
     "t0": -0.598,
     "L0": 0.0
    },
    "t95": 6.947925122302244,
    "t95Text": "6.9 年",
    "t95TextEn": "6.9 yr"
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "captive_female",
    "groupZh": "家养·雌性",
    "groupEn": "Captive · Female",
    "caliber": "PL",
    "caliberText": "腹甲长（PL）",
    "caliberTextEn": "Plastron length (PL)",
    "n": 4000,
    "nText": "观测 4000 次",
    "nTextEn": "n = 4000 observations",
    "source": "Tokash AF (2018) Somatic Growth in Head-started Diamond-backed Terrapins, Malaclemys terrapin, and their Wild Counterparts. MS thesis, Ohio University (92 pp.) Table 3",
    "evidence": "L1",
    "sourceShort": "Tokash 2018",
    "caveats": [],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      0.0,
      9.73
     ],
     "dataRanges": [
      [
       0.0,
       10.5
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 9.7 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 9.7 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 181.55,
     "k": 0.308,
     "t0": -0.548,
     "L0": 0.0
    },
    "t95": 9.178403485564905,
    "t95Text": "9.2 年",
    "t95TextEn": "9.2 yr"
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Mauremys_reevesii",
  "zh": "中华草龟",
  "latin": "Mauremys reevesii",
  "en": "Chinese Pond Turtle",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "直甲长（SCL）",
  "caliberSummaryEn": "Straight carapace length (SCL)",
  "py": "zhonghuacaogui",
  "pyi": "zhcg",
  "alias": [
   "草龟",
   "乌龟",
   "金线龟",
   "中华乌龟",
   "长寿龟"
  ],
  "aliasEn": [
   "Chinese Pond Turtle",
   "Reeves' Turtle"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "turtle",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_female",
    "groupZh": "家养·雌性",
    "groupEn": "Captive · Female",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 92,
    "nText": "样本 92",
    "nTextEn": "n = 92",
    "source": "Kang H, Seo J, Bae JH, Koo KS, Jang Y (2026) Age Structure, Sexual Dimorphism, and Ontogenetic Melanism in a Captive Population of the Endangered Freshwater Turtle Mauremys reevesii (Gray 1831). Ecology and Evolution 16(5):e73565. doi:10.1002/ece3.73565 — 个体级原始数据：Supporting Information Data S1（ECE3-16-e73565-s001.xlsx，工作表 'raw data'）",
    "evidence": "L1",
    "sourceShort": "Kang 2026",
    "caveats": [],
    "coverage": {
     "run": 8,
     "total": 15,
     "ratio": 0.533,
     "domain": [
      25.0,
      300.0
     ],
     "dataRanges": [
      [
       73.62,
       202.9
      ]
     ]
    },
    "coverageText": "8/15 = 53%",
    "coverageBasis": "分母 = 该物种完整体型范围 25–300 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 25–300 mm",
    "segments": [
     {
      "lo": 73.62,
      "hi": 202.9,
      "a": 0.00111038,
      "b": 2.6547,
      "r2": 0.9702,
      "sd": 0.0481,
      "interp": false,
      "src": "Kang H, Seo J, Bae JH, Koo KS, Jang Y (2026) Age Structure, Sexual Dimorphism, and Ontogenetic Melanism in a Captive Population of the Endangered Freshwater Turtle Mauremys reevesii (Gray 1831). Ecology and Evolution 16(5):e73565. doi:10.1002/ece3.73565 — 个体级原始数据：Supporting Information Data S1（ECE3-16-e73565-s001.xlsx，工作表 'raw data'）"
     }
    ],
    "band95": 24.8
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_male",
    "groupZh": "家养·雄性",
    "groupEn": "Captive · Male",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 37,
    "nText": "样本 37",
    "nTextEn": "n = 37",
    "source": "Kang H, Seo J, Bae JH, Koo KS, Jang Y (2026) Age Structure, Sexual Dimorphism, and Ontogenetic Melanism in a Captive Population of the Endangered Freshwater Turtle Mauremys reevesii (Gray 1831). Ecology and Evolution 16(5):e73565. doi:10.1002/ece3.73565 — 个体级原始数据：Supporting Information Data S1（ECE3-16-e73565-s001.xlsx，工作表 'raw data'）",
    "evidence": "L1",
    "sourceShort": "Kang 2026",
    "caveats": [],
    "coverage": {
     "run": 4,
     "total": 15,
     "ratio": 0.267,
     "domain": [
      25.0,
      300.0
     ],
     "dataRanges": [
      [
       66.27,
       121.1
      ]
     ]
    },
    "coverageText": "4/15 = 27%",
    "coverageBasis": "分母 = 该物种完整体型范围 25–300 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 25–300 mm",
    "segments": [
     {
      "lo": 66.27,
      "hi": 121.1,
      "a": 0.000748228,
      "b": 2.7177,
      "r2": 0.963,
      "sd": 0.0329,
      "interp": false,
      "src": "Kang H, Seo J, Bae JH, Koo KS, Jang Y (2026) Age Structure, Sexual Dimorphism, and Ontogenetic Melanism in a Captive Population of the Endangered Freshwater Turtle Mauremys reevesii (Gray 1831). Ecology and Evolution 16(5):e73565. doi:10.1002/ece3.73565 — 个体级原始数据：Supporting Information Data S1（ECE3-16-e73565-s001.xlsx，工作表 'raw data'）"
     }
    ],
    "band95": 16.4
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 131,
    "nText": "样本 131",
    "nTextEn": "n = 131",
    "source": "Kang H, Seo J, Bae JH, Koo KS, Jang Y (2026) Age Structure, Sexual Dimorphism, and Ontogenetic Melanism in a Captive Population of the Endangered Freshwater Turtle Mauremys reevesii (Gray 1831). Ecology and Evolution 16(5):e73565. doi:10.1002/ece3.73565 — 个体级原始数据：Supporting Information Data S1（ECE3-16-e73565-s001.xlsx，工作表 'raw data'）",
    "evidence": "L1",
    "sourceShort": "Kang 2026",
    "caveats": [],
    "coverage": {
     "run": 10,
     "total": 15,
     "ratio": 0.667,
     "domain": [
      25.0,
      300.0
     ],
     "dataRanges": [
      [
       37.71,
       202.9
      ]
     ]
    },
    "coverageText": "10/15 = 67%",
    "coverageBasis": "分母 = 该物种完整体型范围 25–300 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 25–300 mm",
    "segments": [
     {
      "lo": 37.71,
      "hi": 202.9,
      "a": 0.000462317,
      "b": 2.8302,
      "r2": 0.9737,
      "sd": 0.0566,
      "interp": false,
      "src": "Kang H, Seo J, Bae JH, Koo KS, Jang Y (2026) Age Structure, Sexual Dimorphism, and Ontogenetic Melanism in a Captive Population of the Endangered Freshwater Turtle Mauremys reevesii (Gray 1831). Ecology and Evolution 16(5):e73565. doi:10.1002/ece3.73565 — 个体级原始数据：Supporting Information Data S1（ECE3-16-e73565-s001.xlsx，工作表 'raw data'）"
     }
    ],
    "band95": 29.8
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "captive_female",
    "groupZh": "家养·雌性",
    "groupEn": "Captive · Female",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 92,
    "nText": "样本 92",
    "nTextEn": "n = 92",
    "source": "Kang H, Seo J, Bae JH, Koo KS, Jang Y (2026) Age Structure, Sexual Dimorphism, and Ontogenetic Melanism in a Captive Population of the Endangered Freshwater Turtle Mauremys reevesii (Gray 1831). Ecology and Evolution 16(5):e73565. doi:10.1002/ece3.73565 — 个体级原始数据：Supporting Information Data S1（ECE3-16-e73565-s001.xlsx，工作表 'raw data'）",
    "evidence": "L1",
    "sourceShort": "Kang 2026",
    "caveats": [],
    "coverage": {
     "run": 9,
     "total": 15,
     "ratio": 0.6,
     "domain": [
      0.0,
      22.46
     ],
     "dataRanges": [
      [
       3.0,
       16.0
      ]
     ]
    },
    "coverageText": "9/15 = 60%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 22.5 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 22.5 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 198.2,
     "k": 0.1334,
     "t0": 0.0,
     "L0": 0.0
    },
    "t95": 22.456763669820024,
    "t95Text": "22.5 年",
    "t95TextEn": "22.5 yr"
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "captive_male",
    "groupZh": "家养·雄性",
    "groupEn": "Captive · Male",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 37,
    "nText": "样本 37",
    "nTextEn": "n = 37",
    "source": "Kang H, Seo J, Bae JH, Koo KS, Jang Y (2026) Age Structure, Sexual Dimorphism, and Ontogenetic Melanism in a Captive Population of the Endangered Freshwater Turtle Mauremys reevesii (Gray 1831). Ecology and Evolution 16(5):e73565. doi:10.1002/ece3.73565 — 个体级原始数据：Supporting Information Data S1（ECE3-16-e73565-s001.xlsx，工作表 'raw data'）",
    "evidence": "L1",
    "sourceShort": "Kang 2026",
    "caveats": [],
    "coverage": {
     "run": 10,
     "total": 15,
     "ratio": 0.667,
     "domain": [
      0.0,
      7.98
     ],
     "dataRanges": [
      [
       3.0,
       12.0
      ]
     ]
    },
    "coverageText": "10/15 = 67%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 8.0 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 8.0 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 115.01,
     "k": 0.3754,
     "t0": 0.0,
     "L0": 0.0
    },
    "t95": 7.9801072817101515,
    "t95Text": "8.0 年",
    "t95TextEn": "8.0 yr"
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 129,
    "nText": "样本 129",
    "nTextEn": "n = 129",
    "source": "Kang H, Seo J, Bae JH, Koo KS, Jang Y (2026) Age Structure, Sexual Dimorphism, and Ontogenetic Melanism in a Captive Population of the Endangered Freshwater Turtle Mauremys reevesii (Gray 1831). Ecology and Evolution 16(5):e73565. doi:10.1002/ece3.73565 — 个体级原始数据：Supporting Information Data S1（ECE3-16-e73565-s001.xlsx，工作表 'raw data'）",
    "evidence": "L1",
    "sourceShort": "Kang 2026",
    "caveats": [],
    "coverage": {
     "run": 9,
     "total": 15,
     "ratio": 0.6,
     "domain": [
      0.0,
      22.49
     ],
     "dataRanges": [
      [
       3.0,
       16.0
      ]
     ]
    },
    "coverageText": "9/15 = 60%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 22.5 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 22.5 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 196.44,
     "k": 0.1332,
     "t0": 0.0,
     "L0": 0.0
    },
    "t95": 22.49048253418912,
    "t95Text": "22.5 年",
    "t95TextEn": "22.5 yr"
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Mauremys_sinensis",
  "zh": "花龟",
  "latin": "Mauremys sinensis",
  "en": "Chinese Striped-necked Turtle",
  "status": "no_data",
  "hasAL": false,
  "caliberSummary": "",
  "caliberSummaryEn": "",
  "py": "huagui",
  "pyi": "hg",
  "alias": [
   "花龟",
   "中华花龟",
   "斑龟",
   "珍珠龟"
  ],
  "aliasEn": [
   "Chinese Striped-necked Turtle",
   "Chinese Pond Turtle"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "turtle",
  "refs": [
   "Chen & Lue 1998, Copeia 1998(4):944–952（经 Add-my-Pet 转引，L3）",
   "Di Blasio 2021（意/波/台种群体尺，内部不自洽，已剔除）",
   "陳添喜碩士論文（hdl.handle.net/11296/xng65c，同时覆盖花龟与黄缘闭壳龟，尚未取得）"
  ],
  "curves": [],
  "lowRelCurves": []
 },
 {
  "id": "Nephrurus_spp",
  "zh": "瘤尾守宫（属）",
  "latin": "Nephrurus spp.",
  "en": "Knob-tailed Geckos",
  "status": "no_data",
  "hasAL": false,
  "caliberSummary": "",
  "caliberSummaryEn": "",
  "py": "liuweishougong",
  "pyi": "lwsg",
  "alias": [
   "瘤尾守宫",
   "瘤尾",
   "珠尾虎",
   "珠尾虎属",
   "细皮瘤尾守宫",
   "粗糙瘤尾守宫",
   "斑纹瘤尾守宫"
  ],
  "aliasEn": [
   "Knob-tailed Gecko",
   "Knob-tailed Geckos"
  ],
  "scopeShort": "⚠️ 属级条目（暂无可靠数据）：Nephrurus 属现有 11 个种，本条目不区分到种。另注：常被混称的 Underwoodisaurus milii（粗尾守宫）是另一个属。",
  "scopeShortEn": "⚠️ Genus-level entry (no reliable data). Nephrurus currently has 11 species; this entry does not split them. Note that Underwoodisaurus milii is a different genus and is often confused with it.",
  "taxon": "lizard",
  "refs": [
   "McGill 2015, British Herpetological Society 134（*N. cinctus*，4 只出壳幼体）",
   "Harvey 1983（*N. deleani*，2 只成体）",
   "Hays et al. 2019（*N. levis* n=27、*N. laevissimus* n=52，仅均值）",
   "Smith 2018（*N. stellatus* 逐个体数据已测未公开）",
   "Kealley et al. 2020（*N. cinctus* 提升为独立种）"
  ],
  "curves": [],
  "lowRelCurves": []
 },
 {
  "id": "Pantherophis_guttatus",
  "zh": "玉米锦蛇",
  "latin": "Pantherophis guttatus",
  "en": "Corn Snake",
  "status": "ok",
  "hasAL": false,
  "caliberSummary": "全长（TL）",
  "caliberSummaryEn": "Total length (TL)",
  "py": "yumijinshe",
  "pyi": "ymjs",
  "alias": [
   "玉米蛇"
  ],
  "aliasEn": [
   "Corn Snake"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "snake",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "TL",
    "caliberText": "全长（TL）",
    "caliberTextEn": "Total length (TL)",
    "n": 146,
    "nText": "样本 146",
    "nTextEn": "n = 146",
    "source": "Barnard, Hollinger & Romaine 1979, Copeia 1979(4):739-741; 个体配对数据由 Add-my-Pet (VU Amsterdam) 自图版数字化并公开（条目 Pantherophis_guttatus / mydata_Pantherophis_guttatus.m）",
    "evidence": "L2",
    "sourceShort": "Barnard 1979",
    "caveats": [],
    "coverage": {
     "run": 11,
     "total": 15,
     "ratio": 0.733,
     "domain": [
      300,
      1800
     ],
     "dataRanges": [
      [
       302.4,
       1334.7
      ]
     ]
    },
    "coverageText": "11/15 = 73%",
    "coverageBasis": "分母 = 该物种完整体型范围 300–1800 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 300–1800 mm",
    "segments": [
     {
      "lo": 302.4,
      "hi": 1334.7,
      "a": 1.9276595741994154e-07,
      "b": 3.0291,
      "r2": 0.9904,
      "sd": 0.0537,
      "interp": false,
      "src": "Barnard, Hollinger & Romaine 1979, Copeia 1979(4):739-741; 个体配对数据由 Add-my-Pet (VU Amsterdam) 自图版数字化并公开（条目 Pantherophis_guttatus / mydata_Pantherophis_guttatus.m）"
     }
    ],
    "band95": 29.0
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Pelodiscus_sinensis",
  "zh": "中华鳖",
  "latin": "Pelodiscus sinensis",
  "en": "Chinese Softshell Turtle",
  "status": "ok",
  "hasAL": false,
  "caliberSummary": "直甲长（SCL）、体长（原文未说明量法）",
  "caliberSummaryEn": "Straight carapace length (SCL), Length (method not stated) (not stated)",
  "py": "zhonghuabie",
  "pyi": "zhb",
  "alias": [
   "中华鳖",
   "甲鱼",
   "团鱼",
   "王八"
  ],
  "aliasEn": [
   "Chinese Softshell Turtle"
  ],
  "scopeShort": "⚠️ 本卡混含两个分类单元：多数数据来自黄河种群，而该种群现已归入北方中华鳖 P. maackii；P. sinensis s.s.（中国大陆南部与台湾）本身暂无数据。",
  "scopeShortEn": "⚠️ This card pools two taxonomic units: the data come mainly from the Yellow River population, which is now assigned to Pelodiscus maackii. There is no data for P. sinensis s.s. proper.",
  "taxon": "turtle",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 13,
    "nText": "样本 13",
    "nTextEn": "n = 13",
    "source": "Kong et al. 2021, Chelonian Conservation and Biology 20(1)（陕西大荔黄河，笼式陷阱捕获；全文明确为 straight-line carapace length (SCL)）",
    "evidence": "L1",
    "sourceShort": "Kong 2021",
    "caveats": [
     "small_n",
     "single_wild_population"
    ],
    "coverage": {
     "run": 4,
     "total": 15,
     "ratio": 0.267,
     "domain": [
      25.0,
      330.0
     ],
     "dataRanges": [
      [
       175.0,
       230.0
      ]
     ]
    },
    "coverageText": "4/15 = 27%",
    "coverageBasis": "分母 = 该物种完整体型范围 25–330 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 25–330 mm",
    "segments": [
     {
      "lo": 175.0,
      "hi": 230.0,
      "a": 0.0001108831,
      "b": 3.0207,
      "r2": 0.6516,
      "sd": 0.0977,
      "interp": false,
      "src": "Kong et al. 2021, Chelonian Conservation and Biology 20(1)（陕西大荔黄河，笼式陷阱捕获；全文明确为 straight-line carapace length (SCL)）"
     }
    ],
    "band95": 55.4
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "unspecified",
    "caliberText": "体长（原文未说明量法）",
    "caliberTextEn": "Length (method not stated) (not stated)",
    "n": 22,
    "nText": "样本 22",
    "nTextEn": "n = 22",
    "source": "Zhu et al. 2025, Ecology and Evolution（doi 10.1002/ece3.70789 / PMC11739605）Table 2（陕西大荔黄河，21 只水生+1 只陆栖越冬个体）",
    "evidence": "L1",
    "sourceShort": "Zhu 2025",
    "caveats": [
     "caliber_unspecified",
     "small_n",
     "single_wild_population"
    ],
    "coverage": {
     "run": 3,
     "total": 15,
     "ratio": 0.2,
     "domain": [
      25.0,
      330.0
     ],
     "dataRanges": [
      [
       193.0,
       240.0
      ]
     ]
    },
    "coverageText": "3/15 = 20%",
    "coverageBasis": "分母 = 该物种完整体型范围 25–330 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 25–330 mm",
    "segments": [
     {
      "lo": 193.0,
      "hi": 240.0,
      "a": 0.0388504378,
      "b": 1.9286,
      "r2": 0.6584,
      "sd": 0.0332,
      "interp": false,
      "src": "Zhu et al. 2025, Ecology and Evolution（doi 10.1002/ece3.70789 / PMC11739605）Table 2（陕西大荔黄河，21 只水生+1 只陆栖越冬个体）"
     }
    ],
    "band95": 19.0,
    "caliberInferred": true,
    "caliberUncertaintyLen": 5.0,
    "caliberUncertaintyPct": 9.9,
    "band95Combined": true
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Pituophis_catenifer_sayi",
  "zh": "牛蛇",
  "latin": "Pituophis catenifer sayi",
  "en": "Bullsnake",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "吻肛长（SVL）",
  "caliberSummaryEn": "Snout–vent length (SVL)",
  "py": "niushe",
  "pyi": "ns",
  "alias": [
   "松蛇",
   "牛蛇",
   "草原松蛇"
  ],
  "aliasEn": [
   "Bullsnake",
   "Gopher Snake"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "snake",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_male",
    "groupZh": "野外·雄性",
    "groupEn": "Wild · Male",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 384,
    "nText": "样本 384",
    "nTextEn": "n = 384",
    "source": "Platt, D.R. 1984. Growth of Bullsnakes (Pituophis melanoleucus sayi) on a sand prairie in south central Kansas. Pp. 41-56 in Vertebrate Ecology and Systematics: a Tribute to Henry S. Fitch (R.A. Seigel et al., eds.). Univ. Kansas Mus. Nat. Hist. Spec. Publ. 10.（Table 9，p.48；全文扫描：Internet Archive item vertebrateecolog00univ，leaf 61 = p.48）",
    "evidence": "L1",
    "sourceShort": "Platt 1984",
    "caveats": [
     "no_spread_reported"
    ],
    "coverage": {
     "run": 12,
     "total": 15,
     "ratio": 0.8,
     "domain": [
      363.0,
      1900.0
     ],
     "dataRanges": [
      [
       363.0,
       1420.0
      ]
     ]
    },
    "coverageText": "12/15 = 80%",
    "coverageBasis": "分母 = 该物种完整体型范围 363–1900 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 363–1900 mm",
    "segments": [
     {
      "lo": 363.0,
      "hi": 1420.0,
      "a": 1.0573726449900901e-06,
      "b": 2.8,
      "r2": null,
      "sd": null,
      "interp": false,
      "src": "Platt, D.R. 1984. Growth of Bullsnakes (Pituophis melanoleucus sayi) on a sand prairie in south central Kansas. Pp. 41-56 in Vertebrate Ecology and Systematics: a Tribute to Henry S. Fitch (R.A. Seigel et al., eds.). Univ. Kansas Mus. Nat. Hist. Spec. Publ. 10.（Table 9，p.48；全文扫描：Internet Archive item vertebrateecolog00univ，leaf 61 = p.48）"
     }
    ],
    "band95": null
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_female",
    "groupZh": "野外·雌性",
    "groupEn": "Wild · Female",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 325,
    "nText": "样本 325",
    "nTextEn": "n = 325",
    "source": "Platt, D.R. 1984. Growth of Bullsnakes (Pituophis melanoleucus sayi) on a sand prairie in south central Kansas. Pp. 41-56 in Vertebrate Ecology and Systematics: a Tribute to Henry S. Fitch (R.A. Seigel et al., eds.). Univ. Kansas Mus. Nat. Hist. Spec. Publ. 10.（Table 9，p.48；全文扫描：Internet Archive item vertebrateecolog00univ，leaf 61 = p.48）",
    "evidence": "L1",
    "sourceShort": "Platt 1984",
    "caveats": [
     "no_spread_reported"
    ],
    "coverage": {
     "run": 11,
     "total": 15,
     "ratio": 0.733,
     "domain": [
      363.0,
      1900.0
     ],
     "dataRanges": [
      [
       363.0,
       1300.0
      ]
     ]
    },
    "coverageText": "11/15 = 73%",
    "coverageBasis": "分母 = 该物种完整体型范围 363–1900 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 363–1900 mm",
    "segments": [
     {
      "lo": 363.0,
      "hi": 1300.0,
      "a": 5.469014005329703e-07,
      "b": 2.9,
      "r2": null,
      "sd": null,
      "interp": false,
      "src": "Platt, D.R. 1984. Growth of Bullsnakes (Pituophis melanoleucus sayi) on a sand prairie in south central Kansas. Pp. 41-56 in Vertebrate Ecology and Systematics: a Tribute to Henry S. Fitch (R.A. Seigel et al., eds.). Univ. Kansas Mus. Nat. Hist. Spec. Publ. 10.（Table 9，p.48；全文扫描：Internet Archive item vertebrateecolog00univ，leaf 61 = p.48）"
     }
    ],
    "band95": null
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 471,
    "nText": "样本 471",
    "nTextEn": "n = 471",
    "source": "Platt, D.R. 1984. Growth of Bullsnakes (Pituophis melanoleucus sayi) on a sand prairie in south central Kansas. Pp. 41-56 in Vertebrate Ecology and Systematics: a Tribute to Henry S. Fitch (R.A. Seigel et al., eds.). Univ. Kansas Mus. Nat. Hist. Spec. Publ. 10.（p.51 正文生长曲线读数 + Table 5 p.45 首年逐月均值 + p.48 孵化幼蛇实测；全文扫描：Internet Archive item vertebrateecolog00univ）",
    "evidence": "L2",
    "sourceShort": "Platt 1984",
    "caveats": [],
    "coverage": {
     "run": 2,
     "total": 15,
     "ratio": 0.133,
     "domain": [
      0.0,
      3.654518283570709
     ],
     "dataRanges": [
      [
       0.0,
       5.0
      ]
     ]
    },
    "coverageText": "2/15 = 13%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 3.7 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 3.7 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 1102.476,
     "k": 0.819725,
     "L0": 365.819,
     "t0": 0.0
    },
    "t95": 3.1626958050115115,
    "t95Text": "3.2 年",
    "t95TextEn": "3.2 yr"
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Platysternon_megacephalum",
  "zh": "鹰嘴龟",
  "latin": "Platysternon megacephalum",
  "en": "Big-headed Turtle",
  "status": "ok",
  "hasAL": false,
  "caliberSummary": "腹甲长（PL）",
  "caliberSummaryEn": "Plastron length (PL)",
  "py": "yingzuigui",
  "pyi": "yzg",
  "alias": [
   "大头龟",
   "平胸龟",
   "大头平胸龟",
   "鹰嘴"
  ],
  "aliasEn": [
   "Big-headed Turtle"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "turtle",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_female",
    "groupZh": "家养·雌性",
    "groupEn": "Captive · Female",
    "caliber": "PL",
    "caliberText": "腹甲长（PL）",
    "caliberTextEn": "Plastron length (PL)",
    "n": 12,
    "nText": "样本 12",
    "nTextEn": "n = 12",
    "source": "Gong S, Hua L, Ge Y, Cao D (2019) Unique multiple paternity in the endangered big-headed turtle (Platysternon megacephalum) in an ex situ population in South China. Ecology and Evolution 9(17):9869-9877. doi:10.1002/ece3.5528 — Table 1",
    "evidence": "L1",
    "sourceShort": "Gong 2019",
    "caveats": [],
    "coverage": {
     "run": 6,
     "total": 15,
     "ratio": 0.4,
     "domain": [
      90.0,
      150.0
     ],
     "dataRanges": [
      [
       91.0,
       113.0
      ]
     ]
    },
    "coverageText": "6/15 = 40%",
    "coverageBasis": "分母 = 该物种完整体型范围 90–150 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 90–150 mm",
    "segments": [
     {
      "lo": 91.0,
      "hi": 113.0,
      "a": 0.000244388,
      "b": 3.065,
      "r2": 0.8273,
      "sd": 0.0401,
      "interp": false,
      "src": "Gong S, Hua L, Ge Y, Cao D (2019) Unique multiple paternity in the endangered big-headed turtle (Platysternon megacephalum) in an ex situ population in South China. Ecology and Evolution 9(17):9869-9877. doi:10.1002/ece3.5528 — Table 1"
     }
    ],
    "band95": 20.3
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_male",
    "groupZh": "家养·雄性",
    "groupEn": "Captive · Male",
    "caliber": "PL",
    "caliberText": "腹甲长（PL）",
    "caliberTextEn": "Plastron length (PL)",
    "n": 8,
    "nText": "样本 8",
    "nTextEn": "n = 8",
    "source": "Gong S, Hua L, Ge Y, Cao D (2019) Unique multiple paternity in the endangered big-headed turtle (Platysternon megacephalum) in an ex situ population in South China. Ecology and Evolution 9(17):9869-9877. doi:10.1002/ece3.5528 — Table 1",
    "evidence": "L1",
    "sourceShort": "Gong 2019",
    "caveats": [],
    "coverage": {
     "run": 12,
     "total": 15,
     "ratio": 0.8,
     "domain": [
      90.0,
      150.0
     ],
     "dataRanges": [
      [
       104.0,
       148.0
      ]
     ]
    },
    "coverageText": "12/15 = 80%",
    "coverageBasis": "分母 = 该物种完整体型范围 90–150 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 90–150 mm",
    "segments": [
     {
      "lo": 104.0,
      "hi": 148.0,
      "a": 1.51708e-05,
      "b": 3.6663,
      "r2": 0.9549,
      "sd": 0.0513,
      "interp": false,
      "src": "Gong S, Hua L, Ge Y, Cao D (2019) Unique multiple paternity in the endangered big-headed turtle (Platysternon megacephalum) in an ex situ population in South China. Ecology and Evolution 9(17):9869-9877. doi:10.1002/ece3.5528 — Table 1"
     }
    ],
    "band95": 26.6
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "PL",
    "caliberText": "腹甲长（PL）",
    "caliberTextEn": "Plastron length (PL)",
    "n": 20,
    "nText": "样本 20",
    "nTextEn": "n = 20",
    "source": "Gong S, Hua L, Ge Y, Cao D (2019) Unique multiple paternity in the endangered big-headed turtle (Platysternon megacephalum) in an ex situ population in South China. Ecology and Evolution 9(17):9869-9877. doi:10.1002/ece3.5528 — Table 1",
    "evidence": "L1",
    "sourceShort": "Gong 2019",
    "caveats": [],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      90.0,
      150.0
     ],
     "dataRanges": [
      [
       91.0,
       148.0
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 该物种完整体型范围 90–150 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 90–150 mm",
    "segments": [
     {
      "lo": 91.0,
      "hi": 148.0,
      "a": 2.43838e-05,
      "b": 3.5651,
      "r2": 0.9503,
      "sd": 0.0437,
      "interp": false,
      "src": "Gong S, Hua L, Ge Y, Cao D (2019) Unique multiple paternity in the endangered big-headed turtle (Platysternon megacephalum) in an ex situ population in South China. Ecology and Evolution 9(17):9869-9877. doi:10.1002/ece3.5528 — Table 1"
     }
    ],
    "band95": 22.3
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Pogona_vitticeps",
  "zh": "鬃狮蜥",
  "latin": "Pogona vitticeps",
  "en": "Central Bearded Dragon",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "吻肛长（SVL）",
  "caliberSummaryEn": "Snout–vent length (SVL)",
  "py": "zongshixi",
  "pyi": "zsx",
  "alias": [
   "鬃狮",
   "胡须龙",
   "中部鬃狮蜥"
  ],
  "aliasEn": [
   "Bearded Dragon",
   "Beardie"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "lizard",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_male",
    "groupZh": "野外·雄性",
    "groupEn": "Wild · Male",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 39,
    "nText": "样本 39",
    "nTextEn": "n = 39",
    "source": "Wild KH, Roe JH, Schwanz L, Georges A & Sarre SD 2022, Molecular Ecology 31(8):2281-2292, doi:10.1111/mec.16404 — 个体级 SVL+体重原始数据：Dryad Digital Repository doi:10.5061/dryad.4tmpg4fbd（文件 MCP.KDE.Morp.Summ.csv）",
    "evidence": "L1",
    "sourceShort": "Wild 2022",
    "caveats": [],
    "coverage": {
     "run": 10,
     "total": 15,
     "ratio": 0.667,
     "domain": [
      100.0,
      260.0
     ],
     "dataRanges": [
      [
       165.0,
       256.0
      ]
     ]
    },
    "coverageText": "10/15 = 67%",
    "coverageBasis": "分母 = 该物种完整体型范围 100–260 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 100–260 mm",
    "segments": [
     {
      "lo": 165.0,
      "hi": 256.0,
      "a": 0.000220043,
      "b": 2.643,
      "r2": 0.8783,
      "sd": 0.0458,
      "interp": false,
      "src": "Wild KH, Roe JH, Schwanz L, Georges A & Sarre SD 2022, Molecular Ecology 31(8):2281-2292, doi:10.1111/mec.16404 — 个体级 SVL+体重原始数据：Dryad Digital Repository doi:10.5061/dryad.4tmpg4fbd（文件 MCP.KDE.Morp.Summ.csv）"
     }
    ],
    "band95": 22.0
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_female",
    "groupZh": "野外·雌性",
    "groupEn": "Wild · Female",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 14,
    "nText": "样本 14",
    "nTextEn": "n = 14",
    "source": "Wild KH, Roe JH, Schwanz L, Georges A & Sarre SD 2022, Molecular Ecology 31(8):2281-2292, doi:10.1111/mec.16404 — 个体级 SVL+体重原始数据：Dryad Digital Repository doi:10.5061/dryad.4tmpg4fbd（文件 MCP.KDE.Morp.Summ.csv）",
    "evidence": "L1",
    "sourceShort": "Wild 2022",
    "caveats": [],
    "coverage": {
     "run": 10,
     "total": 15,
     "ratio": 0.667,
     "domain": [
      100.0,
      260.0
     ],
     "dataRanges": [
      [
       155.0,
       235.0
      ]
     ]
    },
    "coverageText": "10/15 = 67%",
    "coverageBasis": "分母 = 该物种完整体型范围 100–260 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 100–260 mm",
    "segments": [
     {
      "lo": 155.0,
      "hi": 235.0,
      "a": 6.22774e-05,
      "b": 2.8735,
      "r2": 0.8656,
      "sd": 0.0687,
      "interp": false,
      "src": "Wild KH, Roe JH, Schwanz L, Georges A & Sarre SD 2022, Molecular Ecology 31(8):2281-2292, doi:10.1111/mec.16404 — 个体级 SVL+体重原始数据：Dryad Digital Repository doi:10.5061/dryad.4tmpg4fbd（文件 MCP.KDE.Morp.Summ.csv）"
     }
    ],
    "band95": 28.2
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 53,
    "nText": "样本 53",
    "nTextEn": "n = 53",
    "source": "Wild KH, Roe JH, Schwanz L, Georges A & Sarre SD 2022, Molecular Ecology 31(8):2281-2292, doi:10.1111/mec.16404 — 个体级 SVL+体重原始数据：Dryad Digital Repository doi:10.5061/dryad.4tmpg4fbd（文件 MCP.KDE.Morp.Summ.csv）",
    "evidence": "L1",
    "sourceShort": "Wild 2022",
    "caveats": [],
    "coverage": {
     "run": 10,
     "total": 15,
     "ratio": 0.667,
     "domain": [
      100.0,
      260.0
     ],
     "dataRanges": [
      [
       155.0,
       256.0
      ]
     ]
    },
    "coverageText": "10/15 = 67%",
    "coverageBasis": "分母 = 该物种完整体型范围 100–260 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 100–260 mm",
    "segments": [
     {
      "lo": 155.0,
      "hi": 256.0,
      "a": 0.000109453,
      "b": 2.7707,
      "r2": 0.8936,
      "sd": 0.0519,
      "interp": false,
      "src": "Wild KH, Roe JH, Schwanz L, Georges A & Sarre SD 2022, Molecular Ecology 31(8):2281-2292, doi:10.1111/mec.16404 — 个体级 SVL+体重原始数据：Dryad Digital Repository doi:10.5061/dryad.4tmpg4fbd（文件 MCP.KDE.Morp.Summ.csv）"
     }
    ],
    "band95": 22.8
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_male",
    "groupZh": "家养·雄性",
    "groupEn": "Captive · Male",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 12,
    "nText": "样本 12",
    "nTextEn": "n = 12",
    "source": "Denommé Stauder M 2026, Analyzing common husbandry practices and potential indicators of welfare in Pogona vitticeps, PhD thesis, Brock University — 个体级 年龄/SVL/体重 原始数据：Borealis Dataverse doi:10.5683/SP3/GIUPVO 与 doi:10.5683/SP3/2NVBVK（同一 Brock 圈养种群，n=25）",
    "evidence": "L1",
    "sourceShort": "Denommé 2026",
    "caveats": [],
    "coverage": {
     "run": 12,
     "total": 15,
     "ratio": 0.8,
     "domain": [
      100.0,
      260.0
     ],
     "dataRanges": [
      [
       114.0,
       215.0
      ]
     ]
    },
    "coverageText": "12/15 = 80%",
    "coverageBasis": "分母 = 该物种完整体型范围 100–260 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 100–260 mm",
    "segments": [
     {
      "lo": 114.0,
      "hi": 215.0,
      "a": 6.3181e-05,
      "b": 2.9413,
      "r2": 0.9563,
      "sd": 0.0464,
      "interp": false,
      "src": "Denommé Stauder M 2026, Analyzing common husbandry practices and potential indicators of welfare in Pogona vitticeps, PhD thesis, Brock University — 个体级 年龄/SVL/体重 原始数据：Borealis Dataverse doi:10.5683/SP3/GIUPVO 与 doi:10.5683/SP3/2NVBVK（同一 Brock 圈养种群，n=25）"
     }
    ],
    "band95": 19.9
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_female",
    "groupZh": "家养·雌性",
    "groupEn": "Captive · Female",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 13,
    "nText": "样本 13",
    "nTextEn": "n = 13",
    "source": "Denommé Stauder M 2026, Analyzing common husbandry practices and potential indicators of welfare in Pogona vitticeps, PhD thesis, Brock University — 个体级 年龄/SVL/体重 原始数据：Borealis Dataverse doi:10.5683/SP3/GIUPVO 与 doi:10.5683/SP3/2NVBVK（同一 Brock 圈养种群，n=25）",
    "evidence": "L1",
    "sourceShort": "Denommé 2026",
    "caveats": [],
    "coverage": {
     "run": 12,
     "total": 15,
     "ratio": 0.8,
     "domain": [
      100.0,
      260.0
     ],
     "dataRanges": [
      [
       101.0,
       221.0
      ]
     ]
    },
    "coverageText": "12/15 = 80%",
    "coverageBasis": "分母 = 该物种完整体型范围 100–260 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 100–260 mm",
    "segments": [
     {
      "lo": 101.0,
      "hi": 221.0,
      "a": 2.66989e-05,
      "b": 3.1112,
      "r2": 0.9539,
      "sd": 0.0506,
      "interp": false,
      "src": "Denommé Stauder M 2026, Analyzing common husbandry practices and potential indicators of welfare in Pogona vitticeps, PhD thesis, Brock University — 个体级 年龄/SVL/体重 原始数据：Borealis Dataverse doi:10.5683/SP3/GIUPVO 与 doi:10.5683/SP3/2NVBVK（同一 Brock 圈养种群，n=25）"
     }
    ],
    "band95": 27.6
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 25,
    "nText": "样本 25",
    "nTextEn": "n = 25",
    "source": "Denommé Stauder M 2026, Analyzing common husbandry practices and potential indicators of welfare in Pogona vitticeps, PhD thesis, Brock University — 个体级 年龄/SVL/体重 原始数据：Borealis Dataverse doi:10.5683/SP3/GIUPVO 与 doi:10.5683/SP3/2NVBVK（同一 Brock 圈养种群，n=25）",
    "evidence": "L1",
    "sourceShort": "Denommé 2026",
    "caveats": [],
    "coverage": {
     "run": 12,
     "total": 15,
     "ratio": 0.8,
     "domain": [
      100.0,
      260.0
     ],
     "dataRanges": [
      [
       101.0,
       221.0
      ]
     ]
    },
    "coverageText": "12/15 = 80%",
    "coverageBasis": "分母 = 该物种完整体型范围 100–260 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 100–260 mm",
    "segments": [
     {
      "lo": 101.0,
      "hi": 221.0,
      "a": 4.08087e-05,
      "b": 3.0274,
      "r2": 0.954,
      "sd": 0.049,
      "interp": false,
      "src": "Denommé Stauder M 2026, Analyzing common husbandry practices and potential indicators of welfare in Pogona vitticeps, PhD thesis, Brock University — 个体级 年龄/SVL/体重 原始数据：Borealis Dataverse doi:10.5683/SP3/GIUPVO 与 doi:10.5683/SP3/2NVBVK（同一 Brock 圈养种群，n=25）"
     }
    ],
    "band95": 23.0
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 25,
    "nText": "样本 25",
    "nTextEn": "n = 25",
    "source": "Denommé Stauder M 2026, Analyzing common husbandry practices and potential indicators of welfare in Pogona vitticeps, PhD thesis, Brock University — 个体级 年龄/SVL/体重 原始数据：Borealis Dataverse doi:10.5683/SP3/GIUPVO 与 doi:10.5683/SP3/2NVBVK（同一 Brock 圈养种群，n=25）",
    "evidence": "L1",
    "sourceShort": "Denommé 2026",
    "caveats": [],
    "coverage": {
     "run": 3,
     "total": 15,
     "ratio": 0.2,
     "domain": [
      0.0,
      0.9956262645826442
     ],
     "dataRanges": [
      [
       0.493,
       2.144
      ]
     ]
    },
    "coverageText": "3/15 = 20%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 1.0 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 1.0 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 210.7,
     "k": 2.1025,
     "t0": 0.0,
     "L0": 0.0
    },
    "t95": 1.424842936292029,
    "t95Text": "1.4 年",
    "t95TextEn": "1.4 yr"
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Python_bivittatus",
  "zh": "缅甸蟒",
  "latin": "Python bivittatus",
  "en": "Burmese Python",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "吻肛长（SVL）、全长（TL）",
  "caliberSummaryEn": "Snout–vent length (SVL), Total length (TL)",
  "py": "miandianmang",
  "pyi": "mdm",
  "alias": [
   "缅甸蟒",
   "缅甸岩蟒",
   "缅蟒",
   "burmese python"
  ],
  "aliasEn": [
   "Burmese Python"
  ],
  "scopeShort": "⚠️ 本卡只有体长-体重，没有年龄-体长 —— 唯一可得的年龄数据来自高投喂养殖场，生长速度远快于宠物个体，发布会误导。⚠️ 野生数据来自佛罗里达入侵种群（非原产地），且口径分 SVL 与 TL 两套，不可互换。",
  "scopeShortEn": "⚠️ Length-weight only; no age-length (the only age data come from a high-feeding commercial farm and would mislead). ⚠️ Wild data are from the Florida invasive population, not the native range, and come in two separate calibers (SVL and TL) that must not be interchanged.",
  "taxon": "snake",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 200,
    "nText": "样本 200",
    "nTextEn": "n = 200",
    "source": "Taggart PL, Morris S, Caraguel CGB, Baxter-Gilbert J (2021) The impact of PIT tags on the growth and survival of pythons is insignificant in randomised controlled trial. PeerJ 9: e11531. doi:10.7717/peerj.11531。个体级原始数据（Supplemental Information 2, Raw data of python measurements）经 Europe PMC supplementaryFiles 取得（PMC8254472），文件 peerj-09-11531-s002.xlsx，工作表 Time_05",
    "evidence": "L1",
    "sourceShort": "Taggart 2021",
    "caveats": [
     "single_captive_population",
     "extrapolation_only"
    ],
    "coverage": {
     "run": 3,
     "total": 15,
     "ratio": 0.2,
     "domain": [
      0.0,
      6.9554
     ],
     "dataRanges": [
      [
       0.0,
       1.057
      ]
     ]
    },
    "coverageText": "3/15 = 20%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 7.0 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 7.0 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 5174.777,
     "k": 0.4307,
     "t0": 0.0,
     "L0": 582.0037
    },
    "t95": 6.678477068785076,
    "t95Text": "6.7 年",
    "t95TextEn": "6.7 yr"
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 3986,
    "nText": "观测 3986 次",
    "nTextEn": "n = 3986 observations",
    "source": "Currylow AF, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive data of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA, 1995-2021: U.S. Geological Survey data release. doi:10.5066/P9CZI2KO https://www.sciencebase.gov/catalog/item/63221898d34e71c6d67ab5ab (file: FL Specimen Management Database Pre-2022PYMO.csv, 7471 行)。配套论文：Currylow AFT, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive phenology of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA. NeoBiota 78: 129-158. doi:10.3897/neobiota.78.93788",
    "evidence": "L1",
    "sourceShort": "Currylow 2022",
    "caveats": [
     "single_wild_population"
    ],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      396.0,
      4980.0
     ],
     "dataRanges": [
      [
       396.0,
       4980.0
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 该物种完整体型范围 396–4980 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 396–4980 mm",
    "segments": [
     {
      "lo": 396.0,
      "hi": 4980.0,
      "a": 2.088933039657787e-07,
      "b": 3.1485238851941384,
      "r2": 0.9863532237005583,
      "sd": 0.096,
      "interp": false,
      "src": "Currylow AF, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive data of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA, 1995-2021: U.S. Geological Survey data release. doi:10.5066/P9CZI2KO https://www.sciencebase.gov/catalog/item/63221898d34e71c6d67ab5ab (file: FL Specimen Management Database Pre-2022PYMO.csv, 7471 行)。配套论文：Currylow AFT, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive phenology of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA. NeoBiota 78: 129-158. doi:10.3897/neobiota.78.93788"
     }
    ],
    "band95": 54.2
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_male",
    "groupZh": "野外·雄性",
    "groupEn": "Wild · Male",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 2091,
    "nText": "观测 2091 次",
    "nTextEn": "n = 2091 observations",
    "source": "Currylow AF, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive data of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA, 1995-2021: U.S. Geological Survey data release. doi:10.5066/P9CZI2KO https://www.sciencebase.gov/catalog/item/63221898d34e71c6d67ab5ab (file: FL Specimen Management Database Pre-2022PYMO.csv, 7471 行)。配套论文：Currylow AFT, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive phenology of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA. NeoBiota 78: 129-158. doi:10.3897/neobiota.78.93788",
    "evidence": "L1",
    "sourceShort": "Currylow 2022",
    "caveats": [
     "single_wild_population"
    ],
    "coverage": {
     "run": 12,
     "total": 15,
     "ratio": 0.8,
     "domain": [
      396.0,
      4980.0
     ],
     "dataRanges": [
      [
       420.0,
       3995.0
      ]
     ]
    },
    "coverageText": "12/15 = 80%",
    "coverageBasis": "分母 = 该物种完整体型范围 396–4980 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 396–4980 mm",
    "segments": [
     {
      "lo": 420.0,
      "hi": 3995.0,
      "a": 1.9432666664151805e-07,
      "b": 3.160069429568873,
      "r2": 0.9860057379796662,
      "sd": 0.0901,
      "interp": false,
      "src": "Currylow AF, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive data of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA, 1995-2021: U.S. Geological Survey data release. doi:10.5066/P9CZI2KO https://www.sciencebase.gov/catalog/item/63221898d34e71c6d67ab5ab (file: FL Specimen Management Database Pre-2022PYMO.csv, 7471 行)。配套论文：Currylow AFT, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive phenology of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA. NeoBiota 78: 129-158. doi:10.3897/neobiota.78.93788"
     }
    ],
    "band95": 50.1
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_female",
    "groupZh": "野外·雌性",
    "groupEn": "Wild · Female",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 1772,
    "nText": "观测 1772 次",
    "nTextEn": "n = 1772 observations",
    "source": "Currylow AF, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive data of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA, 1995-2021: U.S. Geological Survey data release. doi:10.5066/P9CZI2KO https://www.sciencebase.gov/catalog/item/63221898d34e71c6d67ab5ab (file: FL Specimen Management Database Pre-2022PYMO.csv, 7471 行)。配套论文：Currylow AFT, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive phenology of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA. NeoBiota 78: 129-158. doi:10.3897/neobiota.78.93788",
    "evidence": "L1",
    "sourceShort": "Currylow 2022",
    "caveats": [
     "single_wild_population"
    ],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      396.0,
      4980.0
     ],
     "dataRanges": [
      [
       396.0,
       4980.0
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 该物种完整体型范围 396–4980 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 396–4980 mm",
    "segments": [
     {
      "lo": 396.0,
      "hi": 4980.0,
      "a": 2.082305503948373e-07,
      "b": 3.1467059356421916,
      "r2": 0.9867140005884883,
      "sd": 0.1009,
      "interp": false,
      "src": "Currylow AF, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive data of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA, 1995-2021: U.S. Geological Survey data release. doi:10.5066/P9CZI2KO https://www.sciencebase.gov/catalog/item/63221898d34e71c6d67ab5ab (file: FL Specimen Management Database Pre-2022PYMO.csv, 7471 行)。配套论文：Currylow AFT, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive phenology of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA. NeoBiota 78: 129-158. doi:10.3897/neobiota.78.93788"
     }
    ],
    "band95": 57.7
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "TL",
    "caliberText": "全长（TL）",
    "caliberTextEn": "Total length (TL)",
    "n": 2671,
    "nText": "观测 2671 次",
    "nTextEn": "n = 2671 observations",
    "source": "Currylow AF, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive data of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA, 1995-2021: U.S. Geological Survey data release. doi:10.5066/P9CZI2KO https://www.sciencebase.gov/catalog/item/63221898d34e71c6d67ab5ab (file: FL Specimen Management Database Pre-2022PYMO.csv, 7471 行)。配套论文：Currylow AFT, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive phenology of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA. NeoBiota 78: 129-158. doi:10.3897/neobiota.78.93788",
    "evidence": "L1",
    "sourceShort": "Currylow 2022",
    "caveats": [
     "single_wild_population"
    ],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      490.0,
      5570.0
     ],
     "dataRanges": [
      [
       490.0,
       5570.0
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 该物种完整体型范围 490–5570 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 490–5570 mm",
    "segments": [
     {
      "lo": 490.0,
      "hi": 5570.0,
      "a": 1.261769099725888e-07,
      "b": 3.1594510746575106,
      "r2": 0.9864223967061636,
      "sd": 0.0938,
      "interp": false,
      "src": "Currylow AF, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive data of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA, 1995-2021: U.S. Geological Survey data release. doi:10.5066/P9CZI2KO https://www.sciencebase.gov/catalog/item/63221898d34e71c6d67ab5ab (file: FL Specimen Management Database Pre-2022PYMO.csv, 7471 行)。配套论文：Currylow AFT, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive phenology of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA. NeoBiota 78: 129-158. doi:10.3897/neobiota.78.93788"
     }
    ],
    "band95": 52.7
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_male",
    "groupZh": "野外·雄性",
    "groupEn": "Wild · Male",
    "caliber": "TL",
    "caliberText": "全长（TL）",
    "caliberTextEn": "Total length (TL)",
    "n": 1375,
    "nText": "观测 1375 次",
    "nTextEn": "n = 1375 observations",
    "source": "Currylow AF, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive data of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA, 1995-2021: U.S. Geological Survey data release. doi:10.5066/P9CZI2KO https://www.sciencebase.gov/catalog/item/63221898d34e71c6d67ab5ab (file: FL Specimen Management Database Pre-2022PYMO.csv, 7471 行)。配套论文：Currylow AFT, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive phenology of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA. NeoBiota 78: 129-158. doi:10.3897/neobiota.78.93788",
    "evidence": "L1",
    "sourceShort": "Currylow 2022",
    "caveats": [
     "single_wild_population"
    ],
    "coverage": {
     "run": 11,
     "total": 15,
     "ratio": 0.733,
     "domain": [
      490.0,
      5570.0
     ],
     "dataRanges": [
      [
       490.0,
       4180.0
      ]
     ]
    },
    "coverageText": "11/15 = 73%",
    "coverageBasis": "分母 = 该物种完整体型范围 490–5570 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 490–5570 mm",
    "segments": [
     {
      "lo": 490.0,
      "hi": 4180.0,
      "a": 1.2394155416962662e-07,
      "b": 3.1621981192569177,
      "r2": 0.9862366096578364,
      "sd": 0.0887,
      "interp": false,
      "src": "Currylow AF, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive data of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA, 1995-2021: U.S. Geological Survey data release. doi:10.5066/P9CZI2KO https://www.sciencebase.gov/catalog/item/63221898d34e71c6d67ab5ab (file: FL Specimen Management Database Pre-2022PYMO.csv, 7471 行)。配套论文：Currylow AFT, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive phenology of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA. NeoBiota 78: 129-158. doi:10.3897/neobiota.78.93788"
     }
    ],
    "band95": 49.3
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_female",
    "groupZh": "野外·雌性",
    "groupEn": "Wild · Female",
    "caliber": "TL",
    "caliberText": "全长（TL）",
    "caliberTextEn": "Total length (TL)",
    "n": 1196,
    "nText": "观测 1196 次",
    "nTextEn": "n = 1196 observations",
    "source": "Currylow AF, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive data of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA, 1995-2021: U.S. Geological Survey data release. doi:10.5066/P9CZI2KO https://www.sciencebase.gov/catalog/item/63221898d34e71c6d67ab5ab (file: FL Specimen Management Database Pre-2022PYMO.csv, 7471 行)。配套论文：Currylow AFT, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive phenology of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA. NeoBiota 78: 129-158. doi:10.3897/neobiota.78.93788",
    "evidence": "L1",
    "sourceShort": "Currylow 2022",
    "caveats": [
     "single_wild_population"
    ],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      490.0,
      5570.0
     ],
     "dataRanges": [
      [
       524.0,
       5570.0
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 该物种完整体型范围 490–5570 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 490–5570 mm",
    "segments": [
     {
      "lo": 524.0,
      "hi": 5570.0,
      "a": 1.1546413139779229e-07,
      "b": 3.170492354896054,
      "r2": 0.9867957046298772,
      "sd": 0.0978,
      "interp": false,
      "src": "Currylow AF, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive data of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA, 1995-2021: U.S. Geological Survey data release. doi:10.5066/P9CZI2KO https://www.sciencebase.gov/catalog/item/63221898d34e71c6d67ab5ab (file: FL Specimen Management Database Pre-2022PYMO.csv, 7471 行)。配套论文：Currylow AFT, Falk BG, Yackel Adams AA, Romagosa CM, Josimovich JM, Rochford MR, Cherkiss MS, Nafus MG, Hart KM, Mazzotti FJ, Snow RW, Reed RN (2022) Size distribution and reproductive phenology of the invasive Burmese python (Python molurus bivittatus) in the Greater Everglades Ecosystem, Florida, USA. NeoBiota 78: 129-158. doi:10.3897/neobiota.78.93788"
     }
    ],
    "band95": 55.5
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 354,
    "nText": "样本 354",
    "nTextEn": "n = 354",
    "source": "McBride LM, Kissel AM, Yackel Adams AA, Sherburne SR, Metcalf MF, Guzy JC, Hart KM, Romagosa CM, Sandfoss MR (2026) Morphometric and arboreal habitat use data of Burmese pythons (Python bivittatus) and associated digital media files in Big Cypress National Preserve, FL November 2017 to December 2024: U.S. Geological Survey data release. doi:10.5066/P1UJJNVA https://www.sciencebase.gov/catalog/item/69692528d4be0249f340db1c (file: Burmesepython_tracking_morphometrics.csv, 356 个体)",
    "evidence": "L1",
    "sourceShort": "McBride 2026",
    "caveats": [
     "single_wild_population"
    ],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      396.0,
      4980.0
     ],
     "dataRanges": [
      [
       507.0,
       4775.0
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 该物种完整体型范围 396–4980 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 396–4980 mm",
    "segments": [
     {
      "lo": 507.0,
      "hi": 4775.0,
      "a": 4.330675781091825e-07,
      "b": 3.055204751731146,
      "r2": 0.9904129185257288,
      "sd": 0.1021,
      "interp": false,
      "src": "McBride LM, Kissel AM, Yackel Adams AA, Sherburne SR, Metcalf MF, Guzy JC, Hart KM, Romagosa CM, Sandfoss MR (2026) Morphometric and arboreal habitat use data of Burmese pythons (Python bivittatus) and associated digital media files in Big Cypress National Preserve, FL November 2017 to December 2024: U.S. Geological Survey data release. doi:10.5066/P1UJJNVA https://www.sciencebase.gov/catalog/item/69692528d4be0249f340db1c (file: Burmesepython_tracking_morphometrics.csv, 356 个体)"
     }
    ],
    "band95": 58.5
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 1093,
    "nText": "观测 1093 次",
    "nTextEn": "n = 1093 observations",
    "source": "Taggart PL, Morris S, Caraguel CGB, Baxter-Gilbert J (2021) The impact of PIT tags on the growth and survival of pythons is insignificant in randomised controlled trial. PeerJ 9: e11531. doi:10.7717/peerj.11531。个体级原始数据（Supplemental Information 2, Raw data of python measurements）经 Europe PMC supplementaryFiles 取得（PMC8254472），文件 peerj-09-11531-s002.xlsx，工作表 Time_05",
    "evidence": "L1",
    "sourceShort": "Taggart 2021",
    "caveats": [
     "single_captive_population"
    ],
    "coverage": {
     "run": 8,
     "total": 15,
     "ratio": 0.533,
     "domain": [
      396.0,
      4980.0
     ],
     "dataRanges": [
      [
       560.0,
       2800.0
      ]
     ]
    },
    "coverageText": "8/15 = 53%",
    "coverageBasis": "分母 = 该物种完整体型范围 396–4980 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 396–4980 mm",
    "segments": [
     {
      "lo": 560.0,
      "hi": 2800.0,
      "a": 2.0290273655824047e-08,
      "b": 3.461070062500563,
      "r2": 0.980625119587194,
      "sd": 0.0928,
      "interp": false,
      "src": "Taggart PL, Morris S, Caraguel CGB, Baxter-Gilbert J (2021) The impact of PIT tags on the growth and survival of pythons is insignificant in randomised controlled trial. PeerJ 9: e11531. doi:10.7717/peerj.11531。个体级原始数据（Supplemental Information 2, Raw data of python measurements）经 Europe PMC supplementaryFiles 取得（PMC8254472），文件 peerj-09-11531-s002.xlsx，工作表 Time_05"
     }
    ],
    "band95": 52.0
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Python_regius",
  "zh": "球蟒",
  "latin": "Python regius",
  "en": "Ball Python",
  "status": "ok",
  "hasAL": false,
  "caliberSummary": "体长（原文未说明量法）",
  "caliberSummaryEn": "Length (method not stated) (not stated)",
  "py": "qiumang",
  "pyi": "qm",
  "alias": [
   "皇室蟒",
   "球蟒",
   "皇蟒"
  ],
  "aliasEn": [
   "Ball Python",
   "Royal Python"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "snake",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "unspecified",
    "caliberText": "体长（原文未说明量法）",
    "caliberTextEn": "Length (method not stated) (not stated)",
    "n": 35,
    "nText": "样本 35",
    "nTextEn": "n = 35",
    "source": "Hollandt T, Baur M, Wöhr A-C 2021, PLoS ONE 16(5):e0247082（表 1，n=35 个体级配对，DOI 10.1371/journal.pone.0247082）；同一表格亦见 Hollandt T 2022, LMU 博士论文 「Zur tiergerechten Haltung von Königspythons (Python regius)」表 1（edoc.ub.uni-muenchen.de/29648）",
    "evidence": "L1",
    "sourceShort": "Hollandt 2021",
    "caveats": [
     "caliber_unspecified",
     "small_n",
     "single_captive_population"
    ],
    "coverage": {
     "run": 7,
     "total": 15,
     "ratio": 0.467,
     "domain": [
      250,
      1830
     ],
     "dataRanges": [
      [
       530.0,
       1480.0
      ]
     ]
    },
    "coverageText": "7/15 = 47%",
    "coverageBasis": "分母 = 该物种完整体型范围 250–1830 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 250–1830 mm",
    "segments": [
     {
      "lo": 530.0,
      "hi": 1480.0,
      "a": 3.327025527673573e-06,
      "b": 2.8067,
      "r2": 0.8279,
      "sd": 0.0969,
      "interp": false,
      "src": "Hollandt T, Baur M, Wöhr A-C 2021, PLoS ONE 16(5):e0247082（表 1，n=35 个体级配对，DOI 10.1371/journal.pone.0247082）；同一表格亦见 Hollandt T 2022, LMU 博士论文 「Zur tiergerechten Haltung von Königspythons (Python regius)」表 1（edoc.ub.uni-muenchen.de/29648）"
     }
    ],
    "band95": 56.7,
    "caliberInferred": true,
    "caliberUncertaintyLen": 9.0,
    "caliberUncertaintyPct": 27.4,
    "band95Combined": true
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Pyxicephalus_adspersus",
  "zh": "非洲牛蛙",
  "latin": "Pyxicephalus adspersus",
  "en": "African Bullfrog",
  "status": "ok",
  "hasAL": false,
  "caliberSummary": "吻肛长（SVL）",
  "caliberSummaryEn": "Snout–vent length (SVL)",
  "py": "feizhouniuwa",
  "pyi": "fznw",
  "alias": [
   "牛蛙",
   "非洲巨蛙",
   "非洲牛蛙"
  ],
  "aliasEn": [
   "African Bullfrog",
   "Pixie Frog"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "amphibian",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_male",
    "groupZh": "野外·雄性",
    "groupEn": "Wild · Male",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 46,
    "nText": "样本 46",
    "nTextEn": "n = 46",
    "source": "Yetman CA, Mokonoto P & Ferguson JWH 2012. Conservation implications of the age/size distribution of Giant Bullfrogs (Pyxicephalus adspersus) at three peri-urban breeding sites. Herpetological Journal 22:23–32",
    "evidence": "L2",
    "sourceShort": "Yetman 2012",
    "caveats": [
     "no_spread_reported"
    ],
    "coverage": {
     "run": 8,
     "total": 15,
     "ratio": 0.533,
     "domain": [
      90,
      245
     ],
     "dataRanges": [
      [
       130,
       198
      ]
     ]
    },
    "coverageText": "8/15 = 53%",
    "coverageBasis": "分母 = 该物种完整体型范围 90–245 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 90–245 mm",
    "segments": [
     {
      "lo": 130,
      "hi": 198,
      "a": 0.0009618,
      "b": 2.5741,
      "r2": null,
      "sd": null,
      "interp": false,
      "src": "Yetman, Mokonoto & Ferguson 2012, Herpetol. J. 22:23–32 — Fig. 2A 雄性回归线（本项目数字化）"
     }
    ],
    "band95": null
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_female",
    "groupZh": "野外·雌性",
    "groupEn": "Wild · Female",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 30,
    "nText": "样本 30",
    "nTextEn": "n = 30",
    "source": "Yetman CA, Mokonoto P & Ferguson JWH 2012. Conservation implications of the age/size distribution of Giant Bullfrogs (Pyxicephalus adspersus) at three peri-urban breeding sites. Herpetological Journal 22:23–32",
    "evidence": "L2",
    "sourceShort": "Yetman 2012",
    "caveats": [
     "no_spread_reported"
    ],
    "coverage": {
     "run": 5,
     "total": 15,
     "ratio": 0.333,
     "domain": [
      90,
      245
     ],
     "dataRanges": [
      [
       92,
       136
      ]
     ]
    },
    "coverageText": "5/15 = 33%",
    "coverageBasis": "分母 = 该物种完整体型范围 90–245 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 90–245 mm",
    "segments": [
     {
      "lo": 92,
      "hi": 136,
      "a": 0.003227,
      "b": 2.2921,
      "r2": null,
      "sd": null,
      "interp": false,
      "src": "Yetman, Mokonoto & Ferguson 2012, Herpetol. J. 22:23–32 — Fig. 2A 雌性回归线（本项目数字化）"
     }
    ],
    "band95": null
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Rhacodactylus_auriculatus",
  "zh": "盖勾亚守宫",
  "latin": "Rhacodactylus auriculatus",
  "en": "Gargoyle Gecko",
  "status": "ok",
  "hasAL": false,
  "caliberSummary": "吻肛长（SVL）",
  "caliberSummaryEn": "Snout–vent length (SVL)",
  "py": "gaigouyashougong",
  "pyi": "ggysg",
  "alias": [
   "盖勾亚",
   "石像鬼守宫",
   "旋钮头巨型守宫",
   "新喀里多尼亚凹凸守宫"
  ],
  "aliasEn": [
   "Gargoyle Gecko"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "lizard",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 88,
    "nText": "样本 88",
    "nTextEn": "n = 88",
    "source": "Snyder JP (2007) The Autecology of Rhacodactylus auriculatus: A Natural History Study of Gargoyle Geckos. MSc thesis, Villanova University — Appendix 1（逐个体 SVL(mm)/体重(g)/性别/尾况）; 同一批 102 次捕获 / 88 个体 亦发表于 Snyder J, Snyder L & Bauer AM (2010) Salamandra 46(1): 37-47",
    "evidence": "L1",
    "sourceShort": "Snyder 2007",
    "caveats": [
     "single_wild_population"
    ],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      48.25,
      126.18
     ],
     "dataRanges": [
      [
       48.25,
       126.18
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 该物种完整体型范围 48.25–126.18 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 48.25–126.18 mm",
    "segments": [
     {
      "lo": 48.25,
      "hi": 126.18,
      "a": 3.64738e-05,
      "b": 2.8761,
      "r2": 0.9691,
      "sd": 0.0585,
      "interp": false,
      "src": "Snyder JP (2007) MSc thesis, Villanova University, Appendix 1（逐个体原始表）— 数据同批发表于 Snyder, Snyder & Bauer 2010, Salamandra 46: 37-47"
     }
    ],
    "band95": 30.2
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_male",
    "groupZh": "野外·雄性",
    "groupEn": "Wild · Male",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 26,
    "nText": "样本 26",
    "nTextEn": "n = 26",
    "source": "Snyder JP (2007) The Autecology of Rhacodactylus auriculatus: A Natural History Study of Gargoyle Geckos. MSc thesis, Villanova University — Appendix 1（逐个体 SVL(mm)/体重(g)/性别/尾况）; 同一批 102 次捕获 / 88 个体 亦发表于 Snyder J, Snyder L & Bauer AM (2010) Salamandra 46(1): 37-47",
    "evidence": "L1",
    "sourceShort": "Snyder 2007",
    "caveats": [
     "single_wild_population",
     "small_n"
    ],
    "coverage": {
     "run": 7,
     "total": 15,
     "ratio": 0.467,
     "domain": [
      48.25,
      126.18
     ],
     "dataRanges": [
      [
       95.72,
       125.9
      ]
     ]
    },
    "coverageText": "7/15 = 47%",
    "coverageBasis": "分母 = 该物种完整体型范围 48.25–126.18 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 48.25–126.18 mm",
    "segments": [
     {
      "lo": 95.72,
      "hi": 125.9,
      "a": 1.50598e-05,
      "b": 3.06,
      "r2": 0.8784,
      "sd": 0.0383,
      "interp": false,
      "src": "Snyder JP (2007) MSc thesis, Villanova University, Appendix 1（逐个体原始表）— 数据同批发表于 Snyder, Snyder & Bauer 2010, Salamandra 46: 37-47"
     }
    ],
    "band95": 18.9
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_female",
    "groupZh": "野外·雌性",
    "groupEn": "Wild · Female",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 35,
    "nText": "样本 35",
    "nTextEn": "n = 35",
    "source": "Snyder JP (2007) The Autecology of Rhacodactylus auriculatus: A Natural History Study of Gargoyle Geckos. MSc thesis, Villanova University — Appendix 1（逐个体 SVL(mm)/体重(g)/性别/尾况）; 同一批 102 次捕获 / 88 个体 亦发表于 Snyder J, Snyder L & Bauer AM (2010) Salamandra 46(1): 37-47",
    "evidence": "L1",
    "sourceShort": "Snyder 2007",
    "caveats": [
     "single_wild_population",
     "small_n"
    ],
    "coverage": {
     "run": 10,
     "total": 15,
     "ratio": 0.667,
     "domain": [
      48.25,
      126.18
     ],
     "dataRanges": [
      [
       82.24,
       126.18
      ]
     ]
    },
    "coverageText": "10/15 = 67%",
    "coverageBasis": "分母 = 该物种完整体型范围 48.25–126.18 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 48.25–126.18 mm",
    "segments": [
     {
      "lo": 82.24,
      "hi": 126.18,
      "a": 2.87464e-05,
      "b": 2.9304,
      "r2": 0.8529,
      "sd": 0.0609,
      "interp": false,
      "src": "Snyder JP (2007) MSc thesis, Villanova University, Appendix 1（逐个体原始表）— 数据同批发表于 Snyder, Snyder & Bauer 2010, Salamandra 46: 37-47"
     }
    ],
    "band95": 31.6
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Rhacodactylus_leachianus",
  "zh": "巨人守宫",
  "latin": "Rhacodactylus leachianus",
  "en": "New Caledonian Giant Gecko",
  "status": "no_data",
  "hasAL": false,
  "caliberSummary": "",
  "caliberSummaryEn": "",
  "py": "jurenshougong",
  "pyi": "jrsg",
  "alias": [
   "巨人",
   "巨人守宮",
   "新喀里多尼亚巨人守宫"
  ],
  "aliasEn": [
   "Leachianus Gecko",
   "New Caledonian Giant Gecko"
  ],
  "scopeShort": "⚠️ 亚种归属本身有争议：Reptile Database 仍分 R. l. leachianus 与 R. l. henkeli 两亚种，但 1997 与 2012 的研究都对 henkeli 的有效性表示审慎；2024 年 R. willihenkeli 被描述为新种，形态与本种极相似。将来出卡前必须先定调分类单元。",
  "scopeShortEn": "⚠️ Subspecies arrangement is itself disputed: Reptile Database still splits R. l. leachianus and R. l. henkeli, but studies in 1997 and 2012 expressed caution about henkeli, and R. willihenkeli was described as a new species in 2024. The taxonomic unit must be settled before any card is made.",
  "taxon": "lizard",
  "refs": [
   "Sound et al. 2018, Salamandra 54:117–122（23 只 PIT 活体，未发表量度）",
   "Bauer et al. 2012（修订，未重新描述本种）",
   "Slavenko et al. 2019（ReptTraits 编译的物种级极值，疑由体长推算）",
   "Cunkelman A 2005, M.S. thesis, Villanova（尚未取得，Cloudflare 403）",
   "Grokipedia / Reptile Database（亚种归属核对）"
  ],
  "curves": [],
  "lowRelCurves": []
 },
 {
  "id": "Salamandra_salamandra",
  "zh": "火蝾螈",
  "latin": "Salamandra salamandra",
  "en": "Fire Salamander",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "全长（TL）、吻肛长（SVL）",
  "caliberSummaryEn": "Total length (TL), Snout–vent length (SVL)",
  "py": "huorongyuan",
  "pyi": "hry",
  "alias": [
   "火蝾螈",
   "真螈",
   "火螈",
   "沙罗曼蛇",
   "fire salamander"
  ],
  "aliasEn": [
   "Fire Salamander",
   "European Fire Salamander"
  ],
  "scopeShort": "⚠️ 同一张卡里有两套体长口径：体长-体重用 TL（全长，含尾），而年龄-体长用 SVL（吻肛长，不含尾） —— 两者绝不能互换（有尾目尾占比大）。⚠️ 体长-体重数据只覆盖水栖幼体与变态期，不含陆生成体。",
  "scopeShortEn": "⚠️ Two calibers coexist in this card: length-weight uses TL (total length, tail included), while age-length uses SVL (snout-vent length, tail excluded). They must not be interchanged. ⚠️ The length-weight data cover aquatic larvae and metamorphs only, not terrestrial adults.",
  "taxon": "amphibian",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "TL",
    "caliberText": "全长（TL）",
    "caliberTextEn": "Total length (TL)",
    "n": 195,
    "nText": "样本 195",
    "nTextEn": "n = 195",
    "source": "Băncilă RI, Stănescu F, Plăiaşu R, Nae I, Székely D, Vlad SE & Cogălniceanu D 2023. Food and light availability induce plastic responses in fire salamander larvae from contrasting environments. PeerJ 11:e16046. doi:10.7717/peerj.16046 —— 个体级原始数据见 Supplementary File S4",
    "evidence": "L1",
    "sourceShort": "Băncilă 2023",
    "caveats": [],
    "coverage": {
     "run": 3,
     "total": 15,
     "ratio": 0.2,
     "domain": [
      25.0,
      250.0
     ],
     "dataRanges": [
      [
       27.02,
       46.27
      ]
     ]
    },
    "coverageText": "3/15 = 20%",
    "coverageBasis": "分母 = 该物种完整体型范围 25–250 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 25–250 mm",
    "segments": [
     {
      "lo": 27.02,
      "hi": 46.27,
      "a": 8.040589627854642e-05,
      "b": 2.2513,
      "r2": 0.6803,
      "sd": 0.0724,
      "interp": false,
      "src": "Băncilă et al. 2023, PeerJ 11:e16046, doi:10.7717/peerj.16046 —— 补充材料 S4（195 只个体级 TL0+BM0 原始数据）"
     }
    ],
    "band95": 38.6
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "TL",
    "caliberText": "全长（TL）",
    "caliberTextEn": "Total length (TL)",
    "n": 195,
    "nText": "样本 195",
    "nTextEn": "n = 195",
    "source": "Băncilă RI, Stănescu F, Plăiaşu R, Nae I, Székely D, Vlad SE & Cogălniceanu D 2023. Food and light availability induce plastic responses in fire salamander larvae from contrasting environments. PeerJ 11:e16046. doi:10.7717/peerj.16046 —— 个体级原始数据见 Supplementary File S4",
    "evidence": "L1",
    "sourceShort": "Băncilă 2023",
    "caveats": [
     "single_captive_population"
    ],
    "coverage": {
     "run": 3,
     "total": 15,
     "ratio": 0.2,
     "domain": [
      25.0,
      250.0
     ],
     "dataRanges": [
      [
       40.94,
       61.13
      ]
     ]
    },
    "coverageText": "3/15 = 20%",
    "coverageBasis": "分母 = 该物种完整体型范围 25–250 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 25–250 mm",
    "segments": [
     {
      "lo": 40.94,
      "hi": 61.13,
      "a": 0.0002893568238159689,
      "b": 2.0134,
      "r2": 0.6312,
      "sd": 0.0558,
      "interp": false,
      "src": "Băncilă et al. 2023, PeerJ 11:e16046, doi:10.7717/peerj.16046 —— 补充材料 S4（195 只个体级 TLmet+BMmet 原始数据）"
     }
    ],
    "band95": 28.6
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 192,
    "nText": "样本 192",
    "nTextEn": "n = 192",
    "source": "Sinsch U 2024. Environmental Drivers of Local Demography and Size Plasticity in Fire Salamanders (Salamandra salamandra). Animals 14(19):2869. doi:10.3390/ani14192869 —— 个体级原始数据见 Supplementary Table S2（192 只，SVL + 骨龄 LAG 数 + 性别）",
    "evidence": "L1",
    "sourceShort": "Sinsch 2024",
    "caveats": [
     "single_wild_population"
    ],
    "coverage": {
     "run": 2,
     "total": 15,
     "ratio": 0.133,
     "domain": [
      0.0,
      4.587
     ],
     "dataRanges": [
      [
       0.0,
       17.0
      ]
     ]
    },
    "coverageText": "2/15 = 13%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 4.6 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 4.6 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 96.178,
     "k": 0.6531,
     "t0": 0.0,
     "L0": 32.395
    },
    "t95": 3.958074306276154,
    "t95Text": "4.0 年",
    "t95TextEn": "4.0 yr"
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Salvator_merianae",
  "zh": "阿根廷黑白泰加蜥",
  "latin": "Salvator merianae",
  "en": "Argentine Black and White Tegu",
  "status": "ok",
  "hasAL": false,
  "caliberSummary": "吻肛长（SVL）",
  "caliberSummaryEn": "Snout–vent length (SVL)",
  "py": "taijiaxi",
  "pyi": "tjx",
  "alias": [
   "泰加",
   "黑白泰加",
   "阿根廷泰加",
   "阿根廷黑白泰加"
  ],
  "aliasEn": [
   "Argentine Tegu",
   "Black and White Tegu",
   "Tegu"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "lizard",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 538,
    "nText": "样本 538",
    "nTextEn": "n = 538",
    "source": "Cole JM, Balaguera-Reina SA, Miller MA, Cardozo G, Chiaraviglio M, Fitzgerald LA, Naretto S, Mazzotti FJ (2026) Fat reserve and body condition variation in Argentine black and white tegus: native-invasive comparisons and environmental drivers in Florida. PLOS ONE 21(2):e0342916. doi:10.1371/journal.pone.0342916. 个体级原始数据：github.com/SergioBalaguera/Cole-et-al.-2025-Repo (NativeTeguDat.csv)",
    "evidence": "L1",
    "sourceShort": "Cole 2026",
    "caveats": [],
    "coverage": {
     "run": 12,
     "total": 15,
     "ratio": 0.8,
     "domain": [
      100,
      500
     ],
     "dataRanges": [
      [
       190.0,
       490.0
      ]
     ]
    },
    "coverageText": "12/15 = 80%",
    "coverageBasis": "分母 = 该物种完整体型范围 100–500 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 100–500 mm",
    "segments": [
     {
      "lo": 190.0,
      "hi": 490.0,
      "a": 7.7310847e-06,
      "b": 3.2371,
      "r2": 0.8514,
      "sd": 0.0674,
      "interp": false,
      "src": "Cole JM, Balaguera-Reina SA, Miller MA, Cardozo G, Chiaraviglio M, Fitzgerald LA, Naretto S, Mazzotti FJ (2026) Fat reserve and body condition variation in Argentine black and white tegus: native-invasive comparisons and environmental drivers in Florida. PLOS ONE 21(2):e0342916. doi:10.1371/journal.pone.0342916. 个体级原始数据：github.com/SergioBalaguera/Cole-et-al.-2025-Repo (NativeTeguDat.csv)"
     }
    ],
    "band95": 35.5
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_male",
    "groupZh": "野外·雄性",
    "groupEn": "Wild · Male",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 301,
    "nText": "样本 301",
    "nTextEn": "n = 301",
    "source": "Cole JM, Balaguera-Reina SA, Miller MA, Cardozo G, Chiaraviglio M, Fitzgerald LA, Naretto S, Mazzotti FJ (2026) Fat reserve and body condition variation in Argentine black and white tegus: native-invasive comparisons and environmental drivers in Florida. PLOS ONE 21(2):e0342916. doi:10.1371/journal.pone.0342916. 个体级原始数据：github.com/SergioBalaguera/Cole-et-al.-2025-Repo (NativeTeguDat.csv)",
    "evidence": "L1",
    "sourceShort": "Cole 2026",
    "caveats": [],
    "coverage": {
     "run": 12,
     "total": 15,
     "ratio": 0.8,
     "domain": [
      100,
      500
     ],
     "dataRanges": [
      [
       190.0,
       490.0
      ]
     ]
    },
    "coverageText": "12/15 = 80%",
    "coverageBasis": "分母 = 该物种完整体型范围 100–500 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 100–500 mm",
    "segments": [
     {
      "lo": 190.0,
      "hi": 490.0,
      "a": 8.6822711e-06,
      "b": 3.2168,
      "r2": 0.8859,
      "sd": 0.0648,
      "interp": false,
      "src": "Cole JM, Balaguera-Reina SA, Miller MA, Cardozo G, Chiaraviglio M, Fitzgerald LA, Naretto S, Mazzotti FJ (2026) Fat reserve and body condition variation in Argentine black and white tegus: native-invasive comparisons and environmental drivers in Florida. PLOS ONE 21(2):e0342916. doi:10.1371/journal.pone.0342916. 个体级原始数据：github.com/SergioBalaguera/Cole-et-al.-2025-Repo (NativeTeguDat.csv)"
     }
    ],
    "band95": 34.0
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_female",
    "groupZh": "野外·雌性",
    "groupEn": "Wild · Female",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 219,
    "nText": "样本 219",
    "nTextEn": "n = 219",
    "source": "Cole JM, Balaguera-Reina SA, Miller MA, Cardozo G, Chiaraviglio M, Fitzgerald LA, Naretto S, Mazzotti FJ (2026) Fat reserve and body condition variation in Argentine black and white tegus: native-invasive comparisons and environmental drivers in Florida. PLOS ONE 21(2):e0342916. doi:10.1371/journal.pone.0342916. 个体级原始数据：github.com/SergioBalaguera/Cole-et-al.-2025-Repo (NativeTeguDat.csv)",
    "evidence": "L1",
    "sourceShort": "Cole 2026",
    "caveats": [],
    "coverage": {
     "run": 8,
     "total": 15,
     "ratio": 0.533,
     "domain": [
      100,
      500
     ],
     "dataRanges": [
      [
       255.0,
       445.0
      ]
     ]
    },
    "coverageText": "8/15 = 53%",
    "coverageBasis": "分母 = 该物种完整体型范围 100–500 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 100–500 mm",
    "segments": [
     {
      "lo": 255.0,
      "hi": 445.0,
      "a": 4.2529457e-06,
      "b": 3.3391,
      "r2": 0.7677,
      "sd": 0.0724,
      "interp": false,
      "src": "Cole JM, Balaguera-Reina SA, Miller MA, Cardozo G, Chiaraviglio M, Fitzgerald LA, Naretto S, Mazzotti FJ (2026) Fat reserve and body condition variation in Argentine black and white tegus: native-invasive comparisons and environmental drivers in Florida. PLOS ONE 21(2):e0342916. doi:10.1371/journal.pone.0342916. 个体级原始数据：github.com/SergioBalaguera/Cole-et-al.-2025-Repo (NativeTeguDat.csv)"
     }
    ],
    "band95": 38.6
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 883,
    "nText": "样本 883",
    "nTextEn": "n = 883",
    "source": "McCaffrey KR, Balaguera-Reina SA, Falk BG, Gati EV, Cole JM, Mazzotti FJ (2023) How to estimate body condition in large lizards? Argentine black and white tegu (Salvator merianae, Duméril and Bibron, 1839) as a case study. PLOS ONE 18(2):e0282093. doi:10.1371/journal.pone.0282093. 个体级原始数据：Dryad doi:10.5061/dryad.cjsxksn96 (McCaffrey_etal_2023_tegu.data.csv)",
    "evidence": "L1",
    "sourceShort": "McCaffrey 2023",
    "caveats": [],
    "coverage": {
     "run": 14,
     "total": 15,
     "ratio": 0.933,
     "domain": [
      100,
      500
     ],
     "dataRanges": [
      [
       100.0,
       464.0
      ]
     ]
    },
    "coverageText": "14/15 = 93%",
    "coverageBasis": "分母 = 该物种完整体型范围 100–500 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 100–500 mm",
    "segments": [
     {
      "lo": 100.0,
      "hi": 464.0,
      "a": 1.9317366e-05,
      "b": 3.088,
      "r2": 0.9751,
      "sd": 0.052,
      "interp": false,
      "src": "McCaffrey KR, Balaguera-Reina SA, Falk BG, Gati EV, Cole JM, Mazzotti FJ (2023) How to estimate body condition in large lizards? Argentine black and white tegu (Salvator merianae, Duméril and Bibron, 1839) as a case study. PLOS ONE 18(2):e0282093. doi:10.1371/journal.pone.0282093. 个体级原始数据：Dryad doi:10.5061/dryad.cjsxksn96 (McCaffrey_etal_2023_tegu.data.csv)"
     }
    ],
    "band95": 26.5
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_male",
    "groupZh": "野外·雄性",
    "groupEn": "Wild · Male",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 496,
    "nText": "样本 496",
    "nTextEn": "n = 496",
    "source": "McCaffrey KR, Balaguera-Reina SA, Falk BG, Gati EV, Cole JM, Mazzotti FJ (2023) How to estimate body condition in large lizards? Argentine black and white tegu (Salvator merianae, Duméril and Bibron, 1839) as a case study. PLOS ONE 18(2):e0282093. doi:10.1371/journal.pone.0282093. 个体级原始数据：Dryad doi:10.5061/dryad.cjsxksn96 (McCaffrey_etal_2023_tegu.data.csv)",
    "evidence": "L1",
    "sourceShort": "McCaffrey 2023",
    "caveats": [],
    "coverage": {
     "run": 14,
     "total": 15,
     "ratio": 0.933,
     "domain": [
      100,
      500
     ],
     "dataRanges": [
      [
       100.0,
       464.0
      ]
     ]
    },
    "coverageText": "14/15 = 93%",
    "coverageBasis": "分母 = 该物种完整体型范围 100–500 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 100–500 mm",
    "segments": [
     {
      "lo": 100.0,
      "hi": 464.0,
      "a": 1.9702818e-05,
      "b": 3.0838,
      "r2": 0.977,
      "sd": 0.0519,
      "interp": false,
      "src": "McCaffrey KR, Balaguera-Reina SA, Falk BG, Gati EV, Cole JM, Mazzotti FJ (2023) How to estimate body condition in large lizards? Argentine black and white tegu (Salvator merianae, Duméril and Bibron, 1839) as a case study. PLOS ONE 18(2):e0282093. doi:10.1371/journal.pone.0282093. 个体级原始数据：Dryad doi:10.5061/dryad.cjsxksn96 (McCaffrey_etal_2023_tegu.data.csv)"
     }
    ],
    "band95": 26.4
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_female",
    "groupZh": "野外·雌性",
    "groupEn": "Wild · Female",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 387,
    "nText": "样本 387",
    "nTextEn": "n = 387",
    "source": "McCaffrey KR, Balaguera-Reina SA, Falk BG, Gati EV, Cole JM, Mazzotti FJ (2023) How to estimate body condition in large lizards? Argentine black and white tegu (Salvator merianae, Duméril and Bibron, 1839) as a case study. PLOS ONE 18(2):e0282093. doi:10.1371/journal.pone.0282093. 个体级原始数据：Dryad doi:10.5061/dryad.cjsxksn96 (McCaffrey_etal_2023_tegu.data.csv)",
    "evidence": "L1",
    "sourceShort": "McCaffrey 2023",
    "caveats": [],
    "coverage": {
     "run": 11,
     "total": 15,
     "ratio": 0.733,
     "domain": [
      100,
      500
     ],
     "dataRanges": [
      [
       114.0,
       382.0
      ]
     ]
    },
    "coverageText": "11/15 = 73%",
    "coverageBasis": "分母 = 该物种完整体型范围 100–500 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 100–500 mm",
    "segments": [
     {
      "lo": 114.0,
      "hi": 382.0,
      "a": 1.8630171e-05,
      "b": 3.0953,
      "r2": 0.9723,
      "sd": 0.0522,
      "interp": false,
      "src": "McCaffrey KR, Balaguera-Reina SA, Falk BG, Gati EV, Cole JM, Mazzotti FJ (2023) How to estimate body condition in large lizards? Argentine black and white tegu (Salvator merianae, Duméril and Bibron, 1839) as a case study. PLOS ONE 18(2):e0282093. doi:10.1371/journal.pone.0282093. 个体级原始数据：Dryad doi:10.5061/dryad.cjsxksn96 (McCaffrey_etal_2023_tegu.data.csv)"
     }
    ],
    "band95": 26.6
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Staurotypus_triporcatus",
  "zh": "墨西哥蛋龟（大麝香龟）",
  "latin": "Staurotypus triporcatus",
  "en": "Northern Giant Musk Turtle",
  "status": "no_data",
  "hasAL": false,
  "caliberSummary": "",
  "caliberSummaryEn": "",
  "py": "moxigedangui",
  "pyi": "mxdg",
  "alias": [
   "蛋龟",
   "墨蛋",
   "巨蛋",
   "墨西哥巨蛋龟",
   "三棱麝香龟",
   "三弦巨型鹰嘴泥龟",
   "大麝香龟",
   "墨西哥巨型麝香龟",
   "墨西哥麝香龟"
  ],
  "aliasEn": [
   "Giant Musk Turtle",
   "Mexican Giant Musk Turtle",
   "Egg Turtle"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "turtle",
  "refs": [
   "McKnight et al. 2023, Ecology 104(1):e3868（伯利兹，仅均值）",
   "Reynoso et al. 2016, CONABIO 项目 MM009（n=159，仅均值）",
   "Zapletal et al. 2026, J Exp Zool A（doi 10.1002/jez.70059，尚未取得）"
  ],
  "curves": [],
  "lowRelCurves": []
 },
 {
  "id": "Sternotherus_carinatus",
  "zh": "剃刀龟",
  "latin": "Sternotherus carinatus",
  "en": "Razor-backed Musk Turtle",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "最大甲长（CLmax）",
  "caliberSummaryEn": "Maximum carapace length (CLmax)",
  "py": "tidaogui",
  "pyi": "tdg",
  "alias": [
   "蛋龟",
   "剃刀",
   "刀背麝香龟",
   "刀背蛋龟"
  ],
  "aliasEn": [
   "Razor-backed Musk Turtle",
   "Egg Turtle"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "turtle",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "CLmax",
    "caliberText": "最大甲长（CLmax）",
    "caliberTextEn": "Maximum carapace length (CLmax)",
    "n": 82,
    "nText": "样本 82",
    "nTextEn": "n = 82",
    "source": "Tinkle, D.W. 1958. The systematics and ecology of the Sternothaerus carinatus complex (Testudinata, Chelydridae). Tulane Studies in Zoology 6(1):1-56. 全文 PDF（BHL/Internet Archive 整卷）：https://archive.org/download/tulanestudiesinz06tula/tulanestudiesinz06tula.pdf",
    "evidence": "L2",
    "sourceShort": "Tinkle 1958",
    "caveats": [],
    "coverage": {
     "run": 7,
     "total": 15,
     "ratio": 0.467,
     "domain": [
      0.0,
      15.52
     ],
     "dataRanges": [
      [
       1.0,
       7.0
      ]
     ]
    },
    "coverageText": "7/15 = 47%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 15.5 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 15.5 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 134.5,
     "k": 0.193,
     "t0": 0.0,
     "L0": 27.8
    },
    "t95": 14.322224004247692,
    "t95Text": "14.3 年",
    "t95TextEn": "14.3 yr"
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Sternotherus_odoratus",
  "zh": "麝香龟",
  "latin": "Sternotherus odoratus",
  "en": "Common Musk Turtle (Stinkpot)",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "体长（原文未说明量法）",
  "caliberSummaryEn": "Length (method not stated) (not stated)",
  "py": "shexianggui",
  "pyi": "sxg",
  "alias": [
   "蛋龟",
   "普通麝香龟",
   "密西西比麝香龟",
   "臭弹龟",
   "小麝香龟",
   "麝香龟"
  ],
  "aliasEn": [
   "Musk Turtle",
   "Stinkpot",
   "Egg Turtle"
  ],
  "scopeShort": "本卡只覆盖普通麝香龟 S. odoratus；麝香龟属（Sternotherus）另几个种——剃刀龟 S. carinatus、巨头麝香龟 S. minor、平背麝香龟 S. depressus——是另外的种，本卡不适用。",
  "scopeShortEn": "This card covers the common musk turtle (S. odoratus) only. The other species of Sternotherus - razor-backed musk turtle (S. carinatus), loggerhead musk turtle (S. minor) and flattened musk turtle (S. depressus) - are separate species and are not covered.",
  "taxon": "turtle",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "unspecified",
    "caliberText": "体长（原文未说明量法）",
    "caliberTextEn": "Length (method not stated) (not stated)",
    "n": 77,
    "nText": "样本 77",
    "nTextEn": "n = 77",
    "source": "Risley, P.L. 1933. Observations on the natural history of the common musk turtle, Sternotherus odoratus (Latreille). Papers of the Michigan Academy of Science, Arts and Letters 17:685-711. 全文 PDF（BHL/Internet Archive 单篇扫描）：https://archive.org/download/IA41551503_0062/IA41551503_0062.pdf",
    "evidence": "L2",
    "sourceShort": "Risley 1933",
    "caveats": [],
    "coverage": {
     "run": 9,
     "total": 15,
     "ratio": 0.6,
     "domain": [
      0.0,
      16.05
     ],
     "dataRanges": [
      [
       0.0,
       9.0
      ]
     ]
    },
    "coverageText": "9/15 = 60%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 16.1 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 16.1 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 94.3,
     "k": 0.1867,
     "t0": 0.0,
     "L0": 21.2
    },
    "t95": 14.68173246207987,
    "t95Text": "14.7 年",
    "t95TextEn": "14.7 yr",
    "caliberInferred": true,
    "caliberUncertaintyLen": 4.0,
    "caliberUncertaintyPct": 4.0
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Terrapene_carolina_carolina",
  "zh": "东部箱龟",
  "latin": "Terrapene carolina carolina",
  "en": "Eastern Box Turtle",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "直甲长（SCL）、最大甲长（CLmax）",
  "caliberSummaryEn": "Straight carapace length (SCL), Maximum carapace length (CLmax)",
  "py": "dongbuxianggui",
  "pyi": "dbxg",
  "alias": [
   "箱龟",
   "东箱",
   "东部箱龟",
   "卡罗莱纳箱龟"
  ],
  "aliasEn": [
   "Box Turtle",
   "Eastern Box Turtle"
  ],
  "scopeShort": "「箱龟」是Terrapene 属的统称，属下多个亚种；本卡只覆盖东部箱龟 T. c. carolina。三趾箱龟 T. c. triunguis 另有其卡。",
  "scopeShortEn": "\"Box turtle\" is a collective name for the genus Terrapene. This card covers the eastern box turtle (T. c. carolina) only; the three-toed box turtle (T. c. triunguis) has its own card.",
  "taxon": "turtle",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 9,
    "nText": "样本 9",
    "nTextEn": "n = 9",
    "source": "Colbert JE, Ondich BL, Andrews KM, et al. (2022) Survivorship, home range, growth and reproduction of Eastern Box Turtles (Terrapene carolina) head-started to subadult size on Jekyll Island, Georgia, USA. Herpetological Conservation and Biology 18(2):229-235.（Table 1）https://www.herpconbio.org/Volume_18/Issue_2/Colbert_etal_2022.pdf",
    "evidence": "L1",
    "sourceShort": "Colbert 2022",
    "caveats": [
     "small_n",
     "single_captive_population"
    ],
    "coverage": {
     "run": 4,
     "total": 15,
     "ratio": 0.267,
     "domain": [
      30.0,
      160.0
     ],
     "dataRanges": [
      [
       88.0,
       108.0
      ]
     ]
    },
    "coverageText": "4/15 = 27%",
    "coverageBasis": "分母 = 该物种完整体型范围 30–160 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 30–160 mm",
    "segments": [
     {
      "lo": 88.0,
      "hi": 108.0,
      "a": 3.18674e-05,
      "b": 3.398,
      "r2": 0.904,
      "sd": 0.0332,
      "interp": false,
      "src": "Colbert JE, Ondich BL, Andrews KM, et al. (2022) Survivorship, home range, growth and reproduction of Eastern Box Turtles (Terrapene carolina) head-started to subadult size on Jekyll Island, Georgia, USA. Herpetological Conservation and Biology 18(2):229-235.（Table 1）https://www.herpconbio.org/Volume_18/Issue_2/Colbert_etal_2022.pdf"
     }
    ],
    "band95": 16.2
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_male",
    "groupZh": "野外·雄性",
    "groupEn": "Wild · Male",
    "caliber": "CLmax",
    "caliberText": "最大甲长（CLmax）",
    "caliberTextEn": "Maximum carapace length (CLmax)",
    "n": 56,
    "nText": "样本 56",
    "nTextEn": "n = 56",
    "source": "Edmonds D, Kuhns AR, Dreslik MJ (2020) Eastern Box Turtle (Terrapene carolina carolina) growth and the impacts of invasive vegetation removal. Herpetological Conservation and Biology 15(3):588-596.（开放获取 PDF：https://www.herpconbio.org/Volume_15/Issue_3/Edmonds_etal_2020.pdf）",
    "evidence": "L2",
    "sourceShort": "Edmonds 2020",
    "caveats": [
     "digitized_from_figure",
     "single_wild_population",
     "age_from_growth_rings"
    ],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      0.0,
      19.440183475366588
     ],
     "dataRanges": [
      [
       0.7,
       28.0
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 19.4 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 19.4 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 142.18,
     "k": 0.1541,
     "t0": 0.0,
     "L0": 30.3
    },
    "t95": 17.88491422054778,
    "t95Text": "17.9 年",
    "t95TextEn": "17.9 yr"
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_female",
    "groupZh": "野外·雌性",
    "groupEn": "Wild · Female",
    "caliber": "CLmax",
    "caliberText": "最大甲长（CLmax）",
    "caliberTextEn": "Maximum carapace length (CLmax)",
    "n": 60,
    "nText": "样本 60",
    "nTextEn": "n = 60",
    "source": "Edmonds D, Kuhns AR, Dreslik MJ (2020) Eastern Box Turtle (Terrapene carolina carolina) growth and the impacts of invasive vegetation removal. Herpetological Conservation and Biology 15(3):588-596.（开放获取 PDF：https://www.herpconbio.org/Volume_15/Issue_3/Edmonds_etal_2020.pdf）",
    "evidence": "L2",
    "sourceShort": "Edmonds 2020",
    "caveats": [
     "digitized_from_figure",
     "single_wild_population",
     "age_from_growth_rings"
    ],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      0.0,
      20.17328130339388
     ],
     "dataRanges": [
      [
       0.7,
       28.0
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 20.2 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 20.2 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 134.53,
     "k": 0.1485,
     "t0": 0.0,
     "L0": 30.3
    },
    "t95": 18.45484880005233,
    "t95Text": "18.5 年",
    "t95TextEn": "18.5 yr"
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 51,
    "nText": "样本 51",
    "nTextEn": "n = 51",
    "source": "Vitek NS (2018) Delineating modern variation from extinct morphology in the fossil record using shells of the Eastern Box Turtle (Terrapene carolina). PLOS ONE 13(3):e0193437. doi:10.1371/journal.pone.0193437 — 个体级原始数据：S1 File（supplementary_specimens_age.xlsx，n=215 现代标本；其中 Subspecies='carolina' 者 n=51）",
    "evidence": "L1",
    "sourceShort": "Vitek 2018",
    "caveats": [
     "age_from_growth_rings"
    ],
    "coverage": {
     "run": 8,
     "total": 15,
     "ratio": 0.533,
     "domain": [
      0.0,
      16.02853008857138
     ],
     "dataRanges": [
      [
       5.0,
       28.0
      ]
     ]
    },
    "coverageText": "8/15 = 53%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 16.0 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 16.0 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 144.9,
     "k": 0.1869,
     "t0": 0.0,
     "L0": 0.0
    },
    "t95": 16.02853008857138,
    "t95Text": "16.0 年",
    "t95TextEn": "16.0 yr"
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Terrapene_carolina_triunguis",
  "zh": "三趾箱龟",
  "latin": "Terrapene carolina triunguis",
  "en": "Three-toed Box Turtle",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "最大甲长（CLmax）",
  "caliberSummaryEn": "Maximum carapace length (CLmax)",
  "py": "sanzhixianggui",
  "pyi": "szxg",
  "alias": [
   "箱龟",
   "三趾",
   "三趾箱龟"
  ],
  "aliasEn": [
   "Box Turtle",
   "Three-toed Box Turtle"
  ],
  "scopeShort": "「箱龟」是Terrapene 属的统称；本卡只覆盖三趾箱龟 T. c. triunguis。东部箱龟 T. c. carolina 另有其卡。",
  "scopeShortEn": "\"Box turtle\" is a collective name for the genus Terrapene. This card covers the three-toed box turtle (T. c. triunguis) only; the eastern box turtle (T. c. carolina) has its own card.",
  "taxon": "turtle",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "CLmax",
    "caliberText": "最大甲长（CLmax）",
    "caliberTextEn": "Maximum carapace length (CLmax)",
    "n": 104,
    "nText": "样本 104",
    "nTextEn": "n = 104",
    "source": "O'Connor KM, Rittenhouse CD, Millspaugh JJ, Rittenhouse TAG (2015) Demographics and density estimates of two three-toed box turtle (Terrapene carolina triunguis) populations within forest and restored prairie sites in central Missouri. PeerJ 3:e1256. doi:10.7717/peerj.1256 — 个体级原始数据：Supporting Information S1（peerj-03-1256-s001.xlsx，工作表 'Transect_Turtle_qry'）；Europe PMC PMC4582957 supplementaryFiles",
    "evidence": "L1",
    "sourceShort": "O'Connor 2015",
    "caveats": [],
    "coverage": {
     "run": 11,
     "total": 15,
     "ratio": 0.733,
     "domain": [
      30.0,
      157.5
     ],
     "dataRanges": [
      [
       75.5,
       157.4
      ]
     ]
    },
    "coverageText": "11/15 = 73%",
    "coverageBasis": "分母 = 该物种完整体型范围 30–157.5 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 30–157.5 mm",
    "segments": [
     {
      "lo": 75.5,
      "hi": 157.4,
      "a": 0.000195469,
      "b": 3.0075,
      "r2": 0.9562,
      "sd": 0.0403,
      "interp": false,
      "src": "O'Connor KM, Rittenhouse CD, Millspaugh JJ, Rittenhouse TAG (2015) Demographics and density estimates of two three-toed box turtle (Terrapene carolina triunguis) populations within forest and restored prairie sites in central Missouri. PeerJ 3:e1256. doi:10.7717/peerj.1256 — 个体级原始数据：Supporting Information S1（peerj-03-1256-s001.xlsx，工作表 'Transect_Turtle_qry'）；Europe PMC PMC4582957 supplementaryFiles"
     }
    ],
    "band95": 19.9
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "CLmax",
    "caliberText": "最大甲长（CLmax）",
    "caliberTextEn": "Maximum carapace length (CLmax)",
    "n": 90,
    "nText": "样本 90",
    "nTextEn": "n = 90",
    "source": "O'Connor KM, Rittenhouse CD, Millspaugh JJ, Rittenhouse TAG (2015) Demographics and density estimates of two three-toed box turtle (Terrapene carolina triunguis) populations within forest and restored prairie sites in central Missouri. PeerJ 3:e1256. doi:10.7717/peerj.1256 — 个体级原始数据：Supporting Information S1（peerj-03-1256-s001.xlsx，工作表 'Transect_Turtle_qry'）；Europe PMC PMC4582957 supplementaryFiles",
    "evidence": "L1",
    "sourceShort": "O'Connor 2015",
    "caveats": [
     "age_from_growth_rings"
    ],
    "coverage": {
     "run": 7,
     "total": 15,
     "ratio": 0.467,
     "domain": [
      0.0,
      13.629355202702415
     ],
     "dataRanges": [
      [
       3.0,
       17.0
      ]
     ]
    },
    "coverageText": "7/15 = 47%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 13.6 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 13.6 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 151.4,
     "k": 0.2198,
     "t0": 0.0,
     "L0": 0.0
    },
    "t95": 13.629355202702415,
    "t95Text": "13.6 年",
    "t95TextEn": "13.6 yr"
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Testudo_hermanni",
  "zh": "赫尔曼陆龟",
  "latin": "Testudo hermanni",
  "en": "Hermann's Tortoise",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "直甲长（SCL）",
  "caliberSummaryEn": "Straight carapace length (SCL)",
  "py": "heermanlugu",
  "pyi": "helg",
  "alias": [
   "赫曼陆龟",
   "赫尔曼氏陆龟",
   "西部赫曼"
  ],
  "aliasEn": [
   "Hermann's Tortoise"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "turtle",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_female",
    "groupZh": "野外·雌性",
    "groupEn": "Wild · Female",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 1156,
    "nText": "样本 1156",
    "nTextEn": "n = 1156",
    "source": "Willemsen & Hailey 2002, Herpetol. J. 12:105-114",
    "evidence": "L1",
    "sourceShort": "Willemsen 2002",
    "caveats": [],
    "coverage": {
     "run": 11,
     "total": 15,
     "ratio": 0.733,
     "domain": [
      30,
      280
     ],
     "dataRanges": [
      [
       100,
       280
      ]
     ]
    },
    "coverageText": "11/15 = 73%",
    "coverageBasis": "分母 = 该物种完整体型范围 30–280 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 30–280 mm",
    "segments": [
     {
      "lo": 100,
      "hi": 280,
      "a": 0.0006486344335482381,
      "b": 2.774,
      "r2": 0.972,
      "sd": 0.038,
      "interp": false,
      "src": "Willemsen & Hailey 2002, Herpetol. J. 12:105-114"
     }
    ],
    "band95": 19.1
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_male",
    "groupZh": "野外·雄性",
    "groupEn": "Wild · Male",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 1948,
    "nText": "样本 1948",
    "nTextEn": "n = 1948",
    "source": "Willemsen & Hailey 2002",
    "evidence": "L1",
    "sourceShort": "Willemsen 2002",
    "caveats": [],
    "coverage": {
     "run": 11,
     "total": 15,
     "ratio": 0.733,
     "domain": [
      30,
      280
     ],
     "dataRanges": [
      [
       100,
       280
      ]
     ]
    },
    "coverageText": "11/15 = 73%",
    "coverageBasis": "分母 = 该物种完整体型范围 30–280 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 30–280 mm",
    "segments": [
     {
      "lo": 100,
      "hi": 280,
      "a": 0.0006606934480075957,
      "b": 2.76,
      "r2": 0.953,
      "sd": 0.038,
      "interp": false,
      "src": "Willemsen & Hailey 2002"
     }
    ],
    "band95": 19.1
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_female",
    "groupZh": "家养·雌性",
    "groupEn": "Captive · Female",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 127,
    "nText": "样本 127",
    "nTextEn": "n = 127",
    "source": "Frankenberger et al. 2024, PLOS ONE 19(4):e0301892 (S1 File 原始数据)",
    "evidence": "L1",
    "sourceShort": "Frankenberger 2024",
    "caveats": [],
    "coverage": {
     "run": 11,
     "total": 15,
     "ratio": 0.733,
     "domain": [
      30,
      280
     ],
     "dataRanges": [
      [
       100,
       270
      ]
     ]
    },
    "coverageText": "11/15 = 73%",
    "coverageBasis": "分母 = 该物种完整体型范围 30–280 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 30–280 mm",
    "segments": [
     {
      "lo": 100,
      "hi": 270,
      "a": 0.00030492989203838,
      "b": 2.9128,
      "r2": 0.9742,
      "sd": 0.0455,
      "interp": false,
      "src": "Frankenberger et al. 2024, PLOS ONE 19(4):e0301892 (S1 File 原始数据)"
     }
    ],
    "band95": 23.3
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_male",
    "groupZh": "家养·雄性",
    "groupEn": "Captive · Male",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 103,
    "nText": "样本 103",
    "nTextEn": "n = 103",
    "source": "Frankenberger et al. 2024",
    "evidence": "L1",
    "sourceShort": "Frankenberger 2024",
    "caveats": [],
    "coverage": {
     "run": 7,
     "total": 15,
     "ratio": 0.467,
     "domain": [
      30,
      280
     ],
     "dataRanges": [
      [
       100,
       211
      ]
     ]
    },
    "coverageText": "7/15 = 47%",
    "coverageBasis": "分母 = 该物种完整体型范围 30–280 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 30–280 mm",
    "segments": [
     {
      "lo": 100,
      "hi": 211,
      "a": 0.00023938669011741928,
      "b": 2.9576,
      "r2": 0.9149,
      "sd": 0.0546,
      "interp": false,
      "src": "Frankenberger et al. 2024"
     }
    ],
    "band95": 28.6
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 1134,
    "nText": "样本 1134",
    "nTextEn": "n = 1134",
    "source": "Arsovski et al. 2018, Oecologia 187:59-70",
    "evidence": "L1",
    "sourceShort": "Arsovski 2018",
    "caveats": [],
    "coverage": {
     "run": 5,
     "total": 15,
     "ratio": 0.333,
     "domain": [
      0,
      57.1
     ],
     "dataRanges": [
      [
       1,
       17
      ]
     ]
    },
    "coverageText": "5/15 = 33%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 57.1 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 57.1 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 180.7,
     "k": 0.0525,
     "L0": 0.0,
     "t0": 0.0
    },
    "t95": 57.06156711531411,
    "t95Text": "57.1 年",
    "t95TextEn": "57.1 yr"
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SCL",
    "caliberText": "直甲长（SCL）",
    "caliberTextEn": "Straight carapace length (SCL)",
    "n": 118,
    "nText": "样本 118",
    "nTextEn": "n = 118",
    "source": "Zivkov et al. 2007, C. R. Acad. Bulg. Sci. 60(9):1015-1022",
    "evidence": "L1",
    "sourceShort": "Zivkov 2007",
    "caveats": [],
    "coverage": {
     "run": 4,
     "total": 15,
     "ratio": 0.267,
     "domain": [
      0,
      68.7
     ],
     "dataRanges": [
      [
       1,
       17
      ]
     ]
    },
    "coverageText": "4/15 = 27%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 68.7 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 68.7 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 287.0,
     "k": 0.0436,
     "L0": 0.0,
     "t0": -3.26
    },
    "t95": 65.4494558154585,
    "t95Text": "65.4 年",
    "t95TextEn": "65.4 yr"
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Thamnophis_elegans",
  "zh": "束带蛇（西部）",
  "latin": "Thamnophis elegans",
  "en": "Western Terrestrial Garter Snake",
  "status": "ok",
  "hasAL": false,
  "caliberSummary": "吻肛长（SVL）",
  "caliberSummaryEn": "Snout–vent length (SVL)",
  "py": "shudaishexibu",
  "pyi": "sdsxb",
  "alias": [
   "束带蛇",
   "西部束带蛇",
   "陆生束带蛇",
   "山地束带蛇"
  ],
  "aliasEn": [
   "Garter Snake",
   "Western Terrestrial Garter Snake"
  ],
  "scopeShort": "⚠️ 本卡只覆盖「束带蛇」属（Thamnophis）中的这一个种，不要把结果套到其它束带蛇上。",
  "scopeShortEn": "⚠️ This card covers only this one species within the genus Thamnophis (30+ species); do not apply it to other garter snakes.",
  "taxon": "snake",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 116,
    "nText": "样本 116",
    "nTextEn": "n = 116",
    "source": "Gangloff, E.J., Holden, K.G., Telemeco, R.S., Baumgard, L.H. & Bronikowski, A.M. 2016. J. Exp. Biol. 219:2656-2663. DOI 10.1242/jeb.143107（个体级原始数据：Dryad 10.5061/dryad.cs5th，TelegansThermalTolerance.csv）；Palacios, M.G., Bronikowski, A.M. et al. 2023. General and Comparative Endocrinology 331:114162. DOI 10.1016/j.ygcen.2022.114162（个体级原始数据：Mendeley Data 10.17632/jf5pn76s3t；Palaciosetal_2022_GCE_BabyData.csv / _MomData.csv）",
    "evidence": "L1",
    "sourceShort": "Gangloff 2016",
    "caveats": [],
    "coverage": {
     "run": 10,
     "total": 15,
     "ratio": 0.667,
     "domain": [
      145.0,
      800.0
     ],
     "dataRanges": [
      [
       416.0,
       765.0
      ]
     ]
    },
    "coverageText": "10/15 = 67%",
    "coverageBasis": "分母 = 该物种完整体型范围 145–800 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 145–800 mm",
    "segments": [
     {
      "lo": 416.0,
      "hi": 765.0,
      "a": 6.748688012441356e-07,
      "b": 2.9004318039049033,
      "r2": 0.8605,
      "sd": 0.0736,
      "interp": false,
      "src": "Gangloff, E.J., Holden, K.G., Telemeco, R.S., Baumgard, L.H. & Bronikowski, A.M. 2016. J. Exp. Biol. 219:2656-2663. DOI 10.1242/jeb.143107（个体级原始数据：Dryad 10.5061/dryad.cs5th，TelegansThermalTolerance.csv）；Palacios, M.G., Bronikowski, A.M. et al. 2023. General and Comparative Endocrinology 331:114162. DOI 10.1016/j.ygcen.2022.114162（个体级原始数据：Mendeley Data 10.17632/jf5pn76s3t；Palaciosetal_2022_GCE_BabyData.csv / _MomData.csv）"
     }
    ],
    "band95": 40.3
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 754,
    "nText": "观测 754 次",
    "nTextEn": "n = 754 observations",
    "source": "Gangloff, E.J., Sparkman, A.M. & Bronikowski, A.M. 2017. Oikos 126:705-716. DOI 10.1111/oik.04204（个体级原始数据：Dryad 10.5061/dryad.fs57v，Gangloffetal2017_Data.csv）；Palacios, M.G., Bronikowski, A.M. et al. 2023. General and Comparative Endocrinology 331:114162. DOI 10.1016/j.ygcen.2022.114162（个体级原始数据：Mendeley Data 10.17632/jf5pn76s3t；Palaciosetal_2022_GCE_BabyData.csv / _MomData.csv）",
    "evidence": "L1",
    "sourceShort": "Gangloff 2017",
    "caveats": [
     "single_captive_population"
    ],
    "coverage": {
     "run": 6,
     "total": 15,
     "ratio": 0.4,
     "domain": [
      145.0,
      800.0
     ],
     "dataRanges": [
      [
       145.0,
       350.0
      ]
     ]
    },
    "coverageText": "6/15 = 40%",
    "coverageBasis": "分母 = 该物种完整体型范围 145–800 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 145–800 mm",
    "segments": [
     {
      "lo": 145.0,
      "hi": 350.0,
      "a": 1.2364583782394212e-06,
      "b": 2.786394404489961,
      "r2": 0.9121,
      "sd": 0.0672,
      "interp": false,
      "src": "Gangloff, E.J., Sparkman, A.M. & Bronikowski, A.M. 2017. Oikos 126:705-716. DOI 10.1111/oik.04204（个体级原始数据：Dryad 10.5061/dryad.fs57v，Gangloffetal2017_Data.csv）；Palacios, M.G., Bronikowski, A.M. et al. 2023. General and Comparative Endocrinology 331:114162. DOI 10.1016/j.ygcen.2022.114162（个体级原始数据：Mendeley Data 10.17632/jf5pn76s3t；Palaciosetal_2022_GCE_BabyData.csv / _MomData.csv）"
     }
    ],
    "band95": 36.3
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Thamnophis_marcianus",
  "zh": "束带蛇（格纹）",
  "latin": "Thamnophis marcianus",
  "en": "Checkered Garter Snake",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "吻肛长（SVL）",
  "caliberSummaryEn": "Snout–vent length (SVL)",
  "py": "shudaishewenge",
  "pyi": "sdswg",
  "alias": [
   "束带蛇",
   "格纹束带蛇",
   "棋盘束带蛇",
   "方格束带蛇"
  ],
  "aliasEn": [
   "Garter Snake",
   "Checkered Garter Snake"
  ],
  "scopeShort": "⚠️ 本卡只覆盖「束带蛇」属（Thamnophis）中的这一个种，不要把结果套到其它束带蛇上。",
  "scopeShortEn": "⚠️ This card covers only this one species within the genus Thamnophis (30+ species); do not apply it to other garter snakes.",
  "taxon": "snake",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 756,
    "nText": "观测 756 次",
    "nTextEn": "n = 756 observations",
    "source": "Holden, K.G., Reding, D.M., Ford, N.B. & Bronikowski, A.M. 2019. J. Exp. Biol. 222:jeb200220. DOI 10.1242/jeb.200220（个体级原始数据：Dryad 10.5061/dryad.mf1gm3p，Tm_GrowthPhys_FullDataSet.csv，70 只个体 × 40 周纵向测量）",
    "evidence": "L1",
    "sourceShort": "Holden 2019",
    "caveats": [
     "single_captive_population"
    ],
    "coverage": {
     "run": 14,
     "total": 15,
     "ratio": 0.933,
     "domain": [
      115.0,
      815.0
     ],
     "dataRanges": [
      [
       115.0,
       685.0
      ]
     ]
    },
    "coverageText": "14/15 = 93%",
    "coverageBasis": "分母 = 该物种完整体型范围 115–815 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 115–815 mm",
    "segments": [
     {
      "lo": 115.0,
      "hi": 685.0,
      "a": 1.83779443684579e-06,
      "b": 2.8036649875850728,
      "r2": 0.9726,
      "sd": 0.0843,
      "interp": false,
      "src": "Holden, K.G., Reding, D.M., Ford, N.B. & Bronikowski, A.M. 2019. J. Exp. Biol. 222:jeb200220. DOI 10.1242/jeb.200220（个体级原始数据：Dryad 10.5061/dryad.mf1gm3p，Tm_GrowthPhys_FullDataSet.csv，70 只个体 × 40 周纵向测量）"
     }
    ],
    "band95": 47.4
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_male",
    "groupZh": "家养·雄性",
    "groupEn": "Captive · Male",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 422,
    "nText": "观测 422 次",
    "nTextEn": "n = 422 observations",
    "source": "Holden, K.G., Reding, D.M., Ford, N.B. & Bronikowski, A.M. 2019. J. Exp. Biol. 222:jeb200220. DOI 10.1242/jeb.200220（个体级原始数据：Dryad 10.5061/dryad.mf1gm3p，Tm_GrowthPhys_FullDataSet.csv，70 只个体 × 40 周纵向测量）",
    "evidence": "L1",
    "sourceShort": "Holden 2019",
    "caveats": [
     "single_captive_population"
    ],
    "coverage": {
     "run": 11,
     "total": 15,
     "ratio": 0.733,
     "domain": [
      115.0,
      815.0
     ],
     "dataRanges": [
      [
       127.0,
       580.0
      ]
     ]
    },
    "coverageText": "11/15 = 73%",
    "coverageBasis": "分母 = 该物种完整体型范围 115–815 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 115–815 mm",
    "segments": [
     {
      "lo": 127.0,
      "hi": 580.0,
      "a": 3.5591508988629196e-06,
      "b": 2.677199121637251,
      "r2": 0.9626,
      "sd": 0.0834,
      "interp": false,
      "src": "Holden, K.G., Reding, D.M., Ford, N.B. & Bronikowski, A.M. 2019. J. Exp. Biol. 222:jeb200220. DOI 10.1242/jeb.200220（个体级原始数据：Dryad 10.5061/dryad.mf1gm3p，Tm_GrowthPhys_FullDataSet.csv，70 只个体 × 40 周纵向测量）"
     }
    ],
    "band95": 46.8
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_female",
    "groupZh": "家养·雌性",
    "groupEn": "Captive · Female",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 334,
    "nText": "观测 334 次",
    "nTextEn": "n = 334 observations",
    "source": "Holden, K.G., Reding, D.M., Ford, N.B. & Bronikowski, A.M. 2019. J. Exp. Biol. 222:jeb200220. DOI 10.1242/jeb.200220（个体级原始数据：Dryad 10.5061/dryad.mf1gm3p，Tm_GrowthPhys_FullDataSet.csv，70 只个体 × 40 周纵向测量）",
    "evidence": "L1",
    "sourceShort": "Holden 2019",
    "caveats": [
     "single_captive_population"
    ],
    "coverage": {
     "run": 14,
     "total": 15,
     "ratio": 0.933,
     "domain": [
      115.0,
      815.0
     ],
     "dataRanges": [
      [
       115.0,
       685.0
      ]
     ]
    },
    "coverageText": "14/15 = 93%",
    "coverageBasis": "分母 = 该物种完整体型范围 115–815 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 115–815 mm",
    "segments": [
     {
      "lo": 115.0,
      "hi": 685.0,
      "a": 1.307919975407887e-06,
      "b": 2.874785966127963,
      "r2": 0.9851,
      "sd": 0.0712,
      "interp": false,
      "src": "Holden, K.G., Reding, D.M., Ford, N.B. & Bronikowski, A.M. 2019. J. Exp. Biol. 222:jeb200220. DOI 10.1242/jeb.200220（个体级原始数据：Dryad 10.5061/dryad.mf1gm3p，Tm_GrowthPhys_FullDataSet.csv，70 只个体 × 40 周纵向测量）"
     }
    ],
    "band95": 38.8
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 756,
    "nText": "观测 756 次",
    "nTextEn": "n = 756 observations",
    "source": "Holden, K.G., Reding, D.M., Ford, N.B. & Bronikowski, A.M. 2019. J. Exp. Biol. 222:jeb200220. DOI 10.1242/jeb.200220（个体级原始数据：Dryad 10.5061/dryad.mf1gm3p，Tm_GrowthPhys_FullDataSet.csv，70 只个体 × 40 周纵向测量）",
    "evidence": "L1",
    "sourceShort": "Holden 2019",
    "caveats": [
     "single_captive_population",
     "extrapolation_only"
    ],
    "coverage": {
     "run": 9,
     "total": 15,
     "ratio": 0.6,
     "domain": [
      0.0,
      1.5047895314645299
     ],
     "dataRanges": [
      [
       0.0,
       0.769
      ]
     ]
    },
    "coverageText": "9/15 = 60%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 1.5 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 1.5 yr",
    "model": "gompertz",
    "modelText": "Gompertz 生长方程",
    "modelTextEn": "Gompertz growth equation",
    "params": {
     "Linf": 689.63,
     "k": 1.9908,
     "ti": 0.2514
    },
    "t95": 1.7433605885188845,
    "t95Text": "1.7 年",
    "t95TextEn": "1.7 yr"
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Thamnophis_radix",
  "zh": "束带蛇（草原）",
  "latin": "Thamnophis radix",
  "en": "Plains Garter Snake",
  "status": "ok",
  "hasAL": false,
  "caliberSummary": "吻肛长（SVL）",
  "caliberSummaryEn": "Snout–vent length (SVL)",
  "py": "shudaishecaoyuan",
  "pyi": "sdscy",
  "alias": [
   "束带蛇",
   "草原束带蛇",
   "草原袜带蛇",
   "平原束带蛇"
  ],
  "aliasEn": [
   "Garter Snake",
   "Plains Garter Snake"
  ],
  "scopeShort": "⚠️ 本卡只覆盖「束带蛇」属（Thamnophis）中的这一个种，不要套到其它束带蛇上。",
  "scopeShortEn": "⚠️ This card covers only this one species within the genus Thamnophis (30+ species); do not apply it to other garter snakes.",
  "taxon": "snake",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_male",
    "groupZh": "野外·雄性",
    "groupEn": "Wild · Male",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 156,
    "nText": "样本 156",
    "nTextEn": "n = 156",
    "source": "Tuttle, K. 2007. Natural history of the Plains garter snake (Thamnophis radix) at the northern limit of its range in Alberta, Canada. MSc thesis, University of Victoria（导师 Patrick T. Gregory；handle http://hdl.handle.net/1828/2500；原文件 120 页 / 26.3 MB **无文字层的扫描件**，本项目以 170 dpi 逐页渲染读图核对）—— Table 2（p.21）、Figure 11（p.27）、Results 正文（p.20）、Methods（p.19）",
    "evidence": "L2",
    "sourceShort": "Tuttle 2007",
    "caveats": [
     "no_spread_reported",
     "single_wild_population"
    ],
    "coverage": {
     "run": 12,
     "total": 15,
     "ratio": 0.8,
     "domain": [
      151.0,
      840.0
     ],
     "dataRanges": [
      [
       176.0,
       635.0
      ]
     ]
    },
    "coverageText": "12/15 = 80%",
    "coverageBasis": "分母 = 该物种完整体型范围 151–840 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 151–840 mm",
    "segments": [
     {
      "lo": 176.0,
      "hi": 635.0,
      "a": 4.609390570394435e-07,
      "b": 2.984,
      "r2": null,
      "sd": null,
      "interp": false,
      "src": "Tuttle, K. 2007. Natural history of the Plains garter snake (Thamnophis radix) at the northern limit of its range in Alberta, Canada. MSc thesis, University of Victoria（导师 Patrick T. Gregory；handle http://hdl.handle.net/1828/2500；原文件 120 页 / 26.3 MB **无文字层的扫描件**，本项目以 170 dpi 逐页渲染读图核对）—— Table 2（p.21）、Figure 11（p.27）、Results 正文（p.20）、Methods（p.19）"
     }
    ],
    "band95": null
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_female",
    "groupZh": "野外·雌性",
    "groupEn": "Wild · Female",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 122,
    "nText": "样本 122",
    "nTextEn": "n = 122",
    "source": "Tuttle, K. 2007. Natural history of the Plains garter snake (Thamnophis radix) at the northern limit of its range in Alberta, Canada. MSc thesis, University of Victoria（导师 Patrick T. Gregory；handle http://hdl.handle.net/1828/2500；原文件 120 页 / 26.3 MB **无文字层的扫描件**，本项目以 170 dpi 逐页渲染读图核对）—— Table 2（p.21）、Figure 11（p.27）、Results 正文（p.20）、Methods（p.19）",
    "evidence": "L2",
    "sourceShort": "Tuttle 2007",
    "caveats": [
     "no_spread_reported",
     "single_wild_population"
    ],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      151.0,
      840.0
     ],
     "dataRanges": [
      [
       151.0,
       760.0
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 该物种完整体型范围 151–840 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 151–840 mm",
    "segments": [
     {
      "lo": 151.0,
      "hi": 760.0,
      "a": 3.518714242828764e-07,
      "b": 3.04,
      "r2": null,
      "sd": null,
      "interp": false,
      "src": "Tuttle, K. 2007. Natural history of the Plains garter snake (Thamnophis radix) at the northern limit of its range in Alberta, Canada. MSc thesis, University of Victoria（导师 Patrick T. Gregory；handle http://hdl.handle.net/1828/2500；原文件 120 页 / 26.3 MB **无文字层的扫描件**，本项目以 170 dpi 逐页渲染读图核对）—— Table 2（p.21）、Figure 11（p.27）、Results 正文（p.20）、Methods（p.19）"
     }
    ],
    "band95": null
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Thamnophis_sirtalis",
  "zh": "束带蛇（普通）",
  "latin": "Thamnophis sirtalis",
  "en": "Common Garter Snake",
  "status": "ok",
  "hasAL": false,
  "caliberSummary": "吻肛长（SVL）",
  "caliberSummaryEn": "Snout–vent length (SVL)",
  "py": "shudaisheputong",
  "pyi": "sdsp",
  "alias": [
   "束带蛇",
   "普通束带蛇",
   "东部束带蛇",
   "袜带蛇",
   "园丁蛇"
  ],
  "aliasEn": [
   "Garter Snake",
   "Common Garter Snake",
   "Eastern Garter Snake"
  ],
  "scopeShort": "⚠️ 本卡只覆盖「束带蛇」属（Thamnophis）中的这一个种，不要把结果套到其它束带蛇上。",
  "scopeShortEn": "⚠️ This card covers only this one species within the genus Thamnophis (30+ species); do not apply it to other garter snakes.",
  "taxon": "snake",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_male",
    "groupZh": "野外·雄性",
    "groupEn": "Wild · Male",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 349,
    "nText": "样本 349",
    "nTextEn": "n = 349",
    "source": "Rollings, N. et al. 2017, Proc. R. Soc. B 284:20162146, DOI 10.1098/rspb.2016.2146（Dryad 10.5061/dryad.jv463）；Friesen, C.R., Uhrig, E.J. & Mason, R.T. 2021, Behavioral Ecology 33(1), DOI 10.1093/beheco/arab151（Dryad 10.5061/dryad.zcrjdfncq）；Friesen, C.R., Mason, R.T. & Uhrig, E.J. 2021, Biol. J. Linn. Soc. 133(2), DOI 10.1093/biolinnean/blab019（Dryad 10.5061/dryad.1rn8pk0sq）",
    "evidence": "L1",
    "sourceShort": "Rollings 2017",
    "caveats": [
     "single_wild_population"
    ],
    "coverage": {
     "run": 7,
     "total": 15,
     "ratio": 0.467,
     "domain": [
      115.0,
      1060.0
     ],
     "dataRanges": [
      [
       354.0,
       646.0
      ]
     ]
    },
    "coverageText": "7/15 = 47%",
    "coverageBasis": "分母 = 该物种完整体型范围 115–1060 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 115–1060 mm",
    "segments": [
     {
      "lo": 354.0,
      "hi": 646.0,
      "a": 6.570863749516194e-07,
      "b": 2.854910516032682,
      "r2": 0.8694,
      "sd": 0.0598,
      "interp": false,
      "src": "Rollings, N. et al. 2017, Proc. R. Soc. B 284:20162146, DOI 10.1098/rspb.2016.2146（Dryad 10.5061/dryad.jv463）；Friesen, C.R., Uhrig, E.J. & Mason, R.T. 2021, Behavioral Ecology 33(1), DOI 10.1093/beheco/arab151（Dryad 10.5061/dryad.zcrjdfncq）；Friesen, C.R., Mason, R.T. & Uhrig, E.J. 2021, Biol. J. Linn. Soc. 133(2), DOI 10.1093/biolinnean/blab019（Dryad 10.5061/dryad.1rn8pk0sq）"
     }
    ],
    "band95": 31.7
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_female",
    "groupZh": "野外·雌性",
    "groupEn": "Wild · Female",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 92,
    "nText": "样本 92",
    "nTextEn": "n = 92",
    "source": "Rollings, N. et al. 2017, Proc. R. Soc. B 284:20162146, DOI 10.1098/rspb.2016.2146（Dryad 10.5061/dryad.jv463）；Friesen, C.R., Uhrig, E.J. & Mason, R.T. 2021, Behavioral Ecology 33(1), DOI 10.1093/beheco/arab151（Dryad 10.5061/dryad.zcrjdfncq）；Friesen, C.R., Mason, R.T. & Uhrig, E.J. 2021, Biol. J. Linn. Soc. 133(2), DOI 10.1093/biolinnean/blab019（Dryad 10.5061/dryad.1rn8pk0sq）",
    "evidence": "L1",
    "sourceShort": "Rollings 2017",
    "caveats": [
     "single_wild_population"
    ],
    "coverage": {
     "run": 8,
     "total": 15,
     "ratio": 0.533,
     "domain": [
      115.0,
      1060.0
     ],
     "dataRanges": [
      [
       367.0,
       745.0
      ]
     ]
    },
    "coverageText": "8/15 = 53%",
    "coverageBasis": "分母 = 该物种完整体型范围 115–1060 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 115–1060 mm",
    "segments": [
     {
      "lo": 367.0,
      "hi": 745.0,
      "a": 8.609942228292658e-08,
      "b": 3.2210827745206156,
      "r2": 0.9109,
      "sd": 0.0614,
      "interp": false,
      "src": "Rollings, N. et al. 2017, Proc. R. Soc. B 284:20162146, DOI 10.1098/rspb.2016.2146（Dryad 10.5061/dryad.jv463）；Friesen, C.R., Uhrig, E.J. & Mason, R.T. 2021, Behavioral Ecology 33(1), DOI 10.1093/beheco/arab151（Dryad 10.5061/dryad.zcrjdfncq）；Friesen, C.R., Mason, R.T. & Uhrig, E.J. 2021, Biol. J. Linn. Soc. 133(2), DOI 10.1093/biolinnean/blab019（Dryad 10.5061/dryad.1rn8pk0sq）"
     }
    ],
    "band95": 32.7
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Tiliqua_scincoides",
  "zh": "蓝舌石龙子（东部蓝舌石龙子）",
  "latin": "Tiliqua scincoides",
  "en": "Eastern Blue-tongued Skink",
  "status": "ok",
  "hasAL": false,
  "caliberSummary": "吻肛长（SVL）",
  "caliberSummaryEn": "Snout–vent length (SVL)",
  "py": "lansheshilongzi",
  "pyi": "lslz",
  "alias": [
   "蓝舌",
   "蓝舌蜥",
   "蓝舌石龙"
  ],
  "aliasEn": [
   "Blue-tongued Skink",
   "Bluey"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "lizard",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 57,
    "nText": "样本 57",
    "nTextEn": "n = 57",
    "source": "Turner GS (2010) Natural History Notes on the Eastern Blue-tongued Skink 'Tiliqua scincoides scincoides' from the Basalt Plains around Melbourne. The Victorian Naturalist 127(3):70-78. doi:10.5281/zenodo.16122286（BHL 原刊数字化件，全文已取得并核对）",
    "evidence": "L2",
    "sourceShort": "Turner 2010",
    "caveats": [],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      64,
      340
     ],
     "dataRanges": [
      [
       76,
       340
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 该物种完整体型范围 64–340 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 64–340 mm",
    "segments": [
     {
      "lo": 76,
      "hi": 340,
      "a": 3.363309518571897e-05,
      "b": 2.86,
      "r2": 0.96,
      "sd": 0.0634,
      "interp": false,
      "src": "Turner GS (2010) The Victorian Naturalist 127(3):70-78"
     }
    ],
    "band95": 33.9
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 17,
    "nText": "样本 17",
    "nTextEn": "n = 17",
    "source": "Koenig J, Shine R & Shea GM (2001) The ecology of an Australian reptile icon: how do blue-tongued lizards (Tiliqua scincoides) survive in suburbia? Wildlife Research 28(3):215-227. doi:10.1071/WR00068",
    "evidence": "L1",
    "sourceShort": "Koenig 2001",
    "caveats": [],
    "coverage": {
     "run": 4,
     "total": 15,
     "ratio": 0.267,
     "domain": [
      64,
      340
     ],
     "dataRanges": [
      [
       275,
       335
      ]
     ]
    },
    "coverageText": "4/15 = 27%",
    "coverageBasis": "分母 = 该物种完整体型范围 64–340 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 64–340 mm",
    "segments": [
     {
      "lo": 275,
      "hi": 335,
      "a": 3.4392494468143485e-06,
      "b": 3.2673,
      "r2": 0.69098,
      "sd": 0.054984,
      "interp": false,
      "src": "Koenig J, Shine R & Shea GM (2001) Wildlife Research 28(3):215-227"
     }
    ],
    "band95": 28.8
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_mixed",
    "groupZh": "家养·混合",
    "groupEn": "Captive · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 20,
    "nText": "样本 20",
    "nTextEn": "n = 20",
    "source": "McKenzie A, Li T & Doneley B (2022) A comparison of two techniques to identify the sex of the eastern blue-tongue skink (Tiliqua scincoides scincoides). Australian Veterinary Journal 100(8):407-413. doi:10.1111/avj.13170 (PMC9544598, 开放获取)",
    "evidence": "L1",
    "sourceShort": "McKenzie 2022",
    "caveats": [],
    "coverage": {
     "run": 6,
     "total": 15,
     "ratio": 0.4,
     "domain": [
      64,
      340
     ],
     "dataRanges": [
      [
       244,
       324
      ]
     ]
    },
    "coverageText": "6/15 = 40%",
    "coverageBasis": "分母 = 该物种完整体型范围 64–340 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 64–340 mm",
    "segments": [
     {
      "lo": 244,
      "hi": 324,
      "a": 1.020348864832787e-06,
      "b": 3.4994,
      "r2": 0.76345,
      "sd": 0.069057,
      "interp": false,
      "src": "McKenzie A, Li T & Doneley B (2022) Australian Veterinary Journal 100(8):407-413"
     }
    ],
    "band95": 37.4
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Timon_lepidus",
  "zh": "珠宝蜥",
  "latin": "Timon lepidus",
  "en": "Ocellated Lizard",
  "status": "ok",
  "hasAL": false,
  "caliberSummary": "吻肛长（SVL）",
  "caliberSummaryEn": "Snout–vent length (SVL)",
  "py": "zhubaoxi",
  "pyi": "zbx",
  "alias": [
   "珠宝蜥",
   "珠蜥",
   "眼斑蜥",
   "欧西蜥"
  ],
  "aliasEn": [
   "Jewelled Lizard",
   "Ocellated Lizard"
  ],
  "scopeShort": "⚠️ 原 Timon lepidus 复合体中，内华达珠宝蜥 T. nevadensis 现为独立种；本卡只覆盖 T. lepidus s.s.。",
  "scopeShortEn": "⚠️ Within the former Timon lepidus complex, Timon nevadensis is now a separate species; this card covers T. lepidus s.s. only.",
  "taxon": "lizard",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 20,
    "nText": "样本 20",
    "nTextEn": "n = 20",
    "source": "Megía-Palma R, Cuervo JJ, Fitze PS, Martínez J, Jiménez-Robles O, de la Riva I, Reguera S, Moreno-Rueda G, Blaimont P, Kopena R, Barrientos R, Martín J, Merino S (2024) Do sexual differences in life strategies make male lizards more susceptible to parasite infection? Journal of Animal Ecology 93:1414-1426(印刷页以出版版本为准). doi:10.1111/1365-2656.14154　个体级原始数据（CC BY 4.0）：Mendeley Data doi:10.17632/py4vr4wv2j.1 — SMi_species_TODOS_2.csv",
    "evidence": "L1",
    "sourceShort": "Megía-Palma 2024",
    "caveats": [
     "small_n",
     "gravid_females_not_identified",
     "single_wild_population"
    ],
    "coverage": {
     "run": 5,
     "total": 15,
     "ratio": 0.333,
     "domain": [
      26.0,
      240.0
     ],
     "dataRanges": [
      [
       103.0,
       167.0
      ]
     ]
    },
    "coverageText": "5/15 = 33%",
    "coverageBasis": "分母 = 该物种完整体型范围 26–240 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 26–240 mm",
    "segments": [
     {
      "lo": 103.0,
      "hi": 167.0,
      "a": 1.9041393e-05,
      "b": 3.0689,
      "r2": 0.9416,
      "sd": 0.0552,
      "interp": false,
      "src": "Megía-Palma R, Cuervo JJ, Fitze PS, Martínez J, Jiménez-Robles O, de la Riva I, Reguera S, Moreno-Rueda G, Blaimont P, Kopena R, Barrientos R, Martín J, Merino S (2024) Do sexual differences in life strategies make male lizards more susceptible to parasite infection? Journal of Animal Ecology 93:1414-1426(印刷页以出版版本为准). doi:10.1111/1365-2656.14154　个体级原始数据（CC BY 4.0）：Mendeley Data doi:10.17632/py4vr4wv2j.1 — SMi_species_TODOS_2.csv"
     }
    ],
    "band95": 28.3
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_male",
    "groupZh": "野外·雄性",
    "groupEn": "Wild · Male",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 10,
    "nText": "样本 10",
    "nTextEn": "n = 10",
    "source": "Megía-Palma R, Cuervo JJ, Fitze PS, Martínez J, Jiménez-Robles O, de la Riva I, Reguera S, Moreno-Rueda G, Blaimont P, Kopena R, Barrientos R, Martín J, Merino S (2024) Do sexual differences in life strategies make male lizards more susceptible to parasite infection? Journal of Animal Ecology 93:1414-1426(印刷页以出版版本为准). doi:10.1111/1365-2656.14154　个体级原始数据（CC BY 4.0）：Mendeley Data doi:10.17632/py4vr4wv2j.1 — SMi_species_TODOS_2.csv",
    "evidence": "L1",
    "sourceShort": "Megía-Palma 2024",
    "caveats": [
     "small_n",
     "gravid_females_not_identified",
     "single_wild_population"
    ],
    "coverage": {
     "run": 5,
     "total": 15,
     "ratio": 0.333,
     "domain": [
      26.0,
      240.0
     ],
     "dataRanges": [
      [
       107.0,
       167.0
      ]
     ]
    },
    "coverageText": "5/15 = 33%",
    "coverageBasis": "分母 = 该物种完整体型范围 26–240 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 26–240 mm",
    "segments": [
     {
      "lo": 107.0,
      "hi": 167.0,
      "a": 1.2829246e-05,
      "b": 3.1524,
      "r2": 0.9847,
      "sd": 0.0322,
      "interp": false,
      "src": "Megía-Palma R, Cuervo JJ, Fitze PS, Martínez J, Jiménez-Robles O, de la Riva I, Reguera S, Moreno-Rueda G, Blaimont P, Kopena R, Barrientos R, Martín J, Merino S (2024) Do sexual differences in life strategies make male lizards more susceptible to parasite infection? Journal of Animal Ecology 93:1414-1426(印刷页以出版版本为准). doi:10.1111/1365-2656.14154　个体级原始数据（CC BY 4.0）：Mendeley Data doi:10.17632/py4vr4wv2j.1 — SMi_species_TODOS_2.csv"
     }
    ],
    "band95": 15.6
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_female",
    "groupZh": "野外·雌性",
    "groupEn": "Wild · Female",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 10,
    "nText": "样本 10",
    "nTextEn": "n = 10",
    "source": "Megía-Palma R, Cuervo JJ, Fitze PS, Martínez J, Jiménez-Robles O, de la Riva I, Reguera S, Moreno-Rueda G, Blaimont P, Kopena R, Barrientos R, Martín J, Merino S (2024) Do sexual differences in life strategies make male lizards more susceptible to parasite infection? Journal of Animal Ecology 93:1414-1426(印刷页以出版版本为准). doi:10.1111/1365-2656.14154　个体级原始数据（CC BY 4.0）：Mendeley Data doi:10.17632/py4vr4wv2j.1 — SMi_species_TODOS_2.csv",
    "evidence": "L1",
    "sourceShort": "Megía-Palma 2024",
    "caveats": [
     "small_n",
     "gravid_females_not_identified",
     "single_wild_population"
    ],
    "coverage": {
     "run": 4,
     "total": 15,
     "ratio": 0.267,
     "domain": [
      26.0,
      240.0
     ],
     "dataRanges": [
      [
       103.0,
       148.0
      ]
     ]
    },
    "coverageText": "4/15 = 27%",
    "coverageBasis": "分母 = 该物种完整体型范围 26–240 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 26–240 mm",
    "segments": [
     {
      "lo": 103.0,
      "hi": 148.0,
      "a": 3.5825505e-05,
      "b": 2.9355,
      "r2": 0.8816,
      "sd": 0.0751,
      "interp": false,
      "src": "Megía-Palma R, Cuervo JJ, Fitze PS, Martínez J, Jiménez-Robles O, de la Riva I, Reguera S, Moreno-Rueda G, Blaimont P, Kopena R, Barrientos R, Martín J, Merino S (2024) Do sexual differences in life strategies make male lizards more susceptible to parasite infection? Journal of Animal Ecology 93:1414-1426(印刷页以出版版本为准). doi:10.1111/1365-2656.14154　个体级原始数据（CC BY 4.0）：Mendeley Data doi:10.17632/py4vr4wv2j.1 — SMi_species_TODOS_2.csv"
     }
    ],
    "band95": 40.4
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Trachemys_scripta_elegans",
  "zh": "红耳龟",
  "latin": "Trachemys scripta elegans",
  "en": "Red-eared Slider",
  "status": "ok",
  "hasAL": true,
  "caliberSummary": "中线甲长（midline CL）、最大甲长（CLmax）",
  "caliberSummaryEn": "Midline carapace length (midline CL), Maximum carapace length (CLmax)",
  "py": "hongergui",
  "pyi": "heg",
  "alias": [
   "巴西龟",
   "巴西彩龟",
   "红耳彩龟",
   "巴西红耳龟"
  ],
  "aliasEn": [
   "Red-eared Slider",
   "Slider"
  ],
  "scopeShort": "",
  "scopeShortEn": "",
  "taxon": "turtle",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_male",
    "groupZh": "野外·雄性",
    "groupEn": "Wild · Male",
    "caliber": "midline_CL",
    "caliberText": "中线甲长（midline CL）",
    "caliberTextEn": "Midline carapace length (midline CL)",
    "n": 460,
    "nText": "样本 460",
    "nTextEn": "n = 460",
    "source": "Brown et al. 2020, Data in Brief 105356 (Mendeley 10.17632/8n4x87fctp.3)",
    "evidence": "L1",
    "sourceShort": "Brown 2020",
    "caveats": [],
    "coverage": {
     "run": 8,
     "total": 15,
     "ratio": 0.533,
     "domain": [
      30,
      350
     ],
     "dataRanges": [
      [
       76,
       236
      ]
     ]
    },
    "coverageText": "8/15 = 53%",
    "coverageBasis": "分母 = 该物种完整体型范围 30–350 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 30–350 mm",
    "segments": [
     {
      "lo": 76,
      "hi": 236,
      "a": 9.9098e-05,
      "b": 3.0642,
      "r2": 0.9636,
      "sd": 0.0617,
      "interp": false,
      "src": "Brown et al. 2020, Data in Brief 105356 (Mendeley 10.17632/8n4x87fctp.3)"
     }
    ],
    "band95": 32.9
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_female",
    "groupZh": "野外·雌性",
    "groupEn": "Wild · Female",
    "caliber": "midline_CL",
    "caliberText": "中线甲长（midline CL）",
    "caliberTextEn": "Midline carapace length (midline CL)",
    "n": 454,
    "nText": "样本 454",
    "nTextEn": "n = 454",
    "source": "Brown et al. 2020",
    "evidence": "L1",
    "sourceShort": "Brown 2020",
    "caveats": [],
    "coverage": {
     "run": 10,
     "total": 15,
     "ratio": 0.667,
     "domain": [
      30,
      350
     ],
     "dataRanges": [
      [
       83,
       284
      ]
     ]
    },
    "coverageText": "10/15 = 67%",
    "coverageBasis": "分母 = 该物种完整体型范围 30–350 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 30–350 mm",
    "segments": [
     {
      "lo": 83,
      "hi": 284,
      "a": 0.00014309,
      "b": 3.0069,
      "r2": 0.9783,
      "sd": 0.0466,
      "interp": false,
      "src": "Brown et al. 2020"
     }
    ],
    "band95": 23.9
   },
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "wild_mixed",
    "groupZh": "野外·混合",
    "groupEn": "Wild · Mixed",
    "caliber": "midline_CL",
    "caliberText": "中线甲长（midline CL）",
    "caliberTextEn": "Midline carapace length (midline CL)",
    "n": 1022,
    "nText": "样本 1022",
    "nTextEn": "n = 1022",
    "source": "Brown et al. 2020",
    "evidence": "L1",
    "sourceShort": "Brown 2020",
    "caveats": [],
    "coverage": {
     "run": 12,
     "total": 15,
     "ratio": 0.8,
     "domain": [
      30,
      350
     ],
     "dataRanges": [
      [
       30,
       284
      ]
     ]
    },
    "coverageText": "12/15 = 80%",
    "coverageBasis": "分母 = 该物种完整体型范围 30–350 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 30–350 mm",
    "segments": [
     {
      "lo": 30,
      "hi": 284,
      "a": 0.0001282,
      "b": 3.0207,
      "r2": 0.9799,
      "sd": 0.0674,
      "interp": false,
      "src": "Brown et al. 2020"
     }
    ],
    "band95": 36.4
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_male",
    "groupZh": "野外·雄性",
    "groupEn": "Wild · Male",
    "caliber": "CLmax",
    "caliberText": "最大甲长（CLmax）",
    "caliberTextEn": "Maximum carapace length (CLmax)",
    "n": 20,
    "nText": "样本 20",
    "nTextEn": "n = 20",
    "source": "Lewis et al. 2018 (HerpConBio)",
    "evidence": "L1",
    "sourceShort": "Lewis 2018",
    "caveats": [],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      0,
      12.5
     ],
     "dataRanges": [
      [
       0,
       20
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 12.5 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 12.5 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 206.4,
     "k": 0.24,
     "L0": 27.65,
     "t0": 0.0
    },
    "t95": 11.882935089669585,
    "t95Text": "11.9 年",
    "t95TextEn": "11.9 yr"
   },
   {
    "lowRel": false,
    "kind": "age_length",
    "group": "wild_female",
    "groupZh": "野外·雌性",
    "groupEn": "Wild · Female",
    "caliber": "CLmax",
    "caliberText": "最大甲长（CLmax）",
    "caliberTextEn": "Maximum carapace length (CLmax)",
    "n": 28,
    "nText": "样本 28",
    "nTextEn": "n = 28",
    "source": "Lewis et al. 2018 (HerpConBio)",
    "evidence": "L1",
    "sourceShort": "Lewis 2018",
    "caveats": [],
    "coverage": {
     "run": 15,
     "total": 15,
     "ratio": 1.0,
     "domain": [
      0,
      15.8
     ],
     "dataRanges": [
      [
       0,
       20
      ]
     ]
    },
    "coverageText": "15/15 = 100%",
    "coverageBasis": "分母 = 惯例年龄 ln(20)/k = 15.8 年",
    "coverageBasisEn": "Denominator = conventional age ln(20)/k = 15.8 yr",
    "model": "von_bertalanffy",
    "modelText": "von Bertalanffy 生长方程",
    "modelTextEn": "von Bertalanffy growth equation",
    "params": {
     "Linf": 249.1,
     "k": 0.19,
     "L0": 27.65,
     "t0": 0.0
    },
    "t95": 15.14776148239507,
    "t95Text": "15.1 年",
    "t95TextEn": "15.1 yr"
   }
  ],
  "lowRelCurves": []
 },
 {
  "id": "Xenopus_laevis",
  "zh": "非洲爪蟾",
  "latin": "Xenopus laevis",
  "en": "African Clawed Frog",
  "status": "ok",
  "hasAL": false,
  "caliberSummary": "吻肛长（SVL）",
  "caliberSummaryEn": "Snout–vent length (SVL)",
  "py": "feizhouzhanchan",
  "pyi": "fzzc",
  "alias": [
   "非洲爪蟾",
   "爪蟾",
   "非洲爪蛙",
   "水蟾",
   "ACF"
  ],
  "aliasEn": [
   "African Clawed Frog",
   "Xenopus"
  ],
  "scopeShort": "⚠️ 本卡数据全部为雌性，不得用于雄性；且散度很大（±63%）—— 原始数据未区分是否怀卵（卵巢占体重约 19%）。",
  "scopeShortEn": "⚠️ All data are from females and must not be used for males. Scatter is large (±63%): the source did not record whether females were gravid (ovaries are about 19% of body mass).",
  "taxon": "amphibian",
  "refs": [],
  "curves": [
   {
    "lowRel": false,
    "kind": "length_weight",
    "group": "captive_female",
    "groupZh": "家养·雌性",
    "groupEn": "Captive · Female",
    "caliber": "SVL",
    "caliberText": "吻肛长（SVL）",
    "caliberTextEn": "Snout–vent length (SVL)",
    "n": 38,
    "nText": "样本 38",
    "nTextEn": "n = 38",
    "source": "Böswald LF, Matzek D, von La Roche D, Stahr B, Bawidamann P & Popper B 2024. Investigations on Xenopus laevis body composition and feeding behavior in a laboratory setting. Scientific Reports 14:9517. doi:10.1038/s41598-024-59848-0",
    "evidence": "L2",
    "sourceShort": "Böswald 2024",
    "caveats": [
     "single_captive_population",
     "gravid_females_not_identified"
    ],
    "coverage": {
     "run": 9,
     "total": 15,
     "ratio": 0.6,
     "domain": [
      25,
      147
     ],
     "dataRanges": [
      [
       71,
       134
      ]
     ]
    },
    "coverageText": "9/15 = 60%",
    "coverageBasis": "分母 = 该物种完整体型范围 25–147 mm",
    "coverageBasisEn": "Denominator = full body-size range of the species, 25–147 mm",
    "segments": [
     {
      "lo": 71,
      "hi": 134,
      "a": 0.0017151076,
      "b": 2.469,
      "r2": 0.7,
      "sd": 0.10857,
      "interp": false,
      "src": "Böswald LF, Matzek D, von La Roche D, Stahr B, Bawidamann P & Popper B 2024. Investigations on Xenopus laevis body composition and feeding behavior in a laboratory setting. Scientific Reports 14:9517. doi:10.1038/s41598-024-59848-0 — 原文 Fig. 1A + 正文：BW(g) = 0.505 · L(cm)^2.469"
     }
    ],
    "band95": 63.2
   }
  ],
  "lowRelCurves": []
 }
];
