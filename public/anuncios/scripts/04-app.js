/* global React, ReactDOM, MLPhoto1, MLPhoto2, MLPhoto3, MLPhoto4, MLPhoto5, MLPhoto6, MLExport */
const { useState, useRef, useEffect, useMemo } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "storeName": "Mega Distribuidor",
  "productName": "NIVELADOR DE MOTOR"
}/*EDITMODE-END*/;

const INITIAL = {
  mainImg: 'assets/produto-capa.jpg',
  productOnlyImg: '',

  p1_zoom: 1, p2_zoom: 1, p3_zoom: 1, p4_zoom: 1, p5_zoom: 1, p6_zoom: 1,
  p1_corner4: '',
  p1_variant: 'A',
  p1e_spot: { img: '', x: 60, y: 58, size: 340 },

  p2_f1_title: 'Sistema manual:',
  p2_f1_text: 'Com manivela para ajuste fino da inclinação.',
  p2_f2_title: 'Maior equilíbrio:',
  p2_f2_text: 'Com furos para distribuir o peso das correntes.',
  p2_f3_title: 'Menos esforço:',
  p2_f3_text: 'Suspenda motores pesados de forma rápida.',
  p2_f4_title: 'Resistente:',
  p2_f4_text: 'Construção em aço com alta durabilidade.',
  p2_callout_title: 'Aplicações indicadas ao nivelador:',
  p2_callout_text: 'Projetado para a instalação e remoção do motor no cofre do carro.',

  p3_title_a: 'ALTA',
  p3_title_b: 'CAPACIDADE',
  p3_title_c: 'PARA MOTORES DE ATÉ',
  p3_title_pill: '900KG.',
  p3_f1_title: 'Fixação:',
  p3_f1_text: 'Acompanha kit com 2 correntes com ganchos.',
  p3_f2_title: 'Argola superior:',
  p3_f2_text: 'Com argola para instalação segura do nivelador.',
  p3_f3_title: 'Acabamento:',
  p3_f3_text: 'Pintura anticorrosiva resistente ao desgaste.',
  p3_f4_title: 'Manivela:',
  p3_f4_text: 'Sistema mecânico para ajuste fino e preciso.',
  p3_dim1: '60cm',
  p3_dim2: '10cm',
  p3_dim3: '52cm',
  p3_dim4: '8kg',
  p3_callout_title: 'Funcionamento 100% manual:',
  p3_callout_text: 'Toda a operação de suspender e nivelar é feita pela manivela.',

  p4_title_a: 'A',
  p4_title_b: 'SOLUÇÃO',
  p4_title_c: 'IDEAL PARA',
  p4_title_pill: 'NIVELAMENTO PRECISO.',
  p4_b1_title: 'Profissional:',
  p4_b1_text: 'Indicado para uso pesado em oficinas mecânicas.',
  p4_b2_title: 'Alta Qualidade:',
  p4_b2_text: 'Feito em aço tratado e com pintura anticorrosiva.',
  p4_callout_title: 'Suporte para instalação suspensa:',
  p4_callout_text: 'Argola compatível com guinchos, talhas e suportes aéreos.',

  p5_lifestyle: 'assets/warehouse.jpg',
  p5_t1_hl: 'novo',
  p5_t1_text_a: 'Produto',
  p5_t1_text_b: 'com nota fiscal.',
  p5_t2_hl: '90 dias',
  p5_t2_text_a: 'Garantia de',
  p5_t2_text_b: 'contra defeitos.',
  p5_t3_hl: '24h',
  p5_t3_text_a: 'Envio em até',
  p5_t3_text_b: 'após pagamento.',
  p5_logo_letters: 'MD',
  p5_store_name: 'Mega Distribuidor',
  p5_store_sub: '+1.800 Seguidores',
  p5_badge: 'Avaliação:',
  p5_rating: '4.9',
  p5_stat1_v: '+150',
  p5_stat1_l: 'Produtos',
  p5_stat2_l: 'Bom Atendimento',
  p5_stat3_l: 'Entrega no Prazo',
  p5_mini_size: 280,

  // Foto 6 — variante MercadoLíder Gold
  p6_lifestyle: 'assets/warehouse.jpg',
  p6_t1_hl: 'novo',
  p6_t1_text_a: 'Produto',
  p6_t1_text_b: 'com nota fiscal.',
  p6_t2_hl: '90 dias',
  p6_t2_text_a: 'Garantia de',
  p6_t2_text_b: 'contra defeitos.',
  p6_t3_hl: '24h',
  p6_t3_text_a: 'Envio em até',
  p6_t3_text_b: 'após pagamento.',
  p6_store_name: 'Mega Distribuidor',
  p6_store_sub: '+100 Produtos',
  p6_badge: 'MercadoLíder Gold',
  p6_stat1_v: '+5mil',
  p6_stat1_l: 'Vendas',
  p6_stat2_l: 'Bom Atendimento',
  p6_stat3_l: 'Entrega no Prazo',
  p6_mini_size: 280,

  // BG mode: usa imagem de fundo fixa por foto, ocultando layout React
  bg_mode: true,
  bg_foto1: 'assets/bg-foto1.png',
  bg_foto2: 'assets/bg-foto2.png',
  bg_foto3: 'assets/bg-foto3.png',
  bg_foto4: 'assets/bg-foto4.png',
  bg_foto5: 'assets/bg-foto5.png',
  bg_foto6: 'assets/bg-foto6.png',
};

/* =============================================================
   AUTO-GENERATE: dado N fotos, gera os crops para os 5 templates
   ============================================================= */
async function autoGenerate(uploadedDataUrls) {
  const out = {};
  if (!uploadedDataUrls.length) return out;
  out.mainImg = uploadedDataUrls[0];
  if (uploadedDataUrls.length >= 3) {
    out.p5_lifestyle = uploadedDataUrls[2];
    out.p6_lifestyle = uploadedDataUrls[2];
  } else if (uploadedDataUrls.length >= 2) {
    out.p5_lifestyle = uploadedDataUrls[1];
    out.p6_lifestyle = uploadedDataUrls[1];
  }
  const crops = await makeCircleCrops(uploadedDataUrls[0]);
  out.p1_circles = crops.map(img => ({ img }));
  if (uploadedDataUrls.length >= 2) out.p1_corner4 = uploadedDataUrls[1];
  return out;
}

// ---------------------------------------------------------------------------
// Helpers para gpt-image-1
// ---------------------------------------------------------------------------
function dataUrlToBlob(dataUrl) {
  const [hdr, b64] = dataUrl.split(',');
  const mime = hdr.match(/:(.*?);/)[1];
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return new Blob([arr], { type: mime });
}

async function toPngBlob(dataUrl, maxPx = 1024) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, maxPx / Math.max(img.naturalWidth, img.naturalHeight));
      const w = Math.round(img.naturalWidth * scale);
      const h = Math.round(img.naturalHeight * scale);
      const c = document.createElement('canvas');
      c.width = w; c.height = h;
      c.getContext('2d').drawImage(img, 0, 0, w, h);
      c.toBlob(resolve, 'image/png');
    };
    img.src = dataUrl;
  });
}

