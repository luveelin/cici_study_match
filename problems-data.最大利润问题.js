// problems-data.最大利润问题.js
// 「最大利润问题」分类题目数组。新增题目直接在本文件追加对象后运行 node build.js。

module.exports = [
{
    id: "p29",
    file: "p29.html",
    title: "p29 最大利润问题——大庆中考 A、B 文创纪念品",
    type: "最大利润问题",
    topics: ["二元一次方程组", "二次函数", "配方求最值", "利润问题"],
    difficulty: 3,
    category: "最大利润问题",
    content: `
<div class="prob-statement">
  <p>[2025·大庆中考] 为推进我市"红色研学"文化旅游发展，大庆博物馆新推出 A、B 两种文创纪念品。已知 $2$ 个 A 纪念品和 $3$ 个 B 纪念品的成本和是 $155$ 元；$4$ 个 A 纪念品和 $1$ 个 B 纪念品的成本和是 $135$ 元。一套纪念品由一个 A 纪念品和一个 B 纪念品组成。规定：每套纪念品的售价不低于 $65$ 元且不高于 $72$ 元（每套纪念品售价为整数）。如果每套纪念品的售价为 $72$ 元，那么每天可销售 $80$ 套。经调查发现，每套纪念品的售价每降价 $1$ 元，其销售量相应增加 $10$ 套。设每天的利润为 $W$（元），每套纪念品的售价为 $a$ 元（$65 \\leq a \\leq 72$ 且 $a$ 为整数）。</p>
  <p>（1）分别求出每个 A 纪念品和每个 B 纪念品的成本；</p>
  <p>（2）求当 $a$ 为何值时，每天的利润 $W$ 最大。</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>二元一次方程组</td><td>两个未知数、两个等量关系，代入消元或加减消元求解</td></tr>
    <tr><td>利润三要素</td><td>利润 $=$（售价 $-$ 成本）$\\times$ 销售量；单件利润 $=$ 售价 $-$ 成本</td></tr>
    <tr><td>销量随降价变化</td><td>售价 $72$ 元卖 $80$ 套，每降 $1$ 元多卖 $10$ 套：售价 $a$ 元时销量 $= 80 + 10(72-a)$</td></tr>
    <tr><td>二次函数配方求最值</td><td>$y = ax^2+bx+c$ 配方为 $y = a(x-h)^2+k$，顶点 $(h,k)$；$a<0$ 开口向下取最大值 $k$</td></tr>
    <tr><td>顶点是否在区间内</td><td>求最值先看对称轴（顶点横坐标）是否落在自变量的取值范围 $[65,\\ 72]$ 内</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第（1）问：求每个 A、B 的成本</h4>
<div class="def-red"><strong>第一步：设未知数、列方程组。</strong>设每个 A 纪念品的成本为 $m$ 元，每个 B 纪念品的成本为 $n$ 元。由"成本和"得：</div>
<div class="formula-block">$\\begin{cases} 2m + 3n = 155 \\\\ 4m + n = 135 \\end{cases}$</div>
<div class="def-red"><strong>第二步：代入消元。</strong>由 $4m + n = 135$ 得 $n = 135 - 4m$，代入 $2m + 3n = 155$：</div>
<div class="formula-block">$2m + 3(135 - 4m) = 155 \\quad\\Longrightarrow\\quad 2m + 405 - 12m = 155 \\quad\\Longrightarrow\\quad -10m = -250$</div>
<div class="formula-block">$m = 25, \\qquad n = 135 - 4\\times 25 = 35$</div>
<p>所以：每个 A 纪念品成本 $25$ 元，每个 B 纪念品成本 $35$ 元，<strong>一套成本 $= 25 + 35 = 60$ 元</strong>。</p>
<div class="answer-box">
  <span class="answer-label">✅（1）答案：</span><span class="answer-value">每个 A 纪念品成本 $25$ 元，每个 B 纪念品成本 $35$ 元（一套 $60$ 元）</span>
</div>

<h4>第（2）问：a 为何值时 W 最大</h4>
<div class="def-red"><strong>第一步：写出销量表达式。</strong>每套成本 $60$ 元，售价 $a$ 元，单套利润 $a - 60$。售价 $72$ 元卖 $80$ 套，每降 $1$ 元多卖 $10$ 套，共降了 $(72-a)$ 元，所以售价 $a$ 元时：</div>
<div class="formula-block">$\\text{销量} = 80 + 10(72-a) = 80 + 720 - 10a = 800 - 10a$</div>
<div class="def-red"><strong>第二步：建立利润函数。</strong>利润 $=$ 单套利润 $\\times$ 销量：</div>
<div class="formula-block">$W = (a - 60)(800 - 10a) = 800a - 10a^2 - 48000 + 600a = -10a^2 + 1400a - 48000$</div>
<div class="def-red"><strong>第三步：配方求最值。</strong>提出二次项系数 $-10$ 后配方：</div>
<div class="formula-block">$W = -10(a^2 - 140a) - 48000 = -10\\left(a^2 - 140a + 70^2 - 70^2\\right) - 48000$</div>
<div class="formula-block">$W = -10(a - 70)^2 + 10\\times 70^2 - 48000 = -10(a - 70)^2 + 49000 - 48000 = -10(a - 70)^2 + 1000$</div>
<p>抛物线开口向下（系数 $-10 < 0$），顶点 $(70,\\ 1000)$ 是最高点。又因为 $a = 70$ 满足 $65 \\leq a \\leq 72$ 且是整数，正好落在取值范围内，所以：</p>
<div class="formula-block">$a = 70 \\text{ 时，} W_{\\max} = 1000$</div>
<p><strong>检验（顶点两侧逐个验证）</strong>：$a = 72$：销量 $80$ 套，$W = 12\\times 80 = 960$；$a = 71$：$11\\times 90 = 990$；$a = 70$：$10\\times 100 = 1000$；$a = 69$：$9\\times 110 = 990$；$a = 65$：$5\\times 150 = 750$。确实 $a = 70$ 时利润最大。</p>
<div class="answer-box">
  <span class="answer-label">✅（2）答案：</span><span class="answer-value">$a = 70$ 时，每天最大利润 $W_{\\max} = 1000$ 元</span>
</div>
`
}
];
