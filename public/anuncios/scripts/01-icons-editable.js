/* global React */
const { useState, useRef, useEffect } = React;

/* =============== ICONS =============== */
const I = {
  check: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="20 6 9 17 4 12"/></svg>,
  shield: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4Z"/><path d="m9 12 2 2 4-4"/></svg>,
  truck: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="1" y="6" width="14" height="11" rx="1"/><path d="M15 9h4l3 4v4h-7"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>,
  tools: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-2.4 2.5-2.5z"/></svg>,
  gear: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h0a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg>,
  ruler: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 3 3 21M9 3l1 2M13 3l3 3M17 3l4 4M5 7l3 3M5 11l5 5M5 15l3 3M9 19l2 2"/></svg>,
  feather: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20.2 13.8A8 8 0 0 0 8.5 2.5L3 8v13h13l4.2-7.2z"/><path d="M16 8 2 22"/><path d="M17 16H9"/></svg>,
  target: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>,
  star: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2"/></svg>,
  alert: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 2 1 21h22L12 2z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  chat: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  clock: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>,
  medal: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="14" r="6"/><path d="M8 14 5 3l4 1 3-3 3 3 4-1-3 11"/></svg>,
};

/* =============== CURVED ARROW (SVG) =============== */
function CurvedArrow({ from, to, curve = 0.3, color = "#1F7A3A" }) {
  // from/to in % of canvas (0-100)
  const x1 = from.x, y1 = from.y, x2 = to.x, y2 = to.y;
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1, dy = y2 - y1;
  // perpendicular offset
  const len = Math.hypot(dx, dy);
  const nx = -dy / len, ny = dx / len;
  const cx = mx + nx * curve * len;
  const cy = my + ny * curve * len;
  return (
    <svg style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none'}} viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <marker id={`arr-${color.replace('#','')}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 Z" fill={color}/>
        </marker>
      </defs>
      <path d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`} fill="none" stroke={color} strokeWidth="0.4" strokeDasharray="0" markerEnd={`url(#arr-${color.replace('#','')})`} vectorEffect="non-scaling-stroke" style={{strokeWidth:2}}/>
    </svg>
  );
}

/* =============== EDITABLE TEXT =============== */
function E({ value, onChange, className, style, multi }) {
  const Tag = multi ? 'div' : 'span';
  return (
    <Tag
      className={className}
      style={style}
      contentEditable
      suppressContentEditableWarning
      onBlur={(e) => onChange(e.currentTarget.innerText)}
      dangerouslySetInnerHTML={{ __html: (value || '').replace(/\n/g, '<br/>') }}
    />
  );
}

/* =============== EXPORT TO PNG =============== */
async function exportCanvas(node, filename) {
  if (!window.htmlToImage) {
    alert('Carregando biblioteca de export... aguarde 1s e tente de novo.');
    return;
  }
  try {
    // Temporariamente reseta o scale do canvas para capturar em tamanho real
    const prevTransform = node.style.transform;
    const prevPosition = node.style.position;
    node.style.transform = 'scale(1)';
    node.style.transformOrigin = 'top left';

    const dataUrl = await window.htmlToImage.toPng(node, {
      width: 1200,
      height: 1540,
      pixelRatio: 1,
      cacheBust: true,
      skipFonts: false,
      includeQueryParams: true,
    });

    // Restaura o scale visual
    node.style.transform = prevTransform;
    node.style.position = prevPosition;

    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = filename;
    a.click();
  } catch (e) {
    console.error(e);
    alert('Erro ao exportar: ' + e.message);
  }
}

/* =============== DRAGGABLE WRAPPER =============== */
function Draggable({ id, data, set, children, defaultPos = { x: 0, y: 0 }, enabled, style }) {
  const key = `pos_${id}`;
  const pos = data[key] || defaultPos;
  const ref = useRef(null);
  const onMouseDown = (e) => {
    if (!enabled) return;
    e.preventDefault();
    e.stopPropagation();
    const startX = e.clientX;
    const startY = e.clientY;
    const startPos = { ...pos };
    // Find the .canvas to compute scale
    let canvas = ref.current;
    while (canvas && !canvas.classList?.contains('canvas')) canvas = canvas.parentElement;
    const rect = canvas?.getBoundingClientRect();
    const scale = rect ? rect.width / 1200 : 1;
    const onMove = (ev) => {
      const dx = (ev.clientX - startX) / scale;
      const dy = (ev.clientY - startY) / scale;
      set(key, { x: startPos.x + dx, y: startPos.y + dy });
    };
    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };
  const wrapperStyle = {
    ...style,
    transform: `translate(${pos.x}px, ${pos.y}px)${style?.transform ? ' ' + style.transform : ''}`,
    cursor: enabled ? 'move' : undefined,
    outline: enabled ? '2px dashed rgba(31,122,58,.5)' : 'none',
    outlineOffset: enabled ? 4 : 0,
  };
  return (
    <div ref={ref} style={wrapperStyle} onMouseDown={onMouseDown}>
      {children}
    </div>
  );
}

window.MLDraggable = Draggable;

window.MLIcons = I;
window.MLCurvedArrow = CurvedArrow;
window.MLEditable = E;
window.MLExport = exportCanvas;
