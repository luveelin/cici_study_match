// problems-data.最值问题.js
// 由拆分脚本自动生成，请勿手改；如需修改请编辑本文件后运行 node build.js。
// 本文件仅导出「最值问题」分类的题目数组（module.exports = [...]）。

module.exports = [
{
    id: "p2",
    file: "p2.html",
    title: "p2 篱笆围栏最小值",
    type: "综合应用",
    topics: ["几何面积", "均值不等式", "对顶三角形"],
    difficulty: 4,
    category: "最值问题",
    image: "images/app1_app2.png",
    content: `<div class="prob-statement">
  <p><strong>第（1）问</strong>　用篱笆围成一个面积为 $100\\text{ m}^2$ 的长方形菜园（一面靠墙，墙足够长）。当长方形的长和宽分别为多少时，所用篱笆最短？最短篱笆长多少？</p>
  <p><strong>第（2）问</strong>　如图，四边形 $ABCD$ 的对角线 $AC$、$BD$ 相交于点 $O$，$\\triangle AOD$、$\\triangle BOC$ 的面积分别为 $2$ 和 $3$，求四边形 $ABCD$ 面积的最小值。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>均值不等式</td><td>$a+b\\geq 2\\sqrt{ab}$（$a,b>0$），等号当 $a=b$ 时成立</td></tr>
    <tr><td>应用题建模</td><td>面积 = 长 × 宽；一面靠墙时篱笆围三面</td></tr>
    <tr><td>对顶三角形性质</td><td>对角线分四边形为四个三角形，且 $S_{\\triangle AOD}\\cdot S_{\\triangle BOC}=S_{\\triangle AOB}\\cdot S_{\\triangle COD}$</td></tr>
    <tr><td>最值问题步骤</td><td>设元 → 列函数 / 找不变量 → 用均值不等式求最值 → 验证等号条件</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h3>均值不等式公式</h3>
<img src="images/p2_gongshi.png" alt="均值不等式公式" style="width:60%;height:auto;border-radius:8px;border:1px solid #e2e8f0;">

<h4>第（1）问：篱笆围菜园</h4>
<p>设垂直于墙的边（宽）为 $x\\text{ m}$，则平行于墙的边（长）为 $\\dfrac{100}{x}\\text{ m}$。因长边靠墙，篱笆只需围另外三面：</p>
<div class="formula-block">篱笆总长 $L = 2x + \\dfrac{100}{x}\\quad(x>0)$</div>
<p>由均值不等式：</p>
<div class="formula-block">$L = 2x + \\dfrac{100}{x} \\geq 2\\sqrt{2x\\cdot\\dfrac{100}{x}} = 2\\sqrt{200} = 20\\sqrt{2}$</div>
<p>当且仅当 $2x = \\dfrac{100}{x}$，即 $x^2 = 50$，$x = 5\\sqrt{2}$ 时取等号，此时长 $= \\dfrac{100}{5\\sqrt{2}} = 10\\sqrt{2}$。</p>

<h3>蝴蝶定理：两组对顶三角形面积乘积相等（2条对角线分割的4个三角形才算）</h3>
<img src="images/p2_gongshi2.png" alt="蝴蝶定理：两组对顶三角形面积乘积相等（2条对角线分割的4个三角形才算）" style="width:30%;height:auto;border-radius:8px;border:1px solid #e2e8f0;">

<h4>第（2）问：四边形面积最小值</h4>
<p>对角线把四边形分成四个三角形，其中 $\\triangle AOD$ 与 $\\triangle BOC$ 为<strong>对顶三角形</strong>，满足：</p>
<div class="info-box"><span class="box-label">🔑 关键结论：</span>$S_{\\triangle AOD}\\cdot S_{\\triangle BOC} = S_{\\triangle AOB}\\cdot S_{\\triangle COD}$</div>
<p>已知 $S_{\\triangle AOD}=2$、$S_{\\triangle BOC}=3$，故 $S_{\\triangle AOB}\\cdot S_{\\triangle COD}=6$。设 $S_{\\triangle AOB}=a$，$S_{\\triangle COD}=b$，则 $ab=6$。</p>
<div class="formula-block">$S_{ABCD} = 2+3+a+b = 5+a+b \\geq 5+2\\sqrt{ab} = 5+2\\sqrt{6}$</div>
<p>当且仅当 $a=b=\\sqrt{6}$ 时取等号（此时对角线互相平分，四边形为平行四边形）。</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><br>
  <span class="answer-value">第（1）问：宽 $= 5\\sqrt{2}\\text{ m}$，长 $= 10\\sqrt{2}\\text{ m}$，最短篱笆 $= 20\\sqrt{2}\\text{ m}\\approx 28.28\\text{ m}$</span><br>
  <span class="answer-value">第（2）问：四边形 $ABCD$ 面积的最小值 $= 5+2\\sqrt{6}$</span>
</div>


<p class="src">📌 来源：南昌/江西中考「二次函数最值·篱笆围栏」同类真题（参考：南昌市九年级期中题 docin.com/p-4917004438.html；两面靠墙题 m.1010jiajiao.com/czsx/shiti_id_fd32630e909d229927b8388187cc2285）</p>

`
  },
{
    id: "p34",
    file: "p34.html",
    title: "p34 篱笆围三块矩形区域 面积最大",
    type: "最值问题",
    topics: ["二次函数", "配方求最值", "面积最值", "不等式定范围"],
    difficulty: 3,
    category: "最值问题",
    image: "images/p34-fig.png",
    content: `
<div class="prob-statement">
  <p>[2024·福州期中] 为了节省材料，某农场主利用旧墙（围墙足够长）为一边，用总长为 $60$ m 的篱笆围成了如图所示的①②③三块矩形区域，而且这三块矩形区域的面积相等，则 $BC$ 长为________时，能围成的矩形区域 $ABCD$ 的面积最大。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>面积相等转化边长</td><td>三块面积相等 $\\Rightarrow$ 左矩形 $AEFD$ 面积 $=$ ③ 面积的 $2$ 倍 $\\Rightarrow AE = 2BE$</td></tr>
    <tr><td>篱笆分段求和</td><td>靠墙的 $AD$ 不用篱笆；其余七段之和 $= 8y + 2x = 60$</td></tr>
    <tr><td>二次函数配方求最值</td><td>$S = -\\dfrac{3}{4}(x-15)^2 + \\dfrac{675}{4}$，开口向下，顶点即最大值</td></tr>
    <tr><td>自变量取值范围</td><td>由 $y > 0$ 得 $0 < x < 30$，顶点 $x = 15$ 落在范围内，最大值有效</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<div class="def-red"><strong>第一步：由"三块面积相等"推出边长关系。</strong>结合题图：①②上下排列在左侧矩形 $AEFD$ 内（各占一半），③ 是右侧矩形 $BCFE$。三块面积相等，所以左矩形面积是③的 $2$ 倍：</div>
<div class="formula-block">$S_{AEFD} = AE \\times BC, \\qquad S_{BCFE} = BE \\times BC \\quad\\Longrightarrow\\quad AE \\times BC = 2 \\times BE \\times BC \\quad\\Longrightarrow\\quad AE = 2BE$</div>
<div class="def-red"><strong>第二步：设未知数，表示各段。</strong>设 $BC = x$，$BE = CF = y$，则 $AE = DF = 2y$，$AB = CD = 3y$。①②的分界线 $HG$ 与 $AE$ 等长，故 $HG = 2y$。</div>
<div class="def-red"><strong>第三步：篱笆七段之和 = 60。</strong>靠墙的 $AD$ 不用篱笆，篱笆为 $DF$、$FC$、$HG$、$AE$、$EB$、$EF$、$BC$ 七段（其中 $EF = BC = x$）：</div>
<div class="formula-block">$2y + y + 2y + 2y + y + x + x = 8y + 2x = 60 \\quad\\Longrightarrow\\quad y = \\dfrac{15}{2} - \\dfrac{x}{4}$</div>
<div class="def-red"><strong>第四步：写面积函数并配方。</strong></div>
<div class="formula-block">$S = AB \\times BC = 3y \\times x = 3\\left(\\dfrac{15}{2} - \\dfrac{x}{4}\\right)x = \\dfrac{45}{2}x - \\dfrac{3}{4}x^2$</div>
<div class="formula-block">$S = -\\dfrac{3}{4}\\left(x^2 - 30x\\right) = -\\dfrac{3}{4}\\left(x^2 - 30x + 225\\right) + \\dfrac{3}{4} \\times 225 = -\\dfrac{3}{4}(x - 15)^2 + \\dfrac{675}{4}$</div>
<div class="def-red"><strong>第五步：确定范围并取最大值。</strong>由 $y > 0$ 得 $\\dfrac{15}{2} - \\dfrac{x}{4} > 0$，即 $x < 30$；又 $x > 0$，所以 $0 < x < 30$。抛物线开口向下，顶点 $x = 15$ 恰在此范围内，所以：</div>
<div class="formula-block">$x = 15 \\text{ 时，} S_{\\max} = \\dfrac{675}{4} = 168.75 \\text{（m}^2\\text{）}$</div>
<p><strong>检验</strong>：$x = 15$ 时 $y = \\dfrac{15}{2} - \\dfrac{15}{4} = \\dfrac{15}{4}$，篱笆 $= 8 \\times \\dfrac{15}{4} + 2 \\times 15 = 30 + 30 = 60$ ✓；三块面积均为 $y \\times x = \\dfrac{15}{4} \\times 15 = 56.25$ ✓。</p>
<p><strong>辨析（图中手写答案 "10" 不对）</strong>：$x = 10$ 时 $S = -\\dfrac{3}{4} \\times 25 + 168.75 = 150 < 168.75$，不是最大值。正确答案为 $15$。</p>

<div style="text-align:center;margin:16px 0;">
  <img class="original-image" style="width:480px;height:auto;" src="images/p34_sol.svg" alt="p34 篱笆分段结构图" />
  <p class="original-image-caption" onclick="openImgOverlay('p34-sol')">📷 点击查看原图</p>
  <div class="img-overlay" id="overlay-p34-sol">
    <div class="img-overlay-box" id="overlayBox-p34-sol" onmousedown="startDrag(event,'p34-sol')">
      <span class="img-overlay-close" onclick="closeImgOverlay('p34-sol')">✕</span>
      <img src="images/p34_sol.svg" alt="p34 篱笆分段结构图">
      <span class="img-resize-handle" onmousedown="startResize(event,'p34-sol')"></span>
    </div>
  </div>
  <p style="color:#64748b;font-size:13px;margin-top:8px;">图：篱笆七段结构（左侧 $AD$ 靠墙不用篱笆），$AE = DF = HG = 2y$，$EB = FC = y$，$EF = BC = x$</p>
</div>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">$BC = 15$ m 时，矩形区域 $ABCD$ 的面积最大，最大面积为 $168.75$ m²</span>
</div>
`
}
];
