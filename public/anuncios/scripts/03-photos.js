/* global React, MLIcons, MLEditable */
const Ic = window.MLIcons;
const Ed = window.MLEditable;
const Drag = window.MLDraggable;

/* ============== Photo 1: Capa com 3 destaques em círculos ============== */
function Photo1({ data, set, bgMode }) {
  const circles = data.p1_circles || [];
  return (
    <div className="tpl" style={{ padding: '90px 80px 80px', background: bgMode ? 'transparent' : '#fff', position:'relative' }}>
      <Drag id="p1_circles_row" data={data} set={set} enabled={bgMode} style={{ display: 'flex', justifyContent: 'space-between', gap: 30, alignItems: 'flex-start', marginBottom: -40 }}>
        {circles.map((c, i) =>
        <div key={i} style={{
          width: 290, height: 290,
          borderRadius: '50%',
          border: '7px solid #E89522',
          background: '#fff',
          overflow: 'hidden',
          display: 'grid', placeItems: 'center',
          transform: i === 1 ? 'translateY(-30px)' : 'none',
          boxShadow: '0 8px 22px rgba(0,0,0,.08)',
          flexShrink: 0
        }}>
            {c.img ?
          <img src={c.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> :
          <div className="img-placeholder" style={{ borderRadius: '50%', width: '100%', height: '100%', fontSize: 13 }}>detalhe {i + 1}</div>}
          </div>
        )}
      </Drag>
      <Drag id="p1_main" data={data} set={set} enabled={bgMode} style={{ flex: 1, display: 'grid', placeItems: 'center' }}>
        {data.mainImg ?
        <img src={data.mainImg} alt="" style={{ maxWidth: '95%', maxHeight: '100%', objectFit: 'contain' }} /> :
        <div className="img-placeholder" style={{ width: '80%', height: '80%' }}>foto principal do produto</div>}
      </Drag>
    </div>);

}

/* ============== Photo 2: Características principais ============== */
function Photo2({ data, set, bgMode }) {
  return (
    <div className="tpl" style={{ padding: '80px 80px 60px', background: bgMode ? 'transparent' : undefined }}>
      <div style={{ position: 'relative', flex: 1 }}>
        <Drag id="p2_f1" data={data} set={set} enabled={bgMode} style={{ position: 'absolute', top: 0, left: 0, maxWidth: 380, zIndex: 2 }}>
          <Feat icon={<Ic.gear />} title={data.p2_f1_title} text={data.p2_f1_text}
          onTitle={(v) => set('p2_f1_title', v)} onText={(v) => set('p2_f1_text', v)} />
        </Drag>
        <Drag id="p2_f2" data={data} set={set} enabled={bgMode} style={{ position: 'absolute', top: 0, right: 0, maxWidth: 380, zIndex: 2 }}>
          <Feat align="right" icon={<Ic.target />} title={data.p2_f2_title} text={data.p2_f2_text}
          onTitle={(v) => set('p2_f2_title', v)} onText={(v) => set('p2_f2_text', v)} />
        </Drag>
        <Drag id="p2_f3" data={data} set={set} enabled={bgMode} style={{ position: 'absolute', bottom: 80, left: 60, maxWidth: 380, zIndex: 2 }}>
          <Feat icon={<Ic.feather />} title={data.p2_f3_title} text={data.p2_f3_text}
          onTitle={(v) => set('p2_f3_title', v)} onText={(v) => set('p2_f3_text', v)} />
        </Drag>
        <Drag id="p2_f4" data={data} set={set} enabled={bgMode} style={{ position: 'absolute', bottom: 80, right: 60, maxWidth: 380, zIndex: 2 }}>
          <Feat align="right" icon={<Ic.shield />} title={data.p2_f4_title} text={data.p2_f4_text}
          onTitle={(v) => set('p2_f4_title', v)} onText={(v) => set('p2_f4_text', v)} />
        </Drag>
        <Drag id="p2_main" data={data} set={set} enabled={bgMode} style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
          {data.mainImg ?
          <img src={data.mainImg} alt="" style={{ maxWidth: '62%', maxHeight: '72%', objectFit: 'contain' }} /> :
          <div className="img-placeholder" style={{ width: '55%', height: '55%' }}>foto principal</div>}
        </Drag>
        {!bgMode && <><Arrow d="M 22,16 C 32,28 36,36 44,46" />
        <Arrow d="M 78,16 C 68,28 64,36 56,46" />
        <Arrow d="M 28,72 C 34,68 38,62 44,54" /></>}
      </div>
      <Drag id="p2_callout" data={data} set={set} enabled={bgMode} style={bgMode ? {} : undefined}>
      {bgMode ? (
        <div style={{ padding: '20px 30px', color: '#fff', textAlign: 'left', maxWidth: 900, marginRight: 'auto' }}>
          <Ed value={data.p2_callout_title} onChange={(v) => set('p2_callout_title', v)} style={{ fontFamily: 'Montserrat', fontSize: 40, fontWeight: 800, display: 'block', lineHeight: 1.1, color: '#fff', maxHeight: 88, overflow: 'hidden' }} />
          <Ed value={data.p2_callout_text} onChange={(v) => set('p2_callout_text', v)} style={{ fontSize: 28, opacity: .95, lineHeight: 1.3, color: '#fff', display: 'block', maxHeight: 73, overflow: 'hidden' }} />
        </div>
      ) : (
      <div className="callout">
        <div className="ic"><Ic.check style={{ width: 30, height: 30, strokeWidth: 3.5 }} /></div>
        <div className="txt">
          <Ed value={data.p2_callout_title} onChange={(v) => set('p2_callout_title', v)} style={{ fontFamily: 'Montserrat', fontSize: 30, fontWeight: 800, display: 'block', lineHeight: 1.1 }} />
          <Ed value={data.p2_callout_text} onChange={(v) => set('p2_callout_text', v)} style={{ fontSize: 21, opacity: .95, lineHeight: 1.3 }} />
        </div>
      </div>
      )}
      </Drag>
    </div>);

}

function Arrow({ d, color = "#1F7A3A" }) {
  const id = 'arr-' + Math.random().toString(36).slice(2, 8);
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }} viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <marker id={id} viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 Z" fill={color} />
        </marker>
      </defs>
      <path d={d} fill="none" stroke={color} strokeWidth="0.5" markerEnd={`url(#${id})`} vectorEffect="non-scaling-stroke" style={{ strokeWidth: 3 }} />
    </svg>);

}

