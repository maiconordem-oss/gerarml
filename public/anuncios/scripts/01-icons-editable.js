/* global React */
const { useState, useRef, useEffect, useCallback } = React;

/* =============== ICONS =============== */
const I = {
  check:   (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="20 6 9 17 4 12"/></svg>,
  shield:  (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4Z"/><path d="m9 12 2 2 4-4"/></svg>,
  truck:   (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="1" y="6" width="14" height="11" rx="1"/><path d="M15 9h4l3 4v4h-7"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>,
  tools:   (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-2.4 2.5-2.5z"/></svg>,
  gear:    (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h0a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg>,
  ruler:   (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 3 3 21M9 3l1 2M13 3l3 3M17 3l4 4M5 7l3 3M5 11l5 5M5 15l3 3M9 19l2 2"/></svg>,
  feather: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M20.2 13.8A8 8 0 0 0 8.5 2.5L3 8v13h13l4.2-7.2z"/><path d="M16 8 2 22"/><path d="M17 16H9"/></svg>,
  target:  (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>,
  star:    (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2"/></svg>,
  alert:   (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 2 1 21h22L12 2z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  chat:    (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  clock:   (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>,
  medal:   (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="14" r="6"/><path d="M8 14 5 3l4 1 3-3 3 3 4-1-3 11"/></svg>,
  bolt:    (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  leaf:    (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
  diamond: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.58a2.41 2.41 0 0 0 3.41 0l7.59-7.58a2.41 2.41 0 0 0 0-3.41l-7.59-7.58a2.41 2.41 0 0 0-3.41 0Z"/></svg>,
  package: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m7.5 4.27 9 5.15M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/></svg>,
};

/* =============== CURVED ARROW =============== */
function CurvedArrow({ from, to, curve = 0.3, color = "#1F7A3A" }) {
  const x1 = from.x, y1 = from.y, x2 = to.x, y2 = to.y;
  const mx = (x1+x2)/2, my = (y1+y2)/2;
  const dx = x2-x1, dy = y2-y1;
  const len = Math.hypot(dx, dy);
  const nx = -dy/len, ny = dx/len;
  const cx = mx+nx*curve*len, cy = my+ny*curve*len;
  return (
    <svg style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none'}} viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <marker id={"arr-"+color.replace('#','')} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 Z" fill={color}/>
        </marker>
      </defs>
      <path d={"M "+x1+" "+y1+" Q "+cx+" "+cy+" "+x2+" "+y2} fill="none" stroke={color} strokeWidth="0.4" markerEnd={"url(#arr-"+color.replace('#','')+")"} vectorEffect="non-scaling-stroke" style={{strokeWidth:2}}/>
    </svg>
  );
}

/* =============== EDITABLE TEXT ===============
   Ao focar, publica no window.__mlFmtActive = { el, onSave, onCancel }
   O painel lê isso. Usa onMouseDown:preventDefault para nunca perder foco.
*/
function E({ value, onChange, className, style, multi }) {
  const Tag = multi ? 'div' : 'span';
  const ref = useRef(null);
  const prevValue = useRef(value);
  const [focused, setFocused] = useState(false);

  const publish = (active) => {
    window.__mlFmtActive = active ? {
      el: ref.current,
      onSave: (html) => onChange(html),
      onCancel: () => { if (ref.current) ref.current.innerHTML = prevValue.current; },
    } : null;
    window.dispatchEvent(new CustomEvent('ml-text-focus', { detail: window.__mlFmtActive }));
  };

  const handleFocus = () => {
    prevValue.current = ref.current ? ref.current.innerHTML : value;
    setFocused(true);
    publish(true);
  };

  const handleBlur = (e) => {
    // NUNCA fechar se o foco foi para algo com data-fmt-panel
    // onMouseDown:preventDefault no painel garante que relatedTarget = null aqui
    // Usamos um delay pequeno para checar se o painel capturou o clique
    setTimeout(() => {
      if (window.__mlFmtClicking) return; // painel está sendo clicado
      setFocused(false);
      if (ref.current) onChange(ref.current.innerHTML);
      publish(false);
    }, 80);
  };

  const handleKeyDown = (e) => {
    if ((e.ctrlKey||e.metaKey) && e.key === 'b') { e.preventDefault(); document.execCommand('bold'); onChange(ref.current.innerHTML); }
    if ((e.ctrlKey||e.metaKey) && e.key === 'i') { e.preventDefault(); document.execCommand('italic'); onChange(ref.current.innerHTML); }
    if (e.key === 'Escape') {
      if (ref.current) ref.current.innerHTML = prevValue.current;
      ref.current && ref.current.blur();
      e.preventDefault();
    }
    if (e.key === 'Enter' && !multi) { ref.current && ref.current.blur(); e.preventDefault(); }
  };

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        outline: focused ? '2px solid #3b82f6' : 'none',
        outlineOffset: focused ? 3 : 0,
        borderRadius: focused ? 4 : 0,
        transition: 'outline .1s',
        cursor: 'text',
      }}
      contentEditable
      suppressContentEditableWarning
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      dangerouslySetInnerHTML={{ __html: (value||'').replace(/\n/g,'<br/>') }}
    />
  );
}

/* =============== TEXT FORMAT PANEL — portal fixo na página ===============
   Montado UMA VEZ no body. Fica fixo no canto direito da tela.
   Todos os botões usam onMouseDown:preventDefault para não tirar foco do texto.
   Usa window.__mlFmtClicking como flag durante o clique.
*/
function TextFormatPanel() {
  const [active, setActive] = useState(null);
  const [size, setSize] = useState(32);
  const [sizeInput, setSizeInput] = useState('32');
  const [color, setColor] = useState('#000000');
  const [charCount, setCharCount] = useState(0);
  const savedRange = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!e.detail) { setActive(null); return; }
      setActive(e.detail);
      const el = e.detail.el;
      if (!el) return;
      const computed = window.getComputedStyle(el);
      const sz = Math.round(parseFloat(el.style.fontSize) || parseFloat(computed.fontSize) || 32);
      setSize(sz); setSizeInput(String(sz));
      setCharCount(el.innerText.length);
      const clr = el.style.color || computed.color || '';
      const m = clr.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
      if (m) setColor('#'+[m[1],m[2],m[3]].map(n=>(+n).toString(16).padStart(2,'0')).join(''));
      else if (clr.startsWith('#')) setColor(clr);
    };
    window.addEventListener('ml-text-focus', handler);
    return () => window.removeEventListener('ml-text-focus', handler);
  }, []);

  useEffect(() => {
    if (!active) return;
    const el = active.el;
    const onInput = () => setCharCount(el.innerText.length);
    el.addEventListener('input', onInput);
    return () => el.removeEventListener('input', onInput);
  }, [active]);

  // Salvar seleção antes de cada ação
  const saveSel = () => {
    const s = window.getSelection();
    if (s && s.rangeCount > 0) savedRange.current = s.getRangeAt(0).cloneRange();
  };

  // Restaurar seleção no elemento ativo
  const restoreSel = () => {
    if (!active || !savedRange.current) return;
    active.el.focus();
    const s = window.getSelection();
    try { s.removeAllRanges(); s.addRange(savedRange.current); } catch(_) {}
  };

  // Wrapper para todos os cliques no painel
  const panelMouseDown = (e) => {
    e.preventDefault(); // impede perda de foco do contentEditable
    window.__mlFmtClicking = true;
    saveSel();
    setTimeout(() => { window.__mlFmtClicking = false; }, 200);
  };

  const fmt = (cmd) => {
    restoreSel();
    document.execCommand(cmd);
    if (active) { saveSel(); active.onSave(active.el.innerHTML); }
  };

  const applySize = (sz) => {
    if (!active) return;
    const s = Math.max(8, Math.min(300, sz));
    setSize(s); setSizeInput(String(s));
    restoreSel();
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.getRangeAt(0).collapsed) {
      active.el.style.fontSize = s + 'px';
    } else {
      const range = sel.getRangeAt(0);
      const span = document.createElement('span');
      span.style.fontSize = s + 'px';
      try { range.surroundContents(span); }
      catch(_) { const f = range.extractContents(); span.appendChild(f); range.insertNode(span); }
      sel.removeAllRanges();
    }
    active.onSave(active.el.innerHTML);
    active.el.focus();
  };

  const applyColor = (hex) => {
    setColor(hex);
    restoreSel();
    document.execCommand('foreColor', false, hex);
    if (active) { saveSel(); active.onSave(active.el.innerHTML); }
  };

  const applyAlign = (a) => {
    restoreSel();
    document.execCommand('justify' + a[0].toUpperCase() + a.slice(1));
    if (active) { saveSel(); active.onSave(active.el.innerHTML); }
  };

  if (!active) return null;

  const warnColor = charCount > 80 ? '#dc2626' : charCount > 50 ? '#f59e0b' : '#aaa';

  const Btn = ({ cmd, children, title }) => (
    <button
      title={title}
      onMouseDown={panelMouseDown}
      onClick={() => fmt(cmd)}
      style={{
        width:'100%', padding:'8px 4px', border:'none', borderRadius:6,
        background:'rgba(255,255,255,.08)', color:'#fff',
        fontSize:15, fontWeight:700, cursor:'pointer', lineHeight:1.2,
        display:'flex', alignItems:'center', justifyContent:'center',
      }}
    >{children}</button>
  );

  const Sep = () => <div style={{width:'100%', height:1, background:'rgba(255,255,255,.12)', margin:'5px 0'}}/>;
  const Lbl = ({c}) => <div style={{fontSize:9, color:'rgba(255,255,255,.4)', textAlign:'center', textTransform:'uppercase', letterSpacing:'.08em', margin:'5px 0 3px'}}>{c}</div>;

  return (
    <div
      data-export-hide="true"
      onMouseDown={panelMouseDown}
      style={{
        position: 'fixed',
        right: 12, top: '50%',
        transform: 'translateY(-50%)',
        width: 60,
        maxHeight: '85vh',
        overflowY: 'auto',
        background: '#1c1c1e',
        borderRadius: 12,
        padding: '10px 6px',
        display: 'flex', flexDirection: 'column', gap: 3,
        boxShadow: '0 8px 32px rgba(0,0,0,.45)',
        border: '1px solid rgba(255,255,255,.1)',
        zIndex: 9999,
      }}
    >
      <Lbl c="Estilo"/>
      <Btn cmd="bold"          title="Negrito (Ctrl+B)"><b>B</b></Btn>
      <Btn cmd="italic"        title="Itálico (Ctrl+I)"><i style={{fontStyle:'italic'}}>I</i></Btn>
      <Btn cmd="underline"     title="Sublinhado"><u>U</u></Btn>
      <Btn cmd="strikeThrough" title="Riscado"><s>S</s></Btn>

      <Sep/>
      <Lbl c="Tam."/>

      <button onMouseDown={panelMouseDown} onClick={() => applySize(size-8)}
        style={{width:'100%',padding:'6px',border:'none',borderRadius:6,background:'rgba(255,255,255,.08)',color:'#fff',fontSize:20,fontWeight:900,cursor:'pointer',lineHeight:1}}>
        −
      </button>

      <input
        ref={inputRef}
        type="number" min="8" max="300" step="1"
        value={sizeInput}
        onMouseDown={e => e.stopPropagation()}
        onFocus={e => { e.stopPropagation(); saveSel(); }}
        onChange={e => setSizeInput(e.target.value)}
        onKeyDown={e => { e.stopPropagation(); if(e.key==='Enter') applySize(parseInt(sizeInput)||size); }}
        onBlur={() => { const v=parseInt(sizeInput); if(!isNaN(v)) applySize(v); }}
        style={{
          width:'100%', textAlign:'center', padding:'5px 2px',
          border:'1px solid rgba(255,255,255,.2)', borderRadius:6,
          background:'rgba(255,255,255,.06)', color:'#fff',
          fontSize:13, fontWeight:700, fontFamily:'ui-monospace,monospace',
          boxSizing:'border-box', MozAppearance:'textfield',
        }}
      />
      <div style={{fontSize:9,color:'rgba(255,255,255,.3)',textAlign:'center',marginTop:-1}}>px</div>

      <button onMouseDown={panelMouseDown} onClick={() => applySize(size+8)}
        style={{width:'100%',padding:'6px',border:'none',borderRadius:6,background:'rgba(255,255,255,.08)',color:'#fff',fontSize:20,fontWeight:900,cursor:'pointer',lineHeight:1}}>
        +
      </button>

      <Sep/>
      <Lbl c="Alinha"/>
      <button onMouseDown={panelMouseDown} onClick={() => applyAlign('left')}
        title="Esquerda"
        style={{width:'100%',padding:'6px',border:'none',borderRadius:6,background:'rgba(255,255,255,.08)',color:'#fff',fontSize:13,cursor:'pointer'}}>⇤</button>
      <button onMouseDown={panelMouseDown} onClick={() => applyAlign('center')}
        title="Centro"
        style={{width:'100%',padding:'6px',border:'none',borderRadius:6,background:'rgba(255,255,255,.08)',color:'#fff',fontSize:13,cursor:'pointer'}}>≡</button>
      <button onMouseDown={panelMouseDown} onClick={() => applyAlign('right')}
        title="Direita"
        style={{width:'100%',padding:'6px',border:'none',borderRadius:6,background:'rgba(255,255,255,.08)',color:'#fff',fontSize:13,cursor:'pointer'}}>⇥</button>

      <Sep/>
      <Lbl c="Cor"/>
      <label onMouseDown={panelMouseDown} style={{position:'relative',cursor:'pointer',display:'block'}}>
        <div style={{width:'100%',height:34,borderRadius:6,background:color,border:'2px solid rgba(255,255,255,.25)',boxSizing:'border-box',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontSize:13,fontWeight:800,color:'#fff',textShadow:'0 1px 4px rgba(0,0,0,.9)'}}>A</span>
        </div>
        <input type="color" value={color}
          onMouseDown={e => e.stopPropagation()}
          onChange={e => applyColor(e.target.value)}
          style={{position:'absolute',opacity:0,inset:0,width:'100%',height:'100%',cursor:'pointer'}}
        />
      </label>

      <Sep/>
      <button onMouseDown={panelMouseDown} onClick={() => fmt('removeFormat')}
        title="Limpar formatação"
        style={{width:'100%',padding:'7px 4px',border:'none',borderRadius:6,background:'rgba(255,255,255,.08)',color:'#fff',fontSize:13,fontWeight:700,cursor:'pointer'}}>✕ fmt</button>

      <div style={{marginTop:4,fontSize:9,color:warnColor,textAlign:'center',fontFamily:'ui-monospace,monospace'}}>
        {charCount}ch
      </div>
    </div>
  );
}
window.MLTextFormatPanel = TextFormatPanel;

/* =============== EXPORT TO PNG =============== */
const FONT_FILES = [
  { family:'Inter', file:'/anuncios/fonts/inter-latin-ext-400.woff2', range:'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF' },
  { family:'Inter', file:'/anuncios/fonts/inter-latin-400.woff2', range:'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD' },
  { family:'Montserrat', file:'/anuncios/fonts/montserrat-latin-ext.woff2', range:'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF' },
  { family:'Montserrat', file:'/anuncios/fonts/montserrat-latin.woff2', range:'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD' },
];
let fontEmbedCache = null;
const TRANSPARENT_IMAGE_PLACEHOLDER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/p9sAAAAASUVORK5CYII=';

function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.length; i += 0x8000) binary += String.fromCharCode.apply(null, bytes.subarray(i,i+0x8000));
  return btoa(binary);
}

async function buildLocalFontEmbedCSS() {
  if (fontEmbedCache) return fontEmbedCache;
  const blocks = await Promise.all(FONT_FILES.map(async ({ family, file, range }) => {
    const response = await fetch(file, { cache: 'force-cache' });
    if (!response.ok) throw new Error('Fonte não encontrada: '+file);
    const base64 = arrayBufferToBase64(await response.arrayBuffer());
    return "@font-face{font-family:'"+family+"';font-style:normal;font-weight:100 900;font-display:block;src:url(data:font/woff2;base64,"+base64+") format('woff2');unicode-range:"+range+";}";
  }));
  fontEmbedCache = blocks.join('\n') + '\n*{font-synthesis:none!important;text-rendering:geometricPrecision!important;}';
  return fontEmbedCache;
}

async function waitForTemplateFonts() {
  if (document.fonts && document.fonts.load) {
    await Promise.all([
      document.fonts.load('400 24px Inter'),
      document.fonts.load('600 24px Inter'),
      document.fonts.load('700 48px Montserrat'),
      document.fonts.load('800 56px Montserrat'),
    ]);
  }
  await document.fonts && document.fonts.ready;
}

async function exportCanvas(node, filename) {
  if (!window.htmlToImage) { alert('Carregando biblioteca de export... aguarde 1s e tente de novo.'); return; }
  let prevTransform = '';
  try {
    await waitForTemplateFonts();
    prevTransform = node.style.transform;
    node.style.transform = 'scale(1)';
    node.style.transformOrigin = 'top left';
    node.classList.add('exporting');
    await new Promise(r => setTimeout(r, 80));
    const fontEmbedCSS = await buildLocalFontEmbedCSS();
    const dataUrl = await window.htmlToImage.toPng(node, {
      width: 1200, height: 1540, pixelRatio: 1,
      fontEmbedCSS, imagePlaceholder: TRANSPARENT_IMAGE_PLACEHOLDER,
      // cacheBust removido — causava re-fetch de URLs externas no export
    });
    node.style.transform = prevTransform;
    node.classList.remove('exporting');
    const a = document.createElement('a');
    a.href = dataUrl; a.download = filename; a.click();
  } catch(e) {
    console.error('Falha no export PNG:', e);
    const details = e && e.message || (e instanceof Event ? 'alguma imagem do template não carregou' : String(e||'erro desconhecido'));
    alert('Erro ao exportar: ' + details);
    node.style.transform = prevTransform;
    node.classList.remove('exporting');
  }
}

/* =============== PAN + ZOOM IMAGE — livre, sem clip ===============
   O produto flutua em position:absolute sobre o canvas inteiro.
   - Arrastar: move livremente por todo o canvas (sem clip)
   - Scroll / wheel: zoom centrado no cursor
   - Zoom externo (ZoomBar): continua funcionando via prop zoom
   Estado salvo em panKey = { x, y, scale }
   wrapStyle ainda aceito para compatibilidade mas ignorado (posição livre)
*/
function PanZoomImg({ src, zoom=1, panKey, data, set, wrapStyle={}, disabled=false }) {
  // Estado: { x, y, scale } — x/y em px no canvas (1200×1540), scale multiplicador
  const state = (panKey && data && data[panKey]) || { x:0, y:0, scale:1 };
  const imgRef = useRef(null);
  const dragging = useRef(false);
  const lastZoom = useRef(zoom);

  // Quando zoom externo muda, propaga pro scale interno proporcionalmente
  useEffect(() => {
    if (!set || !panKey) return;
    if (Math.abs(zoom - lastZoom.current) < 0.001) return;
    const ratio = zoom / (lastZoom.current || 1);
    lastZoom.current = zoom;
    set(panKey, { ...state, scale: (state.scale || 1) * ratio });
  }, [zoom]);

  // Descobrir o scale visual do canvas (para converter coords do mouse)
  const getCanvasScale = () => {
    let el = imgRef.current;
    while (el && !(el.classList && el.classList.contains('canvas'))) el = el.parentElement;
    const rect = el && el.getBoundingClientRect();
    return rect ? rect.width / 1200 : 1;
  };

  // ── Drag ──
  const onMouseDown = (e) => {
    if (disabled || !set || !panKey) return;
    e.preventDefault(); e.stopPropagation();
    dragging.current = true;
    const startX = e.clientX, startY = e.clientY;
    const startState = { ...state };
    const canvasScale = getCanvasScale();
    const onMove = (ev) => {
      if (!dragging.current) return;
      set(panKey, {
        ...startState,
        x: startState.x + (ev.clientX - startX) / canvasScale,
        y: startState.y + (ev.clientY - startY) / canvasScale,
      });
    };
    const onUp = () => {
      dragging.current = false;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  // ── Scroll / wheel zoom ──
  const onWheel = (e) => {
    if (disabled || !set || !panKey) return;
    e.preventDefault(); e.stopPropagation();
    const canvasScale = getCanvasScale();
    const delta = e.deltaY < 0 ? 1.08 : 0.93;
    const curScale = state.scale || 1;
    const newScale = Math.max(0.05, Math.min(8, curScale * delta));

    // Zoom centrado no cursor: ajusta x/y para que o ponto sob o cursor não mova
    const el = imgRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      // posição do cursor relativa ao centro da imagem, em coords canvas
      const mx = (e.clientX - rect.left - rect.width / 2) / canvasScale;
      const my = (e.clientY - rect.top - rect.height / 2) / canvasScale;
      const ratio = newScale / curScale;
      set(panKey, {
        x: state.x + mx - mx * ratio,
        y: state.y + my - my * ratio,
        scale: newScale,
      });
    } else {
      set(panKey, { ...state, scale: newScale });
    }
  };

  // ── Render vazio ──
  if (!src) return null;

  const sc = state.scale || 1;
  const canInteract = !disabled && set && panKey;

  // Tamanho base da imagem: 800px de largura no canvas (ajustável via scale)
  const BASE = 800;

  return (
    <div
      ref={imgRef}
      data-panzoom="true"
      onMouseDown={onMouseDown}
      onWheel={onWheel}
      style={{
        position: 'absolute',
        // Centro do canvas como origem, depois translate por x/y
        left: '50%',
        top: '50%',
        width: BASE * sc,
        height: 'auto',
        transform: `translate(calc(-50% + ${state.x}px), calc(-50% + ${state.y}px))`,
        cursor: canInteract ? (dragging.current ? 'grabbing' : 'grab') : 'default',
        zIndex: 5,
        userSelect: 'none',
        touchAction: 'none',
      }}
      title={canInteract ? 'Arraste para mover · Scroll para zoom' : undefined}
    >
      <img
        src={src}
        alt=""
        draggable={false}
        style={{ width: '100%', height: 'auto', display: 'block', pointerEvents: 'none' }}
      />
      {/* Indicador de reset — só aparece quando movido/escalado */}
      {canInteract && (state.x !== 0 || state.y !== 0 || Math.abs(sc - 1) > 0.05) && (
        <div
          data-export-hide="true"
          onMouseDown={e => e.stopPropagation()}
          onClick={e => { e.stopPropagation(); set(panKey, { x:0, y:0, scale:1 }); }}
          style={{
            position: 'absolute', top: -28, right: 0,
            fontSize: 10, fontWeight: 700, padding: '3px 8px',
            border: '1px solid rgba(255,255,255,.5)', borderRadius: 5,
            background: 'rgba(0,0,0,.6)', color: '#fff',
            cursor: 'pointer', whiteSpace: 'nowrap',
          }}
        >
          ↺ reset
        </div>
      )}
    </div>
  );
}

/* =============== DRAGGABLE COM GUIDES =============== */
function Draggable({ id, data, set, children, defaultPos={x:0,y:0}, enabled, style }) {
  const key = 'pos_'+id;
  const pos = data[key] || defaultPos;
  const ref = useRef(null);
  const [guides, setGuides] = useState({ h:null, v:null });

  const getCanvasScale = () => {
    let el = ref.current;
    while (el && !(el.classList && el.classList.contains('canvas'))) el = el.parentElement;
    const rect = el && el.getBoundingClientRect();
    return rect ? rect.width / 1200 : 1;
  };

  const onMouseDown = (e) => {
    if (!enabled) return;
    e.preventDefault(); e.stopPropagation();
    const startX=e.clientX, startY=e.clientY, startPos={...pos};
    const scale = getCanvasScale();
    const onMove = (ev) => {
      const nx = startPos.x + (ev.clientX-startX)/scale;
      const ny = startPos.y + (ev.clientY-startY)/scale;
      const sx = Math.abs(nx) < 10 ? 0 : nx;
      const sy = Math.abs(ny) < 10 ? 0 : ny;
      set(key, { x:sx, y:sy });
      setGuides({ h: Math.abs(ny)<10 ? 50 : null, v: Math.abs(nx)<10 ? 50 : null });
    };
    const onUp = () => { setGuides({h:null,v:null}); window.removeEventListener('mousemove',onMove); window.removeEventListener('mouseup',onUp); };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  const wrapperStyle = {
    ...style,
    transform: 'translate('+pos.x+'px,'+pos.y+'px)'+(style && style.transform ? ' '+style.transform : ''),
    cursor: enabled ? 'move' : undefined,
    outline: enabled ? '2px dashed rgba(31,122,58,.5)' : 'none',
    outlineOffset: enabled ? 4 : 0,
  };

  return (
    <React.Fragment>
      {enabled && guides.h !== null && <div data-export-hide="true" style={{ position:'absolute', top:guides.h+'%', left:0, right:0, height:2, background:'#ef4444', opacity:.8, zIndex:999, pointerEvents:'none' }}/>}
      {enabled && guides.v !== null && <div data-export-hide="true" style={{ position:'absolute', left:guides.v+'%', top:0, bottom:0, width:2, background:'#ef4444', opacity:.8, zIndex:999, pointerEvents:'none' }}/>}
      <div ref={ref} style={wrapperStyle} onMouseDown={onMouseDown} data-edit-outline={enabled ? 'true' : undefined}>
        {children}
      </div>
    </React.Fragment>
  );
}

/* =============== AJUSTES DE IMAGEM POR SLOT =============== */
function ImgAdjustBar({ slotKey, data, set }) {
  const adjKey = slotKey+'_adj';
  const adj = data[adjKey] || { brightness:100, contrast:100, saturation:100 };
  const [open, setOpen] = useState(false);
  const isDefault = adj.brightness===100 && adj.contrast===100 && adj.saturation===100;
  const update = (field, val) => set(adjKey, { ...adj, [field]:val });

  return (
    <div style={{ position:'relative', display:'flex', alignItems:'center' }}>
      <button onClick={() => setOpen(v => !v)}
        style={{ display:'flex', alignItems:'center', gap:5, padding:'4px 10px',
          border:'1px solid '+(open||!isDefault ? '#FFC42B' : '#e5e7eb'),
          borderRadius:7, background: open||!isDefault ? '#FFF8E1' : 'white',
          fontSize:11, fontWeight:700, cursor:'pointer', color: isDefault ? '#9ca3af' : '#7A5A00' }}
        title="Ajustes de imagem">
        ✦ Ajustes{!isDefault && ' •'}
      </button>
      {open && (
        <div style={{ position:'absolute', top:'110%', left:0, zIndex:500, background:'white', border:'1px solid #e5e7eb', borderRadius:10, boxShadow:'0 8px 24px rgba(0,0,0,.12)', padding:'14px 16px', minWidth:220, marginTop:4 }}>
          {[
            { key:'brightness', label:'☀ Brilho', min:50, max:180 },
            { key:'contrast',   label:'◑ Contraste', min:50, max:180 },
            { key:'saturation', label:'◈ Saturação', min:0, max:200 },
          ].map(({ key, label, min, max }) => (
            <div key={key} style={{ marginBottom:10 }}>
              <div style={{ display:'flex', justifyContent:'space-between', fontSize:11, fontWeight:600, color:'#555', marginBottom:4 }}>
                <span>{label}</span>
                <span style={{ fontFamily:'monospace', color: adj[key]!==100 ? '#1F7A3A' : '#aaa' }}>{adj[key]}%</span>
              </div>
              <input type="range" min={min} max={max} step={1} value={adj[key]}
                onChange={e => update(key, Number(e.target.value))}
                style={{ width:'100%', accentColor:'#1F7A3A' }}/>
            </div>
          ))}
          <div style={{ display:'flex', justifyContent:'space-between', marginTop:6 }}>
            <button onClick={() => setOpen(false)} style={{ padding:'4px 10px', border:'1px solid #e5e7eb', borderRadius:6, fontSize:11, background:'white', cursor:'pointer', color:'#666' }}>Fechar</button>
            {!isDefault && <button onClick={() => set(adjKey,{brightness:100,contrast:100,saturation:100})} style={{ padding:'4px 10px', border:'1px solid #fca5a5', borderRadius:6, fontSize:11, background:'white', cursor:'pointer', color:'#dc2626', fontWeight:600 }}>Reset</button>}
          </div>
        </div>
      )}
    </div>
  );
}

/* =============== ICON PICKER =============== */
const ICON_LIST = ['gear','shield','tools','target','feather','check','alert','star','ruler','bolt','leaf','diamond','package','truck'];

function IconPicker({ iconKey, data, set, size=110, borderRadius=22 }) {
  const [open, setOpen] = useState(false);
  const currentIcon = (data && data[iconKey]) || 'gear';
  const IcEl = I[currentIcon] || I.gear;

  return (
    <div style={{ position:'relative', flexShrink:0 }}>
      <div className="ic-square"
        onClick={() => setOpen(v => !v)}
        style={{ width:size, height:size, borderRadius, cursor:'pointer', outline: open ? '3px solid #3b82f6' : 'none', outlineOffset:2, position:'relative' }}
        title="Clique para trocar o ícone">
        <IcEl style={{ width:size*0.56, height:size*0.56, color:'#fff', stroke:'#fff' }}/>
        <div data-export-hide="true" style={{ position:'absolute', bottom:3, right:3, width:18, height:18, borderRadius:'50%', background:'rgba(0,0,0,.35)', display:'grid', placeItems:'center', fontSize:9, color:'#fff', fontWeight:800 }}>✎</div>
      </div>
      {open && (
        <React.Fragment>
          <div data-export-hide="true" style={{ position:'absolute', top:size+6, left:0, zIndex:600, background:'white', border:'1px solid #e5e7eb', borderRadius:10, boxShadow:'0 8px 28px rgba(0,0,0,.16)', padding:10, display:'grid', gridTemplateColumns:'repeat(5, 44px)', gap:6, minWidth:250 }}>
            {ICON_LIST.map(name => {
              const Ic = I[name]; if (!Ic) return null;
              return (
                <button key={name} onClick={() => { set(iconKey,name); setOpen(false); }} title={name}
                  style={{ width:44, height:44, borderRadius:8, border: name===currentIcon ? '2px solid #1F7A3A' : '1px solid #e5e7eb', background: name===currentIcon ? '#E8F3EC' : '#f9f9f9', cursor:'pointer', display:'grid', placeItems:'center', padding:0 }}>
                  <Ic style={{ width:24, height:24, color: name===currentIcon ? '#1F7A3A' : '#555', stroke: name===currentIcon ? '#1F7A3A' : '#555' }}/>
                </button>
              );
            })}
          </div>
          <div data-export-hide="true" style={{ position:'fixed', inset:0, zIndex:599 }} onClick={() => setOpen(false)}/>
        </React.Fragment>
      )}
    </div>
  );
}

/* =============== ROTATE IMAGE =============== */
async function rotateImageDataUrl(dataUrl, degrees=90) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const swap = degrees===90 || degrees===270;
      const w = swap ? img.naturalHeight : img.naturalWidth;
      const h = swap ? img.naturalWidth : img.naturalHeight;
      const c = document.createElement('canvas');
      c.width=w; c.height=h;
      const ctx = c.getContext('2d');
      ctx.translate(w/2, h/2);
      ctx.rotate((degrees*Math.PI)/180);
      ctx.drawImage(img, -img.naturalWidth/2, -img.naturalHeight/2);
      resolve(c.toDataURL('image/png'));
    };
    img.src = dataUrl;
  });
}
window.MLRotateImage = rotateImageDataUrl;

/* =============== CROP OVERLAY =============== */
function CropOverlay({ src, onConfirm, onCancel }) {
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const [rect, setRect] = useState({ x:10, y:10, w:80, h:80 });
  const dragging = useRef(null);

  const startDrag = (e, type) => {
    e.preventDefault(); e.stopPropagation();
    dragging.current = { type, startX:e.clientX, startY:e.clientY, startRect:{...rect} };
    const onMove = (ev) => {
      if (!dragging.current) return;
      const el = canvasRef.current; if (!el) return;
      const bounds = el.getBoundingClientRect();
      const dx = ((ev.clientX-dragging.current.startX)/bounds.width)*100;
      const dy = ((ev.clientY-dragging.current.startY)/bounds.height)*100;
      const r = { ...dragging.current.startRect };
      if (type==='move') { r.x=Math.max(0,Math.min(100-r.w,r.x+dx)); r.y=Math.max(0,Math.min(100-r.h,r.y+dy)); }
      else if (type==='se') { r.w=Math.max(10,Math.min(100-r.x,r.w+dx)); r.h=Math.max(10,Math.min(100-r.y,r.h+dy)); }
      else if (type==='nw') { const nx=Math.max(0,r.x+dx),ny=Math.max(0,r.y+dy); r.w=Math.max(10,r.w-(nx-r.x)); r.h=Math.max(10,r.h-(ny-r.y)); r.x=nx; r.y=ny; }
      else if (type==='ne') { r.w=Math.max(10,Math.min(100-r.x,r.w+dx)); const ny=Math.max(0,r.y+dy); r.h=Math.max(10,r.h-(ny-r.y)); r.y=ny; }
      else if (type==='sw') { const nx=Math.max(0,r.x+dx); r.w=Math.max(10,r.w-(nx-r.x)); r.x=nx; r.h=Math.max(10,Math.min(100-r.y,r.h+dy)); }
      setRect(r);
    };
    const onUp = () => { dragging.current=null; window.removeEventListener('mousemove',onMove); window.removeEventListener('mouseup',onUp); };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  const handleConfirm = () => {
    const img = imgRef.current; if (!img) return;
    const nw=img.naturalWidth, nh=img.naturalHeight;
    const sx=(rect.x/100)*nw, sy=(rect.y/100)*nh, sw=(rect.w/100)*nw, sh=(rect.h/100)*nh;
    const c=document.createElement('canvas'); c.width=sw; c.height=sh;
    c.getContext('2d').drawImage(img,sx,sy,sw,sh,0,0,sw,sh);
    onConfirm(c.toDataURL('image/png'));
  };

  const H = (type, pos) => (
    <div onMouseDown={e => startDrag(e, type)} style={{ position:'absolute', width:16, height:16, borderRadius:'50%', background:'white', border:'2px solid #3b82f6', cursor: type==='move' ? 'move' : type+'-resize', zIndex:10, transform:'translate(-50%,-50%)', ...pos }}/>
  );

  return (
    <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,.6)', zIndex:2000, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:16 }}>
      <div style={{ color:'white', fontSize:13, fontWeight:600 }}>Arraste as alças para recortar · Mova a área pelo centro</div>
      <div ref={canvasRef} style={{ position:'relative', maxWidth:'70vw', maxHeight:'70vh', userSelect:'none' }}>
        <img ref={imgRef} src={src} alt="" draggable={false} style={{ display:'block', maxWidth:'70vw', maxHeight:'65vh', borderRadius:8 }}/>
        <div style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
          <svg width="100%" height="100%" style={{ position:'absolute', inset:0 }}>
            <defs><mask id="crop-mask"><rect width="100%" height="100%" fill="white"/><rect x={rect.x+'%'} y={rect.y+'%'} width={rect.w+'%'} height={rect.h+'%'} fill="black"/></mask></defs>
            <rect width="100%" height="100%" fill="rgba(0,0,0,.55)" mask="url(#crop-mask)"/>
          </svg>
        </div>
        <div onMouseDown={e => startDrag(e,'move')} style={{ position:'absolute', left:rect.x+'%', top:rect.y+'%', width:rect.w+'%', height:rect.h+'%', border:'2px solid #3b82f6', cursor:'move', boxSizing:'border-box' }}>
          {H('nw',{top:0,left:0})} {H('ne',{top:0,left:'100%'})} {H('sw',{top:'100%',left:0})} {H('se',{top:'100%',left:'100%'})}
        </div>
      </div>
      <div style={{ display:'flex', gap:12 }}>
        <button onClick={onCancel} style={{ padding:'10px 24px', border:'1px solid rgba(255,255,255,.4)', borderRadius:8, background:'transparent', color:'white', fontSize:13, fontWeight:600, cursor:'pointer' }}>Cancelar</button>
        <button onClick={handleConfirm} style={{ padding:'10px 24px', border:0, borderRadius:8, background:'#3b82f6', color:'white', fontSize:13, fontWeight:700, cursor:'pointer' }}>✓ Aplicar recorte</button>
      </div>
    </div>
  );
}
window.MLCropOverlay = CropOverlay;

/* =============== COLOR PICKER DE MARCA =============== */
const BRAND_PRESETS = [
  { name:'ML Verde',  primary:'#1F7A3A', accent:'#FFC42B', primaryDark:'#155427', primaryLight:'#E8F3EC' },
  { name:'Azul Pro',  primary:'#1a56db', accent:'#FBBF24', primaryDark:'#1341b0', primaryLight:'#EBF2FF' },
  { name:'Laranja',   primary:'#C2410C', accent:'#FDE68A', primaryDark:'#9a330a', primaryLight:'#FFF7ED' },
  { name:'Preto',     primary:'#111827', accent:'#FFC42B', primaryDark:'#000000', primaryLight:'#F3F4F6' },
  { name:'Roxo',      primary:'#6D28D9', accent:'#FCD34D', primaryDark:'#5B21B6', primaryLight:'#EDE9FE' },
];

function applyBrandColors(preset) {
  const root = document.documentElement;
  root.style.setProperty('--green', preset.primary);
  root.style.setProperty('--green-dark', preset.primaryDark);
  root.style.setProperty('--green-light', preset.primaryLight);
  root.style.setProperty('--yellow', preset.accent);
  root.style.setProperty('--orange', preset.accent);
  try { localStorage.setItem('gerarml_brand', JSON.stringify(preset)); } catch(_) {}
}

(function loadSavedBrand() {
  try { const s = localStorage.getItem('gerarml_brand'); if (s) applyBrandColors(JSON.parse(s)); } catch(_) {}
})();

function BrandColorPicker() {
  const getSaved = () => { try { return JSON.parse(localStorage.getItem('gerarml_brand') || 'null') || BRAND_PRESETS[0]; } catch(_) { return BRAND_PRESETS[0]; } };
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(getSaved);
  const [customPrimary, setCustomPrimary] = useState(current.primary);
  const [customAccent, setCustomAccent] = useState(current.accent);

  const apply = (preset) => { applyBrandColors(preset); setCurrent(preset); setCustomPrimary(preset.primary); setCustomAccent(preset.accent); };
  const applyCustom = () => { apply({ name:'Personalizado', primary:customPrimary, accent:customAccent, primaryDark:customPrimary, primaryLight:'#F5F5F5' }); setOpen(false); };

  return (
    <div style={{ position:'relative' }}>
      <button onClick={() => setOpen(v => !v)} className="btn" style={{ display:'flex', alignItems:'center', gap:8 }} title="Paleta de cores da marca">
        <span style={{ display:'flex', gap:3 }}>
          <span style={{ width:14, height:14, borderRadius:'50%', background:current.primary, display:'inline-block', border:'1px solid rgba(0,0,0,.1)' }}/>
          <span style={{ width:14, height:14, borderRadius:'50%', background:current.accent, display:'inline-block', border:'1px solid rgba(0,0,0,.1)' }}/>
        </span>
        🎨 Cores
      </button>
      {open && (
        <React.Fragment>
          <div style={{ position:'absolute', top:'110%', right:0, zIndex:400, background:'white', border:'1px solid #e5e7eb', borderRadius:12, boxShadow:'0 8px 28px rgba(0,0,0,.14)', padding:16, minWidth:260 }}>
            <div style={{ fontSize:11, fontWeight:700, color:'#888', textTransform:'uppercase', letterSpacing:'.06em', marginBottom:10 }}>Presets</div>
            <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:14 }}>
              {BRAND_PRESETS.map(p => (
                <button key={p.name} onClick={() => { apply(p); setOpen(false); }} title={p.name}
                  style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:4, padding:'8px 10px', borderRadius:8, border: current.primary===p.primary ? '2px solid #3b82f6' : '1px solid #e5e7eb', background:'white', cursor:'pointer', fontSize:10, fontWeight:600, color:'#555' }}>
                  <span style={{ display:'flex', gap:2 }}>
                    <span style={{ width:18, height:18, borderRadius:4, background:p.primary, display:'inline-block' }}/>
                    <span style={{ width:18, height:18, borderRadius:4, background:p.accent, display:'inline-block' }}/>
                  </span>
                  {p.name}
                </button>
              ))}
            </div>
            <div style={{ fontSize:11, fontWeight:700, color:'#888', textTransform:'uppercase', letterSpacing:'.06em', marginBottom:8 }}>Personalizado</div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:10 }}>
              {[['Cor principal', customPrimary, setCustomPrimary],['Acento', customAccent, setCustomAccent]].map(([label, val, setVal]) => (
                <label key={label} style={{ fontSize:11, fontWeight:600, color:'#555' }}>{label}
                  <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:4 }}>
                    <input type="color" value={val} onChange={e => setVal(e.target.value)} style={{ width:32, height:32, border:'none', padding:0, cursor:'pointer' }}/>
                    <span style={{ fontSize:11, fontFamily:'monospace', color:'#555' }}>{val}</span>
                  </div>
                </label>
              ))}
            </div>
            <button onClick={applyCustom} style={{ width:'100%', padding:'8px 0', background:'#1F7A3A', color:'white', border:0, borderRadius:8, fontSize:13, fontWeight:700, cursor:'pointer' }}>Aplicar cores</button>
          </div>
          <div style={{ position:'fixed', inset:0, zIndex:399 }} onClick={() => setOpen(false)}/>
        </React.Fragment>
      )}
    </div>
  );
}

window.MLBrandColorPicker = BrandColorPicker;
window.MLImgAdjustBar = ImgAdjustBar;
window.MLIconPicker = IconPicker;
window.MLPanZoomImg = PanZoomImg;
window.MLDraggable = Draggable;
window.MLIcons = I;
window.MLCurvedArrow = CurvedArrow;
window.MLEditable = E;
window.MLExport = exportCanvas;
