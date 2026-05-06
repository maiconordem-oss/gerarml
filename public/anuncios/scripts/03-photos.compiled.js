"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* global React, MLIcons, MLEditable, MLPanZoomImg, MLIconPicker, MLImgAdjustBar */
var Ic = window.MLIcons;
var Ed = window.MLEditable;
var Drag = window.MLDraggable;
var PanZoom = window.MLPanZoomImg;
var IcPicker = window.MLIconPicker;

/* ============================================================
   CAPA — 3 VARIANTES (sem texto)
   A = 3 círculos  |  E = faixa lateral  |  C = grid 4 cantos
   ============================================================ */

/* helper: placeholder sem texto */
function BgPlaceholder(_ref) {
  var _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({
      width: '100%',
      height: '100%',
      background: 'repeating-linear-gradient(-45deg,#EFEFEF 0 12px,#E6E6E6 12px 24px)',
      display: 'grid',
      placeItems: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: 'ui-monospace,monospace',
      borderRadius: 8
    }, style)
  });
}

/* ============== Callout — barra base padronizada ============== */
function Callout(_ref2) {
  var titleKey = _ref2.titleKey,
    textKey = _ref2.textKey,
    data = _ref2.data,
    set = _ref2.set;
  return /*#__PURE__*/React.createElement("div", {
    className: "callout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "txt"
  }, /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement(Ed, {
    value: data[titleKey],
    onChange: function onChange(v) {
      return set(titleKey, v);
    }
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Ed, {
    value: data[textKey],
    onChange: function onChange(v) {
      return set(textKey, v);
    }
  }))));
}

/* ZoomedImg substituído por PanZoom (MLPanZoomImg) — suporta pan + zoom */

/* ---- VARIANTE A: 3 círculos (atual) ---- */
function Photo1A(_ref3) {
  var data = _ref3.data,
    set = _ref3.set,
    bgMode = _ref3.bgMode;
  var circles = data.p1_circles || [];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: bgMode ? 'transparent' : '#fff',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      padding: '90px 80px 80px'
    }
  }, /*#__PURE__*/React.createElement(Drag, {
    id: "p1_circles_row",
    data: data,
    set: set,
    enabled: bgMode,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 30,
      alignItems: 'flex-start',
      marginBottom: -40,
      position: 'relative',
      zIndex: 6
    }
  }, circles.map(function (c, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        width: 290,
        height: 290,
        borderRadius: '50%',
        border: '7px solid var(--orange,#E89522)',
        background: '#fff',
        overflow: 'hidden',
        display: 'grid',
        placeItems: 'center',
        transform: i === 1 ? 'translateY(-30px)' : 'none',
        boxShadow: '0 8px 22px rgba(0,0,0,.08)',
        flexShrink: 0
      }
    }, c.img ? /*#__PURE__*/React.createElement("img", {
      src: c.img,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }) : /*#__PURE__*/React.createElement(BgPlaceholder, {
      style: {
        borderRadius: '50%'
      }
    }));
  })), /*#__PURE__*/React.createElement(PanZoom, {
    src: data.p1_img || data.mainImg,
    zoom: data.p1_zoom || 1,
    panKey: "p1_pan",
    data: data,
    set: set
  }));
}

