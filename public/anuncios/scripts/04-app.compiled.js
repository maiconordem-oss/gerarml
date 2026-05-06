"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* global React, ReactDOM, MLPhoto1, MLPhoto2, MLPhoto3, MLPhoto4, MLPhoto5, MLPhoto6, MLExport */
var _React = React,
  useState = _React.useState,
  useRef = _React.useRef,
  useEffect = _React.useEffect,
  useMemo = _React.useMemo;
var TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "storeName": "Mega Distribuidor",
  "productName": "NIVELADOR DE MOTOR"
} /*EDITMODE-END*/;
var INITIAL = {
  mainImg: 'assets/produto-capa.jpg',
  productOnlyImg: '',
  p1_zoom: 1,
  p2_zoom: 1,
  p3_zoom: 1,
  p4_zoom: 1,
  p5_zoom: 1,
  p6_zoom: 1,
  p1_corner4: '',
  p1_variant: 'A',
  p1_callout_title: 'Qualidade garantida:',
  p1_callout_text: 'Produto com nota fiscal e suporte técnico incluso.',
  p1e_spot: {
    img: '',
    x: 60,
    y: 58,
    size: 340
  },
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
  bg_foto6: 'assets/bg-foto6.png'
};

/* =============================================================
   AUTO-GENERATE: dado N fotos, gera os crops para os 5 templates
   ============================================================= */
function autoGenerate(_x) {
  return _autoGenerate.apply(this, arguments);
} // ---------------------------------------------------------------------------
// Helpers para gpt-image-1
// ---------------------------------------------------------------------------
function _autoGenerate() {
  _autoGenerate = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(uploadedDataUrls) {
    var out, src, src2, crops;
    return _regenerator().w(function (_context13) {
      while (1) switch (_context13.n) {
        case 0:
          out = {};
          if (uploadedDataUrls.length) {
            _context13.n = 1;
            break;
          }
          return _context13.a(2, out);
        case 1:
          src = uploadedDataUrls[0];
          src2 = uploadedDataUrls[1] || src; // mainImg = fallback global (mantido para compatibilidade)
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
          _context13.n = 2;
          return makeCircleCrops(src);
        case 2:
          crops = _context13.v;
          out.p1_circles = crops.map(function (img) {
            return {
              img: img
            };
          });
          out.p1_corner4 = src2;
          return _context13.a(2, out);
      }
    }, _callee13);
  }));
  return _autoGenerate.apply(this, arguments);
}
function dataUrlToBlob(dataUrl) {
  var _dataUrl$split = dataUrl.split(','),
    _dataUrl$split2 = _slicedToArray(_dataUrl$split, 2),
    hdr = _dataUrl$split2[0],
    b64 = _dataUrl$split2[1];
  var mime = hdr.match(/:(.*?);/)[1];
  var bin = atob(b64);
  var arr = new Uint8Array(bin.length);
  for (var i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return new Blob([arr], {
    type: mime
  });
}
function toPngBlob(_x2) {
  return _toPngBlob.apply(this, arguments);
}
function _toPngBlob() {
  _toPngBlob = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(dataUrl) {
    var maxPx,
      _args14 = arguments;
    return _regenerator().w(function (_context14) {
      while (1) switch (_context14.n) {
        case 0:
          maxPx = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : 1024;
          return _context14.a(2, new Promise(function (resolve) {
            var img = new Image();
            img.onload = function () {
              var scale = Math.min(1, maxPx / Math.max(img.naturalWidth, img.naturalHeight));
              var w = Math.round(img.naturalWidth * scale);
              var h = Math.round(img.naturalHeight * scale);
              var c = document.createElement('canvas');
              c.width = w;
              c.height = h;
              c.getContext('2d').drawImage(img, 0, 0, w, h);
              c.toBlob(resolve, 'image/png');
            };
            img.src = dataUrl;
          }));
      }
    }, _callee14);
  }));
  return _toPngBlob.apply(this, arguments);
}
function callGptImage1(_x3, _x4) {
  return _callGptImage.apply(this, arguments);
} // ---------------------------------------------------------------------------
// Prompts por slot — editáveis e salvos no localStorage
// ---------------------------------------------------------------------------
function _callGptImage() {
  _callGptImage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(imageDataUrl, prompt) {
    var key, blob, form, resp, _err$error, err, json;
    return _regenerator().w(function (_context15) {
      while (1) switch (_context15.n) {
        case 0:
          key = (window.OPENAI_API_KEY || localStorage.getItem('openai_api_key') || '').trim();
          if (key) {
            _context15.n = 1;
            break;
          }
          throw new Error('Configure sua chave OpenAI primeiro.');
        case 1:
          _context15.n = 2;
          return toPngBlob(imageDataUrl, 1024);
        case 2:
          blob = _context15.v;
          form = new FormData();
          form.append('model', 'gpt-image-1-mini');
          form.append('image', blob, 'product.png');
          form.append('prompt', prompt);
          form.append('n', '1');
          form.append('size', '1024x1024');
          form.append('quality', 'medium');
          _context15.n = 3;
          return fetch('https://api.openai.com/v1/images/edits', {
            method: 'POST',
            headers: {
              Authorization: "Bearer ".concat(key)
            },
            body: form
          });
        case 3:
          resp = _context15.v;
          if (resp.ok) {
            _context15.n = 5;
            break;
          }
          _context15.n = 4;
          return resp.json();
        case 4:
          err = _context15.v;
          throw new Error(((_err$error = err.error) === null || _err$error === void 0 ? void 0 : _err$error.message) || "OpenAI ".concat(resp.status));
        case 5:
          _context15.n = 6;
          return resp.json();
        case 6:
          json = _context15.v;
          return _context15.a(2, "data:image/png;base64,".concat(json.data[0].b64_json));
      }
    }, _callee15);
  }));
  return _callGptImage.apply(this, arguments);
}
var LS_PROMPTS_KEY = 'gerarml_prompts';
var DEFAULT_PROMPTS = {
  // Foto 1 — hero estúdio fundo branco
  1: "Professional e-commerce studio photography. Pure white background, soft even lighting, subtle ground shadow. Product perfectly centered, full product visible, ultra high resolution. No text, no watermark, no props.",
  // Foto 2 — produto + 2 miniaturas de close geradas num único shot
  2: "Professional product photography on white background. Show the main product centered and large. In the bottom-left and bottom-right corners, include two small circular inset close-up details of important product parts (labeled \"Detail 1\" and \"Detail 2\"), each with an orange border. Clean studio lighting, no text captions, no watermark.",
  // Foto 3 — mesma foto da foto 1 (hero) — reutiliza sem chamada de API
  // (não tem prompt, foto 3 copia mainImg da foto 1)

  // Foto 4 — lifestyle produto em uso
  4: "Lifestyle product photography. The product is shown in real-world use in a natural, professional environment relevant to its purpose. Warm natural lighting, shallow depth of field, person interacting with the product. Photorealistic, high quality. No text, no watermark."
};
function loadPrompts() {
  try {
    var saved = localStorage.getItem(LS_PROMPTS_KEY);
    if (saved) return _objectSpread(_objectSpread({}, DEFAULT_PROMPTS), JSON.parse(saved));
  } catch (_) {}
  return _objectSpread({}, DEFAULT_PROMPTS);
}
function savePrompts(p) {
  try {
    localStorage.setItem(LS_PROMPTS_KEY, JSON.stringify(p));
  } catch (_) {}
}
var _activePrompts = loadPrompts();
function getPrompt(key) {
  return _activePrompts[key] || DEFAULT_PROMPTS[key] || '';
}
function setPromptAndSave(key, value) {
  _activePrompts = _objectSpread(_objectSpread({}, _activePrompts), {}, _defineProperty({}, key, value));
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
function generatePhotoWithAI(_x5, _x6) {
  return _generatePhotoWithAI.apply(this, arguments);
} // Carrega imagem e retorna 3 crops zoom de regiões diferentes
function _generatePhotoWithAI() {
  _generatePhotoWithAI = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(slotNum, sourceImgs) {
    var src, img, _img, _img2;
    return _regenerator().w(function (_context16) {
      while (1) switch (_context16.n) {
        case 0:
          src = sourceImgs[0];
          if (src) {
            _context16.n = 1;
            break;
          }
          throw new Error('Suba pelo menos 1 foto do produto primeiro.');
        case 1:
          if (!(slotNum === 1)) {
            _context16.n = 3;
            break;
          }
          _context16.n = 2;
          return callGptImage1(src, getPrompt(1));
        case 2:
          img = _context16.v;
          return _context16.a(2, {
            p1_img: img
          });
        case 3:
          if (!(slotNum === 2)) {
            _context16.n = 5;
            break;
          }
          _context16.n = 4;
          return callGptImage1(src, getPrompt(2));
        case 4:
          _img = _context16.v;
          return _context16.a(2, {
            p2_img: _img
          });
        case 5:
          if (!(slotNum === 3)) {
            _context16.n = 6;
            break;
          }
          return _context16.a(2, {});
        case 6:
          if (!(slotNum === 4)) {
            _context16.n = 8;
            break;
          }
          _context16.n = 7;
          return callGptImage1(src, getPrompt(4));
        case 7:
          _img2 = _context16.v;
          return _context16.a(2, {
            p5_lifestyle: _img2,
            p6_lifestyle: _img2
          });
        case 8:
          return _context16.a(2, {});
      }
    }, _callee16);
  }));
  return _generatePhotoWithAI.apply(this, arguments);
}
function makeCircleCrops(dataUrl) {
  return new Promise(function (resolve) {
    var img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function () {
      var w = img.naturalWidth;
      var h = img.naturalHeight;
      // 3 regiões: terço esquerdo, centro, terço direito
      var regions = [{
        x: 0,
        y: h * 0.15,
        w: w * 0.45,
        h: h * 0.6
      }, {
        x: w * 0.27,
        y: h * 0.05,
        w: w * 0.45,
        h: h * 0.6
      }, {
        x: w * 0.55,
        y: h * 0.15,
        w: w * 0.45,
        h: h * 0.6
      }];
      var crops = regions.map(function (r) {
        var c = document.createElement('canvas');
        c.width = 400;
        c.height = 400;
        var ctx = c.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, 400, 400);
        // sample square: the smaller of r.w/r.h
        var side = Math.min(r.w, r.h);
        var sx = r.x + (r.w - side) / 2;
        var sy = r.y + (r.h - side) / 2;
        ctx.drawImage(img, sx, sy, side, side, 0, 0, 400, 400);
        return c.toDataURL('image/png');
      });
      resolve(crops);
    };
    img.onerror = function () {
      return resolve(['', '', '']);
    };
    img.src = dataUrl;
  });
}

/* ============== Slot wrapper ============== */
function Slot(_ref) {
  var num = _ref.num,
    title = _ref.title,
    children = _ref.children,
    productName = _ref.productName,
    bg = _ref.bg,
    extra = _ref.extra,
    toolbar = _ref.toolbar;
  var wrapRef = useRef(null);
  var canvasRef = useRef(null);
  var _useState = useState(0.4),
    _useState2 = _slicedToArray(_useState, 2),
    scale = _useState2[0],
    setScale = _useState2[1];
  useEffect(function () {
    var update = function update() {
      if (!wrapRef.current) return;
      setScale(wrapRef.current.clientWidth / 1200);
    };
    update();
    var ro = new ResizeObserver(update);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return function () {
      return ro.disconnect();
    };
  }, []);
  var handleExport = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var filename;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (canvasRef.current) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            filename = "".concat((productName || 'produto').replace(/\s+/g, '-').toLowerCase(), "-foto-").concat(num, ".png");
            _context.n = 2;
            return MLExport(canvasRef.current, filename);
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function handleExport() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "slot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "slot-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "slot-num"
  }, "Foto ", /*#__PURE__*/React.createElement("b", null, num), " \xB7 ", title), /*#__PURE__*/React.createElement("div", {
    className: "slot-actions"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleExport,
    title: "Baixar PNG 1200\xD71540"
  }, "\u2193 PNG"))), toolbar && /*#__PURE__*/React.createElement("div", {
    "data-export-hide": "true",
    style: {
      marginBottom: 2
    }
  }, toolbar), extra && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 6
    }
  }, extra), /*#__PURE__*/React.createElement("div", {
    className: "canvas-wrap",
    ref: wrapRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: canvasRef,
    className: "canvas",
    style: {
      transform: "scale(".concat(scale, ")"),
      position: 'relative'
    }
  }, bg && /*#__PURE__*/React.createElement("img", {
    src: bg,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 0,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      width: '100%',
      height: '100%'
    }
  }, children))));
}

