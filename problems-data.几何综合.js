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
  <p>如图，在 $4 \\times 4$ 的正方形网格中，$\\\angle 1 + \\angle 2 = $ ______。</p>
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
    <tr><td>等腰直角三角形</td><td>两腰相等的直角三角形，底角为 $45^\\\circ$</td></tr>
    <tr><td>全等三角形</td><td>直角边对应相等的两个直角三角形全等（SAS）</td></tr>
    <tr><td>互余关系</td><td>直角三角形两锐角互余，和为 $90^\\circ$</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：在网格中标注关键点</h4>
<p>设每个小正方形边长为 $1$。原题中 <strong>$\\angle 1$ 的顶点在格点 $(1,0)$</strong>、<strong>$\\angle 2$ 的顶点在格点 $(1,1)$</strong>（见图中实色三角形与弧标）。为便于计算，把这两个角平移到左下角公共顶点 $O$，并取辅助格点：</p>
<div class="formula-block">$A(3,1),\\\quad C(1,2)$</div>
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
<p>过 $P$ 作 $PH \\\perp BC$，垂足为 $H$，则 $PH$ 就是 $\\triangle BPQ$ 中边 $BQ$ 上的高。</p>
<p>在 $\\text{Rt}\\triangle PBH$ 中，$\\angle PBH = 30°$，根据<strong>含 $30°$ 角的直角三角形性质</strong>（即 $30°$ 角所对的直角边等于斜边的一半；该结论可由等边三角形 + 勾股定理证明，属于几何知识而非三角函数）：</p>
<div class="formula-block">$PH = \\dfrac{1}{2}\\,BP$</div>
<p>运动 $x$ 秒后：$BP = \\sqrt{3}\\,x$，$BQ = x$，于是</p>
<div class="formula-block">$PH = \\dfrac{1}{2}\\cdot \\sqrt{3}x = \\dfrac{\\sqrt{3}}{2}x$</div>
<div class="formula-block">$y = S_{\\triangle BPQ} = \\dfrac{1}{2}\\cdot BQ \\cdot PH = \\dfrac{1}{2}\\cdot x \\cdot \\dfrac{\\sqrt{3}}{2}x = \\dfrac{\\sqrt{3}}{4}x^2$</div>

<h4>第三步：由图象最大值直接求出 $m$</h4>
<p>图 2 中 $y$ 与 $x$ 是开口向上的抛物线，最大面积 $\\dfrac{3\\sqrt{3}}{2}$ 在 $x = m$ 处取得，代入函数式：</p>
<div class="formula-block">$\\dfrac{\\sqrt{3}}{4}m^2 = \\dfrac{3\\sqrt{3}}{2} \\\quad \\Rightarrow \\\quad m^2 = 6$</div>
<p>因为运动时间 $x > 0$，所以 $m = \\sqrt{6}$。</p>
<p class="hint">💡 说明：图象在 $x = m$ 处终止，是因为动点 $P$ 恰好走完对角线 $BD$ 全程；但求 $m$ 的值时，<strong>只需用面积函数的最大值即可直接算出，不必先求菱形边长</strong>，整个过程没有用到任何 sin、cos、tan。</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">C. $\\sqrt{6}$</span>
</div>

<p class="src">📌 来源：江西中考「动点与面积函数」真题（2023江西中考 p23 动点正方形面积、南昌东湖区卷 菱形动点面积函数，见 51jiaoxi.com/doc-15521910.html、www.51jiaoxi.com/doc-17433416.html）</p>

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

