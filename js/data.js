// Dashboard data. Replace with API response later; app.js only reads window.FMS_DATA.
// Bar segment values are in "km" units (y-axis 0–1000), derived from the Figma bar heights.
window.FMS_DATA = {
  updatedAt: "2023-09-12 12:00",
  monthTotal: 1049,
  gradeATotal: 779,
  tooltip: { day: 7, label: "當日DTC總次數", count: 42 },
  legend: [
    { key: "a", label: "A級" },
    { key: "b", label: "B級" },
    { key: "c", label: "C級" },
  ],
  // day -> segments stacked top→bottom: a, b, c, d
  chart: {
    max: 1000,
    days: 31,
    bars: {
      1:  { a: 72,  b: 290, c: 290, d: 76 },
      2:  { a: 228, b: 77,  c: 77,  d: 77 },
      3:  { a: 228, b: 297, c: 22,  d: 22 },
      4:  { a: 14,  b: 0,   c: 53,  d: 53 },
      5:  { a: 0,   b: 0,   c: 0,   d: 72 },
      6:  { a: 228, b: 28,  c: 28,  d: 28 },
      7:  { a: 72,  b: 290, c: 290, d: 76 },
      8:  { a: 228, b: 297, c: 22,  d: 22 },
      9:  { a: 29,  b: 104, c: 104, d: 104 },
      10: { a: 0,   b: 0,   c: 0,   d: 72 },
      11: { a: 0,   b: 0,   c: 0,   d: 29 },
      12: { a: 29,  b: 144, c: 144, d: 144 },
    },
  },
  dtcLog: [
    { code: "P0217", desc: "進氣節氣門位置感知器 - 超出範圍( 高於範圍 )", plate: "KER-9098", org: "田尾果菜生產合作社", date: "2023-06-02", time: "12:45:18" },
    { code: "P0341", desc: "引擎轉速副感知器 ( 凸輪軸位置感知器 ) - 合理性", plate: "DEF-0000", org: "田尾果菜生產合作社", date: "2023-06-02", time: "12:45:18" },
    { code: "P0545", desc: "No.1 排氣溫度感知器 (ATC 出口 ) -超出範圍 ( 低於標準值", plate: "KER-9098", org: "田尾果菜生產合作社", date: "2023-06-02", time: "12:45:18" },
    { code: "P0217", desc: "進氣節氣門位置感知器 - 超出範圍( 高於範圍 )", plate: "ABC-1234", org: "田尾果菜生產合作社", date: "2023-06-02", time: "12:45:18" },
    { code: "P0217", desc: "進氣節氣門位置感知器 - 超出範圍( 高於範圍 )", plate: "DEF-0000", org: "田尾果菜生產合作社", date: "2023-06-02", time: "12:45:18" },
    { code: "P0217", desc: "進氣節氣門位置感知器 - 超出範圍( 高於範圍 )", plate: "KER-9098", org: "田尾果菜生產合作社", date: "2023-06-02", time: "12:45:18" },
    { code: "P0341", desc: "引擎轉速副感知器 ( 凸輪軸位置感知器 ) - 合理性", plate: "DEF-0000", org: "田尾果菜生產合作社", date: "2023-06-02", time: "12:45:18" },
    { code: "P0545", desc: "No.1 排氣溫度感知器 (ATC 出口 ) -超出範圍 ( 低於標準值", plate: "KER-9098", org: "田尾果菜生產合作社", date: "2023-06-02", time: "12:45:18" },
    { code: "P0217", desc: "進氣節氣門位置感知器 - 超出範圍( 高於範圍 )", plate: "ABC-1234", org: "田尾果菜生產合作社", date: "2023-06-02", time: "12:45:18" },
    { code: "P0217", desc: "進氣節氣門位置感知器 - 超出範圍( 高於範圍 )", plate: "DEF-0000", org: "田尾果菜生產合作社", date: "2023-06-02", time: "12:45:18" },
  ],
};