/* ---- VARIANTE E: produto grande + 1 círculo de detalhe movível ---- */
function Photo1E(_ref4) {
  var data = _ref4.data,
    set = _ref4.set,
    bgMode = _ref4.bgMode;
  var spot = data.p1e_spot || {
    img: '',
    x: 60,
    y: 58,
    size: 340
  };
  var setSpot = function setSpot(patch) {
    return set('p1e_spot', _objectSpread(_objectSpread({}, spot), patch));
  };
  var fileRef = React.useRef(null);
  var onFile = function onFile(e) {
    var _e$target$files;
    var f = (_e$target$files = e.target.files) === null || _e$target$files === void 0 ? void 0 : _e$target$files[0];
    if (!f) return;
    var r = new FileReader();
    r.onload = function (ev) {
      return setSpot({
        img: ev.target.result
      });
    };
    r.readAsDataURL(f);
  };
  var startDrag = function startDrag(ev) {
    ev.stopPropagation();
    var startX = ev.clientX,
      startY = ev.clientY;
    var origX = spot.x,
      origY = spot.y;
    var onMove = function onMove(e) {
      var _scaleEl$style$transf;
      var scaleEl = document.querySelector('.canvas');
      var scale = parseFloat((scaleEl === null || scaleEl === void 0 || (_scaleEl$style$transf = scaleEl.style.transform) === null || _scaleEl$style$transf === void 0 || (_scaleEl$style$transf = _scaleEl$style$transf.match(/scale\(([^)]+)\)/)) === null || _scaleEl$style$transf === void 0 ? void 0 : _scaleEl$style$transf[1]) || '1');
      var dx = (e.clientX - startX) / scale;
      var dy = (e.clientY - startY) / scale;
      setSpot({
        x: Math.max(0, Math.min(85, origX + dx / 1200 * 100)),
        y: Math.max(0, Math.min(85, origY + dy / 1540 * 100))
      });
    };
    var _onUp = function onUp() {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', _onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', _onUp);
  };
  var sz = spot.size || 340;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: bgMode ? 'transparent' : '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      padding: 60
    }
  }, /*#__PURE__*/React.createElement(PanZoom, {
    src: data.p1_img || data.mainImg,
    zoom: data.p1_zoom || 1,
    panKey: "p1_pan",
    data: data,
    set: set
  })), /*#__PURE__*/React.createElement("div", {
    onMouseDown: startDrag,
    style: {
      position: 'absolute',
      left: "".concat(spot.x, "%"),
      top: "".concat(spot.y, "%"),
      width: sz,
      height: sz,
      borderRadius: '50%',
      border: '8px solid #E89522',
      background: '#fff',
      overflow: 'hidden',
      cursor: 'grab',
      boxShadow: '0 8px 28px rgba(0,0,0,.18)',
      zIndex: 10
    }
  }, spot.img ? /*#__PURE__*/React.createElement("img", {
    src: spot.img,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      pointerEvents: 'none'
    }
  }) : /*#__PURE__*/React.createElement(BgPlaceholder, {
    style: {
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    },
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'rgba(0,0,0,.5)',
      display: 'flex',
      justifyContent: 'center',
      gap: 10,
      padding: '10px 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      setSpot({
        size: Math.max(180, sz - 40)
      });
    },
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: 0,
      background: 'rgba(255,255,255,.2)',
      color: '#fff',
      fontSize: 22,
      fontWeight: 700,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      var _fileRef$current;
      e.stopPropagation();
      (_fileRef$current = fileRef.current) === null || _fileRef$current === void 0 || _fileRef$current.click();
    },
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: 0,
      background: 'rgba(255,255,255,.2)',
      color: '#fff',
      fontSize: 16,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, "\uD83D\uDCF7"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      setSpot({
        size: Math.min(600, sz + 40)
      });
    },
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: 0,
      background: 'rgba(255,255,255,.2)',
      color: '#fff',
      fontSize: 22,
      fontWeight: 700,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, "+")), /*#__PURE__*/React.createElement("input", {
    ref: fileRef,
    type: "file",
    accept: "image/*",
    style: {
      display: 'none'
    },
    onChange: onFile
  })));
}

/* ---- VARIANTE C: só o produto, sem nada sobreposto ---- */
function Photo1C(_ref5) {
  var data = _ref5.data,
    set = _ref5.set,
    bgMode = _ref5.bgMode;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: bgMode ? 'transparent' : '#fff',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(PanZoom, {
    src: data.p1_img || data.mainImg,
    zoom: data.p1_zoom || 1,
    panKey: "p1_pan",
    data: data,
    set: set
  }));
}

/* ---- Dispatcher: escolhe a variante certa ---- */
function Photo1(_ref6) {
  var data = _ref6.data,
    set = _ref6.set,
    bgMode = _ref6.bgMode;
  var v = data.p1_variant || 'A';
  if (v === 'E') return /*#__PURE__*/React.createElement(Photo1E, {
    data: data,
    set: set,
    bgMode: bgMode
  });
  if (v === 'C') return /*#__PURE__*/React.createElement(Photo1C, {
    data: data,
    set: set,
    bgMode: bgMode
  });
  return /*#__PURE__*/React.createElement(Photo1A, {
    data: data,
    set: set,
    bgMode: bgMode
  });
}