<div style="display:flex; gap:16px; flex-wrap:wrap; align-items:flex-start; margin-top:8px;">
  <div style="flex:1 1 300px; min-width:280px;">
    <p style="font-size:13px; color:#334155; margin:0 0 4px;">原题图（仅坐标轴、镜面 OA、光路 P→D→E）</p>
    <img src="images/p8_orig.svg" alt="p8 原题图：坐标轴、镜面 OA、光路 P→D→E" onclick="openImgOverlay('p8orig')" style="max-width:100%; border:1px solid #e2e8f0; border-radius:6px; cursor:zoom-in;">
    <p class="original-image-caption" onclick="openImgOverlay('p8orig')">🔍 点击查看原图</p>
  </div>
  <div style="flex:1 1 300px; min-width:280px;">
    <p style="font-size:13px; color:#334155; margin:0 0 4px;">解答图（含对称构造 P′、垂足等辅助线）</p>
    <img src="images/p8_grid.svg" alt="p8 坐标系与光路示意图：OB 为 x 轴、OA 为 y=√3x，P 在高度 5，对称点 P′，光路 P→D→E" onclick="openImgOverlay('p8grid')" style="max-width:100%; border:1px solid #e2e8f0; border-radius:6px; cursor:zoom-in;">
    <p class="original-image-caption" onclick="openImgOverlay('p8grid')">🔍 点击查看解答图</p>
  </div>
</div>
<div class="img-overlay" id="overlay-p8orig">
  <div class="img-overlay-box" id="overlayBox-p8orig" onmousedown="startDrag(event,'p8orig')">
    <span class="img-overlay-close" onclick="closeImgOverlay('p8orig')">✕</span>
    <img src="images/p8_orig.svg" alt="p8 原题图原图">
    <span class="img-resize-handle" onmousedown="startResize(event,'p8orig')"></span>
  </div>
</div>
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
<p><span style="color:#ef4444">为什么 $DE\\perp OB$（即 $\\angle DEO=90^\\circ$）？</span>因为路径 $PDE=PD+DE$，题目已知 $PDE$ 最短为 $8$；要让 $PD$ 最短，必然 $DE$ 也得最短，而 $DE$ 最短只能是 $DE\\perp OB$（垂线段最短）。</p>

<h4>第二步：建立坐标系求 $P'$ 的坐标</h4>
<p><strong>先回顾斜率的通用定义（过原点的直线，斜率 = 纵坐标 ÷ 横坐标）：</strong></p>
<div class="def-red">斜率 $= \\dfrac{y}{x}$</div>


<p>以 $O$ 为原点，$OB$ 为 $x$ 轴，则镜面 $OA$ 的斜率为：</p>
<div class="formula-block">$\\dfrac{y}{x} = \\sqrt{3}$</div>
<p>设 $ON = a$（即 $OE = a$），在直角三角形 $ODE$ 中，$\\angle ODE = 30^\\circ$，由 "$30^\\circ$ 所对的直角边等于斜边的一半" 得 $OD = 2a$；再用勾股定理得 $DE = \\sqrt{OD^2 - OE^2} = \\sqrt{3}a$。所以 $OA$ 的斜率 $\\dfrac{y}{x} = \\dfrac{DE}{OE} = \\dfrac{\\sqrt{3}a}{a} = \\sqrt{3}$。</p>
<p>设光源 $P$ 的坐标为 $(x_0,5)$（因它到地面 $OB$ 的距离为 $5$，即纵坐标 $y_0 = 5$）。</p>

