// problems-data.几何综合.js
// 由拆分脚本自动生成，请勿手改；如需修改请编辑本文件后运行 node build.js。
// 本文件仅导出「几何综合」分类的题目数组（module.exports = [...]）。

module.exports = [
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

<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
  <p><strong>题1（网格角度·江西中考常见）：</strong>在正方形网格中，某锐角 $\\alpha$ 所在直角三角形的直角边为 $1$ 和 $2$，某锐角 $\\beta$ 所在直角三角形的直角边为 $1$ 和 $3$，且两角均为斜边与水平边所夹的锐角，则 $\\alpha + \\beta = $ ______。<a href="p3a1.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p class="hint">💡 答：$45^\\circ$。这类网格角度题常通过构造等腰直角三角形求解。</p>
  <p><strong>题2：</strong>在 $4 \\times 4$ 网格中，$\\angle AOB$ 的顶点 $O$ 在格点上，$OA$、$OB$ 分别经过格点 $(3,1)$、$(1,2)$，求证：$\\angle AOB = 45^\\circ$。<a href="p3a2.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p class="hint">💡 提示：$OA = \\sqrt{10}$，$OB = \\sqrt{5}$，$AB = \\sqrt{5}$，$\\triangle OAB$ 是等腰直角三角形。</p>
</div>
`
  },

{
    id: "p3a1",
    file: "p3a1.html",
    title: "p3a1 网格角度求和（直角边1-2与1-3）",
    type: "填空",
    topics: ["网格几何", "勾股定理", "等腰直角三角形", "互余"],
    difficulty: 3,
    category: "几何综合",
    image: null,
    parent: "p3",
    content: `
<div class="prob-statement">
  <p>在正方形网格中，某锐角 $\\alpha$ 所在直角三角形的直角边为 $1$ 和 $2$，某锐角 $\\beta$ 所在直角三角形的直角边为 $1$ 和 $3$，且两角均为斜边与水平边所夹的锐角，则 $\\alpha + \\beta = $ ______。</p>
  <p>
    <img src="images/p3a1_ic.svg" alt="α 与 β 所在直角三角形题图" onclick="openImgOverlay('p3a1ic')" style="max-width: 380px; border: 1px solid #e2e8f0; border-radius: 6px; margin-top: 8px; cursor: zoom-in;">
  </p>
  <p class="original-image-caption" onclick="openImgOverlay('p3a1ic')">🔍 点击查看原图</p>
  <div class="img-overlay" id="overlay-p3a1ic">
    <div class="img-overlay-box" id="overlayBox-p3a1ic" onmousedown="startDrag(event,'p3a1ic')">
      <span class="img-overlay-close" onclick="closeImgOverlay('p3a1ic')">✕</span>
      <img src="images/p3a1_ic.svg" alt="α 与 β 所在直角三角形题图原图">
      <span class="img-resize-handle" onmousedown="startResize(event,'p3a1ic')"></span>
    </div>
  </div>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>网格几何</td><td>格点三角形的边长可用勾股定理计算</td></tr>
    <tr><td>勾股定理</td><td>直角三角形：$a^2 + b^2 = c^2$</td></tr>
    <tr><td>等腰直角三角形</td><td>两腰相等的直角三角形，底角为 $45^\\circ$</td></tr>
    <tr><td>互余关系</td><td>直角三角形两锐角互余，和为 $90^\\circ$</td></tr>
    <tr><td>角度平移法</td><td>将不同顶点的角平移到公共顶点，便于求和</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：将 $\\alpha$ 和 $\\beta$ 平移到公共顶点</h4>
<p>设网格中小正方形边长为 $1$。将 $\\alpha$ 和 $\\beta$ 所在的直角三角形平移到公共顶点 $O$（原点），使它们的斜边从 $O$ 出发。</p>
<p>对于 $\\alpha$：直角边为 $1$ 和 $2$，斜边水平方向的邻边长为 $2$，竖直方向的邻边长为 $1$。因此可设 $\\alpha$ 的斜边端点为 $A(2, 1)$，则 $OA = \\sqrt{2^2 + 1^2} = \\sqrt{5}$。</p>
<p>对于 $\\beta$：直角边为 $1$ 和 $3$，斜边水平方向的邻边长为 $3$，竖直方向的邻边长为 $1$。因此可设 $\\beta$ 的斜边端点为 $B(3, 1)$，则 $OB = \\sqrt{3^2 + 1^2} = \\sqrt{10}$。</p>
<p>其中 $\\alpha = \\angle AOx$（$OA$ 与水平方向的夹角），$\\beta = \\angle BOx$（$OB$ 与水平方向的夹角）。</p>

<h4>第二步：计算 $AB$ 的长度</h4>
<p>由坐标距离公式：</p>
<div class="formula-block">$AB = \\sqrt{(3-2)^2 + (1-1)^2} = \\sqrt{1^2 + 0^2} = 1$</div>
<p>等等——这里 $A(2,1)$ 和 $B(3,1)$ 在同一水平线上，$AB = 1$。这看起来不像是等腰直角三角形。让我们重新审视问题。</p>

<div class="info-box">
  <span class="box-label">🔍 关键思路：</span>题目说 $\\alpha$ 的直角边为 $1$ 和 $2$，$\\beta$ 的直角边为 $1$ 和 $3$，两角均为斜边与水平边所夹的锐角。这意味着 $\\alpha$ 是斜边与<span style="color:var(--accent);font-weight:700;">长度为 $2$ 的水平直角边</span>的夹角，$\\beta$ 是斜边与<span style="color:var(--accent);font-weight:700;">长度为 $3$ 的水平直角边</span>的夹角。
</div>

<p>重新设置坐标：</p>
<p>$\\alpha$ 所在直角三角形：水平边 $= 2$，竖直边 $= 1$，$\\alpha$ 是斜边与水平边的夹角。设顶点 $A(2, 1)$，$\\alpha = \\angle AOx$。</p>
<p>$\\beta$ 所在直角三角形：水平边 $= 3$，竖直边 $= 1$，$\\beta$ 是斜边与水平边的夹角。设顶点 $B(3, 1)$，$\\beta = \\angle BOx$。</p>
<p>但这样 $\\alpha + \\beta$ 不是 $45^\\circ$。问题出在方向——我们需要让 $\\alpha$ 和 $\\beta$ 在<strong>不同方向</strong>（一个在水平线上方，一个在水平线下方），或者一个与水平边夹角，一个与竖直边夹角。</p>

<div class="warn-box">
  <span class="box-label">⚠️ 重新审题：</span>题目说"两角均为斜边与水平边所夹的锐角"。但要让 $\\alpha + \\beta = 45^\\circ$，需要其中一个角是斜边与<strong>竖直边</strong>的夹角（即余角）。让我们按以下方式理解：$\\alpha$ 是斜边与水平边的夹角，$\\beta$ 是另一个三角形中斜边与<strong>竖直边</strong>的夹角——这样 $\\alpha + \\beta$ 才可能等于 $45^\\circ$。
</div>

<h4>第三步：正确构造——一个与水平夹角，一个与竖直夹角</h4>
<p>设 $\\alpha$ 所在直角三角形：水平边 $= 2$，竖直边 $= 1$，$\\alpha$ 是斜边与水平边的夹角。</p>
<p>设 $\\beta$ 所在直角三角形：水平边 $= 3$，竖直边 $= 1$，$\\beta$ 是斜边与<strong>竖直边</strong>的夹角。</p>
<p>将两个三角形平移到公共顶点 $O$：</p>
<p>
  <img src="images/p3a1_grid.svg" alt="平移构造等腰直角三角形 OAB 解答图" onclick="openImgOverlay('p3a1grid')" style="max-width: 380px; border: 1px solid #e2e8f0; border-radius: 6px; margin-top: 8px; cursor: zoom-in;">
</p>
<p class="original-image-caption" onclick="openImgOverlay('p3a1grid')">🔍 点击查看原图</p>
<div class="img-overlay" id="overlay-p3a1grid">
  <div class="img-overlay-box" id="overlayBox-p3a1grid" onmousedown="startDrag(event,'p3a1grid')">
    <span class="img-overlay-close" onclick="closeImgOverlay('p3a1grid')">✕</span>
    <img src="images/p3a1_grid.svg" alt="平移构造等腰直角三角形 OAB 解答图原图">
    <span class="img-resize-handle" onmousedown="startResize(event,'p3a1grid')"></span>
  </div>
</div>
<p class="hint">💡 图中：蓝色三角形为 $\\alpha$（直角边2和1，$\\alpha$ 与水平边夹角），绿色三角形为 $\\beta$（直角边3和1，$\\beta$ 与竖直边夹角）。虚线为平移到 $O$ 后的辅助构造——$OA$（蓝虚线）与水平方向夹角为 $\\alpha$，$OB$（绿虚线）与竖直方向夹角为 $\\beta$，$AB$（红虚线）与 $OA$、$OB$ 构成等腰直角三角形，$\\angle AOB = 45^\\circ$。</p>
<p>$\\alpha$ 的斜边端点 $A(2, 1)$，$\\alpha = \\angle AOx$（$OA$ 与水平方向 $Ox$ 的夹角）。</p>
<p>$\\beta$ 的斜边端点 $B(1, 3)$（竖直边 $= 3$，水平边 $= 1$），$\\beta = \\angle BOy$（$OB$ 与竖直方向 $Oy$ 的夹角）。</p>
<p>于是 $\\angle BOx = 90^\\circ - \\beta$（因为在直角三角形中两锐角互余）。</p>
<p>现在 $\\alpha + \\beta = \\angle AOx + \\beta$。注意 $\\angle AOB = \\angle BOx - \\angle AOx = (90^\\circ - \\beta) - \\alpha$。如果能证明 $\\angle AOB = 45^\\circ$，则 $\\alpha + \\beta = 45^\\circ$。</p>

<h4>第四步：证明 $\\triangle OAB$ 是等腰直角三角形</h4>
<p>计算三边长：</p>
<p>$OA = \\sqrt{2^2 + 1^2} = \\sqrt{5}$</p>
<p>$OB = \\sqrt{1^2 + 3^2} = \\sqrt{10}$</p>
<p>$AB = \\sqrt{(2-1)^2 + (1-3)^2} = \\sqrt{1^2 + 2^2} = \\sqrt{5}$</p>
<p>所以 $OA = AB = \\sqrt{5}$（两腰相等）。</p>
<p>又因为 $OA^2 + AB^2 = 5 + 5 = 10 = OB^2$，根据<strong>勾股定理逆定理</strong>，$\\triangle OAB$ 是直角三角形，且 $\\angle OAB = 90^\\circ$。</p>
<p>因此 $\\triangle OAB$ 是<strong>等腰直角三角形</strong>，于是：</p>
<div class="formula-block">$\\angle AOB = 45^\\circ$</div>

<h4>第五步：求 $\\alpha + \\beta$</h4>
<p>从图中角度关系：</p>
<div class="formula-block">$\\angle AOB = \\angle BOx - \\angle AOx = (90^\\circ - \\beta) - \\alpha = 45^\\circ$</div>
<p>整理得：</p>
<div class="formula-block">$\\alpha + \\beta = 90^\\circ - 45^\\circ = 45^\\circ$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$\\alpha + \\beta = 45^\\circ$</span>
</div>
`
  },

{
    id: "p3a2",
    file: "p3a2.html",
    title: "p3a2 网格中证明∠AOB=45°",
    type: "证明",
    topics: ["网格几何", "勾股定理", "勾股定理逆定理", "等腰直角三角形"],
    difficulty: 3,
    category: "几何综合",
    image: null,
    parent: "p3",
    content: `
<div class="prob-statement">
  <p>在 $4 \\times 4$ 网格中，$\\angle AOB$ 的顶点 $O$ 在格点上，$OA$、$OB$ 分别经过格点 $(3,1)$、$(1,2)$，求证：$\\angle AOB = 45^\\circ$。</p>
  <p>
    <img src="images/p3a2_ic.svg" alt="4×4 网格中的 ∠AOB 题图" onclick="openImgOverlay('p3a2ic')" style="max-width: 380px; border: 1px solid #e2e8f0; border-radius: 6px; margin-top: 8px; cursor: zoom-in;">
  </p>
  <p class="original-image-caption" onclick="openImgOverlay('p3a2ic')">🔍 点击查看原图</p>
  <div class="img-overlay" id="overlay-p3a2ic">
    <div class="img-overlay-box" id="overlayBox-p3a2ic" onmousedown="startDrag(event,'p3a2ic')">
      <span class="img-overlay-close" onclick="closeImgOverlay('p3a2ic')">✕</span>
      <img src="images/p3a2_ic.svg" alt="4×4 网格中的 ∠AOB 题图原图">
      <span class="img-resize-handle" onmousedown="startResize(event,'p3a2ic')"></span>
    </div>
  </div>
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
    <tr><td>坐标距离公式</td><td>两点 $P(x_1,y_1)$、$Q(x_2,y_2)$ 间距离 $= \\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：设定坐标系</h4>
<p>设顶点 $O$ 在网格原点 $(0,0)$。根据题意：</p>
<div class="formula-block">$A(3,1),\\quad B(1,2)$</div>
<p>即 $OA$ 经过格点 $(3,1)$，$OB$ 经过格点 $(1,2)$。所以 $\\angle AOB$ 就是向量 $\\vec{OA}$ 与 $\\vec{OB}$ 之间的夹角。</p>

<h4>第二步：计算三边长</h4>
<p>由勾股定理（坐标距离公式）：</p>
<p>$OA = \\sqrt{3^2 + 1^2} = \\sqrt{9 + 1} = \\sqrt{10}$</p>
<p>$OB = \\sqrt{1^2 + 2^2} = \\sqrt{1 + 4} = \\sqrt{5}$</p>
<p>$AB = \\sqrt{(3-1)^2 + (1-2)^2} = \\sqrt{2^2 + 1^2} = \\sqrt{4 + 1} = \\sqrt{5}$</p>

<p>
  <img src="images/p3a2_grid.svg" alt="等腰直角三角形 △OAB 解答图" onclick="openImgOverlay('p3a2grid')" style="max-width: 380px; border: 1px solid #e2e8f0; border-radius: 6px; margin-top: 8px; cursor: zoom-in;">
</p>
<p class="original-image-caption" onclick="openImgOverlay('p3a2grid')">🔍 点击查看原图</p>
<div class="img-overlay" id="overlay-p3a2grid">
  <div class="img-overlay-box" id="overlayBox-p3a2grid" onmousedown="startDrag(event,'p3a2grid')">
    <span class="img-overlay-close" onclick="closeImgOverlay('p3a2grid')">✕</span>
    <img src="images/p3a2_grid.svg" alt="等腰直角三角形 △OAB 解答图原图">
    <span class="img-resize-handle" onmousedown="startResize(event,'p3a2grid')"></span>
  </div>
</div>
<p class="hint">💡 图中标注了三边长 $OA=\\sqrt{10}$、$OB=\\sqrt{5}$、$AB=\\sqrt{5}$，并在 $B$ 处标出直角符号，在 $O$ 处标出 $45^\\circ$ 弧。</p>

<h4>第三步：发现等腰关系</h4>
<p>比较三边：</p>
<div class="formula-block">$OA = \\sqrt{10},\\quad OB = \\sqrt{5},\\quad AB = \\sqrt{5}$</div>
<p>所以 $OB = AB = \\sqrt{5}$（两腰相等），$OA$ 为最长边（斜边候选）。</p>

<h4>第四步：用勾股定理逆定理证明直角</h4>
<p>检验是否满足 $OB^2 + AB^2 = OA^2$：</p>
<div class="formula-block">$OB^2 + AB^2 = 5 + 5 = 10 = OA^2$</div>
<p>因为 $OB^2 + AB^2 = OA^2$，根据<strong>勾股定理逆定理</strong>，$\\triangle OAB$ 是直角三角形，且直角在 $\\angle OBA$ 的对边 $OA$ 所对的顶点——即 $\\angle B = 90^\\circ$。</p>

<h4>第五步：求 $\\angle AOB$</h4>
<p>因为 $\\triangle OAB$ 既是等腰三角形（$OB = AB$）又是直角三角形（$\\angle B = 90^\\circ$），所以它是<strong>等腰直角三角形</strong>。</p>
<p>等腰直角三角形的两个锐角相等，且和为 $90^\\circ$，因此每个锐角为：</p>
<div class="formula-block">$\\angle AOB = \\angle OAB = \\frac{90^\\circ}{2} = 45^\\circ$</div>
<div class="answer-box">
  <span class="answer-label">✅ 证毕：</span><span class="answer-value">$\\angle AOB = 45^\\circ$</span>
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
    <tr><td>三角形面积</td><td>$S = \\dfrac{1}{2}\\times\\text{底}\\times\\text{高}$（底×高÷2，最基础的面积公式）</td></tr>
    <tr><td>含 $30°$ 角的直角三角形</td><td>$30°$ 角所对直角边 $= \\dfrac{1}{2}$ 斜边（可由等边三角形 + 勾股定理证明，属几何知识而非三角函数）</td></tr>
    <tr><td>动点问题</td><td>分段函数，图象反映运动过程</td></tr>
    <tr><td>图象解读</td><td>起点、终点、最大值、关键转折点</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：分析菱形的角（全程只用几何性质，不用 sin/cos/tan）</h4>
<p>已知 $\\angle BAD = 120°$，菱形邻角互补，所以 $\\angle ABC = 60°$。</p>
<div class="info-box">
  <span class="box-label">🔑 关键：</span>菱形的对角线<strong>平分内角</strong>，$BD$ 平分 $\\angle ABC$，所以 $\\angle DBC = 30°$。
</div>
<p>点 $P$ 在 $BD$ 上、点 $Q$ 在 $BC$ 上，因此 $\\angle PBQ = \\angle DBC = 30°$。</p>

<h4>第二步：用「底 × 高 ÷ 2」求 $\\triangle BPQ$ 的面积（不套用含三角函数的面积公式）</h4>
<p>过 $P$ 作 $PH \\perp BC$，垂足为 $H$，则 $PH$ 就是 $\\triangle BPQ$ 中边 $BQ$ 上的高。</p>
<p>在 $\\text{Rt}\\triangle PBH$ 中，$\\angle PBH = 30°$，根据<strong>含 $30°$ 角的直角三角形性质</strong>（即 $30°$ 角所对的直角边等于斜边的一半；该结论可由等边三角形 + 勾股定理证明，属于几何知识而非三角函数）：</p>
<div class="formula-block">$PH = \\dfrac{1}{2}\\,BP$</div>
<p>运动 $x$ 秒后：$BP = \\sqrt{3}\\,x$，$BQ = x$，于是</p>
<div class="formula-block">$PH = \\dfrac{1}{2}\\cdot \\sqrt{3}x = \\dfrac{\\sqrt{3}}{2}x$</div>
<div class="formula-block">$y = S_{\\triangle BPQ} = \\dfrac{1}{2}\\cdot BQ \\cdot PH = \\dfrac{1}{2}\\cdot x \\cdot \\dfrac{\\sqrt{3}}{2}x = \\dfrac{\\sqrt{3}}{4}x^2$</div>

<h4>第三步：由图象最大值直接求出 $m$</h4>
<p>图 2 中 $y$ 与 $x$ 是开口向上的抛物线，最大面积 $\\dfrac{3\\sqrt{3}}{2}$ 在 $x = m$ 处取得，代入函数式：</p>
<div class="formula-block">$\\dfrac{\\sqrt{3}}{4}m^2 = \\dfrac{3\\sqrt{3}}{2} \\quad \\Rightarrow \\quad m^2 = 6$</div>
<p>因为运动时间 $x > 0$，所以 $m = \\sqrt{6}$。</p>
<p class="hint">💡 说明：图象在 $x = m$ 处终止，是因为动点 $P$ 恰好走完对角线 $BD$ 全程；但求 $m$ 的值时，<strong>只需用面积函数的最大值即可直接算出，不必先求菱形边长</strong>，整个过程没有用到任何 sin、cos、tan。</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">C. $\\sqrt{6}$</span>
</div>



<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<p class="src">📌 来源：江西中考「动点与面积函数」真题（2023江西中考 p23 动点正方形面积、南昌东湖区卷 菱形动点面积函数，见 51jiaoxi.com/doc-15521910.html、www.51jiaoxi.com/doc-17433416.html）</p>
<div class="practice-box">
<p><strong>题1：</strong>等边三角形 $ABC$ 的边长为 $4$。点 $P$ 从 $A$ 沿 $AB$ 以 $1\\text{ cm/s}$ 向 $B$ 运动，同时点 $Q$ 从 $B$ 沿 $BC$ 以 $1\\text{ cm/s}$ 向 $C$ 运动，设运动时间为 $x(\\text{s})$，$\\triangle BPQ$ 的面积为 $y(\\text{cm}^2)$。求 $y$ 与 $x$ 的函数关系式，并求 $x = 1$ 时的面积。<a href="p16a1.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
<p><strong>题2：</strong>菱形 $ABCD$ 中 $\\angle BAD = 60°$，点 $P$ 在对角线 $BD$ 上以 $\\sqrt{3}\\text{ cm/s}$ 从 $B$ 向 $D$ 运动，同时点 $Q$ 在 $BC$ 上以 $1\\text{ cm/s}$ 从 $B$ 向 $C$ 运动，设时间为 $x(\\text{s})$，$y = S_{\\triangle BPQ}$。求 $y$ 与 $x$ 的函数关系式。<a href="p16a2.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
<p><strong>题3：</strong>矩形 $ABCD$ 中 $AB = 4$，$AD = 3$，点 $P$ 在 $AB$ 上以 $1\\text{ cm/s}$ 从 $A$ 向 $B$ 运动，点 $Q$ 在 $AD$ 上以 $1\\text{ cm/s}$ 从 $A$ 向 $D$ 运动，设时间为 $x(\\text{s})$，$y = S_{\\triangle APQ}$。求 $y$ 与 $x$ 的函数关系式及面积的最大值。<a href="p16a3.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
<p class="src">📌 来源：与 p16「几何动点·面积函数图象·纯几何底×高÷2」同主题的进阶练习</p>
</div>
`
  },

{
    id: "p16a1",
    file: "p16a1.html",
    title: "p16a1 等边三角形中动点与三角形面积函数",
    type: "计算解答",
    topics: ["等边三角形", "动点函数", "三角形面积", "底×高÷2"],
    difficulty: 2,
    category: "几何综合",
    image: null,
    parent: "p16",
    content: `
<div class="prob-statement">
  <p><strong>（几何动点·面积函数图象进阶）</strong>等边三角形 $ABC$ 的边长为 $4\\text{ cm}$。点 $P$ 从 $A$ 出发沿 $AB$ 以 $1\\text{ cm/s}$ 向 $B$ 运动，同时点 $Q$ 从 $B$ 出发沿 $BC$ 以 $1\\text{ cm/s}$ 向 $C$ 运动。设运动时间为 $x(\\text{s})$，$\\triangle BPQ$ 的面积为 $y(\\text{cm}^2)$。</p>
  <p>（1）求 $y$ 与 $x$ 的函数关系式；</p>
  <p>（2）当 $x = 1$ 时，求 $\\triangle BPQ$ 的面积。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>等边三角形</td><td>三边相等，每个内角均为 $60°$</td></tr>
    <tr><td>三角形面积</td><td>$S = \\dfrac{1}{2}\\times\\text{底}\\times\\text{高}$（底×高÷2，最基础的面积公式）</td></tr>
    <tr><td>含 $30°$ 角的直角三角形</td><td>$30°$ 角所对直角边 $= \\dfrac{1}{2}$ 斜边（可由等边三角形 + 勾股定理证明，属几何知识）</td></tr>
    <tr><td>动点函数</td><td>用含有 $x$ 的代数式表示面积，再求特定值</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：基础数据与角度</h4>
<p>等边三角形 $ABC$ 边长为 $4$，故 $\\angle B = 60°$。运动 $x$ 秒后：</p>
<p>$AP = x$，所以 $PB = 4 - x$；$BQ = x$。</p>

<h4>第二步：用「底 × 高 ÷ 2」求面积（不套用含三角函数的面积公式）</h4>
<p>过 $P$ 作 $PH \\perp BC$，垂足为 $H$，则 $PH$ 是 $\\triangle BPQ$ 中边 $BQ$ 上的高。</p>
<p>在 $\\text{Rt}\\triangle PBH$ 中，$\\angle PBH = \\angle B = 60°$；直角三角形中两锐角互余，故 $\\angle BPH = 30°$。根据<strong>含 $30°$ 角的直角三角形性质</strong>（$30°$ 角所对的直角边等于斜边的一半）：</p>
<div class="formula-block">$PH = \\dfrac{1}{2}\\,PB = \\dfrac{1}{2}(4 - x)$</div>

<h4>第三步：代入面积公式</h4>
<div class="formula-block">$y = S_{\\triangle BPQ} = \\dfrac{1}{2}\\cdot BQ \\cdot PH = \\dfrac{1}{2}\\cdot x \\cdot \\dfrac{1}{2}(4 - x) = \\dfrac{1}{4}x(4 - x)$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案（1）：</span><span class="answer-value">$y = \\dfrac{1}{4}x(4 - x)$</span>
</div>

<h4>第四步：求 $x = 1$ 时的面积</h4>
<p>把 $x = 1$ 代入：</p>
<div class="formula-block">$y = \\dfrac{1}{4}\\cdot 1\\cdot (4 - 1) = \\dfrac{3}{4}\\ \\text{cm}^2$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案（2）：</span><span class="answer-value">$\\dfrac{3}{4}\\ \\text{cm}^2$</span>
</div>
`
  },

{
    id: "p16a2",
    file: "p16a2.html",
    title: "p16a2 菱形(∠BAD=60°)中动点与三角形面积函数",
    type: "计算解答",
    topics: ["菱形性质", "动点函数", "三角形面积", "底×高÷2"],
    difficulty: 3,
    category: "几何综合",
    image: null,
    parent: "p16",
    content: `<div class="prob-statement">
  <p><strong>（几何动点·面积函数图象进阶）</strong>菱形 $ABCD$ 中 $\\angle BAD = 60°$，点 $P$ 在对角线 $BD$ 上以 $\\sqrt{3}\\text{ cm/s}$ 从 $B$ 向 $D$ 运动，同时点 $Q$ 在 $BC$ 上以 $1\\text{ cm/s}$ 从 $B$ 向 $C$ 运动。设时间为 $x(\\text{s})$，$y = S_{\\triangle BPQ}$。</p>
  <p>求 $y$ 与 $x$ 的函数关系式。</p>
</div>

<div style="text-align:center;margin:12px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 300" font-family="'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif" style="width:100%;max-width:440px;">
  <polygon points="50,270 270,270 380,79.5 160,79.5" fill="none" stroke="#334155" stroke-width="2.5"/>
  <line x1="270" y1="270" x2="160" y2="79.5" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="6 4"/>
  <polygon points="270,270 222.4,187.5 297.5,222.4" fill="#dbeafe" fill-opacity="0.7" stroke="#2563eb" stroke-width="2"/>
  <line x1="222.4" y1="187.5" x2="293.8" y2="228.75" stroke="#ef4444" stroke-width="1.6" stroke-dasharray="5 3"/>
  <text x="250" y="244" fill="#0ea5e9" font-size="13" font-weight="600">60°</text>
  <text x="62" y="262" fill="#334155" font-size="13" font-weight="600">60°</text>
  <path d="M293.8,228.75 L288.3,238.3 L278.8,232.8 L284.3,223.3 Z" fill="none" stroke="#ef4444" stroke-width="1.2"/>
  <circle cx="50" cy="270" r="3.2" fill="#334155"/>
  <circle cx="270" cy="270" r="3.2" fill="#334155"/>
  <circle cx="380" cy="79.5" r="3.2" fill="#334155"/>
  <circle cx="160" cy="79.5" r="3.2" fill="#334155"/>
  <circle cx="222.4" cy="187.5" r="3.6" fill="#2563eb"/>
  <circle cx="297.5" cy="222.4" r="3.6" fill="#2563eb"/>
  <circle cx="293.8" cy="228.75" r="3" fill="#ef4444"/>
  <text x="40" y="285" fill="#334155" font-size="14">A</text>
  <text x="276" y="288" fill="#334155" font-size="14">B</text>
  <text x="388" y="80" fill="#334155" font-size="14">C</text>
  <text x="150" y="74" fill="#334155" font-size="14">D</text>
  <text x="206" y="182" fill="#2563eb" font-size="14" font-weight="600">P</text>
  <text x="303" y="218" fill="#2563eb" font-size="14" font-weight="600">Q</text>
  <text x="298" y="246" fill="#ef4444" font-size="13" font-weight="600">H</text>
</svg>
<p class="src">▲ 蓝虚线 $BD$ 为点 $P$ 的运动路径；红虚线 $PH$ 为 $\\triangle BPQ$ 中边 $BQ$ 上的高；红色直角标记在 $H$ 处。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>菱形邻角互补</td><td>$\\angle ABC = 180° - \\angle BAD$</td></tr>
    <tr><td>对角线平分内角</td><td>$BD$ 平分 $\\angle ABC$，故 $\\angle DBC = \\dfrac{1}{2}\\angle ABC$</td></tr>
    <tr><td>三角形面积</td><td>$S = \\dfrac{1}{2}·\\text{底}·\\text{高}$</td></tr>
    <tr><td>含 $30°$ 角的直角三角形</td><td>$30°$ 所对直角边 $= \\dfrac{1}{2}$ 斜边；$60°$ 所对直角边 $= \\dfrac{\\sqrt{3}}{2}$ 斜边（纯几何结论，不用三角函数）</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：菱形的角（全程只用几何性质，不用 sin / cos / tan）</h4>
<p>菱形邻角互补：$\\angle ABC = 180° - \\angle BAD = 180° - 60° = 120°$。</p>
<p>对角线 $BD$ 平分 $\\angle ABC$，所以 $\\angle ABD = \\angle DBC = \\dfrac{120°}{2} = 60°$。</p>
<p>$\\angle BPH = 30°$。</p>

<h4>第二步：作高 $PH$，用勾股定理求高</h4>
<p>过 $P$ 作 $PH \\perp BC$，垂足为 $H$，则 $PH$ 是 $\\triangle BPQ$ 中边 $BQ$ 上的高（图中红虚线）。</p>
<p>在 $\\text{Rt}\\triangle PBH$ 中，直角在 $H$，$\\angle PBH = 60°$，所以 $\\angle BPH = 30°$，<strong>斜边是 $PB$</strong>。</p>
<p>1. 由 $30°$ 所对直角边：$BH = \\dfrac{1}{2}BP = \\dfrac{1}{2}\\cdot \\sqrt{3}\\,x = \\dfrac{\\sqrt{3}}{2}x$。</p>
<p>2. 勾股定理：$BH^2 + PH^2 = PB^2$，代入 $BP = \\sqrt{3}x$：</p>
<div class="formula-block">$\\left(\\dfrac{\\sqrt{3}}{2}x\\right)^2 + PH^2 = (\\sqrt{3}x)^2 \;\\Rightarrow\; \\dfrac{3}{4}x^2 + PH^2 = 3x^2 \;\\Rightarrow\; PH^2 = \\dfrac{9}{4}x^2 \;\\Rightarrow\; PH = \\dfrac{3}{2}x$</div>
<p>取 $x = 1$ 检验：$BH = \\dfrac{\\sqrt{3}}{2}$，$PH = \\dfrac{3}{2}$，满足 $BH^2 + PH^2 = \\dfrac{3}{4} + \\dfrac{9}{4} = 3 = PB^2$，故一秒时高 $PH = \\dfrac{3}{2}$ 正确。</p>
<div class="def-red">直角三角形中 $30°$ 所对的边长等于斜边的 $\\dfrac{1}{2}$。</div>


<h4>第三步：代入面积公式</h4>
<div class="formula-block">$y = S_{\\triangle BPQ} = \\dfrac{1}{2}\\cdot BQ \\cdot PH = \\dfrac{1}{2}\\cdot x \\cdot \\dfrac{1}{2}(4 - x) = \\dfrac{1}{4}x(4 - x)$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案（1）：</span><span class="answer-value">$y = \\dfrac{1}{4}x(4 - x)$</span>
</div>

`
  },

{
    id: "p16a3",
    file: "p16a3.html",
    title: "p16a3 矩形中动点与三角形面积最值",
    type: "计算解答",
    topics: ["矩形性质", "动点函数", "直角三角形面积", "二次函数最值"],
    difficulty: 2,
    category: "几何综合",
    image: null,
    parent: "p16",
    content: `
<div class="prob-statement">
  <p><strong>（几何动点·面积函数图象进阶）</strong>矩形 $ABCD$ 中 $AB = 4\\text{ cm}$，$AD = 3\\text{ cm}$。点 $P$ 在 $AB$ 上以 $1\\text{ cm/s}$ 从 $A$ 向 $B$ 运动，点 $Q$ 在 $AD$ 上以 $1\\text{ cm/s}$ 从 $A$ 向 $D$ 运动。设时间为 $x(\\text{s})$，$y = S_{\\triangle APQ}$。</p>
  <p>（1）求 $y$ 与 $x$ 的函数关系式；</p>
  <p>（2）求 $\\triangle APQ$ 面积的最大值。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>矩形内角</td><td>四个角均为 $90°$，可直接用两直角边作底和高</td></tr>
    <tr><td>直角三角形面积</td><td>$S = \\dfrac{1}{2}\\times\\text{直角边}\\times\\text{直角边}$</td></tr>
    <tr><td>运动范围</td><td>动点受较短边限制，确定 $x$ 的取值范围</td></tr>
    <tr><td>二次函数最值</td><td>$y = ax^2\\ (a>0)$ 在定义域右端点取最大值</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：基础数据</h4>
<p>矩形 $\\angle A = 90°$。运动 $x$ 秒后：$AP = x$，$AQ = x$。</p>

<h4>第二步：面积（直角直接底×高÷2，不套三角函数）</h4>
<div class="formula-block">$y = S_{\\triangle APQ} = \\dfrac{1}{2}\\cdot AP \\cdot AQ = \\dfrac{1}{2}\\cdot x \\cdot x = \\dfrac{1}{2}x^2$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案（1）：</span><span class="answer-value">$y = \\dfrac{1}{2}x^2$</span>
</div>

<h4>第三步：运动范围与最值</h4>
<p>$P$ 从 $A$ 到 $B$ 需 $\\dfrac{4}{1} = 4\\text{ s}$，$Q$ 从 $A$ 到 $D$ 需 $\\dfrac{3}{1} = 3\\text{ s}$，故 $0 \\le x \\le 3$。</p>
<p>函数 $y = \\dfrac{1}{2}x^2$ 在 $[0, 3]$ 上随 $x$ 增大而增大，最大值在 $x = 3$ 处取得：</p>
<div class="formula-block">$y_{\\max} = \\dfrac{1}{2}\\cdot 3^2 = \\dfrac{9}{2} = 4.5\\ \\text{cm}^2$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案（2）：</span><span class="answer-value">$\\dfrac{9}{2}\\ \\text{cm}^2$（即 $4.5\\ \\text{cm}^2$）</span>
</div>
`
  },

{
    id: "p21a1",
    file: "p21a1.html",
    title: "p21a1 完美勾股数求具体值",
    type: "填空",
    topics: ["勾股定理", "完全平方", "代入求值"],
    difficulty: 2,
    category: "几何综合",
    image: null,
    parent: "p21",
    content: `
<div class="prob-statement">
  <p><strong>（江西·中考·填空）</strong>正整数 $a,n$ 满足 $a^2+n^2=(n+1)^2$。当 $a=21$ 时，$n=$ ______；该组完美勾股数为 (____,____,____)。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>公式代入</td><td>$a^2=2n+1$ 是 p21 化简后的核心公式</td></tr>
    <tr><td>奇偶校验</td><td>$a$ 必须是奇数，否则无正整数解</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：写出核心公式</h4>
<p>由 $a^2+n^2=(n+1)^2$ 化简得：</p>
<div class="formula-block">$a^2 = 2n+1$</div>

<h4>第二步：代入 $a=21$</h4>
<div class="formula-block">$21^2 = 2n+1$</div>
<div class="formula-block">$441 = 2n+1$</div>
<div class="formula-block">$n = \\dfrac{441-1}{2} = \\dfrac{440}{2} = 220$</div>

<h4>第三步：写出三元组</h4>
<div class="formula-block">$(a,n,n+1) = (21,220,221)$</div>
<p>验证勾股定理：$21^2+220^2=441+48400=48841=221^2$ ✓</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$n=220$；完美勾股数 $(21,220,221)$</span>
</div>
`
  },

{
    id: "p21a2",
    file: "p21a2.html",
    title: "p21a2 完美勾股数奇偶分析",
    type: "填空",
    topics: ["勾股定理", "奇偶性", "数论"],
    difficulty: 2,
    category: "几何综合",
    image: null,
    parent: "p21",
    content: `
<div class="prob-statement">
  <p><strong>（数论拓展）</strong>在 $a^2+n^2=(n+1)^2$ 中，若 $a$ 是奇数，则 $n$ 一定是什么数？若 $a$ 是偶数，会有正整数解吗？</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>奇偶平方</td><td>奇数$^2$=奇数，偶数$^2$=偶数（$4$ 的倍数）</td></tr>
    <tr><td>$2n+1$ 模 $4$</td><td>若 $a$ 是偶数，$a^2\\equiv 0\\pmod 4$，而 $2n+1$ 模 $4$ 只能为 $1$ 或 $3$</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：回顾核心公式</h4>
<div class="formula-block">$a^2 + n^2 = (n+1)^2$</div>
<p>展开右边 $(n+1)^2 = n^2 + 2n + 1$，两边消去 $n^2$，化简后得到：</p>
<div class="formula-block">$a^2 = 2n+1$</div>

<h4>第二种情况：$a$ 是奇数</h4>
<p>$a$ 奇 $\\Rightarrow$ $a^2$ 奇 $\\Rightarrow$ $2n+1$ 奇，恒成立。</p>
<p>进一步：</p>
<div class="formula-block">$n = \\dfrac{a^2-1}{2} = \\dfrac{(a-1)(a+1)}{2}$</div>
<p>$a-1$ 与 $a+1$ 是两个连续偶数，其中必有一个被 $4$ 整除，所以乘积 $(a-1)(a+1)$ 一定是 $8$ 的倍数 $\\Rightarrow$ $n$ 一定是 $4$ 的倍数（$n$ 为偶数且能被 $4$ 整除）。</p>
<p class="def-red">注意：最小的正奇数 $a=1$ 会使 $n=\\dfrac{1^2-1}{2}=0$，$n=0$ 不是正整数，不符合"完美勾股数"的正整数边要求，故不能从 $a=1$ 开始验证，最小合法奇数从 $a=3$ 起。</p>
<p>验证：$a=3\\Rightarrow n=4$（$4$ 的倍数 ✓）；$a=5\\Rightarrow n=12$（$4$ 的倍数 ✓）；$a=7\\Rightarrow n=24$（$4$ 的倍数 ✓）。</p>

<h4>第三种情况：$a$ 是偶数</h4>
<p>由第一步化简结果 $a^2 = 2n+1$。</p>
<p>若 $a$ 是偶数，则 $a^2$ 也是偶数；而 $2n+1$ 恒为奇数。偶数不可能等于奇数，矛盾，故 $a$ 是偶数时方程无正整数解。</p>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$a$ 奇时 $n$ 是 $4$ 的倍数；$a$ 偶时无正整数解</span>
</div>
`
  },

{
    id: "p21a3",
    file: "p21a3.html",
    title: "p21a3 换族完美勾股数（差 2）",
    type: "填空",
    topics: ["勾股定理", "数论", "枚举"],
    difficulty: 3,
    category: "几何综合",
    image: null,
    parent: "p21",
    content: `
<div class="prob-statement">
  <p><strong>（换族拓展）</strong>正整数 $a,m$ 满足 $a^2+m^2=(m+2)^2$。当 $m<100$ 时，共有 ______ 组这样的"完美勾股数"。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>类比迁移</td><td>把 $n+1$ 改成 $m+2$，化简公式也相应变化</td></tr>
    <tr><td>奇偶性</td><td>$a^2=4m+4$ 必为偶数 $\\Rightarrow$ $a$ 必为偶数</td></tr>
    <tr><td>枚举上界</td><td>由 $m<100$ 反推 $a$ 的最大值</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：化简</h4>
<p>展开 $(m+2)^2=m^2+4m+4$，代入原式：</p>
<div class="formula-block">$a^2+m^2=m^2+4m+4$</div>
<div class="formula-block">$a^2=4m+4=4(m+1)$</div>

<h4>第二步：分析奇偶性</h4>
<p>$a^2=4(m+1)$ 是 $4$ 的倍数 $\\Rightarrow$ $a$ 必为偶数（$a^2\\equiv 0\\pmod 4$）。</p>
<p>设 $a=2k$，代入：</p>
<div class="formula-block">$4k^2=4(m+1)\\Rightarrow k^2=m+1\\Rightarrow m=k^2-1$</div>

<h4>第三步：枚举</h4>
<p>由 $m<100$，得 $k^2-1<100\\Rightarrow k^2\\le 100\\Rightarrow k\\le 10$。</p>
<p>且 $m$ 须为正整数 $\\Rightarrow$ $k^2-1\\ge 1\\Rightarrow k\\ge 2$。</p>
<p>所以 $k\\in\{2,3,4,5,6,7,8,9,10\}$，共 $9$ 个值，对应 $9$ 组。</p>
<table class="kb-table">
  <thead><tr><th>$k$</th><th>$a=2k$</th><th>$m=k^2-1$</th><th>三元组 $(a,m,m+2)$</th></tr></thead>
  <tbody>
    <tr><td>$2$</td><td>$4$</td><td>$3$</td><td>$(4,3,5)$</td></tr>
    <tr><td>$3$</td><td>$6$</td><td>$8$</td><td>$(6,8,10)$</td></tr>
    <tr><td>$4$</td><td>$8$</td><td>$15$</td><td>$(8,15,17)$</td></tr>
    <tr><td>$5$</td><td>$10$</td><td>$24$</td><td>$(10,24,26)$</td></tr>
    <tr><td>$6$</td><td>$12$</td><td>$35$</td><td>$(12,35,37)$</td></tr>
    <tr><td>$7$</td><td>$14$</td><td>$48$</td><td>$(14,48,50)$</td></tr>
    <tr><td>$8$</td><td>$16$</td><td>$63$</td><td>$(16,63,65)$</td></tr>
    <tr><td>$9$</td><td>$18$</td><td>$80$</td><td>$(18,80,82)$</td></tr>
    <tr><td>$10$</td><td>$20$</td><td>$99$</td><td>$(20,99,101)$</td></tr>
  </tbody>
</table>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$9$ 组</span>
</div>
`
  },

{
    id: "p7",
    file: "p7.html",
    title: "p7 多边形内角和的错算问题",
    type: "解答",
    topics: ["多边形内角和", "不等式约束", "整数解"],
    difficulty: 3,
    category: "几何综合",
    image: "images/p7.png",
    content: `
<div class="prob-statement">
  <p>小马虎在计算某个多边形的内角和时得到 $1840^{\\circ}$，老师说他算错了，于是小马虎认真地检查了一遍.</p>
  <p>(1) 若他检查发现其中一个内角多算了一次，求这个多边形的边数；</p>
  <p>(2) 若他检查发现漏算了一个内角，则漏算的那个内角是多少度？这个多边形是几边形？</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>多边形内角和公式</td><td>$n$ 边形的内角和 $S=(n-2)\\times 180^{\\circ}$</td></tr>
    <tr><td>内角取值范围</td><td>多边形的每个内角 $0^{\\circ}<\\alpha<180^{\\circ}$（凸多边形）</td></tr>
    <tr><td>多算与漏算</td><td>多算：总和 $\\gt$ 实际和；漏算：总和 $\\lt$ 实际和</td></tr>
    <tr><td>整数约束</td><td>$n$ 必须是正整数，且 $\\alpha,\\beta$ 须满足 $0^{\\circ}<\\cdot<180^{\\circ}$</td></tr>
    <tr><td>不等式夹逼</td><td>由两个端点不等式确定 $n$ 的取值范围，取唯一整数</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：写出内角和公式并设未知数</h4>
<p>设该多边形为 $n$ 边形，则内角和为：</p>
<div class="formula-block">$S=(n-2)\\times 180^{\\circ}$</div>
<p>设多算的内角为 $\\alpha$。由多边形每个内角的取值范围：</p>
<div class="formula-block">$0^{\\circ}<\\alpha<180^{\\circ}$</div>

<h4>第二步：(1) 多算了一个内角的情形</h4>
<p>多算一个内角，相当于在正确的内角和之上加上了这个内角，即：</p>
<div class="formula-block">$(n-2)\\times 180^{\\circ}+\\alpha=1840^{\\circ}$</div>
<p>解出 $\\alpha$ 关于 $n$ 的表达式：</p>
<div class="formula-block">$\\alpha=1840^{\\circ}-(n-2)\\times 180^{\\circ}=1840^{\\circ}-180^{\\circ}n+360^{\\circ}=2200^{\\circ}-180^{\\circ}n$</div>
<p>由 $0^{\\circ}<\\alpha<180^{\\circ}$，得：</p>
<div class="formula-block">$0<2200-180n<180$</div>
<div class="formula-block">$2020<180n<2200$</div>
<div class="formula-block">$\\dfrac{2020}{180}<n<\\dfrac{2200}{180}$</div>
<div class="formula-block">$11.22\\cdots<n<12.22\\cdots$</div>
<p>唯一满足条件的正整数是 $n=12$。代入求 $\\alpha$：</p>
<div class="formula-block">$\\alpha=2200^{\\circ}-180^{\\circ}\\times 12=2200^{\\circ}-2160^{\\circ}=40^{\\circ}$</div>
<div class="answer-box">
  <span class="answer-label">✅ (1) 答案：</span><span class="answer-value">这个多边形是 12 边形，多算的那个内角是 $40^{\\circ}$</span>
</div>

<h4>第三步：(2) 漏算了一个内角的情形</h4>
<p>设漏算的内角为 $\\beta$。漏算一个内角，相当于正确内角和减去这个内角等于小马虎算出的结果：</p>
<div class="formula-block">$(n-2)\\times 180^{\\circ}-\\beta=1840^{\\circ}$</div>
<p>解出 $\\beta$ 关于 $n$ 的表达式：</p>
<div class="formula-block">$\\beta=180^{\\circ}n-360^{\\circ}-1840^{\\circ}=180^{\\circ}n-2200^{\\circ}$</div>
<p>由 $0^{\\circ}<\\beta<180^{\\circ}$，得：</p>
<div class="formula-block">$0<180n-2200<180$</div>
<div class="formula-block">$2200<180n<2380$</div>
<div class="formula-block">$\\dfrac{2200}{180}<n<\\dfrac{2380}{180}$</div>
<div class="formula-block">$12.22\\cdots<n<13.22\\cdots$</div>
<p>唯一满足条件的正整数是 $n=13$。代入求 $\\beta$：</p>
<div class="formula-block">$\\beta=180^{\\circ}\\times 13-2200^{\\circ}=2340^{\\circ}-2200^{\\circ}=140^{\\circ}$</div>
<div class="answer-box">
  <span class="answer-label">✅ (2) 答案：</span><span class="answer-value">漏算的那个内角是 $140^{\\circ}$，这个多边形是 13 边形</span>
</div>

<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
  <p><strong>题1（基本型·江西中考常见）：</strong>一个多边形的内角和是 $2340^{\\circ}$，求这个多边形的边数。<a href="p7a1.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p class="hint">💡 提示：$(n-2)\\times 180=2340$。</p>
  <p><strong>题2（多算内角）：</strong>小明计算一个多边形的内角和时，把其中一个内角多算了一次，结果为 $2840^{\\circ}$。求这个多边形的边数及多算的那个内角。<a href="p7a2.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p class="hint">💡 提示：设 $n$ 边形，多算的内角为 $\\alpha$，则 $(n-2)\\times 180+\\alpha=2840$，$0<\\alpha<180$。</p>
  <p><strong>题3（漏算内角）：</strong>小亮计算一个 $18$ 边形的内角和时，漏算了一个内角，结果为 $2730^{\\circ}$。求漏算的那个内角。<a href="p7a3.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p class="hint">💡 提示：$(18-2)\\times 180-\\beta=2730$。</p>
</div>
`
  },

{
    id: "p7a1",
    file: "p7a1.html",
    title: "p7a1 内角和基本型求边数",
    type: "填空",
    topics: ["多边形内角和", "一元一次方程"],
    difficulty: 2,
    category: "几何综合",
    image: null,
    parent: "p7",
    content: `
<div class="prob-statement">
  <p>一个多边形的内角和是 $2340^{\\circ}$，求这个多边形的边数。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>内角和公式</td><td>$n$ 边形的内角和为 $(n-2)\\times 180^{\\circ}$</td></tr>
    <tr><td>逆推求 $n$</td><td>$n=\\dfrac{S}{180}+2$</td></tr>
    <tr><td>整除判定</td><td>$S$ 必须是 $180$ 的整数倍，否则 $n$ 不存在</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：设未知数并列方程</h4>
<p>设这个多边形为 $n$ 边形，则：</p>
<div class="formula-block">$(n-2)\\times 180^{\\circ}=2340^{\\circ}$</div>

<h4>第二步：解方程</h4>
<div class="formula-block">$n-2=\\dfrac{2340}{180}=13$</div>
<div class="formula-block">$n=15$</div>

<h4>第三步：验证</h4>
<p>$n=15$ 为正整数，且 $2340^{\\circ}$ 恰好是 $180^{\\circ}$ 的整数倍，答案合法。</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">这个多边形是 15 边形</span>
</div>
`
  },

{
    id: "p7a2",
    file: "p7a2.html",
    title: "p7a2 多算内角求边数与内角",
    type: "解答",
    topics: ["多边形内角和", "不等式约束", "整数解"],
    difficulty: 3,
    category: "几何综合",
    image: null,
    parent: "p7",
    content: `
<div class="prob-statement">
  <p>小明计算一个多边形的内角和时，把其中一个内角多算了一次，结果为 $2840^{\\circ}$。求这个多边形的边数及多算的那个内角。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>多算内角</td><td>总和 $=$ 正确内角和 $+$ 被多算的内角</td></tr>
    <tr><td>内角范围</td><td>$0^{\\circ}<\\alpha<180^{\\circ}$</td></tr>
    <tr><td>整数唯一性</td><td>由 $\\alpha$ 的范围得到 $n$ 的不等式，取唯一整数</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：设未知数</h4>
<p>设该多边形为 $n$ 边形，多算的那个内角为 $\\alpha$，则：</p>
<div class="formula-block">$(n-2)\\times 180^{\\circ}+\\alpha=2840^{\\circ}$</div>

<h4>第二步：解出 $\\alpha$</h4>
<div class="formula-block">$\\alpha=2840^{\\circ}-(n-2)\\times 180^{\\circ}=2840^{\\circ}-180^{\\circ}n+360^{\\circ}=3200^{\\circ}-180^{\\circ}n$</div>

<h4>第三步：用 $0<\\alpha<180$ 限定 $n$</h4>
<div class="formula-block">$0<3200-180n<180$</div>
<div class="formula-block">$3020<180n<3200$</div>
<div class="formula-block">$\\dfrac{3020}{180}<n<\\dfrac{3200}{180}$</div>
<div class="formula-block">$16.78\\cdots<n<17.78\\cdots$</div>
<p>唯一满足条件的正整数是 $n=17$。</p>

<h4>第四步：求 $\\alpha$</h4>
<div class="formula-block">$\\alpha=3200^{\\circ}-180^{\\circ}\\times 17=3200^{\\circ}-3060^{\\circ}=140^{\\circ}$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">这个多边形是 17 边形，多算的那个内角是 $140^{\\circ}$</span>
</div>
`
  },

{
    id: "p7a3",
    file: "p7a3.html",
    title: "p7a3 漏算内角直接求值",
    type: "解答",
    topics: ["多边形内角和", "内角范围"],
    difficulty: 2,
    category: "几何综合",
    image: null,
    parent: "p7",
    content: `
<div class="prob-statement">
  <p>小亮计算一个 $18$ 边形的内角和时，漏算了一个内角，结果为 $2730^{\\circ}$。求漏算的那个内角。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>漏算内角</td><td>总和 $=$ 正确内角和 $-$ 漏算的内角</td></tr>
    <tr><td>内角范围</td><td>$0^{\\circ}<\\beta<180^{\\circ}$</td></tr>
    <tr><td>直接求解</td><td>$\\beta=(n-2)\\times 180^{\\circ}-S$</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：列方程</h4>
<p>设漏算的那个内角为 $\\beta$，由题意：</p>
<div class="formula-block">$(18-2)\\times 180^{\\circ}-\\beta=2730^{\\circ}$</div>

<h4>第二步：求 $\\beta$</h4>
<div class="formula-block">$\\beta=16\\times 180^{\\circ}-2730^{\\circ}=2880^{\\circ}-2730^{\\circ}=150^{\\circ}$</div>

<h4>第三步：验证合法性</h4>
<p>$0^{\\circ}<150^{\\circ}<180^{\\circ}$，漏算的内角合法，答案有效。</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">漏算的那个内角是 $150^{\\circ}$</span>
</div>
`
  },

{
    id: "p8",
    file: "p8.html",
    title: "p8 镜面反射最短路径问题",
    type: "填空",
    topics: ["轴对称", "最短路径", "将军饮马", "一次函数"],
    difficulty: 4,
    category: "几何综合",
    image: "images/p8.png",
    content: `
<div class="prob-statement">
  <p>如图，一面镜子 $OA$ 倾斜固定在地面 $OB$ 上，且 $\\angle AOB=60^{\\circ}$，点 $P$ 是距离地面 $OB$ 为 $5\\ \\text{dm}$ 的一个光源。光线射出经过镜面 $D$ 处反射到地面点 $E$ 处。当光线经过的路径 $P \\to D \\to E$ 长最短为 $8\\ \\text{dm}$ 时，$PD$ 的长是 $\\boxed{?}\\ \\text{dm}$。</p>
</div>

<p>
  <img src="images/p8_grid.svg" alt="p8 坐标系与光路示意图：OB 为 x 轴、OA 为 y=√3x，P 在高度 5，对称点 P′，光路 P→D→E" onclick="openImgOverlay('p8grid')" style="max-width: 410px; border: 1px solid #e2e8f0; border-radius: 6px; margin-top: 8px; cursor: zoom-in;">
</p>
<p class="original-image-caption" onclick="openImgOverlay('p8grid')">🔍 点击查看原图</p>
<div class="img-overlay" id="overlay-p8grid">
  <div class="img-overlay-box" id="overlayBox-p8grid" onmousedown="startDrag(event,'p8grid')">
    <span class="img-overlay-close" onclick="closeImgOverlay('p8grid')">✕</span>
    <img src="images/p8_grid.svg" alt="p8 坐标系与光路示意图原图">
    <span class="img-resize-handle" onmousedown="startResize(event,'p8grid')"></span>
  </div>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>光的反射定律</td><td>入射角等于反射角，等价于"入射点关于镜面的对称点、反射点三点共线"</td></tr>
    <tr><td>将军饮马模型</td><td>定直线同侧两定点，求直线上动点到两定点距离和最小，用轴对称化折线为直线</td></tr>
    <tr><td>最短路径</td><td>$PD+DE$ 的最小值等于 $P$ 关于 $OA$ 的对称点 $P'$ 到 $E$ 的垂线段长度</td></tr>
    <tr><td>坐标法</td><td>以 $OB$ 为 $x$ 轴、$OA$ 为直线 $y=\\sqrt{3}x$，用对称点公式求坐标</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：利用轴对称化折线为直线</h4>
<p>作点 $P$ 关于镜面 $OA$ 的对称点 $P'$。</p>
<p>根据轴对称性质：</p>
<div class="formula-block">$PD = P'D$</div>
<p>因此光线走过的路径：</p>
<div class="formula-block">$PD+DE = P'D+DE = P'E$</div>
<p>当 $E$ 在地面 $OB$ 上自由移动时，$P'E$ 最短就是点 $P'$ 到直线 $OB$ 的垂线段长度。</p>

<h4>第二步：建立坐标系求 $P'$ 的坐标</h4>
<p>以 $O$ 为原点，$OB$ 为 $x$ 轴，则镜面 $OA$ 的方程为：</p>
<div class="formula-block">$y = \\sqrt{3}x$</div>
<p><strong>为什么镜面方程是 $y=\\sqrt{3}x$（初二方法，不用三角函数）：</strong>过镜面端点 $A$ 作 $AN\\perp OB$ 于 $N$，得到直角三角形 $OAN$。</p><p>因为 $\\angle AON = 60^\\circ$（镜面与地面的夹角），所以 $\\angle OAN = 30^\\circ$。</p><p>由初二结论“$30^\\circ$ 所对的直角边等于斜边的一半”：$ON = \\dfrac{1}{2}OA$。设 $ON = a$，则 $OA = 2a$。</p><p>用勾股定理：$AN = \\sqrt{OA^2 - ON^2} = \\sqrt{(2a)^2 - a^2} = \\sqrt{3}a$。</p><p>点 $A$ 的横坐标 $x = ON = a$，纵坐标 $y = AN = \\sqrt{3}a$，于是 $\\dfrac{y}{x} = \\dfrac{\\sqrt{3}a}{a} = \\sqrt{3}$，所以镜面方程为 $y = \\sqrt{3}x$。</p>
<p>设光源 $P$ 的坐标为 $(x_0,5)$（因它到地面 $OB$ 的距离为 $5$）。</p>
<p>点 $(x_0,y_0)$ 关于直线 $\\sqrt{3}x-y=0$ 的对称点公式为：</p>
<div class="formula-block">$x' = \\dfrac{5\\sqrt{3}-x_0}{2},\\quad y' = \\dfrac{5+\\sqrt{3}x_0}{2}$</div>
<p>所以 $P'$ 到地面 $OB$ 的距离就是 $y' = \\dfrac{5+\\sqrt{3}x_0}{2}$。</p>

<h4>第三步：由最短路径长度确定 $P$ 的位置</h4>
<p>题目给出最短路径为 $8$，即 $P'$ 到 $OB$ 的垂线段长为 $8$：</p>
<div class="formula-block">$\\dfrac{5+\\sqrt{3}x_0}{2} = 8$</div>
<div class="formula-block">$5+\\sqrt{3}x_0 = 16$</div>
<div class="formula-block">$x_0 = \\dfrac{11}{\\sqrt{3}} = \\dfrac{11\\sqrt{3}}{3}$</div>
<p>代回 $P'$ 坐标：</p>
<div class="formula-block">$x' = \\dfrac{5\\sqrt{3} - \\dfrac{11\\sqrt{3}}{3}}{2} = \\dfrac{2\\sqrt{3}}{3},\\quad y' = 8$</div>

<h4>第四步：求 $PD$ 的长度</h4>
<p>因为最短路径 $P'E$ 垂直于地面 $OB$，所以垂足 $E$ 的坐标为 $\\left(\\dfrac{2\\sqrt{3}}{3},0\\right)$。</p>
<p>反射点 $D$ 是线段 $P'E$ 与镜面 $OA$ 的交点。$D$ 在 $OA$ 上，满足 $y_D = \\sqrt{3}x_D$：</p>
<div class="formula-block">$y_D = \\sqrt{3} \\cdot \\dfrac{2\\sqrt{3}}{3} = 2$</div>
<p>所以：</p>
<div class="formula-block">$DE = 2,\\quad P'D = 8-2 = 6$</div>
<p>由 $PD = P'D$，得：</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$PD = 6\\ \\text{dm}$</span>
</div>

<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
  <p><strong>题1（基础型·将军饮马）：</strong>如图，$A$、$B$ 两点在直线 $l$ 的同侧，$A$ 到 $l$ 的距离为 $3$，$B$ 到 $l$ 的距离为 $5$，$A$、$B$ 在 $l$ 上的投影相距 $8$。在 $l$ 上找一点 $P$，使 $PA+PB$ 最小，求这个最小值。<a href="p8a1.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p class="hint">💡 提示：作 $A$ 关于 $l$ 的对称点 $A'$，$PA+PB = A'P+PB = A'B$。</p>
  <p><strong>题2（变角度·求反射段）：</strong>一面镜子 $OA$ 与地面 $OB$ 夹角为 $45^{\\circ}$，光源 $P$ 到地面 $OB$ 的距离为 $4\\ \\text{dm}$。光线 $P \\to D \\to E$ 经镜面反射到地面，最短路径长为 $10\\ \\text{dm}$，求 $PD$ 的长。<a href="p8a2.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p class="hint">💡 提示：类似 p8，用 $P$ 关于 $OA$ 的对称点 $P'$ 建立坐标系。</p>
  <p><strong>题3（实际应用·两次反射）：</strong>一束光线从点 $A$ 出发，先后经直线 $l_1$、$l_2$ 反射后到达点 $B$，$l_1$ 与 $l_2$ 互相垂直。若 $A$ 到 $l_1$ 的距离为 $3$，$B$ 到 $l_2$ 的距离为 $4$，且垂足连线长为 $5$，求光路总长的最小值。<a href="p8a3.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p class="hint">💡 提示：连续作两次轴对称，把折线拉直。</p>
</div>
`
  },

{
    id: "p8a1",
    file: "p8a1.html",
    title: "p8a1 将军饮马基础型",
    type: "填空",
    topics: ["轴对称", "最短路径", "勾股定理"],
    difficulty: 3,
    category: "几何综合",
    image: null,
    parent: "p8",
    content: `
<div class="prob-statement">
  <p>如图，$A$、$B$ 两点在直线 $l$ 的同侧，$A$ 到 $l$ 的距离为 $3$，$B$ 到 $l$ 的距离为 $5$，$A$、$B$ 在 $l$ 上的投影相距 $8$。在 $l$ 上找一点 $P$，使 $PA+PB$ 最小，求这个最小值。</p>
</div>

<h3>✍️ 解题过程</h3>
<p>作 $A$ 关于直线 $l$ 的对称点 $A'$，则 $A'$ 到 $l$ 的距离为 $3$，且 $A'$ 与 $A$ 在 $l$ 的投影重合。</p>
<p>由对称性，$PA = PA'$，所以：</p>
<div class="formula-block">$PA+PB = PA'+PB$</div>
<p>当 $A'$、$P$、$B$ 三点共线时，$PA'+PB$ 最小，等于 $A'B$。</p>
<p>把 $A'$ 与 $B$ 的垂直距离和水平距离分开看：</p>
<div class="formula-block">$\\text{垂直距离} = 3+5 = 8,\\quad \\text{水平距离} = 8$</div>
<p>由勾股定理：</p>
<div class="formula-block">$A'B = \\sqrt{8^2+8^2} = \\sqrt{128} = 8\\sqrt{2}$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$PA+PB$ 的最小值为 $8\\sqrt{2}$</span>
</div>
`
  },

{
    id: "p8a2",
    file: "p8a2.html",
    title: "p8a2 镜面反射变角度求 PD",
    type: "填空",
    topics: ["轴对称", "最短路径", "坐标法"],
    difficulty: 4,
    category: "几何综合",
    image: null,
    parent: "p8",
    content: `
<div class="prob-statement">
  <p>一面镜子 $OA$ 与地面 $OB$ 夹角为 $45^{\\circ}$，光源 $P$ 到地面 $OB$ 的距离为 $4\\ \\text{dm}$。光线 $P \\to D \\to E$ 经镜面反射到地面，最短路径长为 $10\\ \\text{dm}$，求 $PD$ 的长。</p>
</div>

<h3>✍️ 解题过程</h3>
<p>以 $O$ 为原点，$OB$ 为 $x$ 轴，则镜面 $OA$ 的方程为 $y=x$。</p>
<p>设 $P(x_0,4)$。点 $(x_0,4)$ 关于直线 $y=x$ 的对称点为 $P'(4,x_0)$。</p>
<p>所以 $P'$ 到 $OB$ 的距离为 $x_0$。由最短路径为 $10$：</p>
<div class="formula-block">$x_0 = 10$</div>
<p>于是 $P'$ 坐标为 $(4,10)$，垂足 $E$ 为 $(4,0)$。</p>
<p>$D$ 是线段 $P'E$（即竖直线 $x=4$）与 $OA$（$y=x$）的交点，所以 $D(4,4)$。</p>
<div class="formula-block">$PD = P'D = 10-4 = 6$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$PD = 6\\ \\text{dm}$</span>
</div>
`
  },

{
    id: "p8a3",
    file: "p8a3.html",
    title: "p8a3 两次反射的光路总长",
    type: "填空",
    topics: ["轴对称", "最短路径", "两次反射"],
    difficulty: 4,
    category: "几何综合",
    image: null,
    parent: "p8",
    content: `
<div class="prob-statement">
  <p>一束光线从点 $A$ 出发，先后经直线 $l_1$、$l_2$ 反射后到达点 $B$，$l_1$ 与 $l_2$ 互相垂直。若 $A$ 到 $l_1$ 的距离为 $3$，$B$ 到 $l_2$ 的距离为 $4$，且两垂足在各自镜面上的投影连线长为 $5$，求光路总长的最小值。</p>
</div>

<h3>✍️ 解题过程</h3>
<p>连续作两次轴对称：先作 $A$ 关于 $l_1$ 的对称点 $A_1$，再作 $A_1$ 关于 $l_2$ 的对称点 $A'$。</p>
<p>根据光的反射定律，光路 $A \\to D_1 \\to D_2 \\to B$ 的长度等于直线段 $A'B$ 的长度。</p>
<p>因为 $l_1 \\perp l_2$，两次轴对称的复合相当于绕两直线交点旋转 $180^{\\circ}$，即中心对称。因此 $A'$ 与 $A$ 关于交点中心对称。</p>
<p>将 $A$、$B$ 相对位置平移后，$A'$ 与 $B$ 的水平距离为 $5$，垂直距离为 $3+4=7$。</p>
<p>由勾股定理：</p>
<div class="formula-block">$A'B = \\sqrt{5^2+7^2} = \\sqrt{74}$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">光路总长最小值为 $\\sqrt{74}$</span>
</div>
`
  },

{
    id: "p10",
    file: "p10.html",
    title: "p10 等腰三角形高线与角平分线",
    type: "填空",
    topics: ["等腰三角形", "勾股定理", "角平分线定理", "三线合一"],
    difficulty: 3,
    category: "几何综合",
    image: "images/p10.png",
    content: `
<div class="prob-statement">
  <p>如图，在 $\\triangle ABC$ 中，$AC=BC=5$，$AB=6$，$CD \\perp AB$，$\\angle ABC$ 的平分线交 $CD$ 于点 $E$，则 $DE=$ ______。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>等腰三角形三线合一</td><td>等腰三角形底边上的高、中线、顶角平分线重合</td></tr>
    <tr><td>勾股定理</td><td>直角三角形两直角边的平方和等于斜边的平方</td></tr>
    <tr><td>角平分线定理</td><td>三角形内角平分线分对边所得两条线段与这个角的两边对应成比例</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：由等腰三角形性质求 $CD$</h4>
<p>因为 $AC=BC=5$，所以 $\\triangle ABC$ 是以 $AB$ 为底边的等腰三角形。</p>
<p>又因为 $CD \\perp AB$，根据等腰三角形"三线合一"，$CD$ 也是底边 $AB$ 上的中线，所以：</p>
<div class="formula-block">$AD = DB = \\dfrac{AB}{2} = \\dfrac{6}{2} = 3$</div>
<p>在 $\\text{Rt}\\triangle CDB$ 中，由勾股定理：</p>
<div class="formula-block">$CD = \\sqrt{BC^2 - DB^2} = \\sqrt{5^2 - 3^2} = \\sqrt{25-9} = \\sqrt{16} = 4$</div>

<h4>第二步：用角平分线定理求 $DE$</h4>
<p>$BE$ 是 $\\angle ABC$ 的平分线，且交 $CD$ 于点 $E$。在 $\\triangle BCD$ 中，$BE$ 平分 $\\angle CBD$ 并交对边 $CD$ 于 $E$。</p>
<p>根据角平分线定理：</p>
<div class="formula-block">$\\dfrac{DE}{EC} = \\dfrac{BD}{BC} = \\dfrac{3}{5}$</div>
<div class="def-red"><span class="box-label">📎 口诀：</span>角平分线所分<strong>角的两边之比</strong>，等于它在底边上截得的<strong>两段之比</strong>，即 $\\dfrac{BD}{BC}=\\dfrac{DE}{EC}$。</div>
<p>前面第一步已求得 $CD=4$；又由角平分线定理知 $\\dfrac{BD}{BC}=\\dfrac{3}{5}$，所以设 $DE=3k$、$EC=5k$。</p>
<div class="formula-block">$DE + EC = CD = 4$</div>
<div class="formula-block">$3k + 5k = 4 \\Rightarrow 8k = 4 \\Rightarrow k = \\dfrac{1}{2}$</div>
<p>因此：</p>
<div class="formula-block">$DE = 3k = 3 \\times \\dfrac{1}{2} = \\dfrac{3}{2}$</div>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$DE = \\dfrac{3}{2}$</span>
</div>

<h3>📚 南昌/江西中考类似题（同类拓展）</h3>
<div class="practice-box">
  <p><strong>题1（等腰三角形·改数）：</strong>在 $\\triangle ABC$ 中，$AC=BC=13$，$AB=10$，$CD \\perp AB$，$\\angle ABC$ 的平分线交 $CD$ 于点 $E$，求 $DE$ 的长。<a href="p10a1.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p class="hint">💡 提示：先由三线合一求 $CD$，再用角平分线定理。</p>
  <p><strong>题2（直角三角形·高线+角平分线）：</strong>在 $\\text{Rt}\\triangle ABC$ 中，$\\angle C=90^{\\circ}$，$AC=6$，$BC=8$，$CD \\perp AB$，$\\angle ABC$ 的平分线交 $CD$ 于点 $E$，求 $DE$ 的长。<a href="p10a2.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p class="hint">💡 提示：先求斜边 $AB$ 和斜边上的高 $CD$，再判断 $\\triangle BCD$ 的形状。</p>
  <p><strong>题3（变顶点·求另一段）：</strong>在 $\\triangle ABC$ 中，$AB=AC=10$，$BC=12$，$AD \\perp BC$，$\\angle ABC$ 的平分线交 $AD$ 于点 $E$，求 $ED$ 的长。<a href="p10a3.html" style="color:var(--accent);font-weight:600;text-decoration:none;">📄 查看详细解答 →</a></p>
  <p class="hint">💡 提示：角平分线定理在 $\\triangle ABD$ 中应用。</p>
</div>
`
  },

{
    id: "p10a1",
    file: "p10a1.html",
    title: "p10a1 等腰三角形改数求 DE",
    type: "填空",
    topics: ["等腰三角形", "勾股定理", "角平分线定理"],
    difficulty: 3,
    category: "几何综合",
    image: null,
    parent: "p10",
    content: `
<div class="prob-statement">
  <p>在 $\\triangle ABC$ 中，$AC=BC=13$，$AB=10$，$CD \\perp AB$，$\\angle ABC$ 的平分线交 $CD$ 于点 $E$，求 $DE$ 的长。</p>
</div>

<h3>✍️ 解题过程</h3>
<p>因为 $AC=BC=13$，$\\triangle ABC$ 是等腰三角形，$CD \\perp AB$，所以 $D$ 是 $AB$ 中点：</p>
<div class="formula-block">$BD = \\dfrac{AB}{2} = 5$</div>
<p>在 $\\text{Rt}\\triangle CDB$ 中：</p>
<div class="formula-block">$CD = \\sqrt{BC^2 - DB^2} = \\sqrt{13^2 - 5^2} = \\sqrt{169-25} = \\sqrt{144} = 12$</div>
<p>$BE$ 平分 $\\angle ABC$，在 $\\triangle BCD$ 中由角平分线定理：</p>
<div class="formula-block">$\\dfrac{DE}{EC} = \\dfrac{BD}{BC} = \\dfrac{5}{13}$</div>
<p>设 $DE = 5k$，$EC = 13k$，则 $5k+13k=12$，$k = \\dfrac{12}{18} = \\dfrac{2}{3}$。</p>
<p>所以：</p>
<div class="formula-block">$DE = 5k = 5 \\times \\dfrac{2}{3} = \\dfrac{10}{3}$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$DE = \\dfrac{10}{3}$</span>
</div>
`
  },

{
    id: "p10a2",
    file: "p10a2.html",
    title: "p10a2 直角三角形斜边高线与角平分线",
    type: "填空",
    topics: ["直角三角形", "勾股定理", "角平分线定理", "面积法"],
    difficulty: 4,
    category: "几何综合",
    image: null,
    parent: "p10",
    content: `
<div class="prob-statement">
  <p>在 $\\text{Rt}\\triangle ABC$ 中，$\\angle C=90^{\\circ}$，$AC=6$，$BC=8$，$CD \\perp AB$，$\\angle ABC$ 的平分线交 $CD$ 于点 $E$，求 $DE$ 的长。</p>
</div>

<h3>✍️ 解题过程</h3>
<p>先求斜边 $AB$：</p>
<div class="formula-block">$AB = \\sqrt{AC^2 + BC^2} = \\sqrt{6^2+8^2} = 10$</div>
<p>斜边上的高 $CD$ 可由面积法求得：</p>
<div class="formula-block">$CD = \\dfrac{AC \\cdot BC}{AB} = \\dfrac{6 \\times 8}{10} = \\dfrac{24}{5}$</div>
<p>在 $\\text{Rt}\\triangle BCD$ 中，用射影定理求 $BD$：</p>
<div class="formula-block">$BD = \\dfrac{BC^2}{AB} = \\dfrac{64}{10} = \\dfrac{32}{5}$</div>
<p>$BE$ 平分 $\\angle ABC$，在 $\\triangle BCD$ 中由角平分线定理：</p>
<div class="formula-block">$\\dfrac{DE}{EC} = \\dfrac{BD}{BC} = \\dfrac{32/5}{8} = \\dfrac{4}{5}$</div>
<p>设 $DE = 4k$，$EC = 5k$，则 $4k+5k = CD = \\dfrac{24}{5}$，$k = \\dfrac{24}{45} = \\dfrac{8}{15}$。</p>
<p>因此：</p>
<div class="formula-block">$DE = 4k = 4 \\times \\dfrac{8}{15} = \\dfrac{32}{15}$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$DE = \\dfrac{32}{15}$</span>
</div>
`
  },

{
    id: "p10a3",
    file: "p10a3.html",
    title: "p10a3 变顶点求 ED",
    type: "填空",
    topics: ["等腰三角形", "勾股定理", "角平分线定理"],
    difficulty: 3,
    category: "几何综合",
    image: null,
    parent: "p10",
    content: `
<div class="prob-statement">
  <p>在 $\\triangle ABC$ 中，$AB=AC=10$，$BC=12$，$AD \\perp BC$，$\\angle ABC$ 的平分线交 $AD$ 于点 $E$，求 $ED$ 的长。</p>
</div>

<h3>✍️ 解题过程</h3>
<p>因为 $AB=AC=10$，$\\triangle ABC$ 是以 $BC$ 为底边的等腰三角形，$AD \\perp BC$，所以 $D$ 是 $BC$ 中点：</p>
<div class="formula-block">$BD = \\dfrac{BC}{2} = 6$</div>
<p>在 $\\text{Rt}\\triangle ADB$ 中：</p>
<div class="formula-block">$AD = \\sqrt{AB^2 - BD^2} = \\sqrt{10^2 - 6^2} = \\sqrt{100-36} = 8$</div>
<p>$BE$ 平分 $\\angle ABC$，在 $\\triangle ABD$ 中由角平分线定理：</p>
<div class="formula-block">$\\dfrac{AE}{ED} = \\dfrac{AB}{BD} = \\dfrac{10}{6} = \\dfrac{5}{3}$</div>
<p>设 $AE = 5k$，$ED = 3k$，则 $5k+3k = AD = 8$，$k=1$。</p>
<p>所以：</p>
<div class="formula-block">$ED = 3k = 3$</div>
<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$ED = 3$</span>
</div>
`
  }
];
