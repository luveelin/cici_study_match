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
const { problems } = require('./problems-data.js');


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
  const outDir = './problems';
  fs.writeFileSync(`${outDir}/${p.file}`, html);
  console.log(`  ✓ ${outDir}/${p.file}`);
});

// ============ 构建树形结构 ============
const tree = {};
problems.forEach(p => {
  // 所有题目（含带 parent 的子题）都进入导航树；子题通过 parent 嵌套到父题下作为子菜单
  if (!tree[p.category]) tree[p.category] = [];
  tree[p.category].push(p);
});

// 分类显示顺序（左侧菜单分组顺序，第一个为最上方分组）
const CATEGORY_ORDER = ["坐标轴几何", "几何综合", "二次根式", "最值问题", "函数与统计"];
const orderedCats = CATEGORY_ORDER.filter(c => tree[c])
  .concat(Object.keys(tree).filter(c => !CATEGORY_ORDER.includes(c)));

// 父子关系：把子题（parent 指向父题 id）嵌套到父题下作为子菜单
const childrenOf = {};
problems.forEach(p => {
  if (p.sub || !p.parent) return;
  (childrenOf[p.parent] = childrenOf[p.parent] || []).push(p);
});

// 生成单个题目的菜单项 <li>
function fileLinkHtml(p) {
  const stars = '★'.repeat(p.difficulty) + '☆'.repeat(4 - p.difficulty);
  return `
            <li>
              <a class="tree-file" href="problems/${p.file}" data-id="${p.id}" data-cat="${p.category}" onclick="loadProblem(this, 'problems/${p.file}');return false;" ondblclick="toggleMastered('${p.id}')" title="${p.title}">
                <span class="tree-checkmark" id="check-${p.id}"></span>
                <span class="tree-file-icon">📄</span>
                <span class="tree-file-name">${p.title}</span>
                <span class="tree-file-diff">${stars}</span>
              </a>
            </li>`;
}

// 生成二级父题（带子题的题目）菜单项：整行可点 = 折叠/展开 + 加载题目
function subFolderHtml(p, kids) {
  const stars = '★'.repeat(p.difficulty) + '☆'.repeat(4 - p.difficulty);
  return `
            <li class="tree-folder tree-subfolder">
              <div class="tree-folder-header" onclick="toggleFolderAndLoad(this, 'problems/${p.file}', '${p.id}')" ondblclick="toggleMastered('${p.id}')" title="${p.title}" data-id="${p.id}" data-cat="${p.category}">
                <span class="tree-arrow">▶</span>
                <span class="tree-checkmark" id="check-${p.id}"></span>
                <span class="tree-file-icon">📄</span>
                <span class="tree-file-name">${p.title}</span>
                <span class="tree-file-diff">${stars}</span>
              </div>
              <ul class="tree-children">
                ${kids.map(k => fileLinkHtml(k)).join('')}
              </ul>
            </li>`;
}