<p>设 $P(x_0, y_0)$ 关于直线 $y = \\sqrt{3}x$ 的对称点为 $P'(x', y')$。对称点要满足两个条件：</p>
<p><strong>条件一：$PP'$ 的中点 $M$ 在对称轴 $OA$ 上。</strong></p>
<p>中点 $M$ 的坐标为 $\\left(\\dfrac{x_0+x'}{2},\\; \\dfrac{y_0+y'}{2}\\right)$。因为 $M$ 在 $y=\\sqrt{3}x$ 上，代入得：</p>
<div class="formula-block">$\\dfrac{y_0+y'}{2} = \\sqrt{3} \\cdot \\dfrac{x_0+x'}{2}$</div>
<p>两边乘 $2$，化简：</p>
<div class="formula-block">$y_0 + y' = \\sqrt{3}x_0 + \\sqrt{3}x' \\\quad\\cdots (1)$</div>
<p><strong>条件二：$PP'$ 垂直于对称轴 $OA$。</strong></p>
<p>$OA$ 的斜率为 $\\sqrt{3}$。由一次函数的性质，<span style="color:#ef4444">两条直线垂直时斜率乘积为 $-1$</span>，所以 $PP'$ 的斜率为 $-\\dfrac{1}{\\sqrt{3}}$：</p>
<div class="formula-block">$\\dfrac{y'-y_0}{x'-x_0} = -\\dfrac{1}{\\sqrt{3}}$</div>
<p>交叉相乘并整理：</p>
<div class="formula-block">$\\sqrt{3}(y'-y_0) = -(x'-x_0)$</div>
<div class="formula-block">$x' + \\sqrt{3}y' = x_0 + \\sqrt{3}y_0 \\\quad\\cdots (2)$</div>
<p><strong>把化简后的 (1)(2) 列出，两个方程，已知 $y_0, y'$，可以求出 $x_0, x'$：</strong></p>
<div class="formula-block">$(1)\\quad y_0 + y' = \\sqrt{3}x_0 + \\sqrt{3}x'$</div>
<div class="formula-block">$(2)\\quad \\sqrt{3}y' - \\sqrt{3}y_0 = x_0 - x'$</div>
<p class="def-red">两方程求解，只需要求 $x'$，不需要算 $x_0$。利用两式相减消除 $x_0$（原因在下）。</p>
<p>题目要求的是 $PD$。由轴对称可知 $PD$ 的对称段就是 $P'D$；又已知 $P'E = 8$，要求 $P'D$ 只需先求出 $DE$（因为 $P'D = P'E - DE$）。而 $DE$ 就是 $D$ 点的纵坐标 $y_D$，只要解出 $D$ 的横坐标，就能代入镜面方程 $y = \\sqrt{3}x$ 算出 $DE$。所以本题只需解出 $P'$ 的横坐标 $x'$，不必先求 $x_0$。</p>
<p>将 (2) 式两边同乘 $\\sqrt{3}$：</p>
<div class="formula-block">$3y' - 3y_0 = \\sqrt{3}x_0 - \\sqrt{3}x'$</div>
<p>用这一式减去 (1) 式（左边减左边，右边减右边），$x_0$ 项正好抵消：</p>
<div class="formula-block">$(3y' - 3y_0) - (y_0 + y') = (\\sqrt{3}x_0 - \\sqrt{3}x') - (\\sqrt{3}x_0 + \\sqrt{3}x')$</div>
<div class="formula-block">$2y' - 4y_0 = -2\\sqrt{3}x'$</div>
<div class="formula-block">$2\\sqrt{3}x' = 4y_0 - 2y'$</div>
<div class="formula-block">$x' = \\dfrac{2y_0 - y'}{\\sqrt{3}}$</div>
<p>代入本题已知 $y_0 = 5,\\ y' = 8$：</p>
<div class="formula-block">$x' = \\dfrac{2\\times 5 - 8}{\\sqrt{3}} = \\dfrac{2}{\\sqrt{3}} = \\dfrac{2\\sqrt{3}}{3}$</div>

<h4>第三步：用 $x'$ 直接求 $PD$</h4>
<p>现已知 $x' = \\dfrac{2\\sqrt{3}}{3}$，它也就是 $D$ 点的横坐标；$OA$ 的方程为 $y = \\sqrt{3}x$，$D$ 点在 $OA$ 上，代入即得 $D$ 点的纵坐标（即 $DE$）：</p>
<div class="formula-block">$y_D = \\sqrt{3}\\cdot\\dfrac{2\\sqrt{3}}{3} = \\dfrac{2\\cdot 3}{3} = 2$</div>
<p>因此 $DE = 2$。又已知最短路径 $P'E = 8$，于是：</p>
<div class="formula-block">$P'D = P'E - DE = 8 - 2 = 6$</div>
<p>由轴对称性质 $PD = P'D$，得：</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$PD = 6\\ \\text{dm}$</span>
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

