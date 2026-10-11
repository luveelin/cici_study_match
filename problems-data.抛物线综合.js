// problems-data.抛物线综合.js
// 「抛物线综合」分类题目数组。新增题目直接在本文件追加对象后运行 node build.js。

module.exports = [
{
    id: "p26",
    file: "p26.html",
    title: "p26 抛物线平移、等边三角形与恒过定点",
    type: "抛物线综合",
    topics: ["二次函数", "图象平移", "等边三角形", "勾股定理", "恒过定点"],
    difficulty: 4,
    category: "抛物线综合",
    image: "images/p26.png",
    content: `
<div class="prob-statement">
  <p>[2026 蔡甸、黄陂、新洲期末联考] 将抛物线 $y = x^2 - 2$ 向右平移 $1$ 个单位，再向下平移 $2t$（$t > 0$）个单位，得到抛物线 $C_1$。</p>
  <p>（1）直接写出抛物线 $C_1$ 的解析式（用含 $t$ 的式子表示）；</p>
  <p>（2）如图 1，抛物线 $C_1$ 的顶点为 $M$，抛物线 $C_1$ 与直线 $y = -t$ 交于 $A$、$B$ 两点，连接 $MA$、$MB$，若 $\\triangle MAB$ 为等边三角形，求 $t$ 的值；</p>
  <p style="text-align:center;"><img src="images/p26-fig1.png" alt="图 1：抛物线 C1、直线 y=-1 与等边三角形 MAB" style="max-width: 240px; border: 1px solid #e2e8f0; border-radius: 6px;"></p>
  <p>（3）如图 2，在（2）的条件下，一次函数 $y = kx - 2k + 1$（$k \\neq 2$）与抛物线 $C_1$ 交于 $C$、$D$ 两点，过点 $C$ 的直线 $y = 2x + b$ 交抛物线于另一点 $E$。求证：直线 $DE$ 恒过定点，并求出该定点坐标。</p>
  <p style="text-align:center;"><img src="images/p26-fig2.png" alt="图 2：直线与抛物线交于 C、D，过 C 的直线交抛物线于 E" style="max-width: 220px; border: 1px solid #e2e8f0; border-radius: 6px;"></p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>抛物线平移</td><td>左加右减（$x$）、上加下减（常数项）：$y = (x-h)^2 + k$ 顶点 $(h, k)$</td></tr>
    <tr><td>等边三角形三线合一</td><td>等边三角形任一边上的中线、高线、角平分线三线合一</td></tr>
    <tr><td>勾股定理</td><td>直角三角形中 $a^2 + b^2 = c^2$，用于把"高"与"半边"联系起来</td></tr>
    <tr><td>根与系数（比较系数法）</td><td>若 $x^2 + px + q = 0$ 的两根是 $m$、$n$，则 $x^2+px+q = (x-m)(x-n)$，展开比较系数得 $m+n = -p$，$mn = q$</td></tr>
    <tr><td>抛物线上两点的连线斜率</td><td>$f(x) = x^2+px+q$ 上两点横坐标 $u$、$v$：连线斜率 $= \\dfrac{f(u)-f(v)}{u-v} = u+v+p$（平方差分解）</td></tr>
    <tr><td>恒过定点</td><td>把直线方程整理成"$y = \\lambda(x - x_0) + y_0$"的形式，当 $x = x_0$ 时 $y = y_0$ 与 $\\lambda$ 无关</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第（1）问：写平移后的解析式</h4>
<p>平移口诀"<strong>左加右减（$x$），上加下减（整体）</strong>"：</p>
<ul>
  <li>向右平移 $1$ 个单位：$x$ 换成 $x - 1$，得 $y = (x-1)^2 - 2$；</li>
  <li>再向下平移 $2t$ 个单位：整体再减 $2t$。</li>
</ul>
<div class="answer-box">
  <span class="answer-label">✅（1）答案：</span><span class="answer-value">$y = (x-1)^2 - 2 - 2t$（顶点式，顶点为 $(1,\\ -2-2t)$）</span>
</div>

<h4>第（2）问：用等边三角形 + 勾股定理求 $t$</h4>
<p><strong>第一步：表示 $A$、$B$ 与 $AB$ 的长。</strong>联立 $C_1$ 与直线 $y = -t$：</p>
<div class="formula-block">$(x-1)^2 - 2 - 2t = -t\\quad\\Longrightarrow\\quad (x-1)^2 = 2 + t$</div>
<p>因 $t > 0$，故 $2 + t > 0$，开方得 $x = 1 \\pm \\sqrt{2+t}$，所以</p>
<div class="formula-block">$A\\left(1 - \\sqrt{2+t},\\ -t\\right), \\quad B\\left(1 + \\sqrt{2+t},\\ -t\\right), \\quad AB = 2\\sqrt{2+t}$</div>
<p><strong>第二步：作辅助线。</strong>设 $AB$ 的中点为 $N$。$\\triangle MAB$ 是等边三角形，由<strong>三线合一</strong>，$MN \\perp AB$ 且 $N$ 是 $AB$ 中点。又 $A$、$B$ 关于对称轴 $x = 1$ 对称，所以 $N$ 的横坐标是 $1$，即 $N(1,\\ -t)$，而 $M(1,\\ -2-2t)$，故</p>
<div class="formula-block">$MN = (-t) - (-2-2t) = 2 + t, \\qquad BN = \\dfrac{1}{2}AB = \\sqrt{2+t}$</div>
<p><strong>第三步：勾股定理列方程。</strong>在 Rt$\\triangle MNB$ 中，$\\angle MNB = 90^{\\circ}$，记 $s = \\sqrt{2+t}$（则 $MN = s^2$，$BN = s$）。等边三角形中 $MB = AB = 2s$，由勾股定理：</p>
<div class="formula-block">$MN^2 + BN^2 = MB^2 \\quad\\Longrightarrow\\quad s^4 + s^2 = 4s^2$</div>
<p>即 $s^4 = 3s^2$。因 $s > 0$，两边除以 $s^2$ 得 $s^2 = 3$，即</p>
<div class="formula-block">$2 + t = 3 \\quad\\Longrightarrow\\quad t = 1$</div>
<p>验证：$t = 1 > 0$ ✓。此时 $C_1$：$y = (x-1)^2 - 4$，$M(1, -4)$，$A(1-\\sqrt{3}, -1)$，$B(1+\\sqrt{3}, -1)$。</p>
<p style="text-align:center;">
  <img src="images/p26_sol.svg" alt="p26 第(2)问辅助线图：中点 N 与 MN⊥AB" onclick="openImgOverlay('p26sol')" style="max-width: 420px; border: 1px solid #e2e8f0; border-radius: 6px; margin-top: 8px; cursor: zoom-in;">
</p>
<p class="original-image-caption" onclick="openImgOverlay('p26sol')">📷 点击查看原图</p>
<div class="img-overlay" id="overlay-p26sol">
  <div class="img-overlay-box" id="overlayBox-p26sol" onmousedown="startDrag(event,'p26sol')">
    <span class="img-overlay-close" onclick="closeImgOverlay('p26sol')">✕</span>
    <img src="images/p26_sol.svg" alt="p26 第(2)问辅助线图原图">
    <span class="img-resize-handle" onmousedown="startResize(event,'p26sol')"></span>
  </div>
</div>
<div class="answer-box">
  <span class="answer-label">✅（2）答案：</span><span class="answer-value">$t = 1$</span>
</div>

<h4>第（3）问：证明直线 DE 恒过定点</h4>
<p>由（2），$t = 1$，抛物线 $C_1$ 化为一般式（便于计算）：</p>
<div class="formula-block">$y = (x-1)^2 - 4 = x^2 - 2x - 3$</div>

<div class="def-red"><strong>第一步：设点，利用直线 CD 建立约束。</strong>设 $C(m,\\ m^2-2m-3)$，$D(n,\\ n^2-2n-3)$（$m \\neq n$）。$C$、$D$ 都在直线 $y = kx-2k+1$ 上，联立：</div>
<div class="formula-block">$x^2 - 2x - 3 = kx - 2k + 1 \\quad\\Longrightarrow\\quad x^2 - (k+2)x + (2k-4) = 0$</div>
<p>这个方程的两个根正是 $m$、$n$，所以二次三项式可以因式分解：</p>
<div class="formula-block">$x^2 - (k+2)x + (2k-4) = (x-m)(x-n) = x^2 - (m+n)x + mn$</div>
<p>比较两边系数：</p>
<div class="formula-block">$m + n = k + 2, \\qquad mn = 2k - 4$</div>
<p>由第一式 $k = m + n - 2$，代入第二式消去 $k$：</p>
<div class="formula-block">$mn = 2(m+n) - 8 \\quad \\text{即} \\quad (m-2)(n-2) = -4$</div>

<div class="def-red"><strong>第二步：求出点 $E$ 的横坐标。</strong>直线 $y = 2x + b$ 过点 $C(m,\\ m^2-2m-3)$，代入得 $b = m^2 - 4m - 3$。它与抛物线的交点满足：</div>
<div class="formula-block">$x^2 - 2x - 3 = 2x + b \\quad\\Longrightarrow\\quad x^2 - 4x - (3+b) = 0$</div>
<p>把 $3 + b = m^2 - 4m$ 代入，方程变为</p>
<div class="formula-block">$x^2 - 4x - m^2 + 4m = 0 \\quad\\Longrightarrow\\quad (x - m)(x + m - 4) = 0$</div>
<p>一根是 $x = m$（点 $C$），另一根就是点 $E$ 的横坐标：</p>
<div class="formula-block">$x_E = 4 - m$</div>

<div class="def-red"><strong>第三步：求直线 DE 的斜率与方程。</strong>记 $e = 4 - m$。抛物线 $f(x) = x^2-2x-3$ 上两点 $D(n, f(n))$、$E(e, f(e))$ 的连线斜率用平方差分解：</div>
<div class="formula-block">$k_{DE} = \\dfrac{f(e) - f(n)}{e - n} = \\dfrac{(e^2 - n^2) - 2(e-n)}{e-n} = e + n - 2 = n - m + 2$</div>
<p>由点斜式，直线 $DE$：</p>
<div class="formula-block">$y = (n - m + 2)x + \\left[f(n) - (n-m+2)n\\right]$</div>
<p>整理截距（$f(n) = n^2 - 2n - 3$）：</p>
<div class="formula-block">$f(n) - (n-m+2)n = n^2 - 2n - 3 - n^2 + mn - 2n = mn - 4n - 3$</div>
<p>代入第一步的约束 $mn = 2m + 2n - 8$：</p>
<div class="formula-block">$mn - 4n - 3 = 2m + 2n - 8 - 4n - 3 = 2m - 2n - 11$</div>
<p>于是直线 $DE$ 的方程为</p>
<div class="formula-block">$y = (n - m + 2)x + 2m - 2n - 11$</div>

<div class="def-red"><strong>第四步：凑出定点。</strong>注意到 $2m - 2n - 11 = -2(n - m + 2) - 7$，代入上式：</div>
<div class="formula-block">$y = (n - m + 2)x - 2(n - m + 2) - 7 = (n - m + 2)(x - 2) - 7$</div>
<p>系数 $n - m + 2$ 随 $k$ 变化，但当 $x = 2$ 时，第一项整体消失：</p>
<div class="formula-block">$y = -7 \\quad (\\text{与 } k \\text{ 无关})$</div>
<p>所以无论 $k$ 取何值（$k \\neq 2$），直线 $DE$ 总经过点 $(2,\\ -7)$。</p>
<p><strong>验证</strong>（取 $k = 0$）：直线 $y = 1$ 与抛物线交于 $x = 1 \\pm \\sqrt{5}$，按同样方法作出的直线 $DE$ 在 $x = 2$ 处 $y = -7$ ✓。</p>
<p><strong>补充说明 $k \\neq 2$ 的作用：</strong>$k = 2$ 时直线 $CD$（$y = 2x - 3$）与直线 $CE$（$y = 2x + b$）斜率相同、互相平行，此时$C$、$D$、$E$ 的位置关系退化，故题目排除 $k = 2$。</p>
<div class="answer-box">
  <span class="answer-label">✅（3）答案：</span><span class="answer-value">直线 $DE$ 恒过定点 $(2,\\ -7)$</span>
</div>
`
  },
{
    id: "p27",
    file: "p27.html",
    title: "p27 抛物线交点、中垂线定 D 与 OM=ON 探究",
    type: "抛物线综合",
    topics: ["二次函数", "抛物线与直线交点", "垂直平分线", "平方差公式", "根与系数", "中点坐标"],
    difficulty: 4,
    category: "抛物线综合",
    image: "images/p27.png",
    content: `
<div class="prob-statement">
  <p>[2026 东湖期末] 抛物线 $L_1: y = x^2 + 2x - 3$ 与 $x$ 轴交于 $A$、$B$ 两点，与直线 $y = -x + 1$ 交于 $B$、$C$ 两点。</p>
  <p>（1）求点 $C$ 的坐标；</p>
  <p>（2）如图 1，若点 $D$ 在抛物线 $L_1$ 上，且满足 $DB = DC$，求点 $D$ 的横坐标；</p>
  <p style="text-align:center;"><img src="images/p27-fig1.png" alt="图 1：抛物线 L1 与直线 BC" style="max-width: 220px; border: 1px solid #e2e8f0; border-radius: 6px;"></p>
  <p>（3）如图 2，将抛物线 $L_1$ 向右平移得到抛物线 $L_2$，使抛物线 $L_2$ 的顶点 $E$ 在 $y$ 轴上。直线 $y = mx$ 与抛物线 $L_2$ 交于 $F$、$G$ 两点，直线 $y = nx$ 分别交直线 $EF$、$EG$ 于点 $M$、$N$。若 $OM = ON$，试探究 $m$ 与 $n$ 的数量关系。</p>
  <p style="text-align:center;"><img src="images/p27-fig2.png" alt="图 2：平移后的 L2 与直线 EF、EG、M、N" style="max-width: 220px; border: 1px solid #e2e8f0; border-radius: 6px;"></p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>抛物线与 $x$ 轴交点</td><td>令 $y = 0$，解一元二次方程</td></tr>
    <tr><td>两图象交点</td><td>联立两个解析式，交点横坐标就是方程的根</td></tr>
    <tr><td>平方差公式</td><td>$a^2 - b^2 = (a+b)(a-b)$，展开距离方程时避免硬乘</td></tr>
    <tr><td>线段垂直平分线</td><td>到线段两端距离相等的点组成中垂线：$DB = DC \\Longleftrightarrow D$ 在 $BC$ 的中垂线上</td></tr>
    <tr><td>抛物线平移</td><td>顶点式 $y = a(x-h)^2 + k$，左加右减（$h$）看顶点移动</td></tr>
    <tr><td>根与系数（比较系数法）</td><td>$x^2 + px + q = 0$ 两根为 $f$、$g$，则 $x^2+px+q = (x-f)(x-g)$，比较系数得 $f+g = -p$，$fg = q$</td></tr>
    <tr><td>中点坐标公式</td><td>$M$、$N$ 都在过原点 $O$ 的同一直线上时，$OM = ON \\Longleftrightarrow O$ 是 $MN$ 中点 $\\Longleftrightarrow x_M + x_N = 0$</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第（1）问：求点 C 的坐标</h4>
<div class="def-red"><strong>第一步：求 $A$、$B$。</strong>令 $y = 0$：</div>
<div class="formula-block">$x^2 + 2x - 3 = (x+3)(x-1) = 0 \\quad\\Longrightarrow\\quad x = -3 \\text{ 或 } x = 1$</div>
<p>所以 $A(-3,\\ 0)$，$B(1,\\ 0)$。</p>
<div class="def-red"><strong>第二步：联立求 $C$。</strong>$C$ 是抛物线与直线 $y = -x+1$ 的另一个交点，联立：</div>
<div class="formula-block">$x^2 + 2x - 3 = -x + 1 \\quad\\Longrightarrow\\quad x^2 + 3x - 4 = (x+4)(x-1) = 0$</div>
<p>$x = 1$ 正是点 $B$（说明直线确实过 $B$ ✓），另一个根 $x = -4$，代入直线得 $y = -(-4) + 1 = 5$。</p>
<div class="answer-box">
  <span class="answer-label">✅（1）答案：</span><span class="answer-value">$C(-4,\\ 5)$</span>
</div>

<h4>第（2）问：DB = DC，求 D 的横坐标</h4>
<div class="def-red"><strong>第一步：设点。</strong>$D$ 在 $L_1$ 上，设 $D(x,\\ y)$，其中 $y = x^2 + 2x - 3$。已知 $B(1,\\ 0)$，$C(-4,\\ 5)$。</div>
<div class="def-red"><strong>第二步：把 $DB = DC$ 两边平方，用勾股定理展开（水平、竖直差为直角边）。</strong></div>
<div class="formula-block">$(x-1)^2 + y^2 = (x+4)^2 + (y-5)^2$</div>
<p>移项后<strong>用平方差公式</strong>展开（避免硬乘）：</p>
<div class="formula-block">$(x-1)^2 - (x+4)^2 = (2x+3)\\times(-5) = -10x - 15$</div>
<div class="formula-block">$y^2 - (y-5)^2 = (2y-5)\\times 5 = 10y - 25$</div>
<p>两者相加为 $0$：$-10x - 15 + 10y - 25 = 0$，即：</p>
<div class="formula-block">$y = x + 4$</div>
<p><strong>几何意义</strong>：$y = x + 4$ 正是 $BC$ 的垂直平分线——到 $B$、$C$ 距离相等的点组成中垂线，$D$ 必须在它上面（可验证它过 $BC$ 中点 $(-\\tfrac{3}{2},\\ \\tfrac{5}{2})$ ✓）。</p>
<div class="def-red"><strong>第三步：代回抛物线。</strong>把 $y = x^2 + 2x - 3$ 代入 $y = x + 4$：</div>
<div class="formula-block">$x^2 + 2x - 3 = x + 4 \\quad\\Longrightarrow\\quad x^2 + x - 7 = 0$</div>
<p>判别式 $\\Delta = 1 + 28 = 29 > 0$，所以：</p>
<div class="formula-block">$x = \\dfrac{-1 \\pm \\sqrt{29}}{2}$</div>
<p>两个横坐标都符合题意（中垂线与抛物线有两个交点 $D_1$、$D_2$，见图）。</p>
<p style="text-align:center;">
  <img src="images/p27_sol.svg" alt="p27 第(2)问辅助线图：BC 中垂线 y=x+4 与抛物线交于 D1、D2" onclick="openImgOverlay('p27sol')" style="max-width: 300px; border: 1px solid #e2e8f0; border-radius: 6px; margin-top: 8px; cursor: zoom-in;">
</p>
<p class="original-image-caption" onclick="openImgOverlay('p27sol')">📷 点击查看原图</p>
<div class="img-overlay" id="overlay-p27sol">
  <div class="img-overlay-box" id="overlayBox-p27sol" onmousedown="startDrag(event,'p27sol')">
    <span class="img-overlay-close" onclick="closeImgOverlay('p27sol')">✕</span>
    <img src="images/p27_sol.svg" alt="p27 第(2)问辅助线图原图">
    <span class="img-resize-handle" onmousedown="startResize(event,'p27sol')"></span>
  </div>
</div>
<div class="answer-box">
  <span class="answer-label">✅（2）答案：</span><span class="answer-value">$D$ 的横坐标为 $\\dfrac{-1 + \\sqrt{29}}{2}$ 或 $\\dfrac{-1 - \\sqrt{29}}{2}$</span>
</div>

<h4>第（3）问：OM = ON，探究 m 与 n 的数量关系</h4>
<div class="def-red"><strong>第一步：求平移后的 $L_2$ 与顶点 $E$。</strong>$L_1 = (x+1)^2 - 4$，顶点 $(-1,\\ -4)$。向右平移使顶点落在 $y$ 轴上，需右移 $1$ 个单位：</div>
<div class="formula-block">$L_2: y = x^2 - 4, \\qquad E(0,\\ -4)$</div>
<div class="def-red"><strong>第二步：设 $F$、$G$，比较系数。</strong>$F(f,\\ mf)$、$G(g,\\ mg)$ 都在 $y = mx$ 与 $L_2$ 上，联立：</div>
<div class="formula-block">$x^2 - 4 = mx \\quad\\Longrightarrow\\quad x^2 - mx - 4 = 0$</div>
<p>它的两根是 $f$、$g$，所以 $x^2 - mx - 4 = (x-f)(x-g) = x^2 - (f+g)x + fg$，比较系数：</p>
<div class="formula-block">$f + g = m, \\qquad fg = -4$</div>
<div class="def-red"><strong>第三步：写出直线 $EF$、$EG$，求 $M$、$N$ 的横坐标。</strong>$EF$ 过 $E(0,\\ -4)$ 与 $F(f,\\ mf)$（$f \\neq 0$，因 $fg = -4$），斜率 $= \\dfrac{mf+4}{f}$：</div>
<div class="formula-block">$EF: y = \\dfrac{mf+4}{f}x - 4, \\qquad EG: y = \\dfrac{mg+4}{g}x - 4$</div>
<p>$M$ 在直线 $y = nx$ 上，代入 $EF$：$nx = \\dfrac{mf+4}{f}x - 4$，解得（分母不为 $0$，即 $EF$ 与 $y = nx$ 不平行）：</p>
<div class="formula-block">$x_M = \\dfrac{4f}{f(m-n) + 4}, \\qquad \\text{同理} \\qquad x_N = \\dfrac{4g}{g(m-n) + 4}$</div>
<div class="def-red"><strong>第四步：把 $OM = ON$ 翻译成中点条件。</strong>$M(x_M,\\ nx_M)$、$N(x_N,\\ nx_N)$ 都在过原点的直线 $y = nx$ 上，所以 $OM = ON$ 等价于 $O$ 是 $MN$ 的中点：</div>
<div class="formula-block">$x_M + x_N = 0$</div>
<div class="def-red"><strong>第五步：代入化简。</strong></div>
<div class="formula-block">$\\dfrac{4f}{f(m-n)+4} + \\dfrac{4g}{g(m-n)+4} = 0$</div>
<p>通分，分子为 $0$：</p>
<div class="formula-block">$f\\left[g(m-n)+4\\right] + g\\left[f(m-n)+4\\right] = 2fg(m-n) + 4(f+g) = 0$</div>
<div class="def-red"><strong>第六步：代入 $f + g = m$、$fg = -4$。</strong></div>
<div class="formula-block">$2\\times(-4)(m-n) + 4m = -8m + 8n + 4m = 0 \\quad\\Longrightarrow\\quad 4m = 8n \\quad\\Longrightarrow\\quad m = 2n$</div>
<p><strong>数值验证</strong>（取 $m = 2,\\ n = 1$）：$x^2 - 2x - 4 = 0$，$f = 1+\\sqrt5 \\approx 3.236$，$g = 1-\\sqrt5 \\approx -1.236$。代入第三步公式：$x_M = \\dfrac{4 \\times 3.236}{3.236 + 4} \\approx 1.789$，$x_N = \\dfrac{4 \\times (-1.236)}{-1.236 + 4} \\approx -1.789$，$x_M + x_N = 0$ ✓。</p>
<p>反之，当 $m = 2n$（且 $EF$、$EG$ 与 $y = nx$ 都相交）时上述每步都可逆，$OM = ON$ 成立；退化情形 $m = n = 0$ 也满足 $m = 2n$。</p>
<div class="answer-box">
  <span class="answer-label">✅（3）答案：</span><span class="answer-value">$m = 2n$（即 $n = \\dfrac{m}{2}$）</span>
</div>
`
  },
{
    id: "p28",
    file: "p28.html",
    title: "p28 待定系数、等角定 D 与 GF 定值",
    type: "抛物线综合",
    topics: ["二次函数", "待定系数", "平行线与内错角", "轴对称", "因式分解约分斜率", "定值问题"],
    difficulty: 4,
    category: "抛物线综合",
    image: "images/p28.png",
    content: `
<div class="prob-statement">
  <p>[2026 汉阳期末] 在平面直角坐标系中，$O$ 为原点，抛物线 $y = ax^2 - ax + c$（$a \\neq 0$）交 $x$、$y$ 轴于 $A$、$B$、$C$ 点。若 $A(-2,\\ 0)$，$C(0,\\ -6)$。</p>
  <p>（1）求抛物线解析式；</p>
  <p>（2）如图 1，连接 $AC$、$BC$，第四象限的抛物线上存在点 $D$，连 $DA$，使 $\\angle DAC = \\angle ACB$，请求 $D$ 点坐标；</p>
  <p style="text-align:center;"><img src="images/p28-fig1.png" alt="图 1：抛物线与 AC、BC、点 D" style="max-width: 220px; border: 1px solid #e2e8f0; border-radius: 6px;"></p>
  <p>（3）如图 2，$E$ 为抛物线上的点，直线 $BE$ 交 $y$ 轴于 $F$ 点，过点 $B$ 作 $AE$ 的平行线交 $y$ 轴于点 $G$，求 $GF$ 的长。</p>
  <p style="text-align:center;"><img src="images/p28-fig2.png" alt="图 2：直线 BE 交 y 轴于 F，过 B 平行 AE 交 y 轴于 G" style="max-width: 220px; border: 1px solid #e2e8f0; border-radius: 6px;"></p>
</div>

<details class="kb-details">
  <summary>📌 知识点总结（点击展开／收起）</summary>

<h3>📌 知识点总结</h3>
<table class="kb-table">
  <thead><tr><th>知识点</th><th>说明</th></tr></thead>
  <tbody>
    <tr><td>待定系数法</td><td>把已知点坐标代入 $y = ax^2 - ax + c$，解方程组求 $a$、$c$</td></tr>
    <tr><td>平行线与内错角</td><td>两直线平行 $\\Longleftrightarrow$ 内错角相等，是"转移角"的基本工具</td></tr>
    <tr><td>角平分线与轴对称</td><td>$\\angle DAC = \\angle PAC$ 说明 $AC$ 平分 $\\angle DAP$，射线 $AD$ 与射线 $AP$ 关于直线 $AC$ 对称</td></tr>
    <tr><td>求对称点</td><td>$P$ 关于直线 $l$ 的对称点 $P'$：$PP'$ 的中点在 $l$ 上，且 $PP' \\perp l$（垂直 $\\Longleftrightarrow$ 斜率乘积为 $-1$）</td></tr>
    <tr><td>斜率的因式分解约分</td><td>抛物线 $y = x^2-x-6$ 上连线斜率 $= \\dfrac{(x_1-x_2)(x_1+x_2-1)}{x_1-x_2} = x_1+x_2-1$（平方差/因式分解约分）</td></tr>
    <tr><td>定值问题</td><td>设动点坐标代入，若结果中参数被消去，则该量为定值</td></tr>
  </tbody>
</table>
</details>

<h3>✍️ 解题过程</h3>

<h4>第（1）问：求抛物线解析式</h4>
<div class="def-red"><strong>第一步：代入 $C(0,\\ -6)$。</strong>$x = 0$ 时 $y = c$，所以 $c = -6$。</div>
<div class="def-red"><strong>第二步：代入 $A(-2,\\ 0)$。</strong></div>
<div class="formula-block">$a\\times(-2)^2 - a\\times(-2) + (-6) = 0 \\quad\\Longrightarrow\\quad 4a + 2a = 6 \\quad\\Longrightarrow\\quad a = 1$</div>
<div class="formula-block">$L: y = x^2 - x - 6 = (x-3)(x+2)$</div>
<p>令 $y = 0$ 得 $x = -2$ 或 $3$，所以另一个 $x$ 轴交点 $B(3,\\ 0)$。</p>
<div class="answer-box">
  <span class="answer-label">✅（1）答案：</span><span class="answer-value">$y = x^2 - x - 6$（$B(3,\\ 0)$）</span>
</div>

<h4>第（2）问：∠DAC = ∠ACB，求第四象限的点 D</h4>
<div class="def-red"><strong>第一步：作平行线转移角。</strong>直线 $BC$：过 $C(0,\\ -6)$、$B(3,\\ 0)$，斜率 $= \\dfrac{0-(-6)}{3-0} = 2$，解析式 $y = 2x - 6$。过 $A$ 作 $AP \\parallel BC$，则 $AP$：$y = 2(x+2) = 2x+4$，交 $y$ 轴于 $P(0,\\ 4)$。</div>
<p>由 $AP \\parallel BC$，<strong>内错角相等</strong>：$\\angle PAC = \\angle ACB$。于是条件变成：</p>
<div class="formula-block">$\\angle DAC = \\angle ACB = \\angle PAC \\quad\\Longrightarrow\\quad AC \\text{ 平分 } \\angle DAP$</div>
<div class="def-red"><strong>第二步：确定射线 $AD$ 的两个候选位置。</strong>与射线 $AC$ 夹角等于 $\\angle PAC$ 的射线只有两条：射线 $AP$ 本身，以及它关于直线 $AC$ 的对称射线。</div>
<p><strong>情况①（射线 $AD$ 沿 $AP$ 方向）</strong>：联立 $y = 2x+4$ 与抛物线：$x^2-x-6 = 2x+4 \\Rightarrow (x-5)(x+2)=0$，交点 $(5,\\ 14)$ 在第一象限，舍去。</p>
<p><strong>情况②（$AD$ 与 $AP$ 关于 $AC$ 对称）</strong>：求 $P(0,\\ 4)$ 关于直线 $AC$ 的对称点 $P'$。</p>
<div class="def-red"><strong>第三步：求对称点 $P'(u,\\ v)$。</strong>直线 $AC$：$k = \\dfrac{-6-0}{0-(-2)} = -3$，解析式 $y = -3x - 6$。对称要满足两条：</div>
<p><strong>（a）$PP'$ 的中点在对称轴上</strong>：中点 $\\left(\\dfrac{u}{2},\\ \\dfrac{v+4}{2}\\right)$ 代入 $y = -3x-6$：</p>
<div class="formula-block">$\\dfrac{v+4}{2} = -3\\times\\dfrac{u}{2} - 6 \\quad\\Longrightarrow\\quad v = -3u - 16$</div>
<p><strong>（b）$PP' \\perp AC$</strong>（垂直 $\\Longleftrightarrow$ 斜率乘积为 $-1$）：$k_{PP'} = \\dfrac{v-4}{u}$，</p>
<div class="formula-block">$\\dfrac{v-4}{u}\\times(-3) = -1 \\quad\\Longrightarrow\\quad v = \\dfrac{u}{3} + 4$</div>
<p>联立（a）（b）：$\\dfrac{u}{3} + 4 = -3u - 16 \\Rightarrow \\dfrac{10u}{3} = -20 \\Rightarrow u = -6,\\ v = 2$，即 $P'(-6,\\ 2)$。</p>
<div class="def-red"><strong>第四步：写出直线 $AD$ 并联立。</strong>$AD$ 过 $A(-2,\\ 0)$ 与 $P'(-6,\\ 2)$，斜率 $= \\dfrac{2-0}{-6-(-2)} = -\\dfrac{1}{2}$：</div>
<div class="formula-block">$AD: y = -\\dfrac{1}{2}(x+2)$</div>
<p>与抛物线联立：</p>
<div class="formula-block">$x^2 - x - 6 = -\\dfrac{1}{2}(x+2) \\quad\\Longrightarrow\\quad 2x^2 - x - 10 = (x+2)(2x-5) = 0$</div>
<p>$x = -2$ 是点 $A$（舍），$x = \\dfrac{5}{2}$，代入得 $y = -\\dfrac{1}{2}\\times\\dfrac{9}{2} = -\\dfrac{9}{4}$。点 $\\left(\\dfrac{5}{2},\\ -\\dfrac{9}{4}\\right)$ 在第四象限 ✓。</p>
<p style="text-align:center;">
  <img src="images/p28_sol.svg" alt="p28 第(2)问辅助线图：AP∥BC 与对称线 AD" onclick="openImgOverlay('p28sol')" style="max-width: 340px; border: 1px solid #e2e8f0; border-radius: 6px; margin-top: 8px; cursor: zoom-in;">
</p>
<p class="original-image-caption" onclick="openImgOverlay('p28sol')">📷 点击查看原图</p>
<div class="img-overlay" id="overlay-p28sol">
  <div class="img-overlay-box" id="overlayBox-p28sol" onmousedown="startDrag(event,'p28sol')">
    <span class="img-overlay-close" onclick="closeImgOverlay('p28sol')">✕</span>
    <img src="images/p28_sol.svg" alt="p28 第(2)问辅助线图原图">
    <span class="img-resize-handle" onmousedown="startResize(event,'p28sol')"></span>
  </div>
</div>
<div class="answer-box">
  <span class="answer-label">✅（2）答案：</span><span class="answer-value">$D\\left(\\dfrac{5}{2},\\ -\\dfrac{9}{4}\\right)$</span>
</div>

<h4>第（3）问：求 GF 的长（定值）</h4>
<div class="def-red"><strong>第一步：设 $E$。</strong>设 $E(t,\\ t^2-t-6)$（图中 $E$ 在第四象限，$0 < t < 3$；$t \\neq -2,\\ 3$ 保证连线存在）。</div>
<div class="def-red"><strong>第二步：$AE$ 的斜率（因式分解约分）。</strong></div>
<div class="formula-block">$k_{AE} = \\dfrac{(t^2-t-6) - 0}{t-(-2)} = \\dfrac{(t+2)(t-3)}{t+2} = t - 3$</div>
<p>$BG \\parallel AE$ 且过 $B(3,\\ 0)$：$y = (t-3)(x-3)$。令 $x = 0$：</p>
<div class="formula-block">$G(0,\\ 9-3t)$</div>
<div class="def-red"><strong>第三步：$BE$ 的斜率与 $F$。</strong></div>
<div class="formula-block">$k_{BE} = \\dfrac{(t^2-t-6) - 0}{t-3} = \\dfrac{(t+2)(t-3)}{t-3} = t + 2$</div>
<p>直线 $BE$：$y = (t+2)(x-3)$，令 $x = 0$：</p>
<div class="formula-block">$F(0,\\ -3t-6)$</div>
<div class="def-red"><strong>第四步：作差求 $GF$。</strong>$0 < t < 3$ 时 $G$ 在 $x$ 轴上方、$F$ 在下方：</div>
<div class="formula-block">$GF = y_G - y_F = (9-3t) - (-3t-6) = 15$</div>
<p><strong>$t$ 被完全消掉——$GF$ 是定值</strong>，与 $E$ 的位置无关！（本质：两条过 $B(3,0)$ 的直线，$y$ 轴截距差 $= 3\\times|k_2 - k_1| = 3\\times\\left[(t+2)-(t-3)\\right] = 3 \\times AB = 15$。）</p>
<p><strong>数值验证</strong>：取 $E(1,\\ -6)$：$k_{AE}=-2 \\Rightarrow G(0,6)$；$k_{BE}=3 \\Rightarrow F(0,-9)$，$GF = 15$ ✓。取 $E(2,\\ -4)$：$G(0,3)$、$F(0,-12)$，$GF = 15$ ✓。</p>
<div class="answer-box">
  <span class="answer-label">✅（3）答案：</span><span class="answer-value">$GF = 15$（定值）</span>
</div>
`
}
];