/* ============== AI Text generation — Claude (Anthropic) ============== */
function generateTextsWithAI(_x7, _x8, _x9) {
  return _generateTextsWithAI.apply(this, arguments);
}
/* ============== Botão de geração IA por slot com editor de prompt ============== */
function _generateTextsWithAI() {
  _generateTextsWithAI = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(productName, category, extras) {
    var key, prompt, resp, _err$error2, err, data, text, m;
    return _regenerator().w(function (_context17) {
      while (1) switch (_context17.n) {
        case 0:
          // Usa API da Anthropic direto — sem necessidade de chave OpenAI do usuário
          key = ''; // chave injetada pelo proxy do servidor
          prompt = "Voc\xEA gera textos de marketing para an\xFAncios de Mercado Livre em PT-BR.\nProduto: \"".concat(productName, "\"\nCategoria: \"").concat(category || 'produto', "\"\nDetalhes extras: \"").concat(extras || 'nenhum', "\"\n\nGere um JSON (APENAS o JSON, sem markdown, sem coment\xE1rios) com EXATAMENTE estas chaves. Textos curtos, diretos, em portugu\xEAs brasileiro. Use linguagem persuasiva mas t\xE9cnica:\n\n{\n  \"p2_f1_title\": \"t\xEDtulo de 1-3 palavras com dois pontos no fim\",\n  \"p2_f1_text\": \"frase curta 6-10 palavras\",\n  \"p2_f2_title\": \"t\xEDtulo de 1-3 palavras com dois pontos\",\n  \"p2_f2_text\": \"frase curta 6-10 palavras\",\n  \"p2_f3_title\": \"t\xEDtulo de 1-3 palavras com dois pontos\",\n  \"p2_f3_text\": \"frase curta 6-10 palavras\",\n  \"p2_callout_title\": \"t\xEDtulo de aplica\xE7\xE3o/uso 4-6 palavras com dois pontos\",\n  \"p2_callout_text\": \"frase 8-12 palavras explicando aplica\xE7\xE3o\",\n  \"p3_title_a\": \"primeira palavra do t\xEDtulo principal MAI\xDASCULA\",\n  \"p3_title_b\": \"segunda palavra MAI\xDASCULA (highlight verde)\",\n  \"p3_title_c\": \"frase complementar 2-4 palavras MAI\xDASCULAS\",\n  \"p3_title_pill\": \"valor num\xE9rico+unidade ex 900KG ou 5 ANOS\",\n  \"p3_f1_title\": \"t\xEDtulo de fixa\xE7\xE3o/montagem com dois pontos\",\n  \"p3_f1_text\": \"frase curta 6-10 palavras\",\n  \"p3_f2_title\": \"t\xEDtulo de caracter\xEDstica estrutural com dois pontos\",\n  \"p3_f2_text\": \"frase curta 6-10 palavras\",\n  \"p3_dim1\": \"dimens\xE3o1 ex 60cm\",\n  \"p3_dim2\": \"dimens\xE3o2 ex 10cm\",\n  \"p3_dim3\": \"dimens\xE3o3 ex 52cm\",\n  \"p3_callout_title\": \"t\xEDtulo funcionamento com dois pontos\",\n  \"p3_callout_text\": \"frase 8-12 palavras\",\n  \"p4_title_a\": \"primeira palavra MAI\xDASCULA\",\n  \"p4_title_b\": \"palavra-chave MAI\xDASCULA (highlight verde)\",\n  \"p4_title_c\": \"palavra liga\xE7\xE3o MAI\xDASCULA\",\n  \"p4_title_pill\": \"benef\xEDcio final MAI\xDASCULAS curtas\",\n  \"p4_b1_title\": \"qualificador profissional com dois pontos\",\n  \"p4_b1_text\": \"frase 6-10 palavras\",\n  \"p4_b2_title\": \"qualificador qualidade com dois pontos\",\n  \"p4_b2_text\": \"frase 6-10 palavras\",\n  \"p4_callout_title\": \"t\xEDtulo suporte/extra com dois pontos\",\n  \"p4_callout_text\": \"frase 8-12 palavras\"\n}");
          _context17.n = 1;
          return fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              model: 'claude-sonnet-4-20250514',
              max_tokens: 1200,
              messages: [{
                role: 'user',
                content: prompt
              }]
            })
          });
        case 1:
          resp = _context17.v;
          if (resp.ok) {
            _context17.n = 3;
            break;
          }
          _context17.n = 2;
          return resp.json()["catch"](function () {
            return {};
          });
        case 2:
          err = _context17.v;
          throw new Error(((_err$error2 = err.error) === null || _err$error2 === void 0 ? void 0 : _err$error2.message) || 'Erro na geração de textos (Claude). Tente novamente.');
        case 3:
          _context17.n = 4;
          return resp.json();
        case 4:
          data = _context17.v;
          text = (data.content || []).map(function (b) {
            return b.text || '';
          }).join('');
          m = text.match(/\{[\s\S]*\}/);
          if (m) {
            _context17.n = 5;
            break;
          }
          throw new Error('Resposta sem JSON válido');
        case 5:
          return _context17.a(2, JSON.parse(m[0]));
      }
    }, _callee17);
  }));
  return _generateTextsWithAI.apply(this, arguments);
}
function AIGenBtn(_ref3) {
  var slotNum = _ref3.slotNum,
    rawImgs = _ref3.rawImgs,
    onResult = _ref3.onResult,
    label = _ref3.label,
    title = _ref3.title,
    promptKeys = _ref3.promptKeys;
  var _React$useState = React.useState('idle'),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    status = _React$useState2[0],
    setStatus = _React$useState2[1];
  var _React$useState3 = React.useState(''),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    msg = _React$useState4[0],
    setMsg = _React$useState4[1];
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    open = _React$useState6[0],
    setOpen = _React$useState6[1];
  // Estado local dos prompts editados (inicializa do _activePrompts)
  var _React$useState7 = React.useState(function () {
      return Object.fromEntries((promptKeys || []).map(function (k) {
        return [k, getPrompt(k)];
      }));
    }),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    drafts = _React$useState8[0],
    setDrafts = _React$useState8[1];
  var _React$useState9 = React.useState(false),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    saved = _React$useState0[0],
    setSaved = _React$useState0[1];
  var handleSave = function handleSave() {
    (promptKeys || []).forEach(function (k) {
      return setPromptAndSave(k, drafts[k]);
    });
    setSaved(true);
    setTimeout(function () {
      return setSaved(false);
    }, 1800);
  };
  var handleReset = function handleReset() {
    var reset = Object.fromEntries((promptKeys || []).map(function (k) {
      return [k, DEFAULT_PROMPTS[k] || ''];
    }));
    setDrafts(reset);
    (promptKeys || []).forEach(function (k) {
      return setPromptAndSave(k, DEFAULT_PROMPTS[k] || '');
    });
    setSaved(true);
    setTimeout(function () {
      return setSaved(false);
    }, 1800);
  };
  var run = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var patch, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!(!rawImgs || rawImgs.length === 0)) {
              _context2.n = 1;
              break;
            }
            setMsg('Suba pelo menos 1 foto primeiro.');
            setStatus('error');
            setTimeout(function () {
              return setStatus('idle');
            }, 3000);
            return _context2.a(2);
          case 1:
            setStatus('loading');
            setMsg('');
            _context2.p = 2;
            _context2.n = 3;
            return generatePhotoWithAI(slotNum, rawImgs);
          case 3:
            patch = _context2.v;
            onResult(patch);
            setStatus('done');
            setMsg('✓ Aplicado!');
            setTimeout(function () {
              return setStatus('idle');
            }, 2500);
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t = _context2.v;
            setStatus('error');
            setMsg(_t.message);
            setTimeout(function () {
              return setStatus('idle');
            }, 5000);
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 4]]);
    }));
    return function run() {
      return _ref4.apply(this, arguments);
    };
  }();
  var colors = {
    idle: {
      bg: '#f0fdf9',
      border: '#6ee7b7',
      color: '#065f46'
    },
    loading: {
      bg: '#e6f9f4',
      border: '#6ee7b7',
      color: '#065f46'
    },
    done: {
      bg: '#dcfce7',
      border: '#86efac',
      color: '#14532d'
    },
    error: {
      bg: '#fef2f2',
      border: '#fca5a5',
      color: '#991b1b'
    }
  };
  var c = colors[status];
  var LABELS = {
    1: 'Estúdio (foto 1)',
    2: 'Produto + 2 closes (foto 2)',
    4: 'Lifestyle (foto 4)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: run,
    disabled: status === 'loading',
    title: title,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      padding: '5px 12px',
      border: "1px solid ".concat(c.border),
      borderRadius: 7,
      background: c.bg,
      color: c.color,
      fontSize: 11,
      fontWeight: 700,
      cursor: status === 'loading' ? 'wait' : 'pointer',
      whiteSpace: 'nowrap'
    }
  }, status === 'loading' ? '⏳' : '✦', " ", status === 'loading' ? 'Gerando…' : label), promptKeys && promptKeys.length > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setOpen(function (v) {
        return !v;
      });
    },
    title: "Editar prompts desta gera\xE7\xE3o",
    style: {
      padding: '5px 8px',
      border: '1px solid #e5e7eb',
      borderRadius: 7,
      background: open ? '#f3f4f6' : 'white',
      fontSize: 11,
      cursor: 'pointer',
      color: open ? '#374151' : '#9ca3af',
      fontWeight: 600
    }
  }, open ? '▲ prompt' : '▼ prompt'), msg && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: c.color,
      fontWeight: 500
    }
  }, msg)), open && promptKeys && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#f9fafb',
      border: '1px solid #e5e7eb',
      borderRadius: 10,
      padding: '12px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, promptKeys.map(function (k) {
    return /*#__PURE__*/React.createElement("div", {
      key: k
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        color: '#6b7280',
        marginBottom: 4,
        textTransform: 'uppercase',
        letterSpacing: '.05em'
      }
    }, LABELS[k] || k, drafts[k] !== DEFAULT_PROMPTS[k] && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        color: '#f59e0b',
        fontSize: 10
      }
    }, "\u25CF editado")), /*#__PURE__*/React.createElement("textarea", {
      value: drafts[k] || '',
      onChange: function onChange(e) {
        return setDrafts(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, k, e.target.value));
        });
      },
      rows: 3,
      style: {
        width: '100%',
        padding: '8px 10px',
        border: '1px solid #d1d5db',
        borderRadius: 7,
        fontSize: 12,
        fontFamily: 'ui-monospace, monospace',
        resize: 'vertical',
        lineHeight: 1.5,
        color: '#111827'
      }
    }));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleReset,
    style: {
      padding: '5px 12px',
      border: '1px solid #e5e7eb',
      borderRadius: 6,
      background: 'white',
      fontSize: 11,
      fontWeight: 600,
      cursor: 'pointer',
      color: '#6b7280'
    }
  }, "Restaurar padr\xE3o"), /*#__PURE__*/React.createElement("button", {
    onClick: handleSave,
    style: {
      padding: '5px 14px',
      border: '1px solid #6ee7b7',
      borderRadius: 6,
      background: saved ? '#dcfce7' : '#f0fdf9',
      fontSize: 11,
      fontWeight: 700,
      cursor: 'pointer',
      color: '#065f46'
    }
  }, saved ? '✓ Salvo!' : '💾 Salvar prompt'))));
}

/* ============== Clipboard de imagem entre slots ============== */
// clipboard global — objeto simples, não precisa de estado React
window._imgClipboard = null;
function ClipboardBar(_ref5) {
  var onCopy = _ref5.onCopy,
    onPaste = _ref5.onPaste,
    hasImg = _ref5.hasImg;
  var _React$useState1 = React.useState(''),
    _React$useState10 = _slicedToArray(_React$useState1, 2),
    flash = _React$useState10[0],
    setFlash = _React$useState10[1]; // 'copied' | 'pasted' | ''

  var copy = function copy() {
    onCopy();
    setFlash('copied');
    setTimeout(function () {
      return setFlash('');
    }, 1800);
  };
  var paste = function paste() {
    if (!window._imgClipboard) return;
    onPaste(window._imgClipboard);
    setFlash('pasted');
    setTimeout(function () {
      return setFlash('');
    }, 1800);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: copy,
    disabled: !hasImg,
    title: "Copiar imagem deste slot",
    style: {
      padding: '4px 10px',
      border: '1px solid #e5e7eb',
      borderRadius: 6,
      background: flash === 'copied' ? '#dcfce7' : 'white',
      fontSize: 11,
      fontWeight: 600,
      cursor: hasImg ? 'pointer' : 'not-allowed',
      color: hasImg ? '#374151' : '#d1d5db',
      whiteSpace: 'nowrap'
    }
  }, flash === 'copied' ? '✓ Copiado' : '⎘ Copiar'), /*#__PURE__*/React.createElement("button", {
    onClick: paste,
    disabled: !window._imgClipboard,
    title: "Colar imagem copiada neste slot",
    style: {
      padding: '4px 10px',
      border: '1px solid #e5e7eb',
      borderRadius: 6,
      background: flash === 'pasted' ? '#dbeafe' : 'white',
      fontSize: 11,
      fontWeight: 600,
      cursor: window._imgClipboard ? 'pointer' : 'not-allowed',
      color: window._imgClipboard ? '#374151' : '#d1d5db',
      whiteSpace: 'nowrap'
    }
  }, flash === 'pasted' ? '✓ Colado' : '⎘ Colar'));
}

/* ============== Barra de zoom do produto por slot ============== */
function ZoomBar(_ref6) {
  var value = _ref6.value,
    _onChange = _ref6.onChange;
  var pct = Math.round((value || 1) * 100);
  var step = 0.05;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: '#f0f0f0',
      padding: '4px 8px',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return _onChange(Math.max(0.1, +(value - step).toFixed(2)));
    },
    style: {
      width: 28,
      height: 28,
      border: 0,
      borderRadius: 6,
      background: 'white',
      fontSize: 16,
      fontWeight: 700,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      color: '#444',
      boxShadow: '0 1px 2px rgba(0,0,0,.08)'
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "10",
    max: "400",
    step: "5",
    value: pct,
    onChange: function onChange(e) {
      return _onChange(+(+e.target.value / 100).toFixed(2));
    },
    style: {
      width: 80,
      accentColor: '#1F7A3A'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return _onChange(Math.min(4, +(value + step).toFixed(2)));
    },
    style: {
      width: 28,
      height: 28,
      border: 0,
      borderRadius: 6,
      background: 'white',
      fontSize: 16,
      fontWeight: 700,
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      color: '#444',
      boxShadow: '0 1px 2px rgba(0,0,0,.08)'
    }
  }, "+"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: '#666',
      minWidth: 34,
      textAlign: 'right'
    }
  }, pct, "%"), pct !== 100 && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return _onChange(1);
    },
    style: {
      fontSize: 10,
      fontWeight: 600,
      border: '1px solid #ddd',
      borderRadius: 5,
      background: 'white',
      color: '#999',
      padding: '2px 6px',
      cursor: 'pointer'
    }
  }, "reset"));
}