`
  },

{
    id: "p13",
    file: "p13.html",
    title: "p13 圆中垂径与弧中点求 BC",
    type: "填空",
    topics: ["圆", "直径", "垂径定理", "相似三角形", "勾股定理"],
    difficulty: 4,
    category: "几何综合",
    image: "images/p13.png",
    content: `
<div class="prob-statement">
  <p>如图，$AB$ 是 $\\odot O$ 的直径，$CD$ 为 $\\odot O$ 的弦，且 $CD \\perp AB$ 于点 $E$，点 $F$ 为圆上一点。若 $AE = BF$，$\\overset{\\frown}{AD} = \\overset{\\frown}{CF}$，$OE = 1$，则 $BC$ 的长为 ______。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>垂径定理</td><td>直径 $AB$ 垂直于弦 $CD$ 于 $E$ $\\Rightarrow$ $CE = ED$，且 $\\overset{\\frown}{AC} = \\overset{\\frown}{AD}$</td></tr>
    <tr><td>等弧对等圆心角</td><td>$\\overset{\\frown}{AD} = \\overset{\\frown}{CF}$ 且 $\\overset{\\frown}{AC} = \\overset{\\frown}{AD}$ $\\Rightarrow$ $\\angle AOC = \\angle COF$</td></tr>
    <tr><td>相似三角形（AA）</td><td>两个直角三角形若有一组锐角相等，则它们相似</td></tr>
    <tr><td>勾股定理</td><td>在 $\\text{Rt}\\triangle$ 中，两直角边的平方和等于斜边的平方</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<p>设 $\\odot O$ 的半径为 $R$。由 $OE = 1$ 且 $E$ 在 $A$、$O$ 之间，可知 $AE = R - 1$，$BE = R + 1$。</p>

<h4>第一步：垂径定理</h4>
<p>因为 $AB$ 是直径且 $CD \\perp AB$ 于 $E$，由垂径定理：</p>
<div class="formula-block">$\\overset{\\frown}{AC} = \\overset{\\frown}{AD}$</div>

<h4>第二步：由弧相等得到角的关系</h4>
<p>已知 $\\overset{\\frown}{AD} = \\overset{\\frown}{CF}$，结合上式得 $\\overset{\\frown}{AC} = \\overset{\\frown}{CF}$，于是它们对应的圆心角相等：</p>
<div class="formula-block">$\\angle AOC = \\angle COF = \\angle 3$</div>
<p>因为 $A$、$O$、$B$ 共线（直径），$\\angle AOB = 180^{\\circ}$，所以：</p>
<div class="formula-block">$\\angle BOF = 180^{\\circ} - \\angle AOF = 180^{\\circ} - 2\\angle 3$</div>

<h4>第三步：作辅助线，构造相似三角形</h4>
<div class="def-red"><span class="box-label">📎 辅助线：</span>连接 $OC$；过圆心 $O$ 作 $OM \\perp BF$ 于点 $M$。</div>

<div style="text-align:center;margin:16px 0;">
  <img class="original-image" style="width:520px;height:auto;" src="images/p13_sol.svg" alt="p13 辅助线解法图" />
  <p class="original-image-caption" onclick="openImgOverlay('p13-sol')">📷 点击查看原图</p>
  <div class="img-overlay" id="overlay-p13-sol">
    <div class="img-overlay-box" id="overlayBox-p13-sol" onmousedown="startDrag(event,'p13-sol')">
      <span class="img-overlay-close" onclick="closeImgOverlay('p13-sol')">✕</span>
      <img src="images/p13_sol.svg" alt="p13 辅助线解法图">
      <span class="img-resize-handle" onmousedown="startResize(event,'p13-sol')"></span>
    </div>
  </div>
  <p style="color:#64748b;font-size:13px;margin-top:8px;">辅助线构造：连接 $OC$，过 $O$ 作 $OM \\perp BF$ 于 $M$，证明 $\\triangle OCE \\cong \\triangle BOM$（全等），从而 $BM = OE$。</p>
