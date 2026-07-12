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
