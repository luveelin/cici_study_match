// problems-data.坐标轴几何.js
// 由拆分脚本自动生成，请勿手改；如需修改请编辑本文件后运行 node build.js。
// 本文件仅导出「坐标轴几何」分类的题目数组（module.exports = [...]）。

module.exports = [
{
    id: "p12",
    file: "p12.html",
    title: "p12 矩形 OABC 角度三等分",
    type: "几何综合",
    topics: ["矩形性质", "中点坐标", "等腰三角形", "全等三角形", "分类讨论"],
    difficulty: 4,
    category: "坐标轴几何",
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
  <img src="images/p12_fig1.png" alt="图1：E在B右侧" onclick="openImgOverlay('p12fig1')" style="width:30%;height:auto;border-radius:8px;border:1px solid #e2e8f0;cursor:zoom-in;">
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
  <img src="images/p12_fig2.png" alt="图2：E在A左侧，∠BED=∠1，∠EBD=∠2，∠BDN=∠4，∠CDN=∠3" onclick="openImgOverlay('p12fig2')" style="width:30%;height:auto;border-radius:8px;border:1px solid #e2e8f0;cursor:zoom-in;">
  <p style="font-size:13px;color:#666;margin-top:4px;">图 2：$E$ 在 $BA$ 延长线上 $A$ 左侧，过 $D$ 作 $MN \\parallel AE$（图中 $\\angle BED=\\angle1,\\ \\angle EBD=\\angle2,\\ \\angle CDN=\\angle3$）</p>
  <p class="original-image-caption" onclick="openImgOverlay('p12fig2')">🔍 点击查看原题</p>
</div>

<div class="img-overlay" id="overlay-p12fig2">
  <div class="img-overlay-box" id="overlayBox-p12fig2" onmousedown="startDrag(event,'p12fig2')">
    <span class="img-overlay-close" onclick="closeImgOverlay('p12fig2')">✕</span>
    <img src="images/p12_fig2.png" alt="图2：E在A左侧（放大），∠BED=∠1，∠EBD=∠2，∠BDN=∠4，∠CDN=∠3">
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
<p>$\\angle 1 = \\angle MDE$（内错角）</p>

<p>$\\because$ 四边形 $ABCD$ 是矩形，顶点 $A(0, 12)$，$C(5, 0)$</p>
<h4>第二步补充：说明 $\\angle 2 = \\angle 3$</h4>
<p><strong>① 先证 $\\triangle BDC$ 等腰（$BD = DC$）。</strong> 在矩形 $OABC$ 中相邻边互相垂直，故 $BC \\perp OC$，即 $\\triangle BOC$ 是以 $C$ 为直角的直角三角形；$BO$ 是其斜边，而 $D$ 是 $BO$ 的中点。由<strong>直角三角形斜边中线定理</strong>（斜边中点到三个顶点距离相等）：</p>
<div class="formula-block">$DB = DC = DO = \\dfrac{1}{2}BO = \\dfrac{13}{2}$</div>
<p>于是 $BD = DC$，$\\triangle BDC$ 是等腰三角形，腰为 $BD$、$DC$，底边为 $BC$。</p>

<p><strong>② $\\angle 2 = \\angle 4$（平行线内错角）。</strong></p>

<p><strong>③ $\\angle 4 = \\angle 3$（等腰三角形顶角平分线）。</strong></p>

<p><strong>④ 串起来：</strong></p>
<div class="formula-block">$\\angle 2 = \\angle 4 = \\angle 3$</div>

<p>$\\therefore \\angle BOC = \\angle ACO$，$\\angle BAC = \\angle OCD$，$AC = \\sqrt{12^2 + 5^2} = 13$</p>

<h4>第三步：利用 $\\angle CDE = 3\\angle 1$ 推等量</h4>
<p>$\\because \\angle CDE = 3\\angle 1$（已知）</p>
<p>$\\therefore \\angle MDC = 2\\angle 1$（由图 2 角度关系）</p>

<p>由第二步补充知 $\\angle 2 = \\angle 3$；又 $M$、$D$、$N$ 共线成平角，$\\angle MDC$ 与 $\\angle 3$ 互补，且前面已得 $\\angle MDC = 2\\angle 1$，故</p>
<div class="formula-block">$\\angle 3 = 180° - \\angle MDC = 180° - 2\\angle 1$</div>
<p>$\\therefore \\angle 2 = \\angle 3 = 180° - 2\\angle 1$</p>
<p>在 $\\triangle BED$ 中：</p>
<div class="formula-block">$\\angle EDB = 180° - \\angle 1 - \\angle 2$</div>
<div class="formula-block">$= 180° - \\angle 1 - (180° - 2\\angle 1) = \\angle 1$</div>
<p>$\\therefore \\angle EDB = \\angle 1$，所以 $BE = BD$（等角对等边）</p>

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
  <img src="images/p12_fig3.png" alt="图3：E在AB之间" style="width:30%;height:auto;border-radius:8px;border:1px solid #e2e8f0;">
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
    category: "坐标轴几何",
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
  }
];