</div>

<p>由已知 $\\overset{\\frown}{AD} = \\overset{\\frown}{CF}$，且由第一步垂径定理得 $\\overset{\\frown}{AD} = \\overset{\\frown}{AC}$，所以 $\\overset{\\frown}{AC} = \\overset{\\frown}{CF}$，故它们所对的圆心角相等：$\\angle COA = \\angle COF = \\angle 3$。过圆心 $O$ 作 $OM \\perp BF$ 于 $M$（$M$ 为 $BF$ 中点），由垂径定理的推论 $OM$ 平分 $\\angle BOF$，所以：</p>
<div class="formula-block">$\\angle BOM = \\dfrac{1}{2}\\angle BOF = \\dfrac{1}{2}\\bigl(180^{\\circ} - (\\angle AOC + \\angle COF)\\bigr) = \\dfrac{1}{2}(180^{\\circ} - 2\\angle 3) = 90^{\\circ} - \\angle 3$</div>
<p>在 $\\text{Rt}\\triangle OCE$ 中，$\\angle COE = \\angle 3$（即 $\\angle AOC$），所以：</p>
<div class="formula-block">$\\angle OCE = 90^{\\circ} - \\angle 3$</div>
<p>于是 $\\angle OCE = \\angle BOM$。又因为 $\\triangle OCE$、$\\triangle BOM$ 都是直角三角形（直角分别在 $E$、$M$），且 $OC = OB$（同为圆的半径），所以：</p>
<div class="formula-block">$\\triangle OCE \\cong \\triangle BOM \\quad (\\text{AAS})$</div>

<p>💡 考试技巧：如果在考场上遇到这道题是<strong>选择题或填空题</strong>，辅助线一旦做出来，就<strong>大胆假设 $\\triangle OCE \\cong \\triangle BOM\\ (\\text{AAS})$</strong>，<strong>不要去证明</strong>，太浪费时间——看过去像全等就是全等，然后直接算，可以算出答案直接选。</p>

<h4>第四步：由全等求出 $BF = 2\\cdot OE$</h4>
<p>由 $\\triangle OCE \\cong \\triangle BOM\\ (\\text{AAS})$，对应边相等，所以：</p>
<div class="formula-block">$BM = OE = 1$</div>
<p>$M$ 是 $BF$ 的中点，所以：</p>
<div class="formula-block">$BF = 2 \\cdot BM = 2 \\cdot OE = 2 \\times 1 = 2$</div>
<div class="def-red"><span class="box-label">📎 关键：</span>$BF = 2\\cdot OE$ 只由弧相等的几何关系决定，与半径 $R$ 无关。</div>

<h4>第五步：由 $AE = BF$ 求半径 $R$</h4>
<p>$AE = R - OE = R - 1$，又已知 $AE = BF = 2$，故：</p>
<div class="formula-block">$R - 1 = 2 \\Rightarrow R = 3$</div>

<h4>第六步：勾股定理求 $BC$</h4>
<p>在 $\\text{Rt}\\triangle OCE$ 中，$CE = \\sqrt{OC^2 - OE^2} = \\sqrt{R^2 - 1} = \\sqrt{9 - 1} = 2\\sqrt{2}$。</p>
<p>因为 $CD \\perp AB$，在 $\\text{Rt}\\triangle BCE$ 中（直角在 $E$）：</p>
<div class="formula-block">$BC^2 = BE^2 + CE^2 = (R + 1)^2 + (2\\sqrt{2})^2 = 4^2 + 8 = 16 + 8 = 24$</div>
<div class="formula-block">$BC = \\sqrt{24} = 2\\sqrt{6}$</div>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$BC = 2\\sqrt{6}$</span>
</div>

