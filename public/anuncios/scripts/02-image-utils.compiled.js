"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* global */
/* Image processing utilities — runs entirely in browser
   OpenAI image features: removeBgVision, improveQuality, generateVariation
*/

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function loadImg(src) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function () {
      return resolve(img);
    };
    img.onerror = reject;
    img.src = src;
  });
}
function canvasToDataURL(canvas) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'image/png';
  var quality = arguments.length > 2 ? arguments[2] : undefined;
  return canvas.toDataURL(type, quality);
}
function dataURLtoBlob(dataUrl) {
  var _dataUrl$split = dataUrl.split(','),
    _dataUrl$split2 = _slicedToArray(_dataUrl$split, 2),
    header = _dataUrl$split2[0],
    base64 = _dataUrl$split2[1];
  var mime = header.match(/:(.*?);/)[1];
  var bin = atob(base64);
  var arr = new Uint8Array(bin.length);
  for (var i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return new Blob([arr], {
    type: mime
  });
}
function resizeIfNeeded(_x) {
  return _resizeIfNeeded.apply(this, arguments);
}
function _resizeIfNeeded() {
  _resizeIfNeeded = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(dataUrl) {
    var maxPx,
      maxBytes,
      img,
      w,
      h,
      scale,
      c,
      result,
      _args = arguments;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          maxPx = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1024;
          maxBytes = _args.length > 2 && _args[2] !== undefined ? _args[2] : 3.8 * 1024 * 1024;
          _context.n = 1;
          return loadImg(dataUrl);
        case 1:
          img = _context.v;
          w = img.naturalWidth, h = img.naturalHeight;
          scale = Math.min(1, maxPx / Math.max(w, h));
          w = Math.round(w * scale);
          h = Math.round(h * scale);
          c = document.createElement('canvas');
          c.width = w;
          c.height = h;
          c.getContext('2d').drawImage(img, 0, 0, w, h);
          result = c.toDataURL('image/png');
          if (dataURLtoBlob(result).size > maxBytes) result = c.toDataURL('image/jpeg', 0.88);
          return _context.a(2, result);
      }
    }, _callee);
  }));
  return _resizeIfNeeded.apply(this, arguments);
}
function getOpenAIKey() {
  return (window.OPENAI_API_KEY || localStorage.getItem('openai_api_key') || '').trim();
}