function Feat({ icon, title, text, align = "left", onTitle, onText }) {
  return (
    <div style={{ maxWidth: 750, marginLeft: align === 'right' ? 'auto' : 0, display: 'flex', alignItems: 'flex-start', gap: 18, flexDirection: align === 'right' ? 'row-reverse' : 'row' }}>
      <div className="ic-square" style={{ width: 110, height: 110, borderRadius: 22, flexShrink: 0 }}>
        {React.cloneElement(icon, { style: { width: 62, height: 62, color: '#fff', stroke: '#fff' } })}
      </div>
      <div style={{ flex: 1, textAlign: align, minWidth: 0 }}>
        <Ed value={title} onChange={onTitle} style={{ fontFamily: 'Montserrat', fontSize: 32, fontWeight: 800, color: '#1F7A3A', lineHeight: 1, display: 'block', whiteSpace: 'nowrap' }} />
        <Ed value={text} onChange={onText} multi style={{ fontSize: 24, lineHeight: 1.25, color: '#1A1A1A', marginTop: 8, display: 'block' }} />
      </div>
    </div>);

}

/* ============== Photo 3: Dimensões / Specs ============== */
function Photo3({ data, set, bgMode }) {
  return (
    <div className="tpl" style={{ padding: '80px 90px 60px', width: "1200px", height: "1540px", background: bgMode ? 'transparent' : undefined }}>
      <h1 style={{ textAlign: 'center', fontSize: 64, lineHeight: 1.1 }}>
        <Ed value={data.p3_title_a} onChange={(v) => set('p3_title_a', v)} className="green" />
        {' '}
        <Ed value={data.p3_title_b} onChange={(v) => set('p3_title_b', v)} />
        <br />
        <Ed value={data.p3_title_c} onChange={(v) => set('p3_title_c', v)} />
        {' '}
        <span className="pill-yellow-inline"><Ed value={data.p3_title_pill} onChange={(v) => set('p3_title_pill', v)} /></span>
      </h1>

      <div style={{ position: 'relative', flex: 1, marginTop: 50 }}>
        <Drag id="p3_f1" data={data} set={set} enabled={bgMode} style={{ position: 'absolute', top: 20, left: 0, maxWidth: 380, zIndex: 2 }}>
          <Feat icon={<Ic.tools />} title={data.p3_f1_title} text={data.p3_f1_text}
          onTitle={(v) => set('p3_f1_title', v)} onText={(v) => set('p3_f1_text', v)} />
        </Drag>
        <Drag id="p3_f2" data={data} set={set} enabled={bgMode} style={{ position: 'absolute', top: 220, left: 0, maxWidth: 380, zIndex: 2 }}>
          <Feat icon={<Ic.target />} title={data.p3_f2_title} text={data.p3_f2_text}
          onTitle={(v) => set('p3_f2_title', v)} onText={(v) => set('p3_f2_text', v)} />
        </Drag>
        <Drag id="p3_f3" data={data} set={set} enabled={bgMode} style={{ position: 'absolute', top: 420, left: 0, maxWidth: 380, zIndex: 2 }}>
          <Feat icon={<Ic.gear />} title={data.p3_f3_title} text={data.p3_f3_text}
          onTitle={(v) => set('p3_f3_title', v)} onText={(v) => set('p3_f3_text', v)} />
        </Drag>
        <Drag id="p3_f4" data={data} set={set} enabled={bgMode} style={{ position: 'absolute', top: 620, left: 0, maxWidth: 380, zIndex: 2 }}>
          <Feat icon={<Ic.shield />} title={data.p3_f4_title} text={data.p3_f4_text}
          onTitle={(v) => set('p3_f4_title', v)} onText={(v) => set('p3_f4_text', v)} />
        </Drag>

        <Drag id="p3_main" data={data} set={set} enabled={bgMode} style={{ position: 'absolute', right: 0, top: 0, width: '58%', height: '100%' }}>
          {data.mainImg ?
          <img src={data.mainImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> :
          <div className="img-placeholder" style={{ width: '100%', height: '100%' }}>produto</div>}
          <DimLabel value={data.p3_dim1} onChange={(v) => set('p3_dim1', v)} style={{ top: '14%', right: 0 }} />
          <DimLabel value={data.p3_dim2} onChange={(v) => set('p3_dim2', v)} style={{ top: '40%', left: 0 }} />
          <DimLabel value={data.p3_dim3} onChange={(v) => set('p3_dim3', v)} style={{ top: '66%', right: 0 }} />
          <DimLabel value={data.p3_dim4} onChange={(v) => set('p3_dim4', v)} style={{ bottom: '6%', left: '50%', transform: 'translateX(-50%)' }} />
        </Drag>

        {!bgMode && <><Arrow d="M 30,16 C 40,18 44,20 50,24" />
        <Arrow d="M 30,52 C 40,52 50,52 58,52" /></>}
      </div>

      <Drag id="p3_callout" data={data} set={set} enabled={bgMode}>
      {bgMode ? (
        <div style={{ padding: '20px 30px', color: '#fff', textAlign: 'left', maxWidth: 900, marginRight: 'auto' }}>
          <Ed value={data.p3_callout_title} onChange={(v) => set('p3_callout_title', v)} style={{ fontFamily: 'Montserrat', fontSize: 40, fontWeight: 800, display: 'block', lineHeight: 1.1, color: '#fff', maxHeight: 88, overflow: 'hidden' }} />
          <Ed value={data.p3_callout_text} onChange={(v) => set('p3_callout_text', v)} style={{ fontSize: 28, opacity: .95, lineHeight: 1.3, color: '#fff', display: 'block', maxHeight: 73, overflow: 'hidden' }} />
        </div>
      ) : (
      <div className="callout">
        <div className="ic"><Ic.alert style={{ width: 28, height: 28 }} /></div>
        <div className="txt">
          <Ed value={data.p3_callout_title} onChange={(v) => set('p3_callout_title', v)} style={{ fontFamily: 'Montserrat', fontSize: 30, fontWeight: 800, display: 'block', lineHeight: 1.1 }} />
          <Ed value={data.p3_callout_text} onChange={(v) => set('p3_callout_text', v)} style={{ fontSize: 21, opacity: .95, lineHeight: 1.3 }} />
        </div>
      </div>
      )}
      </Drag>
    </div>);

}

function DimLabel({ value, onChange, style }) {
  return (
    <div style={{
      position: 'absolute',
      background: '#fff',
      border: '3px solid #1A1A1A',
      borderRadius: 10,
      padding: '6px 18px',
      fontFamily: 'Montserrat', fontWeight: 800, fontSize: 24,
      whiteSpace: 'nowrap',
      ...style
    }}>
      <Ed value={value} onChange={onChange} />
    </div>);

}

/* ============== Photo 4: Solução ideal ============== */
function Photo4({ data, set, bgMode }) {
  return (
    <div className="tpl" style={{ padding: '80px 90px 60px', background: bgMode ? 'transparent' : undefined }}>
      <h1 style={{ textAlign: 'center', fontSize: 64, lineHeight: 1.1 }}>
        <Ed value={data.p4_title_a} onChange={(v) => set('p4_title_a', v)} />
        {' '}
        <Ed value={data.p4_title_b} onChange={(v) => set('p4_title_b', v)} className="green" />
        {' '}
        <Ed value={data.p4_title_c} onChange={(v) => set('p4_title_c', v)} />
        <br />
        <span className="pill-yellow-inline"><Ed value={data.p4_title_pill} onChange={(v) => set('p4_title_pill', v)} /></span>
      </h1>

      <Drag id="p4_main" data={data} set={set} enabled={bgMode} style={{ flex: 1, display: 'grid', placeItems: 'center', margin: '20px 0' }}>
        {data.mainImg ?
        <img src={data.mainImg} alt="" style={{ maxWidth: '82%', maxHeight: '72%', objectFit: 'contain' }} /> :
        <div className="img-placeholder" style={{ width: '70%', height: '60%' }}>produto</div>}
      </Drag>

      <Drag id="p4_benefits" data={data} set={set} enabled={bgMode} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 30 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
          <div className="ic-square" style={{ width: 110, height: 110, borderRadius: 22, flexShrink: 0 }}>
            {React.cloneElement(<Ic.tools />, { style: { width: 62, height: 62, color: '#fff', stroke: '#fff' } })}
          </div>
          <div style={{ minWidth: 0, flex: 1 }}>
            <Ed value={data.p4_b1_title} onChange={(v) => set('p4_b1_title', v)} style={{ fontFamily: 'Montserrat', fontSize: 32, fontWeight: 800, color: '#1F7A3A', display: 'block', lineHeight: 1, whiteSpace: 'nowrap' }} />
            <Ed value={data.p4_b1_text} onChange={(v) => set('p4_b1_text', v)} multi style={{ fontSize: 24, lineHeight: 1.25, color: '#1A1A1A', display: 'block', marginTop: 8 }} />
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, flexDirection: 'row-reverse' }}>
          <div className="ic-square" style={{ width: 110, height: 110, borderRadius: 22, flexShrink: 0 }}>
            {React.cloneElement(<Ic.shield />, { style: { width: 62, height: 62, color: '#fff', stroke: '#fff' } })}
          </div>
          <div style={{ minWidth: 0, flex: 1, textAlign: 'right' }}>
            <Ed value={data.p4_b2_title} onChange={(v) => set('p4_b2_title', v)} style={{ fontFamily: 'Montserrat', fontSize: 32, fontWeight: 800, color: '#1F7A3A', display: 'block', lineHeight: 1, whiteSpace: 'nowrap' }} />
            <Ed value={data.p4_b2_text} onChange={(v) => set('p4_b2_text', v)} multi style={{ fontSize: 24, lineHeight: 1.25, color: '#1A1A1A', display: 'block', marginTop: 8 }} />
          </div>
        </div>
      </Drag>

      <Drag id="p4_callout" data={data} set={set} enabled={bgMode}>
      {bgMode ? (
        <div style={{ padding: '20px 30px', color: '#fff', textAlign: 'left', maxWidth: 900, marginRight: 'auto' }}>
          <Ed value={data.p4_callout_title} onChange={(v) => set('p4_callout_title', v)} style={{ fontFamily: 'Montserrat', fontSize: 40, fontWeight: 800, display: 'block', lineHeight: 1.1, color: '#fff', maxHeight: 88, overflow: 'hidden' }} />
          <Ed value={data.p4_callout_text} onChange={(v) => set('p4_callout_text', v)} style={{ fontSize: 28, opacity: .95, lineHeight: 1.3, color: '#fff', display: 'block', maxHeight: 73, overflow: 'hidden' }} />
        </div>
      ) : (
      <div className="callout">
        <div className="ic"><Ic.check style={{ width: 30, height: 30, strokeWidth: 3.5 }} /></div>
        <div className="txt">
          <Ed value={data.p4_callout_title} onChange={(v) => set('p4_callout_title', v)} style={{ fontFamily: 'Montserrat', fontSize: 30, fontWeight: 800, display: 'block', lineHeight: 1.1 }} />
          <Ed value={data.p4_callout_text} onChange={(v) => set('p4_callout_text', v)} style={{ fontSize: 21, opacity: .95, lineHeight: 1.3 }} />
        </div>
      </div>
      )}
      </Drag>
    </div>);

}

