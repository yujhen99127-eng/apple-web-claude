(function () {
  const D = window.FMS_DATA;
  const $ = (id) => document.getElementById(id);
  const fmt = (n) => n.toLocaleString("en-US");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // KPIs
  $("monthTotal").textContent = fmt(D.monthTotal);
  $("gradeATotal").textContent = fmt(D.gradeATotal);
  $("updatedAt").textContent = D.updatedAt;

  // Legend
  const colors = { a: "var(--accent-01)", b: "var(--accent-02)", c: "var(--primary-01)" };
  $("legend").innerHTML = D.legend
    .map((l) => `<li><i style="background:${colors[l.key]}"></i><span>${esc(l.label)}</span></li>`)
    .join("");

  // Axes & grid (y-axis labels top→bottom: 1000 … 0). Line offsets follow the Figma design.
  const ticks = [1000, 800, 600, 400, 200, 0];
  const lineY = [105, 158, 211, 264, 318, 381];
  $("yAxis").innerHTML = ticks.map((t) => `<p>${t}</p>`).join("");
  $("gridLines").innerHTML = lineY.map((y) => `<img src="assets/grid-line.svg" alt="" style="top:${y}px">`).join("");
  $("xAxis").innerHTML = Array.from({ length: D.chart.days }, (_, i) => `<p>${i + 1}</p>`).join("");

  // Bars
  const chartH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--chart-height")) || 276;
  const px = (v) => (v / D.chart.max) * chartH;
  const bars = $("bars");
  for (let day = 1; day <= D.chart.days; day++) {
    const cell = document.createElement("div");
    cell.className = "bar";
    cell.style.gridColumn = day;
    const seg = D.chart.bars[day];
    if (seg) {
      const total = seg.a + seg.b + seg.c + seg.d;
      cell.title = `${day} 日：${total} km（A ${seg.a} / B ${seg.b} / C ${seg.c}）`;
      cell.innerHTML = ["a", "b", "c", "d"]
        .filter((k) => seg[k] > 0)
        .map((k) => `<span class="${k}" style="height:${px(seg[k]).toFixed(2)}px"></span>`)
        .join("");
    }
    bars.appendChild(cell);
  }

  // Tooltip (pinned on the day given in data, as in the design)
  const tip = $("tooltip");
  const T = D.tooltip;
  tip.innerHTML = `<p>${esc(T.label)}</p><p>${T.count}次</p>`;
  // centre of day column on the 1290px track with 16px gaps
  const col = (1290 - 30 * 16) / 31;
  tip.style.left = 567 + (T.day - 1) * (col + 16) + col / 2 + "px";

  // DTC log
  $("logList").innerHTML = D.dtcLog
    .map(
      (r, i) => `
      <li class="item">
        <div class="item__no">${i + 1}</div>
        <div class="item__body">
          <div class="item__title"><span>${esc(r.code)}</span><span>-</span><span class="item__desc">${esc(r.desc)}</span></div>
          <div class="item__meta">
            <div class="item__plate"><b>${esc(r.plate)}</b><span>${esc(r.org)}</span></div>
            <div class="item__time"><span>${esc(r.date)}</span><span>${esc(r.time)}</span></div>
          </div>
        </div>
      </li>`
    )
    .join("");

  $("moreBtn").addEventListener("click", () => {
    // TODO: navigate to the full DTC list page
    console.log("查看更多 clicked");
  });

  // Scale the 1920×1080 canvas to the viewport
  const stage = $("stage");
  function fit() {
    const s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    stage.style.transform = `scale(${s})`;
    stage.style.left = (window.innerWidth - 1920 * s) / 2 + "px";
    stage.style.top = (window.innerHeight - 1080 * s) / 2 + "px";
  }
  window.addEventListener("resize", fit);
  fit();
})();