/* ============== Seletor de variante de capa ============== */
function VariantPicker(_ref7) {
  var value = _ref7.value,
    onChange = _ref7.onChange;
  var variants = [{
    id: 'A',
    label: '3 círculos'
  }, {
    id: 'E',
    label: '1 círculo'
  }, {
    id: 'C',
    label: 'Só produto'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      background: '#f0f0f0',
      padding: 3,
      borderRadius: 8
    }
  }, variants.map(function (v) {
    return /*#__PURE__*/React.createElement("button", {
      key: v.id,
      onClick: function onClick() {
        return onChange(v.id);
      },
      style: {
        flex: 1,
        padding: '5px 0',
        border: 0,
        borderRadius: 6,
        fontSize: 11,
        fontWeight: 700,
        cursor: 'pointer',
        background: value === v.id ? '#1F7A3A' : 'transparent',
        color: value === v.id ? 'white' : '#666',
        boxShadow: value === v.id ? '0 1px 3px rgba(0,0,0,.15)' : 'none',
        transition: 'all .12s'
      }
    }, v.label);
  }));
}

/* ============== OpenAI API Key Banner ============== */
function OpenAIKeyBanner(_ref8) {
  var apiKey = _ref8.apiKey,
    setApiKey = _ref8.setApiKey;
  var _React$useState11 = React.useState(!apiKey),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    editing = _React$useState12[0],
    setEditing = _React$useState12[1];
  var _React$useState13 = React.useState(apiKey || ''),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    draft = _React$useState14[0],
    setDraft = _React$useState14[1];
  var save = function save() {
    var v = draft.trim();
    localStorage.setItem('openai_api_key', v);
    window.OPENAI_API_KEY = v;
    setApiKey(v);
    setEditing(false);
  };
  var clear = function clear() {
    localStorage.removeItem('openai_api_key');
    window.OPENAI_API_KEY = '';
    setApiKey('');
    setDraft('');
    setEditing(true);
  };
  if (!editing && apiKey) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 920,
        margin: '0 auto 16px',
        background: '#f0fdf9',
        border: '1px solid #6ee7b7',
        borderRadius: 12,
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18
      }
    }, "\u2726"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'Montserrat',
        fontWeight: 800,
        fontSize: 13,
        color: '#065f46'
      }
    }, "OpenAI conectada"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: '#6b7280'
      }
    }, "sk-...", apiKey.slice(-6), " \xB7 melhorias de imagem via OpenAI ativas (opcional)"))), /*#__PURE__*/React.createElement("button", {
      onClick: clear,
      style: {
        padding: '6px 12px',
        border: '1px solid #6ee7b7',
        borderRadius: 7,
        background: 'white',
        fontSize: 12,
        fontWeight: 600,
        cursor: 'pointer',
        color: '#6b7280'
      }
    }, "Trocar chave"));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 920,
      margin: '0 auto 16px',
      background: '#fff',
      border: '2px dashed #6ee7b7',
      borderRadius: 12,
      padding: '20px 24px',
      boxShadow: '0 4px 16px rgba(0,0,0,.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 800,
      fontSize: 15,
      marginBottom: 4
    }
  }, "\u2726 Configure sua chave OpenAI"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#6b7280',
      marginBottom: 14
    }
  }, "Necess\xE1ria para gera\xE7\xE3o de textos com IA e melhorias de imagem. A chave fica salva localmente no navegador e nunca \xE9 enviada para servidores externos \u2014 s\xF3 vai direto para a OpenAI."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "password",
    placeholder: "sk-proj-...",
    value: draft,
    onChange: function onChange(e) {
      return setDraft(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Enter' && save();
    },
    style: {
      flex: 1,
      padding: '10px 14px',
      border: '1px solid #d1fae5',
      borderRadius: 8,
      fontSize: 13,
      fontFamily: 'monospace',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: save,
    disabled: !draft.trim().startsWith('sk-'),
    style: {
      padding: '10px 20px',
      background: '#10a37f',
      color: 'white',
      border: 0,
      borderRadius: 8,
      fontSize: 13,
      fontWeight: 700,
      cursor: draft.trim().startsWith('sk-') ? 'pointer' : 'not-allowed',
      opacity: draft.trim().startsWith('sk-') ? 1 : 0.5
    }
  }, "Salvar")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#9ca3af',
      marginTop: 8
    }
  }, "Obtenha em ", /*#__PURE__*/React.createElement("a", {
    href: "https://platform.openai.com/api-keys",
    target: "_blank",
    style: {
      color: '#10a37f'
    }
  }, "platform.openai.com/api-keys")));
}

/* ============== Upload zone ============== */
function UploadZone(_ref9) {
  var onGenerate = _ref9.onGenerate,
    productName = _ref9.productName,
    setProductName = _ref9.setProductName,
    onRawFiles = _ref9.onRawFiles;
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    files = _useState4[0],
    setFiles = _useState4[1];
  var _useState5 = useState('Ferramentas'),
    _useState6 = _slicedToArray(_useState5, 2),
    category = _useState6[0],
    setCategory = _useState6[1];
  var _useState7 = useState(''),
    _useState8 = _slicedToArray(_useState7, 2),
    extras = _useState8[0],
    setExtras = _useState8[1];
  var _useState9 = useState(false),
    _useState0 = _slicedToArray(_useState9, 2),
    aiLoading = _useState0[0],
    setAiLoading = _useState0[1];
  var _useState1 = useState(''),
    _useState10 = _slicedToArray(_useState1, 2),
    aiStatus = _useState10[0],
    setAiStatus = _useState10[1];
  var inputRef = useRef(null);

  // Carrega arquivos, converte para dataURL e aplica imagens imediatamente
  var handleFiles = function handleFiles(list) {
    var arr = Array.from(list).slice(0, 5);
    Promise.all(arr.map(function (f) {
      return new Promise(function (res) {
        var r = new FileReader();
        r.onload = function (e) {
          return res(e.target.result);
        };
        r.readAsDataURL(f);
      });
    })).then(/*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(urls) {
        var merged, imgPatch;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              merged = [].concat(_toConsumableArray(files), _toConsumableArray(urls)).slice(0, 5);
              setFiles(merged);
              if (onRawFiles) onRawFiles(merged);
              // Aplica imagens direto, sem precisar clicar em nada
              _context3.n = 1;
              return autoGenerate(merged);
            case 1:
              imgPatch = _context3.v;
              if (Object.keys(imgPatch).length > 0) onGenerate(imgPatch);
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }));
      return function (_x0) {
        return _ref0.apply(this, arguments);
      };
    }());
  };
  var removeFile = function removeFile(i) {
    var next = files.filter(function (_, j) {
      return j !== i;
    });
    setFiles(next);
    // Reaplicar com as fotos restantes
    if (next.length > 0) autoGenerate(next).then(function (patch) {
      return onGenerate(patch);
    });
    if (onRawFiles) onRawFiles(next);
  };
  var runAI = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var aiPatch, _t2;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            if (productName !== null && productName !== void 0 && productName.trim()) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2);
          case 1:
            setAiLoading(true);
            setAiStatus('🤖 IA gerando títulos e textos...');
            _context4.p = 2;
            _context4.n = 3;
            return generateTextsWithAI(productName, category, extras);
          case 3:
            aiPatch = _context4.v;
            onGenerate(aiPatch);
            setAiStatus('✅ Textos aplicados!');
            _context4.n = 5;
            break;
          case 4:
            _context4.p = 4;
            _t2 = _context4.v;
            setAiStatus('❌ ' + _t2.message);
          case 5:
            _context4.p = 5;
            setAiLoading(false);
            setTimeout(function () {
              return setAiStatus('');
            }, 4000);
            return _context4.f(5);
          case 6:
            return _context4.a(2);
        }
      }, _callee4, null, [[2, 4, 5, 6]]);
    }));
    return function runAI() {
      return _ref1.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "uploader"
  }, /*#__PURE__*/React.createElement("h2", null, "\uD83D\uDCF8 Fotos do produto"), /*#__PURE__*/React.createElement("p", null, "Arraste ou selecione as fotos \u2014 elas s\xE3o aplicadas automaticamente nos templates. Para gerar os textos com IA, preencha o nome e clique em \"Gerar textos\"."), /*#__PURE__*/React.createElement("div", {
    className: "drop",
    onClick: function onClick() {
      return inputRef.current.click();
    },
    onDragOver: function onDragOver(e) {
      e.preventDefault();
      e.currentTarget.classList.add('dragover');
    },
    onDragLeave: function onDragLeave(e) {
      return e.currentTarget.classList.remove('dragover');
    },
    onDrop: function onDrop(e) {
      e.preventDefault();
      e.currentTarget.classList.remove('dragover');
      handleFiles(e.dataTransfer.files);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: '#666'
    }
  }, files.length === 0 ? 'Clique ou arraste as fotos aqui (até 5)' : "".concat(files.length, " foto(s) \u2014 clique para adicionar mais")), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "file",
    accept: "image/*",
    multiple: true,
    style: {
      display: 'none'
    },
    onChange: function onChange(e) {
      return handleFiles(e.target.files);
    }
  })), files.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "drop-grid"
  }, files.map(function (url, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "drop-thumb",
      style: {
        backgroundImage: "url(".concat(url, ")")
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "drop-thumb-rm",
      onClick: function onClick(e) {
        e.stopPropagation();
        removeFile(i);
      }
    }, "\xD7"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 4,
        left: 4,
        background: 'rgba(0,0,0,.7)',
        color: 'white',
        fontSize: 10,
        padding: '2px 6px',
        borderRadius: 4,
        fontWeight: 600
      }
    }, i === 0 ? 'principal' : i === 2 ? 'lifestyle' : "extra ".concat(i)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      paddingTop: 16,
      borderTop: '1px solid #eee'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: '#1a1a1a',
      marginBottom: 10
    }
  }, "\uD83E\uDD16 Gerar textos com IA ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: '#888',
      fontSize: 12
    }
  }, "(opcional)")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nome do produto",
    value: productName,
    onChange: setProductName
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Categoria",
    value: category,
    onChange: setCategory
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Detalhes t\xE9cnicos (dimens\xF5es, material, capacidade...)",
    value: extras,
    onChange: setExtras,
    multi: true
  }), aiStatus && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '10px 0',
      padding: '10px 14px',
      background: aiLoading ? '#FFF8E1' : '#E8F3EC',
      border: "1px solid ".concat(aiLoading ? '#FFE9A8' : '#A0E548'),
      borderRadius: 8,
      fontSize: 13,
      fontWeight: 500,
      color: aiLoading ? '#8B6F00' : '#1F7A3A'
    }
  }, aiStatus), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn primary",
    disabled: aiLoading || !(productName !== null && productName !== void 0 && productName.trim()),
    onClick: runAI
  }, aiLoading ? 'Gerando...' : '✨ Gerar textos (IA)'))));
}

