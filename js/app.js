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
  const itemEl = checkEl.closest('.tree-file');
  if (!itemEl) return;
  const isMastered = checkEl.classList.toggle('mastered');
  itemEl.classList.toggle('mastered', isMastered);
  checkEl.textContent = isMastered ? '✓' : '';
  // localStorage 为主：用 mastered / unmastered 两个集合记录个人状态，
  // 既支持在预置基础上额外标绿，也支持取消预置的标绿（刷新后仍生效）
  const mastered = JSON.parse(localStorage.getItem('mastered') || '[]');
  const unmastered = JSON.parse(localStorage.getItem('unmastered') || '[]');
  const mIdx = mastered.indexOf(id), uIdx = unmastered.indexOf(id);
  if (isMastered) {
    if (mIdx === -1) mastered.push(id);
    if (uIdx !== -1) unmastered.splice(uIdx, 1);
  } else {
    if (mIdx !== -1) mastered.splice(mIdx, 1);
    if (uIdx === -1) unmastered.push(id);
  }
  localStorage.setItem('mastered', JSON.stringify(mastered));
  localStorage.setItem('unmastered', JSON.stringify(unmastered));
  // 勾选变化后重算各分组的默认折叠态
  collapseMasteredFolders();
}

// 仅做视觉标绿，不写 localStorage（供预置/恢复共用）
function markMastered(id) {
  const checkEl = document.getElementById('check-' + id);
  if (!checkEl) return;
  const itemEl = checkEl.closest('.tree-file');
  if (itemEl) {
    checkEl.classList.add('mastered');
    checkEl.textContent = '✓';
    itemEl.classList.add('mastered');
  }
}

// 仅移除视觉标绿，不写 localStorage（供恢复时撤销预置项共用）
function unmarkMastered(id) {
  const checkEl = document.getElementById('check-' + id);
  if (!checkEl) return;
  const itemEl = checkEl.closest('.tree-file');
  checkEl.classList.remove('mastered');
  checkEl.textContent = '';
  if (itemEl) itemEl.classList.remove('mastered');
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

// 点击分组右侧的数字：折叠/展开该分组
function toggleGroupSubfolders(countEl) {
  const folder = countEl.closest('.tree-folder');
  if (!folder) return;
  const header = folder.querySelector(':scope > .tree-folder-header');
  if (header) toggleFolder(header);
}

// 判断一级菜单（顶层分组）的直接子题目是否全部打勾
function topLevelAllMastered(folder) {
  const children = folder.querySelector(':scope > .tree-children');
  if (!children) return false;
  const items = children.querySelectorAll(':scope > li > .tree-file');
  if (items.length === 0) return false;
  return [...items].every(el => el.classList.contains('mastered'));
}

// 初始化时根据“打勾”状态设置各分组的默认展开/收起：
// 分组内题目全打勾 → 收缩，否则 → 展开
function collapseMasteredFolders() {
  document.querySelectorAll('.tree-folder').forEach(folder => {
    const header = folder.querySelector(':scope > .tree-folder-header');
    const children = folder.querySelector(':scope > .tree-children');
    if (!header || !children) return;
    if (topLevelAllMastered(folder)) {
      header.classList.add('collapsed');
      children.classList.add('hidden');
    } else {
      header.classList.remove('collapsed');
      children.classList.remove('hidden');
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

// ====== Menu Search ======
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('menuSearch');
  const searchClear = document.getElementById('searchClear');
  if (!searchInput) return;

  // 判断某个节点是否名称匹配
  function nameMatches(el, query) {
    const nameEl = el.querySelector('.tree-folder-name, .tree-file-name');
    return nameEl && nameEl.textContent.toLowerCase().includes(query);
  }

  searchInput.addEventListener('input', function() {
    const query = this.value.trim().toLowerCase();
    const sidebar = document.querySelector('.sidebar');

    // 显示/隐藏清除按钮
    searchClear.style.display = query ? 'block' : 'none';

    if (!query) {
      // 清除搜索：恢复原始状态
      sidebar.classList.remove('searching');
      document.querySelectorAll('.search-hidden').forEach(el => el.classList.remove('search-hidden'));
      collapseMasteredFolders();
      return;
    }

    sidebar.classList.add('searching');

    // 第一步：隐藏所有菜单项
    const folderLis = document.querySelectorAll('.tree-nav li.tree-folder');
    const fileLis = document.querySelectorAll('.tree-nav li:not(.tree-folder)');
    folderLis.forEach(el => el.classList.add('search-hidden'));
    fileLis.forEach(el => el.classList.add('search-hidden'));

    // 第二步：显示匹配的叶子文件及它们的祖先
    fileLis.forEach(li => {
      if (nameMatches(li, query)) {
        li.classList.remove('search-hidden');
        // 逐级向上显示父文件夹
        let parent = li.parentElement?.closest('li.tree-folder');
        while (parent) {
          parent.classList.remove('search-hidden');
          const children = parent.querySelector(':scope > .tree-children');
          if (children) children.classList.remove('search-hidden');
          parent = parent.parentElement?.closest('li.tree-folder');
        }
      }
    });

    // 第三步：显示名称匹配的文件夹（及其所有后代）
    folderLis.forEach(folder => {
      if (nameMatches(folder, query)) {
        folder.classList.remove('search-hidden');
        folder.querySelectorAll('.search-hidden').forEach(el => el.classList.remove('search-hidden'));
        // 显示祖先文件夹
        let parent = folder.parentElement?.closest('li.tree-folder');
        while (parent) {
          parent.classList.remove('search-hidden');
          parent.querySelectorAll('.search-hidden').forEach(el => el.classList.remove('search-hidden'));
          parent = parent.parentElement?.closest('li.tree-folder');
        }
      }
    });
  });

  // 清除按钮
  searchClear.addEventListener('click', function() {
    searchInput.value = '';
    searchInput.dispatchEvent(new Event('input'));
    searchInput.focus();
  });

  // ESC 键清除搜索
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      this.value = '';
      this.dispatchEvent(new Event('input'));
      this.blur();
    }
  });
});

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
  // 2) 个人本地状态（localStorage 为主）：
  //    · mastered    —— 个人额外标绿的题，叠加在预置之上
  //    · unmastered  —— 在预置基础上取消标绿的题，最终以 localStorage 为准（覆盖预置）
  try {
    JSON.parse(localStorage.getItem('mastered') || '[]').forEach(id => markMastered(id));
    JSON.parse(localStorage.getItem('unmastered') || '[]').forEach(id => unmarkMastered(id));
  } catch (e) {}

  // 3) 分组内题目全部已掌握的默认收起
  collapseMasteredFolders();

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