/* ============== Photo 5: Garantia + Credibilidade — IDÊNTICA ao original ============== */
function Photo5({ data, set, bgMode }) {
  if (bgMode) {
    // Apenas miniatura do produto sobre o fundo fixo — arrastrável
    return (
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Drag id="p5_mini" data={data} set={set} enabled
          defaultPos={{ x: 750, y: 700 }}
          style={{ position: 'absolute', top: 0, left: 0, width: data.p5_mini_size || 280, height: data.p5_mini_size || 280, display: 'grid', placeItems: 'center' }}>
          {data.mainImg ?
            <img src={data.mainImg} alt="" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} /> :
            <div className="img-placeholder" style={{ width: '100%', height: '100%' }}>miniatura</div>}
        </Drag>
      </div>
    );
  }
  return (
    <div style={{
      width: '100%', height: '100%',
      padding: '50px 50px 50px 50px',
      background: '#F4F4F4',
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 1.05fr',
      gap: 36
    }}>
      <div style={{
        borderRadius: 20,
        overflow: 'hidden',
        background: '#E6E6E6',
        height: '100%'
      }}>
        {data.p5_lifestyle ?
        <img src={data.p5_lifestyle} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> :
        <div className="img-placeholder" style={{ height: '100%' }}>foto loja / estoque</div>}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 30, paddingTop: 40 }}>
        <TrustRow textA={data.p5_t1_text_a} hl={data.p5_t1_hl} textB={data.p5_t1_text_b}
        onA={(v) => set('p5_t1_text_a', v)} onHl={(v) => set('p5_t1_hl', v)} onB={(v) => set('p5_t1_text_b', v)} />
        <TrustRow textA={data.p5_t2_text_a} hl={data.p5_t2_hl} textB={data.p5_t2_text_b}
        onA={(v) => set('p5_t2_text_a', v)} onHl={(v) => set('p5_t2_hl', v)} onB={(v) => set('p5_t2_text_b', v)} />
        <TrustRow textA={data.p5_t3_text_a} hl={data.p5_t3_hl} textB={data.p5_t3_text_b}
        onA={(v) => set('p5_t3_text_a', v)} onHl={(v) => set('p5_t3_hl', v)} onB={(v) => set('p5_t3_text_b', v)} />

        <div style={{ flex: 1, display: 'grid', placeItems: 'center', minHeight: 0, paddingBottom: 320 }}>
          {data.mainImg ?
          <img src={data.mainImg} alt="" style={{ maxHeight: data.p5_mini_size || 280, maxWidth: '85%', objectFit: 'contain' }} /> :
          <div className="img-placeholder" style={{ width: '70%', height: 200 }}>produto (miniatura)</div>}
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: 50, left: '46%', right: 50,
        background: '#fff',
        borderRadius: 22,
        boxShadow: '0 12px 40px rgba(0,0,0,.12)',
        padding: '24px 28px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
          <div style={{
            width: 78, height: 78, borderRadius: '50%',
            background: '#1F7A3A', color: '#fff',
            display: 'grid', placeItems: 'center',
            flexShrink: 0,
            position: 'relative',
            textAlign: 'center'
          }}>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 800, lineHeight: 1 }}>
              <div style={{ fontSize: 17 }}>MEGA</div>
              <div style={{ fontSize: 8, marginTop: 3, letterSpacing: '.05em' }}>DISTRIBUIDOR</div>
            </div>
            <div style={{
              position: 'absolute', right: -2, top: -2,
              width: 22, height: 22, borderRadius: '50%',
              background: '#FFC42B',
              display: 'grid', placeItems: 'center',
              fontSize: 14, fontWeight: 800, color: '#1F7A3A',
              border: '2px solid #fff'
            }}>★</div>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <Ed value={data.p5_store_name} onChange={(v) => set('p5_store_name', v)} style={{ fontFamily: 'Montserrat', fontSize: 28, fontWeight: 800, display: 'block', lineHeight: 1 }} />
            <Ed value={data.p5_store_sub} onChange={(v) => set('p5_store_sub', v)} style={{ fontSize: 16, color: '#4A4A4A', marginTop: 5, display: 'block' }} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
          <span style={{ fontSize: 18, fontWeight: 600, color: '#1A1A1A' }}>
            <Ed value={data.p5_badge} onChange={(v) => set('p5_badge', v)}/>
            {' '}
            <span style={{ color: '#1F7A3A', fontWeight: 800 }}><Ed value={data.p5_rating} onChange={(v) => set('p5_rating', v)}/></span>
            {' de 5'}
          </span>
          <div style={{ display: 'flex', gap: 2 }}>
            {[1,2,3,4,5].map(i => (
              <span key={i} style={{ color: '#FFC42B', fontSize: 26, lineHeight: 1 }}>★</span>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, alignItems: 'center' }}>
          <Stat value={data.p5_stat1_v} label={data.p5_stat1_l} onV={(v) => set('p5_stat1_v', v)} onL={(v) => set('p5_stat1_l', v)} big />
          <Stat icon={<Ic.chat />} label={data.p5_stat2_l} onL={(v) => set('p5_stat2_l', v)} />
          <Stat icon={<Ic.clock />} label={data.p5_stat3_l} onL={(v) => set('p5_stat3_l', v)} />
        </div>
      </div>
    </div>);

}