/* ============== Photo 2: Características principais ============== */
function Photo2(_ref7) {
  var data = _ref7.data,
    set = _ref7.set,
    bgMode = _ref7.bgMode;
  return /*#__PURE__*/React.createElement("div", {
    className: "tpl",
    style: {
      padding: '80px 80px 60px',
      background: bgMode ? 'transparent' : undefined
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Drag, {
    id: "p2_f1",
    data: data,
    set: set,
    enabled: bgMode,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      maxWidth: 380,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(Feat, {
    iconKey: "p2_ic1",
    data: data,
    set: set,
    title: data.p2_f1_title,
    text: data.p2_f1_text,
    onTitle: function onTitle(v) {
      return set('p2_f1_title', v);
    },
    onText: function onText(v) {
      return set('p2_f1_text', v);
    }
  })), /*#__PURE__*/React.createElement(Drag, {
    id: "p2_f2",
    data: data,
    set: set,
    enabled: bgMode,
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      maxWidth: 380,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(Feat, {
    align: "right",
    iconKey: "p2_ic2",
    data: data,
    set: set,
    title: data.p2_f2_title,
    text: data.p2_f2_text,
    onTitle: function onTitle(v) {
      return set('p2_f2_title', v);
    },
    onText: function onText(v) {
      return set('p2_f2_text', v);
    }
  })), /*#__PURE__*/React.createElement(Drag, {
    id: "p2_f3",
    data: data,
    set: set,
    enabled: bgMode,
    style: {
      position: 'absolute',
      bottom: 80,
      left: 60,
      maxWidth: 380,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(Feat, {
    iconKey: "p2_ic3",
    data: data,
    set: set,
    title: data.p2_f3_title,
    text: data.p2_f3_text,
    onTitle: function onTitle(v) {
      return set('p2_f3_title', v);
    },
    onText: function onText(v) {
      return set('p2_f3_text', v);
    }
  })), /*#__PURE__*/React.createElement(Drag, {
    id: "p2_f4",
    data: data,
    set: set,
    enabled: bgMode,
    style: {
      position: 'absolute',
      bottom: 80,
      right: 60,
      maxWidth: 380,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(Feat, {
    align: "right",
    iconKey: "p2_ic4",
    data: data,
    set: set,
    title: data.p2_f4_title,
    text: data.p2_f4_text,
    onTitle: function onTitle(v) {
      return set('p2_f4_title', v);
    },
    onText: function onText(v) {
      return set('p2_f4_text', v);
    }
  })), /*#__PURE__*/React.createElement(PanZoom, {
    src: data.p2_img || data.mainImg,
    zoom: data.p2_zoom || 1,
    panKey: "p2_pan",
    data: data,
    set: set
  }), !bgMode && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Arrow, {
    d: "M 22,16 C 32,28 36,36 44,46"
  }), /*#__PURE__*/React.createElement(Arrow, {
    d: "M 78,16 C 68,28 64,36 56,46"
  }), /*#__PURE__*/React.createElement(Arrow, {
    d: "M 28,72 C 34,68 38,62 44,54"
  }))), /*#__PURE__*/React.createElement(Callout, {
    titleKey: "p2_callout_title",
    textKey: "p2_callout_text",
    data: data,
    set: set
  }));
}
function Arrow(_ref8) {
  var d = _ref8.d,
    _ref8$color = _ref8.color,
    color = _ref8$color === void 0 ? "#1F7A3A" : _ref8$color;
  var id = 'arr-' + Math.random().toString(36).slice(2, 8);
  return /*#__PURE__*/React.createElement("svg", {
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 1
    },
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("marker", {
    id: id,
    viewBox: "0 0 10 10",
    refX: "6",
    refY: "5",
    markerWidth: "5",
    markerHeight: "5",
    orient: "auto"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,0 L10,5 L0,10 Z",
    fill: color
  }))), /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: color,
    strokeWidth: "0.5",
    markerEnd: "url(#".concat(id, ")"),
    vectorEffect: "non-scaling-stroke",
    style: {
      strokeWidth: 3
    }
  }));
}
function Feat(_ref9) {
  var icon = _ref9.icon,
    iconKey = _ref9.iconKey,
    data = _ref9.data,
    set = _ref9.set,
    title = _ref9.title,
    text = _ref9.text,
    _ref9$align = _ref9.align,
    align = _ref9$align === void 0 ? "left" : _ref9$align,
    onTitle = _ref9.onTitle,
    onText = _ref9.onText;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 750,
      marginLeft: align === 'right' ? 'auto' : 0,
      display: 'flex',
      alignItems: 'flex-start',
      gap: 18,
      flexDirection: align === 'right' ? 'row-reverse' : 'row'
    }
  }, iconKey && data && set ? /*#__PURE__*/React.createElement(IcPicker, {
    iconKey: iconKey,
    data: data,
    set: set,
    size: 126,
    borderRadius: 24,
    iconSize: 84
  }) : /*#__PURE__*/React.createElement("div", {
    className: "ic-square",
    style: {
      width: 126,
      height: 126,
      borderRadius: 24,
      flexShrink: 0
    }
  }, icon && React.cloneElement(icon, {
    style: {
      width: 84,
      height: 84,
      color: '#fff',
      stroke: '#fff'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: align,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Ed, {
    value: title,
    onChange: onTitle,
    style: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: 26.5,
      fontWeight: 800,
      color: 'var(--green,#1F7A3A)',
      lineHeight: 1.1,
      display: 'block',
      whiteSpace: 'nowrap'
    }
  }), /*#__PURE__*/React.createElement(Ed, {
    value: text,
    onChange: onText,
    multi: true,
    style: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: 20.5,
      lineHeight: 1.3,
      color: '#1A1A1A',
      marginTop: 8,
      display: 'block'
    }
  })));
}