async function callGptImage1(imageDataUrl, prompt) {
  const key = (window.OPENAI_API_KEY || localStorage.getItem('openai_api_key') || '').trim();
  if (!key) throw new Error('Configure sua chave OpenAI primeiro.');

  const blob = await toPngBlob(imageDataUrl, 1024);
  const form = new FormData();
  form.append('model', 'gpt-image-1');
  form.append('image', blob, 'product.png');
  form.append('prompt', prompt);
  form.append('n', '1');
  form.append('size', '1024x1024');
  form.append('quality', 'high');

  const resp = await fetch('https://api.openai.com/v1/images/edits', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}` },
    body: form,
  });
  if (!resp.ok) {
    const err = await resp.json();
    throw new Error(err.error?.message || `OpenAI ${resp.status}`);
  }
  const json = await resp.json();
  const b64 = json.data[0].b64_json;
  return `data:image/png;base64,${b64}`;
}

// Prompts e lógica por slot
const LS_PROMPTS_KEY = 'gerarml_prompts';

const DEFAULT_PROMPTS = {
  1: `Professional e-commerce product photography, studio white background, soft even lighting, slight shadow at base, high resolution, product centered, no text, no watermark, clean isolated product shot.`,
  '2a': `Extreme close-up macro product photography of an important detail (left side / top area), studio white background, sharp focus, professional lighting, no text, isolated on white.`,
  '2b': `Extreme close-up macro product photography of an important detail (right side / bottom area), studio white background, sharp focus, professional lighting, no text, isolated on white.`,
  3: `Professional e-commerce product photography, studio white background, soft even lighting, slight shadow at base, high resolution, product centered, no text, clean shot — same as the reference product image.`,
  4: `Lifestyle product photography showing the product in real-world use, natural environment, person interacting with product, warm natural lighting, professional photography, no text.`,
};

function loadPrompts() {
  try {
    const saved = localStorage.getItem(LS_PROMPTS_KEY);
    if (saved) return { ...DEFAULT_PROMPTS, ...JSON.parse(saved) };
  } catch (_) {}
  return { ...DEFAULT_PROMPTS };
}

function savePrompts(prompts) {
  try { localStorage.setItem(LS_PROMPTS_KEY, JSON.stringify(prompts)); } catch (_) {}
}

// Prompts reativos — objeto mutável compartilhado, atualizado pelo editor
let _activePrompts = loadPrompts();
function getPrompt(key) { return _activePrompts[key] || DEFAULT_PROMPTS[key] || ''; }
function setPromptAndSave(key, value) {
  _activePrompts = { ..._activePrompts, [key]: value };
  savePrompts(_activePrompts);
}

async function generatePhotoWithAI(slotNum, sourceImgs) {
  const src = sourceImgs[0];
  if (!src) throw new Error('Suba pelo menos 1 foto do produto primeiro.');

  if (slotNum === 1) {
    const img = await callGptImage1(src, getPrompt(1));
    return { mainImg: img };
  }

  if (slotNum === 2) {
    const [c1, c2] = await Promise.all([
      callGptImage1(src, getPrompt('2a')),
      callGptImage1(src, getPrompt('2b')),
    ]);
    return {
      p1_circles: [{ img: c1 }, { img: c2 }, { img: '' }],
      p1e_spot: { img: c1, x: 60, y: 58, size: 340 },
    };
  }

  if (slotNum === 3) {
    const [hero, cl1, cl2] = await Promise.all([
      callGptImage1(src, getPrompt(3)),
      callGptImage1(src, getPrompt('2a')),
      callGptImage1(src, getPrompt('2b')),
    ]);
    return { mainImg: hero, p1_circles: [{ img: cl1 }, { img: cl2 }, { img: '' }] };
  }

  if (slotNum === 4) {
    const img = await callGptImage1(src, getPrompt(4));
    return { p5_lifestyle: img, p6_lifestyle: img };
  }

  return {};
}

// Carrega imagem e retorna 3 crops zoom de regiões diferentes
function makeCircleCrops(dataUrl) {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      // 3 regiões: terço esquerdo, centro, terço direito
      const regions = [
        { x: 0, y: h*0.15, w: w*0.45, h: h*0.6 },
        { x: w*0.27, y: h*0.05, w: w*0.45, h: h*0.6 },
        { x: w*0.55, y: h*0.15, w: w*0.45, h: h*0.6 },
      ];
      const crops = regions.map(r => {
        const c = document.createElement('canvas');
        c.width = 400; c.height = 400;
        const ctx = c.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0,0,400,400);
        // sample square: the smaller of r.w/r.h
        const side = Math.min(r.w, r.h);
        const sx = r.x + (r.w - side)/2;
        const sy = r.y + (r.h - side)/2;
        ctx.drawImage(img, sx, sy, side, side, 0, 0, 400, 400);
        return c.toDataURL('image/png');
      });
      resolve(crops);
    };
    img.onerror = () => resolve(['','','']);
    img.src = dataUrl;
  });
}

/* ============== Slot wrapper with scaling + actions ============== */
function Slot({ num, title, children, productName, bg, extra }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const [scale, setScale] = useState(0.4);

  useEffect(() => {
    const update = () => {
      if (!wrapRef.current) return;
      const w = wrapRef.current.clientWidth;
      setScale(w / 1200);
    };
    update();
    const ro = new ResizeObserver(update);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  const handleExport = async () => {
    if (!canvasRef.current) return;
    const filename = `${(productName || 'produto').replace(/\s+/g,'-').toLowerCase()}-foto-${num}.png`;
    await MLExport(canvasRef.current, filename);
  };

  return (
    <div className="slot">
      <div className="slot-head">
        <div className="slot-num">Foto <b>{num}</b> · {title}</div>
        <div className="slot-actions">
          <button onClick={handleExport} title="Baixar PNG 1200×1540">↓ PNG</button>
        </div>
      </div>
      {extra && <div style={{marginBottom:6}}>{extra}</div>}
      <div className="canvas-wrap" ref={wrapRef}>
        <div ref={canvasRef} className="canvas" style={{ transform: `scale(${scale})`, position: 'relative' }}>
          {bg && (
            <img src={bg} alt="" style={{
              position:'absolute', inset:0, width:'100%', height:'100%',
              objectFit:'cover', zIndex:0, pointerEvents:'none'
            }}/>
          )}
          <div style={{position:'relative', zIndex:1, width:'100%', height:'100%'}}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============== AI Text generation — OpenAI gpt-4o-mini ============== */
async function generateTextsWithAI(productName, category, extras) {
  const key = (window.OPENAI_API_KEY || localStorage.getItem('openai_api_key') || '').trim();
  if (!key) throw new Error('Configure sua chave OpenAI na seção "Chave OpenAI" acima.');

  const prompt = `Você gera textos de marketing para anúncios de Mercado Livre em PT-BR.
Produto: "${productName}"
Categoria: "${category || 'produto'}"
Detalhes extras: "${extras || 'nenhum'}"

Gere um JSON (APENAS o JSON, sem markdown, sem comentários) com EXATAMENTE estas chaves. Textos curtos, diretos, em português brasileiro. Use linguagem persuasiva mas técnica:

{
  "p2_f1_title": "título de 1-3 palavras com dois pontos no fim",
  "p2_f1_text": "frase curta 6-10 palavras",
  "p2_f2_title": "título de 1-3 palavras com dois pontos",
  "p2_f2_text": "frase curta 6-10 palavras",
  "p2_f3_title": "título de 1-3 palavras com dois pontos",
  "p2_f3_text": "frase curta 6-10 palavras",
  "p2_callout_title": "título de aplicação/uso 4-6 palavras com dois pontos",
  "p2_callout_text": "frase 8-12 palavras explicando aplicação",
  "p3_title_a": "primeira palavra do título principal MAIÚSCULA",
  "p3_title_b": "segunda palavra MAIÚSCULA (highlight verde)",
  "p3_title_c": "frase complementar 2-4 palavras MAIÚSCULAS",
  "p3_title_pill": "valor numérico+unidade ex 900KG ou 5 ANOS",
  "p3_f1_title": "título de fixação/montagem com dois pontos",
  "p3_f1_text": "frase curta 6-10 palavras",
  "p3_f2_title": "título de característica estrutural com dois pontos",
  "p3_f2_text": "frase curta 6-10 palavras",
  "p3_dim1": "dimensão1 ex 60cm",
  "p3_dim2": "dimensão2 ex 10cm",
  "p3_dim3": "dimensão3 ex 52cm",
  "p3_callout_title": "título funcionamento com dois pontos",
  "p3_callout_text": "frase 8-12 palavras",
  "p4_title_a": "primeira palavra MAIÚSCULA",
  "p4_title_b": "palavra-chave MAIÚSCULA (highlight verde)",
  "p4_title_c": "palavra ligação MAIÚSCULA",
  "p4_title_pill": "benefício final MAIÚSCULAS curtas",
  "p4_b1_title": "qualificador profissional com dois pontos",
  "p4_b1_text": "frase 6-10 palavras",
  "p4_b2_title": "qualificador qualidade com dois pontos",
  "p4_b2_text": "frase 6-10 palavras",
  "p4_callout_title": "título suporte/extra com dois pontos",
  "p4_callout_text": "frase 8-12 palavras"
}`;

  const resp = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      max_tokens: 1200,
      temperature: 0.7,
      messages: [{ role: 'user', content: prompt }],
    }),
  });
  if (!resp.ok) {
    const err = await resp.json();
    throw new Error(err.error?.message || `OpenAI error ${resp.status}`);
  }
  const data = await resp.json();
  const text = data.choices[0].message.content;
  const m = text.match(/\{[\s\S]*\}/);
  if (!m) throw new Error('Resposta sem JSON válido');
  return JSON.parse(m[0]);
}

/* ============== Botão de geração IA por slot com editor de prompt ============== */
function AIGenBtn({ slotNum, rawImgs, onResult, label, title, promptKeys }) {
  const [status, setStatus] = React.useState('idle');
  const [msg, setMsg] = React.useState('');
  const [open, setOpen] = React.useState(false);
  // Estado local dos prompts editados (inicializa do _activePrompts)
  const [drafts, setDrafts] = React.useState(() =>
    Object.fromEntries((promptKeys || []).map(k => [k, getPrompt(k)]))
  );
  const [saved, setSaved] = React.useState(false);

  const handleSave = () => {
    (promptKeys || []).forEach(k => setPromptAndSave(k, drafts[k]));
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  const handleReset = () => {
    const reset = Object.fromEntries((promptKeys || []).map(k => [k, DEFAULT_PROMPTS[k] || '']));
    setDrafts(reset);
    (promptKeys || []).forEach(k => setPromptAndSave(k, DEFAULT_PROMPTS[k] || ''));
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  const run = async () => {
    if (!rawImgs || rawImgs.length === 0) {
      setMsg('Suba pelo menos 1 foto primeiro.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }
    setStatus('loading'); setMsg('');
    try {
      const patch = await generatePhotoWithAI(slotNum, rawImgs);
      onResult(patch);
      setStatus('done'); setMsg('✓ Aplicado!');
      setTimeout(() => setStatus('idle'), 2500);
    } catch (e) {
      setStatus('error'); setMsg(e.message);
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const colors = {
    idle:    { bg: '#f0fdf9', border: '#6ee7b7', color: '#065f46' },
    loading: { bg: '#e6f9f4', border: '#6ee7b7', color: '#065f46' },
    done:    { bg: '#dcfce7', border: '#86efac', color: '#14532d' },
    error:   { bg: '#fef2f2', border: '#fca5a5', color: '#991b1b' },
  };
  const c = colors[status];

  const LABELS = {
    1: 'Hero (estúdio)',
    '2a': 'Close 1',
    '2b': 'Close 2',
    3: 'Produto (foto 3)',
    4: 'Lifestyle',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {/* Botão principal */}
        <button onClick={run} disabled={status === 'loading'} title={title}
          style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '5px 12px',
            border: `1px solid ${c.border}`, borderRadius: 7, background: c.bg, color: c.color,
            fontSize: 11, fontWeight: 700, cursor: status === 'loading' ? 'wait' : 'pointer', whiteSpace: 'nowrap' }}>
          {status === 'loading' ? '⏳' : '✦'} {status === 'loading' ? 'Gerando…' : label}
        </button>

        {/* Toggle do editor de prompt */}
        {promptKeys && promptKeys.length > 0 && (
          <button onClick={() => setOpen(v => !v)}
            title="Editar prompts desta geração"
            style={{ padding: '5px 8px', border: '1px solid #e5e7eb', borderRadius: 7,
              background: open ? '#f3f4f6' : 'white', fontSize: 11, cursor: 'pointer',
              color: open ? '#374151' : '#9ca3af', fontWeight: 600 }}>
            {open ? '▲ prompt' : '▼ prompt'}
          </button>
        )}

        {msg && <span style={{ fontSize: 11, color: c.color, fontWeight: 500 }}>{msg}</span>}
      </div>

      {/* Painel de edição de prompts */}
      {open && promptKeys && (
        <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 10,
          padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {promptKeys.map(k => (
            <div key={k}>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#6b7280', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '.05em' }}>
                {LABELS[k] || k}
                {drafts[k] !== DEFAULT_PROMPTS[k] && (
                  <span style={{ marginLeft: 6, color: '#f59e0b', fontSize: 10 }}>● editado</span>
                )}
              </div>
              <textarea
                value={drafts[k] || ''}
                onChange={e => setDrafts(prev => ({ ...prev, [k]: e.target.value }))}
                rows={3}
                style={{ width: '100%', padding: '8px 10px', border: '1px solid #d1d5db',
                  borderRadius: 7, fontSize: 12, fontFamily: 'ui-monospace, monospace',
                  resize: 'vertical', lineHeight: 1.5, color: '#111827' }}
              />
            </div>
          ))}
          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
            <button onClick={handleReset}
              style={{ padding: '5px 12px', border: '1px solid #e5e7eb', borderRadius: 6,
                background: 'white', fontSize: 11, fontWeight: 600, cursor: 'pointer', color: '#6b7280' }}>
              Restaurar padrão
            </button>
            <button onClick={handleSave}
              style={{ padding: '5px 14px', border: '1px solid #6ee7b7', borderRadius: 6,
                background: saved ? '#dcfce7' : '#f0fdf9', fontSize: 11, fontWeight: 700,
                cursor: 'pointer', color: '#065f46' }}>
              {saved ? '✓ Salvo!' : '💾 Salvar prompt'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============== Barra de zoom do produto por slot ============== */
function ZoomBar({ value, onChange }) {
  const pct = Math.round((value || 1) * 100);
  const step = 0.05;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#f0f0f0', padding: '4px 8px', borderRadius: 8 }}>
      <button
        onClick={() => onChange(Math.max(0.3, +(value - step).toFixed(2)))}
        style={{ width: 28, height: 28, border: 0, borderRadius: 6, background: 'white', fontSize: 16, fontWeight: 700, cursor: 'pointer', display: 'grid', placeItems: 'center', color: '#444', boxShadow: '0 1px 2px rgba(0,0,0,.08)' }}>−</button>
      <input
        type="range" min="30" max="200" step="5" value={pct}
        onChange={e => onChange(+(+e.target.value / 100).toFixed(2))}
        style={{ width: 80, accentColor: '#1F7A3A' }}
      />
      <button
        onClick={() => onChange(Math.min(2, +(value + step).toFixed(2)))}
        style={{ width: 28, height: 28, border: 0, borderRadius: 6, background: 'white', fontSize: 16, fontWeight: 700, cursor: 'pointer', display: 'grid', placeItems: 'center', color: '#444', boxShadow: '0 1px 2px rgba(0,0,0,.08)' }}>+</button>
      <span style={{ fontSize: 11, fontWeight: 700, color: '#666', minWidth: 34, textAlign: 'right' }}>{pct}%</span>
      {pct !== 100 && (
        <button onClick={() => onChange(1)} style={{ fontSize: 10, fontWeight: 600, border: '1px solid #ddd', borderRadius: 5, background: 'white', color: '#999', padding: '2px 6px', cursor: 'pointer' }}>reset</button>
      )}
    </div>
  );
}

/* ============== Seletor de variante de capa ============== */
function VariantPicker({ value, onChange }) {
  const variants = [
    { id: 'A', label: '3 círculos' },
    { id: 'E', label: '1 círculo' },
    { id: 'C', label: 'Só produto' },
  ];
  return (
    <div style={{ display: 'flex', gap: 4, background: '#f0f0f0', padding: 3, borderRadius: 8 }}>
      {variants.map(v => (
        <button key={v.id} onClick={() => onChange(v.id)} style={{
          flex: 1, padding: '5px 0', border: 0, borderRadius: 6, fontSize: 11, fontWeight: 700,
          cursor: 'pointer',
          background: value === v.id ? '#1F7A3A' : 'transparent',
          color: value === v.id ? 'white' : '#666',
          boxShadow: value === v.id ? '0 1px 3px rgba(0,0,0,.15)' : 'none',
          transition: 'all .12s',
        }}>{v.label}</button>
      ))}
    </div>
  );
}

/* ============== OpenAI API Key Banner ============== */
function OpenAIKeyBanner({ apiKey, setApiKey }) {
  const [editing, setEditing] = React.useState(!apiKey);
  const [draft, setDraft] = React.useState(apiKey || '');

  const save = () => {
    const v = draft.trim();
    localStorage.setItem('openai_api_key', v);
    window.OPENAI_API_KEY = v;
    setApiKey(v);
    setEditing(false);
  };
  const clear = () => {
    localStorage.removeItem('openai_api_key');
    window.OPENAI_API_KEY = '';
    setApiKey('');
    setDraft('');
    setEditing(true);
  };

  if (!editing && apiKey) {
    return (
      <div style={{maxWidth:920, margin:'0 auto 16px', background:'#f0fdf9', border:'1px solid #6ee7b7', borderRadius:12, padding:'12px 20px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:12}}>
        <div style={{display:'flex', alignItems:'center', gap:10}}>
          <span style={{fontSize:18}}>✦</span>
          <div>
            <div style={{fontFamily:'Montserrat', fontWeight:800, fontSize:13, color:'#065f46'}}>OpenAI conectada</div>
            <div style={{fontSize:11, color:'#6b7280'}}>sk-...{apiKey.slice(-6)} · geração de texto + melhorias de imagem ativas</div>
          </div>
        </div>
        <button onClick={clear} style={{padding:'6px 12px', border:'1px solid #6ee7b7', borderRadius:7, background:'white', fontSize:12, fontWeight:600, cursor:'pointer', color:'#6b7280'}}>Trocar chave</button>
      </div>
    );
  }

  return (
    <div style={{maxWidth:920, margin:'0 auto 16px', background:'#fff', border:'2px dashed #6ee7b7', borderRadius:12, padding:'20px 24px', boxShadow:'0 4px 16px rgba(0,0,0,.06)'}}>
      <div style={{fontFamily:'Montserrat', fontWeight:800, fontSize:15, marginBottom:4}}>✦ Configure sua chave OpenAI</div>
      <div style={{fontSize:12, color:'#6b7280', marginBottom:14}}>
        Necessária para geração de textos com IA e melhorias de imagem. A chave fica salva localmente no navegador e nunca é enviada para servidores externos — só vai direto para a OpenAI.
      </div>
      <div style={{display:'flex', gap:8}}>
        <input
          type="password"
          placeholder="sk-proj-..."
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && save()}
          style={{flex:1, padding:'10px 14px', border:'1px solid #d1fae5', borderRadius:8, fontSize:13, fontFamily:'monospace', outline:'none'}}
        />
        <button onClick={save} disabled={!draft.trim().startsWith('sk-')} style={{padding:'10px 20px', background:'#10a37f', color:'white', border:0, borderRadius:8, fontSize:13, fontWeight:700, cursor: draft.trim().startsWith('sk-') ? 'pointer' : 'not-allowed', opacity: draft.trim().startsWith('sk-') ? 1 : 0.5}}>Salvar</button>
      </div>
      <div style={{fontSize:11, color:'#9ca3af', marginTop:8}}>
        Obtenha em <a href="https://platform.openai.com/api-keys" target="_blank" style={{color:'#10a37f'}}>platform.openai.com/api-keys</a>
      </div>
    </div>
  );
}

/* ============== Upload zone ============== */
function UploadZone({ onGenerate, productName, setProductName, onRawFiles }) {
  const [files, setFiles] = useState([]);
  const [category, setCategory] = useState('Ferramentas');
  const [extras, setExtras] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiStatus, setAiStatus] = useState('');
  const inputRef = useRef(null);

  // Carrega arquivos, converte para dataURL e aplica imagens imediatamente
  const handleFiles = (list) => {
    const arr = Array.from(list).slice(0, 5);
    Promise.all(arr.map(f => new Promise((res) => {
      const r = new FileReader();
      r.onload = (e) => res(e.target.result);
      r.readAsDataURL(f);
    }))).then(async (urls) => {
      const merged = [...files, ...urls].slice(0, 5);
      setFiles(merged);
      if (onRawFiles) onRawFiles(merged);
      // Aplica imagens direto, sem precisar clicar em nada
      const imgPatch = await autoGenerate(merged);
      if (Object.keys(imgPatch).length > 0) onGenerate(imgPatch);
    });
  };

  const removeFile = (i) => {
    const next = files.filter((_, j) => j !== i);
    setFiles(next);
    // Reaplicar com as fotos restantes
    if (next.length > 0) autoGenerate(next).then(patch => onGenerate(patch));
    if (onRawFiles) onRawFiles(next);
  };

  const runAI = async () => {
    if (!productName?.trim()) return;
    setAiLoading(true);
    setAiStatus('🤖 IA gerando títulos e textos...');
    try {
      const aiPatch = await generateTextsWithAI(productName, category, extras);
      onGenerate(aiPatch);
      setAiStatus('✅ Textos aplicados!');
    } catch (e) {
      setAiStatus('❌ ' + e.message);
    } finally {
      setAiLoading(false);
      setTimeout(() => setAiStatus(''), 4000);
    }
  };

  return (
    <div className="uploader">
      <h2>📸 Fotos do produto</h2>
      <p>Arraste ou selecione as fotos — elas são aplicadas automaticamente nos templates. Para gerar os textos com IA, preencha o nome e clique em "Gerar textos".</p>

      {/* Drop zone */}
      <div
        className="drop"
        onClick={() => inputRef.current.click()}
        onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add('dragover'); }}
        onDragLeave={(e) => e.currentTarget.classList.remove('dragover')}
        onDrop={(e) => {
          e.preventDefault();
          e.currentTarget.classList.remove('dragover');
          handleFiles(e.dataTransfer.files);
        }}
      >
        <div style={{fontSize:14, fontWeight:600, color:'#666'}}>
          {files.length === 0
            ? 'Clique ou arraste as fotos aqui (até 5)'
            : `${files.length} foto(s) — clique para adicionar mais`}
        </div>
        <input ref={inputRef} type="file" accept="image/*" multiple style={{display:'none'}} onChange={(e) => handleFiles(e.target.files)}/>
      </div>

      {/* Thumbnails */}
      {files.length > 0 && (
        <div className="drop-grid">
          {files.map((url, i) => (
            <div key={i} className="drop-thumb" style={{backgroundImage: `url(${url})`}}>
              <button className="drop-thumb-rm" onClick={(e) => { e.stopPropagation(); removeFile(i); }}>×</button>
              <div style={{position:'absolute', bottom:4, left:4, background:'rgba(0,0,0,.7)', color:'white', fontSize:10, padding:'2px 6px', borderRadius:4, fontWeight:600}}>
                {i === 0 ? 'principal' : i === 2 ? 'lifestyle' : `extra ${i}`}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Separador IA */}
      <div style={{marginTop:20, paddingTop:16, borderTop:'1px solid #eee'}}>
        <div style={{fontSize:13, fontWeight:700, color:'#1a1a1a', marginBottom:10}}>🤖 Gerar textos com IA <span style={{fontWeight:400, color:'#888', fontSize:12}}>(opcional)</span></div>
        <div style={{display:'grid', gridTemplateColumns:'2fr 1fr', gap:10, marginBottom:10}}>
          <Field label="Nome do produto" value={productName} onChange={setProductName}/>
          <Field label="Categoria" value={category} onChange={setCategory}/>
        </div>
        <Field label="Detalhes técnicos (dimensões, material, capacidade...)" value={extras} onChange={setExtras} multi/>

        {aiStatus && (
          <div style={{margin:'10px 0', padding:'10px 14px', background: aiLoading ? '#FFF8E1' : '#E8F3EC', border:`1px solid ${aiLoading ? '#FFE9A8' : '#A0E548'}`, borderRadius:8, fontSize:13, fontWeight:500, color: aiLoading ? '#8B6F00' : '#1F7A3A'}}>
            {aiStatus}
          </div>
        )}

        <div style={{display:'flex', justifyContent:'flex-end', marginTop:10}}>
          <button className="btn primary" disabled={aiLoading || !productName?.trim()} onClick={runAI}>
            {aiLoading ? 'Gerando...' : '✨ Gerar textos (IA)'}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============== Tweaks panel ============== */
function TweaksUI({ data, set, productName, setProductName, storeName, setStoreName, onClose }) {
  const [tab, setTab] = useState('imgs');
  return (
    <div style={{
      position:'fixed', right:20, top:20, bottom:20, width:340,
      background:'#fff', borderRadius:14, boxShadow:'0 20px 60px rgba(0,0,0,.20)',
      display:'flex', flexDirection:'column', zIndex:1000, fontFamily:'Inter, sans-serif',
    }}>
      <div style={{padding:'16px 20px', borderBottom:'1px solid #eee', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div>
          <div style={{fontFamily:'Montserrat', fontWeight:800, fontSize:15}}>Tweaks</div>
          <div style={{fontSize:11, color:'#888'}}>Edite tudo aqui ou direto nas fotos</div>
        </div>
        <button onClick={onClose} style={{border:0, background:'#f0f0f0', borderRadius:6, width:28, height:28, cursor:'pointer', fontSize:16}}>×</button>
      </div>

      <div style={{padding:'12px 16px 0'}}>
        <div className="tw-tabs">
          {['imgs','text','meta'].map(id => (
            <button key={id} className={`tw-tab ${tab === id ? 'active' : ''}`} onClick={() => setTab(id)}>
              {id === 'imgs' ? 'Imagens' : id === 'text' ? 'Textos' : 'Geral'}
            </button>
          ))}
        </div>
      </div>

      <div style={{flex:1, overflowY:'auto', padding:'12px 20px 20px'}}>
        {tab === 'meta' && (<>
          <Field label="Nome do produto" value={productName} onChange={setProductName}/>
          <Field label="Nome da loja" value={storeName} onChange={(v) => { setStoreName(v); set('p5_store_name', v); }}/>
          <Field label="Iniciais do logo" value={data.p5_logo_letters} onChange={(v) => set('p5_logo_letters', v)} maxLength={3}/>
          <Field label="Selo MercadoLíder" value={data.p5_badge} onChange={(v) => set('p5_badge', v)}/>
          <Field label="Vendas (+5mil)" value={data.p5_stat1_v} onChange={(v) => set('p5_stat1_v', v)}/>
          <Hint>Você também pode clicar direto no texto da foto para editar in-loco.</Hint>
        </>)}
        {tab === 'imgs' && (<>
          <ImgField label="Imagem principal do produto" value={data.mainImg} onChange={(v) => set('mainImg', v)}/>
          <ImgField label="Foto 1 — Detalhe esquerdo" value={data.p1_circles[0].img} onChange={(v) => { const cs=[...data.p1_circles]; cs[0]={img:v}; set('p1_circles', cs); }}/>
          <ImgField label="Foto 1 — Detalhe centro / canto sup. dir." value={data.p1_circles[1].img} onChange={(v) => { const cs=[...data.p1_circles]; cs[1]={img:v}; set('p1_circles', cs); }}/>
          <ImgField label="Foto 1 — Detalhe direito / canto inf. esq." value={data.p1_circles[2].img} onChange={(v) => { const cs=[...data.p1_circles]; cs[2]={img:v}; set('p1_circles', cs); }}/>
          <ImgField label="Foto 1 — 4º canto inf. dir. (variante C)" value={data.p1_corner4||''} onChange={(v) => set('p1_corner4', v)}/>
          {(data.p1_variant||'A') === 'E' && (<>
            <SectionLabel>Variante E — círculo de detalhe</SectionLabel>
            <Hint>Arraste o círculo diretamente na foto para reposicionar. Use +/− para redimensionar, ou troque a imagem abaixo.</Hint>
            <ImgField label={`Imagem do círculo (tamanho: ${(data.p1e_spot||{}).size||340}px)`}
              value={(data.p1e_spot||{}).img||''}
              onChange={(v) => set('p1e_spot', { ...(data.p1e_spot||{}), img: v })}
            />
          </>)}
          <ImgField label="Foto 5 — Lifestyle / Estoque" value={data.p5_lifestyle} onChange={(v) => set('p5_lifestyle', v)}/>
          <ImgField label="Foto 6 — Lifestyle / Estoque" value={data.p6_lifestyle} onChange={(v) => set('p6_lifestyle', v)}/>
          <SectionLabel>Tamanho da miniatura do produto</SectionLabel>
          <SliderField label={`Foto 5: ${data.p5_mini_size}px`} value={data.p5_mini_size} min={140} max={420} onChange={(v) => set('p5_mini_size', v)}/>
          <SliderField label={`Foto 6: ${data.p6_mini_size}px`} value={data.p6_mini_size} min={140} max={420} onChange={(v) => set('p6_mini_size', v)}/>
          <SectionLabel>Imagens de fundo (modo fundo)</SectionLabel>
          <BgSavedBanner data={data} set={set}/>
          <ImgField label="Fundo Foto 1" value={data.bg_foto1} onChange={(v) => set('bg_foto1', v)} saved={!!localStorage.getItem('gerarml_bg_bg_foto1')}/>
          <ImgField label="Fundo Foto 2" value={data.bg_foto2} onChange={(v) => set('bg_foto2', v)} saved={!!localStorage.getItem('gerarml_bg_bg_foto2')}/>
          <ImgField label="Fundo Foto 3" value={data.bg_foto3} onChange={(v) => set('bg_foto3', v)} saved={!!localStorage.getItem('gerarml_bg_bg_foto3')}/>
          <ImgField label="Fundo Foto 4" value={data.bg_foto4} onChange={(v) => set('bg_foto4', v)} saved={!!localStorage.getItem('gerarml_bg_bg_foto4')}/>
          <ImgField label="Fundo Foto 5" value={data.bg_foto5} onChange={(v) => set('bg_foto5', v)} saved={!!localStorage.getItem('gerarml_bg_bg_foto5')}/>
          <ImgField label="Fundo Foto 6" value={data.bg_foto6} onChange={(v) => set('bg_foto6', v)} saved={!!localStorage.getItem('gerarml_bg_bg_foto6')}/>
        </>)}
        {tab === 'text' && (<>
          <SectionLabel>Foto 2 — Características</SectionLabel>
          <Field label="Característica 1 título" value={data.p2_f1_title} onChange={(v) => set('p2_f1_title', v)}/>
          <Field label="Característica 1 texto" value={data.p2_f1_text} onChange={(v) => set('p2_f1_text', v)} multi/>
          <Field label="Característica 2 título" value={data.p2_f2_title} onChange={(v) => set('p2_f2_title', v)}/>
          <Field label="Característica 2 texto" value={data.p2_f2_text} onChange={(v) => set('p2_f2_text', v)} multi/>
          <Field label="Característica 3 título" value={data.p2_f3_title} onChange={(v) => set('p2_f3_title', v)}/>
          <Field label="Característica 3 texto" value={data.p2_f3_text} onChange={(v) => set('p2_f3_text', v)} multi/>
          <Field label="Característica 4 título" value={data.p2_f4_title} onChange={(v) => set('p2_f4_title', v)}/>
          <Field label="Característica 4 texto" value={data.p2_f4_text} onChange={(v) => set('p2_f4_text', v)} multi/>
          <SectionLabel>Foto 3 — Dimensões & Especificações</SectionLabel>
          <Field label="Dimensão 1" value={data.p3_dim1} onChange={(v) => set('p3_dim1', v)}/>
          <Field label="Dimensão 2" value={data.p3_dim2} onChange={(v) => set('p3_dim2', v)}/>
          <Field label="Dimensão 3" value={data.p3_dim3} onChange={(v) => set('p3_dim3', v)}/>
          <Field label="Dimensão 4" value={data.p3_dim4} onChange={(v) => set('p3_dim4', v)}/>
          <Field label="Especificação 1 título" value={data.p3_f1_title} onChange={(v) => set('p3_f1_title', v)}/>
          <Field label="Especificação 1 texto" value={data.p3_f1_text} onChange={(v) => set('p3_f1_text', v)} multi/>
          <Field label="Especificação 2 título" value={data.p3_f2_title} onChange={(v) => set('p3_f2_title', v)}/>
          <Field label="Especificação 2 texto" value={data.p3_f2_text} onChange={(v) => set('p3_f2_text', v)} multi/>
          <Field label="Especificação 3 título" value={data.p3_f3_title} onChange={(v) => set('p3_f3_title', v)}/>
          <Field label="Especificação 3 texto" value={data.p3_f3_text} onChange={(v) => set('p3_f3_text', v)} multi/>
          <Field label="Especificação 4 título" value={data.p3_f4_title} onChange={(v) => set('p3_f4_title', v)}/>
          <Field label="Especificação 4 texto" value={data.p3_f4_text} onChange={(v) => set('p3_f4_text', v)} multi/>
          <Field label="Capacidade (pílula)" value={data.p3_title_pill} onChange={(v) => set('p3_title_pill', v)}/>
          <Hint>Clique direto sobre qualquer texto dentro das fotos para editar.</Hint>
        </>)}
      </div>
    </div>
  );
}

function Field({ label, value, onChange, multi, maxLength }) {
  const Tag = multi ? 'textarea' : 'input';
  return (
    <label style={{display:'block', marginBottom:12}}>
      <div style={{fontSize:11, fontWeight:600, color:'#666', marginBottom:4}}>{label}</div>
      <Tag value={value || ''} onChange={(e) => onChange(e.target.value)} maxLength={maxLength} rows={multi ? 2 : undefined}
        style={{width:'100%', padding:'8px 10px', border:'1px solid #ddd', borderRadius:6, fontSize:13, fontFamily:'inherit', resize: multi ? 'vertical' : 'none'}}/>
    </label>
  );
}

function ImgField({ label, value, onChange, saved }) {
  const inputRef = useRef(null);
  const [busy, setBusy] = useState(null);
  const [section, setSection] = React.useState('local');

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const r = new FileReader();
    r.onload = (ev) => onChange(ev.target.result);
    r.readAsDataURL(file);
  };
  const apply = async (fn, key) => {
    if (!value) return;
    setBusy(key);
    try {
      const out = await fn(value);
      onChange(out);
    } catch (err) {
      alert('Erro: ' + err.message);
    }
    setBusy(null);
  };

  return (
    <div style={{marginBottom:14}}>
      <div style={{fontSize:11, fontWeight:600, color:'#666', marginBottom:4, display:'flex', alignItems:'center', gap:6}}>{label}{saved && <span style={{fontSize:10, fontWeight:700, color:'#166534', background:'#dcfce7', padding:'1px 6px', borderRadius:4}}>💾 salvo</span>}</div>
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <div style={{width:48, height:48, borderRadius:6, background:'#f0f0f0',
          backgroundImage: value ? `url(${value})` : 'none',
          backgroundSize:'cover', backgroundPosition:'center', flexShrink:0, border:'1px solid #ddd'}}/>
        <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} style={{display:'none'}}/>
        <button onClick={() => inputRef.current.click()} style={{flex:1, padding:'8px 10px', border:'1px solid #ddd', borderRadius:6, background:'white', fontSize:12, fontWeight:600, cursor:'pointer'}}>Trocar imagem</button>
        {value && <button onClick={() => onChange('')} style={{padding:'8px 10px', border:'1px solid #ddd', borderRadius:6, background:'white', fontSize:12, cursor:'pointer', color:'#999'}}>×</button>}
      </div>

      {value && (<>
        <div style={{display:'flex', gap:3, marginTop:8, background:'#f5f5f5', padding:3, borderRadius:7}}>
          <button onClick={() => setSection('local')} style={{flex:1, padding:'5px 4px', border:0, borderRadius:5, fontSize:11, fontWeight:600, cursor:'pointer', background: section==='local' ? 'white' : 'transparent', color: section==='local' ? '#1a1a1a' : '#888', boxShadow: section==='local' ? '0 1px 2px rgba(0,0,0,.08)' : 'none'}}>Local</button>
          <button onClick={() => setSection('openai')} style={{flex:1, padding:'5px 4px', border:0, borderRadius:5, fontSize:11, fontWeight:600, cursor:'pointer', background: section==='openai' ? '#10a37f' : 'transparent', color: section==='openai' ? 'white' : '#888', boxShadow: section==='openai' ? '0 1px 2px rgba(0,0,0,.12)' : 'none'}}>✦ OpenAI</button>
        </div>

        {section === 'local' && (
          <div style={{display:'flex', gap:4, marginTop:6, flexWrap:'wrap'}}>
            <ImgBtn busy={busy==='chroma'} onClick={() => apply(window.MLImgUtils.removeBgChroma,'chroma')}>Remover fundo (claro)</ImgBtn>
            <ImgBtn busy={busy==='smart'} onClick={() => apply(window.MLImgUtils.removeBgSmart,'smart')}>Remover fundo (IA local)</ImgBtn>
            <ImgBtn busy={busy==='adj'} onClick={() => apply(window.MLImgUtils.autoAdjust,'adj')}>Auto-ajuste</ImgBtn>
            <ImgBtn busy={busy==='lvl'} onClick={() => apply(window.MLImgUtils.autoLevels,'lvl')}>Auto-níveis</ImgBtn>
          </div>
        )}

        {section === 'openai' && (
          <div style={{display:'flex', flexDirection:'column', gap:5, marginTop:6}}>
            <OpenAIImgBtn busy={busy==='vision-bg'} icon="🔍" title="Remover fundo (Vision)" desc="GPT-4o detecta cor do fundo e remove com precisão" onClick={() => apply(window.MLImgUtils.removeBgVision,'vision-bg')}/>
            <OpenAIImgBtn busy={busy==='improve'} icon="✨" title="Melhorar qualidade" desc="gpt-image-1 corrige iluminação, nitidez e cores" onClick={() => apply(window.MLImgUtils.improveQuality,'improve')}/>
            <OpenAIImgBtn busy={busy==='variation'} icon="🎨" title="Gerar variação" desc="gpt-image-1 recria com fundo branco de estúdio" onClick={() => apply(window.MLImgUtils.generateVariation,'variation')}/>
          </div>
        )}
      </>)}
    </div>
  );
}

function ImgBtn({ children, onClick, busy }) {
  return (
    <button onClick={onClick} disabled={!!busy}
      style={{padding:'5px 9px', border:'1px solid #FFE9A8', borderRadius:5, background: busy ? '#FFE9A8' : '#FFF8E1', fontSize:11, fontWeight:600, cursor: busy ? 'wait' : 'pointer', color:'#7A5A00'}}>
      {busy ? '...' : children}
    </button>
  );
}

function OpenAIImgBtn({ icon, title, desc, onClick, busy }) {
  return (
    <button onClick={onClick} disabled={!!busy} style={{display:'flex', alignItems:'center', gap:10, padding:'8px 11px', border:'1px solid #d0f0e8', borderRadius:8, background: busy ? '#e6f9f4' : '#f0fdf9', cursor: busy ? 'wait' : 'pointer', textAlign:'left', width:'100%', opacity: busy ? 0.75 : 1}}>
      <span style={{fontSize:16, flexShrink:0}}>{busy ? '⏳' : icon}</span>
      <div>
        <div style={{fontSize:12, fontWeight:700, color:'#065f46'}}>{busy ? 'Processando...' : title}</div>
        <div style={{fontSize:10, color:'#6b7280', marginTop:1}}>{desc}</div>
      </div>
    </button>
  );
}

function SliderField({ label, value, min, max, onChange }) {
  return (
    <label style={{display:'block', marginBottom:12}}>
      <div style={{fontSize:11, fontWeight:600, color:'#666', marginBottom:4}}>{label}</div>
      <input type="range" min={min} max={max} value={value} onChange={(e) => onChange(Number(e.target.value))} style={{width:'100%'}}/>
    </label>
  );
}

const BG_KEYS = ['bg_foto1','bg_foto2','bg_foto3','bg_foto4','bg_foto5','bg_foto6'];
const LS_BG_PREFIX = 'gerarml_bg_';

function BgSavedBanner({ data, set }) {
  const savedCount = BG_KEYS.filter(k => localStorage.getItem(LS_BG_PREFIX + k)).length;
  const [cleared, setCleared] = React.useState(false);

  if (savedCount === 0) {
    return (
      <div style={{fontSize:11, color:'#9ca3af', padding:'8px 10px', background:'#f9f9f9', borderRadius:6, marginBottom:10, border:'1px solid #eee'}}>
        Nenhum fundo salvo ainda. Ao trocar uma imagem de fundo ela é salva automaticamente.
      </div>
    );
  }

  const handleClear = () => {
    if (!confirm(`Limpar os ${savedCount} fundo(s) salvos? As fotos voltarão para os assets padrão.`)) return;
    clearAllSavedBgs();
    const patch = {};
    BG_KEYS.forEach((k, i) => { patch[k] = `assets/bg-foto${i+1}.png`; });
    BG_KEYS.forEach((k, i) => set(k, `assets/bg-foto${i+1}.png`));
    setCleared(true);
    setTimeout(() => setCleared(false), 2000);
  };

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'8px 12px', background:'#f0fdf4', border:'1px solid #bbf7d0', borderRadius:8, marginBottom:10}}>
      <div style={{display:'flex', alignItems:'center', gap:6}}>
        <span style={{fontSize:14}}>💾</span>
        <span style={{fontSize:11, fontWeight:600, color:'#166534'}}>
          {cleared ? '✓ Fundos limpos' : `${savedCount} fundo(s) salvo(s) — carregam automaticamente`}
        </span>
      </div>
      {!cleared && (
        <button onClick={handleClear} style={{padding:'4px 10px', border:'1px solid #86efac', borderRadius:6, background:'white', fontSize:11, fontWeight:600, cursor:'pointer', color:'#6b7280'}}>
          Limpar tudo
        </button>
      )}
    </div>
  );
}

function SectionLabel({ children }) {
  return <div style={{fontFamily:'Montserrat', fontWeight:800, fontSize:11, letterSpacing:'.08em', textTransform:'uppercase', color:'#999', margin:'18px 0 8px', paddingTop:12, borderTop:'1px solid #f0f0f0'}}>{children}</div>;
}
function Hint({ children }) {
  return <div style={{fontSize:11, color:'#888', lineHeight:1.4, marginTop:14, padding:'10px 12px', background:'#FFF8E1', borderRadius:6, border:'1px solid #FFE9A8'}}>{children}</div>;
}

function useTweakMode() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const h = (e) => {
      if (e.data?.type === '__activate_edit_mode') setActive(true);
      else if (e.data?.type === '__deactivate_edit_mode') setActive(false);
    };
    window.addEventListener('message', h);
    window.parent.postMessage({type: '__edit_mode_available'}, '*');
    return () => window.removeEventListener('message', h);
  }, []);
  return [active, setActive];
}

function loadSavedBgs() {
  const patch = {};
  for (const k of BG_KEYS) {
    const v = localStorage.getItem(LS_BG_PREFIX + k);
    if (v) patch[k] = v;
  }
  return patch;
}

function saveBg(k, v) {
  if (v && v.startsWith('data:')) {
    try { localStorage.setItem(LS_BG_PREFIX + k, v); } catch(e) {
      // localStorage cheio (data URLs são grandes) — avisa mas não quebra
      console.warn('localStorage cheio ao salvar fundo:', k, e);
    }
  } else {
    localStorage.removeItem(LS_BG_PREFIX + k);
  }
}

function clearAllSavedBgs() {
  for (const k of BG_KEYS) localStorage.removeItem(LS_BG_PREFIX + k);
}

function App() {
  const [data, setData] = useState(() => ({ ...INITIAL, ...loadSavedBgs() }));
  const [productName, setProductName] = useState(TWEAK_DEFAULTS.productName);
  const [storeName, setStoreName] = useState(TWEAK_DEFAULTS.storeName);
  const [tweaksOpen, setTweaksOpen] = useTweakMode();
  const [rawFiles, setRawFiles] = React.useState([]);
    const saved = localStorage.getItem('openai_api_key') || '';
    if (saved) window.OPENAI_API_KEY = saved;
    return saved;
  });

  const set = (k, v) => {
    setData(prev => ({...prev, [k]: v}));
    // Persiste automaticamente se for fundo
    if (BG_KEYS.includes(k)) saveBg(k, v);
  };
  const merge = (patch) => setData(prev => ({...prev, ...patch}));

  useEffect(() => {
    setData(prev => ({...prev, p5_store_name: storeName}));
  }, [storeName]);

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>Modelo de anúncios — Mercado Livre</h1>
          <p>6 fotos padrão · {productName} · {storeName} · clique no texto para editar · ↓ PNG salva 1200×1540</p>
        </div>
        <div className="header-actions">
          <button className="btn" onClick={() => setTweaksOpen(v => !v)}>{tweaksOpen ? 'Fechar Tweaks' : 'Abrir Tweaks'}</button>
          <button className="btn primary" onClick={async () => {
            const canvases = document.querySelectorAll('.canvas');
            for (let i = 0; i < canvases.length; i++) {
              await MLExport(canvases[i], `${productName.replace(/\s+/g,'-').toLowerCase()}-foto-${i+1}.png`);
              await new Promise(r => setTimeout(r, 300));
            }
          }}>↓ Baixar todas (6 PNG)</button>
        </div>
      </header>

      <OpenAIKeyBanner apiKey={apiKey} setApiKey={setApiKey}/>
      <UploadZone onGenerate={merge} productName={productName} setProductName={setProductName} onRawFiles={setRawFiles}/>

      <div className="grid">
        <Slot num={1} title="Capa com destaques" productName={productName} bg={data.bg_mode ? data.bg_foto1 : null}
          extra={<>
            <VariantPicker value={data.p1_variant||'A'} onChange={(v)=>set('p1_variant',v)}/>
            <div style={{marginTop:4, display:'flex', gap:8, alignItems:'center', flexWrap:'wrap'}}>
              <ZoomBar value={data.p1_zoom||1} onChange={(v)=>set('p1_zoom',v)}/>
              <AIGenBtn slotNum={1} rawImgs={rawFiles} onResult={merge}
                label="Gerar hero (estúdio)" title="Gera foto do produto em fundo branco de estúdio"
                promptKeys={[1]}/>
            </div>
          </>}>
          <MLPhoto1 data={data} set={set} bgMode={data.bg_mode}/>
        </Slot>

        <Slot num={2} title="Características principais" productName={productName} bg={data.bg_mode ? data.bg_foto2 : null}
          extra={<div style={{display:'flex', gap:8, alignItems:'center', flexWrap:'wrap'}}>
            <ZoomBar value={data.p2_zoom||1} onChange={(v)=>set('p2_zoom',v)}/>
            <AIGenBtn slotNum={2} rawImgs={rawFiles} onResult={merge}
              label="Gerar 2 closes" title="Gera 2 closes do produto para os círculos de detalhe"
              promptKeys={['2a','2b']}/>
          </div>}>
          <MLPhoto2 data={data} set={set} bgMode={data.bg_mode}/>
        </Slot>

        <Slot num={3} title="Dimensões / Especificações" productName={productName} bg={data.bg_mode ? data.bg_foto3 : null}
          extra={<div style={{display:'flex', gap:8, alignItems:'center', flexWrap:'wrap'}}>
            <ZoomBar value={data.p3_zoom||1} onChange={(v)=>set('p3_zoom',v)}/>
            <AIGenBtn slotNum={3} rawImgs={rawFiles} onResult={merge}
              label="Gerar hero + 2 closes" title="Gera foto hero + 2 closes para essa foto"
              promptKeys={[3,'2a','2b']}/>
          </div>}>
          <MLPhoto3 data={data} set={set} bgMode={data.bg_mode}/>
        </Slot>

        <Slot num={4} title="Solução ideal" productName={productName} bg={data.bg_mode ? data.bg_foto4 : null}
          extra={<div style={{display:'flex', gap:8, alignItems:'center', flexWrap:'wrap'}}>
            <ZoomBar value={data.p4_zoom||1} onChange={(v)=>set('p4_zoom',v)}/>
            <AIGenBtn slotNum={4} rawImgs={rawFiles} onResult={merge}
              label="Gerar lifestyle" title="Gera foto do produto em uso para lifestyle"
              promptKeys={[4]}/>
          </div>}>
          <MLPhoto4 data={data} set={set} bgMode={data.bg_mode}/>
        </Slot>

        <Slot num={5} title="Garantia + Avaliação" productName={productName} bg={data.bg_mode ? data.bg_foto5 : null}
          extra={<div style={{display:'flex', gap:8, alignItems:'center', flexWrap:'wrap'}}>
            <ZoomBar value={data.p5_zoom||1} onChange={(v)=>set('p5_zoom',v)}/>
            <span style={{fontSize:11, color:'#6b7280'}}>Usa a foto da Foto 1 como miniatura</span>
          </div>}>
          <MLPhoto5 data={data} set={set} bgMode={data.bg_mode}/>
        </Slot>

        <Slot num={6} title="Garantia + MercadoLíder Gold" productName={productName} bg={data.bg_mode ? data.bg_foto6 : null}
          extra={<div style={{display:'flex', gap:8, alignItems:'center', flexWrap:'wrap'}}>
            <ZoomBar value={data.p6_zoom||1} onChange={(v)=>set('p6_zoom',v)}/>
            <span style={{fontSize:11, color:'#6b7280'}}>Usa a foto da Foto 1 como miniatura</span>
          </div>}>
          <MLPhoto6 data={data} set={set} bgMode={data.bg_mode}/>
        </Slot>
      </div>

      {tweaksOpen && (
        <TweaksUI data={data} set={set}
          productName={productName} setProductName={setProductName}
          storeName={storeName} setStoreName={setStoreName}
          onClose={() => { setTweaksOpen(false); window.parent.postMessage({type: '__edit_mode_dismissed'}, '*'); }}/>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