function TrustRow({ textA, hl, textB, onA, onHl, onB }) {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      <div style={{
        width: 42, height: 42, borderRadius: '50%',
        background: '#1F7A3A', color: '#fff',
        display: 'grid', placeItems: 'center',
        flexShrink: 0, marginTop: 6
      }}>
        <Ic.check style={{ width: 24, height: 24, strokeWidth: 3.5 }} />
      </div>
      <div style={{ fontSize: 30, lineHeight: 1.3, fontWeight: 500, color: '#1A1A1A' }}>
        <Ed value={textA} onChange={onA} />
        {' '}
        <Ed value={hl} onChange={onHl} className="hl-yellow" />
        {' '}
        <Ed value={textB} onChange={onB} style={{ fontWeight: 700 }} />
      </div>
    </div>);

}

function Stat({ icon, value, label, onV, onL, big }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center' }}>
      {icon &&
      <div style={{ position: 'relative' }}>
          <div style={{ color: '#1A1A1A' }}>{React.cloneElement(icon, { style: { width: 38, height: 38 } })}</div>
          <div style={{ position: 'absolute', right: -3, bottom: -3, width: 18, height: 18, borderRadius: '50%', background: '#1F7A3A', display: 'grid', placeItems: 'center', color: '#fff', border: '2px solid white' }}>
            <Ic.check style={{ width: 10, height: 10, strokeWidth: 4 }} />
          </div>
        </div>
      }
      <div>
        {value !== undefined && <Ed value={value} onChange={onV} style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: big ? 30 : 22, display: 'block', lineHeight: 1 }} />}
        <Ed value={label} onChange={onL} style={{ fontSize: 15, color: '#4A4A4A', display: 'block', marginTop: 3 }} />
      </div>
    </div>);

}

