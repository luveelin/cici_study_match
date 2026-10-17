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
  }
];