`
  },

  {
    id: "p25",
    file: "p25.html",
    title: "p25 等边三角形双动点：直角三角形与四边形面积",
    type: "几何综合",
    topics: ["等边三角形", "动点问题", "30-60-90直角三角形", "勾股定理", "判别式"],
    difficulty: 3,
    category: "几何综合",
    image: "images/p25.png",
    content: `
<div class="prob-statement">
  <p>[2026 安徽合肥质检·中] 如图，$\\triangle ABC$ 是边长为 $3$ cm 的等边三角形，动点 $P$、$Q$ 同时从 $A$、$B$ 两点出发，分别沿 $AB$、$BC$ 方向匀速运动，它们的速度都是 $1$ cm/s，当点 $P$ 到达点 $B$ 时，$P$、$Q$ 两点停止运动。设点 $P$ 的运动时间为 $t$ s，解答下列问题：</p>
  <p>（1）当 $t$ 为何值时，$\\triangle PBQ$ 是直角三角形？</p>
  <p>（2）是否存在某一时刻，使得四边形 $APQC$ 的面积是 $\\triangle ABC$ 面积的 $\\dfrac{2}{3}$？如果存在，求出相应的 $t$ 值；如果不存在，请说明理由。</p>
  <p><img src="images/p25-fig.png" alt="动点位置示意图（P 在 AB 上，Q 在 BC 上）" style="max-width: 300px; border: 1px solid #e2e8f0; border-radius: 6px; margin-top: 8px;"></p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>动点问题的基本量</td><td>速度 $\\times$ 时间 = 路程：$AP = t$，$BQ = t$，$PB = 3 - t$</td></tr>
    <tr><td>等边三角形</td><td>三边相等、每个内角都是 $60^{\\circ}$；三线合一（中线 = 高线 = 角平分线）</td></tr>
    <tr><td>30° 所对直角边 = 斜边的一半</td><td>直角三角形中，$30^{\\circ}$ 角所对的直角边等于斜边的一半</td></tr>
    <tr><td>勾股定理</td><td>$a^2 + b^2 = c^2$（直角三角形两直角边的平方和等于斜边的平方）</td></tr>
    <tr><td>割补法求面积</td><td>四边形 $APQC$ 的面积 = $\\triangle ABC$ 的面积 $-$ $\\triangle PBQ$ 的面积</td></tr>
    <tr><td>判别式判断存在性</td><td>$\\Delta < 0 \\Leftrightarrow$ 一元二次方程无实数解 $\\Leftrightarrow$ 这样的 $t$ 不存在</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第一步：用 $t$ 表示各线段</h4>
<p>两个动点速度都是 $1$ cm/s，运动时间为 $t$ s，所以走过的路程都等于 $t$：</p>
<div class="formula-block">$AP = t, \\quad BQ = t, \\quad PB = AB - AP = 3 - t$</div>
<div class="def-red"><strong>注意 $t$ 的取值范围：</strong>点 $P$ 到达 $B$ 时停止，所以 $0 < t \\le 3$。</div>

<h4>第二步：（1）问：分析 $\\triangle PBQ$ 的直角位置</h4>
<p>$\\triangle PBQ$ 中，$\\angle B = 60^{\\circ}$（等边三角形的内角）。直角三角形只有一个直角，而 $\\angle B = 60^{\\circ}$ 不是直角，所以直角只能是另外两个角：$\\angle BQP$ 或 $\\angle BPQ$。<strong>分两种情况讨论。</strong></p>

<div class="def-red"><strong>情况①：$\\angle BQP = 90^{\\circ}$</strong></div>
<p>此时三角形内角和还剩 $90^{\\circ} - 60^{\\circ} = 30^{\\circ}$ 给 $\\angle BPQ$，即 $\\angle BPQ = 30^{\\circ}$。</p>
<p>在 Rt$\\triangle PBQ$ 中，$30^{\\circ}$ 角（$\\angle BPQ$）所对的直角边是 $BQ$，斜边是 $BP$。由"$30^{\\circ}$ 所对的直角边等于斜边的一半"：</p>
<div class="formula-block">$BQ = \\dfrac{1}{2}BP \\quad\\Longrightarrow\\quad t = \\dfrac{1}{2}(3 - t)$</div>
<p>解得 $2t = 3 - t$，即 $3t = 3$，所以 $t = 1$。✓（在 $0 < t \\le 3$ 内）</p>