/* ============== Tweaks panel ============== */
function TweaksUI(_ref10) {
  var data = _ref10.data,
    set = _ref10.set,
    productName = _ref10.productName,
    setProductName = _ref10.setProductName,
    storeName = _ref10.storeName,
    setStoreName = _ref10.setStoreName,
    onClose = _ref10.onClose;
  var _useState11 = useState('imgs'),
    _useState12 = _slicedToArray(_useState11, 2),
    tab = _useState12[0],
    setTab = _useState12[1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 20,
      top: 20,
      bottom: 20,
      width: 340,
      background: '#fff',
      borderRadius: 14,
      boxShadow: '0 20px 60px rgba(0,0,0,.20)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1000,
      fontFamily: 'Inter, sans-serif'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      borderBottom: '1px solid #eee',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 800,
      fontSize: 15
    }
  }, "Tweaks"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#888'
    }
  }, "Edite tudo aqui ou direto nas fotos")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      border: 0,
      background: '#f0f0f0',
      borderRadius: 6,
      width: 28,
      height: 28,
      cursor: 'pointer',
      fontSize: 16
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tw-tabs"
  }, ['imgs', 'text', 'meta'].map(function (id) {
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      className: "tw-tab ".concat(tab === id ? 'active' : ''),
      onClick: function onClick() {
        return setTab(id);
      }
    }, id === 'imgs' ? 'Imagens' : id === 'text' ? 'Textos' : 'Geral');
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '12px 20px 20px'
    }
  }, tab === 'meta' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    label: "Nome do produto",
    value: productName,
    onChange: setProductName
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Nome da loja",
    value: storeName,
    onChange: function onChange(v) {
      setStoreName(v);
      set('p5_store_name', v);
    }
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Iniciais do logo",
    value: data.p5_logo_letters,
    onChange: function onChange(v) {
      return set('p5_logo_letters', v);
    },
    maxLength: 3
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Selo MercadoL\xEDder",
    value: data.p5_badge,
    onChange: function onChange(v) {
      return set('p5_badge', v);
    }
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Vendas (+5mil)",
    value: data.p5_stat1_v,
    onChange: function onChange(v) {
      return set('p5_stat1_v', v);
    }
  }), /*#__PURE__*/React.createElement(Hint, null, "Voc\xEA tamb\xE9m pode clicar direto no texto da foto para editar in-loco.")), tab === 'imgs' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ImgField, {
    label: "Imagem principal (fallback)",
    value: data.mainImg,
    onChange: function onChange(v) {
      return set('mainImg', v);
    }
  }), /*#__PURE__*/React.createElement(ImgField, {
    label: "Foto 1 \u2014 Detalhe esquerdo",
    value: data.p1_circles[0].img,
    onChange: function onChange(v) {
      var cs = _toConsumableArray(data.p1_circles);
      cs[0] = {
        img: v
      };
      set('p1_circles', cs);
    }
  }), /*#__PURE__*/React.createElement(ImgField, {
    label: "Foto 1 \u2014 Detalhe centro / canto sup. dir.",
    value: data.p1_circles[1].img,
    onChange: function onChange(v) {
      var cs = _toConsumableArray(data.p1_circles);
      cs[1] = {
        img: v
      };
      set('p1_circles', cs);
    }
  }), /*#__PURE__*/React.createElement(ImgField, {
    label: "Foto 1 \u2014 Detalhe direito / canto inf. esq.",
    value: data.p1_circles[2].img,
    onChange: function onChange(v) {
      var cs = _toConsumableArray(data.p1_circles);
      cs[2] = {
        img: v
      };
      set('p1_circles', cs);
    }
  }), /*#__PURE__*/React.createElement(ImgField, {
    label: "Foto 1 \u2014 4\xBA canto inf. dir. (variante C)",
    value: data.p1_corner4 || '',
    onChange: function onChange(v) {
      return set('p1_corner4', v);
    }
  }), (data.p1_variant || 'A') === 'E' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Variante E \u2014 c\xEDrculo de detalhe"), /*#__PURE__*/React.createElement(Hint, null, "Arraste o c\xEDrculo diretamente na foto para reposicionar. Use +/\u2212 para redimensionar, ou troque a imagem abaixo."), /*#__PURE__*/React.createElement(ImgField, {
    label: "Imagem do c\xEDrculo (tamanho: ".concat((data.p1e_spot || {}).size || 340, "px)"),
    value: (data.p1e_spot || {}).img || '',
    onChange: function onChange(v) {
      return set('p1e_spot', _objectSpread(_objectSpread({}, data.p1e_spot || {}), {}, {
        img: v
      }));
    }
  })), /*#__PURE__*/React.createElement(ImgField, {
    label: "Foto 5 \u2014 Lifestyle / Estoque",
    value: data.p5_lifestyle,
    onChange: function onChange(v) {
      return set('p5_lifestyle', v);
    }
  }), /*#__PURE__*/React.createElement(ImgField, {
    label: "Foto 6 \u2014 Lifestyle / Estoque",
    value: data.p6_lifestyle,
    onChange: function onChange(v) {
      return set('p6_lifestyle', v);
    }
  }), /*#__PURE__*/React.createElement(SectionLabel, null, "Tamanho da miniatura do produto"), /*#__PURE__*/React.createElement(SliderField, {
    label: "Foto 5: ".concat(data.p5_mini_size, "px"),
    value: data.p5_mini_size,
    min: 140,
    max: 420,
    onChange: function onChange(v) {
      return set('p5_mini_size', v);
    }
  }), /*#__PURE__*/React.createElement(SliderField, {
    label: "Foto 6: ".concat(data.p6_mini_size, "px"),
    value: data.p6_mini_size,
    min: 140,
    max: 420,
    onChange: function onChange(v) {
      return set('p6_mini_size', v);
    }
  }), /*#__PURE__*/React.createElement(SectionLabel, null, "Imagens de fundo (modo fundo)"), /*#__PURE__*/React.createElement(BgSavedBanner, {
    data: data,
    set: set
  }), /*#__PURE__*/React.createElement(ImgField, {
    label: "Fundo Foto 1",
    value: data.bg_foto1,
    onChange: function onChange(v) {
      return set('bg_foto1', v);
    },
    saved: !!localStorage.getItem('gerarml_bg_bg_foto1')
  }), /*#__PURE__*/React.createElement(ImgField, {
    label: "Fundo Foto 2",
    value: data.bg_foto2,
    onChange: function onChange(v) {
      return set('bg_foto2', v);
    },
    saved: !!localStorage.getItem('gerarml_bg_bg_foto2')
  }), /*#__PURE__*/React.createElement(ImgField, {
    label: "Fundo Foto 3",
    value: data.bg_foto3,
    onChange: function onChange(v) {
      return set('bg_foto3', v);
    },
    saved: !!localStorage.getItem('gerarml_bg_bg_foto3')
  }), /*#__PURE__*/React.createElement(ImgField, {
    label: "Fundo Foto 4",
    value: data.bg_foto4,
    onChange: function onChange(v) {
      return set('bg_foto4', v);
    },
    saved: !!localStorage.getItem('gerarml_bg_bg_foto4')
  }), /*#__PURE__*/React.createElement(ImgField, {
    label: "Fundo Foto 5",
    value: data.bg_foto5,
    onChange: function onChange(v) {
      return set('bg_foto5', v);
    },
    saved: !!localStorage.getItem('gerarml_bg_bg_foto5')
  }), /*#__PURE__*/React.createElement(ImgField, {
    label: "Fundo Foto 6",
    value: data.bg_foto6,
    onChange: function onChange(v) {
      return set('bg_foto6', v);
    },
    saved: !!localStorage.getItem('gerarml_bg_bg_foto6')
  })), tab === 'text' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Foto 2 \u2014 Caracter\xEDsticas"), /*#__PURE__*/React.createElement(Field, {
    label: "Caracter\xEDstica 1 t\xEDtulo",
    value: data.p2_f1_title,
    onChange: function onChange(v) {
      return set('p2_f1_title', v);
    }
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Caracter\xEDstica 1 texto",
    value: data.p2_f1_text,
    onChange: function onChange(v) {
      return set('p2_f1_text', v);
    },
    multi: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Caracter\xEDstica 2 t\xEDtulo",
    value: data.p2_f2_title,
    onChange: function onChange(v) {
      return set('p2_f2_title', v);
    }
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Caracter\xEDstica 2 texto",
    value: data.p2_f2_text,
    onChange: function onChange(v) {
      return set('p2_f2_text', v);
    },
    multi: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Caracter\xEDstica 3 t\xEDtulo",
    value: data.p2_f3_title,
    onChange: function onChange(v) {
      return set('p2_f3_title', v);
    }
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Caracter\xEDstica 3 texto",
    value: data.p2_f3_text,
    onChange: function onChange(v) {
      return set('p2_f3_text', v);
    },
    multi: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Caracter\xEDstica 4 t\xEDtulo",
    value: data.p2_f4_title,
    onChange: function onChange(v) {
      return set('p2_f4_title', v);
    }
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Caracter\xEDstica 4 texto",
    value: data.p2_f4_text,
    onChange: function onChange(v) {
      return set('p2_f4_text', v);
    },
    multi: true
  }), /*#__PURE__*/React.createElement(SectionLabel, null, "Foto 3 \u2014 Dimens\xF5es & Especifica\xE7\xF5es"), /*#__PURE__*/React.createElement(Field, {
    label: "Dimens\xE3o 1",
    value: data.p3_dim1,
    onChange: function onChange(v) {
      return set('p3_dim1', v);
    }
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Dimens\xE3o 2",
    value: data.p3_dim2,
    onChange: function onChange(v) {
      return set('p3_dim2', v);
    }
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Dimens\xE3o 3",
    value: data.p3_dim3,
    onChange: function onChange(v) {
      return set('p3_dim3', v);
    }
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Dimens\xE3o 4",
    value: data.p3_dim4,
    onChange: function onChange(v) {
      return set('p3_dim4', v);
    }
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Especifica\xE7\xE3o 1 t\xEDtulo",
    value: data.p3_f1_title,
    onChange: function onChange(v) {
      return set('p3_f1_title', v);
    }
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Especifica\xE7\xE3o 1 texto",
    value: data.p3_f1_text,
    onChange: function onChange(v) {
      return set('p3_f1_text', v);
    },
    multi: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Especifica\xE7\xE3o 2 t\xEDtulo",
    value: data.p3_f2_title,
    onChange: function onChange(v) {
      return set('p3_f2_title', v);
    }
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Especifica\xE7\xE3o 2 texto",
    value: data.p3_f2_text,
    onChange: function onChange(v) {
      return set('p3_f2_text', v);
    },
    multi: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Especifica\xE7\xE3o 3 t\xEDtulo",
    value: data.p3_f3_title,
    onChange: function onChange(v) {
      return set('p3_f3_title', v);
    }
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Especifica\xE7\xE3o 3 texto",
    value: data.p3_f3_text,
    onChange: function onChange(v) {
      return set('p3_f3_text', v);
    },
    multi: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Especifica\xE7\xE3o 4 t\xEDtulo",
    value: data.p3_f4_title,
    onChange: function onChange(v) {
      return set('p3_f4_title', v);
    }
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Especifica\xE7\xE3o 4 texto",
    value: data.p3_f4_text,
    onChange: function onChange(v) {
      return set('p3_f4_text', v);
    },
    multi: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Capacidade (p\xEDlula)",
    value: data.p3_title_pill,
    onChange: function onChange(v) {
      return set('p3_title_pill', v);
    }
  }), /*#__PURE__*/React.createElement(Hint, null, "Clique direto sobre qualquer texto dentro das fotos para editar."))));
}
function Field(_ref11) {
  var label = _ref11.label,
    value = _ref11.value,
    _onChange2 = _ref11.onChange,
    multi = _ref11.multi,
    maxLength = _ref11.maxLength;
  var Tag = multi ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: '#666',
      marginBottom: 4
    }
  }, label), /*#__PURE__*/React.createElement(Tag, {
    value: value || '',
    onChange: function onChange(e) {
      return _onChange2(e.target.value);
    },
    maxLength: maxLength,
    rows: multi ? 2 : undefined,
    style: {
      width: '100%',
      padding: '8px 10px',
      border: '1px solid #ddd',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'inherit',
      resize: multi ? 'vertical' : 'none'
    }
  }));
}
function ImgField(_ref12) {
  var label = _ref12.label,
    value = _ref12.value,
    onChange = _ref12.onChange,
    saved = _ref12.saved;
  var inputRef = useRef(null);
  var _useState13 = useState(null),
    _useState14 = _slicedToArray(_useState13, 2),
    busy = _useState14[0],
    setBusy = _useState14[1];
  var _React$useState15 = React.useState('local'),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    section = _React$useState16[0],
    setSection = _React$useState16[1];
  var handleFile = function handleFile(e) {
    var _e$target$files;
    var file = (_e$target$files = e.target.files) === null || _e$target$files === void 0 ? void 0 : _e$target$files[0];
    if (!file) return;
    var r = new FileReader();
    r.onload = function (ev) {
      return onChange(ev.target.result);
    };
    r.readAsDataURL(file);
  };
  var apply = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(fn, key) {
      var out, _t3;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            if (value) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2);
          case 1:
            setBusy(key);
            _context5.p = 2;
            _context5.n = 3;
            return fn(value);
          case 3:
            out = _context5.v;
            onChange(out);
            _context5.n = 5;
            break;
          case 4:
            _context5.p = 4;
            _t3 = _context5.v;
            alert('Erro: ' + _t3.message);
          case 5:
            setBusy(null);
          case 6:
            return _context5.a(2);
        }
      }, _callee5, null, [[2, 4]]);
    }));
    return function apply(_x1, _x10) {
      return _ref13.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: '#666',
      marginBottom: 4,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, label, saved && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: '#166534',
      background: '#dcfce7',
      padding: '1px 6px',
      borderRadius: 4
    }
  }, "\uD83D\uDCBE salvo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 6,
      background: '#f0f0f0',
      backgroundImage: value ? "url(".concat(value, ")") : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      flexShrink: 0,
      border: '1px solid #ddd'
    }
  }), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    type: "file",
    accept: "image/*",
    onChange: handleFile,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return inputRef.current.click();
    },
    style: {
      flex: 1,
      padding: '8px 10px',
      border: '1px solid #ddd',
      borderRadius: 6,
      background: 'white',
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "Trocar imagem"), value && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onChange('');
    },
    style: {
      padding: '8px 10px',
      border: '1px solid #ddd',
      borderRadius: 6,
      background: 'white',
      fontSize: 12,
      cursor: 'pointer',
      color: '#999'
    }
  }, "\xD7")), value && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3,
      marginTop: 8,
      background: '#f5f5f5',
      padding: 3,
      borderRadius: 7
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSection('local');
    },
    style: {
      flex: 1,
      padding: '5px 4px',
      border: 0,
      borderRadius: 5,
      fontSize: 11,
      fontWeight: 600,
      cursor: 'pointer',
      background: section === 'local' ? 'white' : 'transparent',
      color: section === 'local' ? '#1a1a1a' : '#888',
      boxShadow: section === 'local' ? '0 1px 2px rgba(0,0,0,.08)' : 'none'
    }
  }, "Local"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSection('openai');
    },
    style: {
      flex: 1,
      padding: '5px 4px',
      border: 0,
      borderRadius: 5,
      fontSize: 11,
      fontWeight: 600,
      cursor: 'pointer',
      background: section === 'openai' ? '#10a37f' : 'transparent',
      color: section === 'openai' ? 'white' : '#888',
      boxShadow: section === 'openai' ? '0 1px 2px rgba(0,0,0,.12)' : 'none'
    }
  }, "\u2726 OpenAI")), section === 'local' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      marginTop: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(ImgBtn, {
    busy: busy === 'chroma',
    onClick: function onClick() {
      return apply(window.MLImgUtils.removeBgChroma, 'chroma');
    }
  }, "Remover fundo (claro)"), /*#__PURE__*/React.createElement(ImgBtn, {
    busy: busy === 'smart',
    onClick: function onClick() {
      return apply(window.MLImgUtils.removeBgSmart, 'smart');
    }
  }, "Remover fundo (IA local)"), /*#__PURE__*/React.createElement(ImgBtn, {
    busy: busy === 'adj',
    onClick: function onClick() {
      return apply(window.MLImgUtils.autoAdjust, 'adj');
    }
  }, "Auto-ajuste"), /*#__PURE__*/React.createElement(ImgBtn, {
    busy: busy === 'lvl',
    onClick: function onClick() {
      return apply(window.MLImgUtils.autoLevels, 'lvl');
    }
  }, "Auto-n\xEDveis")), section === 'openai' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(OpenAIImgBtn, {
    busy: busy === 'vision-bg',
    icon: "\uD83D\uDD0D",
    title: "Remover fundo (Vision)",
    desc: "GPT-4o detecta cor do fundo e remove com precis\xE3o",
    onClick: function onClick() {
      return apply(window.MLImgUtils.removeBgVision, 'vision-bg');
    }
  }), /*#__PURE__*/React.createElement(OpenAIImgBtn, {
    busy: busy === 'improve',
    icon: "\u2728",
    title: "Melhorar qualidade",
    desc: "gpt-image-1 corrige ilumina\xE7\xE3o, nitidez e cores",
    onClick: function onClick() {
      return apply(window.MLImgUtils.improveQuality, 'improve');
    }
  }), /*#__PURE__*/React.createElement(OpenAIImgBtn, {
    busy: busy === 'variation',
    icon: "\uD83C\uDFA8",
    title: "Gerar varia\xE7\xE3o",
    desc: "gpt-image-1 recria com fundo branco de est\xFAdio",
    onClick: function onClick() {
      return apply(window.MLImgUtils.generateVariation, 'variation');
    }
  }))));
}
function ImgBtn(_ref14) {
  var children = _ref14.children,
    onClick = _ref14.onClick,
    busy = _ref14.busy;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: !!busy,
    style: {
      padding: '5px 9px',
      border: '1px solid #FFE9A8',
      borderRadius: 5,
      background: busy ? '#FFE9A8' : '#FFF8E1',
      fontSize: 11,
      fontWeight: 600,
      cursor: busy ? 'wait' : 'pointer',
      color: '#7A5A00'
    }
  }, busy ? '...' : children);
}
function OpenAIImgBtn(_ref15) {
  var icon = _ref15.icon,
    title = _ref15.title,
    desc = _ref15.desc,
    onClick = _ref15.onClick,
    busy = _ref15.busy;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: !!busy,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 11px',
      border: '1px solid #d0f0e8',
      borderRadius: 8,
      background: busy ? '#e6f9f4' : '#f0fdf9',
      cursor: busy ? 'wait' : 'pointer',
      textAlign: 'left',
      width: '100%',
      opacity: busy ? 0.75 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      flexShrink: 0
    }
  }, busy ? '⏳' : icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: '#065f46'
    }
  }, busy ? 'Processando...' : title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: '#6b7280',
      marginTop: 1
    }
  }, desc)));
}
function SliderField(_ref16) {
  var label = _ref16.label,
    value = _ref16.value,
    min = _ref16.min,
    max = _ref16.max,
    _onChange3 = _ref16.onChange;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: '#666',
      marginBottom: 4
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    value: value,
    onChange: function onChange(e) {
      return _onChange3(Number(e.target.value));
    },
    style: {
      width: '100%'
    }
  }));
}
var BG_KEYS = ['bg_foto1', 'bg_foto2', 'bg_foto3', 'bg_foto4', 'bg_foto5', 'bg_foto6'];
var LS_BG_PREFIX = 'gerarml_bg_';
function BgSavedBanner(_ref17) {
  var data = _ref17.data,
    set = _ref17.set;
  var savedCount = BG_KEYS.filter(function (k) {
    return localStorage.getItem(LS_BG_PREFIX + k);
  }).length;
  var _React$useState17 = React.useState(false),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    cleared = _React$useState18[0],
    setCleared = _React$useState18[1];
  if (savedCount === 0) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: '#9ca3af',
        padding: '8px 10px',
        background: '#f9f9f9',
        borderRadius: 6,
        marginBottom: 10,
        border: '1px solid #eee'
      }
    }, "Nenhum fundo salvo ainda. Ao trocar uma imagem de fundo ela \xE9 salva automaticamente.");
  }
  var handleClear = function handleClear() {
    if (!confirm("Limpar os ".concat(savedCount, " fundo(s) salvos? As fotos voltar\xE3o para os assets padr\xE3o."))) return;
    clearAllSavedBgs();
    var patch = {};
    BG_KEYS.forEach(function (k, i) {
      patch[k] = "assets/bg-foto".concat(i + 1, ".png");
    });
    BG_KEYS.forEach(function (k, i) {
      return set(k, "assets/bg-foto".concat(i + 1, ".png"));
    });
    setCleared(true);
    setTimeout(function () {
      return setCleared(false);
    }, 2000);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 12px',
      background: '#f0fdf4',
      border: '1px solid #bbf7d0',
      borderRadius: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "\uD83D\uDCBE"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: '#166534'
    }
  }, cleared ? '✓ Fundos limpos' : "".concat(savedCount, " fundo(s) salvo(s) \u2014 carregam automaticamente"))), !cleared && /*#__PURE__*/React.createElement("button", {
    onClick: handleClear,
    style: {
      padding: '4px 10px',
      border: '1px solid #86efac',
      borderRadius: 6,
      background: 'white',
      fontSize: 11,
      fontWeight: 600,
      cursor: 'pointer',
      color: '#6b7280'
    }
  }, "Limpar tudo"));
}
function SectionLabel(_ref18) {
  var children = _ref18.children;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'Montserrat',
      fontWeight: 800,
      fontSize: 11,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: '#999',
      margin: '18px 0 8px',
      paddingTop: 12,
      borderTop: '1px solid #f0f0f0'
    }
  }, children);
}
function Hint(_ref19) {
  var children = _ref19.children;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#888',
      lineHeight: 1.4,
      marginTop: 14,
      padding: '10px 12px',
      background: '#FFF8E1',
      borderRadius: 6,
      border: '1px solid #FFE9A8'
    }
  }, children);
}
function useTweakMode() {
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    active = _useState16[0],
    setActive = _useState16[1];
  useEffect(function () {
    var h = function h(e) {
      var _e$data, _e$data2;
      if (((_e$data = e.data) === null || _e$data === void 0 ? void 0 : _e$data.type) === '__activate_edit_mode') setActive(true);else if (((_e$data2 = e.data) === null || _e$data2 === void 0 ? void 0 : _e$data2.type) === '__deactivate_edit_mode') setActive(false);
    };
    window.addEventListener('message', h);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return function () {
      return window.removeEventListener('message', h);
    };
  }, []);
  return [active, setActive];
}
function loadSavedBgs() {
  var patch = {};
  var _iterator = _createForOfIteratorHelper(BG_KEYS),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var k = _step.value;
      var v = localStorage.getItem(LS_BG_PREFIX + k);
      if (v) patch[k] = v;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return patch;
}
function saveBg(k, v) {
  if (v && v.startsWith('data:')) {
    try {
      localStorage.setItem(LS_BG_PREFIX + k, v);
    } catch (e) {
      // localStorage cheio (data URLs são grandes) — avisa mas não quebra
      console.warn('localStorage cheio ao salvar fundo:', k, e);
    }
  } else {
    localStorage.removeItem(LS_BG_PREFIX + k);
  }
}
function clearAllSavedBgs() {
  var _iterator2 = _createForOfIteratorHelper(BG_KEYS),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var k = _step2.value;
      localStorage.removeItem(LS_BG_PREFIX + k);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

// ---------------------------------------------------------------------------
// SUPABASE CONFIG
// ---------------------------------------------------------------------------
var SUPA_URL = 'https://fmrdphxdfenisolrhrcl.supabase.co';
var SUPA_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtcmRwaHhkZmVuaXNvbHJocmNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4NzQ0MzMsImV4cCI6MjA5MzQ1MDQzM30.aG-uOA72k8L1wtHZIFHQLH22e4chRGPvyR9K4-EJK0k';
var SUPA_HDRS = {
  'Content-Type': 'application/json',
  apikey: SUPA_KEY,
  Authorization: "Bearer ".concat(SUPA_KEY)
};
function supaFetch(_x11, _x12, _x13) {
  return _supaFetch.apply(this, arguments);
} // Serializa data — remove imagens grandes (>50KB base64) para não estourar
function _supaFetch() {
  _supaFetch = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(method, path, body) {
    var r, e;
    return _regenerator().w(function (_context18) {
      while (1) switch (_context18.n) {
        case 0:
          _context18.n = 1;
          return fetch("".concat(SUPA_URL, "/rest/v1").concat(path), {
            method: method,
            headers: _objectSpread(_objectSpread({}, SUPA_HDRS), {}, {
              Prefer: method === 'POST' ? 'return=representation' : ''
            }),
            body: body ? JSON.stringify(body) : undefined
          });
        case 1:
          r = _context18.v;
          if (r.ok) {
            _context18.n = 3;
            break;
          }
          _context18.n = 2;
          return r.json()["catch"](function () {
            return {};
          });
        case 2:
          e = _context18.v;
          throw new Error(e.message || r.status);
        case 3:
          return _context18.a(2, r.status === 204 ? null : r.json());
      }
    }, _callee18);
  }));
  return _supaFetch.apply(this, arguments);
}
function serializeData(data) {
  var out = {};
  for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      k = _Object$entries$_i[0],
      v = _Object$entries$_i[1];
    if (typeof v === 'string' && v.startsWith('data:image') && v.length > 70000) {
      out[k] = '__img_omitted__';
    } else if (Array.isArray(v)) {
      out[k] = v.map(function (item) {
        return item && _typeof(item) === 'object' && item.img && item.img.length > 70000 ? _objectSpread(_objectSpread({}, item), {}, {
          img: '__img_omitted__'
        }) : item;
      });
    } else {
      out[k] = v;
    }
  }
  return out;
}
function deserializeData(data) {
  var out = {};
  for (var _i2 = 0, _Object$entries2 = Object.entries(data); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
      k = _Object$entries2$_i[0],
      v = _Object$entries2$_i[1];
    if (v === '__img_omitted__') {
      out[k] = '';
    } else if (Array.isArray(v)) {
      out[k] = v.map(function (item) {
        return item && _typeof(item) === 'object' && item.img === '__img_omitted__' ? _objectSpread(_objectSpread({}, item), {}, {
          img: ''
        }) : item;
      });
    } else {
      out[k] = v;
    }
  }
  return out;
}