// ---------------------------------------------------------------------------
// CHROMA KEY — local
// ---------------------------------------------------------------------------
function removeBgChroma(_x2) {
  return _removeBgChroma.apply(this, arguments);
} // ---------------------------------------------------------------------------
// AUTO-AJUSTE — local
// ---------------------------------------------------------------------------
function _removeBgChroma() {
  _removeBgChroma = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(dataUrl) {
    var opts,
      _opts$tolerance,
      tolerance,
      _opts$edgeFeather,
      edgeFeather,
      img,
      c,
      ctx,
      id,
      d,
      pts,
      br,
      bg,
      bb,
      n,
      _i,
      _pts,
      _pts$_i,
      x,
      y,
      i,
      _i2,
      dr,
      dg,
      db,
      dist,
      _args2 = arguments;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          opts = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
          _opts$tolerance = opts.tolerance, tolerance = _opts$tolerance === void 0 ? 35 : _opts$tolerance, _opts$edgeFeather = opts.edgeFeather, edgeFeather = _opts$edgeFeather === void 0 ? 3 : _opts$edgeFeather;
          _context2.n = 1;
          return loadImg(dataUrl);
        case 1:
          img = _context2.v;
          c = document.createElement('canvas');
          c.width = img.naturalWidth;
          c.height = img.naturalHeight;
          ctx = c.getContext('2d');
          ctx.drawImage(img, 0, 0);
          id = ctx.getImageData(0, 0, c.width, c.height);
          d = id.data;
          pts = [[2, 2], [c.width - 3, 2], [2, c.height - 3], [c.width - 3, c.height - 3], [Math.floor(c.width / 2), 2], [Math.floor(c.width / 2), c.height - 3]];
          br = 0, bg = 0, bb = 0, n = 0;
          for (_i = 0, _pts = pts; _i < _pts.length; _i++) {
            _pts$_i = _slicedToArray(_pts[_i], 2), x = _pts$_i[0], y = _pts$_i[1];
            i = (y * c.width + x) * 4;
            br += d[i];
            bg += d[i + 1];
            bb += d[i + 2];
            n++;
          }
          br /= n;
          bg /= n;
          bb /= n;
          for (_i2 = 0; _i2 < d.length; _i2 += 4) {
            dr = d[_i2] - br, dg = d[_i2 + 1] - bg, db = d[_i2 + 2] - bb;
            dist = Math.sqrt(dr * dr + dg * dg + db * db);
            if (dist < tolerance) {
              d[_i2 + 3] = 0;
            } else if (dist < tolerance + edgeFeather * 10) {
              d[_i2 + 3] = Math.round(d[_i2 + 3] * (dist - tolerance) / (edgeFeather * 10));
            }
          }
          ctx.putImageData(id, 0, 0);
          return _context2.a(2, canvasToDataURL(c));
      }
    }, _callee2);
  }));
  return _removeBgChroma.apply(this, arguments);
}
function autoAdjust(_x3) {
  return _autoAdjust.apply(this, arguments);
} // ---------------------------------------------------------------------------
// AUTO-NÍVEIS — local
// ---------------------------------------------------------------------------
function _autoAdjust() {
  _autoAdjust = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(dataUrl) {
    var opts,
      _opts$brightness,
      brightness,
      _opts$contrast,
      contrast,
      _opts$saturation,
      saturation,
      img,
      c,
      ctx,
      _args3 = arguments;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          opts = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
          _opts$brightness = opts.brightness, brightness = _opts$brightness === void 0 ? 1.05 : _opts$brightness, _opts$contrast = opts.contrast, contrast = _opts$contrast === void 0 ? 1.15 : _opts$contrast, _opts$saturation = opts.saturation, saturation = _opts$saturation === void 0 ? 1.12 : _opts$saturation;
          _context3.n = 1;
          return loadImg(dataUrl);
        case 1:
          img = _context3.v;
          c = document.createElement('canvas');
          c.width = img.naturalWidth;
          c.height = img.naturalHeight;
          ctx = c.getContext('2d');
          ctx.filter = "brightness(".concat(brightness, ") contrast(").concat(contrast, ") saturate(").concat(saturation, ")");
          ctx.drawImage(img, 0, 0);
          return _context3.a(2, canvasToDataURL(c, 'image/jpeg', 0.92));
      }
    }, _callee3);
  }));
  return _autoAdjust.apply(this, arguments);
}
function autoLevels(_x4) {
  return _autoLevels.apply(this, arguments);
} // ---------------------------------------------------------------------------
// SMART REMOVE BG — MediaPipe local
// ---------------------------------------------------------------------------
function _autoLevels() {
  _autoLevels = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(dataUrl) {
    var img, c, ctx, id, d, rMin, rMax, gMin, gMax, bMin, bMax, i, clip, rR, gR, bR, _i3;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.n = 1;
          return loadImg(dataUrl);
        case 1:
          img = _context4.v;
          c = document.createElement('canvas');
          c.width = img.naturalWidth;
          c.height = img.naturalHeight;
          ctx = c.getContext('2d');
          ctx.drawImage(img, 0, 0);
          id = ctx.getImageData(0, 0, c.width, c.height);
          d = id.data;
          rMin = 255, rMax = 0, gMin = 255, gMax = 0, bMin = 255, bMax = 0;
          for (i = 0; i < d.length; i += 32) {
            if (d[i] < rMin) rMin = d[i];
            if (d[i] > rMax) rMax = d[i];
            if (d[i + 1] < gMin) gMin = d[i + 1];
            if (d[i + 1] > gMax) gMax = d[i + 1];
            if (d[i + 2] < bMin) bMin = d[i + 2];
            if (d[i + 2] > bMax) bMax = d[i + 2];
          }
          clip = 5;
          rMin = Math.max(0, rMin + clip);
          rMax = Math.min(255, rMax - clip);
          gMin = Math.max(0, gMin + clip);
          gMax = Math.min(255, gMax - clip);
          bMin = Math.max(0, bMin + clip);
          bMax = Math.min(255, bMax - clip);
          rR = rMax - rMin || 1, gR = gMax - gMin || 1, bR = bMax - bMin || 1;
          for (_i3 = 0; _i3 < d.length; _i3 += 4) {
            d[_i3] = Math.max(0, Math.min(255, (d[_i3] - rMin) / rR * 255));
            d[_i3 + 1] = Math.max(0, Math.min(255, (d[_i3 + 1] - gMin) / gR * 255));
            d[_i3 + 2] = Math.max(0, Math.min(255, (d[_i3 + 2] - bMin) / bR * 255));
          }
          ctx.putImageData(id, 0, 0);
          return _context4.a(2, canvasToDataURL(c, 'image/jpeg', 0.92));
      }
    }, _callee4);
  }));
  return _autoLevels.apply(this, arguments);
}
var _segmenter = null;
function getSegmenter() {
  return _getSegmenter.apply(this, arguments);
}
function _getSegmenter() {
  _getSegmenter = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
    var _window$MediaPipeVisi, ImageSegmenter, FilesetResolver, fileset;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          if (!_segmenter) {
            _context5.n = 1;
            break;
          }
          return _context5.a(2, _segmenter);
        case 1:
          if (window.MediaPipeVision) {
            _context5.n = 2;
            break;
          }
          _context5.n = 2;
          return new Promise(function (resolve, reject) {
            var s = document.createElement('script');
            s.type = 'module';
            s.textContent = "\n        import{ImageSegmenter,FilesetResolver}from'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/vision_bundle.mjs';\n        window.MediaPipeVision={ImageSegmenter,FilesetResolver};\n        window.dispatchEvent(new Event('mp-loaded'));\n      ";
            window.addEventListener('mp-loaded', resolve, {
              once: true
            });
            setTimeout(function () {
              return reject(new Error('MediaPipe não carregou'));
            }, 15000);
            document.head.appendChild(s);
          });
        case 2:
          _window$MediaPipeVisi = window.MediaPipeVision, ImageSegmenter = _window$MediaPipeVisi.ImageSegmenter, FilesetResolver = _window$MediaPipeVisi.FilesetResolver;
          _context5.n = 3;
          return FilesetResolver.forVisionTasks('https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm');
        case 3:
          fileset = _context5.v;
          _context5.n = 4;
          return ImageSegmenter.createFromOptions(fileset, {
            baseOptions: {
              modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_multiclass_256x256/float32/latest/selfie_multiclass_256x256.tflite',
              delegate: 'GPU'
            },
            runningMode: 'IMAGE',
            outputCategoryMask: true,
            outputConfidenceMasks: false
          });
        case 4:
          _segmenter = _context5.v;
          return _context5.a(2, _segmenter);
      }
    }, _callee5);
  }));
  return _getSegmenter.apply(this, arguments);
}
function removeBgSmart(_x5) {
  return _removeBgSmart.apply(this, arguments);
} // ---------------------------------------------------------------------------
// ★ OPENAI — Remover fundo via GPT-4o Vision + canvas masking
// ---------------------------------------------------------------------------
function _removeBgSmart() {
  _removeBgSmart = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(dataUrl) {
    var img, seg, c, ctx, result, mask, maskData, mw, mh, id, d, y, my, x;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          _context6.n = 1;
          return loadImg(dataUrl);
        case 1:
          img = _context6.v;
          _context6.n = 2;
          return getSegmenter();
        case 2:
          seg = _context6.v;
          c = document.createElement('canvas');
          c.width = img.naturalWidth;
          c.height = img.naturalHeight;
          ctx = c.getContext('2d');
          ctx.drawImage(img, 0, 0);
          result = seg.segment(img);
          mask = result.categoryMask;
          maskData = mask.getAsUint8Array();
          mw = mask.width, mh = mask.height;
          id = ctx.getImageData(0, 0, c.width, c.height);
          d = id.data;
          for (y = 0; y < c.height; y++) {
            my = Math.floor(y * mh / c.height);
            for (x = 0; x < c.width; x++) {
              if (maskData[my * mw + Math.floor(x * mw / c.width)] === 0) d[(y * c.width + x) * 4 + 3] = 0;
            }
          }
          ctx.putImageData(id, 0, 0);
          mask.close();
          return _context6.a(2, canvasToDataURL(c));
      }
    }, _callee6);
  }));
  return _removeBgSmart.apply(this, arguments);
}
function removeBgVision(_x6) {
  return _removeBgVision.apply(this, arguments);
} // ---------------------------------------------------------------------------
// ★ OPENAI — Melhoria de qualidade via gpt-image-1 edit
// ---------------------------------------------------------------------------
function _removeBgVision() {
  _removeBgVision = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(dataUrl) {
    var key, resized, base64, visionResp, _err$error, err, visionData, bgColor, txt, m, img, c, ctx, id, d, _bgColor, bg_r, bg_g, bg_b, tolerance, feather, i, dr, dg, db, dist;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.n) {
        case 0:
          key = getOpenAIKey();
          if (key) {
            _context7.n = 1;
            break;
          }
          throw new Error('Configure sua chave OpenAI primeiro.');
        case 1:
          _context7.n = 2;
          return resizeIfNeeded(dataUrl, 512);
        case 2:
          resized = _context7.v;
          base64 = resized.split(',')[1];
          _context7.n = 3;
          return fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: "Bearer ".concat(key)
            },
            body: JSON.stringify({
              model: 'gpt-4o-mini',
              max_tokens: 80,
              messages: [{
                role: 'user',
                content: [{
                  type: 'image_url',
                  image_url: {
                    url: "data:image/png;base64,".concat(base64),
                    detail: 'low'
                  }
                }, {
                  type: 'text',
                  text: 'Responda SOMENTE com um JSON no formato {"bg_r":N,"bg_g":N,"bg_b":N,"tolerance":N} onde bg_r/g/b é a cor RGB média do fundo (não do produto) e tolerance é 20-60 (maior se fundo for gradiente ou irregular). Não explique.'
                }]
              }]
            })
          });
        case 3:
          visionResp = _context7.v;
          if (visionResp.ok) {
            _context7.n = 5;
            break;
          }
          _context7.n = 4;
          return visionResp.json();
        case 4:
          err = _context7.v;
          throw new Error(((_err$error = err.error) === null || _err$error === void 0 ? void 0 : _err$error.message) || 'Erro Vision API');
        case 5:
          _context7.n = 6;
          return visionResp.json();
        case 6:
          visionData = _context7.v;
          bgColor = {
            bg_r: 240,
            bg_g: 240,
            bg_b: 240,
            tolerance: 35
          };
          try {
            txt = visionData.choices[0].message.content;
            m = txt.match(/\{[\s\S]*\}/);
            if (m) bgColor = _objectSpread(_objectSpread({}, bgColor), JSON.parse(m[0]));
          } catch (_) {}
          _context7.n = 7;
          return loadImg(dataUrl);
        case 7:
          img = _context7.v;
          c = document.createElement('canvas');
          c.width = img.naturalWidth;
          c.height = img.naturalHeight;
          ctx = c.getContext('2d');
          ctx.drawImage(img, 0, 0);
          id = ctx.getImageData(0, 0, c.width, c.height);
          d = id.data;
          _bgColor = bgColor, bg_r = _bgColor.bg_r, bg_g = _bgColor.bg_g, bg_b = _bgColor.bg_b, tolerance = _bgColor.tolerance;
          feather = 15;
          for (i = 0; i < d.length; i += 4) {
            dr = d[i] - bg_r, dg = d[i + 1] - bg_g, db = d[i + 2] - bg_b;
            dist = Math.sqrt(dr * dr + dg * dg + db * db);
            if (dist < tolerance) {
              d[i + 3] = 0;
            } else if (dist < tolerance + feather) {
              d[i + 3] = Math.round(d[i + 3] * (dist - tolerance) / feather);
            }
          }
          ctx.putImageData(id, 0, 0);
          return _context7.a(2, canvasToDataURL(c));
      }
    }, _callee7);
  }));
  return _removeBgVision.apply(this, arguments);
}
function improveQuality(_x7) {
  return _improveQuality.apply(this, arguments);
} // ---------------------------------------------------------------------------
// ★ OPENAI — Gerar variação via gpt-image-1
// ---------------------------------------------------------------------------
function _improveQuality() {
  _improveQuality = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(dataUrl) {
    var key, resized, pngBlob, img, c, form, resp, _err$error2, err, data, b64, r, bl;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.n) {
        case 0:
          key = getOpenAIKey();
          if (key) {
            _context8.n = 1;
            break;
          }
          throw new Error('Configure sua chave OpenAI primeiro.');
        case 1:
          _context8.n = 2;
          return resizeIfNeeded(dataUrl, 1024);
        case 2:
          resized = _context8.v;
          pngBlob = dataURLtoBlob(resized);
          if (!(pngBlob.type !== 'image/png')) {
            _context8.n = 4;
            break;
          }
          _context8.n = 3;
          return loadImg(resized);
        case 3:
          img = _context8.v;
          c = document.createElement('canvas');
          c.width = img.naturalWidth;
          c.height = img.naturalHeight;
          c.getContext('2d').drawImage(img, 0, 0);
          pngBlob = dataURLtoBlob(c.toDataURL('image/png'));
        case 4:
          form = new FormData();
          form.append('model', 'gpt-image-1-mini');
          form.append('image', pngBlob, 'image.png');
          form.append('prompt', 'Melhore esta foto de produto para e-commerce: corrija iluminação, aumente nitidez, equilibre cores e branqueie levemente o fundo mantendo o produto idêntico. Preserve todos os detalhes do produto sem alterar forma ou texto.');
          form.append('n', '1');
          form.append('size', '1024x1024');
          _context8.n = 5;
          return fetch('https://api.openai.com/v1/images/edits', {
            method: 'POST',
            headers: {
              Authorization: "Bearer ".concat(key)
            },
            body: form
          });
        case 5:
          resp = _context8.v;
          if (resp.ok) {
            _context8.n = 7;
            break;
          }
          _context8.n = 6;
          return resp.json();
        case 6:
          err = _context8.v;
          throw new Error(((_err$error2 = err.error) === null || _err$error2 === void 0 ? void 0 : _err$error2.message) || 'Erro Images API');
        case 7:
          _context8.n = 8;
          return resp.json();
        case 8:
          data = _context8.v;
          b64 = data.data[0].b64_json || data.data[0].url;
          if (!(typeof b64 === 'string' && b64.startsWith('http'))) {
            _context8.n = 11;
            break;
          }
          _context8.n = 9;
          return fetch(b64);
        case 9:
          r = _context8.v;
          _context8.n = 10;
          return r.blob();
        case 10:
          bl = _context8.v;
          return _context8.a(2, new Promise(function (res) {
            var fr = new FileReader();
            fr.onload = function (e) {
              return res(e.target.result);
            };
            fr.readAsDataURL(bl);
          }));
        case 11:
          return _context8.a(2, "data:image/png;base64,".concat(b64));
      }
    }, _callee8);
  }));
  return _improveQuality.apply(this, arguments);
}
function generateVariation(_x8) {
  return _generateVariation.apply(this, arguments);
} // ---------------------------------------------------------------------------
// Export global
// ---------------------------------------------------------------------------
function _generateVariation() {
  _generateVariation = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(dataUrl) {
    var key, resized, pngBlob, img, c, form, resp, _err$error3, err, data, b64, r, bl;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.n) {
        case 0:
          key = getOpenAIKey();
          if (key) {
            _context9.n = 1;
            break;
          }
          throw new Error('Configure sua chave OpenAI primeiro.');
        case 1:
          _context9.n = 2;
          return resizeIfNeeded(dataUrl, 1024);
        case 2:
          resized = _context9.v;
          pngBlob = dataURLtoBlob(resized);
          if (!(pngBlob.type !== 'image/png')) {
            _context9.n = 4;
            break;
          }
          _context9.n = 3;
          return loadImg(resized);
        case 3:
          img = _context9.v;
          c = document.createElement('canvas');
          c.width = img.naturalWidth;
          c.height = img.naturalHeight;
          c.getContext('2d').drawImage(img, 0, 0);
          pngBlob = dataURLtoBlob(c.toDataURL('image/png'));
        case 4:
          form = new FormData();
          form.append('model', 'gpt-image-1-mini');
          form.append('image', pngBlob, 'image.png');
          form.append('prompt', 'Recrie esta foto de produto para e-commerce com fundo branco puro e limpo, iluminação profissional de estúdio, sombra suave, sem reflexos e alta definição. O produto deve ser idêntico ao original.');
          form.append('n', '1');
          form.append('size', '1024x1024');
          _context9.n = 5;
          return fetch('https://api.openai.com/v1/images/edits', {
            method: 'POST',
            headers: {
              Authorization: "Bearer ".concat(key)
            },
            body: form
          });
        case 5:
          resp = _context9.v;
          if (resp.ok) {
            _context9.n = 7;
            break;
          }
          _context9.n = 6;
          return resp.json();
        case 6:
          err = _context9.v;
          throw new Error(((_err$error3 = err.error) === null || _err$error3 === void 0 ? void 0 : _err$error3.message) || 'Erro Images API');
        case 7:
          _context9.n = 8;
          return resp.json();
        case 8:
          data = _context9.v;
          b64 = data.data[0].b64_json || data.data[0].url;
          if (!(typeof b64 === 'string' && b64.startsWith('http'))) {
            _context9.n = 11;
            break;
          }
          _context9.n = 9;
          return fetch(b64);
        case 9:
          r = _context9.v;
          _context9.n = 10;
          return r.blob();
        case 10:
          bl = _context9.v;
          return _context9.a(2, new Promise(function (res) {
            var fr = new FileReader();
            fr.onload = function (e) {
              return res(e.target.result);
            };
            fr.readAsDataURL(bl);
          }));
        case 11:
          return _context9.a(2, "data:image/png;base64,".concat(b64));
      }
    }, _callee9);
  }));
  return _generateVariation.apply(this, arguments);
}
window.MLImgUtils = {
  removeBgChroma: removeBgChroma,
  removeBgSmart: removeBgSmart,
  autoAdjust: autoAdjust,
  autoLevels: autoLevels,
  removeBgVision: removeBgVision,
  improveQuality: improveQuality,
  generateVariation: generateVariation
};