<div class="def-red"><strong>情况②：$\\angle BPQ = 90^{\\circ}$</strong></div>
<p>同理，此时 $\\angle BQP = 30^{\\circ}$。$30^{\\circ}$ 角（$\\angle BQP$）所对的直角边是 $BP$，斜边是 $BQ$：</p>
<div class="formula-block">$BP = \\dfrac{1}{2}BQ \\quad\\Longrightarrow\\quad 3 - t = \\dfrac{1}{2}t$</div>
<p>解得 $6 - 2t = t$，即 $3t = 6$，所以 $t = 2$。✓（在 $0 < t \\le 3$ 内）</p>

<div class="answer-box">
  <span class="answer-label">✅（1）答案：</span><span class="answer-value">$t = 1$ 或 $t = 2$ 时，$\\triangle PBQ$ 是直角三角形</span>
</div>

<h4>第三步：（2）问：割补法转化面积</h4>
<p>点 $P$ 在 $AB$ 上、点 $Q$ 在 $BC$ 上，线段 $PQ$ 恰好把 $\\triangle ABC$ 切成两部分：$\\triangle PBQ$（含点 $B$ 的小角）和四边形 $APQC$（其余部分）。所以：</p>
<div class="formula-block">$S_{\\text{四边形} APQC} = S_{\\triangle ABC} - S_{\\triangle PBQ}$</div>
<p>要使四边形 $APQC$ 的面积是 $\\triangle ABC$ 面积的 $\\dfrac{2}{3}$，就等价于：</p>
<div class="formula-block">$S_{\\triangle PBQ} = \\dfrac{1}{3}S_{\\triangle ABC}$</div>

<h4>第四步：作辅助线，用 $t$ 表示 $S_{\\triangle PBQ}$ 与 $S_{\\triangle ABC}$</h4>
<p><strong>辅助线：过点 $P$ 作 $PD \\perp BC$，垂足为 $D$（红色虚线）。则 $PD$ 就是 $\\triangle PBQ$ 中 $BQ$ 边上的高。</strong></p>
<p style="text-align:center;">
  <img src="images/p25_sol.svg" alt="p25 解题图：等边三角形 ABC、动点 P/Q、辅助线 PD⊥BC" onclick="openImgOverlay('p25sol')" style="max-width: 420px; border: 1px solid #e2e8f0; border-radius: 6px; margin-top: 8px; cursor: zoom-in;">
</p>
<p class="original-image-caption" onclick="openImgOverlay('p25sol')">📷 点击查看原图</p>
<div class="img-overlay" id="overlay-p25sol">
  <div class="img-overlay-box" id="overlayBox-p25sol" onmousedown="startDrag(event,'p25sol')">
    <span class="img-overlay-close" onclick="closeImgOverlay('p25sol')">✕</span>
    <img src="images/p25_sol.svg" alt="p25 解题图原图">
    <span class="img-resize-handle" onmousedown="startResize(event,'p25sol')"></span>
  </div>
</div>

<div class="def-red"><strong>先求 $\\triangle ABC$ 的高：</strong>过 $A$ 作 $AH \\perp BC$ 于 $H$。由等边三角形三线合一，$H$ 是 $BC$ 中点，$BH = \\dfrac{3}{2}$。在 Rt$\\triangle ABH$ 中用勾股定理：</div>
<div class="formula-block">$AH = \\sqrt{AB^2 - BH^2} = \\sqrt{3^2 - \\left(\\dfrac{3}{2}\\right)^2} = \\sqrt{9 - \\dfrac{9}{4}} = \\sqrt{\\dfrac{27}{4}} = \\dfrac{3\\sqrt{3}}{2}$</div>
<div class="formula-block">$S_{\\triangle ABC} = \\dfrac{1}{2} \\cdot BC \\cdot AH = \\dfrac{1}{2} \\cdot 3 \\cdot \\dfrac{3\\sqrt{3}}{2} = \\dfrac{9\\sqrt{3}}{4}$</div>

