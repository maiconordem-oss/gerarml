/* global React, ReactDOM, MLPhoto1, MLPhoto2, MLPhoto3, MLPhoto4, MLPhoto5, MLPhoto6, MLExport */
const { useState, useRef, useEffect, useMemo } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "storeName": "Mega Distribuidor",
  "productName": "NIVELADOR DE MOTOR"
}/*EDITMODE-END*/;

const INITIAL = {
  mainImg: 'assets/produto-capa.jpg',
  productOnlyImg: '',

  p1_circles: [{ img: '' }, { img: '' }, { img: '' }],

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
  // uploadedDataUrls: array de data URLs do produto
  const out = {};
  if (!uploadedDataUrls.length) return out;

  // Foto principal: a primeira
  out.mainImg = uploadedDataUrls[0];

  // Lifestyle (Foto 5/6): se houver 3+ fotos, usa a 3ª; senão tenta a 2ª; senão deixa vazio
  if (uploadedDataUrls.length >= 3) {
    out.p5_lifestyle = uploadedDataUrls[2];
    out.p6_lifestyle = uploadedDataUrls[2];
  } else if (uploadedDataUrls.length >= 2) {
    out.p5_lifestyle = uploadedDataUrls[1];
    out.p6_lifestyle = uploadedDataUrls[1];
  }

  // 3 crops circulares para a Foto 1: zooms da imagem principal
  const crops = await makeCircleCrops(uploadedDataUrls[0]);
  out.p1_circles = crops.map(img => ({ img }));

  return out;
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
function Slot({ num, title, children, productName, bg }) {
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

/* ============== AI Text generation ============== */
async function generateTextsWithAI(productName, category, extras) {
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

  try {
    const text = await window.claude.complete(prompt);
    // Extract JSON from response
    const m = text.match(/\{[\s\S]*\}/);
    if (!m) throw new Error('Resposta sem JSON');
    return JSON.parse(m[0]);
  } catch (e) {
    console.error('AI generation failed:', e);
    throw e;
  }
}

/* ============== Upload zone ============== */
function UploadZone({ onGenerate, onApplyAI, productName, setProductName }) {
  const [files, setFiles] = useState([]);
  const [category, setCategory] = useState('Ferramentas');
  const [extras, setExtras] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiStatus, setAiStatus] = useState('');
  const inputRef = useRef(null);

  const handleFiles = (list) => {
    const arr = Array.from(list).slice(0, 5);
    Promise.all(arr.map(f => new Promise((res) => {
      const r = new FileReader();
      r.onload = (e) => res(e.target.result);
      r.readAsDataURL(f);
    }))).then(urls => setFiles(prev => [...prev, ...urls].slice(0, 5)));
  };

  const handleAutoGenerateAll = async () => {
    setAiStatus('Processando imagens...');
    const imgPatch = files.length > 0 ? await autoGenerate(files) : {};

    if (productName && productName.trim()) {
      setAiLoading(true);
      setAiStatus('🤖 IA gerando títulos e textos...');
      try {
        const aiPatch = await generateTextsWithAI(productName, category, extras);
        onGenerate({ ...imgPatch, ...aiPatch });
        setAiStatus('✅ Pronto! Textos e imagens aplicados.');
      } catch (e) {
        onGenerate(imgPatch);
        setAiStatus('⚠️ Imagens aplicadas, mas IA falhou: ' + e.message);
      } finally {
        setAiLoading(false);
        setTimeout(() => setAiStatus(''), 4000);
      }
    } else if (Object.keys(imgPatch).length > 0) {
      onGenerate(imgPatch);
      setAiStatus('✅ Imagens aplicadas (sem IA — preencha o nome do produto para gerar textos).');
      setTimeout(() => setAiStatus(''), 4000);
    }
  };

  return (
    <div className="uploader">
      <h2>🚀 Auto-gerar com IA</h2>
      <p>Preencha o nome do produto e envie 2-3 fotos. A IA escreve todos os títulos e textos automaticamente, e os crops circulares da capa são gerados das suas fotos.</p>

      <div style={{display:'grid', gridTemplateColumns:'2fr 1fr', gap:12, marginBottom:14}}>
        <Field label="Nome do produto *" value={productName} onChange={setProductName}/>
        <Field label="Categoria" value={category} onChange={setCategory}/>
      </div>
      <Field label="Detalhes técnicos opcionais (peso suportado, dimensões, material...)" value={extras} onChange={setExtras} multi/>

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
          {files.length === 0 ? 'Clique ou arraste fotos aqui (até 5) — opcional' : `${files.length} foto(s) carregada(s)`}
        </div>
        <input ref={inputRef} type="file" accept="image/*" multiple style={{display:'none'}} onChange={(e) => handleFiles(e.target.files)}/>
      </div>

      {files.length > 0 && (
        <div className="drop-grid">
          {files.map((url, i) => (
            <div key={i} className="drop-thumb" style={{backgroundImage: `url(${url})`}}>
              <button className="drop-thumb-rm" onClick={(e) => { e.stopPropagation(); setFiles(prev => prev.filter((_, j) => j !== i)); }}>×</button>
              <div style={{position:'absolute', bottom:4, left:4, background:'rgba(0,0,0,.7)', color:'white', fontSize:10, padding:'2px 6px', borderRadius:4, fontWeight:600}}>
                {i === 0 ? 'principal' : i === 2 ? 'lifestyle' : `extra ${i}`}
              </div>
            </div>
          ))}
        </div>
      )}

      {aiStatus && (
        <div style={{marginTop:14, padding:'10px 14px', background: aiLoading ? '#FFF8E1' : '#E8F3EC', border:`1px solid ${aiLoading ? '#FFE9A8' : '#A0E548'}`, borderRadius:8, fontSize:13, fontWeight:500, color: aiLoading ? '#8B6F00' : '#1F7A3A'}}>
          {aiStatus}
        </div>
      )}

      <div style={{display:'flex', gap:10, marginTop:18, justifyContent:'flex-end', flexWrap:'wrap'}}>
        <button className="btn" disabled={files.length === 0} onClick={() => setFiles([])}>Limpar fotos</button>
        <button className="btn" disabled={aiLoading || !productName?.trim()} onClick={async () => {
          setAiLoading(true);
          setAiStatus('🤖 IA gerando títulos e textos...');
          try {
            const aiPatch = await generateTextsWithAI(productName, category, extras);
            onGenerate(aiPatch);
            setAiStatus('✅ Textos atualizados!');
          } catch (e) {
            setAiStatus('❌ IA falhou: ' + e.message);
          } finally {
            setAiLoading(false);
            setTimeout(() => setAiStatus(''), 4000);
          }
        }}>🤖 Só textos (IA)</button>
        <button className="btn primary" disabled={aiLoading || (files.length === 0 && !productName?.trim())} onClick={handleAutoGenerateAll}>
          {aiLoading ? 'Gerando...' : '✨ Gerar tudo (IA + fotos)'}
        </button>
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
          <ImgField label="Foto 1 — Detalhe centro" value={data.p1_circles[1].img} onChange={(v) => { const cs=[...data.p1_circles]; cs[1]={img:v}; set('p1_circles', cs); }}/>
          <ImgField label="Foto 1 — Detalhe direito" value={data.p1_circles[2].img} onChange={(v) => { const cs=[...data.p1_circles]; cs[2]={img:v}; set('p1_circles', cs); }}/>
          <ImgField label="Foto 5 — Lifestyle / Estoque" value={data.p5_lifestyle} onChange={(v) => set('p5_lifestyle', v)}/>
          <ImgField label="Foto 6 — Lifestyle / Estoque" value={data.p6_lifestyle} onChange={(v) => set('p6_lifestyle', v)}/>
          <SectionLabel>Tamanho da miniatura do produto</SectionLabel>
          <SliderField label={`Foto 5: ${data.p5_mini_size}px`} value={data.p5_mini_size} min={140} max={420} onChange={(v) => set('p5_mini_size', v)}/>
          <SliderField label={`Foto 6: ${data.p6_mini_size}px`} value={data.p6_mini_size} min={140} max={420} onChange={(v) => set('p6_mini_size', v)}/>
          <SectionLabel>Imagens de fundo (modo fundo)</SectionLabel>
          <ImgField label="Fundo Foto 1" value={data.bg_foto1} onChange={(v) => set('bg_foto1', v)}/>
          <ImgField label="Fundo Foto 2" value={data.bg_foto2} onChange={(v) => set('bg_foto2', v)}/>
          <ImgField label="Fundo Foto 3" value={data.bg_foto3} onChange={(v) => set('bg_foto3', v)}/>
          <ImgField label="Fundo Foto 4" value={data.bg_foto4} onChange={(v) => set('bg_foto4', v)}/>
          <ImgField label="Fundo Foto 5" value={data.bg_foto5} onChange={(v) => set('bg_foto5', v)}/>
          <ImgField label="Fundo Foto 6" value={data.bg_foto6} onChange={(v) => set('bg_foto6', v)}/>
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

function ImgField({ label, value, onChange }) {
  const inputRef = useRef(null);
  const [busy, setBusy] = useState(null);
  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const r = new FileReader();
    r.onload = (ev) => onChange(ev.target.result);
    r.readAsDataURL(file);
  };
  const apply = async (fn, label) => {
    if (!value) return;
    setBusy(label);
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
      <div style={{fontSize:11, fontWeight:600, color:'#666', marginBottom:4}}>{label}</div>
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <div style={{width:48, height:48, borderRadius:6, background:'#f0f0f0',
          backgroundImage: value ? `url(${value})` : 'none',
          backgroundSize:'cover', backgroundPosition:'center', flexShrink:0, border:'1px solid #ddd'}}/>
        <input ref={inputRef} type="file" accept="image/*" onChange={handleFile} style={{display:'none'}}/>
        <button onClick={() => inputRef.current.click()} style={{flex:1, padding:'8px 10px', border:'1px solid #ddd', borderRadius:6, background:'white', fontSize:12, fontWeight:600, cursor:'pointer'}}>Trocar imagem</button>
        {value && <button onClick={() => onChange('')} style={{padding:'8px 10px', border:'1px solid #ddd', borderRadius:6, background:'white', fontSize:12, cursor:'pointer', color:'#999'}}>×</button>}
      </div>
      {value && (
        <div style={{display:'flex', gap:4, marginTop:6, flexWrap:'wrap'}}>
          <ImgBtn busy={busy==='chroma'} onClick={() => apply(window.MLImgUtils.removeBgChroma, 'chroma')}>Remover fundo (claro)</ImgBtn>
          <ImgBtn busy={busy==='smart'} onClick={() => apply(window.MLImgUtils.removeBgSmart, 'smart')}>Remover fundo (IA)</ImgBtn>
          <ImgBtn busy={busy==='adj'} onClick={() => apply(window.MLImgUtils.autoAdjust, 'adj')}>Auto-ajuste</ImgBtn>
          <ImgBtn busy={busy==='lvl'} onClick={() => apply(window.MLImgUtils.autoLevels, 'lvl')}>Auto-níveis</ImgBtn>
        </div>
      )}
    </div>
  );
}

function ImgBtn({ children, onClick, busy }) {
  return (
    <button onClick={onClick} disabled={busy}
      style={{padding:'5px 9px', border:'1px solid #FFE9A8', borderRadius:5, background: busy ? '#FFE9A8' : '#FFF8E1', fontSize:11, fontWeight:600, cursor: busy ? 'wait' : 'pointer', color:'#7A5A00'}}>
      {busy ? '...' : children}
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

function App() {
  const [data, setData] = useState(INITIAL);
  const [productName, setProductName] = useState(TWEAK_DEFAULTS.productName);
  const [storeName, setStoreName] = useState(TWEAK_DEFAULTS.storeName);
  const [tweaksOpen, setTweaksOpen] = useTweakMode();

  const set = (k, v) => setData(prev => ({...prev, [k]: v}));
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

      <UploadZone onGenerate={merge} productName={productName} setProductName={setProductName}/>

      <div className="grid">
        <Slot num={1} title="Capa com destaques" productName={productName} bg={data.bg_mode ? data.bg_foto1 : null}><MLPhoto1 data={data} set={set} bgMode={data.bg_mode}/></Slot>
        <Slot num={2} title="Características principais" productName={productName} bg={data.bg_mode ? data.bg_foto2 : null}><MLPhoto2 data={data} set={set} bgMode={data.bg_mode}/></Slot>
        <Slot num={3} title="Dimensões / Especificações" productName={productName} bg={data.bg_mode ? data.bg_foto3 : null}><MLPhoto3 data={data} set={set} bgMode={data.bg_mode}/></Slot>
        <Slot num={4} title="Solução ideal" productName={productName} bg={data.bg_mode ? data.bg_foto4 : null}><MLPhoto4 data={data} set={set} bgMode={data.bg_mode}/></Slot>
        <Slot num={5} title="Garantia + Avaliação" productName={productName} bg={data.bg_mode ? data.bg_foto5 : null}><MLPhoto5 data={data} set={set} bgMode={data.bg_mode}/></Slot>
        <Slot num={6} title="Garantia + MercadoLíder Gold" productName={productName} bg={data.bg_mode ? data.bg_foto6 : null}><MLPhoto6 data={data} set={set} bgMode={data.bg_mode}/></Slot>
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