// ---------------------------------------------------------------------------
// SISTEMA DE ANÚNCIOS — Supabase com fallback localStorage
// ---------------------------------------------------------------------------
var LS_ADS_KEY = 'gerarml_ads';
var LS_CURRENT_KEY = 'gerarml_current_ad';
function fetchAds() {
  return _fetchAds.apply(this, arguments);
}
function _fetchAds() {
  _fetchAds = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19() {
    var rows, _t1, _t10;
    return _regenerator().w(function (_context19) {
      while (1) switch (_context19.p = _context19.n) {
        case 0:
          _context19.p = 0;
          _context19.n = 1;
          return supaFetch('GET', '/anuncios?order=updated_at.desc&limit=100&select=id,name,product_name,updated_at');
        case 1:
          rows = _context19.v;
          return _context19.a(2, rows || []);
        case 2:
          _context19.p = 2;
          _t1 = _context19.v;
          _context19.p = 3;
          return _context19.a(2, JSON.parse(localStorage.getItem(LS_ADS_KEY) || '[]'));
        case 4:
          _context19.p = 4;
          _t10 = _context19.v;
          return _context19.a(2, []);
      }
    }, _callee19, null, [[3, 4], [0, 2]]);
  }));
  return _fetchAds.apply(this, arguments);
}
function fetchAdData(_x14) {
  return _fetchAdData.apply(this, arguments);
}
function _fetchAdData() {
  _fetchAdData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20(id) {
    var rows, _t11;
    return _regenerator().w(function (_context20) {
      while (1) switch (_context20.p = _context20.n) {
        case 0:
          _context20.p = 0;
          _context20.n = 1;
          return supaFetch('GET', "/anuncios?id=eq.".concat(id, "&select=*"));
        case 1:
          rows = _context20.v;
          return _context20.a(2, (rows === null || rows === void 0 ? void 0 : rows[0]) || null);
        case 2:
          _context20.p = 2;
          _t11 = _context20.v;
          return _context20.a(2, null);
      }
    }, _callee20, null, [[0, 2]]);
  }));
  return _fetchAdData.apply(this, arguments);
}
function upsertAd(_x15, _x16, _x17, _x18, _x19) {
  return _upsertAd.apply(this, arguments);
}
function _upsertAd() {
  _upsertAd = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21(name, data, productName, storeName, existingId) {
    var payload, _rows$, rows, ads, _t12;
    return _regenerator().w(function (_context21) {
      while (1) switch (_context21.p = _context21.n) {
        case 0:
          payload = {
            name: name,
            product_name: productName || '',
            store_name: storeName || '',
            data: serializeData(data),
            updated_at: new Date().toISOString()
          };
          _context21.p = 1;
          if (!existingId) {
            _context21.n = 3;
            break;
          }
          _context21.n = 2;
          return supaFetch('PATCH', "/anuncios?id=eq.".concat(existingId), payload);
        case 2:
          return _context21.a(2, existingId);
        case 3:
          _context21.n = 4;
          return supaFetch('POST', '/anuncios', payload);
        case 4:
          rows = _context21.v;
          return _context21.a(2, (rows === null || rows === void 0 || (_rows$ = rows[0]) === null || _rows$ === void 0 ? void 0 : _rows$.id) || null);
        case 5:
          _context21.n = 7;
          break;
        case 6:
          _context21.p = 6;
          _t12 = _context21.v;
          // Fallback localStorage
          ads = JSON.parse(localStorage.getItem(LS_ADS_KEY) || '[]').filter(function (a) {
            return a.name !== name;
          });
          ads.unshift({
            name: name,
            product_name: productName,
            data: serializeData(data),
            updated_at: new Date().toISOString(),
            id: Date.now()
          });
          localStorage.setItem(LS_ADS_KEY, JSON.stringify(ads.slice(0, 30)));
          return _context21.a(2, ads[0].id);
        case 7:
          return _context21.a(2);
      }
    }, _callee21, null, [[1, 6]]);
  }));
  return _upsertAd.apply(this, arguments);
}
function deleteAdById(_x20) {
  return _deleteAdById.apply(this, arguments);
}
function _deleteAdById() {
  _deleteAdById = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22(id) {
    var _t13;
    return _regenerator().w(function (_context22) {
      while (1) switch (_context22.p = _context22.n) {
        case 0:
          _context22.p = 0;
          _context22.n = 1;
          return supaFetch('DELETE', "/anuncios?id=eq.".concat(id));
        case 1:
          _context22.n = 3;
          break;
        case 2:
          _context22.p = 2;
          _t13 = _context22.v;
        case 3:
          return _context22.a(2);
      }
    }, _callee22, null, [[0, 2]]);
  }));
  return _deleteAdById.apply(this, arguments);
}
function AdManager(_ref20) {
  var data = _ref20.data,
    productName = _ref20.productName,
    storeName = _ref20.storeName,
    onLoad = _ref20.onLoad,
    setProductName = _ref20.setProductName,
    setStoreName = _ref20.setStoreName;
  var _React$useState19 = React.useState([]),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    ads = _React$useState20[0],
    setAds = _React$useState20[1];
  var _React$useState21 = React.useState(false),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    open = _React$useState22[0],
    setOpen = _React$useState22[1];
  var _React$useState23 = React.useState(function () {
      return localStorage.getItem(LS_CURRENT_KEY) || '';
    }),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    saveName = _React$useState24[0],
    setSaveName = _React$useState24[1];
  var _React$useState25 = React.useState(null),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    currentId = _React$useState26[0],
    setCurrentId = _React$useState26[1];
  var _React$useState27 = React.useState('idle'),
    _React$useState28 = _slicedToArray(_React$useState27, 2),
    status = _React$useState28[0],
    setStatus = _React$useState28[1]; // idle | saving | saved | loading | error
  var _React$useState29 = React.useState(true),
    _React$useState30 = _slicedToArray(_React$useState29, 2),
    online = _React$useState30[0],
    setOnline = _React$useState30[1];

  // Carrega lista ao abrir
  var loadList = /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var rows;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _context6.n = 1;
            return fetchAds();
          case 1:
            rows = _context6.v;
            setAds(rows);
            // Detecta se está online (tem id numérico real)
            setOnline(rows.length === 0 || typeof rows[0].id === 'string');
          case 2:
            return _context6.a(2);
        }
      }, _callee6);
    }));
    return function loadList() {
      return _ref21.apply(this, arguments);
    };
  }();
  React.useEffect(function () {
    loadList();
  }, []);
  var handleSave = /*#__PURE__*/function () {
    var _ref22 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var id, _t4;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            if (saveName.trim()) {
              _context7.n = 1;
              break;
            }
            alert('Digite um nome para o anúncio');
            return _context7.a(2);
          case 1:
            setStatus('saving');
            _context7.p = 2;
            _context7.n = 3;
            return upsertAd(saveName.trim(), data, productName, storeName, currentId);
          case 3:
            id = _context7.v;
            setCurrentId(id);
            localStorage.setItem(LS_CURRENT_KEY, saveName.trim());
            setStatus('saved');
            _context7.n = 4;
            return loadList();
          case 4:
            setTimeout(function () {
              return setStatus('idle');
            }, 2500);
            _context7.n = 6;
            break;
          case 5:
            _context7.p = 5;
            _t4 = _context7.v;
            setStatus('error');
            setTimeout(function () {
              return setStatus('idle');
            }, 3000);
          case 6:
            return _context7.a(2);
        }
      }, _callee7, null, [[2, 5]]);
    }));
    return function handleSave() {
      return _ref22.apply(this, arguments);
    };
  }();
  var handleLoad = /*#__PURE__*/function () {
    var _ref23 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(ad) {
      var full, restored, _t5;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            setStatus('loading');
            setOpen(false);
            _context8.p = 1;
            _context8.n = 2;
            return fetchAdData(ad.id);
          case 2:
            full = _context8.v;
            if (full !== null && full !== void 0 && full.data) {
              restored = deserializeData(full.data);
              onLoad(restored);
              setProductName(full.product_name || '');
              setStoreName(full.store_name || '');
              setSaveName(full.name);
              setCurrentId(full.id);
              localStorage.setItem(LS_CURRENT_KEY, full.name);
            }
            _context8.n = 4;
            break;
          case 3:
            _context8.p = 3;
            _t5 = _context8.v;
          case 4:
            setStatus('idle');
          case 5:
            return _context8.a(2);
        }
      }, _callee8, null, [[1, 3]]);
    }));
    return function handleLoad(_x21) {
      return _ref23.apply(this, arguments);
    };
  }();
  var handleDelete = /*#__PURE__*/function () {
    var _ref24 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(ad, e) {
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            e.stopPropagation();
            if (confirm("Apagar \"".concat(ad.name, "\"?"))) {
              _context9.n = 1;
              break;
            }
            return _context9.a(2);
          case 1:
            _context9.n = 2;
            return deleteAdById(ad.id);
          case 2:
            setAds(function (prev) {
              return prev.filter(function (a) {
                return a.id !== ad.id;
              });
            });
            if (currentId === ad.id) {
              setCurrentId(null);
              setSaveName('');
            }
          case 3:
            return _context9.a(2);
        }
      }, _callee9);
    }));
    return function handleDelete(_x22, _x23) {
      return _ref24.apply(this, arguments);
    };
  }();
  var btnLabel = {
    idle: '💾 Salvar',
    saving: 'Salvando...',
    saved: '✓ Salvo!',
    loading: 'Carregando...',
    error: '✗ Erro'
  };
  var btnColor = {
    idle: '#1F7A3A',
    saving: '#4b9e6a',
    saved: '#166534',
    loading: '#4b9e6a',
    error: '#dc2626'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 920,
      margin: '0 auto 12px',
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flex: 1,
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: saveName,
    onChange: function onChange(e) {
      return setSaveName(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Enter' && handleSave();
    },
    placeholder: "Nome do an\xFAncio...",
    style: {
      flex: 1,
      padding: '7px 12px',
      border: '1px solid #d1d5db',
      borderRadius: 8,
      fontSize: 13,
      fontFamily: 'inherit',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handleSave,
    disabled: status === 'saving' || status === 'loading',
    style: {
      padding: '7px 16px',
      background: btnColor[status],
      color: 'white',
      border: 0,
      borderRadius: 8,
      fontSize: 13,
      fontWeight: 700,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'background .2s'
    }
  }, btnLabel[status])), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      loadList();
      setOpen(function (v) {
        return !v;
      });
    },
    style: {
      padding: '7px 14px',
      border: '1px solid #d1d5db',
      borderRadius: 8,
      background: 'white',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, "\uD83D\uDCC2 An\xFAncios", ads.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      background: '#1F7A3A',
      color: 'white',
      borderRadius: 10,
      padding: '1px 7px',
      fontSize: 11
    }
  }, ads.length)), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '110%',
      right: 0,
      background: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: 12,
      boxShadow: '0 8px 28px rgba(0,0,0,.14)',
      zIndex: 200,
      minWidth: 300,
      maxHeight: 400,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px 6px',
      borderBottom: '1px solid #f3f4f6',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: '#374151'
    }
  }, "An\xFAncios salvos"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: online ? '#10b981' : '#f59e0b',
      marginLeft: 'auto'
    }
  }, online ? '☁ servidor' : '💾 local')), ads.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      color: '#9ca3af',
      fontSize: 13,
      textAlign: 'center'
    }
  }, "Nenhum an\xFAncio ainda") : ads.map(function (ad) {
    return /*#__PURE__*/React.createElement("div", {
      key: ad.id,
      onClick: function onClick() {
        return handleLoad(ad);
      },
      style: {
        padding: '10px 14px',
        borderBottom: '1px solid #f3f4f6',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
        background: currentId === ad.id ? '#f0fdf4' : 'white',
        transition: 'background .1s'
      },
      onMouseEnter: function onMouseEnter(e) {
        if (currentId !== ad.id) e.currentTarget.style.background = '#f9fafb';
      },
      onMouseLeave: function onMouseLeave(e) {
        e.currentTarget.style.background = currentId === ad.id ? '#f0fdf4' : 'white';
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: '#111',
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, ad.name, currentId === ad.id && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        background: '#dcfce7',
        color: '#166534',
        padding: '1px 6px',
        borderRadius: 4
      }
    }, "atual")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: '#9ca3af',
        marginTop: 2
      }
    }, ad.product_name && /*#__PURE__*/React.createElement("span", null, ad.product_name, " \xB7 "), new Date(ad.updated_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        return handleDelete(ad, e);
      },
      style: {
        padding: '3px 8px',
        border: '1px solid #fca5a5',
        borderRadius: 5,
        background: 'white',
        color: '#ef4444',
        fontSize: 11,
        cursor: 'pointer',
        flexShrink: 0
      }
    }, "Apagar"));
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 199
    },
    onClick: function onClick() {
      return setOpen(false);
    }
  }));
}