/* ============== Photo 3: Dimensões / Specs ============== */
function Photo3(_ref0) {
  var data = _ref0.data,
    set = _ref0.set,
    bgMode = _ref0.bgMode;
  return /*#__PURE__*/React.createElement("div", {
    className: "tpl",
    style: {
      padding: '80px 90px 60px',
      width: "1200px",
      height: "1540px",
      background: bgMode ? 'transparent' : undefined
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      textAlign: 'center',
      fontSize: 64,
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement(Ed, {
    value: data.p3_title_a,
    onChange: function onChange(v) {
      return set('p3_title_a', v);
    },
    className: "green"
  }), ' ', /*#__PURE__*/React.createElement(Ed, {
    value: data.p3_title_b,
    onChange: function onChange(v) {
      return set('p3_title_b', v);
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Ed, {
    value: data.p3_title_c,
    onChange: function onChange(v) {
      return set('p3_title_c', v);
    }
  }), ' ', /*#__PURE__*/React.createElement("span", {
    className: "pill-yellow-inline"
  }, /*#__PURE__*/React.createElement(Ed, {
    value: data.p3_title_pill,
    onChange: function onChange(v) {
      return set('p3_title_pill', v);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      marginTop: 50
    }
  }, /*#__PURE__*/React.createElement(Drag, {
    id: "p3_f1",
    data: data,
    set: set,
    enabled: bgMode,
    style: {
      position: 'absolute',
      top: 20,
      left: 0,
      maxWidth: 380,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(Feat, {
    iconKey: "p3_ic1",
    data: data,
    set: set,
    title: data.p3_f1_title,
    text: data.p3_f1_text,
    onTitle: function onTitle(v) {
      return set('p3_f1_title', v);
    },
    onText: function onText(v) {
      return set('p3_f1_text', v);
    }
  })), /*#__PURE__*/React.createElement(Drag, {
    id: "p3_f2",
    data: data,
    set: set,
    enabled: bgMode,
    style: {
      position: 'absolute',
      top: 220,
      left: 0,
      maxWidth: 380,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(Feat, {
    iconKey: "p3_ic2",
    data: data,
    set: set,
    title: data.p3_f2_title,
    text: data.p3_f2_text,
    onTitle: function onTitle(v) {
      return set('p3_f2_title', v);
    },
    onText: function onText(v) {
      return set('p3_f2_text', v);
    }
  })), /*#__PURE__*/React.createElement(Drag, {
    id: "p3_f3",
    data: data,
    set: set,
    enabled: bgMode,
    style: {
      position: 'absolute',
      top: 420,
      left: 0,
      maxWidth: 380,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(Feat, {
    iconKey: "p3_ic3",
    data: data,
    set: set,
    title: data.p3_f3_title,
    text: data.p3_f3_text,
    onTitle: function onTitle(v) {
      return set('p3_f3_title', v);
    },
    onText: function onText(v) {
      return set('p3_f3_text', v);
    }
  })), /*#__PURE__*/React.createElement(Drag, {
    id: "p3_f4",
    data: data,
    set: set,
    enabled: bgMode,
    style: {
      position: 'absolute',
      top: 620,
      left: 0,
      maxWidth: 380,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(Feat, {
    iconKey: "p3_ic4",
    data: data,
    set: set,
    title: data.p3_f4_title,
    text: data.p3_f4_text,
    onTitle: function onTitle(v) {
      return set('p3_f4_title', v);
    },
    onText: function onText(v) {
      return set('p3_f4_text', v);
    }
  })), /*#__PURE__*/React.createElement(PanZoom, {
    src: data.p3_img || data.mainImg,
    zoom: data.p3_zoom || 1,
    panKey: "p3_pan",
    data: data,
    set: set
  }), !bgMode && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Arrow, {
    d: "M 30,16 C 40,18 44,20 50,24"
  }), /*#__PURE__*/React.createElement(Arrow, {
    d: "M 30,52 C 40,52 50,52 58,52"
  }))), /*#__PURE__*/React.createElement(Callout, {
    titleKey: "p3_callout_title",
    textKey: "p3_callout_text",
    data: data,
    set: set
  }));
}
function DimLabel(_ref1) {
  var value = _ref1.value,
    onChange = _ref1.onChange,
    style = _ref1.style;
  return /*#__PURE__*/React.createElement("div", {
    style: _objectSpread({
      position: 'absolute',
      background: '#fff',
      border: '3px solid #1A1A1A',
      borderRadius: 10,
      padding: '6px 18px',
      fontFamily: 'Montserrat',
      fontWeight: 800,
      fontSize: 24,
      whiteSpace: 'nowrap'
    }, style)
  }, /*#__PURE__*/React.createElement(Ed, {
    value: value,
    onChange: onChange
  }));
}

/* ============== Photo 4: Solução ideal ============== */
function Photo4(_ref10) {
  var data = _ref10.data,
    set = _ref10.set,
    bgMode = _ref10.bgMode;
  return /*#__PURE__*/React.createElement("div", {
    className: "tpl",
    style: {
      padding: '80px 90px 60px',
      background: bgMode ? 'transparent' : undefined,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      textAlign: 'center',
      fontSize: 64,
      lineHeight: 1.1,
      position: 'relative',
      zIndex: 10,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Ed, {
    value: data.p4_title_a,
    onChange: function onChange(v) {
      return set('p4_title_a', v);
    }
  }), ' ', /*#__PURE__*/React.createElement(Ed, {
    value: data.p4_title_b,
    onChange: function onChange(v) {
      return set('p4_title_b', v);
    },
    className: "green"
  }), ' ', /*#__PURE__*/React.createElement(Ed, {
    value: data.p4_title_c,
    onChange: function onChange(v) {
      return set('p4_title_c', v);
    }
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "pill-yellow-inline"
  }, /*#__PURE__*/React.createElement(Ed, {
    value: data.p4_title_pill,
    onChange: function onChange(v) {
      return set('p4_title_pill', v);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      minHeight: 600
    }
  }, /*#__PURE__*/React.createElement(PanZoom, {
    src: data.p4_img || data.mainImg,
    zoom: data.p4_zoom || 1,
    panKey: "p4_pan",
    data: data,
    set: set
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 10,
      flexShrink: 0,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32,
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(IcPicker, {
    iconKey: "p4_ic1",
    data: data,
    set: set,
    size: 126,
    borderRadius: 24,
    iconSize: 84
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Ed, {
    value: data.p4_b1_title,
    onChange: function onChange(v) {
      return set('p4_b1_title', v);
    },
    style: {
      fontFamily: 'Montserrat',
      fontSize: 32,
      fontWeight: 800,
      color: 'var(--green,#1F7A3A)',
      display: 'block',
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }), /*#__PURE__*/React.createElement(Ed, {
    value: data.p4_b1_text,
    onChange: function onChange(v) {
      return set('p4_b1_text', v);
    },
    multi: true,
    style: {
      fontSize: 24,
      lineHeight: 1.25,
      color: '#1A1A1A',
      display: 'block',
      marginTop: 8
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 18,
      flexDirection: 'row-reverse'
    }
  }, /*#__PURE__*/React.createElement(IcPicker, {
    iconKey: "p4_ic2",
    data: data,
    set: set,
    size: 126,
    borderRadius: 24,
    iconSize: 84
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1,
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(Ed, {
    value: data.p4_b2_title,
    onChange: function onChange(v) {
      return set('p4_b2_title', v);
    },
    style: {
      fontFamily: 'Montserrat',
      fontSize: 32,
      fontWeight: 800,
      color: 'var(--green,#1F7A3A)',
      display: 'block',
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }), /*#__PURE__*/React.createElement(Ed, {
    value: data.p4_b2_text,
    onChange: function onChange(v) {
      return set('p4_b2_text', v);
    },
    multi: true,
    style: {
      fontSize: 24,
      lineHeight: 1.25,
      color: '#1A1A1A',
      display: 'block',
      marginTop: 8,
      textAlign: 'right'
    }
  })))), /*#__PURE__*/React.createElement(Callout, {
    titleKey: "p4_callout_title",
    textKey: "p4_callout_text",
    data: data,
    set: set
  }));
}

/* ============== Photo 5: Garantia + Credibilidade — IDÊNTICA ao original ============== */
function Photo5(_ref11) {
  var data = _ref11.data,
    set = _ref11.set,
    bgMode = _ref11.bgMode;
  if (bgMode) {
    // Apenas miniatura do produto sobre o fundo fixo — arrastrável
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(PanZoom, {
      src: data.p5_img || data.mainImg,
      zoom: data.p5_zoom || 1,
      panKey: "p5_pan",
      data: data,
      set: set
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      padding: '50px 50px 50px 50px',
      background: '#F4F4F4',
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 1.05fr',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 20,
      overflow: 'hidden',
      background: '#E6E6E6',
      height: '100%'
    }
  }, data.p5_lifestyle ? /*#__PURE__*/React.createElement("img", {
    src: data.p5_lifestyle,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    className: "img-placeholder",
    style: {
      height: '100%'
    }
  }, "foto loja / estoque")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 30,
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement(TrustRow, {
    textA: data.p5_t1_text_a,
    hl: data.p5_t1_hl,
    textB: data.p5_t1_text_b,
    onA: function onA(v) {
      return set('p5_t1_text_a', v);
    },
    onHl: function onHl(v) {
      return set('p5_t1_hl', v);
    },
    onB: function onB(v) {
      return set('p5_t1_text_b', v);
    }
  }), /*#__PURE__*/React.createElement(TrustRow, {
    textA: data.p5_t2_text_a,
    hl: data.p5_t2_hl,
    textB: data.p5_t2_text_b,
    onA: function onA(v) {
      return set('p5_t2_text_a', v);
    },
    onHl: function onHl(v) {
      return set('p5_t2_hl', v);
    },
    onB: function onB(v) {
      return set('p5_t2_text_b', v);
    }
  }), /*#__PURE__*/React.createElement(TrustRow, {
    textA: data.p5_t3_text_a,
    hl: data.p5_t3_hl,
    textB: data.p5_t3_text_b,
    onA: function onA(v) {
      return set('p5_t3_text_a', v);
    },
    onHl: function onHl(v) {
      return set('p5_t3_hl', v);
    },
    onB: function onB(v) {
      return set('p5_t3_text_b', v);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      minHeight: 200,
      paddingBottom: 320
    }
  }, /*#__PURE__*/React.createElement(PanZoom, {
    src: data.p5_img || data.mainImg,
    zoom: data.p5_zoom || 1,
    panKey: "p5_pan",
    data: data,
    set: set
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 50,
      left: '46%',
      right: 50,
      background: '#fff',
      borderRadius: 22,
      boxShadow: '0 12px 40px rgba(0,0,0,.12)',
      padding: '24px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 78,
      height: 78,
      borderRadius: '50%',
      background: '#1F7A3A',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0,
      position: 'relative',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 800,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17
    }
  }, "MEGA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      marginTop: 3,
      letterSpacing: '.05em'
    }
  }, "DISTRIBUIDOR")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -2,
      top: -2,
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: '#FFC42B',
      display: 'grid',
      placeItems: 'center',
      fontSize: 14,
      fontWeight: 800,
      color: '#1F7A3A',
      border: '2px solid #fff'
    }
  }, "\u2605")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Ed, {
    value: data.p5_store_name,
    onChange: function onChange(v) {
      return set('p5_store_name', v);
    },
    style: {
      fontFamily: 'Montserrat',
      fontSize: 28,
      fontWeight: 800,
      display: 'block',
      lineHeight: 1
    }
  }), /*#__PURE__*/React.createElement(Ed, {
    value: data.p5_store_sub,
    onChange: function onChange(v) {
      return set('p5_store_sub', v);
    },
    style: {
      fontSize: 16,
      color: '#4A4A4A',
      marginTop: 5,
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: '#1A1A1A'
    }
  }, /*#__PURE__*/React.createElement(Ed, {
    value: data.p5_badge,
    onChange: function onChange(v) {
      return set('p5_badge', v);
    }
  }), ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#1F7A3A',
      fontWeight: 800
    }
  }, /*#__PURE__*/React.createElement(Ed, {
    value: data.p5_rating,
    onChange: function onChange(v) {
      return set('p5_rating', v);
    }
  })), ' de 5'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, [1, 2, 3, 4, 5].map(function (i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        color: '#FFC42B',
        fontSize: 26,
        lineHeight: 1
      }
    }, "\u2605");
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: data.p5_stat1_v,
    label: data.p5_stat1_l,
    onV: function onV(v) {
      return set('p5_stat1_v', v);
    },
    onL: function onL(v) {
      return set('p5_stat1_l', v);
    },
    big: true
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: /*#__PURE__*/React.createElement(Ic.chat, null),
    label: data.p5_stat2_l,
    onL: function onL(v) {
      return set('p5_stat2_l', v);
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: /*#__PURE__*/React.createElement(Ic.clock, null),
    label: data.p5_stat3_l,
    onL: function onL(v) {
      return set('p5_stat3_l', v);
    }
  }))));
}
function TrustRow(_ref12) {
  var textA = _ref12.textA,
    hl = _ref12.hl,
    textB = _ref12.textB,
    onA = _ref12.onA,
    onHl = _ref12.onHl,
    onB = _ref12.onB;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      background: '#1F7A3A',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Ic.check, {
    style: {
      width: 24,
      height: 24,
      strokeWidth: 3.5
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      lineHeight: 1.3,
      fontWeight: 500,
      color: '#1A1A1A'
    }
  }, /*#__PURE__*/React.createElement(Ed, {
    value: textA,
    onChange: onA
  }), ' ', /*#__PURE__*/React.createElement(Ed, {
    value: hl,
    onChange: onHl,
    className: "hl-yellow"
  }), ' ', /*#__PURE__*/React.createElement(Ed, {
    value: textB,
    onChange: onB,
    style: {
      fontWeight: 700
    }
  })));
}
function Stat(_ref13) {
  var icon = _ref13.icon,
    value = _ref13.value,
    label = _ref13.label,
    onV = _ref13.onV,
    onL = _ref13.onL,
    big = _ref13.big;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      justifyContent: 'center'
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#1A1A1A'
    }
  }, React.cloneElement(icon, {
    style: {
      width: 38,
      height: 38
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -3,
      bottom: -3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#1F7A3A',
      display: 'grid',
      placeItems: 'center',
      color: '#fff',
      border: '2px solid white'
    }
  }, /*#__PURE__*/React.createElement(Ic.check, {
    style: {
      width: 10,
      height: 10,
      strokeWidth: 4
    }
  }))), /*#__PURE__*/React.createElement("div", null, value !== undefined && /*#__PURE__*/React.createElement(Ed, {
    value: value,
    onChange: onV,
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 800,
      fontSize: big ? 30 : 22,
      display: 'block',
      lineHeight: 1
    }
  }), /*#__PURE__*/React.createElement(Ed, {
    value: label,
    onChange: onL,
    style: {
      fontSize: 15,
      color: '#4A4A4A',
      display: 'block',
      marginTop: 3
    }
  })));
}
window.MLPhoto1 = Photo1;
window.MLPhoto2 = Photo2;
window.MLPhoto3 = Photo3;
window.MLPhoto4 = Photo4;
window.MLPhoto5 = Photo5;
function Photo6(_ref14) {
  var data = _ref14.data,
    set = _ref14.set,
    bgMode = _ref14.bgMode;
  if (bgMode) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(PanZoom, {
      src: data.p6_img || data.mainImg,
      zoom: data.p6_zoom || 1,
      panKey: "p6_pan",
      data: data,
      set: set
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      padding: '50px 50px 50px 50px',
      background: '#F4F4F4',
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 1.05fr',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 20,
      overflow: 'hidden',
      background: '#E6E6E6',
      height: '100%'
    }
  }, data.p6_lifestyle ? /*#__PURE__*/React.createElement("img", {
    src: data.p6_lifestyle,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    className: "img-placeholder",
    style: {
      height: '100%'
    }
  }, "foto loja / estoque")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 30,
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement(TrustRow, {
    textA: data.p6_t1_text_a,
    hl: data.p6_t1_hl,
    textB: data.p6_t1_text_b,
    onA: function onA(v) {
      return set('p6_t1_text_a', v);
    },
    onHl: function onHl(v) {
      return set('p6_t1_hl', v);
    },
    onB: function onB(v) {
      return set('p6_t1_text_b', v);
    }
  }), /*#__PURE__*/React.createElement(TrustRow, {
    textA: data.p6_t2_text_a,
    hl: data.p6_t2_hl,
    textB: data.p6_t2_text_b,
    onA: function onA(v) {
      return set('p6_t2_text_a', v);
    },
    onHl: function onHl(v) {
      return set('p6_t2_hl', v);
    },
    onB: function onB(v) {
      return set('p6_t2_text_b', v);
    }
  }), /*#__PURE__*/React.createElement(TrustRow, {
    textA: data.p6_t3_text_a,
    hl: data.p6_t3_hl,
    textB: data.p6_t3_text_b,
    onA: function onA(v) {
      return set('p6_t3_text_a', v);
    },
    onHl: function onHl(v) {
      return set('p6_t3_hl', v);
    },
    onB: function onB(v) {
      return set('p6_t3_text_b', v);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      minHeight: 200,
      paddingBottom: 320
    }
  }, /*#__PURE__*/React.createElement(PanZoom, {
    src: data.p6_img || data.mainImg,
    zoom: data.p6_zoom || 1,
    panKey: "p6_pan",
    data: data,
    set: set
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 50,
      left: '46%',
      right: 50,
      background: '#fff',
      borderRadius: 22,
      boxShadow: '0 12px 40px rgba(0,0,0,.12)',
      padding: '24px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 78,
      height: 78,
      borderRadius: '50%',
      background: '#1F7A3A',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0,
      position: 'relative',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 800,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17
    }
  }, "MEGA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8,
      marginTop: 3,
      letterSpacing: '.05em'
    }
  }, "DISTRIBUIDOR")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -2,
      top: -2,
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: '#FFC42B',
      display: 'grid',
      placeItems: 'center',
      fontSize: 14,
      fontWeight: 800,
      color: '#1F7A3A',
      border: '2px solid #fff'
    }
  }, "\u2605")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Ed, {
    value: data.p6_store_name,
    onChange: function onChange(v) {
      return set('p6_store_name', v);
    },
    style: {
      fontFamily: 'Montserrat',
      fontSize: 28,
      fontWeight: 800,
      display: 'block',
      lineHeight: 1
    }
  }), /*#__PURE__*/React.createElement(Ed, {
    value: data.p6_store_sub,
    onChange: function onChange(v) {
      return set('p6_store_sub', v);
    },
    style: {
      fontSize: 16,
      color: '#4A4A4A',
      marginTop: 4,
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Ic.medal, {
    style: {
      width: 22,
      height: 22,
      color: '#1F7A3A'
    }
  }), /*#__PURE__*/React.createElement(Ed, {
    value: data.p6_badge,
    onChange: function onChange(v) {
      return set('p6_badge', v);
    },
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: '#1F7A3A'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5,
      marginBottom: 18
    }
  }, ['#FF4D4F', '#FF9F43', '#FFD93D', '#A0E548', '#1F7A3A'].map(function (c, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        height: 7,
        borderRadius: 4,
        background: c,
        opacity: i === 4 ? 1 : 0.3
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: data.p6_stat1_v,
    label: data.p6_stat1_l,
    onV: function onV(v) {
      return set('p6_stat1_v', v);
    },
    onL: function onL(v) {
      return set('p6_stat1_l', v);
    },
    big: true
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: /*#__PURE__*/React.createElement(Ic.chat, null),
    label: data.p6_stat2_l,
    onL: function onL(v) {
      return set('p6_stat2_l', v);
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    icon: /*#__PURE__*/React.createElement(Ic.clock, null),
    label: data.p6_stat3_l,
    onL: function onL(v) {
      return set('p6_stat3_l', v);
    }
  }))));
}
window.MLPhoto6 = Photo6;
