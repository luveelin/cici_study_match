const fs = require('fs');
const katex = require('katex');

// Helper: render KaTeX formula
function katexRender(formula, displayMode) {
  try {
    return katex.renderToString(formula.trim(), { displayMode, throwOnError: false, strict: false, output: 'html' });
  } catch(e) {
    return `<code>${formula}</code>`;
  }
}

function renderMath(text) {
  text = text.replace(/\$\$([\s\S]*?)\$\$/g, (_, f) => katexRender(f, true));
  text = text.replace(/(?<!\$)\$(?!\$)([^$]+?)\$(?!\$)/g, (_, f) => katexRender(f, false));
  return text;
}

// Fix \neq KaTeX issue: replace the complex \neq HTML structure with a simple ≠
function fixNeq(html) {
  const neqBlockPattern = /<span class="mrel"><span class="mrel"><span class="mord vbox"><span class="thinbox"><span class="rlap"><span class="strut" style="height:[^"]*;"><\/span><span class="inner"><span class="mord"><span class="mrel">\ue020<\/span><\/span><\/span><span class="fix"><\/span><\/span><\/span><\/span><\/span><span class="mrel"><span class="mspace nobreak"><\/span><span class="mrel">=<\/span><\/span>/g;
  return html.replace(neqBlockPattern, '<span class="mrel">≠</span>');
}

const katexCss = fs.readFileSync('./node_modules/katex/dist/katex.min.css', 'utf-8');

// ============ CSS 共享样式（问题页） ============
const problemCss = `
:root {
  --bg: #fafbfc;
  --text: #2c3e50;
  --text-secondary: #4a5568;
  --accent: #2e75b6;
  --accent-light: #ebf5fb;
  --green: #27ae60;
  --green-light: #f0fff0;
  --orange: #e67e22;
  --orange-light: #fff3cd;
  --radius: 8px;
  --border: #e2e8f0;
}
* { margin:0; padding:0; box-sizing:border-box; }
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.8;
  font-size: 15px;
  padding: 28px 36px;
  max-width: 820px;
}
h2 {
  font-size: 1.45em;
  color: var(--accent);
  margin-bottom: 18px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--accent-light);
}
h3 {
  font-size: 1.15em;
  color: #2c3e50;
  margin: 22px 0 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid var(--accent-light);
}
h4 {
  font-size: 1.02em;
  color: #555;
  margin: 16px 0 6px;
}
p { margin-bottom: 9px; color: var(--text-secondary); }
blockquote {
  border-left: 3px solid #e2e8f0;
  padding: 5px 14px;
  margin: 10px 0;
  color: #718096;
  font-style: italic;
}
.def-red {
  background: #fde8e8;
  border-left: 4px solid #e74c3c;
  padding: 10px 16px;
  margin: 12px 0;
  border-radius: 6px;
  color: #2c3e50;
  font-style: normal;
  font-size: 1.02em;
}
.prob-statement {
  background: linear-gradient(135deg, #f8fafc, #eef2f7);
  border-radius: var(--radius);
  padding: 18px 22px;
  margin-bottom: 18px;
  border-left: 4px solid var(--accent);
}
.info-box {
  background: var(--accent-light);
  border-radius: var(--radius);
  padding: 12px 16px;
  margin: 10px 0;
  font-size: 0.94em;
}
.info-box .box-label { font-weight: 700; color: var(--accent); margin-right: 4px; }
.green-box {
  background: var(--green-light);
  border-radius: var(--radius);
  padding: 12px 16px;
  margin: 10px 0;
}
.green-box .box-label { font-weight: 700; color: var(--green); margin-right: 4px; }
.warn-box {
  background: var(--orange-light);
  border-radius: var(--radius);
  padding: 12px 16px;
  margin: 10px 0;
  font-size: 0.94em;
}
.warn-box .box-label { font-weight: 700; color: var(--orange); margin-right: 4px; }
.answer-box {
  background: var(--accent-light);
  border-left: 4px solid var(--accent);
  padding: 14px 18px;
  border-radius: 0 var(--radius) var(--radius) 0;
  margin: 16px 0;
}
.answer-label { font-weight: 700; color: var(--accent); margin-right: 6px; }
.answer-value { font-weight: 700; font-size: 1.08em; color: var(--accent); }
.formula-block {
  text-align: center;
  font-size: 1.12em;
  font-weight: 700;
  color: var(--accent);
  padding: 10px 0;
  margin: 10px 0;
  background: #f0f6fc;
  border-radius: var(--radius);
}
.practice-box {
  background: #fefdf5;
  border: 1px solid #f0e8c0;
  border-radius: var(--radius);
  padding: 14px 18px;
  margin: 10px 0;
}
.hint { color: #999; font-style: italic; font-size: 0.9em; }
.tag {
  display: inline-block;
  background: var(--accent-light);
  color: var(--accent);
  padding: 2px 9px;
  border-radius: 12px;
  font-size: 0.8em;
  font-weight: 600;
  margin-right: 4px;
}
table.kb-table {
  width: 100%;
  border-collapse: collapse;
  margin: 14px 0;
  font-size: 0.9em;
}
table.kb-table thead th {
  background: var(--accent);
  color: #fff;
  padding: 9px 12px;
  text-align: left;
  font-weight: 600;
}
table.kb-table thead th:first-child { border-radius: var(--radius) 0 0 0; }
table.kb-table thead th:last-child { border-radius: 0 var(--radius) 0 0; }
table.kb-table tbody td {
  padding: 8px 12px;
  border-bottom: 1px solid var(--border);
  color: var(--text-secondary);
}
table.kb-table tbody tr:nth-child(even) td { background: #f7fafc; }

/* 知识点总结：可折叠（默认收起） */
details.kb-details {
  border: 1px solid var(--border, #e2e8f0);
  border-radius: var(--radius, 12px);
  background: #f8fafc;
  padding: 0.35rem 1rem;
  margin: 0 0 1.2rem;
  transition: background 0.2s ease;
}
details.kb-details[open] { background: #ffffff; }
details.kb-details > summary {
  cursor: pointer;
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--accent, #2c7a7b);
  list-style: none;
  padding: 0.35rem 0;
  user-select: none;
  outline: none;
}
details.kb-details > summary::-webkit-details-marker { display: none; }
details.kb-details > summary::before {
  content: "\u25B8";   /* ▶ 收起态 */
  display: inline-block;
  margin-right: 0.5rem;
  transition: transform 0.2s ease;
}
details.kb-details[open] > summary::before {
  content: "\u25BE";   /* ▼ 展开态 */
}
details.kb-details > table.kb-table { margin-top: 8px; }

.step-list {
  list-style: none;
  padding: 0;
  margin: 6px 0;
}
.step-list li {
  padding: 4px 0;
  padding-left: 20px;
  position: relative;
  color: var(--text-secondary);
}
.step-list li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 700;
}
.katex { font-size: 1.05em !important; }
.formula-block .katex { font-size: 1.08em !important; color: var(--accent); }
.original-image {
  display: block;
  max-width: 100%;
  margin: 0 auto 18px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}
.original-image-caption {
  text-align: center;
  color: #999;
  font-size: 0.82em;
  font-style: italic;
  margin-top: -8px;
  margin-bottom: 18px;
  cursor: pointer;
  transition: color 0.2s;
  user-select: none;
}
.original-image-caption:hover { color: var(--accent); }

/* 悬浮图片遮罩 */
.img-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.23);
  z-index: 9999;
  display: none;
  align-items: center;
  justify-content: center;
}
.img-overlay.show { display: flex; }
.img-overlay-box {
  position: relative;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.35);
  padding: 10px;
  cursor: grab;
  user-select: none;
  display: inline-block;
  min-width: 100px;
  min-height: 80px;
}
.img-overlay-box:active { cursor: grabbing; }
.img-overlay-box img {
  display: block;
  max-width: 80vw;
  max-height: 75vh;
  border-radius: 6px;
  pointer-events: none;
}
.img-resize-handle {
  position: absolute;
  top: auto;
  bottom: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  cursor: nesw-resize;
  z-index: 20;
}
.img-resize-handle::after {
  content: '';
  position: absolute;
  bottom: 3px;
  left: 3px;
  width: 10px;
  height: 10px;
  border-bottom: 2px solid #aaa;
  border-left: 2px solid #aaa;
  border-radius: 0 0 0 3px;
}
.img-overlay-close {
  position: absolute;
  top: -14px;
  right: -14px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e74c3c;
  color: #fff;
  border: 2px solid #fff;
  font-size: 1em;
  line-height: 28px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  transition: transform 0.15s;
  z-index: 10;
}
.img-overlay-close:hover { transform: scale(1.15); background: #c0392b; }
@media (max-width: 600px) { body { padding: 16px 12px; } .img-overlay { align-items: flex-start; padding-top: 18px; } }
`;