/* ============== SlotToolbar — barra fixa acima de cada foto ============== */
function SlotToolbar(_ref25) {
  var imgKey = _ref25.imgKey,
    slotKey = _ref25.slotKey,
    zoomKey = _ref25.zoomKey,
    data = _ref25.data,
    set = _ref25.set,
    openCrop = _ref25.openCrop,
    rotateImg = _ref25.rotateImg,
    textMode = _ref25.textMode,
    setTextMode = _ref25.setTextMode,
    moveMode = _ref25.moveMode,
    setMoveMode = _ref25.setMoveMode;
  var imgSrc = data && (data[imgKey] || data.mainImg);
  var hasImg = !!imgSrc;
  var adj = data && data[slotKey + '_adj'] || {
    brightness: 100,
    contrast: 100,
    saturation: 100
  };
  var zoom = data && data[zoomKey] || 1;
  var _React$useState31 = React.useState('img'),
    _React$useState32 = _slicedToArray(_React$useState31, 2),
    tab = _React$useState32[0],
    setTab = _React$useState32[1]; // 'img' | 'adj' | 'txt'
  var _React$useState33 = React.useState(null),
    _React$useState34 = _slicedToArray(_React$useState33, 2),
    busy = _React$useState34[0],
    setBusy = _React$useState34[1];
  var _React$useState35 = React.useState(false),
    _React$useState36 = _slicedToArray(_React$useState35, 2),
    rotating = _React$useState36[0],
    setRot = _React$useState36[1];
  var fileRef = React.useRef(null);

  // ── helpers ──
  var apply = /*#__PURE__*/function () {
    var _ref26 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(fn, key) {
      var _t6, _t7, _t8;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            if (!(!imgSrc || busy)) {
              _context0.n = 1;
              break;
            }
            return _context0.a(2);
          case 1:
            setBusy(key);
            _context0.p = 2;
            _t6 = set;
            _t7 = imgKey;
            _context0.n = 3;
            return fn(imgSrc);
          case 3:
            _t6(_t7, _context0.v);
            _context0.n = 5;
            break;
          case 4:
            _context0.p = 4;
            _t8 = _context0.v;
            alert('Erro: ' + _t8.message);
          case 5:
            setBusy(null);
          case 6:
            return _context0.a(2);
        }
      }, _callee0, null, [[2, 4]]);
    }));
    return function apply(_x24, _x25) {
      return _ref26.apply(this, arguments);
    };
  }();
  var doRotate = /*#__PURE__*/function () {
    var _ref27 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(deg) {
      var _t9;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            if (!(!hasImg || rotating)) {
              _context1.n = 1;
              break;
            }
            return _context1.a(2);
          case 1:
            setRot(true);
            _context1.p = 2;
            _context1.n = 3;
            return rotateImg(imgKey, deg);
          case 3:
            _context1.n = 5;
            break;
          case 4:
            _context1.p = 4;
            _t9 = _context1.v;
          case 5:
            setRot(false);
          case 6:
            return _context1.a(2);
        }
      }, _callee1, null, [[2, 4]]);
    }));
    return function doRotate(_x26) {
      return _ref27.apply(this, arguments);
    };
  }();
  var handleFile = function handleFile(e) {
    var f = e.target.files && e.target.files[0];
    if (!f) return;
    var r = new FileReader();
    r.onload = function (ev) {
      return set(imgKey, ev.target.result);
    };
    r.readAsDataURL(f);
  };
  var updAdj = function updAdj(k, v) {
    return set(slotKey + '_adj', _objectSpread(_objectSpread({}, adj), {}, _defineProperty({}, k, v)));
  };
  var hasOpenAI = !!(window.OPENAI_API_KEY || localStorage.getItem('openai_api_key'));
  var adjChanged = adj.brightness !== 100 || adj.contrast !== 100 || adj.saturation !== 100;

  // ── estilos ──
  var BAR = {
    width: '100%',
    background: '#1c1c1e',
    borderRadius: '8px 8px 0 0',
    userSelect: 'none'
  };
  var TAB = function TAB(active) {
    return {
      padding: '5px 12px',
      border: 'none',
      borderRadius: 6,
      background: active ? 'rgba(255,255,255,.15)' : 'transparent',
      color: active ? '#fff' : 'rgba(255,255,255,.45)',
      fontSize: 11,
      fontWeight: 700,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'background .12s, color .12s'
    };
  };
  var BTN = function BTN(highlight) {
    return {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: '5px 10px',
      border: 'none',
      borderRadius: 6,
      background: highlight ? '#FFC42B' : 'rgba(255,255,255,.1)',
      color: highlight ? '#000' : '#fff',
      fontSize: 11,
      fontWeight: 700,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'background .12s'
    };
  };
  var SLIDER_ROW = function SLIDER_ROW(_ref28) {
    var label = _ref28.label,
      k = _ref28.k,
      min = _ref28.min,
      max = _ref28.max;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flex: 1,
        minWidth: 140
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: 'rgba(255,255,255,.5)',
        minWidth: 60
      }
    }, label), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: min,
      max: max,
      step: 1,
      value: adj[k],
      onChange: function onChange(e) {
        return updAdj(k, +e.target.value);
      },
      style: {
        flex: 1,
        accentColor: '#FFC42B',
        minWidth: 80
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        fontFamily: 'monospace',
        color: adj[k] !== 100 ? '#FFC42B' : 'rgba(255,255,255,.3)',
        minWidth: 32
      }
    }, adj[k], "%"));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: BAR
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      padding: '5px 8px',
      borderBottom: '1px solid rgba(255,255,255,.08)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setMoveMode && setMoveMode(function (v) {
        return !v;
      });
      setTextMode && setTextMode(false);
    },
    style: {
      padding: '5px 10px',
      border: 'none',
      borderRadius: 6,
      background: moveMode ? '#f59e0b' : 'rgba(255,255,255,.1)',
      color: moveMode ? '#000' : 'rgba(255,255,255,.6)',
      fontSize: 11,
      fontWeight: 700,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'background .12s'
    },
    title: moveMode ? 'Modo mover ativo — arraste os textos' : 'Mover textos — arrastar blocos de texto livremente'
  }, moveMode ? '✥ Movendo' : '✥ Mover'), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setTextMode && setTextMode(function (v) {
        return !v;
      });
      setMoveMode && setMoveMode(false);
    },
    style: {
      padding: '5px 10px',
      border: 'none',
      borderRadius: 6,
      background: textMode ? '#3b82f6' : 'rgba(255,255,255,.1)',
      color: textMode ? '#fff' : 'rgba(255,255,255,.6)',
      fontSize: 11,
      fontWeight: 700,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'background .12s'
    },
    title: textMode ? 'Modo texto ativo — clique para mover imagem' : 'Ativar modo texto — trava imagem para editar textos'
  }, textMode ? '🔒 Texto' : '🔒 Texto'), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 16,
      background: 'rgba(255,255,255,.15)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: TAB(tab === 'img'),
    onClick: function onClick() {
      return setTab('img');
    }
  }, "\uD83D\uDCF7 Imagem"), /*#__PURE__*/React.createElement("button", {
    style: TAB(tab === 'adj'),
    onClick: function onClick() {
      return setTab('adj');
    }
  }, "\u25D1 Ajustes", adjChanged ? ' •' : ''), /*#__PURE__*/React.createElement("button", {
    style: TAB(tab === 'txt'),
    onClick: function onClick() {
      return setTab('txt');
    }
  }, "T Texto"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'rgba(255,255,255,.4)'
    }
  }, "Zoom"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return set(zoomKey, Math.max(0.1, zoom - 0.1));
    },
    style: {
      width: 22,
      height: 22,
      border: 'none',
      borderRadius: 4,
      background: 'rgba(255,255,255,.1)',
      color: '#fff',
      fontSize: 13,
      fontWeight: 900,
      cursor: 'pointer',
      lineHeight: 1
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontFamily: 'monospace',
      color: '#fff',
      minWidth: 36,
      textAlign: 'center'
    }
  }, Math.round(zoom * 100), "%"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return set(zoomKey, Math.min(4, zoom + 0.1));
    },
    style: {
      width: 22,
      height: 22,
      border: 'none',
      borderRadius: 4,
      background: 'rgba(255,255,255,.1)',
      color: '#fff',
      fontSize: 13,
      fontWeight: 900,
      cursor: 'pointer',
      lineHeight: 1
    }
  }, "+"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '7px 8px',
      display: 'flex',
      gap: 5,
      flexWrap: 'wrap',
      alignItems: 'center',
      minHeight: 38
    }
  }, tab === 'img' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    ref: fileRef,
    type: "file",
    accept: "image/*",
    onChange: handleFile,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return fileRef.current.click();
    },
    style: BTN(false)
  }, "\uD83D\uDCF7 Trocar"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return doRotate(270);
    },
    disabled: !hasImg || rotating,
    style: BTN(false)
  }, "\u21BA"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return doRotate(90);
    },
    disabled: !hasImg || rotating,
    style: BTN(false)
  }, "\u21BB"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return hasImg && openCrop(imgKey);
    },
    disabled: !hasImg,
    style: BTN(false)
  }, "\u2702 Crop"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 18,
      background: 'rgba(255,255,255,.15)',
      margin: '0 2px'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return apply(window.MLImgUtils.removeBgChroma, 'chroma');
    },
    disabled: !hasImg || !!busy,
    style: BTN(busy === 'chroma')
  }, busy === 'chroma' ? '⏳' : '✕', " Fundo"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return apply(window.MLImgUtils.removeBgSmart, 'smart');
    },
    disabled: !hasImg || !!busy,
    style: BTN(busy === 'smart')
  }, busy === 'smart' ? '⏳' : '✦', " Fundo IA"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return apply(window.MLImgUtils.autoAdjust, 'auto');
    },
    disabled: !hasImg || !!busy,
    style: BTN(busy === 'auto')
  }, busy === 'auto' ? '⏳' : '⚡', " Auto"), hasOpenAI && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 18,
      background: 'rgba(255,255,255,.15)',
      margin: '0 2px'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return apply(window.MLImgUtils.improveQuality, 'improve');
    },
    disabled: !hasImg || !!busy,
    style: BTN(busy === 'improve')
  }, busy === 'improve' ? '⏳' : '✨', " Melhorar"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return apply(window.MLImgUtils.generateVariation, 'var');
    },
    disabled: !hasImg || !!busy,
    style: BTN(busy === 'var')
  }, busy === 'var' ? '⏳' : '🎨', " Varia\xE7\xE3o")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 18,
      background: 'rgba(255,255,255,.15)',
      margin: '0 2px'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      if (imgSrc) window._imgClipboard = imgSrc;
    },
    disabled: !hasImg,
    style: BTN(false)
  }, "\u2398 Copiar"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      if (window._imgClipboard) set(imgKey, window._imgClipboard);
    },
    disabled: !window._imgClipboard,
    style: BTN(false)
  }, "\u2398 Colar")), tab === 'adj' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SLIDER_ROW, {
    label: "\u2600 Brilho",
    k: "brightness",
    min: 50,
    max: 180
  }), /*#__PURE__*/React.createElement(SLIDER_ROW, {
    label: "\u25D1 Contraste",
    k: "contrast",
    min: 50,
    max: 180
  }), /*#__PURE__*/React.createElement(SLIDER_ROW, {
    label: "\u25C8 Satura\xE7\xE3o",
    k: "saturation",
    min: 0,
    max: 200
  }), adjChanged && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return set(slotKey + '_adj', {
        brightness: 100,
        contrast: 100,
        saturation: 100
      });
    },
    style: _objectSpread(_objectSpread({}, BTN(false)), {}, {
      marginLeft: 4,
      borderColor: '#fca5a5',
      color: '#fca5a5'
    })
  }, "\u21BA Reset")), tab === 'txt' && /*#__PURE__*/React.createElement(React.Fragment, null, ['bold', 'italic', 'underline', 'strikeThrough'].map(function (cmd, i) {
    return /*#__PURE__*/React.createElement("button", {
      key: cmd,
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        if (window.__mlFmtActive) {
          window.__mlFmtActive.el.focus();
          document.execCommand(cmd);
          window.__mlFmtActive.onSave(window.__mlFmtActive.el.innerHTML);
        }
      },
      style: BTN(false),
      title: ['Negrito', 'Itálico', 'Sublinhado', 'Riscado'][i]
    }, [/*#__PURE__*/React.createElement("b", null, "B"), /*#__PURE__*/React.createElement("i", null, "I"), /*#__PURE__*/React.createElement("u", null, "U"), /*#__PURE__*/React.createElement("s", null, "S")][i]);
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 18,
      background: 'rgba(255,255,255,.15)',
      margin: '0 2px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'rgba(255,255,255,.4)'
    }
  }, "Tam."), /*#__PURE__*/React.createElement("button", {
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
      var a = window.__mlFmtActive;
      if (!a) return;
      var sz = Math.max(8, (parseFloat(a.el.style.fontSize) || parseFloat(window.getComputedStyle(a.el).fontSize) || 32) - 8);
      a.el.style.fontSize = sz + 'px';
      a.onSave(a.el.innerHTML);
    },
    style: BTN(false)
  }, "A\u2212"), /*#__PURE__*/React.createElement("button", {
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
      var a = window.__mlFmtActive;
      if (!a) return;
      var sz = Math.min(300, (parseFloat(a.el.style.fontSize) || parseFloat(window.getComputedStyle(a.el).fontSize) || 32) + 8);
      a.el.style.fontSize = sz + 'px';
      a.onSave(a.el.innerHTML);
    },
    style: BTN(false)
  }, "A+"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 18,
      background: 'rgba(255,255,255,.15)',
      margin: '0 2px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'rgba(255,255,255,.4)'
    }
  }, "Cor"), /*#__PURE__*/React.createElement("label", {
    onMouseDown: function onMouseDown(e) {
      return e.preventDefault();
    },
    style: {
      position: 'relative',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 24,
      borderRadius: 5,
      border: '1px solid rgba(255,255,255,.3)',
      background: window.__mlFmtActive ? window.__mlFmtActive.el.style.color || '#ffffff' : '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 800,
      color: '#000',
      textShadow: '0 0 3px #fff'
    }
  }, "A")), /*#__PURE__*/React.createElement("input", {
    type: "color",
    defaultValue: "#ffffff",
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    },
    onChange: function onChange(e) {
      var a = window.__mlFmtActive;
      if (!a) return;
      a.el.focus();
      document.execCommand('foreColor', false, e.target.value);
      a.onSave(a.el.innerHTML);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      inset: 0,
      cursor: 'pointer',
      width: '100%',
      height: '100%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 18,
      background: 'rgba(255,255,255,.15)',
      margin: '0 2px'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onMouseDown: function onMouseDown(e) {
      e.preventDefault();
      var a = window.__mlFmtActive;
      if (!a) return;
      a.el.focus();
      document.execCommand('removeFormat');
      a.onSave(a.el.innerHTML);
    },
    style: BTN(false)
  }, "\u2715 fmt"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'rgba(255,255,255,.3)',
      marginLeft: 'auto'
    }
  }, window.__mlFmtActive ? window.__mlFmtActive.el.innerText.length + 'ch' : '— clique num texto'))));
}

