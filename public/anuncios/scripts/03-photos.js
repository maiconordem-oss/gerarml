/* global React, MLIcons, MLEditable, MLPanZoomImg, MLIconPicker, MLImgAdjustBar */
const Ic = window.MLIcons;
const Ed = window.MLEditable;
const Drag = window.MLDraggable;
const PanZoom = window.MLPanZoomImg;
const IcPicker = window.MLIconPicker;

/* ============================================================
   CAPA — 3 VARIANTES (sem texto)
   A = 3 círculos  |  E = faixa lateral  |  C = grid 4 cantos
   ============================================================ */

/* helper: placeholder sem texto */
function BgPlaceholder({ style = {} }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: 'repeating-linear-gradient(-45deg,#EFEFEF 0 12px,#E6E6E6 12px 24px)',
      display: 'grid', placeItems: 'center',
      color: '#bbb', fontSize: 13, fontFamily: 'ui-monospace,monospace',
      borderRadius: 8, ...style
    }}/>
  );
}

/* ZoomedImg substituído por PanZoom (MLPanZoomImg) — suporta pan + zoom */

/* ---- VARIANTE A: 3 círculos (atual) ---- */
function Photo1A({ data, set, bgMode }) {
  const circles = data.p1_circles || [];
  return (
    <div style={{ width: '100%', height: '100%', background: bgMode ? 'transparent' : '#fff', position: 'relative', display: 'flex', flexDirection: 'column', padding: '90px 80px 80px' }}>
      <Drag id="p1_circles_row" data={data} set={set} enabled={bgMode} style={{ display: 'flex', justifyContent: 'space-between', gap: 30, alignItems: 'flex-start', marginBottom: -40, position: 'relative', zIndex: 6 }}>
        {circles.map((c, i) =>
          <div key={i} style={{
            width: 290, height: 290, borderRadius: '50%',
            border: '7px solid var(--orange,#E89522)', background: '#fff',
            overflow: 'hidden', display: 'grid', placeItems: 'center',
            transform: i === 1 ? 'translateY(-30px)' : 'none',
            boxShadow: '0 8px 22px rgba(0,0,0,.08)', flexShrink: 0
          }}>
            {c.img
              ? <img src={c.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              : <BgPlaceholder style={{ borderRadius: '50%' }} />}
          </div>
        )}
      </Drag>
      <PanZoom src={data.p1_img||data.mainImg} zoom={data.p1_zoom||1} panKey="p1_pan" data={data} set={set}/>
    </div>
  );
}

/* ---- VARIANTE E: produto grande + 1 círculo de detalhe movível ---- */
function Photo1E({ data, set, bgMode }) {
  const spot = data.p1e_spot || { img: '', x: 60, y: 58, size: 340 };
  const setSpot = (patch) => set('p1e_spot', { ...spot, ...patch });

  const fileRef = React.useRef(null);
  const onFile = (e) => {
    const f = e.target.files?.[0]; if (!f) return;
    const r = new FileReader();
    r.onload = ev => setSpot({ img: ev.target.result });
    r.readAsDataURL(f);
  };

  const startDrag = (ev) => {
    ev.stopPropagation();
    const startX = ev.clientX, startY = ev.clientY;
    const origX = spot.x, origY = spot.y;
    const onMove = (e) => {
      const scaleEl = document.querySelector('.canvas');
      const scale = parseFloat(scaleEl?.style.transform?.match(/scale\(([^)]+)\)/)?.[1] || '1');
      const dx = (e.clientX - startX) / scale;
      const dy = (e.clientY - startY) / scale;
      setSpot({
        x: Math.max(0, Math.min(85, origX + (dx / 1200) * 100)),
        y: Math.max(0, Math.min(85, origY + (dy / 1540) * 100)),
      });
    };
    const onUp = () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  const sz = spot.size || 340;

  return (
    <div style={{ width: '100%', height: '100%', background: bgMode ? 'transparent' : '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* Produto */}
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', padding: 60 }}>
        <PanZoom src={data.p1_img||data.mainImg} zoom={data.p1_zoom||1} panKey="p1_pan" data={data} set={set}/>
      </div>

      {/* Círculo único movível */}
      <div
        onMouseDown={startDrag}
        style={{
          position: 'absolute',
          left: `${spot.x}%`, top: `${spot.y}%`,
          width: sz, height: sz, borderRadius: '50%',
          border: '8px solid #E89522',
          background: '#fff', overflow: 'hidden',
          cursor: 'grab', boxShadow: '0 8px 28px rgba(0,0,0,.18)',
          zIndex: 10,
        }}
      >
        {spot.img
          ? <img src={spot.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }} />
          : <BgPlaceholder style={{ borderRadius: '50%' }} />}

        {/* Controles inline */}
        <div onMouseDown={e => e.stopPropagation()} style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'rgba(0,0,0,.5)', display: 'flex',
          justifyContent: 'center', gap: 10, padding: '10px 0',
        }}>
          <button onClick={e => { e.stopPropagation(); setSpot({ size: Math.max(180, sz - 40) }); }}
            style={{ width: 44, height: 44, borderRadius: '50%', border: 0, background: 'rgba(255,255,255,.2)', color: '#fff', fontSize: 22, fontWeight: 700, cursor: 'pointer', display: 'grid', placeItems: 'center' }}>−</button>
          <button onClick={e => { e.stopPropagation(); fileRef.current?.click(); }}
            style={{ width: 44, height: 44, borderRadius: '50%', border: 0, background: 'rgba(255,255,255,.2)', color: '#fff', fontSize: 16, cursor: 'pointer', display: 'grid', placeItems: 'center' }}>📷</button>
          <button onClick={e => { e.stopPropagation(); setSpot({ size: Math.min(600, sz + 40) }); }}
            style={{ width: 44, height: 44, borderRadius: '50%', border: 0, background: 'rgba(255,255,255,.2)', color: '#fff', fontSize: 22, fontWeight: 700, cursor: 'pointer', display: 'grid', placeItems: 'center' }}>+</button>
        </div>
        <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={onFile} />
      </div>
    </div>
  );
}