// ============ 题目数据 ============
const problems = [
  {
    id: "p3",
    file: "p3.html",
    title: "p3 网格中的角度求和",
    type: "填空",
    topics: ["网格几何", "勾股定理", "全等三角形", "等腰直角三角形", "互余"],
    difficulty: 3,
    category: "几何综合",
    image: "images/p3.png",
    content: `
<div class="prob-statement">
  <p>如图，在 $4 \\times 4$ 的正方形网格中，$\\angle 1 + \\angle 2 = $ ______。</p>
  <p><img src="images/p3.png" alt="第3题图示" style="max-width: 240px; border: 1px solid #e2e8f0; border-radius: 6px; margin-top: 8px;"></p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>网格几何</td><td>格点三角形的边长可用勾股定理计算</td></tr>
    <tr><td>勾股定理</td><td>直角三角形：$a^2 + b^2 = c^2$</td></tr>
    <tr><td>勾股定理逆定理</td><td>若 $a^2 + b^2 = c^2$，则该三角形是直角三角形</td></tr>
    <tr><td>等腰直角三角形</td><td>两腰相等的直角三角形，底角为 $45^\\circ$</td></tr>
    <tr><td>全等三角形</td><td>直角边对应相等的两个直角三角形全等（SAS）</td></tr>
    <tr><td>互余关系</td><td>直角三角形两锐角互余，和为 $90^\\circ$</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：在网格中标注关键点</h4>
<p>设每个小正方形边长为 $1$。原题中 <strong>$\\angle 1$ 的顶点在格点 $(1,0)$</strong>、<strong>$\\angle 2$ 的顶点在格点 $(1,1)$</strong>（见图中实色三角形与弧标）。为便于计算，把这两个角平移到左下角公共顶点 $O$，并取辅助格点：</p>
<div class="formula-block">$A(3,1),\\quad C(1,2)$</div>
<p>
  <img src="images/p3_grid.svg" alt="标注点 A、C 的 4×4 网格示意图" onclick="openImgOverlay('p3grid')" style="max-width: 340px; border: 1px solid #e2e8f0; border-radius: 6px; margin-top: 8px; cursor: zoom-in;">
</p>
<p class="original-image-caption" onclick="openImgOverlay('p3grid')">🔍 点击查看原图</p>
<div class="img-overlay" id="overlay-p3grid">
  <div class="img-overlay-box" id="overlayBox-p3grid" onmousedown="startDrag(event,'p3grid')">
    <span class="img-overlay-close" onclick="closeImgOverlay('p3grid')">✕</span>
    <img src="images/p3_grid.svg" alt="网格示意图原图">
    <span class="img-resize-handle" onmousedown="startResize(event,'p3grid')"></span>
  </div>
</div>
<p class="hint">💡 图中：实色三角形为原题 $\\angle 1$、$\\angle 2$ 所在位置（顶点分别为 $(1,0)$、$(1,1)$）；虚线为把它们平移到 $O$ 后的辅助构造——$OA$（蓝）与水平方向夹角为 $\\angle 1$，$OC$（橙）与竖直方向夹角为 $\\angle 2$，$AC$（红）与 $OA$、$OC$ 构成等腰直角三角形，$\\angle AOC = 45^\\circ$。</p>
<p>连接 $OA$、$OC$、$AC$，并过 $O$ 作竖直参考线 $Oy$。</p>
<p>其中平移后 $\\angle 1 = \\angle AOx$（$OA$ 与水平方向 $Ox$ 的夹角），$\\angle 2 = \\angle COy$（$OC$ 与竖直方向 $Oy$ 的夹角）。</p>

<h4>第二步：证明 $\\angle COx = 90^\\circ - \\angle 2$</h4>
<p>把原题的 $\\angle 2$ 三角形平移到 $O$：顶点为 $O(0,0)$，直角顶点为 $(0,2)$，另一顶点为 $C(1,2)$。平移不改变角度，因此 $\\angle 2$ 等于斜边 $OC$ 与竖直边 $O(0,2)$ 的夹角。</p>
<p>再观察直角三角形 $\\triangle O(1,0)C$：水平直角边 $O(1,0)$ 长为 $1$，竖直直角边 $O(0,2)$ 长为 $2$，斜边也是 $OC$，而 $\\angle COx$ 是斜边 $OC$ 与水平边 $O(1,0)$ 的夹角。</p>
<p>这两个直角三角形全等（直角边 $1$ 和 $2$ 对应相等，<strong>SAS</strong>），在同一个三角形中两锐角互余，于是：</p>
<div class="formula-block">$\\angle 2 + \\angle COx = 90^\\circ$</div>
<p>即：</p>
<div class="formula-block">$\\angle COx = 90^\\circ - \\angle 2$</div>

<h4>第三步：构造等腰直角三角形 $\\triangle OAC$</h4>
<p>由勾股定理：</p>
<p>$OA = \\sqrt{3^2+1^2} = \\sqrt{10}$</p>
<p>$OC = \\sqrt{1^2+2^2} = \\sqrt{5}$</p>
<p>$AC = \\sqrt{(3-1)^2+(1-2)^2} = \\sqrt{2^2+1^2} = \\sqrt{5}$</p>

<p>所以 $OC = AC = \\sqrt{5}$（两腰相等）。</p>
<p>又因为 $OC^2 + AC^2 = 5 + 5 = 10 = OA^2$，根据<strong>勾股定理逆定理</strong>，$\\triangle OAC$ 是直角三角形，且 $\\angle OCA = 90^\\circ$。</p>
<p>因此 $\\triangle OAC$ 是<strong>等腰直角三角形</strong>，于是：</p>
<div class="formula-block">$\\angle AOC = 45^\\circ$</div>

<h4>第四步：利用角度和差关系求结论</h4>
<p>从图中可以看出：</p>
<div class="formula-block">$\\angle AOC = \\angle COx - \\angle AOx = (90^\\circ - \\angle 2) - \\angle 1$</div>
<p>而 $\\angle AOC = 45^\\circ$，所以：</p>
<div class="formula-block">$(90^\\circ - \\angle 2) - \\angle 1 = 45^\\circ$</div>
<p>整理得：</p>
<div class="formula-block">$\\angle 1 + \\angle 2 = 45^\\circ$</div>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$\\angle 1 + \\angle 2 = 45^\\circ$</span>
</div>

<h3>🎯 举一反三</h3>
<div class="practice-box">
  <p><strong>变式题：</strong>在边长为 $1$ 的正方形网格中，$\\angle AOB$ 的两边分别经过格点 $A(1,2)$、$B(2,1)$，求 $\\angle AOB$ 的度数。</p>
  <p class="hint">💡 提示：构造 $OA$、$OB$、$AB$ 三边，用勾股定理逆定理证明 $\\triangle AOB$ 是等腰直角三角形。答案：$45^\\circ$。</p>
</div>

<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
  <p><strong>题1（网格角度·江西中考常见）：</strong>在正方形网格中，某锐角 $\\alpha$ 所在直角三角形的直角边为 $1$ 和 $2$，某锐角 $\\beta$ 所在直角三角形的直角边为 $1$ 和 $3$，且两角均为斜边与水平边所夹的锐角，则 $\\alpha + \\beta = $ ______。</p>
  <p class="hint">💡 答：$45^\\circ$。这类网格角度题常通过构造等腰直角三角形求解。</p>
  <p><strong>题2：</strong>在 $4 \\times 4$ 网格中，$\\angle AOB$ 的顶点 $O$ 在格点上，$OA$、$OB$ 分别经过格点 $(3,1)$、$(1,2)$，求证：$\\angle AOB = 45^\\circ$。</p>
  <p class="hint">💡 提示：$OA = \\sqrt{10}$，$OB = \\sqrt{5}$，$AB = \\sqrt{5}$，$\\triangle OAB$ 是等腰直角三角形。</p>
</div>
`
  },
  {
    id: "p9",
    file: "p9.html",
    title: "p9 最简二次根式与同类二次根式",
    type: "计算填空",
    topics: ["二次根式", "最简二次根式", "同类二次根式"],
    difficulty: 3,
    category: "二次根式",
    image: "images/p9.png",
    content: `
<div class="prob-statement">
  <p>已知 $A = 5\\sqrt{2x+1}$，$B = 3\\sqrt{x+3}$，$C = \\sqrt{10x+3y}$，其中 $A$、$B$ 为最简二次根式，且 $A + B = C$，求 $\\sqrt{2y-x^2}$ 的值。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>最简二次根式</td><td>被开方数不含分母，不含能开得尽方的因数或式</td></tr>
    <tr><td>同类二次根式</td><td>根指数相同且被开方数相同的二次根式才能合并</td></tr>
    <tr><td>二次根式加减</td><td>先化为同类二次根式，再合并系数</td></tr>
    <tr><td>等式两边平方</td><td>二次根式等式可通过两边平方化为整式方程</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：分析"最简二次根式"条件</h4>
<blockquote>最简二次根式：被开方数不含分母，且不含能开得尽方的因数。</blockquote>
<p>$A = 5\\sqrt{2x+1}$，$B = 3\\sqrt{x+3}$ 要为最简二次根式，根号内不能再开方。要让 $A$ 和 $B$ 能相加等于 $C$（也是一个二次根式），$A$ 和 $B$ 必须是<strong>同类二次根式</strong>（根号内相同）。</p>

<h4>第二步：令 $A$、$B$ 化为同类二次根式（详细推导）</h4>
<p>题目关键条件：$A + B = C$，即 $5\\sqrt{2x+1} + 3\\sqrt{x+3} = \\sqrt{10x+3y}$。</p>

<div class="info-box">
  <span class="box-label">🔍 核心推理：</span>左边的两个二次根式相加后，右边只得到一个二次根式。
</div>

<div class="info-box">
  <span class="box-label">📌 二次根式加减的铁律：</span>只有<strong>同类二次根式</strong>才能合并！就像 5 个苹果 + 3 个苹果 = 8 个苹果，但 5 个苹果 + 3 个橘子不能合并成一个东西。
</div>

<div class="info-box">
  <span class="box-label">🧠 反证理解：</span>如果 $2x+1 \\neq x+3$，那么 $\\sqrt{2x+1}$ 和 $\\sqrt{x+3}$ 是<strong>不同类</strong>的二次根式，它们相加后仍是两个根式的和，无法合并成一个单独的根式。但题目说 $A+B=C$，而 $C = \\sqrt{10x+3y}$ 只有一个根号！所以左边的两个根式<strong>必须能合并成一个</strong>。
</div>

<p>因此，$A$ 和 $B$ 必须是同类二次根式，即根号内的式子必须相同：</p>
<div class="formula-block">$2x + 1 = x + 3 \\quad\\rightarrow\\quad x = 2$</div>

<div class="green-box">
  <span class="box-label">✅ 代入验证：</span>当 $x=2$ 时，$A = 5\\sqrt{5}$，$B = 3\\sqrt{5}$ → $A+B = 8\\sqrt{5} = \\sqrt{320}$，确实合并成了一个根式 ✓
</div>
<p>同时验证"最简"条件：$2x+1=5$，$x+3=5$，都不是完全平方数，满足最简二次根式要求 ✓</p>

<h4>第三步：求 $y$</h4>
<p>$5\\sqrt{5} + 3\\sqrt{5} = \\sqrt{10x + 3y}$</p>
<p>$8\\sqrt{5} = \\sqrt{10 \\times 2 + 3y} = \\sqrt{20 + 3y}$</p>
<p>两边平方：$64 \\times 5 = 20 + 3y \\rightarrow 320 = 20 + 3y \\rightarrow 3y = 300 \\rightarrow y = 100$</p>

<h4>第四步：求最终结果</h4>
<p>$\\sqrt{2y - x^2} = \\sqrt{2 \\times 100 - 2^2} = \\sqrt{200 - 4} = \\sqrt{196} = 14$</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$\\sqrt{2y-x^2} = 14$</span>
</div>



<h3>🎯 举一反三</h3>
<div class="practice-box">
  <p><strong>变式题：</strong>已知 $A = 2\\sqrt{x+1}$，$B = \\sqrt{4x-2}$，$C = \\sqrt{6x+2y}$，且 $A$、$B$ 为最简二次根式，$A + B = C$，求 $\\sqrt{3y - x^2}$ 的值。</p>
  <p class="hint">💡 提示：令 $x+1 = \\frac{4x-2}{4} \\to 4x+4 = 4x-2 \\to$ 无解。改为令 $2\\sqrt{x+1} + \\sqrt{4x-2} = \\sqrt{6x+2y}$，两边平方求解。</p>
</div>

<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
<p><strong>题1（2025·江西·填空）：</strong>化简 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1328em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;">8</span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.2em;vertical-align:-0.2em;"></span><span class="mord underline"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0em;"><span style="top:-2.84em;"><span class="pstrut" style="height:3em;"></span><span class="underline-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mspace" style="margin-right:1em;"></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2em;"><span></span></span></span></span></span></span></span></span>。</p>
  <p class="hint">💡 答：<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1328em;"></span><span class="mord">2</span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;">2</span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span></span></span></span>。（化为最简二次根式）</p>
  <p><strong>题2（2023·江西·选择）：</strong>若 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1744em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8656em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">4</span></span></span><span style="top:-2.8256em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1744em;"><span></span></span></span></span></span></span></span></span> 有意义，则 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span> 的值可以是（　）A. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">1</span></span></span></span>　B. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>　C. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>　D. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">6</span></span></span></span></p>
  <p class="hint">💡 答：D。由 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7804em;vertical-align:-0.136em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⇒</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7719em;vertical-align:-0.136em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span></span></span></span>，仅 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">6</span></span></span></span> 满足。</p>
  <p><strong>题3（2023·江西·选择）：</strong>计算 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mopen">(</span><span class="mord">−</span><span class="mord">2</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.28em" viewBox="0 0 400000 1296" preserveAspectRatio="xMinYMin slice"><path d="M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span></span></span></span> 的结果为（　）A. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">2</span></span></span></span>　B. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>　C. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">4</span></span></span></span>　D. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span></span></span></span></p>
  <p class="hint">💡 答：B。<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mopen">(</span><span class="mord">−</span><span class="mord">2</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.28em" viewBox="0 0 400000 1296" preserveAspectRatio="xMinYMin slice"><path d="M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1328em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;">4</span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>，注意 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.0849em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9551em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-2.9151em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.0849em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord mathnormal">a</span><span class="mord">∣</span></span></span></span>。</p>
  <p class="src">📌 来源：<a href="https://www.xbjy.com/xhtml/202501/5421.html" target="_blank">江西省2023年中考数学真题</a>、<a href="https://zy.21cnjy.com/23238550" target="_blank">江西省2025年中考数学真题</a></p>
</div>
`
  },
  {
    id: "p4",
    file: "p4.html",
    title: "p4 同类二次根式的判定",
    type: "选择填空",
    topics: ["二次根式", "同类二次根式", "平方根"],
    difficulty: 2,
    category: "二次根式",
    image: "images/p4.png",
    content: `
<div class="prob-statement">
  <p>若最简根式 $\\sqrt[a+2b]{2a+b+3}$ 与 $\\sqrt{a-2b}$ 是同类二次根式，则 $a+b$ 的平方根是 ______。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>同类二次根式</td><td>两个条件：根指数相同、被开方数相同，缺一不可</td></tr>
    <tr><td>根指数识别</td><td>二次根号默认根指数为2，高次根式需看根号左上角</td></tr>
    <tr><td>平方根 vs 算术平方根</td><td>平方根有两个值 $\\pm\\sqrt{a}$，算术平方根只有一个正值</td></tr>
    <tr><td>方程组解法</td><td>代入消元法解二元一次方程组</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>
<p><strong>同类二次根式</strong>需满足两个条件：<span class="tag">根指数相同</span> <span class="tag">被开方数相同</span></p>
<p>根式 $\\sqrt[a+2b]{2a+b+3}$ 的根指数是 $a+2b$，被开方数是 $2a+b+3$。</p>
<p>第二个根式 $\\sqrt{a-2b}$ 根指数 $= 2$（默认平方根），被开方数 $= a-2b$。</p>

<p><strong>列方程组：</strong></p>
<p> ① $a + 2b = 2$（根指数相等）</p>
<p> ② $2a + b + 3 = a - 2b$（被开方数相等）</p>
<p>由②得：$a + 3b + 3 = 0 \\rightarrow a = -3b - 3$</p>
<p>代入①：$-3b - 3 + 2b = 2 \\rightarrow -b = 5 \\rightarrow b = -5$</p>
<p>则 $a = -3 \\times (-5) - 3 = 12$</p>
<p>验证 $a - 2b = 12 - (-10) = 22$（正数，被开方数合法 ✓）</p>
<p>$a + b = 12 + (-5) = 7$</p>

<div class="warn-box">
  <span class="box-label">⚠️ 注意：</span>$7$ 的平方根为 <strong>$\\pm\\sqrt{7}$</strong>。平方根有两个值，算术平方根才是 $\\sqrt{7}$！
</div>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$a+b$ 的平方根 $= \\pm\\sqrt{7}$</span>
</div>



<h3>🎯 举一反三</h3>
<div class="practice-box">
  <p><strong>变式题：</strong>若最简根式 $\\sqrt[3a]{4a+5b}$ 与 $\\sqrt[b+1]{2a-b+6}$ 是同类二次根式，求 $a^2+b^2$ 的值。</p>
  <p class="hint">💡 提示：$3a = b+1$（根指数相等），$4a+5b = 2a-b+6$（被开方数相等），解得 $a=2, b=5$。答案为 $29$。</p>
</div>

<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
<p><strong>题1（2023·江西·选择）：</strong>若 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1744em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8656em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">4</span></span></span><span style="top:-2.8256em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1744em;"><span></span></span></span></span></span></span></span></span> 有意义，则 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span> 的值可以是（　）A. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">1</span></span></span></span>　B. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>　C. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>　D. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">6</span></span></span></span></p>
  <p class="hint">💡 答：D。由 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7804em;vertical-align:-0.136em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⇒</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7719em;vertical-align:-0.136em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span></span></span></span>。</p>
  <p><strong>题2（2023·江西·选择）：</strong>计算 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mopen">(</span><span class="mord">−</span><span class="mord">2</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.28em" viewBox="0 0 400000 1296" preserveAspectRatio="xMinYMin slice"><path d="M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span></span></span></span> 的结果为（　）A. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">2</span></span></span></span>　B. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>　C. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">4</span></span></span></span>　D. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span></span></span></span></p>
  <p class="hint">💡 答：B。<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mopen">(</span><span class="mord">−</span><span class="mord">2</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.28em" viewBox="0 0 400000 1296" preserveAspectRatio="xMinYMin slice"><path d="M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>（<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.0849em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9551em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord"><span class="mord mathnormal">a</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-2.9151em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.0849em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord mathnormal">a</span><span class="mord">∣</span></span></span></span>）。</p>
  <p><strong>题3（2024·江西·填空）：</strong>二次根式混合运算，计算结果为 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>（考查二次根式乘除与化简）。</p>
  <p class="hint">💡 答：<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>。</p>
  <p class="src">📌 来源：<a href="https://www.xbjy.com/xhtml/202501/5421.html" target="_blank">江西省2023年中考数学真题</a>、<a href="https://zy.21cnjy.com/20635729" target="_blank">江西省2024年中考数学真题</a></p>
</div>
`
  },
  {
    id: "p6",
    file: "p6.html",
    title: "p6 整体代入法",
    type: "阅读理解+计算",
    topics: ["二次根式", "分母有理化", "整体代入法"],
    difficulty: 3,
    category: "二次根式",
    image: "images/p6.png",
    content: `
<div class="prob-statement">
  <h4>📖 阅读理解部分</h4>
  <p><strong>【原题示范】</strong>已知 $x = \\sqrt{5} + 2$，求 $x^2 - 4x - 7$ 的值。</p>
  <p><strong>解法：</strong>由 $x = \\sqrt{5} + 2$，得 $x - 2 = \\sqrt{5}$，则 $(x-2)^2 = 5$，即 $x^2 - 4x + 4 = 5$，</p>
  <p>$\\therefore\\ x^2 - 4x = 1$，整体代入得：$x^2 - 4x - 7 = 1 - 7 = -6$。</p>

  <h4>📝 应用题目</h4>
  <p>已知 $x = \\dfrac{1}{\\sqrt{10} - 3}$，求代数式 $-2x^2 + 12x - 8$ 的值。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>分母有理化</td><td>分子分母同乘分母的共轭因式，利用 $(a-b)(a+b) = a^2-b^2$</td></tr>
    <tr><td>整体代入法</td><td>不直接求值，而是将已知条件转化为"整体"后再代入</td></tr>
    <tr><td>配方法变形</td><td>通过移项、平方、配方构造目标式中的整体</td></tr>
    <tr><td>平方差公式</td><td>$(a+b)(a-b) = a^2-b^2$，分母有理化的核心工具</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：分母有理化</h4>
<div class="formula-block">$x = \\dfrac{1}{\\sqrt{10} - 3} = \\dfrac{\\sqrt{10}+3}{(\\sqrt{10}-3)(\\sqrt{10}+3)} = \\dfrac{\\sqrt{10}+3}{10-9} = \\sqrt{10} + 3$</div>

<h4>第二步：构造"整体"</h4>
<p>$x = \\sqrt{10} + 3 \\rightarrow x - 3 = \\sqrt{10} \\rightarrow (x-3)^2 = 10$</p>
<p>$\\rightarrow x^2 - 6x + 9 = 10 \\rightarrow x^2 - 6x = 1$</p>

<h4>第三步：将目标式化为含 $x^2-6x$ 的形式</h4>
<div class="formula-block">$-2x^2 + 12x - 8 = -2(x^2 - 6x) - 8 = -2 \\times 1 - 8 = -2 - 8 = -10$</div>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$-2x^2 + 12x - 8 = -10$</span>
</div>



<h3>🎯 举一反三</h3>
<div class="practice-box">
  <p><strong>变式题 1：</strong>已知 $x = \\dfrac{1}{\\sqrt{7}+3}$，求 $x^2+6x+5$ 的值。</p>
  <p class="hint">💡 提示：分母有理化得 $x = \\frac{3-\\sqrt{7}}{2}$，构造 $(2x-3)^2 = 7$，化为 $4x^2-12x+9=7$，即 $x^2-3x = -\\frac{1}{2}$。</p>
  <p><strong>变式题 2：</strong>已知 $x = \\sqrt{3}-1$，求 $x^2+2x+3$ 的值。</p>
  <p class="hint">💡 提示：$x+1 = \\sqrt{3}$，平方得 $x^2+2x+1 = 3$，即 $x^2+2x = 2$，代入得 $2+3 = 5$。</p>
</div>

<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
<p><strong>题1（2023·江西·解答）：</strong>化简某分式，甲、乙两同学给出不同解法。请填出解法依据：①等式的基本性质 ②分式的基本性质 ③乘法分配律 ④乘法交换律；并选择一种写法写出完整解答过程。</p>
  <p class="hint">💡 答：整体代入/先通分都可行，核心是利用"分式的基本性质"与"乘法分配律"化简，避免逐项硬算。</p>
  <p><strong>题2（2025·江西·填空）：</strong>化简 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1328em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;">8</span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.2em;vertical-align:-0.2em;"></span><span class="mord underline"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0em;"><span style="top:-2.84em;"><span class="pstrut" style="height:3em;"></span><span class="underline-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mspace" style="margin-right:1em;"></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2em;"><span></span></span></span></span></span></span></span></span>。</p>
  <p class="hint">💡 答：<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1328em;"></span><span class="mord">2</span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;">2</span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span></span></span></span>。</p>
  <p><strong>题3（2023·江西·选择）：</strong>计算 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mopen">(</span><span class="mord">−</span><span class="mord">2</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.28em" viewBox="0 0 400000 1296" preserveAspectRatio="xMinYMin slice"><path d="M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span></span></span></span>（　）A. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">2</span></span></span></span>　B. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>　C. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">4</span></span></span></span>　D. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span></span></span></span></p>
  <p class="hint">💡 答：B。</p>
  <p class="src">📌 来源：<a href="https://www.xbjy.com/xhtml/202501/5421.html" target="_blank">江西省2023年中考数学真题</a>、<a href="https://zy.21cnjy.com/23238550" target="_blank">江西省2025年中考数学真题</a></p>
</div>
`
  },
  {
    id: "p5",
    file: "p5.html",
    title: "p5 整体代换与链式平方",
    type: "计算填空",
    topics: ["二次根式", "完全平方公式", "整体代换"],
    difficulty: 2,
    category: "二次根式",
    image: "images/p5.png",
    content: `
<div class="prob-statement">
  <p>若 $\\sqrt{x} - \\dfrac{1}{\\sqrt{x}} = 2$，则 $\\sqrt{x^2 + \\dfrac{1}{x^2} + 14}$ 的值为 ______。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>链式平方技巧</td><td>从 $\\sqrt{x}-\\frac{1}{\\sqrt{x}} \\to x+\\frac{1}{x} \\to x^2+\\frac{1}{x^2}$，逐级递推</td></tr>
    <tr><td>完全平方公式</td><td>$(a-b)^2 = a^2-2ab+b^2$，$a,b$ 为根式时乘积为常数</td></tr>
    <tr><td>整体代换思想</td><td>不求单个 $x$ 的值，而是求 $x+\\frac{1}{x}$ 这类"组合"的值</td></tr>
    <tr><td>二次根式化简</td><td>$\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$，提取完全平方因子</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：分析条件</h4>
<p>由 $\\sqrt{x} - \\dfrac{1}{\\sqrt{x}} = 2$，需要 $x > 0$（使 $\\sqrt{x}$ 有意义且分母不为零）。</p>

<h4>第二步：两边平方</h4>
<p>$\\left(\\sqrt{x} - \\dfrac{1}{\\sqrt{x}}\\right)^2 = 4$</p>
<p>$x - 2 + \\dfrac{1}{x} = 4$</p>
<div class="formula-block">$x + \\dfrac{1}{x} = 6$</div>

<h4>第三步：再平方求 $x^2 + \\dfrac{1}{x^2}$</h4>
<p>$\\left(x + \\dfrac{1}{x}\\right)^2 = 36$</p>
<p>$x^2 + 2 + \\dfrac{1}{x^2} = 36$</p>
<div class="formula-block">$x^2 + \\dfrac{1}{x^2} = 34$</div>

<h4>第四步：求最终结果</h4>
<p>$\\sqrt{x^2 + \\dfrac{1}{x^2} + 14} = \\sqrt{34 + 14} = \\sqrt{48} = 4\\sqrt{3}$</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$\\sqrt{x^2 + \\frac{1}{x^2} + 14} = 4\\sqrt{3}$</span>
</div>



<h3>🎯 举一反三</h3>
<div class="practice-box">
  <p><strong>变式题：</strong>已知 $\\sqrt{x} + \\dfrac{1}{\\sqrt{x}} = 3$，求 $\\sqrt{x^2 + \\dfrac{1}{x^2} - 7}$ 的值。</p>
  <p class="hint">💡 提示：$x + \\frac{1}{x} = 9-2 = 7$，$x^2+\\frac{1}{x^2} = 49-2 = 47$，答案为 $\\sqrt{47-7} = \\sqrt{40} = 2\\sqrt{10}$。</p>
</div>

<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
<p><strong>题1（2025·江西·填空）：</strong>化简 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1328em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;">8</span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.2em;vertical-align:-0.2em;"></span><span class="mord underline"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0em;"><span style="top:-2.84em;"><span class="pstrut" style="height:3em;"></span><span class="underline-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mspace" style="margin-right:1em;"></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2em;"><span></span></span></span></span></span></span></span></span>。</p>
  <p class="hint">💡 答：<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1328em;"></span><span class="mord">2</span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;">2</span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span></span></span></span>。根式化简本质是"提公因数"式的整体处理。</p>
  <p><strong>题2（2023·江西·选择）：</strong>计算 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mopen">(</span><span class="mord">−</span><span class="mord">2</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.28em" viewBox="0 0 400000 1296" preserveAspectRatio="xMinYMin slice"><path d="M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span></span></span></span>（　）A. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">2</span></span></span></span>　B. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>　C. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">4</span></span></span></span>　D. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span></span></span></span></p>
  <p class="hint">💡 答：B。<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mopen">(</span><span class="mord">−</span><span class="mord">2</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.28em" viewBox="0 0 400000 1296" preserveAspectRatio="xMinYMin slice"><path d="M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord"><span class="mord">−</span><span class="mord">2</span></span><span class="mord">∣</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>，与 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1572em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;">2</span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span> 不可混淆。</p>
  <p><strong>题3（2023·江西·选择）：</strong>若 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1744em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8656em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">4</span></span></span><span style="top:-2.8256em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1744em;"><span></span></span></span></span></span></span></span></span> 有意义，则 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span> 的值可以是（　）A. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">1</span></span></span></span>　B. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>　C. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>　D. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">6</span></span></span></span></p>
  <p class="hint">💡 答：D。整体看被开方数 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7804em;vertical-align:-0.136em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>。</p>
  <p class="src">📌 来源：<a href="https://www.xbjy.com/xhtml/202501/5421.html" target="_blank">江西省2023年中考数学真题</a>、<a href="https://zy.21cnjy.com/23238550" target="_blank">江西省2025年中考数学真题</a></p>
</div>
`
  },
  {
    id: "p1",
    file: "p1.html",
    title: "p1 篱笆围菜园",
    type: "应用题",
    topics: ["最值问题", "均值不等式", "二次函数"],
    difficulty: 3,
    category: "最值问题",
    image: "images/app1_app2.png",
    content: `
<div class="prob-statement">
  <p>用篱笆围成一个面积为 $100\\text{ m}^2$ 的长方形菜园（一面靠墙，墙足够长）。当长方形的长和宽分别为多少时，所用篱笆最短？最短篱笆长多少？</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>均值不等式</td><td>$a+b \\geq 2\\sqrt{ab}$（$a,b > 0$），等号当 $a=b$ 时成立</td></tr>
    <tr><td>应用题建模</td><td>面积 = 长 × 宽；篱笆围三面（一面靠墙）</td></tr>
    <tr><td>最值问题步骤</td><td>设元 → 列函数 → 求最值 → 验证等号条件</td></tr>
    <tr><td>二次根式运算</td><td>$\\sqrt{200} = 10\\sqrt{2}$，$\\frac{20}{\\sqrt{2}} = 10\\sqrt{2}$</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：设变量</h4>
<p>设垂直于墙的边（宽）为 $x\\text{ m}$，则平行于墙的边（长）为 $\\dfrac{100}{x}\\text{ m}$。</p>
<p>由于长边靠墙（不需篱笆），篱笆只需围另外三面。</p>

<h4>第二步：列函数</h4>
<div class="formula-block">篱笆总长 $L = 2x + \\dfrac{100}{x}\\quad (x > 0)$</div>

<h4>第三步：用均值不等式求最值</h4>
<div class="info-box">
  <span class="box-label">📐 均值不等式：</span>$a + b \\geq 2\\sqrt{ab}$（$a, b > 0$），等号当 $a = b$ 时成立
</div>
<p>$L = 2x + \\dfrac{100}{x} \\geq 2\\sqrt{2x \\cdot \\dfrac{100}{x}} = 2\\sqrt{200} = 20\\sqrt{2}$</p>
<p>当且仅当 $2x = \\dfrac{100}{x}$，即 $x^2 = 50$，$x = 5\\sqrt{2}$ 时等号成立。</p>
<p>此时长 $= \\dfrac{100}{5\\sqrt{2}} = \\dfrac{20}{\\sqrt{2}} = 10\\sqrt{2}$。</p>

<h4>❓ 为什么用均值不等式就能求出最小值？</h4>
<div class="info-box">
  <span class="box-label">🔑 原理拆解（三步理解）：</span>
</div>
<p><strong>第一步：均值不等式给出一个「下界」</strong></p>
<p>均值不等式 $a + b \\geq 2\\sqrt{ab}$ 告诉我们：<strong>任意两个正数的和，至少不小于 $2\\sqrt{ab}$</strong>。</p>
<p>在我们的式子 $L = 2x + \\dfrac{100}{x}$ 中，令 $a = 2x$，$b = \\dfrac{100}{x}$，则：</p>
<div class="formula-block">$L = a + b \\geq 2\\sqrt{ab} = 2\\sqrt{2x \\cdot \\dfrac{100}{x}} = 20\\sqrt{2}$</div>
<p>这意味着：<strong>$L$ 永远不可能小于 $20\\sqrt{2}$</strong>。无论 $x$ 取什么正数，篱笆长度至少是 $20\\sqrt{2}$。这就是一个「<strong>下限</strong>」。就像你跑步，无论如何速度不会超过光速一样——这是一个不可逾越的边界。</p>

<p><strong>第二步：等号成立条件告诉我们「能否达到这个下界」</strong></p>
<p>均值不等式有一个关键细节：<strong>等号当 $a = b$ 时成立</strong>。</p>
<p>也就是说，只有当 $2x = \\dfrac{100}{x}$ 时，才会有 $L = 20\\sqrt{2}$（取等最小值），否则 $L$ 一定大于 $20\\sqrt{2}$。</p>
<p>这就像你参加考试：老师说"最低能得 60 分"——但如果想真正拿到 60 分，需要满足某个条件（比如做对某道题）。</p>

<p><strong>第三步：检查等号条件是否可实现</strong></p>
<p>我们需要验证：是否存在一个真实的 $x$ 值，使 $2x = \\dfrac{100}{x}$？</p>
<div class="formula-block">$2x = \\dfrac{100}{x} \\Rightarrow 2x^2 = 100 \\Rightarrow x^2 = 50 \\Rightarrow x = 5\\sqrt{2} \\ (x > 0)$</div>
<p>$x = 5\\sqrt{2} \\approx 7.07$ 是一个合法的正数（宽度），所以等号条件可以取到，$L$ 确实能等于 $20\\sqrt{2}$。</p>
<p>因此，<strong>$L$ 的最小值就是 $20\\sqrt{2}$</strong>，在 $x = 5\\sqrt{2}$ 时取到。</p>

<div class="info-box" style="background:var(--accent-light);">
  <span class="box-label">📝 一句话总结：</span>
  均值不等式先确定了一个「底线」，等号条件再告诉我们「底线能否达到」。两者俱全，最小值就确定了。
</div>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span>
  <span class="answer-value">宽 $= 5\\sqrt{2}\\text{ m}$，长 $= 10\\sqrt{2}\\text{ m}$</span><br>
  <span class="answer-value">最短篱笆长 $= 20\\sqrt{2}\\text{ m} \\approx 28.28\\text{ m}$</span>
</div>



<h3>🎯 举一反三</h3>
<div class="practice-box">
  <p><strong>变式题 1：</strong>用 $30\\text{ m}$ 篱笆围成一面靠墙的长方形菜园，问面积最大是多少？</p>
  <p class="hint">💡 提示：设宽为 $x$，则 $2x+L=30$，$S = x(30-2x) = -2x^2+30x$，顶点 $x = 7.5$ 时 $S_{\\max} = 112.5\\text{ m}^2$。</p>
  <p><strong>变式题 2：</strong>用篱笆围成面积为 $200\\text{ m}^2$ 的正方形菜园（一面靠墙），问至少需要多长篱笆？</p>
  <p class="hint">💡 提示：正方形边长 $= \\sqrt{200} = 10\\sqrt{2}$，篱笆 $= 3 \\times 10\\sqrt{2} = 30\\sqrt{2}\\text{ m}$。</p>
</div>

<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
<p><strong>题1（2024·江西·解答）：</strong>小球从斜坡 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">O</span></span></span></span> 点弹出，飞行路线为 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mord"><span class="mord mathnormal">x</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span><span class="mord mathnormal">x</span></span></span></span>，斜坡为 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal">x</span></span></span></span>。表中 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.1944em;"></span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">2</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">m</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">4</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">5</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">6</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">7</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">⋯</span></span></span></span>，<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.1944em;"></span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">6</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">8</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">⋯</span></span></span></span>。(1)① <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.2em;vertical-align:-0.2em;"></span><span class="mord underline"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0em;"><span style="top:-2.84em;"><span class="pstrut" style="height:3em;"></span><span class="underline-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mspace" style="margin-right:1em;"></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2em;"><span></span></span></span></span></span></span></span></span>，<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.2em;vertical-align:-0.2em;"></span><span class="mord underline"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0em;"><span style="top:-2.84em;"><span class="pstrut" style="height:3em;"></span><span class="underline-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mspace" style="margin-right:1em;"></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2em;"><span></span></span></span></span></span></span></span></span>；②落点 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 坐标？(2)飞行高度 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span></span></span></span> 与 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6151em;"></span><span class="mord mathnormal">t</span></span></span></span> 满足二次关系，①最大高度 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.2em;vertical-align:-0.2em;"></span><span class="mord underline"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0em;"><span style="top:-2.84em;"><span class="pstrut" style="height:3em;"></span><span class="underline-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mspace" style="margin-right:1em;"></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2em;"><span></span></span></span></span></span></span></span></span> 米；②求 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">v</span></span></span></span>。</p>
  <p class="hint">💡 答：(1)① <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.1944em;"></span><span class="mord">3</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">6</span></span></span></span>；②落点即抛物线与斜坡交点。(2)①最大高度 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">8</span></span></span></span> 米；②代入顶点坐标求 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">v</span></span></span></span>。（二次函数最值实际应用）</p>
  <p class="src">📌 来源：<a href="https://zy.21cnjy.com/20635729" target="_blank">江西省2024年中考数学真题（解答第22题）</a></p>
</div>
`
  },
  {
    id: "p2",
    file: "p2.html",
    title: "p2 四边形面积最小值",
    type: "综合应用",
    topics: ["几何面积", "均值不等式", "对顶三角形"],
    difficulty: 4,
    category: "最值问题",
    image: "images/app1_app2.png",
    content: `
<div class="prob-statement">
  <p>如图，四边形 $ABCD$ 的对角线 $AC$、$BD$ 相交于点 $O$，$\\triangle AOD$、$\\triangle BOC$ 的面积分别为 $2$ 和 $3$，求四边形 $ABCD$ 面积的最小值。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>对角线分面积</td><td>对角线将四边形分为四个三角形，面积比等于对应线段比</td></tr>
    <tr><td>对顶三角形性质</td><td>$S_{\\triangle AOD} \\times S_{\\triangle BOC} = S_{\\triangle AOB} \\times S_{\\triangle COD}$（关键公式）</td></tr>
    <tr><td>均值不等式</td><td>$a+b \\geq 2\\sqrt{ab}$，用于求面积最小值</td></tr>
    <tr><td>几何最值问题</td><td>先找不变量（此处 $ab=6$），再构造不等式</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：利用对角线分四边形的性质</h4>
<p>对角线把四边形分成 4 个三角形：$\\triangle AOD$、$\\triangle BOC$、$\\triangle AOB$、$\\triangle COD$。$\\triangle AOD$ 与 $\\triangle BOC$ 是<strong>对顶三角形</strong>。</p>

<h4>第二步：对顶三角形面积关系</h4>
<div class="info-box">
  <span class="box-label">🔑 关键结论：</span>$S_{\\triangle AOD} \\times S_{\\triangle BOC} = S_{\\triangle AOB} \\times S_{\\triangle COD}$
</div>

<p><strong>证明思路：</strong>设 $\\dfrac{AO}{OC} = m$，$\\dfrac{DO}{OB} = n$。</p>
<ul class="step-list">
  <li>$S_{\\triangle AOD} : S_{\\triangle AOB} = DO : OB = n \\rightarrow S_{\\triangle AOB} = \\dfrac{2}{n}$</li>
  <li>$S_{\\triangle AOD} : S_{\\triangle COD} = AO : OC = m \\rightarrow S_{\\triangle COD} = \\dfrac{2}{m}$</li>
  <li>$S_{\\triangle AOB} \\times S_{\\triangle COD} = \\dfrac{4}{mn}$</li>
  <li>$S_{\\triangle BOC} = 3$，$S_{\\triangle BOC} : S_{\\triangle AOD} = \\dfrac{BO \\cdot OC}{AO \\cdot OD} = \\dfrac{1}{mn}$</li>
  <li>$3 = \\dfrac{2}{mn} \\rightarrow mn = \\dfrac{2}{3}$</li>
  <li>$\\therefore\\ S_{\\triangle AOB} \\times S_{\\triangle COD} = \\dfrac{4}{2/3} = 6$</li>
</ul>

<h4>第三步：用均值不等式求最小值</h4>
<div class="info-box">
  <span class="box-label">📐 均值不等式：</span>$a + b \\geq 2\\sqrt{ab}$（$a, b > 0$），等号当 $a = b$ 时成立
</div>
<p>设 $S_{\\triangle AOB} = a$，$S_{\\triangle COD} = b$，已知 $ab = 6$。</p>
<div class="formula-block">$S_{ABCD} = 2 + 3 + a + b = 5 + a + b \\geq 5 + 2\\sqrt{ab} = 5 + 2\\sqrt{6}$</div>
<p>当 $a = b = \\sqrt{6}$ 时等号成立。</p>

<h4>❓ 为什么能用均值不等式求最小值？</h4>
<div class="info-box">
  <span class="box-label">🔑 原理拆解（三步理解）：</span>
</div>
<p><strong>第一步：均值不等式给出一个「下界」</strong></p>
<p>均值不等式 $a + b \\geq 2\\sqrt{ab}$ 说明：<strong>两个正数的和，一定不小于 $2\\sqrt{ab}$</strong>。</p>
<p>对于 $S = a + b$，代入 $ab = 6$ 得：</p>
<div class="formula-block">$a + b \\geq 2\\sqrt{ab} = 2\\sqrt{6}$</div>
<p>所以 $S_{ABCD} = 5 + a + b \\geq 5 + 2\\sqrt{6}$。</p>
<p>这意味着四边形面积有<strong>一个下限</strong>——它至少是 $5 + 2\\sqrt{6}$，不可能比这个数更小。</p>

<p><strong>第二步：等号成立条件决定「能否达到」</strong></p>
<p>均值不等式的等号当 $a = b$ 时成立。也就是说，只有当 $a = b$ 时 $a + b = 2\\sqrt{ab}$，否则 $a + b > 2\\sqrt{ab}$。</p>
<p>由 $a = b$ 且 $ab = 6$，解得 $a = b = \\sqrt{6}$。</p>

<p><strong>第三步：验证是否可行</strong></p>
<p>$a = b = \\sqrt{6}$ 是正数，合理。$a$ 和 $b$ 代表两个三角形面积，可以为 $\sqrt{6}$。</p>
<p>是否存在这样的分割？由对顶三角形关系可知，当 $AO:OC = DO:OB$ 时，即对角线互相平分（四边形为平行四边形），$a = b$ 成立。</p>

<div class="info-box" style="background:var(--accent-light);">
  <span class="box-label">📝 一句话总结：</span>
  均值不等式先确定「底线」$5 + 2\\sqrt{6}$，等号条件 $a = b$ 说明可以取到，两者完备 → 最小值就是 $5 + 2\\sqrt{6}$。
</div>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">四边形 $ABCD$ 面积的最小值 $= 5 + 2\\sqrt{6}$</span>
</div>



<h3>🎯 举一反三</h3>
<div class="practice-box">
  <p><strong>变式题：</strong>在四边形 $ABCD$ 中，$S_{\\triangle AOD} = 4$，$S_{\\triangle BOC} = 9$，求四边形面积的最小值。</p>
  <p class="hint">💡 提示：$ab = 36$，$S_{\\min} = 13 + 2\\sqrt{36} = 13 + 12 = 25$（此时 $a=b=6$，四边形是平行四边形）。</p>
</div>

<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
<p><strong>题1（2024·江西·解答·12分）：</strong>在 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathrm">Rt</span></span><span class="mord">△</span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span> 中，点 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span></span></span></span> 是斜边上的动点（不与 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 重合），以 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span></span></span></span> 为直角边向右构造等腰 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathrm">Rt</span></span><span class="mord">△</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span><span class="mord mathnormal" style="margin-right:0.0576em;">E</span></span></span></span>，连 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8778em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0576em;">E</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span><span class="mord mathnormal" style="margin-right:0.0576em;">E</span></span></span></span>。当 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.1389em;">F</span></span></span></span> 与 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span> 关于某直线对称，设 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span>，四边形 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span><span class="mord mathnormal" style="margin-right:0.0576em;">E</span><span class="mord mathnormal" style="margin-right:0.1389em;">F</span></span></span></span> 面积为 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span></span></span></span>。(1)求 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span></span></span></span> 与 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 的函数式，并求 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span></span></span></span> 的最小值；(2)当……时求某线段长。</p>
  <p class="hint">💡 答：<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span></span></span></span> 为关于 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 的二次函数，最小值在顶点处取得（几何最值 + 二次函数结合）。</p>
  <p class="src">📌 来源：<a href="https://zy.21cnjy.com/20635729" target="_blank">江西省2024年中考数学真题（解答第23题）</a></p>
</div>
`
  },
  {
    id: "p12",
    file: "p12.html",
    title: "p12 矩形 OABC 角度三等分",
    type: "几何综合",
    topics: ["矩形性质", "中点坐标", "等腰三角形", "全等三角形", "分类讨论"],
    difficulty: 4,
    category: "几何综合",
    image: "images/p12.png",
    content: `
<div class="prob-statement">
  <p><strong>题目：</strong>在平面直角坐标系中，矩形 $OABC$ 的顶点 $O$ 是原点，顶点 $A(0, 12)$，顶点 $C(5, 0)$；点 $D$ 是 $BO$ 的中点，点 $E$ 是直线 $AB$ 上的动点，若 $\\angle CDE = 3\\angle BED$，则点 $E$ 的坐标是 ______。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>矩形顶点顺序</td><td>$O \\to A \\to B \\to C$ 顺时针：$O(0,0), A(0,12), B(5,12), C(5,0)$，$AB$ 是顶边</td></tr>
    <tr><td>中点坐标</td><td>$D = \\left(\\dfrac{x_B + x_O}{2},\\ \\dfrac{y_B + y_O}{2}\\right) = (2.5, 6)$</td></tr>
    <tr><td>矩形对角线</td><td>$OB = AC = \\sqrt{5^2 + 12^2} = 13$（勾股定理）</td></tr>
    <tr><td>等腰三角形</td><td>$\\triangle BDC$ 中 $BD = DC = \\dfrac{13}{2}$，$BD = \\dfrac{1}{2}OB$</td></tr>
    <tr><td>辅助线构造</td><td>过 $D$ 作 $MN \\parallel AB$（水平线 $y=6$），创造内错角和全等条件</td></tr>
    <tr><td>平行线内错角</td><td>$\\angle 1 = \\angle 2$（内错角），$\\angle 3 = \\angle 4$（内错角）</td></tr>
    <tr><td>等角对等边</td><td>$\\angle BDE = \\angle BED \\Rightarrow BD = BE$（情形 1 和 2）</td></tr>
    <tr><td>全等三角形</td><td>$\\triangle BED \\cong \\triangle CND$（情形 2 辅助证明）</td></tr>
    <tr><td>分类讨论</td><td>$E$ 在 $B$ 右侧 / $A$ 左侧 / $AB$ 段内，三种情况逐一排除</td></tr>
    <tr><td>反证法</td><td>情形 3 用反证法证明 $\\angle CDE > 180°$ 矛盾，排除</td></tr>
    <tr><td>大边对大角</td><td>$AB < AD$ 推出 $\\angle ADB < 60°$，用于排除情形 3</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程（按 $E$ 位置分三种情形讨论）</h3>

<h4>基本数据</h4>
<p>矩形 $OABC$：$O(0,0)$，$A(0, 12)$，$B(5, 12)$，$C(5, 0)$</p>
<p>$D$ 是 $BO$ 中点：$D(2.5, 6)$</p>
<p>矩形对角线 $OB = \\sqrt{5^2 + 12^2} = 13$（勾股定理）</p>
<p>$BD = \\dfrac{1}{2} OB = \\dfrac{13}{2}$，又 $DC = \\sqrt{2.5^2 + 6^2} = \\dfrac{13}{2}$</p>
<p>所以 $BD = DC$，$\\triangle BDC$ 是<strong>等腰三角形</strong>。</p>

<div class="info-box">
  <span class="box-label">🔑 关键观察：</span>$BD = DC = \\dfrac{13}{2}$，是 $OB$ 的一半。这个等腰结构是分类讨论的核心。
</div>

<h3>情形 1：$E$ 在 $AB$ 延长线上 $B$ 右侧（图 1）</h3>
<div style="text-align:center;margin:10px 0;">
  <img src="images/p12_fig1.png" alt="图1：E在B右侧" onclick="openImgOverlay('p12fig1')" style="max-width:100%;border-radius:8px;border:1px solid #e2e8f0;cursor:zoom-in;">
  <p style="font-size:13px;color:#666;margin-top:4px;">图 1：$E$ 在 $AB$ 延长线上 $B$ 右侧，过 $D$ 作 $l \\parallel AE$</p>
  <p class="original-image-caption" onclick="openImgOverlay('p12fig1')">🔍 点击查看原题</p>
</div>

<div class="img-overlay" id="overlay-p12fig1">
  <div class="img-overlay-box" id="overlayBox-p12fig1" onmousedown="startDrag(event,'p12fig1')">
    <span class="img-overlay-close" onclick="closeImgOverlay('p12fig1')">✕</span>
    <img src="images/p12_fig1.png" alt="图1：E在B右侧（放大）">
    <span class="img-resize-handle" onmousedown="startResize(event,'p12fig1')"></span>
  </div>
</div>

<h4>第一步：基本条件与角度标记</h4>
<p>$\\because$ 四边形 $ABCD$ 是矩形，顶点 $A(0, 12)$，$C(5, 0)$</p>
<p>$\\therefore AE \\parallel OC$（$AB$ 与 $OC$ 都水平）</p>
<p>过 $D$ 作直线 $l \\parallel AE$，则 $l \\parallel AE \\parallel OC$</p>
<p>由 $l \\parallel AE$，得 $\\angle 1 = \\angle 2$（内错角）</p>

<h4>第二步：等腰与角度传递</h4>
<p>$D$ 是 $BO$ 中点：$OD = \\dfrac{1}{2}OB$</p>
<p>$\\because OB = \\sqrt{OC^2 + AO^2} = \\sqrt{5^2 + 12^2} = 13$，$\\therefore BD = \\dfrac{13}{2}$</p>
<p>又 $DC = \\sqrt{2.5^2 + 6^2} = \\dfrac{13}{2}$，所以 $OD = DC = BD$</p>
<p>$\\therefore \\triangle BDC$ 等腰，$\\angle 3 = \\angle 4$</p>
<p>$\\because l \\parallel OC$，$\\therefore \\angle 4 = \\angle BOC$（内错角）</p>
<p>$\\because$ 矩形对角线 $\\angle BOC = \\angle ABO$</p>
<p>$\\therefore \\angle 3 = \\angle ABO$</p>

<h4>第三步：利用 $\\angle CDE = 3\\angle BED$</h4>
<p>$\\because \\angle CDE = 3\\angle BED$（已知），且设 $\\angle BED = \\angle 1$</p>
<p>由图 1 知 $\\angle CDE = \\angle 2 + \\angle 3$</p>
<div class="formula-block">$3\\angle 1 = \\angle 2 + \\angle 3 = \\angle 1 + \\angle 3$（$\\angle 1 = \\angle 2$）</div>
<p>$\\therefore \\angle 3 = 2\\angle 1$，$\\angle ABO = 2\\angle 1$</p>
<p>$\\because l \\parallel AE$，$\\therefore \\angle BDE = \\angle 1$（内错角）</p>

<h4>第四步：求 $E$ 坐标</h4>
<p>在 $\\triangle BDE$ 中 $\\angle BDE = \\angle BED = \\angle 1$，所以 $BD = BE$（等角对等边）</p>
<div class="formula-block">$BD = BE = \\dfrac{13}{2}$</div>
<p>$\\because B(5, 12)$，$E$ 在 $y = 12$ 上，$E$ 在 $B$ 右侧</p>
<div class="formula-block">$x_E = 5 + \\dfrac{13}{2} = \\dfrac{23}{2}$</div>

<div class="answer-box">
  <span class="answer-label">✅ 情形 1 答案：</span>
  <span class="answer-value">$E\\left(\\dfrac{23}{2},\\ 12\\right)$</span>
</div>

<h3>情形 2：$E$ 在 $BA$ 延长线上 $A$ 左侧（图 2）</h3>
<div style="text-align:center;margin:10px 0;">
  <img src="images/p12_fig2.png" alt="图2：E在A左侧" onclick="openImgOverlay('p12fig2')" style="max-width:100%;border-radius:8px;border:1px solid #e2e8f0;cursor:zoom-in;">
  <p style="font-size:13px;color:#666;margin-top:4px;">图 2：$E$ 在 $BA$ 延长线上 $A$ 左侧，过 $D$ 作 $MN \\parallel AE$</p>
  <p class="original-image-caption" onclick="openImgOverlay('p12fig2')">🔍 点击查看原题</p>
</div>

<div class="img-overlay" id="overlay-p12fig2">
  <div class="img-overlay-box" id="overlayBox-p12fig2" onmousedown="startDrag(event,'p12fig2')">
    <span class="img-overlay-close" onclick="closeImgOverlay('p12fig2')">✕</span>
    <img src="images/p12_fig2.png" alt="图2：E在A左侧（放大）">
    <span class="img-resize-handle" onmousedown="startResize(event,'p12fig2')"></span>
  </div>
</div>

<h4>第一步：作辅助线 $MN$</h4>
<p>当 $E$ 在 $BA$ 的延长线上，过点 $D$ 作直线 $MN \\parallel AE$ 如图所示。</p>
<p>$\\because$ 四边形 $ABCD$ 是矩形，$MN \\parallel AE$，</p>
<p>$\\therefore EB \\parallel OC \\parallel MN$</p>

<h4>第二步：角度关系</h4>
<p>$\\angle ADM = \\angle ACO$（同位角）</p>
<p>$\\angle MDO = \\angle DOC$（内错角）</p>
<p>$\\angle BED = \\angle MDE$（内错角）</p>

<p>$\\because$ 四边形 $ABCD$ 是矩形，顶点 $A(0, 12)$，$C(5, 0)$</p>
<p>$\\therefore \\angle BOC = \\angle ACO$，$\\angle BAC = \\angle OCD$，$AC = \\sqrt{12^2 + 5^2} = 13$</p>

<h4>第三步：利用 $\\angle CDE = 3\\angle BED$ 推等量</h4>
<p>$\\because \\angle CDE = 3\\angle BED$（已知）</p>
<p>$\\therefore \\angle MDC = 2\\angle BED$（由图 2 角度关系）</p>

<p>又 $\\because \\angle EBD = \\angle CDN = 180° - \\angle MDC = 180° - 2\\angle BED$</p>
<p>在 $\\triangle BED$ 中：</p>
<div class="formula-block">$\\angle EDB = 180° - \\angle BED - \\angle EBD$</div>
<div class="formula-block">$= 180° - \\angle BED - (180° - 2\\angle BED) = \\angle BED$</div>
<p>$\\therefore \\angle EDB = \\angle BED$，所以 $BE = BD$（等角对等边）</p>

<h4>第四步：求 $E$ 坐标</h4>
<div class="formula-block">$BD = BE = \\dfrac{13}{2}$</div>
<p>$BE = AB + AE = 5 + AE = \\dfrac{13}{2}$</p>
<p>$AE = \\dfrac{13}{2} - 5 = \\dfrac{3}{2}$</p>
<p>$E$ 在 $A$ 左侧：$x_E = 0 - \\dfrac{3}{2} = -\\dfrac{3}{2}$</p>

<div class="answer-box">
  <span class="answer-label">✅ 情形 2 答案：</span>
  <span class="answer-value">$E\\left(-\\dfrac{3}{2},\\ 12\\right)$</span>
</div>

<h3>情形 3：$E$ 在线段 $AB$ 内部（$A$ 和 $B$ 之间）（图 3）</h3>
<div style="text-align:center;margin:10px 0;">
  <img src="images/p12_fig3.png" alt="图3：E在AB之间" style="max-width:100%;border-radius:8px;border:1px solid #e2e8f0;">
  <p style="font-size:13px;color:#666;margin-top:4px;">图 3：$E$ 在线段 $AB$ 内部（最终舍去）</p>
</div>

<h4>第一步：基本条件</h4>
<p>$\\because$ 四边形 $ABCD$ 是矩形，顶点 $A(0, 12)$，$C(5, 0)$</p>
<p>$\\therefore \\angle BOC = \\angle ACO$，$\\angle BAC = \\angle OCD$</p>
<p>$AC = \\sqrt{12^2 + 5^2} = 13$</p>

<h4>第二步：角度范围分析</h4>
<p>$\\because \\angle 2 = \\angle BAD + \\angle ADE$（由图 3）</p>
<p>$\\therefore \\angle 2 > \\angle BAD$</p>

<p>$\\because AB = 5 < 6.5$，$AD = BD = \\dfrac{13}{2} = 6.5$</p>
<p>$\\therefore \\angle ADB < 60°$（在 $\\triangle ABD$ 中，大边对大角）</p>

<p>由辅助线 $MN \\parallel AE$：$\\angle 2 = \\dfrac{1}{2}(180° - \\angle ADE)$</p>
<p>$\\because \\angle ADE < 60°$，$\\therefore 180° - \\angle ADE > 120°$</p>
<p>$\\therefore \\angle 2 > 60°$</p>

<h4>第三步：矛盾结论</h4>
<p>$\\because \\angle CDE = 3\\angle BED$（已知）</p>
<p>$\\therefore \\angle CDE = 3\\angle BED > 3 \\times 60° = 180°$ <strong>（矛盾，三角形内角不能大于 180°）</strong></p>

<div class="answer-box" style="background:#fff3cd;border-color:#ffc107;">
  <span class="answer-label">⚠️ 情形 3 结论：</span>
  <span class="answer-value">$E$ 不在线段 $AB$ 内部（$\\angle CDE > 180°$ 矛盾，舍去）</span>
</div>

<h3>📋 最终答案</h3>
<div class="answer-box" style="background:#d4edda;border-color:#28a745;">
  <span class="answer-label">🎯 综合三种情形：</span>
  <span class="answer-value">$E\\left(-\\dfrac{3}{2},\\ 12\\right)$ 或 $E\\left(\\dfrac{23}{2},\\ 12\\right)$</span>
</div>



<h3>🎯 举一反三</h3>
<div class="practice-box">
  <p><strong>变式题 1：</strong>在矩形 $OABC$ 中，$O(0,0)$，$A(0, 8)$，$C(6, 0)$，$D$ 是 $BO$ 中点，$E$ 在直线 $AB$ 上，$\\angle CDE = 2\\angle BED$。求 $E$ 坐标。</p>
  <p class="hint">💡 提示：$B(6, 8)$，$D(3, 4)$，$OB = 10$，$BD = DC = 5$。$\\triangle BDC$ 等腰。作 $MN \\parallel AB$ 过 $D$，利用 $\\angle CDE = 2\\angle BED$ 和等腰条件推出 $BE$ 长。</p>
  <p><strong>变式题 2：</strong>在矩形 $OABC$ 中，$O(0,0)$，$A(0, 3\\sqrt{3})$，$C(3, 0)$，$D$ 是 $BO$ 中点，$E$ 在直线 $AB$ 上，$\\angle CDE = 3\\angle BED$。求 $E$ 坐标。</p>
  <p class="hint">💡 提示：$B(3, 3\\sqrt{3})$，$OB = 6$，$BD = DC = 3$。$\\triangle BDC$ 等腰，$AC = OB = 6$。同样分 $E$ 在 $B$ 右侧 / $A$ 左侧两种情形，分别求 $BE = 3$ 时的 $E$ 坐标。</p>
</div>

</div>

<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
<p><strong>题1（2024·江西·解答）：</strong>如图，在 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord">△</span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span> 中，<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span></span></span></span> 平分 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6922em;"></span><span class="mord">∠</span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span> 交 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span> 于 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span></span></span></span>，过 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span></span></span></span> 作 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span> 的平行线交 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span></span></span></span> 于 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0576em;">E</span></span></span></span>。(1)判断 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord">△</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span><span class="mord mathnormal" style="margin-right:0.0576em;">E</span></span></span></span> 的形状并说明理由；(2)方法应用：角平分线+平行线构造中，①图中有几个等腰三角形（　）A.3　B.4　C.5　D.6；②已知部分边长求某线段长。</p>
  <p class="hint">💡 答：(1)等腰三角形（<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6922em;"></span><span class="mord">∠</span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6922em;"></span><span class="mord">∠</span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span>，<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span><span class="mord mathnormal" style="margin-right:0.0576em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⇒</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6922em;"></span><span class="mord">∠</span><span class="mord mathnormal" style="margin-right:0.0576em;">E</span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6922em;"></span><span class="mord">∠</span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span>，故 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6922em;"></span><span class="mord">∠</span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6922em;"></span><span class="mord">∠</span><span class="mord mathnormal" style="margin-right:0.0576em;">E</span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⇒</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0576em;">E</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0576em;">E</span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span></span></span></span>）；(2)①选 B（4个）。</p>
  <p><strong>题2（2025·江西·填空）：</strong>矩形纸片 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span></span></span></span> 中，沿点 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 折叠并展开，<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span></span></span></span> 的对应边为 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7519em;"></span><span class="mord mathnormal">A</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7519em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span>，折痕与边 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span> 交于 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.1389em;">P</span></span></span></span>。当 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7519em;"></span><span class="mord mathnormal">A</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7519em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span> 与 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span></span></span></span>、<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span></span></span></span> 中任意一边的夹角为 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6741em;"></span><span class="mord">1</span><span class="mord"><span class="mord">5</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6741em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">∘</span></span></span></span></span></span></span></span></span></span></span> 时，<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6922em;"></span><span class="mord">∠</span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.1389em;">P</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span></span></span></span> 的度数可以是 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.2em;vertical-align:-0.2em;"></span><span class="mord underline"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0em;"><span style="top:-2.84em;"><span class="pstrut" style="height:3em;"></span><span class="underline-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mspace" style="margin-right:1em;"></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2em;"><span></span></span></span></span></span></span></span></span>。</p>
  <p class="hint">💡 答：需分类讨论（如 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6741em;"></span><span class="mord">3</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6741em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">∘</span></span></span></span></span></span></span></span></span></span></span>、<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6741em;"></span><span class="mord">6</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6741em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">∘</span></span></span></span></span></span></span></span></span></span></span>、<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6741em;"></span><span class="mord">12</span><span class="mord"><span class="mord">0</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6741em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">∘</span></span></span></span></span></span></span></span></span></span></span> 等）。</p>
  <p class="src">📌 来源：<a href="https://zy.21cnjy.com/20635729" target="_blank">江西省2024年中考数学真题（解答第20题）</a>、<a href="https://zy.21cnjy.com/23238550" target="_blank">江西省2025年中考数学真题（填空第12题）</a></p>
</div>
`
  },
  {
    id: "p14",
    file: "p14.html",
    title: "p14 直线围成三角形 + 正方形 + 平行四边形",
    type: "几何综合",
    topics: ["一次函数", "待定系数法", "三角形面积", "一线三直角", "全等三角形", "正方形构造", "平行四边形判定"],
    difficulty: 4,
    category: "几何综合",
    image: "images/p14.png",
    content: `
<div class="prob-statement">
  <p><strong>题目：</strong>如图，在平面直角坐标系中，直线 $y = 2x + 4$ 与 $x$ 轴交于点 $A$，与 $y$ 轴交于点 $B$，过点 $B$ 的直线交 $x$ 轴于 $C$，且 $\\triangle ABC$ 面积为 $10$。</p>
  <p><strong>（1）</strong>求点 $C$ 的坐标及直线 $BC$ 的解析式；</p>
  <p><strong>（2）</strong>如图 1，设点 $F$ 为线段 $AB$ 中点，点 $G$ 为 $y$ 轴上一动点，连接 $FG$，以 $FG$ 为边向 $FG$ 右侧作正方形 $FGQP$，在 $G$ 点的运动过程中，当顶点 $Q$ 落在直线 $BC$ 上时，求点 $G$ 的坐标；</p>
  <p><strong>（3）</strong>如图 2，若 $M$ 为线段 $BC$ 上一动点，且满足 $S_{\\triangle AMB} = S_{\\triangle AOB}$，点 $E$ 为直线 $AM$ 上一动点。在 $x$ 轴上是否存在点 $D$，使以 $D, E, B, C$ 为顶点的四边形为平行四边形？若存在，请直接写出点 $D$ 的坐标；若不存在，请说明理由。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>坐标轴交点</td><td>令 $y=0$ 求 $x$ 轴交点；令 $x=0$ 求 $y$ 轴交点</td></tr>
    <tr><td>三角形面积</td><td>$S = \\dfrac{1}{2} \\cdot 底 \\cdot 高$，用 $OA \\cdot OB$ 关系求 $AC$</td></tr>
    <tr><td>待定系数法</td><td>两点确定一次函数，联立方程组求 $k, b$</td></tr>
    <tr><td>中点坐标</td><td>$F = \\left(\\dfrac{x_A + x_B}{2},\\ \\dfrac{y_A + y_B}{2}\\right)$</td></tr>
    <tr><td>一线三直角</td><td>过 $G$ 作水平线 $MN$，$F$、$Q$ 分别作 $MN$ 垂线，形成三个直角</td></tr>
    <tr><td>全等三角形</td><td>$\\triangle FMG \\cong \\triangle GNQ$（ASA），$FG = GQ$ 是正方形条件</td></tr>
    <tr><td>分类讨论</td><td>$n > 2$ 与 $n < 2$ 两种情形，$Q$ 坐标符号不同</td></tr>
    <tr><td>正方形构造</td><td>以 $FG$ 为边，向其"右侧"作正方形</td></tr>
    <tr><td>代入直线方程</td><td>把 $Q$ 坐标代入 $BC$ 解析式求 $n$</td></tr>
    <tr><td>平行四边形判定</td><td>3 种顶点排列，对角线互相平分</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 第 (1) 问：求点 $C$ 及直线 $BC$</h3>

<h4>第一步：求 $A$、$B$ 坐标</h4>
<p>$\\because$ 直线 $y = 2x + 4$ 与 $x$ 轴、$y$ 轴分别交于点 $A$、$B$</p>
<p>$\\therefore A(-2, 0)$，$B(0, 4)$</p>

<h4>第二步：利用面积求 $C$</h4>
<p>$\\because OA = 2$，$OB = 4$</p>
<p>$\\because S_{\\triangle ABC} = \\dfrac{1}{2} \\cdot AC \\cdot OB = 10$</p>
<p>$\\therefore AC = 5$</p>
<p>$\\because OC = AC - OA = 5 - 2 = 3$</p>
<p>$\\therefore C(3, 0)$</p>

<h4>第三步：求直线 $BC$ 解析式</h4>
<p>设直线 $BC$ 解析式为 $y = kx + b$，由 $\\begin{cases} 3k + b = 0 \\\\ b = 4 \\end{cases}$</p>
<p>解得 $\\begin{cases} k = -\\dfrac{4}{3} \\\\ b = 4 \\end{cases}$</p>
<p>$\\therefore$ 直线 $BC$ 解析式为 $y = -\\dfrac{4}{3}x + 4$</p>

<div class="answer-box">
  <span class="answer-label">✅ (1) 答案：</span>
  <span class="answer-value">$C(3, 0)$，直线 $BC$：$y = -\\dfrac{4}{3}x + 4$</span>
</div>

<h3>✍️ 第 (2) 问：求点 $G$ 坐标</h3>

<p>$\\because FA = FB$，$A(-2, 0)$，$B(0, 4)$</p>
<p>$\\therefore F(-1, 2)$</p>
<p>设 $G(0, n)$，分两种情形讨论：</p>

<h4>情形①：$n > 2$（图 2-1）</h4>
<div style="text-align:center;margin:10px 0;">
  <img src="images/p14_fig1.png" alt="图2-1：n>2正方形FGQP" style="max-width:100%;border-radius:8px;border:1px solid #e2e8f0;">
  <p style="font-size:13px;color:#666;margin-top:4px;">图 2-1：$n > 2$ 时正方形 $FGQP$ 构造</p>
</div>

<p>当 $n > 2$ 时，如图 2-1，点 $Q$ 落在 $BC$ 上时，过 $G$ 作直线 $MN$ 平行于 $x$ 轴，过点 $F$、$Q$ 作该直线的垂线，垂足分别为 $M$、$N$。</p>

<p>$\\because$ 四边形 $FGQP$ 是正方形，$\\therefore \\triangle FMG \\cong \\triangle GNQ$</p>
<p>$\\because MG = NQ = 1$（水平方向上 $F$ 到 $MN$ 距离为 $1$），$FM = GN = n - 2$</p>
<p>$\\therefore Q(n - 2,\\ n - 1)$</p>
<p>$\\because Q$ 在直线 $y = -\\dfrac{4}{3}x + 4$ 上</p>
<p>$\\therefore n - 1 = -\\dfrac{4}{3}(n - 2) + 4$</p>
<p>$3(n - 1) = -4(n - 2) + 12$</p>
<p>$3n - 3 = -4n + 8 + 12 = -4n + 20$</p>
<p>$7n = 23 \\Rightarrow n = \\dfrac{23}{7}$</p>
<p>$\\therefore G\\left(0,\\ \\dfrac{23}{7}\\right)$</p>

<div class="answer-box">
  <span class="answer-label">✅ 情形①答案：</span>
  <span class="answer-value">$G\\left(0,\\ \\dfrac{23}{7}\\right)$</span>
</div>

<h4>情形②：$n < 2$（图 2-2）</h4>
<div style="text-align:center;margin:10px 0;">
  <img src="images/p14_fig2.png" alt="图2-2：n<2正方形FGQP" style="max-width:100%;border-radius:8px;border:1px solid #e2e8f0;">
  <p style="font-size:13px;color:#666;margin-top:4px;">图 2-2：$n < 2$ 时正方形 $FGQP$ 构造</p>
</div>

<p>当 $n < 2$ 时，同法可得 $Q(2 - n,\\ n + 1)$</p>
<p>$\\because Q$ 在直线 $y = -\\dfrac{4}{3}x + 4$ 上</p>
<p>$\\therefore n + 1 = -\\dfrac{4}{3}(2 - n) + 4$</p>
<p>$3(n + 1) = -4(2 - n) + 12$</p>
<p>$3n + 3 = -8 + 4n + 12 = 4n + 4$</p>
<p>$-n = 1 \\Rightarrow n = -1$</p>
<p>$\\therefore G(0, -1)$</p>

<div class="answer-box">
  <span class="answer-label">✅ 情形②答案：</span>
  <span class="answer-value">$G(0, -1)$</span>
</div>

<h3>📋 第 (2) 问综合答案</h3>
<div class="answer-box" style="background:#d4edda;border-color:#28a745;">
  <span class="answer-label">🎯 满足条件的 $G$ 坐标：</span>
  <span class="answer-value">$G\\left(0,\\ \\dfrac{23}{7}\\right)$ 或 $G(0, -1)$</span>
</div>

<h3>✍️ 第 (3) 问：求点 $D$ 坐标</h3>

<p>由标准答案：存在点 $D$，$D$ 的坐标为 $\\left(\\dfrac{19}{3}, 0\\right)$、$\\left(-\\dfrac{1}{3}, 0\\right)$ 或 $\\left(-\\dfrac{31}{3}, 0\\right)$。</p>

<div class="answer-box" style="background:#d4edda;border-color:#28a745;">
  <span class="answer-label">✅ (3) 答案：</span>
  <span class="answer-value">存在 3 个点 $D$：$D_1\\left(\\dfrac{19}{3}, 0\\right)$、$D_2\\left(-\\dfrac{1}{3}, 0\\right)$、$D_3\\left(-\\dfrac{31}{3}, 0\\right)$</span>
</div>



<h3>🎯 举一反三</h3>
<div class="practice-box">
  <p><strong>变式题 1：</strong>在平面直角坐标系中，直线 $y = x + 3$ 与 $x$ 轴交于 $A$，与 $y$ 轴交于 $B$，$C$ 在 $x$ 轴上使 $\\triangle ABC$ 面积为 6。求直线 $BC$ 的解析式。</p>
  <p class="hint">💡 提示：$A(-3, 0)$，$B(0, 3)$，$|AC| = 4$，$C(1, 0)$ 或 $C(-7, 0)$，对应 $BC$ 解析式为 $y = -3x + 3$ 或 $y = \\dfrac{3}{7}x + 3$。</p>
  <p><strong>变式题 2：</strong>在平面直角坐标系中，$A(-2, 0)$，$B(0, 4)$，$F$ 是 $AB$ 中点。$G(0, n)$ 沿 $y$ 轴运动，以 $FG$ 为边作正方形 $FGQP$，当 $Q$ 落在直线 $y = -x + 4$ 上时，求 $n$ 的值。</p>
  <p class="hint">💡 提示：$F(-1, 2)$。$n > 2$ 时 $Q(n-2, n-1)$，代入 $n-1 = -(n-2)+4 = -n+6$，得 $n = 7/2$；$n < 2$ 时 $Q(2-n, n+1)$，代入 $n+1 = -(2-n)+4 = n+2$，无解。</p>
</div>

<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
<p><strong>题1（2022·江西·解答·12分）：</strong>正方形 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span></span></span></span>（边长2）中心为 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">O</span></span></span></span>。将直角三角板顶点置于 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">O</span></span></span></span> 并绕 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">O</span></span></span></span> 旋转，探究与正方形重叠部分面积。(1)旋转中重叠面积与正方形面积 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0576em;">S</span></span></span></span> 的关系；(2)当 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.109em;">M</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span><span class="mord mathnormal" style="margin-right:0.109em;">N</span></span></span></span> 时判断 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord">△</span><span class="mord mathnormal" style="margin-right:0.0278em;">O</span><span class="mord mathnormal" style="margin-right:0.109em;">M</span><span class="mord mathnormal" style="margin-right:0.109em;">N</span></span></span></span> 形状；当 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span><span class="mord mathnormal" style="margin-right:0.109em;">M</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span><span class="mord mathnormal" style="margin-right:0.109em;">N</span></span></span></span> 时求四边形 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">O</span><span class="mord mathnormal" style="margin-right:0.109em;">M</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span><span class="mord mathnormal" style="margin-right:0.109em;">N</span></span></span></span> 面积（保留根号）；(3)任意锐角绕 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">O</span></span></span></span> 旋转，求重叠面积最值。</p>
  <p class="hint">💡 答：(1)重叠面积恒为正方形面积的 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">4</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span>（证 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord">△</span><span class="mord mathnormal" style="margin-right:0.0278em;">O</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.109em;">M</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≅</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord">△</span><span class="mord mathnormal" style="margin-right:0.0278em;">O</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span><span class="mord mathnormal" style="margin-right:0.109em;">N</span></span></span></span> 得全等）；(2)①等边△；②面积为 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">3</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1328em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;">3</span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span></span></span></span>；(3)最值用旋转角表示。</p>
  <p><strong>题2（2024·江西·解答）：</strong>等腰直角 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord">△</span></span></span></span> 中，双曲线经过点 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span></span></span></span>，过 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span></span></span></span> 作 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 轴垂线交双曲线于 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span>，连 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span>。(1)求点 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span></span></span></span> 坐标；(2)求直线 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span> 的解析式。</p>
  <p class="hint">💡 答：待定系数法求反比例函数与一次函数解析式。</p>
  <p><strong>题3（2025·江西·综合·12分）：</strong>正方形 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span></span></span></span> 中对角线交于 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">O</span></span></span></span>。(1)<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord">△</span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0278em;">O</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span></span></span></span> 绕 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 逆时针旋转并放大 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.0315em;">k</span></span></span></span> 倍得到对应三角形，求旋转角与 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.0315em;">k</span></span></span></span>；(2)旋转角 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span></span></span></span> 放大得 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord">△</span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0576em;">E</span><span class="mord mathnormal" style="margin-right:0.1389em;">F</span></span></span></span>，求相关比值；(3)菱形中类比；(4)探究数量关系。</p>
  <p class="hint">💡 答：典型结果旋转角 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6741em;"></span><span class="mord">4</span><span class="mord"><span class="mord">5</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6741em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mbin mtight">∘</span></span></span></span></span></span></span></span></span></span></span>、<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.0315em;">k</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1328em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;">2</span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span></span></span></span>（正方形+旋转放缩+全等相似）。</p>
  <p class="src">📌 来源：<a href="https://zy.21cnjy.com/12494008" target="_blank">江西省2022年中考数学真题（解答第23题）</a>、<a href="https://zy.21cnjy.com/20635729" target="_blank">江西省2024年中考数学真题（解答第16题）</a>、<a href="https://zy.21cnjy.com/23238550" target="_blank">江西省2025年中考数学真题（综合第22题）</a></p>
</div>
`
  },
  {
    id: "p15",
    file: "p15.html",
    title: "p15 函数的判断",
    type: "选择填空",
    topics: ["函数概念", "函数定义"],
    difficulty: 2,
    category: "函数与统计",
    image: "images/p15.png",
    content: `
<div class="prob-statement">
  <p>下列四个选项中，$y$ <strong>不是</strong> $x$ 的函数的是（ &nbsp;&nbsp; ）</p>
  <p>A. $y = 2x - 7$ &emsp;&emsp; B. $y = \\dfrac{3}{x}$</p>
  <p>C. $y = x^2$ &emsp;&emsp;&emsp;&emsp; D. $y = \\pm\\sqrt{x}$</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>函数定义</td><td>每个 $x$ 必须对应<strong>唯一</strong>的 $y$</td></tr>
    <tr><td>$\\pm$ 号的含义</td><td>$y = \\pm\\sqrt{x}$ 是两个函数，$y^2 = x$ 不是函数</td></tr>
    <tr><td>判别方法</td><td>垂直于 $x$ 轴的直线与图象最多交<strong>一个</strong>点</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：理解函数定义</h4>
<div class="def-red"><strong>函数定义：</strong>对于 $x$ 的每一个确定值，$y$ 都有<strong>唯一确定的值</strong>与之对应。</div>
<p>判断一个关系是否是函数，关键看：每个 $x$ 是否对应<strong>唯一</strong>的 $y$。</p>

<h4>第二步：逐项分析</h4>
<table class="kb-table">
  <thead><tr><th>选项</th><th>表达式</th><th>对应关系</th><th>是否函数</th></tr></thead>
  <tbody>
    <tr><td>A</td><td>$y = 2x - 7$</td><td>每个 $x$ 对应唯一 $y$</td><td>✓ 是</td></tr>
    <tr><td>B</td><td>$y = \\dfrac{3}{x}$</td><td>每个 $x \\neq 0$ 对应唯一 $y$</td><td>✓ 是</td></tr>
    <tr><td>C</td><td>$y = x^2$</td><td>每个 $x$ 对应唯一 $y$</td><td>✓ 是</td></tr>
    <tr><td>D</td><td>$y = \\pm\\sqrt{x}$</td><td>一个 $x$ 对应两个 $y$（如 $x=4 \\to y=\\pm 2$）</td><td>✗ <strong>不是</strong></td></tr>
  </tbody>
</table>

<div class="info-box">
  <span class="box-label">🔑 关键点：</span>$y = \\pm\\sqrt{x}$ 实际上是两个函数 $y = \\sqrt{x}$ 和 $y = -\\sqrt{x}$ 的合写，每个 $x$ 对应两个 $y$ 值，违反函数定义。
</div>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">D</span>
</div>



<h3>🎯 举一反三</h3>
<div class="practice-box">
  <p><strong>变式题：</strong>下列关系中，$y$ 是 $x$ 的函数的有（ &nbsp;&nbsp; ）</p>
  <p>① $y^2 = x$ &emsp; ② $y = |x|$ &emsp; ③ $x = |y|$ &emsp; ④ $y = \\sqrt{x+1}$</p>
  <p class="hint">💡 提示：①③ 一个 $x$ 对应两个 $y$，不是函数；②④ 是函数。</p>
</div>

<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
<p><strong>题1（2024·江西·选择）：</strong>将常温温度计插入一杯热水中，温度计读数与时间的关系用图象近似表示为（　）（四幅图象选一，先快速上升后趋于平缓）。</p>
  <p class="hint">💡 答：C（先升后平的曲线，体现"一个 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 对应唯一 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span></span></span></span>"的函数关系）。</p>
  <p><strong>题2（2025·江西·选择）：</strong>趣味跳高比赛规定"跳跃高度/身高"比值最大者获胜；甲、乙、丙、丁四人的跳跃高度与身高关系示意图如图所示，获胜的是（　）。</p>
  <p class="hint">💡 答：按图象比较比值，对应正比例函数图象性质。</p>
  <p><strong>题3（2025·江西·综合）：</strong>"不动点函数"新定义：存在自变量 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 使函数值 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span>，则称该函数为不动点函数。对一次函数 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.0315em;">k</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span> 探究：哪些是不动点函数？若是，写出 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0315em;">k</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">b</span></span></span></span> 满足的条件。</p>
  <p class="hint">💡 答：由 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.0315em;">k</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 有解条件判断（函数概念 + 新定义）。</p>
  <p class="src">📌 来源：<a href="https://zy.21cnjy.com/20635729" target="_blank">江西省2024年中考数学真题（选择第4题）</a>、<a href="https://zy.21cnjy.com/23238550" target="_blank">江西省2025年中考数学真题（选择第6题、综合第23题）</a></p>
</div>
`
  },
  {
    id: "p16",
    file: "p16.html",
    title: "p16 菱形中的动点",
    type: "几何综合",
    topics: ["菱形性质", "动点函数", "三角形面积", "图象分析"],
    difficulty: 4,
    category: "几何综合",
    image: "images/p16.png",
    content: `
<div class="prob-statement">
  <p>如图 1，在菱形 $ABCD$ 中，点 $P$ 为对角线 $BD$ 上一动点，沿路径 $B \\to D$ 以 $\\sqrt{3}\\text{ cm/s}$ 的速度运动；同时点 $Q$ 从 $B$ 出发沿路径 $B \\to C$ 以 $1\\text{ cm/s}$ 的速度运动。设运动时间为 $x(\\text{s})$，$\\triangle BPQ$ 的面积为 $y(\\text{cm}^2)$，$y$ 与 $x$ 的函数图象如图 2 所示。若 $\\angle BAD = 120°$，则图 2 中 $m$ 的值为（ &nbsp;&nbsp; ）</p>
  <p>A. $3$ &emsp;&emsp; B. $2$ &emsp;&emsp; C. $\\sqrt{6}$ &emsp;&emsp; D. $2\\sqrt{5}$</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>菱形性质</td><td>对角线互相垂直平分，<strong>对角线平分对角</strong></td></tr>
    <tr><td>三角形面积</td><td>$S = \\dfrac{1}{2}ab\\sin C$（含角版本）</td></tr>
    <tr><td>动点问题</td><td>分段函数，图象反映运动过程</td></tr>
    <tr><td>图象解读</td><td>起点、终点、最大值、关键转折点</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：分析菱形基本量</h4>
<p>$\\angle BAD = 120°$，所以 $\\angle ABC = 60°$（菱形邻角互补）</p>
<p>设菱形边长为 $a$，对角线 $BD$：</p>
<p>在 $\\triangle ABD$ 中，$AB = AD = a$，$\\angle BAD = 120°$，由余弦定理：</p>
<div class="formula-block">$BD^2 = a^2 + a^2 - 2a^2 \\cos 120° = 2a^2 + a^2 = 3a^2$</div>
<p>所以 $BD = \\sqrt{3}\\,a$</p>

<h4>第二步：分析 $\\angle PBQ$</h4>
<div class="info-box">
  <span class="box-label">🔑 关键：</span>菱形对角线 $BD$ 平分 $\\angle ABC$，所以 $\\angle DBC = \\angle ABD = 30°$
</div>
<p>$P$ 在 $BD$ 上，$Q$ 在 $BC$ 上，所以 $\\angle PBQ = \\angle DBC = 30°$</p>

<h4>第三步：列面积函数</h4>
<p>运动 $x$ 秒后：$BP = \\sqrt{3}\\,x$，$BQ = x$</p>
<div class="formula-block">$y = \\dfrac{1}{2} \\cdot BP \\cdot BQ \\cdot \\sin 30° = \\dfrac{1}{2} \\cdot \\sqrt{3}x \\cdot x \\cdot \\dfrac{1}{2} = \\dfrac{\\sqrt{3}}{4}x^2$</div>

<h4>第四步：分析图 2 关键点</h4>
<p>图 2 显示 $y$ 与 $x$ 是抛物线关系，最大值为 $\\dfrac{3\\sqrt{3}}{2}$，终止于 $x = m$。</p>
<p><strong>为什么图象在 $x = m$ 处终止？</strong>因为 $P$ 到达 $D$ 点时停止运动（$Q$ 仍在 $BC$ 上但 $P$ 不再变化）。</p>
<p>$P$ 从 $B$ 到 $D$ 所需时间：</p>
<div class="formula-block">$m = \\dfrac{BD}{\\sqrt{3}} = \\dfrac{\\sqrt{3}\\,a}{\\sqrt{3}} = a$</div>

<h4>第五步：求 $a$</h4>
<p>当 $x = m = a$ 时，$y = \\dfrac{3\\sqrt{3}}{2}$：</p>
<p>$\\dfrac{\\sqrt{3}}{4}a^2 = \\dfrac{3\\sqrt{3}}{2}$</p>
<p>$a^2 = 6$，$a = \\sqrt{6}$</p>

<p>所以 $m = a = \\sqrt{6}$</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">C. $\\sqrt{6}$</span>
</div>



<h3>🎯 举一反三</h3>
<div class="practice-box">
  <p><strong>变式题：</strong>菱形 $ABCD$ 中 $\\angle BAD = 60°$，$P$ 沿 $BD$ 以 $2$ cm/s 运动，$Q$ 沿 $BC$ 以 $1$ cm/s 运动，$y = S_{\\triangle BPQ}$，最大值为 $4\\sqrt{3}$。求菱形边长和 $m$ 值。</p>
  <p class="hint">💡 提示：$\\angle ABC = 120°$，$\\angle DBC = 60°$，$y = \\dfrac{1}{2} \\cdot 2x \\cdot x \\cdot \\sin 60° = \\dfrac{\\sqrt{3}}{2}x^2$；由最大值求 $a$，再得 $m$。</p>
</div>

<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
<p><strong>题1（2024·江西·解答·12分）：</strong>在 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathrm">Rt</span></span><span class="mord">△</span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span> 中，点 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span></span></span></span> 是斜边上的动点（不与 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 重合），以 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span></span></span></span> 为直角边向右构造等腰 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathrm">Rt</span></span><span class="mord">△</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span><span class="mord mathnormal" style="margin-right:0.0576em;">E</span></span></span></span>，连 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0576em;">E</span></span></span></span>。当 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.1389em;">F</span></span></span></span> 与 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span> 关于某直线对称，设 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span>，四边形 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span><span class="mord mathnormal" style="margin-right:0.0576em;">E</span><span class="mord mathnormal" style="margin-right:0.1389em;">F</span></span></span></span> 面积为 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span></span></span></span>，求 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span></span></span></span> 与 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 的函数式及最小值。</p>
  <p class="hint">💡 答：<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span></span></span></span> 为关于 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 的二次函数，最小值在顶点处取得（动点 + 面积函数图象）。</p>
  <p><strong>题2（2023·江西·解答·12分）：</strong><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord">△</span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span> 中，<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0278em;">D</span></span></span></span> 在 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span></span></span></span> 上，动点 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.1389em;">P</span></span></span></span> 以 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span> 单位/秒从 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span> 沿 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span> 运动，以 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.1389em;">P</span></span></span></span> 为边作正方形，面积 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0576em;">S</span></span></span></span> 与运动时间 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6151em;"></span><span class="mord mathnormal">t</span></span></span></span> 的函数图象如图所示，求 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0576em;">S</span></span></span></span> 关于 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6151em;"></span><span class="mord mathnormal">t</span></span></span></span> 的解析式等。</p>
  <p class="hint">💡 答：分段函数，结合图形信息列解析式（动点函数图象分析）。</p>
  <p class="src">📌 来源：<a href="https://zy.21cnjy.com/20635729" target="_blank">江西省2024年中考数学真题（解答第23题）</a>、<a href="https://zy.21cnjy.com/23238550" target="_blank">江西省2025年中考数学真题</a>、<a href="https://www.xbjy.com/xhtml/202501/5421.html" target="_blank">江西省2023年中考数学真题（解答第23题）</a></p>
</div>
`
  },
  {
    id: "p17",
    file: "p17.html",
    title: "p17 弹簧长度与质量的函数关系",
    type: "函数与统计",
    topics: ["一次函数", "待定系数法", "代入求值"],
    difficulty: 2,
    category: "函数与统计",
    image: "images/p17_spring.png",
    content: `
<div class="prob-statement">
  <p>物理实验证实：在弹性限度内，某弹簧长度 $y(\\text{cm})$ 与所挂物体质量 $x(\\text{kg})$ 满足一次函数关系。测量数据如下：</p>
  <table class="kb-table">
    <thead><tr><th>所挂物体质量 $x$/kg</th><th>0</th><th>2</th><th>5</th></tr></thead>
    <tbody><tr><td>弹簧长度 $y$/cm</td><td>15</td><td>19</td><td>25</td></tr></tbody>
  </table>
  <p>（1）求 $y$ 与 $x$ 的函数关系式；</p>
  <p>（2）当弹簧长度为 $20\\text{cm}$ 时，求所挂物体的质量。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>一次函数</td><td>形如 $y = kx + b$（$k \\neq 0$）的函数</td></tr>
    <tr><td>待定系数法</td><td>把已知条件代入函数式，得到方程组求未知系数</td></tr>
    <tr><td>代入求值</td><td>已知 $y$ 求 $x$ 时，把 $y$ 代入解一元一次方程</td></tr>
    <tr><td>验证习惯</td><td>求出 $k, b$ 后，用未用过的数据验证</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：设函数式</h4>
<p>由题意，$y$ 与 $x$ 是<strong>一次函数</strong>关系，设</p>
<div class="formula-block">$y = kx + b \\quad (k \\neq 0)$</div>

<h4>第二步：用待定系数法求 $k, b$</h4>
<p>把 $x=0, y=15$ 代入：$15 = k \\cdot 0 + b \\Rightarrow b = 15$</p>
<p>把 $x=2, y=19$ 代入：$19 = 2k + 15 \\Rightarrow 2k = 4 \\Rightarrow k = 2$</p>
<p>所以函数关系式为 $y = 2x + 15$。</p>
<p><strong>验证：</strong>当 $x=5$ 时，$y = 2 \\times 5 + 15 = 25$ ✓ 与表格数据吻合。</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案（1）：</span><span class="answer-value">$y = 2x + 15$</span>
</div>

<h4>第三步：求 $y = 20$ 时所挂物体的质量</h4>
<p>把 $y = 20$ 代入 $y = 2x + 15$：</p>
<div class="formula-block">$20 = 2x + 15 \\Rightarrow 2x = 5 \\Rightarrow x = 2.5$</div>

<div class="answer-box">
  <span class="answer-label">✅ 答案（2）：</span><span class="answer-value">$x = 2.5\\text{ kg}$</span>
</div>



<h3>🎯 举一反三</h3>
<div class="practice-box">
  <p><strong>变式题 1：</strong>某汽车行驶路程 $s$（km）与时间 $t$（h）满足一次函数 $s = 60t + 10$。求 $t=0$ 时汽车的位置，以及行驶 250 km 所需时间。</p>
  <p class="hint">💡 提示：$t=0$ 时 $s=10$（出发点离原点 10 km）；$250 = 60t + 10 \\Rightarrow t = 4$ 小时。</p>
  <p><strong>变式题 2：</strong>某地某天最高气温 $y$（℃）与时间 $x$（h, $0 \\le x \\le 24$）近似满足 $y = -2x + 30$。该天几点气温最高？最高多少度？</p>
  <p class="hint">💡 提示：$k=-2 < 0$，$y$ 随 $x$ 增大而减小，所以 $x=0$ 时最高，$y_{\\max} = 30$ ℃（即 0 点最高 30℃）。</p>
</div>

<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
<p><strong>题1（2024·江西·解答）：</strong>等腰直角 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord">△</span></span></span></span> 中，双曲线经过点 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span></span></span></span>，过 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span></span></span></span> 作 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 轴垂线交双曲线于 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span>，连 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span>。(1)求点 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span></span></span></span> 坐标；(2)求直线 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span> 的解析式。</p>
  <p class="hint">💡 答：待定系数法求反比例函数与一次函数解析式，再代入坐标求值。</p>
  <p><strong>题2（2025·江西·解答）：</strong>直线 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.0197em;">l</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">m</span></span></span></span> 与反比例函数 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.2251em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8801em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">x</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.0315em;">k</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace"> </span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.0315em;">k</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel"><span class="mrel"><span class="mord vbox"><span class="thinbox"><span class="rlap"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="inner"><span class="mord"><span class="mrel"></span></span></span><span class="fix"></span></span></span></span></span><span class="mspace nobreak"></span><span class="mrel">=</span></span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">0</span><span class="mclose">)</span></span></span></span> 交于点 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">A</span><span class="mopen">(</span><span class="mord">6</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">2</span><span class="mclose">)</span></span></span></span>。(1)求两函数解析式；(2)直线向上平移交反比例函数于 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span>，当 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6922em;"></span><span class="mord">∠1</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6922em;"></span><span class="mord">∠2</span></span></span></span> 时，求点 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span> 坐标与平移距离。</p>
  <p class="hint">💡 答：(1)代入 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">A</span><span class="mopen">(</span><span class="mord">6</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">2</span><span class="mclose">)</span></span></span></span> 得 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.0315em;">k</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.1944em;"></span><span class="mord">12</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">2</span></span></span></span>；再待定系数求平移后直线。</p>
  <p><strong>题3（2023·江西·解答）：</strong>直线 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7778em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.0315em;">k</span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">b</span></span></span></span> 与反比例函数 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.3185em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9735em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">x</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.0315em;">k</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8278em;"><span style="top:-2.931em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span> 交于点 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal">A</span></span></span></span>，与 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.0359em;">y</span></span></span></span> 轴交于 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span></span></span></span>，过 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span></span></span></span> 作 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">x</span></span></span></span> 轴平行线交反比例函数于 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span>。(1)求直线与反比例函数表达式；(2)求 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord">△</span><span class="mord mathnormal">A</span><span class="mord mathnormal" style="margin-right:0.0502em;">B</span><span class="mord mathnormal" style="margin-right:0.0715em;">C</span></span></span></span> 面积。</p>
  <p class="hint">💡 答：待定系数法求解析式，再代入坐标求面积。</p>
  <p class="src">📌 来源：<a href="https://zy.21cnjy.com/20635729" target="_blank">江西省2024年中考数学真题</a>、<a href="https://zy.21cnjy.com/23238550" target="_blank">江西省2025年中考数学真题</a>、<a href="https://www.xbjy.com/xhtml/202501/5421.html" target="_blank">江西省2023年中考数学真题</a></p>
</div>
`
  },
  {
    id: "p18",
    file: "p18.html",
    title: "p18 甲乙两组成绩分析（四分位数 + 箱线图 + 方差）",
    type: "函数与统计",
    topics: ["四分位数", "箱线图", "方差", "数据波动"],
    difficulty: 3,
    category: "函数与统计",
    image: "images/p18_stats.png",
    content: `
<div class="prob-statement">
  <p>甲、乙两组测试成绩（单位：分）：</p>
  <p>甲：96, 86, 70, 89, 70, 80, 92, 98（共 8 个数据）</p>
  <p>乙：92, 93, 70, 88, 82, 75, 96, 80, 92, 95（共 10 个数据）</p>
  <p>（1）求甲组数据的四分位数；</p>
  <p>（2）根据四分位数可绘制如图所示的箱线图，观察图中乙组的箱线图，绘制甲组的箱线图；</p>
  <p>（3）不经过计算，哪组测试的成绩方差更大？为什么？</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>四分位数</td><td>$Q_1$（下）、$Q_2$（中位数）、$Q_3$（上）；$n$ 偶数时取中间两数平均</td></tr>
    <tr><td>箱线图</td><td>由最小值、$Q_1$、$Q_2$、$Q_3$、最大值 5 个数构成</td></tr>
    <tr><td>箱体长度</td><td>$Q_3 - Q_1$，反映中间 50% 数据的离散程度</td></tr>
    <tr><td>方差含义</td><td>$S^2 = \\dfrac{1}{n}\\sum(x_i - \\bar{x})^2$，数据越分散越大</td></tr>
    <tr><td>图象判断</td><td>箱体/须线越长 ⇒ 数据越分散 ⇒ 方差越大</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：求甲组四分位数</h4>
<p>将甲组数据从小到大排序：</p>
<div class="formula-block">$70, \\ 70, \\ 80, \\ 86, \\ 89, \\ 92, \\ 96, \\ 98 \\quad (n = 8)$</div>
<p>由于 $n=8$ 是偶数，<strong>中位数</strong>为中间两个数（$86$ 与 $89$）的平均值：</p>
<div class="formula-block">$Q_2 = \\dfrac{86 + 89}{2} = 87.5$</div>
<p>把数据分成<strong>下半</strong>与<strong>上半</strong>各 4 个：</p>
<ul class="step-list">
  <li>下半：$70, 70, 80, 86$，$Q_1 = \\dfrac{70 + 80}{2} = 75$</li>
  <li>上半：$89, 92, 96, 98$，$Q_3 = \\dfrac{92 + 96}{2} = 94$</li>
</ul>

<div class="answer-box">
  <span class="answer-label">✅ 答案（1）：</span><span class="answer-value">$Q_1 = 75,\\ Q_2 = 87.5,\\ Q_3 = 94$</span>
</div>

<h4>第二步：绘制甲组箱线图</h4>
<p>由第一步可得甲组箱线图的五个关键点：</p>
<table class="kb-table">
  <thead><tr><th>最小值</th><th>$Q_1$</th><th>$Q_2$（中位数）</th><th>$Q_3$</th><th>最大值</th></tr></thead>
  <tbody><tr><td>70</td><td>75</td><td>87.5</td><td>94</td><td>98</td></tr></tbody>
</table>
<p>在图中甲组位置画矩形：左端 $75$，右端 $94$，中位线 $87.5$；从 $70$ 画横线到左端，从 $94$ 画横线到 $98$。</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案（2）：</span><span class="answer-value">见上表与图示</span>
</div>

<h4>第三步：比较方差（不计算判断）</h4>
<p>观察箱线图：</p>
<ul class="step-list">
  <li>甲组的箱体（$Q_3 - Q_1 = 94 - 75 = 19$）明显<strong>长于</strong>乙组；</li>
  <li>甲组须线总跨度（$98 - 70 = 28$）也<strong>大于</strong>乙组；</li>
  <li>箱体与须线越长，数据分布越分散，方差越大。</li>
</ul>

<div class="answer-box">
  <span class="answer-label">✅ 答案（3）：</span><span class="answer-value">甲组方差更大。从箱线图看，甲组箱体和须线都比乙组长，数据更分散，所以甲组方差更大。</span>
</div>



<h3>🎯 举一反三</h3>
<div class="practice-box">
  <p><strong>变式题 1：</strong>求数据 $5, 8, 12, 3, 9, 15, 7, 10$ 的四分位数。</p>
  <p class="hint">💡 提示：排序 $3,5,7,8,9,10,12,15$；$Q_2=(8+9)/2=8.5$；$Q_1=(5+7)/2=6$；$Q_3=(10+12)/2=11$。</p>
  <p><strong>变式题 2：</strong>两组数据均值都为 80，甲组箱体 $5$、乙组箱体 $8$。哪组方差大？说明理由。</p>
  <p class="hint">💡 提示：乙组箱体更长 ⇒ 中间 50% 数据更分散 ⇒ 乙组方差更大。</p>
</div>

<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
<p><strong>题1（2024·江西·选择）：</strong>某地去年一至六月每月空气质量"优"的天数折线统计图，结论错误的是（　）A.五月16天 B.众数15天 C.中位数15天 D.平均数15天。</p>
  <p class="hint">💡 答：D（平均数≠15，用样本数据计算验证）。</p>
  <p><strong>题2（2023·江西·解答）：</strong>抽取初、高中学生调查视力，得统计表与统计图。求 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">m</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">n</span></span></span></span>、样本容量；判断"初中视力是否比高中好"并选一个反映总体的统计量说明理由；估计视力不良人数。</p>
  <p class="hint">💡 答：用中位数/平均数等统计量比较两组数据，并用样本估计总体。</p>
  <p><strong>题3（2025·江西·解答）：</strong>某饮品三种糖浆方案，300位嘉宾评分。求 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">m</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">n</span></span></span></span>；说明最受欢迎方案；估计最喜爱某方案的人数；补全统计图并分析。</p>
  <p class="hint">💡 答：借助平均数、中位数与统计图进行数据分析与决策。</p>
  <p class="src">📌 来源：<a href="https://zy.21cnjy.com/20635729" target="_blank">江西省2024年中考数学真题</a>、<a href="https://www.xbjy.com/xhtml/202501/5421.html" target="_blank">江西省2023年中考数学真题</a>、<a href="https://zy.21cnjy.com/23238550" target="_blank">江西省2025年中考数学真题</a>　（说明：江西省卷近年统计题以中位数/众数/平均数/样本估计为主，未单独考方差与箱线图，以下为同类数据分析真题）</p>
</div>
`
  },
  {
    id: "p19",
    file: "p19.html",
    title: "p19 二次根式配凑",
    type: "二次根式",
    topics: ["二次根式", "配方法", "平方差公式", "分母有理化"],
    difficulty: 3,
    category: "二次根式",
    image: "images/p19_simplify.png",
    content: `
<div class="prob-statement">
  <p>化简：</p>
  <div class="formula-block">$\\sqrt{2023 + \\dfrac{1}{2025}} \\times \\sqrt{4050}$</div>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>通分</td><td>把根号内的整数与分数统一为分式</td></tr>
    <tr><td>平方差公式</td><td>$(n-1)(n+1) = n^2 - 1$；本题用于"凑完全平方"</td></tr>
    <tr><td>配凑完全平方</td><td>$n^2 - 1 + 1 = n^2$ 巧妙化简分子</td></tr>
    <tr><td>提取完全平方</td><td>$\\sqrt{ab^2} = b\\sqrt{a}$（$b>0$）</td></tr>
    <tr><td>整体约分</td><td>分子分母同时含 $\\sqrt{2025}=45$，约分简化运算</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：通分合并根号内</h4>
<div class="formula-block">$\\sqrt{2023 + \\dfrac{1}{2025}} = \\sqrt{\\dfrac{2023 \\times 2025 + 1}{2025}}$</div>

<h4>第二步：利用平方差公式化简分子</h4>
<p>看到 $2023 \\times 2025$，可以配成 <strong>平方差</strong>：</p>
<div class="formula-block">$2023 \\times 2025 = (2024 - 1)(2024 + 1) = 2024^2 - 1$</div>
<p>所以分子变为：</p>
<div class="formula-block">$2024^2 - 1 + 1 = 2024^2$</div>
<p>因此</p>
<div class="formula-block">$\\sqrt{2023 + \\dfrac{1}{2025}} = \\sqrt{\\dfrac{2024^2}{2025}} = \\dfrac{2024}{\\sqrt{2025}}$</div>

<h4>第三步：化简 $\\sqrt{4050}$</h4>
<p>把 $4050$ 分解质因数，提取完全平方因子：</p>
<div class="formula-block">$4050 = 81 \\times 50 = 9^2 \\times 50$</div>
<p>所以</p>
<div class="formula-block">$\\sqrt{4050} = \\sqrt{9^2 \\times 50} = 9\\sqrt{50} = 9 \\times 5\\sqrt{2} = 45\\sqrt{2}$</div>
<p>另一方面，分母 $\\sqrt{2025} = 45$，于是：</p>
<div class="formula-block">$\\dfrac{2024}{\\sqrt{2025}} \\times \\sqrt{4050} = \\dfrac{2024}{45} \\times 45\\sqrt{2} = 2024\\sqrt{2}$</div>

<div class="answer-box">
  <span class="answer-label">✅ 最终答案：</span><span class="answer-value">$2024\\sqrt{2}$</span>
</div>



<h3>🎯 举一反三</h3>
<div class="practice-box">
  <p><strong>变式题 1：</strong>化简 $\\sqrt{2024 + \\dfrac{1}{2026}} \\times \\sqrt{4052}$。</p>
  <p class="hint">💡 提示：$2024 \\times 2026 = 2025^2 - 1$，分子 $=2025^2$；$4052 = 4 \\times 1013 = 2^2 \\times 1013$，故 $\\sqrt{4052} = 2\\sqrt{1013}$；$\\sqrt{2026}=\\sqrt{2026}$（不能化简），结果 $= \\dfrac{2025 \\times 2\\sqrt{1013}}{\\sqrt{2026}} = \\dfrac{4050\\sqrt{1013}}{\\sqrt{2026}}$，再有理化得 $\\dfrac{4050\\sqrt{1013 \\times 2026}}{2026} = \\dfrac{4050\\sqrt{2049338}}{2026}$。若题目设计有 $\\sqrt{2026}= \\sqrt{2 \\times 1013}$，可约分。同学们可设具体数验证。</p>
  <p><strong>变式题 2：</strong>化简 $\\sqrt{n + \\dfrac{1}{n+2}} \\times \\sqrt{(n+1) \\cdot 4}$，其中 $n$ 为正整数。</p>
  <p class="hint">💡 提示：$n(n+2) = (n+1)^2 - 1$，所以根号内 $\\dfrac{(n+1)^2}{n+2}$；原式 $= \\dfrac{n+1}{\\sqrt{n+2}} \\cdot 2\\sqrt{n+1} = \\dfrac{2(n+1)\\sqrt{n+1}}{\\sqrt{n+2}} = 2(n+1)\\sqrt{\\dfrac{n+1}{n+2}}$。</p>
</div>

<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
<p><strong>题1（2025·江西·填空）：</strong>化简 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1328em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;">8</span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.2em;vertical-align:-0.2em;"></span><span class="mord underline"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0em;"><span style="top:-2.84em;"><span class="pstrut" style="height:3em;"></span><span class="underline-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mspace" style="margin-right:1em;"></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2em;"><span></span></span></span></span></span></span></span></span>。</p>
  <p class="hint">💡 答：<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1328em;"></span><span class="mord">2</span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9072em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;">2</span></span><span style="top:-2.8672em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1328em;"><span></span></span></span></span></span></span></span></span>（把 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">8</span></span></span></span> 配成 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span> 再开方，即"配凑完全平方数"）。</p>
  <p><strong>题2（2023·江西·选择）：</strong>计算 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mopen">(</span><span class="mord">−</span><span class="mord">2</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.28em" viewBox="0 0 400000 1296" preserveAspectRatio="xMinYMin slice"><path d="M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span></span></span></span>（　）A. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">2</span></span></span></span>　B. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>　C. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">4</span></span></span></span>　D. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">4</span></span></span></span></p>
  <p class="hint">💡 答：B。<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.305em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.935em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mopen">(</span><span class="mord">−</span><span class="mord">2</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7401em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-2.895em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.28em" viewBox="0 0 400000 1296" preserveAspectRatio="xMinYMin slice"><path d="M263,681c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l0 -0
c4.7,-7.3,11,-11,19,-11
H40000v40H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M1001 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.305em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">∣</span><span class="mord"><span class="mord">−</span><span class="mord">2</span></span><span class="mord">∣</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>。</p>
  <p><strong>题3（2023·江西·选择）：</strong>若 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.04em;vertical-align:-0.1744em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8656em;"><span class="svg-align" style="top:-3em;"><span class="pstrut" style="height:3em;"></span><span class="mord" style="padding-left:0.833em;"><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">4</span></span></span><span style="top:-2.8256em;"><span class="pstrut" style="height:3em;"></span><span class="hide-tail" style="min-width:0.853em;height:1.08em;"><svg xmlns="http://www.w3.org/2000/svg" width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z"/></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.1744em;"><span></span></span></span></span></span></span></span></span> 有意义，则 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span> 的值可以是（　）A. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">1</span></span></span></span>　B. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>　C. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>　D. <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">6</span></span></span></span></p>
  <p class="hint">💡 答：D。被开方数 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7804em;vertical-align:-0.136em;"></span><span class="mord">4</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">≥</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>。</p>
  <p class="src">📌 来源：<a href="https://zy.21cnjy.com/23238550" target="_blank">江西省2025年中考数学真题</a>、<a href="https://www.xbjy.com/xhtml/202501/5421.html" target="_blank">江西省2023年中考数学真题</a></p>
</div>
`
  }
];