/* ============== Barra de Rotação e Crop ============== */
function RotateCropBar(_ref29) {
  var imgKey = _ref29.imgKey,
    data = _ref29.data,
    set = _ref29.set,
    openCrop = _ref29.openCrop,
    rotateImg = _ref29.rotateImg;
  var _React$useState37 = React.useState(false),
    _React$useState38 = _slicedToArray(_React$useState37, 2),
    rotating = _React$useState38[0],
    setRotating = _React$useState38[1];
  var hasImg = !!(data && data[imgKey]);
  var doRotate = /*#__PURE__*/function () {
    var _ref30 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(deg) {
      var _t0;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            if (!(!hasImg || rotating)) {
              _context10.n = 1;
              break;
            }
            return _context10.a(2);
          case 1:
            setRotating(true);
            _context10.p = 2;
            _context10.n = 3;
            return rotateImg(imgKey, deg);
          case 3:
            _context10.n = 5;
            break;
          case 4:
            _context10.p = 4;
            _t0 = _context10.v;
          case 5:
            setRotating(false);
          case 6:
            return _context10.a(2);
        }
      }, _callee10, null, [[2, 4]]);
    }));
    return function doRotate(_x27) {
      return _ref30.apply(this, arguments);
    };
  }();
  var btnStyle = function btnStyle(disabled) {
    return {
      padding: '4px 8px',
      border: '1px solid #e5e7eb',
      borderRadius: 6,
      background: 'white',
      fontSize: 11,
      fontWeight: 700,
      cursor: disabled ? 'not-allowed' : 'pointer',
      color: disabled ? '#d1d5db' : '#555',
      display: 'flex',
      alignItems: 'center',
      gap: 3
    };
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return doRotate(270);
    },
    disabled: !hasImg || rotating,
    style: btnStyle(!hasImg || rotating),
    title: "Girar 90\xB0 anti-hor\xE1rio"
  }, "\u21BA"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return doRotate(90);
    },
    disabled: !hasImg || rotating,
    style: btnStyle(!hasImg || rotating),
    title: "Girar 90\xB0 hor\xE1rio"
  }, "\u21BB"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return hasImg && openCrop(imgKey);
    },
    disabled: !hasImg,
    style: btnStyle(!hasImg),
    title: "Recortar imagem"
  }, "\u2702 Crop"));
}
function App() {
  var _useState17 = useState(function () {
      return _objectSpread(_objectSpread({}, INITIAL), loadSavedBgs());
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    data = _useState18[0],
    setData = _useState18[1];
  var _useState19 = useState(TWEAK_DEFAULTS.productName),
    _useState20 = _slicedToArray(_useState19, 2),
    productName = _useState20[0],
    setProductName = _useState20[1];
  var _useState21 = useState(TWEAK_DEFAULTS.storeName),
    _useState22 = _slicedToArray(_useState21, 2),
    storeName = _useState22[0],
    setStoreName = _useState22[1];
  var _useTweakMode = useTweakMode(),
    _useTweakMode2 = _slicedToArray(_useTweakMode, 2),
    tweaksOpen = _useTweakMode2[0],
    setTweaksOpen = _useTweakMode2[1];
  var _React$useState39 = React.useState([]),
    _React$useState40 = _slicedToArray(_React$useState39, 2),
    rawFiles = _React$useState40[0],
    setRawFiles = _React$useState40[1];
  var _React$useState41 = React.useState(null),
    _React$useState42 = _slicedToArray(_React$useState41, 2),
    cropState = _React$useState42[0],
    setCropState = _React$useState42[1]; // { key, src }
  var _React$useState43 = React.useState(false),
    _React$useState44 = _slicedToArray(_React$useState43, 2),
    textMode = _React$useState44[0],
    setTextMode = _React$useState44[1]; // bloqueia PanZoom ao editar texto
  var _React$useState45 = React.useState(false),
    _React$useState46 = _slicedToArray(_React$useState45, 2),
    moveMode = _React$useState46[0],
    setMoveMode = _React$useState46[1]; // ativa drag nos textos
  var _React$useState47 = React.useState(false),
    _React$useState48 = _slicedToArray(_React$useState47, 2),
    previewOpen = _React$useState48[0],
    setPreviewOpen = _React$useState48[1];

  // ── Undo / Redo ──────────────────────────────────────────
  var undoStack = useRef([]);
  var redoStack = useRef([]);
  var skipHistory = useRef(false); // evita loop ao restaurar

  var pushHistory = function pushHistory(prevData) {
    undoStack.current.push(prevData);
    if (undoStack.current.length > 40) undoStack.current.shift();
    redoStack.current = []; // limpa redo ao fazer nova ação
  };
  var undo = function undo() {
    if (!undoStack.current.length) return;
    var prev = undoStack.current.pop();
    redoStack.current.push(data);
    skipHistory.current = true;
    setData(prev);
    skipHistory.current = false;
  };
  var redo = function redo() {
    if (!redoStack.current.length) return;
    var next = redoStack.current.pop();
    undoStack.current.push(data);
    skipHistory.current = true;
    setData(next);
    skipHistory.current = false;
  };

  // Atalho teclado Ctrl+Z / Ctrl+Y / Ctrl+Shift+Z
  useEffect(function () {
    var handler = function handler(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        undo();
      }
      if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || e.key === 'z' && e.shiftKey)) {
        e.preventDefault();
        redo();
      }
    };
    window.addEventListener('keydown', handler);
    return function () {
      return window.removeEventListener('keydown', handler);
    };
  }, [data]);
  var _React$useState49 = React.useState(function () {
      var saved = localStorage.getItem('openai_api_key') || '';
      if (saved) window.OPENAI_API_KEY = saved;
      return saved;
    }),
    _React$useState50 = _slicedToArray(_React$useState49, 2),
    apiKey = _React$useState50[0],
    setApiKey = _React$useState50[1];
  var set = function set(k, v) {
    setData(function (prev) {
      if (!skipHistory.current) pushHistory(prev);
      var next = _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, k, v));
      if (BG_KEYS.includes(k)) saveBg(k, v);
      return next;
    });
  };

  // Abrir crop para mainImg ou outra chave de imagem
  var openCrop = function openCrop(imgKey) {
    var src = data[imgKey];
    if (!src) return;
    setCropState({
      key: imgKey,
      src: src
    });
  };
  var handleCropConfirm = function handleCropConfirm(croppedDataUrl) {
    if (cropState) set(cropState.key, croppedDataUrl);
    setCropState(null);
  };

  // Rotação via canvas
  var rotateImg = /*#__PURE__*/function () {
    var _ref31 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(imgKey, degrees) {
      var src, rotated;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.n) {
          case 0:
            src = data[imgKey];
            if (!(!src || !window.MLRotateImage)) {
              _context11.n = 1;
              break;
            }
            return _context11.a(2);
          case 1:
            _context11.n = 2;
            return window.MLRotateImage(src, degrees);
          case 2:
            rotated = _context11.v;
            set(imgKey, rotated);
          case 3:
            return _context11.a(2);
        }
      }, _callee11);
    }));
    return function rotateImg(_x28, _x29) {
      return _ref31.apply(this, arguments);
    };
  }();
  var merge = function merge(patch) {
    setData(function (prev) {
      if (!skipHistory.current) pushHistory(prev);
      return _objectSpread(_objectSpread({}, prev), patch);
    });
  };
  useEffect(function () {
    setData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        p5_store_name: storeName
      });
    });
  }, [storeName]);
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement("header", {
    className: "header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Modelo de an\xFAncios \u2014 Mercado Livre"), /*#__PURE__*/React.createElement("p", null, "6 fotos padr\xE3o \xB7 ", productName, " \xB7 ", storeName, " \xB7 clique no texto para editar \xB7 \u2193 PNG salva 1200\xD71540")), /*#__PURE__*/React.createElement("div", {
    className: "header-actions"
  }, /*#__PURE__*/React.createElement(window.MLBrandColorPicker, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: undo,
    disabled: !undoStack.current.length,
    title: "Desfazer (Ctrl+Z)",
    style: {
      padding: '10px 12px',
      opacity: undoStack.current.length ? 1 : 0.4
    }
  }, "\u21BA"), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: redo,
    disabled: !redoStack.current.length,
    title: "Refazer (Ctrl+Y)",
    style: {
      padding: '10px 12px',
      opacity: redoStack.current.length ? 1 : 0.4
    }
  }, "\u21BB")), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: function onClick() {
      return setPreviewOpen(true);
    },
    title: "Preview como aparece no ML"
  }, "\uD83D\uDC41 Preview ML"), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: function onClick() {
      return setTweaksOpen(function (v) {
        return !v;
      });
    }
  }, tweaksOpen ? 'Fechar Tweaks' : 'Abrir Tweaks'), /*#__PURE__*/React.createElement("button", {
    className: "btn primary",
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
      var canvases, i;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.n) {
          case 0:
            canvases = document.querySelectorAll('.canvas');
            i = 0;
          case 1:
            if (!(i < canvases.length)) {
              _context12.n = 4;
              break;
            }
            _context12.n = 2;
            return MLExport(canvases[i], "".concat(productName.replace(/\s+/g, '-').toLowerCase(), "-foto-").concat(i + 1, ".png"));
          case 2:
            _context12.n = 3;
            return new Promise(function (r) {
              return setTimeout(r, 300);
            });
          case 3:
            i++;
            _context12.n = 1;
            break;
          case 4:
            return _context12.a(2);
        }
      }, _callee12);
    }))
  }, "\u2193 Baixar todas (6 PNG)"))), /*#__PURE__*/React.createElement(OpenAIKeyBanner, {
    apiKey: apiKey,
    setApiKey: setApiKey
  }), /*#__PURE__*/React.createElement(AdManager, {
    data: data,
    productName: productName,
    storeName: storeName,
    onLoad: merge,
    set: set,
    setProductName: setProductName,
    setStoreName: setStoreName
  }), /*#__PURE__*/React.createElement(UploadZone, {
    onGenerate: merge,
    productName: productName,
    setProductName: setProductName,
    onRawFiles: setRawFiles
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, /*#__PURE__*/React.createElement(Slot, {
    num: 1,
    title: "Capa com destaques",
    productName: productName,
    bg: data.bg_mode ? data.bg_foto1 : null,
    extra: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VariantPicker, {
      value: data.p1_variant || 'A',
      onChange: function onChange(v) {
        return set('p1_variant', v);
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4,
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(AIGenBtn, {
      slotNum: 1,
      rawImgs: rawFiles,
      onResult: merge,
      label: "\u2726 Gerar est\xFAdio",
      title: "Gera foto com fundo branco de est\xFAdio",
      promptKeys: [1]
    }))),
    toolbar: /*#__PURE__*/React.createElement(SlotToolbar, {
      imgKey: "p1_img",
      slotKey: "p1",
      zoomKey: "p1_zoom",
      data: data,
      set: set,
      openCrop: openCrop,
      rotateImg: rotateImg,
      textMode: textMode,
      setTextMode: setTextMode,
      moveMode: moveMode,
      setMoveMode: setMoveMode
    })
  }, /*#__PURE__*/React.createElement(MLPhoto1, {
    data: _objectSpread(_objectSpread({}, data), {}, {
      __textMode: textMode,
      __moveMode: moveMode
    }),
    set: set,
    bgMode: data.bg_mode || moveMode
  })), /*#__PURE__*/React.createElement(Slot, {
    num: 2,
    title: "Caracter\xEDsticas principais",
    productName: productName,
    bg: data.bg_mode ? data.bg_foto2 : null,
    extra: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(AIGenBtn, {
      slotNum: 2,
      rawImgs: rawFiles,
      onResult: merge,
      label: "\u2726 Gerar produto + 2 closes",
      title: "Produto com 2 miniaturas de close integradas",
      promptKeys: [2]
    })),
    toolbar: /*#__PURE__*/React.createElement(SlotToolbar, {
      imgKey: "p2_img",
      slotKey: "p2",
      zoomKey: "p2_zoom",
      data: data,
      set: set,
      openCrop: openCrop,
      rotateImg: rotateImg,
      textMode: textMode,
      setTextMode: setTextMode,
      moveMode: moveMode,
      setMoveMode: setMoveMode
    })
  }, /*#__PURE__*/React.createElement(MLPhoto2, {
    data: _objectSpread(_objectSpread({}, data), {}, {
      __textMode: textMode,
      __moveMode: moveMode
    }),
    set: set,
    bgMode: data.bg_mode || moveMode
  })), /*#__PURE__*/React.createElement(Slot, {
    num: 3,
    title: "Dimens\xF5es / Especifica\xE7\xF5es",
    productName: productName,
    bg: data.bg_mode ? data.bg_foto3 : null,
    extra: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: '#6b7280',
        fontStyle: 'italic'
      }
    }, "Usa foto 1 por padr\xE3o")),
    toolbar: /*#__PURE__*/React.createElement(SlotToolbar, {
      imgKey: "p3_img",
      slotKey: "p3",
      zoomKey: "p3_zoom",
      data: data,
      set: set,
      openCrop: openCrop,
      rotateImg: rotateImg,
      textMode: textMode,
      setTextMode: setTextMode,
      moveMode: moveMode,
      setMoveMode: setMoveMode
    })
  }, /*#__PURE__*/React.createElement(MLPhoto3, {
    data: _objectSpread(_objectSpread({}, data), {}, {
      __textMode: textMode,
      __moveMode: moveMode
    }),
    set: set,
    bgMode: data.bg_mode || moveMode
  })), /*#__PURE__*/React.createElement(Slot, {
    num: 4,
    title: "Solu\xE7\xE3o ideal",
    productName: productName,
    bg: data.bg_mode ? data.bg_foto4 : null,
    extra: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(AIGenBtn, {
      slotNum: 4,
      rawImgs: rawFiles,
      onResult: merge,
      label: "\u2726 Gerar lifestyle",
      title: "Produto em uso no ambiente real",
      promptKeys: [4]
    })),
    toolbar: /*#__PURE__*/React.createElement(SlotToolbar, {
      imgKey: "p4_img",
      slotKey: "p4",
      zoomKey: "p4_zoom",
      data: data,
      set: set,
      openCrop: openCrop,
      rotateImg: rotateImg,
      textMode: textMode,
      setTextMode: setTextMode,
      moveMode: moveMode,
      setMoveMode: setMoveMode
    })
  }, /*#__PURE__*/React.createElement(MLPhoto4, {
    data: _objectSpread(_objectSpread({}, data), {}, {
      __textMode: textMode,
      __moveMode: moveMode
    }),
    set: set,
    bgMode: data.bg_mode || moveMode
  })), /*#__PURE__*/React.createElement(Slot, {
    num: 5,
    title: "Garantia + Avalia\xE7\xE3o",
    productName: productName,
    bg: data.bg_mode ? data.bg_foto5 : null,
    extra: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }),
    toolbar: /*#__PURE__*/React.createElement(SlotToolbar, {
      imgKey: "p5_img",
      slotKey: "p5",
      zoomKey: "p5_zoom",
      data: data,
      set: set,
      openCrop: openCrop,
      rotateImg: rotateImg,
      textMode: textMode,
      setTextMode: setTextMode,
      moveMode: moveMode,
      setMoveMode: setMoveMode
    })
  }, /*#__PURE__*/React.createElement(MLPhoto5, {
    data: _objectSpread(_objectSpread({}, data), {}, {
      __textMode: textMode,
      __moveMode: moveMode
    }),
    set: set,
    bgMode: data.bg_mode || moveMode
  })), /*#__PURE__*/React.createElement(Slot, {
    num: 6,
    title: "Garantia + MercadoL\xEDder Gold",
    productName: productName,
    bg: data.bg_mode ? data.bg_foto6 : null,
    extra: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center',
        flexWrap: 'wrap'
      }
    }),
    toolbar: /*#__PURE__*/React.createElement(SlotToolbar, {
      imgKey: "p6_img",
      slotKey: "p6",
      zoomKey: "p6_zoom",
      data: data,
      set: set,
      openCrop: openCrop,
      rotateImg: rotateImg,
      textMode: textMode,
      setTextMode: setTextMode,
      moveMode: moveMode,
      setMoveMode: setMoveMode
    })
  }, /*#__PURE__*/React.createElement(MLPhoto6, {
    data: _objectSpread(_objectSpread({}, data), {}, {
      __textMode: textMode,
      __moveMode: moveMode
    }),
    set: set,
    bgMode: data.bg_mode || moveMode
  }))), previewOpen && /*#__PURE__*/React.createElement(MLPreviewModal, {
    data: data,
    productName: productName,
    onClose: function onClose() {
      return setPreviewOpen(false);
    }
  }), cropState && /*#__PURE__*/React.createElement(window.MLCropOverlay, {
    src: cropState.src,
    onConfirm: handleCropConfirm,
    onCancel: function onCancel() {
      return setCropState(null);
    }
  }), tweaksOpen && /*#__PURE__*/React.createElement(TweaksUI, {
    data: data,
    set: set,
    productName: productName,
    setProductName: setProductName,
    storeName: storeName,
    setStoreName: setStoreName,
    onClose: function onClose() {
      setTweaksOpen(false);
      window.parent.postMessage({
        type: '__edit_mode_dismissed'
      }, '*');
    }
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));

// Remove o loader assim que o React montar
const _loader = document.getElementById('app-loader');
if (_loader) { _loader.style.opacity = '0'; setTimeout(() => _loader.remove(), 320); }