/* ---- VARIANTE C: só o produto, sem nada sobreposto ---- */
function Photo1C({ data, set, bgMode }) {
  return (
    <div style={{ width: '100%', height: '100%', background: bgMode ? 'transparent' : '#fff', position: 'relative' }}>
      <PanZoom src={data.p1_img||data.mainImg} zoom={data.p1_zoom||1} panKey="p1_pan" data={data} set={set}/>
    </div>
  );
}

/* ---- Dispatcher: escolhe a variante certa ---- */
function Photo1({ data, set, bgMode }) {
  const v = data.p1_variant || 'A';
  if (v === 'E') return <Photo1E data={data} set={set} bgMode={bgMode} />;
  if (v === 'C') return <Photo1C data={data} set={set} bgMode={bgMode} />;
  return <Photo1A data={data} set={set} bgMode={bgMode} />;
}

/* ============== Photo 2: Características principais ============== */
function Photo2({ data, set, bgMode }) {
  return (
    <div className="tpl" style={{ padding: '80px 80px 60px', background: bgMode ? 'transparent' : undefined }}>
      <div style={{ position: 'relative', flex: 1 }}>
        <Drag id="p2_f1" data={data} set={set} enabled={bgMode} style={{ position: 'absolute', top: 0, left: 0, maxWidth: 380, zIndex: 2 }}>
          <Feat iconKey="p2_ic1" data={data} set={set} title={data.p2_f1_title} text={data.p2_f1_text}
          onTitle={(v) => set('p2_f1_title', v)} onText={(v) => set('p2_f1_text', v)} />
        </Drag>
        <Drag id="p2_f2" data={data} set={set} enabled={bgMode} style={{ position: 'absolute', top: 0, right: 0, maxWidth: 380, zIndex: 2 }}>
          <Feat align="right" iconKey="p2_ic2" data={data} set={set} title={data.p2_f2_title} text={data.p2_f2_text}
          onTitle={(v) => set('p2_f2_title', v)} onText={(v) => set('p2_f2_text', v)} />
        </Drag>
        <Drag id="p2_f3" data={data} set={set} enabled={bgMode} style={{ position: 'absolute', bottom: 80, left: 60, maxWidth: 380, zIndex: 2 }}>
          <Feat iconKey="p2_ic3" data={data} set={set} title={data.p2_f3_title} text={data.p2_f3_text}
          onTitle={(v) => set('p2_f3_title', v)} onText={(v) => set('p2_f3_text', v)} />
        </Drag>
        <Drag id="p2_f4" data={data} set={set} enabled={bgMode} style={{ position: 'absolute', bottom: 80, right: 60, maxWidth: 380, zIndex: 2 }}>
          <Feat align="right" iconKey="p2_ic4" data={data} set={set} title={data.p2_f4_title} text={data.p2_f4_text}
          onTitle={(v) => set('p2_f4_title', v)} onText={(v) => set('p2_f4_text', v)} />
        </Drag>
        <PanZoom src={data.p2_img||data.mainImg} zoom={data.p2_zoom||1} panKey="p2_pan" data={data} set={set}/>
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

function Feat({ icon, iconKey, data, set, title, text, align = "left", onTitle, onText }) {
  const defaultIcon = iconKey ? (data && data[iconKey]) || 'gear' : null;
  return (
    <div style={{ maxWidth: 750, marginLeft: align === 'right' ? 'auto' : 0, display: 'flex', alignItems: 'flex-start', gap: 18, flexDirection: align === 'right' ? 'row-reverse' : 'row' }}>
      {iconKey && data && set
        ? <IcPicker iconKey={iconKey} data={data} set={set} size={110} borderRadius={22}/>
        : <div className="ic-square" style={{ width: 110, height: 110, borderRadius: 22, flexShrink: 0 }}>
            {icon && React.cloneElement(icon, { style: { width: 62, height: 62, color: '#fff', stroke: '#fff' } })}
          </div>
      }
      <div style={{ flex: 1, textAlign: align, minWidth: 0 }}>
        <Ed value={title} onChange={onTitle} style={{ fontFamily: 'Montserrat', fontSize: 32, fontWeight: 800, color: 'var(--green,#1F7A3A)', lineHeight: 1, display: 'block', whiteSpace: 'nowrap' }} />
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
          <Feat iconKey="p3_ic1" data={data} set={set} title={data.p3_f1_title} text={data.p3_f1_text}
          onTitle={(v) => set('p3_f1_title', v)} onText={(v) => set('p3_f1_text', v)} />
        </Drag>
        <Drag id="p3_f2" data={data} set={set} enabled={bgMode} style={{ position: 'absolute', top: 220, left: 0, maxWidth: 380, zIndex: 2 }}>
          <Feat iconKey="p3_ic2" data={data} set={set} title={data.p3_f2_title} text={data.p3_f2_text}
          onTitle={(v) => set('p3_f2_title', v)} onText={(v) => set('p3_f2_text', v)} />
        </Drag>
        <Drag id="p3_f3" data={data} set={set} enabled={bgMode} style={{ position: 'absolute', top: 420, left: 0, maxWidth: 380, zIndex: 2 }}>
          <Feat iconKey="p3_ic3" data={data} set={set} title={data.p3_f3_title} text={data.p3_f3_text}
          onTitle={(v) => set('p3_f3_title', v)} onText={(v) => set('p3_f3_text', v)} />
        </Drag>
        <Drag id="p3_f4" data={data} set={set} enabled={bgMode} style={{ position: 'absolute', top: 620, left: 0, maxWidth: 380, zIndex: 2 }}>
          <Feat iconKey="p3_ic4" data={data} set={set} title={data.p3_f4_title} text={data.p3_f4_text}
          onTitle={(v) => set('p3_f4_title', v)} onText={(v) => set('p3_f4_text', v)} />
        </Drag>

        <PanZoom src={data.p3_img||data.mainImg} zoom={data.p3_zoom||1} panKey="p3_pan" data={data} set={set}/>

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
  const textMode = data && data.__textMode;
  return (
    <div className="tpl" style={{ padding: '80px 90px 60px', background: bgMode ? 'transparent' : undefined, position: 'relative' }}>

      {/* Título */}
      <h1 style={{ textAlign: 'center', fontSize: 64, lineHeight: 1.1, position: 'relative', zIndex: 10 }}>
        <Ed value={data.p4_title_a} onChange={(v) => set('p4_title_a', v)} />
        {' '}
        <Ed value={data.p4_title_b} onChange={(v) => set('p4_title_b', v)} className="green" />
        {' '}
        <Ed value={data.p4_title_c} onChange={(v) => set('p4_title_c', v)} />
        <br />
        <span className="pill-yellow-inline"><Ed value={data.p4_title_pill} onChange={(v) => set('p4_title_pill', v)} /></span>
      </h1>

      {/* Imagem do produto — livre */}
      <PanZoom src={data.p4_img||data.mainImg} zoom={data.p4_zoom||1} panKey="p4_pan" data={data} set={set}/>

      {/* 2 características com ícone — acima do callout, zIndex alto */}
      <div style={{
        position: 'relative', zIndex: 10,
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 32, marginBottom: 30,
      }}>
        {/* Esquerda */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
          <IcPicker iconKey="p4_ic1" data={data} set={set} size={110} borderRadius={22}/>
          <div style={{ minWidth: 0, flex: 1 }}>
            <Ed value={data.p4_b1_title} onChange={(v) => set('p4_b1_title', v)}
              style={{ fontFamily: 'Montserrat', fontSize: 32, fontWeight: 800, color: 'var(--green,#1F7A3A)', display: 'block', lineHeight: 1, whiteSpace: 'nowrap' }} />
            <Ed value={data.p4_b1_text} onChange={(v) => set('p4_b1_text', v)} multi
              style={{ fontSize: 24, lineHeight: 1.25, color: '#1A1A1A', display: 'block', marginTop: 8 }} />
          </div>
        </div>

        {/* Direita — alinhado à direita */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, flexDirection: 'row-reverse' }}>
          <IcPicker iconKey="p4_ic2" data={data} set={set} size={110} borderRadius={22}/>
          <div style={{ minWidth: 0, flex: 1, textAlign: 'right' }}>
            <Ed value={data.p4_b2_title} onChange={(v) => set('p4_b2_title', v)}
              style={{ fontFamily: 'Montserrat', fontSize: 32, fontWeight: 800, color: 'var(--green,#1F7A3A)', display: 'block', lineHeight: 1, whiteSpace: 'nowrap' }} />
            <Ed value={data.p4_b2_text} onChange={(v) => set('p4_b2_text', v)} multi
              style={{ fontSize: 24, lineHeight: 1.25, color: '#1A1A1A', display: 'block', marginTop: 8, textAlign: 'right' }} />
          </div>
        </div>
      </div>

      {/* Callout — fixo na parte inferior, centralizado */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {bgMode ? (
          <div style={{ padding: '20px 30px', color: '#fff', textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
            <Ed value={data.p4_callout_title} onChange={(v) => set('p4_callout_title', v)}
              style={{ fontFamily: 'Montserrat', fontSize: 40, fontWeight: 800, display: 'block', lineHeight: 1.1, color: '#fff' }} />
            <Ed value={data.p4_callout_text} onChange={(v) => set('p4_callout_text', v)}
              style={{ fontSize: 28, opacity: .95, lineHeight: 1.3, color: '#fff', display: 'block' }} />
          </div>
        ) : (
          <div className="callout">
            <div className="ic"><Ic.check style={{ width: 30, height: 30, strokeWidth: 3.5 }} /></div>
            <div className="txt">
              <Ed value={data.p4_callout_title} onChange={(v) => set('p4_callout_title', v)}
                style={{ fontFamily: 'Montserrat', fontSize: 30, fontWeight: 800, display: 'block', lineHeight: 1.1 }} />
              <Ed value={data.p4_callout_text} onChange={(v) => set('p4_callout_text', v)}
                style={{ fontSize: 21, opacity: .95, lineHeight: 1.3 }} />
            </div>
          </div>
        )}
      </div>

    </div>);
}

/* ============== Photo 5: Garantia + Credibilidade — IDÊNTICA ao original ============== */
function Photo5({ data, set, bgMode }) {
  if (bgMode) {
    // Apenas miniatura do produto sobre o fundo fixo — arrastrável
    return (
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <PanZoom src={data.p5_img||data.mainImg} zoom={data.p5_zoom||1} panKey="p5_pan" data={data} set={set}/>
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

        <div style={{ flex: 1, position: 'relative', minHeight: 200, paddingBottom: 320 }}>
          <PanZoom src={data.p5_img||data.mainImg} zoom={data.p5_zoom||1} panKey="p5_pan" data={data} set={set}/>
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
        <PanZoom src={data.p6_img||data.mainImg} zoom={data.p6_zoom||1} panKey="p6_pan" data={data} set={set}/>
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

        <div style={{ flex: 1, position: 'relative', minHeight: 200, paddingBottom: 320 }}>
          <PanZoom src={data.p6_img||data.mainImg} zoom={data.p6_zoom||1} panKey="p6_pan" data={data} set={set}/>
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