// 生成树形菜单 HTML
function buildTreeHTML() {
  let html = '';
  for (const cat of orderedCats) {
    const probs = tree[cat];
    if (!probs || probs.length === 0) continue;
    // 顶层题目（没有 parent 的）直接挂在分类下；有 parent 的作为子菜单嵌套到父题
    const topLevel = probs.filter(p => !p.parent);
    if (topLevel.length === 0) continue;
    topLevel.sort((a, b) => a.difficulty - b.difficulty);
    html += `
        <li class="tree-folder">
          <div class="tree-folder-header" onclick="toggleFolder(this)" title="${cat}">
            <span class="tree-arrow">▶</span>
            <span class="tree-folder-icon">📁</span>
            <span class="tree-folder-name">${cat}</span>
            <span class="tree-count">${probs.length}</span>
          </div>
          <ul class="tree-children">`;
    topLevel.forEach(p => {
      const kids = childrenOf[p.id];
      if (kids && kids.length) {
        html += subFolderHtml(p, kids);
      } else {
        html += fileLinkHtml(p);
      }
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
    --sidebar-w: 309px;
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
    font-size: 1.05em;
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
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 7px;
    background: #fff;
    color: var(--accent);
    font-size: 0.7em;
    box-shadow: 0 2px 6px rgba(0,0,0,0.35);
    transition: all 0.2s;
    border: none;
    user-select: none;
  }
  .sidebar-toggle:hover {
    background: #f0f6fc;
    transform: translateY(-50%) scale(1.08);
    box-shadow: 0 3px 9px rgba(0,0,0,0.45);
  }
  .sidebar-reopen {
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 42px;
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: #fff;
    color: var(--accent);
    font-size: 0.7em;
    border: 2px solid var(--accent);
    border-left: none;
    border-radius: 0 7px 7px 0;
    box-shadow: 2px 0 9px rgba(0,0,0,0.25);
    z-index: 5;
    transition: all 0.2s;
    user-select: none;
  }
  .sidebar-reopen:hover {
    background: #f0f6fc;
    box-shadow: 3px 0 12px rgba(0,0,0,0.35);
  }
  .sidebar.collapsed ~ .sidebar-reopen { display: flex; }

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
  /* 二级父题（带子题）：整行可点 = 折叠/展开 + 加载题目，正文与同级题目对齐 */
  .tree-subfolder > .tree-folder-header {
    padding: 6px 18px 6px 13px;
    border-left: 3px solid transparent;
  }
  .tree-subfolder > .tree-folder-header:hover { background: var(--hover-bg); }
  .tree-subfolder > .tree-folder-header.active {
    background: var(--active-bg);
    border-left-color: var(--accent);
  }
  .tree-subfolder > .tree-folder-header.active .tree-file-name {
    color: #fff;
  }
  /* 父题头内部元素与普通 tree-file 对齐 */
  .tree-subfolder > .tree-folder-header > .tree-checkmark { margin-right: 2px; }
  .tree-subfolder > .tree-folder-header > .tree-file-icon {
    font-size: 0.85em;
    margin-right: 6px;
    flex-shrink: 0;
  }
  .tree-subfolder > .tree-folder-header > .tree-file-name {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.82em;
    color: var(--sidebar-text);
  }
  .tree-subfolder > .tree-folder-header > .tree-file-diff {
    margin-left: 6px;
    font-size: 0.72em;
    color: #f0c040;
    flex-shrink: 0;
  }
  /* 掌握态：父题头标题变绿 */
  .tree-subfolder > .tree-folder-header.mastered .tree-file-name {
    color: #7dcea0;
  }
  /* 箭头回归正常 flow 布局，无需 absolute 定位（整行可点，手机端友好） */
  .tree-subfolder > .tree-folder-header > .tree-arrow {
    margin-right: 6px;
  }
  /* 子题：比父题再缩进一层 */
  .tree-subfolder > .tree-children .tree-file {
    padding-left: 26px;
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
    body { flex-direction: column; }
    .sidebar {
      width: 100%;
      min-width: 100%;
      height: auto;
      max-height: 36vh;
      flex-shrink: 0;
    }
    .main {
      flex: 1;
      min-height: 0;
      height: auto;
    }
    /* 移动端收起：彻底释放竖向空间，主区占满整屏 */
    .sidebar.collapsed {
      width: 100%;
      min-width: 100%;
      height: 0;
      max-height: 0;
      min-height: 0;
      padding: 0;
      border-width: 0;
      overflow: hidden;
    }
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

<script src="initData.js"></script>

<script>
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
  if (!checkEl) return;
  // 兼容：checkmark 可能在 .tree-file 内，也可能在二级父题 header 内
  const itemEl = checkEl.closest('.tree-file') || checkEl.closest('.tree-folder-header');
  if (!itemEl) return;
  const isMastered = checkEl.classList.toggle('mastered');
  itemEl.classList.toggle('mastered', isMastered);
  checkEl.textContent = isMastered ? '✓' : '';
  // 保存到 localStorage
  const mastered = JSON.parse(localStorage.getItem('mastered') || '[]');
  const idx = mastered.indexOf(id);
  if (isMastered && idx === -1) mastered.push(id);
  if (!isMastered && idx !== -1) mastered.splice(idx, 1);
  localStorage.setItem('mastered', JSON.stringify(mastered));
}

// 仅做视觉标绿，不写 localStorage（供预置/恢复共用）
function markMastered(id) {
  const checkEl = document.getElementById('check-' + id);
  if (!checkEl) return;
  // 兼容：可能在 .tree-file 内，也可能在二级父题 header 内
  const itemEl = checkEl.closest('.tree-file') || checkEl.closest('.tree-folder-header');
  if (itemEl) {
    checkEl.classList.add('mastered');
    checkEl.textContent = '✓';
    itemEl.classList.add('mastered');
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

// 二级父题整行点击：折叠/展开子菜单 + 同时加载该题到右侧
function toggleFolderAndLoad(header, file, id) {
  // 1) 折叠/展开（复用原有逻辑）
  toggleFolder(header);
  // 2) 加载题目到右侧内容区
  document.querySelectorAll('.tree-file').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tree-folder-header').forEach(el => el.classList.remove('active'));
  header.classList.add('active');
  document.getElementById('welcomeMsg').style.display = 'none';
  const frame = document.getElementById('contentFrame');
  frame.style.display = 'block';
  frame.src = file;
  document.getElementById('contentWrapper').style.display = 'none';
  document.getElementById('breadcrumb').textContent = '题目详情';
  document.getElementById('currentTitle').textContent =
    header.querySelector('.tree-file-name')?.textContent || '';
  currentFile = file;
  if (id) localStorage.setItem('lastProblemId', id);
}

// 取某个文件夹“直接子项”中的题目链接（用于判断是否全部标绿）。
// 仅统计该文件夹 .tree-children 下直接 li 的题目链接，
// 以及子文件夹（如父题分组）的分组头链接；不递归统计孙级。
function getFolderItems(folder) {
  const ul = folder.querySelector(':scope > .tree-children');
  if (!ul) return [];
  const items = [];
  ul.querySelectorAll(':scope > li').forEach(li => {
    // 叶子题目
    const direct = li.querySelector(':scope > .tree-file');
    if (direct) { items.push(direct); return; }
    // 二级父题（整行可点击的 header 本身承载信息）
    const subHeader = li.querySelector(':scope > .tree-folder > .tree-folder-header');
    if (subHeader) items.push(subHeader);
  });
  return items;
}

// 全部子项已标绿（mastered）的文件夹，页面打开时默认收起。
// 同时支持一级分类与二级菜单（嵌套子文件夹）。
function collapseMasteredFolders() {
  document.querySelectorAll('.tree-folder').forEach(folder => {
    const items = getFolderItems(folder);
    if (items.length === 0) return;
    const allMastered = items.every(f => f.classList.contains('mastered'));
    if (!allMastered) return;
    const header = folder.querySelector(':scope > .tree-folder-header');
    const children = folder.querySelector(':scope > .tree-children');
    if (header && children) {
      header.classList.add('collapsed');
      children.classList.add('hidden');
    }
  });
}

// ====== Load problem into iframe ======
function loadProblem(linkEl, file) {
  // Update active state
  document.querySelectorAll('.tree-file').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tree-folder-header').forEach(el => el.classList.remove('active'));
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

// ====== Keyboard ======
document.addEventListener('keydown', function(e) {
  const visibleFiles = [...document.querySelectorAll('.tree-file')];
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
  // 1) 预置默认掌握（initData.js，随站点共享给所有访客）
  (window.__INIT_MASTERED__ || []).forEach(id => markMastered(id));
  // 2) 个人本地标记（自己双击过的，叠加在预置之上）
  try {
    JSON.parse(localStorage.getItem('mastered') || '[]').forEach(id => markMastered(id));
  } catch (e) {}

  // 3) 全部子项已掌握的文件夹默认收起
  collapseMasteredFolders();

  // 恢复上次打开的题目（可能是叶子题目，也可能是二级父题头）
  const lastId = localStorage.getItem('lastProblemId');
  let targetFile = null;
  if (lastId) {
    targetFile = document.querySelector('.tree-file[data-id="' + lastId + '"]')
      || document.querySelector('.tree-folder-header[data-id="' + lastId + '"]');
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
