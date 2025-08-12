# **電信新世界：開放、雲原生、AI 怎麼翻轉網路、走向未來？**

本專案是 **蔡秀吉 (Hsiu-Chi Tsai)** 於 **COSCUP 2025 開源人年會** 所發表的議程 **「電信新世界：開放、雲原生、AI 怎麼翻轉網路、走向未來？」** 的官方互動式簡報與數位展示內容。

傳統的簡報（PPT、Keynote）在呈現複雜的技術流程與動態概念時有所限制。為了提供聽眾更具沉浸感與互動性的體驗，本次演講特別採用了完全基於 Web 技術打造的簡報系統，並包含了多個可實際操作的數位展示 Demo。

## **✨ 專案亮點 (Features)**

這個專案不僅僅是一份投影片，更是一個整合性的數位體驗：

* **風格化視覺**：深度分析並整合 COSCUP 2025 的主視覺風格，從配色、字體到元件設計，都與大會氛圍完美契合。  
* **互動式開場**：採用您提供的 Banner 與 Logo，打造了一個具備動畫效果、可點擊進入的沉浸式開場畫面。  
* **全 Web 簡報**：所有投影片均由 HTML/CSS/JS 構成，可透過瀏覽器直接觀看，並支援鍵盤左右鍵導航。  
* **三大數位展示 (Interactive Demos)**：  
  1. **DRA 智慧工廠模擬器 (demo-dra.html)**：將抽象的 DRA（動態資源分配）概念，轉化為一個視覺化的「智慧工廠產線」動畫，讓使用者親手打造資源請求，並觀看 K8s 機械臂如何為其媒合最佳節點。  
  2. **GPU 基地台 ROI 計算機 (demo-roi.html)**：一個遊戲化的計算機介面，讓使用者透過拖動時間滑桿，直觀地理解 AI and RAN 如何將閒置的 GPU 算力轉化為實際營收，將「成本中心變利潤中心」的概念具象化。  
  3. **互動式閉環流程圖 (demo-closed-loop.html)**：將 Closed-Loop Automation 這個複雜的系統流程，變成一個可點擊的互動圖表。使用者點擊流程中的每一步，都能看到該階段的具體產出（如：擬真的 GitHub Pull Request diff 畫面），將抽象概念拆解為可追溯的 GitOps 步驟。

## **🚀 如何觀看與執行 (How to View)**

### **線上觀看 (建議)**

本專案已部署於 GitHub Pages，您可直接透過以下連結體驗最完整的內容：

[**https://thc1006.github.io/coscup-2025-telecom-new-world/**](https://www.google.com/search?q=https://thc1006.github.io/coscup-2025-telecom-new-world/)

### **本地端執行**

若您想在本地端執行與修改，請依循以下步驟：

1. **Clone 專案**：
```
git clone https://github.com/thc1006/coscup-2025-telecom-new-world.git
```
3. **進入專案目錄**：
```
cd coscup-2025-telecom-new-world
```
5. 啟動本地伺服器：  
   由於簡報的投影片是透過 fetch API 動態載入，直接用瀏覽器打開 `index.html` 檔案會遇到 CORS 安全性問題。您需要一個簡單的本地伺服器來運行。  
   如果您有安裝 Python 3，可使用以下指令：  
```
   python \-m http.server
```
   接著在瀏覽器中開啟 `http://localhost:8000` 即可。

## **🛠️ 技術棧 (Tech Stack)**

* **HTML5**  
* **CSS3** (搭配 **Tailwind CSS** 進行快速排版)  
* **JavaScript (ES6+)**

本專案刻意不使用任何前端框架，旨在以最純粹的 Web 技術呈現，確保輕量、快速且易於理解。

## **📂 專案結構**

```
/  
├── index.html                 \# 簡報主入口與啟動動畫  
├── demo-dra.html              \# DRA 智慧工廠模擬器  
├── demo-roi.html              \# GPU ROI 計算機  
├── demo-closed-loop.html      \# 互動式閉環流程圖  
├── assets/  
│   ├── css/style.css          \# 主要 CSS 樣式檔  
│   └── js/main.js             \# 核心 JavaScript 導航與載入邏輯  
└── slides/  
    ├── 00-cover.html          \# 所有獨立的投影片 HTML 檔案  
    ├── 01-....html  
    └── ...
```

## **👨‍💻 關於講者**

**蔡秀吉 (Hsiu-Chi Tsai)**

一位對雲原生技術、網路自動化與電信產業轉型充滿熱情的開發者與技術傳教士。

* **GitHub**: [@thc1006](https://github.com/thc1006)  
* **Blog**: [Hsiu-Chi's Blog](https://thc1006.blogspot.com/)
