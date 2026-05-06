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
  p4_ic1: 'tools',
  p4_b2_title: 'Alta Qualidade:',
  p4_b2_text: 'Feito em aço tratado e com pintura anticorrosiva.',
  p4_ic2: 'shield',
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
  const src = uploadedDataUrls[0];
  const src2 = uploadedDataUrls[1] || src;

  // mainImg = fallback global (mantido para compatibilidade)
  out.mainImg = src;

  // Cada slot começa com a mesma imagem — mas são independentes
  // Só seta se ainda não tiver imagem própria (não sobrescreve customizações)
  out.p1_img = src;
  out.p2_img = src;
  out.p3_img = src;
  out.p4_img = src;
  out.p5_img = src;
  out.p6_img = src;

  // Lifestyle usa 2ª foto se disponível
  out.p5_lifestyle = src2;
  out.p6_lifestyle = src2;

  // Crops automáticos para os círculos da capa
  const crops = await makeCircleCrops(src);
  out.p1_circles = crops.map(img => ({ img }));
  out.p1_corner4 = src2;

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
  form.append('model', 'gpt-image-1-mini');
  form.append('image', blob, 'product.png');
  form.append('prompt', prompt);
  form.append('n', '1');
  form.append('size', '1024x1024');
  form.append('quality', 'medium');

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
  return `data:image/png;base64,${json.data[0].b64_json}`;
}

// ---------------------------------------------------------------------------
// Prompts por slot — editáveis e salvos no localStorage
// ---------------------------------------------------------------------------
const LS_PROMPTS_KEY = 'gerarml_prompts';

const DEFAULT_PROMPTS = {
  // Foto 1 — hero estúdio fundo branco
  1: `Professional e-commerce studio photography. Pure white background, soft even lighting, subtle ground shadow. Product perfectly centered, full product visible, ultra high resolution. No text, no watermark, no props.`,

  // Foto 2 — produto + 2 miniaturas de close geradas num único shot
  2: `Professional product photography on white background. Show the main product centered and large. In the bottom-left and bottom-right corners, include two small circular inset close-up details of important product parts (labeled "Detail 1" and "Detail 2"), each with an orange border. Clean studio lighting, no text captions, no watermark.`,

  // Foto 3 — mesma foto da foto 1 (hero) — reutiliza sem chamada de API
  // (não tem prompt, foto 3 copia mainImg da foto 1)

  // Foto 4 — lifestyle produto em uso
  4: `Lifestyle product photography. The product is shown in real-world use in a natural, professional environment relevant to its purpose. Warm natural lighting, shallow depth of field, person interacting with the product. Photorealistic, high quality. No text, no watermark.`,
};

function loadPrompts() {
  try {
    const saved = localStorage.getItem(LS_PROMPTS_KEY);
    if (saved) return { ...DEFAULT_PROMPTS, ...JSON.parse(saved) };
  } catch (_) {}
  return { ...DEFAULT_PROMPTS };
}

function savePrompts(p) {
  try { localStorage.setItem(LS_PROMPTS_KEY, JSON.stringify(p)); } catch (_) {}
}

let _activePrompts = loadPrompts();
function getPrompt(key) { return _activePrompts[key] || DEFAULT_PROMPTS[key] || ''; }
function setPromptAndSave(key, value) {
  _activePrompts = { ..._activePrompts, [key]: value };
  savePrompts(_activePrompts);
}

