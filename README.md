# FMS-1 DTC 儀表板

來源：Figma「戰情室」node `799:741`（1920×1080）
https://www.figma.com/design/nF9Wrf3TOOk9itTpkol55I/?node-id=799-741

## 執行
直接用瀏覽器開啟 `index.html`（純 HTML/CSS/JS，無需安裝套件）。畫面以 1920×1080 畫布等比縮放至視窗。

## 結構
- `index.html`　頁面結構
- `css/style.css`　樣式（色彩 token 在 `:root`）
- `js/data.js`　資料（KPI、長條圖、DTC 清單）— 之後改接 API 只需替換這裡
- `js/app.js`　渲染與縮放邏輯
- `assets/`　從 Figma 下載的 logo、格線、圖示
- `reference/figma-screenshot.png`　設計稿參考圖

## 備註
- 長條圖第 4 段顏色（#BEFFF7）圖例中沒有對應等級，資料中以 `d` 表示。
- 長條圖數值是依設計稿像素高度反推（0–1000 km），並非真實資料。
- 「查看更多」按鈕目前只有 console.log，尚未接導頁。