// ============ 生成每道题的 HTML ============
problems.forEach(p => {
  const bodyHtml = fixNeq(renderMath(p.content));
  const imageHtml = p.image
    ? `<img class="original-image" id="img-${p.id}" src="${p.image}" alt="原题图片 - ${p.title}">
<p class="original-image-caption" onclick="openImgOverlay('${p.id}')">📷 点击查看原图</p>
<div class="img-overlay" id="overlay-${p.id}">
  <div class="img-overlay-box" id="overlayBox-${p.id}" onmousedown="startDrag(event,'${p.id}')">
    <span class="img-overlay-close" onclick="closeImgOverlay('${p.id}')">✕</span>
    <img src="${p.image}" alt="原题图片 - ${p.title}">
    <span class="img-resize-handle" onmousedown="startResize(event,'${p.id}')"></span>
  </div>
</div>`
    : '';
  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${p.title}  - cici_study_math</title>
<style>${katexCss}</style>
<style>${problemCss}</style>
</head>
<body>
<h2>${p.title}</h2>
<div style="margin-bottom:12px;display:flex;gap:6px;flex-wrap:wrap;">
  <span class="tag">${p.type}</span>
  ${p.topics.map(t => `<span class="tag">${t}</span>`).join('')}
  <span style="color:#f0c040;">${'★'.repeat(p.difficulty)}${'☆'.repeat(4-p.difficulty)}</span>
</div>
${imageHtml}
${bodyHtml}
<script>
let dragState = null;
function openImgOverlay(id) {
  document.getElementById('overlay-' + id).classList.add('show');
  // 打开时重置拖拽/缩放状态
  const box = document.getElementById('overlayBox-' + id);
  box.style.position = '';
  box.style.left = '';
  box.style.top = '';
  box.style.margin = '';
  box.style.width = '';
}
function closeImgOverlay(id) {
  document.getElementById('overlay-' + id).classList.remove('show');
  dragState = null;
}
function startDrag(e, id) {
  if (e.button !== 0 || e.target.closest('.img-resize-handle')) return;
  const box = document.getElementById('overlayBox-' + id);
  const rect = box.getBoundingClientRect();
  // 确保 box 是 fixed 定位
  box.style.position = 'fixed';
  box.style.left = rect.left + 'px';
  box.style.top = rect.top + 'px';
  box.style.margin = '0';
  dragState = { type: 'drag', id, offsetX: e.clientX - rect.left, offsetY: e.clientY - rect.top };
  document.addEventListener('mousemove', onDragResize);
  document.addEventListener('mouseup', stopDragResize);
  e.preventDefault();
}
function startResize(e, id) {
  if (e.button !== 0) return;
  e.stopPropagation();
  const box = document.getElementById('overlayBox-' + id);
  const img = box.querySelector('img');
  const rect = box.getBoundingClientRect();
  // 确保 box 是 fixed 定位
  box.style.position = 'fixed';
  box.style.left = rect.left + 'px';
  box.style.top = rect.top + 'px';
  box.style.margin = '0';
  // 记录原始宽高和宽高比
  const origW = rect.width;
  const origH = rect.height;
  const aspect = rect.width / rect.height;
  dragState = { type: 'resize', id, startX: e.clientX, startY: e.clientY, origW, origH, aspect,
    imgNaturalW: img.naturalWidth, imgNaturalH: img.naturalHeight };
  document.addEventListener('mousemove', onDragResize);
  document.addEventListener('mouseup', stopDragResize);
  e.preventDefault();
}
function onDragResize(e) {
  if (!dragState) return;
  const box = document.getElementById('overlayBox-' + dragState.id);
  if (dragState.type === 'drag') {
    box.style.left = (e.clientX - dragState.offsetX) + 'px';
    box.style.top = (e.clientY - dragState.offsetY) + 'px';
  } else if (dragState.type === 'resize') {
    const dx = e.clientX - dragState.startX;
    const dy = e.clientY - dragState.startY;
    // 以对角线方向变化决定新尺寸，保持宽高比
    let newW = dragState.origW - dx;
    let newH = newW / dragState.aspect;
    // 限制最小尺寸
    if (newW < 120) newW = 120;
    if (newH < 80) newH = 80;
    // 限制最大尺寸不超过视口
    if (newW > window.innerWidth * 0.9) newW = window.innerWidth * 0.9;
    if (newH > window.innerHeight * 0.9) newH = window.innerHeight * 0.9;
    newH = newW / dragState.aspect;
    box.style.width = newW + 'px';
    box.style.height = newH + 'px';
    // 让图片自适应
    const img = box.querySelector('img');
    if (img) {
      img.style.maxWidth = '100%';
      img.style.maxHeight = '100%';
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'contain';
    }
  }
}
function stopDragResize() {
  dragState = null;
  document.removeEventListener('mousemove', onDragResize);
  document.removeEventListener('mouseup', stopDragResize);
}
</script>
</body>
</html>`;
  fs.writeFileSync(`./problems/${p.file}`, html);
  console.log(`  ✓ problems/${p.file}`);
});

// ============ 构建树形结构 ============
const tree = {};
problems.forEach(p => {
  if (!tree[p.category]) tree[p.category] = [];
  tree[p.category].push(p);
});

// 所有知识点（去重）
const allTopics = [...new Set(problems.flatMap(p => p.topics))];
const allTypes = [...new Set(problems.map(p => p.type))];

// 生成树形菜单 HTML
function buildTreeHTML() {
  let html = '';
  for (const [cat, probs] of Object.entries(tree)) {
    // 按难度升序排列（★越少越靠前）
    probs.sort((a, b) => a.difficulty - b.difficulty);
    html += `
        <li class="tree-folder">
          <div class="tree-folder-header" onclick="toggleFolder(this)" title="${cat}">
            <span class="tree-arrow">▶</span>
            <span class="tree-folder-icon">📁</span>
            <span class="tree-folder-name">${cat}</span>
            <span class="tree-count">${probs.length}</span>
          </div>
          <ul class="tree-children">`;
    probs.forEach(p => {
      const stars = '★'.repeat(p.difficulty) + '☆'.repeat(4 - p.difficulty);
      html += `
            <li>
              <a class="tree-file" href="problems/${p.file}" data-id="${p.id}" data-type="${p.type}" data-topics="${p.topics.join(',')}" data-cat="${cat}" onclick="loadProblem(this, 'problems/${p.file}');return false;" ondblclick="toggleMastered('${p.id}')" title="${p.title}">
                <span class="tree-checkmark" id="check-${p.id}"></span>
                <span class="tree-file-icon">📄</span>
                <span class="tree-file-name">${p.title}</span>
                <span class="tree-file-diff">${stars}</span>
              </a>
            </li>`;
    });
    html += `
          </ul>
        </li>`;
  }
  return html;
}

// ============ 生成 index.html ============
const indexHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>cici_study_math</title>
<style>
  :root {
    --sidebar-w: 340px;
    --sidebar-bg: #1b2838;
    --sidebar-text: #b0bec5;
    --accent: #2e75b6;
    --accent-light: #ebf5fb;
    --radius: 8px;
    --border: #e2e8f0;
    --hover-bg: #243447;
    --active-bg: rgba(46,117,182,0.3);
  }
  * { margin:0; padding:0; box-sizing:border-box; }
  html, body { height: 100%; overflow: hidden; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
    display: flex;
    background: #f5f6fa;
  }

  /* ====== SIDEBAR ====== */
  .sidebar {
    width: var(--sidebar-w);
    min-width: var(--sidebar-w);
    background: var(--sidebar-bg);
    color: var(--sidebar-text);
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    box-shadow: 2px 0 12px rgba(0,0,0,0.2);
    z-index: 10;
    transition: width 0.3s ease, min-width 0.3s ease;
  }
  .sidebar.collapsed {
    width: 0;
    min-width: 0;
    overflow: hidden;
  }
  .sidebar-header {
    padding: 18px 18px 14px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    flex-shrink: 0;
    position: relative;
  }
  .sidebar-header h1 {
    font-size: 1.2em;
    color: #fff;
    font-weight: 700;
  }
  .sidebar-header .subtitle {
    font-size: 0.7em;
    color: #5a7999;
    margin-top: 2px;
  }
  .sidebar-toggle {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    background: rgba(255,255,255,0.08);
    color: #8a9bb5;
    font-size: 0.65em;
    transition: all 0.2s;
    border: none;
    user-select: none;
  }
  .sidebar-toggle:hover { background: rgba(255,255,255,0.18); color: #c0d0e0; }
  .sidebar-reopen {
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 28px;
    height: 48px;
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: var(--sidebar-bg);
    color: #8a9bb5;
    font-size: 0.7em;
    border: none;
    border-radius: 0 6px 6px 0;
    box-shadow: 2px 0 8px rgba(0,0,0,0.15);
    z-index: 5;
    transition: all 0.2s;
    user-select: none;
  }
  .sidebar-reopen:hover { background: #243447; color: #c0d0e0; }
  .sidebar.collapsed ~ .sidebar-reopen { display: flex; }

  /* Filter panels */
  .filter-panel {
    border-bottom: 1px solid rgba(255,255,255,0.06);
    flex-shrink: 0;
  }
  .filter-panel-header {
    display: flex;
    align-items: center;
    padding: 10px 18px;
    cursor: pointer;
    user-select: none;
    transition: background 0.2s;
  }
  .filter-panel-header:hover { background: var(--hover-bg); }
  .filter-panel-header .arrow {
    font-size: 0.65em;
    margin-right: 8px;
    transition: transform 0.2s;
    color: #5a7999;
  }
  .filter-panel-header.collapsed .arrow { transform: rotate(-90deg); }
  .filter-panel-title {
    font-size: 0.72em;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: #5a7999;
    font-weight: 700;
  }
  .filter-panel-body {
    padding: 0 18px 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  .filter-panel-body.hidden { display: none; }
  .filter-tag {
    font-size: 0.68em;
    padding: 3px 9px;
    border-radius: 11px;
    cursor: pointer;
    background: rgba(255,255,255,0.06);
    color: #8a9bb5;
    border: 1px solid rgba(255,255,255,0.08);
    transition: all 0.2s;
    white-space: nowrap;
  }
  .filter-tag:hover { background: rgba(255,255,255,0.14); color: #c0d0e0; }
  .filter-tag.active { background: var(--accent); color: #fff; border-color: var(--accent); }
  .filter-tag.clear-btn { background: rgba(255,255,255,0.03); color: #5a7999; font-style: italic; }
  .filter-tag.clear-btn:hover { background: rgba(255,255,255,0.12); color: #e74c3c; }
  .filter-panel-header .clear-btn {
    margin-left: auto;
    font-size: 0.62em;
    padding: 2px 7px;
    border-radius: 8px;
    cursor: pointer;
    color: #5a7999;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.06);
    transition: all 0.2s;
    user-select: none;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .filter-panel-header .clear-btn:hover { background: rgba(255,255,255,0.12); color: #e74c3c; border-color: rgba(231,76,60,0.3); }

  /* Tree nav */
  .tree-nav {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 6px 0;
  }
  .tree-nav ul { list-style: none; }
  .tree-nav ul ul { padding-left: 0; }

  /* Tree folder */
  .tree-folder { margin: 2px 0; }
  .tree-folder-header {
    display: flex;
    align-items: center;
    padding: 7px 18px 7px 4px;
    cursor: pointer;
    user-select: none;
    transition: background 0.15s;
  }
  .tree-folder-header:hover { background: var(--hover-bg); }
  .tree-folder-header .tree-arrow {
    font-size: 0.55em;
    margin-right: 6px;
    color: #5a7999;
    transition: transform 0.2s;
    width: 12px;
    text-align: center;
  }
  .tree-folder-header.collapsed .tree-arrow { transform: rotate(-90deg); }
  .tree-folder-header .tree-folder-icon { font-size: 0.9em; margin-right: 6px; }
  .tree-folder-header .tree-folder-name { font-size: 0.85em; font-weight: 600; color: #c8d6e5; }
  .tree-folder-header .tree-count {
    margin-left: auto;
    font-size: 0.65em;
    background: rgba(255,255,255,0.1);
    padding: 1px 7px;
    border-radius: 8px;
    color: #7a9ab5;
  }

  /* Tree children */
  .tree-children { overflow: hidden; }
  .tree-children.hidden { display: none; }

  /* Tree file (leaf) */
  .tree-file {
    display: flex;
    align-items: center;
    padding: 6px 18px 6px 13px;
    text-decoration: none;
    color: var(--sidebar-text);
    font-size: 0.82em;
    transition: all 0.15s;
    cursor: pointer;
    border-left: 3px solid transparent;
  }
  .tree-file:hover { background: var(--hover-bg); color: #ddd; }
  .tree-file.active {
    background: var(--active-bg);
    color: #fff;
    border-left-color: var(--accent);
  }
  .tree-file.hidden-file { display: none; }
  .tree-file .tree-file-icon { font-size: 0.85em; margin-right: 6px; flex-shrink: 0; }
  .tree-file .tree-file-name { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .tree-file .tree-file-diff {
    margin-left: 6px;
    font-size: 0.72em;
    color: #f0c040;
    flex-shrink: 0;
  }
  .tree-checkmark {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    transition: all 0.2s;
    margin-right: 2px;
  }
  .tree-checkmark.mastered {
    color: #2ecc71;
    font-weight: 700;
    font-size: 0.95em;
  }
  .tree-file.mastered .tree-file-name {
    color: #7dcea0;
  }

  /* ====== MAIN ====== */
  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: #fafbfc;
  }
  .main-header {
    padding: 14px 24px;
    background: #fff;
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .main-header .breadcrumb {
    font-size: 0.78em;
    color: #999;
  }
  .main-header .current-title {
    font-size: 1.05em;
    font-weight: 700;
    color: #2c3e50;
  }
  .main-content {
    flex: 1;
    border: none;
    width: 100%;
    background: #fff;
  }
  .welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #bbb;
  }
  .welcome .icon { font-size: 4em; margin-bottom: 16px; }
  .welcome h2 { color: #999; font-weight: 400; }

  /* Scrollbar */
  .sidebar::-webkit-scrollbar { width: 5px; }
  .sidebar::-webkit-scrollbar-track { background: transparent; }
  .sidebar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }
  .sidebar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
  .tree-nav::-webkit-scrollbar { width: 4px; }
  .tree-nav::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }

  @media (max-width: 768px) {
    .sidebar { width: 100%; min-width: 100%; height: auto; max-height: 45vh; }
    .main { height: 55vh; }
    body { flex-direction: column; }
  }
</style>
</head>
<body>

<!-- ====== SIDEBAR ====== -->
<aside class="sidebar">
  <div class="sidebar-header">
    <h1>📚 cici_study_math</h1>
    <div class="subtitle">二次根式 · 最值问题 · 几何综合 · 函数与统计</div>
    <button class="sidebar-toggle" onclick="toggleSidebar()" title="收起侧边栏">◀</button>
  </div>

  <!-- 知识点筛选 -->
  <div class="filter-panel" id="topicFilter">
    <div class="filter-panel-header collapsed" onclick="toggleFilter('topicFilter')">
      <span class="arrow">▼</span>
      <span class="filter-panel-title">知识点筛选</span>
      <span class="clear-btn" onclick="event.stopPropagation();clearTopicFilter()">✕ 清除</span>
    </div>
    <div class="filter-panel-body hidden" id="topicFilterBody">
      ${allTopics.map(t => `<span class="filter-tag" data-topic="${t}" onclick="filterByTopic(this,'${t}')">${t}</span>`).join('')}
    </div>
  </div>

  <!-- 题型筛选 -->
  <div class="filter-panel" id="typeFilter">
    <div class="filter-panel-header collapsed" onclick="toggleFilter('typeFilter')">
      <span class="arrow">▼</span>
      <span class="filter-panel-title">题型筛选</span>
      <span class="clear-btn" onclick="event.stopPropagation();clearTypeFilter()">✕ 清除</span>
    </div>
    <div class="filter-panel-body hidden" id="typeFilterBody">
      ${allTypes.map(t => `<span class="filter-tag" data-type="${t}" onclick="filterByType(this,'${t}')">${t}</span>`).join('')}
    </div>
  </div>

  <!-- 树形导航 -->
  <nav class="tree-nav">
    <ul>
      ${buildTreeHTML()}
    </ul>
  </nav>
</aside>
<button class="sidebar-reopen" onclick="toggleSidebar()" title="展开侧边栏">▶</button>
<!-- ====== MAIN ====== -->
<main class="main">
  <div class="main-header">
    <span class="breadcrumb" id="breadcrumb">cici_study_math</span>
    <span class="current-title" id="currentTitle">欢迎使用</span>
  </div>
  <div id="contentWrapper" class="main-content" style="display:flex;align-items:center;justify-content:center;">
    <div class="welcome" id="welcomeMsg">
      <div class="icon">📖</div>
      <h2>请从左侧导航选择题目</h2>
      <p style="color:#bbb;font-size:0.85em;">点击题目查看详细解答、知识点总结和举一反三</p>
    </div>
  </div>
  <iframe id="contentFrame" class="main-content" style="display:none;" sandbox="allow-same-origin allow-scripts"></iframe>
</main>

<script>
let activeTopic = null;
let activeType = null;
let currentFile = null;
let sidebarOpen = true;

// ====== Sidebar toggle ======
function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.querySelector('.sidebar-toggle');
  const reopenBtn = document.querySelector('.sidebar-reopen');
  if (sidebarOpen) {
    sidebar.classList.remove('collapsed');
    toggleBtn.textContent = '◀';
    toggleBtn.title = '收起侧边栏';
    if (reopenBtn) reopenBtn.style.display = '';
  } else {
    sidebar.classList.add('collapsed');
    toggleBtn.textContent = '▶';
    toggleBtn.title = '展开侧边栏';
  }
}

// ====== Mastered toggle (双击标记掌握) ======
function toggleMastered(id) {
  const checkEl = document.getElementById('check-' + id);
  const fileEl = checkEl?.closest('.tree-file');
  if (!checkEl || !fileEl) return;
  const isMastered = checkEl.classList.toggle('mastered');
  fileEl.classList.toggle('mastered', isMastered);
  checkEl.textContent = isMastered ? '✓' : '';
  // 保存到 localStorage
  const mastered = JSON.parse(localStorage.getItem('mastered') || '[]');
  const idx = mastered.indexOf(id);
  if (isMastered && idx === -1) mastered.push(id);
  if (!isMastered && idx !== -1) mastered.splice(idx, 1);
  localStorage.setItem('mastered', JSON.stringify(mastered));
}

// ====== Filter panel toggle ======
function toggleFilter(panelId) {
  const panel = document.getElementById(panelId);
  const header = panel.querySelector('.filter-panel-header');
  const body = panel.querySelector('.filter-panel-body');
  const isCollapsed = body.classList.contains('hidden');
  if (isCollapsed) {
    body.classList.remove('hidden');
    header.classList.remove('collapsed');
  } else {
    body.classList.add('hidden');
    header.classList.add('collapsed');
  }
}

// ====== Tree folder toggle ======
function toggleFolder(header) {
  const children = header.nextElementSibling;
  const isCollapsed = children.classList.contains('hidden');
  if (isCollapsed) {
    children.classList.remove('hidden');
    header.classList.remove('collapsed');
  } else {
    children.classList.add('hidden');
    header.classList.add('collapsed');
  }
}

// ====== Load problem into iframe ======
function loadProblem(linkEl, file) {
  // Update active state
  document.querySelectorAll('.tree-file').forEach(el => el.classList.remove('active'));
  linkEl.classList.add('active');
  currentFile = file;

  // Update header
  document.getElementById('breadcrumb').textContent = '题目详情';
  document.getElementById('currentTitle').textContent = linkEl.querySelector('.tree-file-name').textContent;

  // Show iframe, hide welcome
  document.getElementById('welcomeMsg').style.display = 'none';
  const frame = document.getElementById('contentFrame');
  frame.style.display = 'block';
  frame.src = file;

  // Also update contentWrapper to not use flex centering when showing iframe
  document.getElementById('contentWrapper').style.display = 'none';
  frame.style.display = 'block';

  // 保存当前题目到 localStorage（刷新后恢复）
  const id = linkEl.getAttribute('data-id');
  if (id) localStorage.setItem('lastProblemId', id);
}

// ====== Topic filter ======
function filterByTopic(tagEl, topic) {
  if (activeTopic === topic) {
    clearTopicFilter();
    return;
  }
  activeTopic = topic;
  activeType = null;
  updateFilterUI();
  applyFilters();
}

function clearTopicFilter() {
  activeTopic = null;
  updateFilterUI();
  applyFilters();
}

// ====== Type filter ======
function filterByType(tagEl, type) {
  if (activeType === type) {
    clearTypeFilter();
    return;
  }
  activeType = type;
  activeTopic = null;
  updateFilterUI();
  applyFilters();
}

function clearTypeFilter() {
  activeType = null;
  updateFilterUI();
  applyFilters();
}

function updateFilterUI() {
  document.querySelectorAll('#topicFilterBody .filter-tag').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-topic') === activeTopic);
  });
  document.querySelectorAll('#typeFilterBody .filter-tag').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-type') === activeType);
  });
}

function applyFilters() {
  document.querySelectorAll('.tree-file').forEach(el => {
    let show = true;
    const id = el.getAttribute('data-id');
    const fileTopics = el.getAttribute('data-topics').split(',');
    const fileType = el.getAttribute('data-type');

    if (activeTopic && !fileTopics.includes(activeTopic)) show = false;
    if (activeType && fileType !== activeType) show = false;

    el.classList.toggle('hidden-file', !show);
  });

  // Auto-expand folders that have visible children
  document.querySelectorAll('.tree-folder').forEach(folder => {
    const children = folder.querySelector('.tree-children');
    const visibleFiles = children.querySelectorAll('.tree-file:not(.hidden-file)');
    if (visibleFiles.length > 0) {
      children.classList.remove('hidden');
      folder.querySelector('.tree-folder-header').classList.remove('collapsed');
    }
  });
}

// ====== Keyboard ======
document.addEventListener('keydown', function(e) {
  const visibleFiles = [...document.querySelectorAll('.tree-file:not(.hidden-file)')];
  if (visibleFiles.length === 0) return;
  const currentIdx = visibleFiles.findIndex(el => el.classList.contains('active'));
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    const next = (currentIdx + 1) % visibleFiles.length;
    visibleFiles[next].click();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    const prev = (currentIdx - 1 + visibleFiles.length) % visibleFiles.length;
    visibleFiles[prev].click();
  }
});

// Auto-load first problem
document.addEventListener('DOMContentLoaded', function() {
  // 恢复已掌握的标记
  try {
    const mastered = JSON.parse(localStorage.getItem('mastered') || '[]');
    mastered.forEach(id => {
      const checkEl = document.getElementById('check-' + id);
      const fileEl = checkEl?.closest('.tree-file');
      if (checkEl && fileEl) {
        checkEl.classList.add('mastered');
        checkEl.textContent = '✓';
        fileEl.classList.add('mastered');
      }
    });
  } catch(e) {}

  // 恢复上次打开的题目
  const lastId = localStorage.getItem('lastProblemId');
  let targetFile = null;
  if (lastId) {
    targetFile = document.querySelector('.tree-file[data-id="' + lastId + '"]');
  }
  if (!targetFile) {
    targetFile = document.querySelector('.tree-file');
  }
  if (targetFile) {
    setTimeout(() => targetFile.click(), 200);
  }
});
</script>

</body>
</html>`;

fs.writeFileSync('./index.html', indexHtml);
console.log('  ✓ index.html');
console.log(`\n✅ 项目生成完成！`);
console.log(`   index.html + ${problems.length} 个题目页面`);