window.MLPhoto1 = Photo1;
window.MLPhoto2 = Photo2;
window.MLPhoto3 = Photo3;
window.MLPhoto4 = Photo4;
window.MLPhoto5 = Photo5;

function Photo6({ data, set, bgMode }) {
  if (bgMode) {
    return (
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Drag id="p6_mini" data={data} set={set} enabled
          defaultPos={{ x: 750, y: 700 }}
          style={{ position: 'absolute', top: 0, left: 0, width: data.p6_mini_size || 280, height: data.p6_mini_size || 280, display: 'grid', placeItems: 'center' }}>
          {data.mainImg ?
            <img src={data.mainImg} alt="" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} /> :
            <div className="img-placeholder" style={{ width: '100%', height: '100%' }}>miniatura</div>}
        </Drag>
      </div>
    );
  }
  return (
    <div style={{
      width: '100%', height: '100%',
      padding: '50px 50px 50px 50px',
      background: '#F4F4F4',
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 1.05fr',
      gap: 36
    }}>
      <div style={{
        borderRadius: 20,
        overflow: 'hidden',
        background: '#E6E6E6',
        height: '100%'
      }}>
        {data.p6_lifestyle ?
        <img src={data.p6_lifestyle} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> :
        <div className="img-placeholder" style={{ height: '100%' }}>foto loja / estoque</div>}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 30, paddingTop: 40 }}>
        <TrustRow textA={data.p6_t1_text_a} hl={data.p6_t1_hl} textB={data.p6_t1_text_b}
        onA={(v) => set('p6_t1_text_a', v)} onHl={(v) => set('p6_t1_hl', v)} onB={(v) => set('p6_t1_text_b', v)} />
        <TrustRow textA={data.p6_t2_text_a} hl={data.p6_t2_hl} textB={data.p6_t2_text_b}
        onA={(v) => set('p6_t2_text_a', v)} onHl={(v) => set('p6_t2_hl', v)} onB={(v) => set('p6_t2_text_b', v)} />
        <TrustRow textA={data.p6_t3_text_a} hl={data.p6_t3_hl} textB={data.p6_t3_text_b}
        onA={(v) => set('p6_t3_text_a', v)} onHl={(v) => set('p6_t3_hl', v)} onB={(v) => set('p6_t3_text_b', v)} />

        <div style={{ flex: 1, display: 'grid', placeItems: 'center', minHeight: 0, paddingBottom: 320 }}>
          {data.mainImg ?
          <img src={data.mainImg} alt="" style={{ maxHeight: data.p6_mini_size || 280, maxWidth: '85%', objectFit: 'contain' }} /> :
          <div className="img-placeholder" style={{ width: '70%', height: 200 }}>produto (miniatura)</div>}
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: 50, left: '46%', right: 50,
        background: '#fff',
        borderRadius: 22,
        boxShadow: '0 12px 40px rgba(0,0,0,.12)',
        padding: '24px 28px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
          <div style={{
            width: 78, height: 78, borderRadius: '50%',
            background: '#1F7A3A', color: '#fff',
            display: 'grid', placeItems: 'center',
            flexShrink: 0,
            position: 'relative',
            textAlign: 'center'
          }}>
            <div style={{ fontFamily: 'Montserrat', fontWeight: 800, lineHeight: 1 }}>
              <div style={{ fontSize: 17 }}>MEGA</div>
              <div style={{ fontSize: 8, marginTop: 3, letterSpacing: '.05em' }}>DISTRIBUIDOR</div>
            </div>
            <div style={{
              position: 'absolute', right: -2, top: -2,
              width: 22, height: 22, borderRadius: '50%',
              background: '#FFC42B',
              display: 'grid', placeItems: 'center',
              fontSize: 14, fontWeight: 800, color: '#1F7A3A',
              border: '2px solid #fff'
            }}>★</div>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <Ed value={data.p6_store_name} onChange={(v) => set('p6_store_name', v)} style={{ fontFamily: 'Montserrat', fontSize: 28, fontWeight: 800, display: 'block', lineHeight: 1 }} />
            <Ed value={data.p6_store_sub} onChange={(v) => set('p6_store_sub', v)} style={{ fontSize: 16, color: '#4A4A4A', marginTop: 4, display: 'block' }} />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <Ic.medal style={{ width: 22, height: 22, color: '#1F7A3A' }} />
          <Ed value={data.p6_badge} onChange={(v) => set('p6_badge', v)} style={{ fontSize: 18, fontWeight: 700, color: '#1F7A3A' }} />
        </div>
        <div style={{ display: 'flex', gap: 5, marginBottom: 18 }}>
          {['#FF4D4F', '#FF9F43', '#FFD93D', '#A0E548', '#1F7A3A'].map((c, i) =>
          <div key={i} style={{ flex: 1, height: 7, borderRadius: 4, background: c, opacity: i === 4 ? 1 : 0.3 }} />
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, alignItems: 'center' }}>
          <Stat value={data.p6_stat1_v} label={data.p6_stat1_l} onV={(v) => set('p6_stat1_v', v)} onL={(v) => set('p6_stat1_l', v)} big />
          <Stat icon={<Ic.chat />} label={data.p6_stat2_l} onL={(v) => set('p6_stat2_l', v)} />
          <Stat icon={<Ic.clock />} label={data.p6_stat3_l} onL={(v) => set('p6_stat3_l', v)} />
        </div>
      </div>
    </div>);
}

window.MLPhoto6 = Photo6;