// ---------------------------------------------------------------------------
// Geração de imagem por slot
// Foto 1 → hero estúdio → mainImg  (~$0.04)
// Foto 2 → produto + 2 closes num único prompt → mainImg  (~$0.04)
// Foto 3 → copia mainImg da foto 1, sem API  (grátis)
// Foto 4 → lifestyle → p5_lifestyle + p6_lifestyle  (~$0.04)
// Fotos 5/6 → miniatura da foto 1 = mainImg  (grátis)
// ---------------------------------------------------------------------------
async function generatePhotoWithAI(slotNum, sourceImgs) {
  const src = sourceImgs[0];
  if (!src) throw new Error('Suba pelo menos 1 foto do produto primeiro.');

  // Foto 1 — hero estúdio, fundo branco
  if (slotNum === 1) {
    const img = await callGptImage1(src, getPrompt(1));
    return { p1_img: img };
  }

  // Foto 2 — produto + 2 miniaturas de close num único prompt
  if (slotNum === 2) {
    const img = await callGptImage1(src, getPrompt(2));
    return { p2_img: img };
  }

  // Foto 3 — reutiliza imagem da foto 1, zero custo de API
  if (slotNum === 3) {
    return {}; // p3_img já está correto, não precisa de nada
  }

  // Foto 4 — lifestyle
  if (slotNum === 4) {
    const img = await callGptImage1(src, getPrompt(4));
    return { p5_lifestyle: img, p6_lifestyle: img };
  }

  // Fotos 5/6 — sem API
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

/* ============== Slot wrapper ============== */
function Slot({ num, title, children, productName, bg, extra, toolbar }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const [scale, setScale] = useState(0.4);

  useEffect(() => {
    const update = () => {
      if (!wrapRef.current) return;
      setScale(wrapRef.current.clientWidth / 1200);
    };
    update();
    const ro = new ResizeObserver(update);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  const handleExport = async () => {
    if (!canvasRef.current) return;
    const filename = `${(productName||'produto').replace(/\s+/g,'-').toLowerCase()}-foto-${num}.png`;
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
      {toolbar && <div data-export-hide="true" style={{marginBottom:2}}>{toolbar}</div>}
      {extra && <div style={{marginBottom:6}}>{extra}</div>}
      <div className="canvas-wrap" ref={wrapRef} style={{ position: 'relative' }}>
        <div ref={canvasRef} className="canvas" style={{ transform: `scale(${scale})`, position: 'relative' }}>
          {bg && <img src={bg} alt="" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', zIndex:0, pointerEvents:'none' }}/>}
          <div style={{position:'relative', zIndex:1, width:'100%', height:'100%'}}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============== AI Text generation — Claude (Anthropic) ============== */
async function generateTextsWithAI(productName, category, extras) {
  // Usa API da Anthropic direto — sem necessidade de chave OpenAI do usuário
  const key = ''; // chave injetada pelo proxy do servidor

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

  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1200,
      messages: [{ role: 'user', content: prompt }],
    }),
  });
  if (!resp.ok) {
    const err = await resp.json().catch(() => ({}));
    throw new Error(err.error?.message || 'Erro na geração de textos (Claude). Tente novamente.');
  }
  const data = await resp.json();
  const text = (data.content || []).map(b => b.text || '').join('');
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
    1: 'Estúdio (foto 1)',
    2: 'Produto + 2 closes (foto 2)',
    4: 'Lifestyle (foto 4)',
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

/* ============== Clipboard de imagem entre slots ============== */
// clipboard global — objeto simples, não precisa de estado React
window._imgClipboard = null;

function ClipboardBar({ onCopy, onPaste, hasImg }) {
  const [flash, setFlash] = React.useState(''); // 'copied' | 'pasted' | ''

  const copy = () => {
    onCopy();
    setFlash('copied');
    setTimeout(() => setFlash(''), 1800);
  };
  const paste = () => {
    if (!window._imgClipboard) return;
    onPaste(window._imgClipboard);
    setFlash('pasted');
    setTimeout(() => setFlash(''), 1800);
  };

  return (
    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      <button
        onClick={copy}
        disabled={!hasImg}
        title="Copiar imagem deste slot"
        style={{ padding: '4px 10px', border: '1px solid #e5e7eb', borderRadius: 6,
          background: flash === 'copied' ? '#dcfce7' : 'white',
          fontSize: 11, fontWeight: 600, cursor: hasImg ? 'pointer' : 'not-allowed',
          color: hasImg ? '#374151' : '#d1d5db', whiteSpace: 'nowrap' }}>
        {flash === 'copied' ? '✓ Copiado' : '⎘ Copiar'}
      </button>
      <button
        onClick={paste}
        disabled={!window._imgClipboard}
        title="Colar imagem copiada neste slot"
        style={{ padding: '4px 10px', border: '1px solid #e5e7eb', borderRadius: 6,
          background: flash === 'pasted' ? '#dbeafe' : 'white',
          fontSize: 11, fontWeight: 600, cursor: window._imgClipboard ? 'pointer' : 'not-allowed',
          color: window._imgClipboard ? '#374151' : '#d1d5db', whiteSpace: 'nowrap' }}>
        {flash === 'pasted' ? '✓ Colado' : '⎘ Colar'}
      </button>
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
        onClick={() => onChange(Math.max(0.1, +(value - step).toFixed(2)))}
        style={{ width: 28, height: 28, border: 0, borderRadius: 6, background: 'white', fontSize: 16, fontWeight: 700, cursor: 'pointer', display: 'grid', placeItems: 'center', color: '#444', boxShadow: '0 1px 2px rgba(0,0,0,.08)' }}>−</button>
      <input
        type="range" min="10" max="400" step="5" value={pct}
        onChange={e => onChange(+(+e.target.value / 100).toFixed(2))}
        style={{ width: 80, accentColor: '#1F7A3A' }}
      />
      <button
        onClick={() => onChange(Math.min(4, +(value + step).toFixed(2)))}
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
            <div style={{fontSize:11, color:'#6b7280'}}>sk-...{apiKey.slice(-6)} · melhorias de imagem via OpenAI ativas (opcional)</div>
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
          <ImgField label="Imagem principal (fallback)" value={data.mainImg} onChange={(v) => set('mainImg', v)}/>
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

// ---------------------------------------------------------------------------
// SUPABASE CONFIG
// ---------------------------------------------------------------------------
const SUPA_URL  = 'https://fmrdphxdfenisolrhrcl.supabase.co';
const SUPA_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtcmRwaHhkZmVuaXNvbHJocmNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4NzQ0MzMsImV4cCI6MjA5MzQ1MDQzM30.aG-uOA72k8L1wtHZIFHQLH22e4chRGPvyR9K4-EJK0k';
const SUPA_HDRS = { 'Content-Type': 'application/json', apikey: SUPA_KEY, Authorization: `Bearer ${SUPA_KEY}` };

async function supaFetch(method, path, body) {
  const r = await fetch(`${SUPA_URL}/rest/v1${path}`, {
    method,
    headers: { ...SUPA_HDRS, Prefer: method === 'POST' ? 'return=representation' : '' },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!r.ok) { const e = await r.json().catch(() => ({})); throw new Error(e.message || r.status); }
  return r.status === 204 ? null : r.json();
}

// Serializa data — remove imagens grandes (>50KB base64) para não estourar
function serializeData(data) {
  const out = {};
  for (const [k, v] of Object.entries(data)) {
    if (typeof v === 'string' && v.startsWith('data:image') && v.length > 70000) {
      out[k] = '__img_omitted__';
    } else if (Array.isArray(v)) {
      out[k] = v.map(item =>
        item && typeof item === 'object' && item.img && item.img.length > 70000
          ? { ...item, img: '__img_omitted__' }
          : item
      );
    } else {
      out[k] = v;
    }
  }
  return out;
}

function deserializeData(data) {
  const out = {};
  for (const [k, v] of Object.entries(data)) {
    if (v === '__img_omitted__') { out[k] = ''; }
    else if (Array.isArray(v)) {
      out[k] = v.map(item =>
        item && typeof item === 'object' && item.img === '__img_omitted__'
          ? { ...item, img: '' }
          : item
      );
    } else { out[k] = v; }
  }
  return out;
}

// ---------------------------------------------------------------------------
// SISTEMA DE ANÚNCIOS — Supabase com fallback localStorage
// ---------------------------------------------------------------------------
const LS_ADS_KEY     = 'gerarml_ads';
const LS_CURRENT_KEY = 'gerarml_current_ad';

async function fetchAds() {
  try {
    const rows = await supaFetch('GET', '/anuncios?order=updated_at.desc&limit=100&select=id,name,product_name,updated_at');
    return rows || [];
  } catch (_) {
    // fallback localStorage
    try { return JSON.parse(localStorage.getItem(LS_ADS_KEY) || '[]'); } catch(_){ return []; }
  }
}

async function fetchAdData(id) {
  try {
    const rows = await supaFetch('GET', `/anuncios?id=eq.${id}&select=*`);
    return rows?.[0] || null;
  } catch (_) { return null; }
}

async function upsertAd(name, data, productName, storeName, existingId) {
  const payload = {
    name,
    product_name: productName || '',
    store_name:   storeName || '',
    data:         serializeData(data),
    updated_at:   new Date().toISOString(),
  };
  try {
    if (existingId) {
      await supaFetch('PATCH', `/anuncios?id=eq.${existingId}`, payload);
      return existingId;
    } else {
      const rows = await supaFetch('POST', '/anuncios', payload);
      return rows?.[0]?.id || null;
    }
  } catch (e) {
    // Fallback localStorage
    const ads = JSON.parse(localStorage.getItem(LS_ADS_KEY) || '[]').filter(a => a.name !== name);
    ads.unshift({ name, product_name: productName, data: serializeData(data), updated_at: new Date().toISOString(), id: Date.now() });
    localStorage.setItem(LS_ADS_KEY, JSON.stringify(ads.slice(0, 30)));
    return ads[0].id;
  }
}

async function deleteAdById(id) {
  try { await supaFetch('DELETE', `/anuncios?id=eq.${id}`); } catch (_) {}
}

function AdManager({ data, productName, storeName, onLoad, setProductName, setStoreName }) {
  const [ads, setAds]         = React.useState([]);
  const [open, setOpen]       = React.useState(false);
  const [saveName, setSaveName] = React.useState(() => localStorage.getItem(LS_CURRENT_KEY) || '');
  const [currentId, setCurrentId] = React.useState(null);
  const [status, setStatus]   = React.useState('idle'); // idle | saving | saved | loading | error
  const [online, setOnline]   = React.useState(true);

  // Carrega lista ao abrir
  const loadList = async () => {
    const rows = await fetchAds();
    setAds(rows);
    // Detecta se está online (tem id numérico real)
    setOnline(rows.length === 0 || typeof rows[0].id === 'string');
  };

  React.useEffect(() => { loadList(); }, []);

  const handleSave = async () => {
    if (!saveName.trim()) { alert('Digite um nome para o anúncio'); return; }
    setStatus('saving');
    try {
      const id = await upsertAd(saveName.trim(), data, productName, storeName, currentId);
      setCurrentId(id);
      localStorage.setItem(LS_CURRENT_KEY, saveName.trim());
      setStatus('saved');
      await loadList();
      setTimeout(() => setStatus('idle'), 2500);
    } catch (e) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleLoad = async (ad) => {
    setStatus('loading');
    setOpen(false);
    try {
      const full = await fetchAdData(ad.id);
      if (full?.data) {
        const restored = deserializeData(full.data);
        onLoad(restored);
        setProductName(full.product_name || '');
        setStoreName(full.store_name || '');
        setSaveName(full.name);
        setCurrentId(full.id);
        localStorage.setItem(LS_CURRENT_KEY, full.name);
      }
    } catch (_) {}
    setStatus('idle');
  };

  const handleDelete = async (ad, e) => {
    e.stopPropagation();
    if (!confirm(`Apagar "${ad.name}"?`)) return;
    await deleteAdById(ad.id);
    setAds(prev => prev.filter(a => a.id !== ad.id));
    if (currentId === ad.id) { setCurrentId(null); setSaveName(''); }
  };

  const btnLabel = { idle: '💾 Salvar', saving: 'Salvando...', saved: '✓ Salvo!', loading: 'Carregando...', error: '✗ Erro' };
  const btnColor = { idle: '#1F7A3A', saving: '#4b9e6a', saved: '#166534', loading: '#4b9e6a', error: '#dc2626' };

  return (
    <div style={{ maxWidth: 920, margin: '0 auto 12px', display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
      {/* Nome + salvar */}
      <div style={{ display: 'flex', gap: 6, flex: 1, minWidth: 220 }}>
        <input value={saveName} onChange={e => setSaveName(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSave()}
          placeholder="Nome do anúncio..."
          style={{ flex: 1, padding: '7px 12px', border: '1px solid #d1d5db', borderRadius: 8, fontSize: 13, fontFamily: 'inherit', outline: 'none' }}
        />
        <button onClick={handleSave} disabled={status === 'saving' || status === 'loading'}
          style={{ padding: '7px 16px', background: btnColor[status], color: 'white', border: 0, borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'background .2s' }}>
          {btnLabel[status]}
        </button>
      </div>

      {/* Lista de anúncios */}
      <div style={{ position: 'relative' }}>
        <button onClick={() => { loadList(); setOpen(v => !v); }}
          style={{ padding: '7px 14px', border: '1px solid #d1d5db', borderRadius: 8, background: 'white', fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
          📂 Anúncios
          {ads.length > 0 && <span style={{ background: '#1F7A3A', color: 'white', borderRadius: 10, padding: '1px 7px', fontSize: 11 }}>{ads.length}</span>}
        </button>

        {open && (
          <div style={{ position: 'absolute', top: '110%', right: 0, background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, boxShadow: '0 8px 28px rgba(0,0,0,.14)', zIndex: 200, minWidth: 300, maxHeight: 400, overflowY: 'auto' }}>
            <div style={{ padding: '10px 14px 6px', borderBottom: '1px solid #f3f4f6', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#374151' }}>Anúncios salvos</span>
              <span style={{ fontSize: 10, color: online ? '#10b981' : '#f59e0b', marginLeft: 'auto' }}>{online ? '☁ servidor' : '💾 local'}</span>
            </div>
            {ads.length === 0
              ? <div style={{ padding: 20, color: '#9ca3af', fontSize: 13, textAlign: 'center' }}>Nenhum anúncio ainda</div>
              : ads.map(ad => (
                <div key={ad.id} onClick={() => handleLoad(ad)}
                  style={{ padding: '10px 14px', borderBottom: '1px solid #f3f4f6', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, background: currentId === ad.id ? '#f0fdf4' : 'white', transition: 'background .1s' }}
                  onMouseEnter={e => { if(currentId !== ad.id) e.currentTarget.style.background='#f9fafb'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = currentId===ad.id?'#f0fdf4':'white'; }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#111', display: 'flex', alignItems: 'center', gap: 6 }}>
                      {ad.name}
                      {currentId === ad.id && <span style={{ fontSize: 10, background: '#dcfce7', color: '#166534', padding: '1px 6px', borderRadius: 4 }}>atual</span>}
                    </div>
                    <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 2 }}>
                      {ad.product_name && <span>{ad.product_name} · </span>}
                      {new Date(ad.updated_at).toLocaleDateString('pt-BR', { day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit' })}
                    </div>
                  </div>
                  <button onClick={e => handleDelete(ad, e)}
                    style={{ padding: '3px 8px', border: '1px solid #fca5a5', borderRadius: 5, background: 'white', color: '#ef4444', fontSize: 11, cursor: 'pointer', flexShrink: 0 }}>
                    Apagar
                  </button>
                </div>
              ))
            }
          </div>
        )}
      </div>

      {open && <div style={{ position: 'fixed', inset: 0, zIndex: 199 }} onClick={() => setOpen(false)}/>}
    </div>
  );
}



/* ============== SlotToolbar — barra fixa acima de cada foto ============== */
function SlotToolbar({ imgKey, slotKey, zoomKey, data, set, openCrop, rotateImg, textMode, setTextMode }) {
  const imgSrc = data && (data[imgKey] || data.mainImg);
  const hasImg = !!imgSrc;
  const adj = (data && data[slotKey+'_adj']) || { brightness:100, contrast:100, saturation:100 };
  const zoom = (data && data[zoomKey]) || 1;

  const [tab, setTab]         = React.useState('img');   // 'img' | 'adj' | 'txt'
  const [busy, setBusy]       = React.useState(null);
  const [rotating, setRot]    = React.useState(false);
  const fileRef = React.useRef(null);

  // ── helpers ──
  const apply = async (fn, key) => {
    if (!imgSrc || busy) return;
    setBusy(key);
    try { set(imgKey, await fn(imgSrc)); }
    catch(e) { alert('Erro: ' + e.message); }
    setBusy(null);
  };

  const doRotate = async (deg) => {
    if (!hasImg || rotating) return;
    setRot(true);
    try { await rotateImg(imgKey, deg); } catch(_) {}
    setRot(false);
  };

  const handleFile = (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = ev => set(imgKey, ev.target.result);
    r.readAsDataURL(f);
  };

  const updAdj = (k, v) => set(slotKey+'_adj', { ...adj, [k]: v });
  const hasOpenAI = !!(window.OPENAI_API_KEY || localStorage.getItem('openai_api_key'));
  const adjChanged = adj.brightness!==100 || adj.contrast!==100 || adj.saturation!==100;

  // ── estilos ──
  const BAR = {
    width: '100%', background: '#1c1c1e',
    borderRadius: '8px 8px 0 0',
    userSelect: 'none',
  };

  const TAB = (active) => ({
    padding: '5px 12px', border: 'none', borderRadius: 6,
    background: active ? 'rgba(255,255,255,.15)' : 'transparent',
    color: active ? '#fff' : 'rgba(255,255,255,.45)',
    fontSize: 11, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap',
    transition: 'background .12s, color .12s',
  });

  const BTN = (highlight) => ({
    display: 'inline-flex', alignItems: 'center', gap: 4,
    padding: '5px 10px', border: 'none', borderRadius: 6,
    background: highlight ? '#FFC42B' : 'rgba(255,255,255,.1)',
    color: highlight ? '#000' : '#fff',
    fontSize: 11, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap',
    transition: 'background .12s',
  });

  const SLIDER_ROW = ({ label, k, min, max }) => (
    <div style={{ display:'flex', alignItems:'center', gap:8, flex:1, minWidth:140 }}>
      <span style={{ fontSize:10, color:'rgba(255,255,255,.5)', minWidth:60 }}>{label}</span>
      <input type="range" min={min} max={max} step={1} value={adj[k]}
        onChange={e => updAdj(k, +e.target.value)}
        style={{ flex:1, accentColor:'#FFC42B', minWidth:80 }}/>
      <span style={{ fontSize:10, fontFamily:'monospace', color: adj[k]!==100 ? '#FFC42B' : 'rgba(255,255,255,.3)', minWidth:32 }}>
        {adj[k]}%
      </span>
    </div>
  );

  return (
    <div style={BAR}>
      {/* ── Linha de abas ── */}
      <div style={{ display:'flex', alignItems:'center', gap:4, padding:'5px 8px', borderBottom:'1px solid rgba(255,255,255,.08)' }}>
        {/* Modo texto — trava o PanZoom para deixar clicar nos textos */}
        <button
          onClick={() => setTextMode && setTextMode(v => !v)}
          style={{
            padding: '5px 10px', border: 'none', borderRadius: 6,
            background: textMode ? '#3b82f6' : 'rgba(255,255,255,.1)',
            color: textMode ? '#fff' : 'rgba(255,255,255,.6)',
            fontSize: 11, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap',
            transition: 'background .12s',
          }}
          title={textMode ? 'Modo texto ativo — clique para mover imagem' : 'Ativar modo texto — trava imagem para editar textos'}
        >
          {textMode ? '🔒 Texto' : '🔓 Imagem'}
        </button>
        <div style={{ width:1, height:16, background:'rgba(255,255,255,.15)' }}/>
        <button style={TAB(tab==='img')} onClick={() => setTab('img')}>📷 Imagem</button>
        <button style={TAB(tab==='adj')} onClick={() => setTab('adj')}>
          ◑ Ajustes{adjChanged ? ' •' : ''}
        </button>
        <button style={TAB(tab==='txt')} onClick={() => setTab('txt')}>T Texto</button>

        {/* Zoom sempre visível à direita */}
        <div style={{ marginLeft:'auto', display:'flex', alignItems:'center', gap:6 }}>
          <span style={{ fontSize:10, color:'rgba(255,255,255,.4)' }}>Zoom</span>
          <button onClick={() => set(zoomKey, Math.max(0.1, zoom - 0.1))}
            style={{ width:22, height:22, border:'none', borderRadius:4, background:'rgba(255,255,255,.1)', color:'#fff', fontSize:13, fontWeight:900, cursor:'pointer', lineHeight:1 }}>−</button>
          <span style={{ fontSize:11, fontFamily:'monospace', color:'#fff', minWidth:36, textAlign:'center' }}>
            {Math.round(zoom*100)}%
          </span>
          <button onClick={() => set(zoomKey, Math.min(4, zoom + 0.1))}
            style={{ width:22, height:22, border:'none', borderRadius:4, background:'rgba(255,255,255,.1)', color:'#fff', fontSize:13, fontWeight:900, cursor:'pointer', lineHeight:1 }}>+</button>
        </div>
      </div>

      {/* ── Conteúdo da aba ── */}
      <div style={{ padding:'7px 8px', display:'flex', gap:5, flexWrap:'wrap', alignItems:'center', minHeight:38 }}>

        {/* ABA IMAGEM */}
        {tab === 'img' && <>
          <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} style={{display:'none'}}/>
          <button onClick={() => fileRef.current.click()} style={BTN(false)}>📷 Trocar</button>
          <button onClick={() => doRotate(270)} disabled={!hasImg||rotating} style={BTN(false)}>↺</button>
          <button onClick={() => doRotate(90)}  disabled={!hasImg||rotating} style={BTN(false)}>↻</button>
          <button onClick={() => hasImg && openCrop(imgKey)} disabled={!hasImg} style={BTN(false)}>✂ Crop</button>
          <div style={{ width:1, height:18, background:'rgba(255,255,255,.15)', margin:'0 2px' }}/>
          <button onClick={() => apply(window.MLImgUtils.removeBgChroma, 'chroma')} disabled={!hasImg||!!busy} style={BTN(busy==='chroma')}>
            {busy==='chroma' ? '⏳' : '✕'} Fundo
          </button>
          <button onClick={() => apply(window.MLImgUtils.removeBgSmart, 'smart')} disabled={!hasImg||!!busy} style={BTN(busy==='smart')}>
            {busy==='smart' ? '⏳' : '✦'} Fundo IA
          </button>
          <button onClick={() => apply(window.MLImgUtils.autoAdjust, 'auto')} disabled={!hasImg||!!busy} style={BTN(busy==='auto')}>
            {busy==='auto' ? '⏳' : '⚡'} Auto
          </button>
          {hasOpenAI && <>
            <div style={{ width:1, height:18, background:'rgba(255,255,255,.15)', margin:'0 2px' }}/>
            <button onClick={() => apply(window.MLImgUtils.improveQuality, 'improve')} disabled={!hasImg||!!busy} style={BTN(busy==='improve')}>
              {busy==='improve' ? '⏳' : '✨'} Melhorar
            </button>
            <button onClick={() => apply(window.MLImgUtils.generateVariation, 'var')} disabled={!hasImg||!!busy} style={BTN(busy==='var')}>
              {busy==='var' ? '⏳' : '🎨'} Variação
            </button>
          </>}
          <div style={{ width:1, height:18, background:'rgba(255,255,255,.15)', margin:'0 2px' }}/>
          <button onClick={() => { if(imgSrc) window._imgClipboard = imgSrc; }} disabled={!hasImg} style={BTN(false)}>⎘ Copiar</button>
          <button onClick={() => { if(window._imgClipboard) set(imgKey, window._imgClipboard); }} disabled={!window._imgClipboard} style={BTN(false)}>⎘ Colar</button>
        </>}

        {/* ABA AJUSTES */}
        {tab === 'adj' && <>
          <SLIDER_ROW label="☀ Brilho"     k="brightness" min={50} max={180}/>
          <SLIDER_ROW label="◑ Contraste"  k="contrast"   min={50} max={180}/>
          <SLIDER_ROW label="◈ Saturação"  k="saturation" min={0}  max={200}/>
          {adjChanged && (
            <button onClick={() => set(slotKey+'_adj', {brightness:100,contrast:100,saturation:100})}
              style={{ ...BTN(false), marginLeft:4, borderColor:'#fca5a5', color:'#fca5a5' }}>
              ↺ Reset
            </button>
          )}
        </>}

        {/* ABA TEXTO */}
        {tab === 'txt' && <>
          {['bold','italic','underline','strikeThrough'].map((cmd, i) => (
            <button key={cmd}
              onMouseDown={e => { e.preventDefault(); if(window.__mlFmtActive) { window.__mlFmtActive.el.focus(); document.execCommand(cmd); window.__mlFmtActive.onSave(window.__mlFmtActive.el.innerHTML); } }}
              style={BTN(false)}
              title={['Negrito','Itálico','Sublinhado','Riscado'][i]}>
              {[<b>B</b>, <i>I</i>, <u>U</u>, <s>S</s>][i]}
            </button>
          ))}
          <div style={{ width:1, height:18, background:'rgba(255,255,255,.15)', margin:'0 2px' }}/>
          <span style={{ fontSize:10, color:'rgba(255,255,255,.4)' }}>Tam.</span>
          <button
            onMouseDown={e => { e.preventDefault(); const a=window.__mlFmtActive; if(!a) return; const sz=Math.max(8,(parseFloat(a.el.style.fontSize)||parseFloat(window.getComputedStyle(a.el).fontSize)||32)-8); a.el.style.fontSize=sz+'px'; a.onSave(a.el.innerHTML); }}
            style={BTN(false)}>A−</button>
          <button
            onMouseDown={e => { e.preventDefault(); const a=window.__mlFmtActive; if(!a) return; const sz=Math.min(300,(parseFloat(a.el.style.fontSize)||parseFloat(window.getComputedStyle(a.el).fontSize)||32)+8); a.el.style.fontSize=sz+'px'; a.onSave(a.el.innerHTML); }}
            style={BTN(false)}>A+</button>
          <div style={{ width:1, height:18, background:'rgba(255,255,255,.15)', margin:'0 2px' }}/>
          <span style={{ fontSize:10, color:'rgba(255,255,255,.4)' }}>Cor</span>
          <label onMouseDown={e => e.preventDefault()} style={{ position:'relative', cursor:'pointer' }}>
            <div style={{ width:28, height:24, borderRadius:5, border:'1px solid rgba(255,255,255,.3)', background: window.__mlFmtActive ? (window.__mlFmtActive.el.style.color||'#ffffff') : '#ffffff', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <span style={{ fontSize:11, fontWeight:800, color:'#000', textShadow:'0 0 3px #fff' }}>A</span>
            </div>
            <input type="color" defaultValue="#ffffff"
              onMouseDown={e => e.stopPropagation()}
              onChange={e => { const a=window.__mlFmtActive; if(!a) return; a.el.focus(); document.execCommand('foreColor',false,e.target.value); a.onSave(a.el.innerHTML); }}
              style={{ position:'absolute', opacity:0, inset:0, cursor:'pointer', width:'100%', height:'100%' }}/>
          </label>
          <div style={{ width:1, height:18, background:'rgba(255,255,255,.15)', margin:'0 2px' }}/>
          <button
            onMouseDown={e => { e.preventDefault(); const a=window.__mlFmtActive; if(!a) return; a.el.focus(); document.execCommand('removeFormat'); a.onSave(a.el.innerHTML); }}
            style={BTN(false)}>✕ fmt</button>
          <span style={{ fontSize:10, color:'rgba(255,255,255,.3)', marginLeft:'auto' }}>
            {window.__mlFmtActive ? window.__mlFmtActive.el.innerText.length + 'ch' : '— clique num texto'}
          </span>
        </>}

      </div>
    </div>
  );
}

/* ============== Barra de Rotação e Crop ============== */
function RotateCropBar({ imgKey, data, set, openCrop, rotateImg }) {
  const [rotating, setRotating] = React.useState(false);
  const hasImg = !!(data && data[imgKey]);

  const doRotate = async (deg) => {
    if (!hasImg || rotating) return;
    setRotating(true);
    try { await rotateImg(imgKey, deg); } catch(_) {}
    setRotating(false);
  };

  const btnStyle = (disabled) => ({
    padding: '4px 8px', border: '1px solid #e5e7eb', borderRadius: 6,
    background: 'white', fontSize: 11, fontWeight: 700,
    cursor: disabled ? 'not-allowed' : 'pointer',
    color: disabled ? '#d1d5db' : '#555', display: 'flex', alignItems: 'center', gap: 3,
  });

  return (
    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      <button
        onClick={() => doRotate(270)}
        disabled={!hasImg || rotating}
        style={btnStyle(!hasImg || rotating)}
        title="Girar 90° anti-horário"
      >↺</button>
      <button
        onClick={() => doRotate(90)}
        disabled={!hasImg || rotating}
        style={btnStyle(!hasImg || rotating)}
        title="Girar 90° horário"
      >↻</button>
      <button
        onClick={() => hasImg && openCrop(imgKey)}
        disabled={!hasImg}
        style={btnStyle(!hasImg)}
        title="Recortar imagem"
      >✂ Crop</button>
    </div>
  );
}

function App() {
  const [data, setData] = useState(() => ({ ...INITIAL, ...loadSavedBgs() }));
  const [productName, setProductName] = useState(TWEAK_DEFAULTS.productName);
  const [storeName, setStoreName] = useState(TWEAK_DEFAULTS.storeName);
  const [tweaksOpen, setTweaksOpen] = useTweakMode();
  const [rawFiles, setRawFiles] = React.useState([]);
  const [cropState, setCropState] = React.useState(null); // { key, src }
  const [textMode, setTextMode] = React.useState(false); // bloqueia PanZoom ao editar texto
  const [previewOpen, setPreviewOpen] = React.useState(false);

  // ── Undo / Redo ──────────────────────────────────────────
  const undoStack = useRef([]);
  const redoStack = useRef([]);
  const skipHistory = useRef(false); // evita loop ao restaurar

  const pushHistory = (prevData) => {
    undoStack.current.push(prevData);
    if (undoStack.current.length > 40) undoStack.current.shift();
    redoStack.current = []; // limpa redo ao fazer nova ação
  };

  const undo = () => {
    if (!undoStack.current.length) return;
    const prev = undoStack.current.pop();
    redoStack.current.push(data);
    skipHistory.current = true;
    setData(prev);
    skipHistory.current = false;
  };

  const redo = () => {
    if (!redoStack.current.length) return;
    const next = redoStack.current.pop();
    undoStack.current.push(data);
    skipHistory.current = true;
    setData(next);
    skipHistory.current = false;
  };

  // Atalho teclado Ctrl+Z / Ctrl+Y / Ctrl+Shift+Z
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) { e.preventDefault(); undo(); }
      if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) { e.preventDefault(); redo(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [data]);
  const [apiKey, setApiKey] = React.useState(() => {
    const saved = localStorage.getItem('openai_api_key') || '';
    if (saved) window.OPENAI_API_KEY = saved;
    return saved;
  });

  const set = (k, v) => {
    setData(prev => {
      if (!skipHistory.current) pushHistory(prev);
      const next = {...prev, [k]: v};
      if (BG_KEYS.includes(k)) saveBg(k, v);
      return next;
    });
  };

  // Abrir crop para mainImg ou outra chave de imagem
  const openCrop = (imgKey) => {
    const src = data[imgKey];
    if (!src) return;
    setCropState({ key: imgKey, src });
  };

  const handleCropConfirm = (croppedDataUrl) => {
    if (cropState) set(cropState.key, croppedDataUrl);
    setCropState(null);
  };

  // Rotação via canvas
  const rotateImg = async (imgKey, degrees) => {
    const src = data[imgKey];
    if (!src || !window.MLRotateImage) return;
    const rotated = await window.MLRotateImage(src, degrees);
    set(imgKey, rotated);
  };
  const merge = (patch) => {
    setData(prev => {
      if (!skipHistory.current) pushHistory(prev);
      return {...prev, ...patch};
    });
  };

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
          <window.MLBrandColorPicker />
          <div style={{display:'flex', gap:4}}>
            <button className="btn" onClick={undo} disabled={!undoStack.current.length} title="Desfazer (Ctrl+Z)" style={{padding:'10px 12px', opacity: undoStack.current.length ? 1 : 0.4}}>↺</button>
            <button className="btn" onClick={redo} disabled={!redoStack.current.length} title="Refazer (Ctrl+Y)" style={{padding:'10px 12px', opacity: redoStack.current.length ? 1 : 0.4}}>↻</button>
          </div>
          <button className="btn" onClick={() => setPreviewOpen(true)} title="Preview como aparece no ML">👁 Preview ML</button>
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
      <AdManager data={data} productName={productName} storeName={storeName}
        onLoad={merge} set={set} setProductName={setProductName} setStoreName={setStoreName}/>
      <UploadZone onGenerate={merge} productName={productName} setProductName={setProductName} onRawFiles={setRawFiles}/>

      <div className="grid">
        <Slot num={1} title="Capa com destaques" productName={productName} bg={data.bg_mode ? data.bg_foto1 : null}
          extra={<>
            <VariantPicker value={data.p1_variant||'A'} onChange={(v)=>set('p1_variant',v)}/>
            <div style={{marginTop:4, display:'flex', gap:8, alignItems:'center', flexWrap:'wrap'}}>
              
              <AIGenBtn slotNum={1} rawImgs={rawFiles} onResult={merge}
                label="✦ Gerar estúdio" title="Gera foto com fundo branco de estúdio"
                promptKeys={[1]}/>
            </div>
          </>}
          toolbar={<SlotToolbar imgKey="p1_img" slotKey="p1" zoomKey="p1_zoom" data={data} set={set} openCrop={openCrop} rotateImg={rotateImg} textMode={textMode} setTextMode={setTextMode}/>}>
          <MLPhoto1 data={{...data, __textMode: textMode}} set={set} bgMode={data.bg_mode}/>
        </Slot>

        <Slot num={2} title="Características principais" productName={productName} bg={data.bg_mode ? data.bg_foto2 : null}
          extra={<div style={{display:'flex', gap:8, alignItems:'center', flexWrap:'wrap'}}>
            
            <AIGenBtn slotNum={2} rawImgs={rawFiles} onResult={merge}
              label="✦ Gerar produto + 2 closes" title="Produto com 2 miniaturas de close integradas"
              promptKeys={[2]}/>
          </div>}
          toolbar={<SlotToolbar imgKey="p2_img" slotKey="p2" zoomKey="p2_zoom" data={data} set={set} openCrop={openCrop} rotateImg={rotateImg} textMode={textMode} setTextMode={setTextMode}/>}>
          <MLPhoto2 data={{...data, __textMode: textMode}} set={set} bgMode={data.bg_mode}/>
        </Slot>

        <Slot num={3} title="Dimensões / Especificações" productName={productName} bg={data.bg_mode ? data.bg_foto3 : null}
          extra={<div style={{display:'flex', gap:8, alignItems:'center', flexWrap:'wrap'}}>
            
            <span style={{fontSize:11,color:'#6b7280',fontStyle:'italic'}}>Usa foto 1 por padrão</span>
          </div>}
          toolbar={<SlotToolbar imgKey="p3_img" slotKey="p3" zoomKey="p3_zoom" data={data} set={set} openCrop={openCrop} rotateImg={rotateImg} textMode={textMode} setTextMode={setTextMode}/>}>
          <MLPhoto3 data={{...data, __textMode: textMode}} set={set} bgMode={data.bg_mode}/>
        </Slot>

        <Slot num={4} title="Solução ideal" productName={productName} bg={data.bg_mode ? data.bg_foto4 : null}
          extra={<div style={{display:'flex', gap:8, alignItems:'center', flexWrap:'wrap'}}>
            
            <AIGenBtn slotNum={4} rawImgs={rawFiles} onResult={merge}
              label="✦ Gerar lifestyle" title="Produto em uso no ambiente real"
              promptKeys={[4]}/>
          </div>}
          toolbar={<SlotToolbar imgKey="p4_img" slotKey="p4" zoomKey="p4_zoom" data={data} set={set} openCrop={openCrop} rotateImg={rotateImg} textMode={textMode} setTextMode={setTextMode}/>}>
          <MLPhoto4 data={{...data, __textMode: textMode}} set={set} bgMode={data.bg_mode}/>
        </Slot>

        <Slot num={5} title="Garantia + Avaliação" productName={productName} bg={data.bg_mode ? data.bg_foto5 : null}
          extra={<div style={{display:'flex', gap:8, alignItems:'center', flexWrap:'wrap'}}>
            
          </div>}
          toolbar={<SlotToolbar imgKey="p5_img" slotKey="p5" zoomKey="p5_zoom" data={data} set={set} openCrop={openCrop} rotateImg={rotateImg} textMode={textMode} setTextMode={setTextMode}/>}>
          <MLPhoto5 data={{...data, __textMode: textMode}} set={set} bgMode={data.bg_mode}/>
        </Slot>

        <Slot num={6} title="Garantia + MercadoLíder Gold" productName={productName} bg={data.bg_mode ? data.bg_foto6 : null}
          extra={<div style={{display:'flex', gap:8, alignItems:'center', flexWrap:'wrap'}}>
            
          </div>}
          toolbar={<SlotToolbar imgKey="p6_img" slotKey="p6" zoomKey="p6_zoom" data={data} set={set} openCrop={openCrop} rotateImg={rotateImg} textMode={textMode} setTextMode={setTextMode}/>}>
          <MLPhoto6 data={{...data, __textMode: textMode}} set={set} bgMode={data.bg_mode}/>
        </Slot>
      </div>

      {previewOpen && (
        <MLPreviewModal
          data={data}
          productName={productName}
          onClose={() => setPreviewOpen(false)}
        />
      )}

      {cropState && (
        <window.MLCropOverlay
          src={cropState.src}
          onConfirm={handleCropConfirm}
          onCancel={() => setCropState(null)}
        />
      )}

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
