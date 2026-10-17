// problems-data.最大利润问题.js
// 「最大利润问题」分类题目数组。新增题目直接在本文件追加对象后运行 node build.js。

module.exports = [
{
    id: "p29",
    file: "p29.html",
    title: "p29 大庆中考 A、B 文创纪念品",
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
<p>先把 A、B 纪念品的相关信息整理成下表：</p>
<table class="kb-table">
  <thead><tr><th>项目</th><th>信息整理</th></tr></thead>
  <tbody>
    <tr><td>每个 A 纪念品成本</td><td>$25$ 元</td></tr>
    <tr><td>每个 B 纪念品成本</td><td>$35$ 元</td></tr>
    <tr><td>一套纪念品（1 个 A + 1 个 B）成本</td><td>$25 + 35 = 60$ 元</td></tr>
    <tr><td>每套售价 $a$（整数）</td><td>$65 \\leq a \\leq 72$ 元</td></tr>
    <tr><td>售价 $72$ 元时的销量</td><td>$80$ 套 / 天</td></tr>
    <tr><td>每降价 $1$ 元</td><td>销量增加 $10$ 套</td></tr>
    <tr><td>售价为 $a$ 元时的销量</td><td>$80 + 10(72-a) = 800 - 10a$ 套</td></tr>
    <tr><td>单套利润</td><td>$a - 60$ 元</td></tr>
    <tr><td>每天利润 $W$</td><td>$W = (a - 60)(800 - 10a)$ 元</td></tr>
  </tbody>
</table>

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
},
{
    id: "p30",
    file: "p30.html",
    title: "p30 熊猫公仔 约束销量求最大利润",
    type: "最大利润问题",
    topics: ["待定系数法", "一次函数", "二次函数", "配方求最值", "不等式约束"],
    difficulty: 3,
    category: "最大利润问题",
    content: `
<div class="prob-statement">
  <p>大熊猫属于中国独有的一种动物，数量稀少，被称为"中国国宝"。某店专门销售熊猫公仔玩具，成本为 $30$ 元/件，每天的销售量 $y$（件）与销售单价 $x$（元）之间存在如图所示的一次函数关系（图象过点 $(40,\\ 300)$ 与 $(55,\\ 150)$）。若规定每天熊猫公仔玩具的销售量不低于 $240$ 件，则每天获取的最大利润为________元。</p>
  <p>（原题配图为一次函数图象，此处已按图象信息重绘于解题过程内）</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>待定系数法求一次函数</td><td>已知图象上两点 $(x_1, y_1)$、$(x_2, y_2)$，设 $y = kx + b$ 代入解方程组求 $k$、$b$</td></tr>
    <tr><td>利润三要素</td><td>总利润 $=$（单件售价 $-$ 单件成本）$\\times$ 销售量</td></tr>
    <tr><td>不等式约束</td><td>"销售量不低于 $240$ 件"即 $y \\geq 240$，代入一次函数解出售价范围</td></tr>
    <tr><td>二次函数配方求最值</td><td>$W = a(x-h)^2 + k$，$a < 0$ 开口向下，顶点 $(h, k)$ 是全程最高点</td></tr>
    <tr><td>顶点不在区间内看单调性</td><td>对称轴落在约束区间右侧且开口向下时，区间内 $W$ 随 $x$ 增大而增大，最大值在区间右端点取得</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<div class="def-red"><strong>第一步：待定系数法求一次函数关系式。</strong>设 $y = kx + b$。图象过点 $(40,\\ 300)$ 与 $(55,\\ 150)$，代入得：</div>
<div class="formula-block">$\\begin{cases} 40k + b = 300 \\\\ 55k + b = 150 \\end{cases}$</div>
<div class="def-red"><strong>第二步：加减消元求解。</strong>两式相减（下式 $-$ 上式）：$15k = -150$，所以 $k = -10$。代回第一式：$-400 + b = 300$，所以 $b = 700$。</div>
<div class="formula-block">$y = -10x + 700$</div>
<div class="def-red"><strong>第三步：把"销量不低于 240 件"翻译成售价范围。</strong>令 $y \\geq 240$：</div>
<div class="formula-block">$-10x + 700 \\geq 240 \\quad\\Longrightarrow\\quad -10x \\geq -460 \\quad\\Longrightarrow\\quad x \\leq 46$</div>
<p>又因为售价必须高于成本 $30$ 元（否则亏本），所以售价范围是 $30 < x \\leq 46$。</p>
<div class="def-red"><strong>第四步：建立利润函数并配方。</strong>每件利润 $x - 30$ 元，销量 $y = -10x + 700$ 件：</div>
<div class="formula-block">$W = (x - 30)(-10x + 700) = -10x^2 + 700x + 300x - 21000 = -10x^2 + 1000x - 21000$</div>
<div class="formula-block">$W = -10\\left(x^2 - 100x\\right) - 21000 = -10\\left(x^2 - 100x + 50^2 - 50^2\\right) - 21000$</div>
<div class="formula-block">$W = -10(x - 50)^2 + 10\\times 2500 - 21000 = -10(x - 50)^2 + 4000$</div>
<div class="def-red"><strong>第五步：顶点不在约束区间内，看单调性取端点。</strong>抛物线开口向下（$-10 < 0$），对称轴 $x = 50$。但约束区间是 $30 < x \\leq 46$，顶点 $x = 50$ 落在区间<strong>右侧之外</strong>，所以整个区间位于对称轴左侧——在此区间内 $W$ 随 $x$ 增大而增大。因此 $x$ 取区间右端点 $x = 46$（此时销量恰好 $y = -10\\times 46 + 700 = 240$ 件，满足"不低于 240 件"）时利润最大：</div>
<div class="formula-block">$W_{\\max} = (46 - 30) \\times 240 = 16 \\times 240 = 3840$</div>
<p><strong>检验（区间内再取一点对比）</strong>：$x = 45$ 时 $y = 250$，$W = 15 \\times 250 = 3750 < 3840$；$x = 44$ 时 $y = 260$，$W = 14 \\times 260 = 3640 < 3840$。确实 $x = 46$ 时最大。</p>

<div style="text-align:center; margin:14px 0 6px 0;">
  <img class="original-image" style="width:480px;height:auto;cursor:zoom-in;" src="images/p30_sol.svg" alt="p30 一次函数图象与约束区域" onclick="openImgOverlay('p30-sol')" />
  <div style="margin-top:4px;"><button class="img-overlay-btn" onclick="openImgOverlay('p30-sol')">📷 点击查看原图</button></div>
</div>
<div class="img-overlay" id="overlay-p30-sol" onclick="closeImgOverlay('p30-sol')">
  <img src="images/p30_sol.svg" alt="p30 一次函数图象与约束区域（放大）" />
</div>
<p class="img-caption" style="text-align:center;color:#64748b;font-size:13px;">图：一次函数 $y = -10x + 700$ 过 $(40,\\ 300)$、$(55,\\ 150)$ 两点；红线 $y = 240$ 与图象交于 $(46,\\ 240)$，浅红区域即允许的售价范围 $30 < x \\leq 46$</p>

<div class="answer-box">
  <span class="answer-label">✅ 答案：</span><span class="answer-value">销售单价为 $46$ 元时利润最大，每天获取的最大利润为 $3840$ 元</span>
</div>
`
},
{
    id: "p31",
    file: "p31.html",
    title: "p31 白鹅投资分配求最大总利润",
    type: "最大利润问题",
    topics: ["待定系数法", "二次函数", "配方求最值", "利润分配"],
    difficulty: 3,
    category: "最大利润问题",
    image: "images/p31-fig.png",
    content: `
<div class="prob-statement">
  <p>某班同学前往养殖大户王大伯家开展调研活动，根据王大伯往年的饲养经验，他们发现饲养 A 种白鹅获得的利润 $y_1$（万元）与投资金额 $x$（万元）之间的函数关系式为 $y_1 = ax^2$，饲养 B 种白鹅获得的利润 $y_2$（万元）与投资金额 $x$（万元）之间的函数关系式为 $y_2 = -3ax^2 + bx$。画出两函数的图象如图所示（两图象交于点 $(10,\\ 5)$）。</p>
  <p>（1）求函数 $y_1$、$y_2$ 的表达式；</p>
  <p>（2）王大伯计划明年投资 $10$ 万元饲养 A、B 这两种白鹅。根据以往经验，如何分配资金，可使得总利润最大？最大总利润是多少？</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>待定系数法</td><td>已知图象交点坐标，代入函数式建立方程，解出未知系数 $a$、$b$</td></tr>
    <tr><td>交点含义</td><td>两图象交于 $(10,\\ 5)$，即 $x = 10$ 时 $y_1 = y_2 = 5$</td></tr>
    <tr><td>总利润</td><td>总利润 $=$ A 种利润 $+$ B 种利润，且两投资额之和 $= 10$ 万元</td></tr>
    <tr><td>二次函数配方求最值</td><td>$W = a(x-h)^2 + k$，$a < 0$ 开口向下，顶点 $(h,\\ k)$ 为最大值点</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第（1）问：求 $y_1$、$y_2$ 的表达式</h4>
<div class="def-red"><strong>第一步：由交点求 $a$。</strong>两图象交于点 $(10,\\ 5)$，说明 $x = 10$ 时 $y_1 = 5$。代入 $y_1 = ax^2$：</div>
<div class="formula-block">$5 = a \\times 10^2 = 100a \\quad\\Longrightarrow\\quad a = \\dfrac{5}{100} = \\dfrac{1}{20}$</div>
<div class="formula-block">$y_1 = \\dfrac{1}{20}x^2$</div>
<div class="def-red"><strong>第二步：由交点求 $b$。</strong>同样 $x = 10$ 时 $y_2 = 5$，代入 $y_2 = -3ax^2 + bx$（其中 $a = \\dfrac{1}{20}$）：</div>
<div class="formula-block">$5 = -3 \\times \\dfrac{1}{20} \\times 10^2 + 10b = -15 + 10b \\quad\\Longrightarrow\\quad 10b = 20 \\quad\\Longrightarrow\\quad b = 2$</div>
<div class="formula-block">$y_2 = -\\dfrac{3}{20}x^2 + 2x$</div>
<div class="answer-box">
  <span class="answer-label">✅（1）答案：</span><span class="answer-value">$y_1 = \\dfrac{1}{20}x^2$，$y_2 = -\\dfrac{3}{20}x^2 + 2x$</span>
</div>

<h4>第（2）问：投资 10 万元如何分配</h4>
<div class="def-red"><strong>第一步：设未知数。</strong>设饲养 A 种白鹅投资 $x$ 万元，则饲养 B 种白鹅投资 $(10 - x)$ 万元。</div>
<div class="def-red"><strong>第二步：写总利润。</strong>总利润 $W$ $=$ A 种利润 $+$ B 种利润：</div>
<div class="formula-block">$W = y_1(x) + y_2(10 - x) = \\dfrac{1}{20}x^2 + \\left[-\\dfrac{3}{20}(10 - x)^2 + 2(10 - x)\\right]$</div>
<div class="def-red"><strong>第三步：化简 B 种利润。</strong>先展开 $y_2(10 - x)$：</div>
<div class="formula-block">$-\\dfrac{3}{20}(10 - x)^2 + 2(10 - x) = -\\dfrac{3}{20}(100 - 20x + x^2) + 20 - 2x = -15 + 3x - \\dfrac{3}{20}x^2 + 20 - 2x = -\\dfrac{3}{20}x^2 + x + 5$</div>
<div class="def-red"><strong>第四步：合并同类项。</strong></div>
<div class="formula-block">$W = \\dfrac{1}{20}x^2 + \\left(-\\dfrac{3}{20}x^2 + x + 5\\right) = -\\dfrac{2}{20}x^2 + x + 5 = -\\dfrac{1}{10}x^2 + x + 5$</div>
<div class="def-red"><strong>第五步：配方求最值。</strong></div>
<div class="formula-block">$W = -\\dfrac{1}{10}\\left(x^2 - 10x\\right) + 5 = -\\dfrac{1}{10}\\left(x^2 - 10x + 25\\right) + 2.5 + 5 = -\\dfrac{1}{10}(x - 5)^2 + 7.5$</div>
<p>抛物线开口向下（$-\\dfrac{1}{10} < 0$），顶点 $(5,\\ 7.5)$ 是最高点，且 $x = 5$ 在 $0 \\leq x \\leq 10$ 内，所以当 $x = 5$ 时总利润最大。</p>
<div class="formula-block">$x = 5 \\text{ 时，} W_{\\max} = 7.5$</div>
<p><strong>检验（端点与顶点对比）</strong>：$x = 0$（全投 B，$10$ 万）时 $W = y_2(10) = 5$；$x = 10$（全投 A）时 $W = y_1(10) = 5$；$x = 5$ 时 $W = y_1(5) + y_2(5) = 1.25 + 6.25 = 7.5$。确实 $x = 5$ 时最大。</p>

<div style="text-align:center; margin:14px 0 6px 0;">
  <img class="original-image" style="width:480px;height:auto;cursor:zoom-in;" src="images/p31_sol.svg" alt="p31 双抛物线图象交于 (10,5)" onclick="openImgOverlay('p31-sol')" />
  <div style="margin-top:4px;"><button class="img-overlay-btn" onclick="openImgOverlay('p31-sol')">📷 点击查看原图</button></div>
</div>
<div class="img-overlay" id="overlay-p31-sol" onclick="closeImgOverlay('p31-sol')">
  <img src="images/p31_sol.svg" alt="p31 双抛物线图象（放大）" />
</div>
<p class="img-caption" style="text-align:center;color:#64748b;font-size:13px;">图：$y_1 = \\dfrac{1}{20}x^2$（蓝，开口向上）与 $y_2 = -\\dfrac{3}{20}x^2 + 2x$（绿，开口向下）交于 $(10,\\ 5)$ 与原点 $O$ 两点</p>

<div class="answer-box">
  <span class="answer-label">✅（2）答案：</span><span class="answer-value">A、B 两种白鹅各投资 $5$ 万元，最大总利润为 $7.5$ 万元</span>
</div>
`
},
{
    id: "p32",
    file: "p32.html",
    title: "p32 山野菜售价定价求最大利润",
    type: "最大利润问题",
    topics: ["待定系数法", "一次函数", "二次函数", "配方求最值"],
    difficulty: 3,
    category: "最大利润问题",
    content: `
<div class="prob-statement">
  <p>某蔬菜批发商以每千克 $18$ 元的价格购进一批山野菜。经市场调查发现，山野菜的日销售量 $y$（千克）与每千克售价 $x$（元）之间满足 $y = -3x + b$ 的函数关系，当 $x = 20$ 时，$y = 66$。</p>
  <p>（1）求 $b$ 的值。</p>
  <p>（2）设该批发商每日销售这批山野菜所获得的利润为 $w$ 元。</p>
  <p>① 求 $w$ 关于 $x$ 的函数解析式；</p>
  <p>② 当每千克山野菜的售价定为多少元时，该批发商每日销售这批山野菜所获得的利润最大？最大利润为多少元？</p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>待定系数法</td><td>已知一组 $(x,\\ y)$ 的对应值，代入一次函数解出 $b$</td></tr>
    <tr><td>利润三要素</td><td>总利润 $=$（每千克售价 $-$ 每千克进价）$\\times$ 日销售量</td></tr>
    <tr><td>二次函数配方求最值</td><td>$w = a(x-h)^2 + k$，$a < 0$ 开口向下，顶点 $(h,\\ k)$ 为最大值点</td></tr>
    <tr><td>售价的合理范围</td><td>售价须高于进价 $18$ 元且销售量为正，即 $18 < x < 42$，验证顶点是否落在此范围内</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第（1）问：求 $b$ 的值</h4>
<div class="def-red"><strong>代入求 $b$。</strong>已知当 $x = 20$ 时 $y = 66$，代入 $y = -3x + b$：</div>
<div class="formula-block">$66 = -3 \\times 20 + b = -60 + b \\quad\\Longrightarrow\\quad b = 126$</div>
<p>所以日销售量与售价的关系式为 $y = -3x + 126$。</p>
<div class="answer-box">
  <span class="answer-label">✅（1）答案：</span><span class="answer-value">$b = 126$</span>
</div>

<h4>第（2）问：求 $w$ 解析式与最大利润</h4>
<div class="def-red"><strong>① 写利润函数。</strong>每千克售价 $x$ 元、进价 $18$ 元，每千克利润 $= x - 18$；日销售量 $y = -3x + 126$ 千克，所以：</div>
<div class="formula-block">$w = (x - 18)(-3x + 126) = -3x^2 + 126x + 54x - 2268 = -3x^2 + 180x - 2268$</div>
<div class="def-red"><strong>② 配方求最大利润。</strong>提出二次项系数 $-3$ 后配方：</div>
<div class="formula-block">$w = -3\\left(x^2 - 60x\\right) - 2268 = -3\\left(x^2 - 60x + 30^2 - 30^2\\right) - 2268$</div>
<div class="formula-block">$w = -3(x - 30)^2 + 3 \\times 900 - 2268 = -3(x - 30)^2 + 2700 - 2268 = -3(x - 30)^2 + 432$</div>
<p>抛物线开口向下（系数 $-3 < 0$），顶点 $(30,\\ 432)$ 是最高点。又因为售价须高于进价且销量为正：$18 < x < 42$（$y = -3x + 126 > 0$ 得 $x < 42$），顶点 $x = 30$ 正好落在该范围内，所以：</p>
<div class="formula-block">$x = 30 \\text{ 时，} w_{\\max} = 432$</div>
<p><strong>检验（顶点两侧逐个验证）</strong>：$x = 28$ 时 $y = 42$，$w = 10 \\times 42 = 420$；$x = 30$ 时 $y = 36$，$w = 12 \\times 36 = 432$；$x = 32$ 时 $y = 30$，$w = 14 \\times 30 = 420$。确实 $x = 30$ 时利润最大。</p>
<div class="answer-box">
  <span class="answer-label">✅（2）答案：</span><span class="answer-value">$w = -3x^2 + 180x - 2268$；售价定为 $30$ 元时利润最大，最大利润 $432$ 元</span>
</div>
`
}
];