<div class="def-red"><strong>再求 $\\triangle PBQ$ 中 $BQ$ 边上的高 $PD$：</strong>在 Rt$\\triangle PBD$ 中，$\\angle B = 60^{\\circ}$，所以 $\\angle BPD = 30^{\\circ}$。$30^{\\circ}$ 角 $\\angle BPD$ 所对的直角边是 $BD$，斜边是 $PB$，所以 $BD = \\dfrac{1}{2}PB = \\dfrac{3-t}{2}$。再用勾股定理：</div>
<div class="formula-block">$PD = \\sqrt{PB^2 - BD^2} = \\sqrt{(3-t)^2 - \\dfrac{(3-t)^2}{4}} = \\sqrt{\\dfrac{3(3-t)^2}{4}} = \\dfrac{\\sqrt{3}}{2}(3-t)$</div>
<p>于是（以 $BQ$ 为底、$PD$ 为高）：</p>
<div class="formula-block">$S_{\\triangle PBQ} = \\dfrac{1}{2} \\cdot BQ \\cdot PD = \\dfrac{1}{2} \\cdot t \\cdot \\dfrac{\\sqrt{3}}{2}(3-t) = \\dfrac{\\sqrt{3}}{4}t(3-t)$</div>
<p>两个面积的比（$\\sqrt{3}$ 正好约掉）：</p>
<div class="formula-block">$\\dfrac{S_{\\triangle PBQ}}{S_{\\triangle ABC}} = \\dfrac{\\dfrac{\\sqrt{3}}{4}t(3-t)}{\\dfrac{9\\sqrt{3}}{4}} = \\dfrac{t(3-t)}{9}$</div>

<h4>第五步：列方程并判断是否存在</h4>
<p>由第四步的等价条件 $S_{\\triangle PBQ} = \\dfrac{1}{3}S_{\\triangle ABC}$，即面积比等于 $\\dfrac{1}{3}$：</p>
<div class="formula-block">$\\dfrac{t(3-t)}{9} = \\dfrac{1}{3}$</div>
<p>两边同乘 $9$：</p>
<div class="formula-block">$t(3-t) = 3 \\quad\\Longrightarrow\\quad 3t - t^2 = 3 \\quad\\Longrightarrow\\quad t^2 - 3t + 3 = 0$</div>
<p>这是一个关于 $t$ 的一元二次方程，计算判别式：</p>
<div class="formula-block">$\\Delta = (-3)^2 - 4 \\times 1 \\times 3 = 9 - 12 = -3 < 0$</div>
<div class="def-red"><strong>判别式小于零，方程没有实数解。</strong>也就是说，在整个运动过程（$0 < t \\le 3$）中，不存在任何时刻使 $S_{\\triangle PBQ} = \\dfrac{1}{3}S_{\\triangle ABC}$。</div>
<p>（从图象角度理解：$\\dfrac{t(3-t)}{9}$ 的最大值在 $t = 1.5$ 时取得，只有 $\\dfrac{1.5 \\times 1.5}{9} = \\dfrac{1}{4}$，达不到 $\\dfrac{1}{3}$，所以 $\\triangle PBQ$ 永远"太小"，四边形 $APQC$ 永远比 $\\dfrac{2}{3}$ 大。）</p>

<div class="answer-box">
  <span class="answer-label">✅（2）答案：</span><span class="answer-value">不存在这样的 $t$。因为方程 $t^2 - 3t + 3 = 0$ 的判别式 $\\Delta = -3 < 0$，无实数解</span>
</div>
`
  }

];
