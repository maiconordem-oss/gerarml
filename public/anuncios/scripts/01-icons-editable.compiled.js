"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
var _React = React,
  useState = _React.useState,
  useRef = _React.useRef,
  useEffect = _React.useEffect,
  useCallback = _React.useCallback;

/* =============== ICONS =============== */
var I = {
  check: function check(p) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("polyline", {
      points: "20 6 9 17 4 12"
    }));
  },
  shield: function shield(p) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("path", {
      d: "M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m9 12 2 2 4-4"
    }));
  },
  truck: function truck(p) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("rect", {
      x: "1",
      y: "6",
      width: "14",
      height: "11",
      rx: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15 9h4l3 4v4h-7"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "19",
      r: "2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "19",
      r: "2"
    }));
  },
  tools: function tools(p) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("path", {
      d: "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-2.4 2.5-2.5z"
    }));
  },
  gear: function gear(p) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h0a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"
    }));
  },
  ruler: function ruler(p) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("path", {
      d: "M21 3 3 21M9 3l1 2M13 3l3 3M17 3l4 4M5 7l3 3M5 11l5 5M5 15l3 3M9 19l2 2"
    }));
  },
  feather: function feather(p) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("path", {
      d: "M20.2 13.8A8 8 0 0 0 8.5 2.5L3 8v13h13l4.2-7.2z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 8 2 22"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17 16H9"
    }));
  },
  target: function target(p) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1.5",
      fill: "currentColor"
    }));
  },
  star: function star(p) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("polygon", {
      points: "12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9 12 2"
    }));
  },
  alert: function alert(p) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("path", {
      d: "M12 2 1 21h22L12 2z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "9",
      x2: "12",
      y2: "13"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "17",
      x2: "12.01",
      y2: "17"
    }));
  },
  chat: function chat(p) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("path", {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    }));
  },
  clock: function clock(p) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 7 12 12 15 14"
    }));
  },
  medal: function medal(p) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "14",
      r: "6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 14 5 3l4 1 3-3 3 3 4-1-3 11"
    }));
  },
  bolt: function bolt(p) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("polygon", {
      points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
    }));
  },
  leaf: function leaf(p) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("path", {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
    }));
  },
  diamond: function diamond(p) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("path", {
      d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.58a2.41 2.41 0 0 0 3.41 0l7.59-7.58a2.41 2.41 0 0 0 0-3.41l-7.59-7.58a2.41 2.41 0 0 0-3.41 0Z"
    }));
  },
  "package": function _package(p) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, p), /*#__PURE__*/React.createElement("path", {
      d: "m7.5 4.27 9 5.15M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m3.3 7 8.7 5 8.7-5M12 22V12"
    }));
  }
};

/* =============== CURVED ARROW =============== */
function CurvedArrow(_ref) {
  var from = _ref.from,
    to = _ref.to,
    _ref$curve = _ref.curve,
    curve = _ref$curve === void 0 ? 0.3 : _ref$curve,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "#1F7A3A" : _ref$color;
  var x1 = from.x,
    y1 = from.y,
    x2 = to.x,
    y2 = to.y;
  var mx = (x1 + x2) / 2,
    my = (y1 + y2) / 2;
  var dx = x2 - x1,
    dy = y2 - y1;
  var len = Math.hypot(dx, dy);
  var nx = -dy / len,
    ny = dx / len;
  var cx = mx + nx * curve * len,
    cy = my + ny * curve * len;
  return /*#__PURE__*/React.createElement("svg", {
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none'
    },
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("marker", {
    id: "arr-" + color.replace('#', ''),
    viewBox: "0 0 10 10",
    refX: "8",
    refY: "5",
    markerWidth: "6",
    markerHeight: "6",
    orient: "auto"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,0 L10,5 L0,10 Z",
    fill: color
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M " + x1 + " " + y1 + " Q " + cx + " " + cy + " " + x2 + " " + y2,
    fill: "none",
    stroke: color,
    strokeWidth: "0.4",
    markerEnd: "url(#arr-" + color.replace('#', '') + ")",
    vectorEffect: "non-scaling-stroke",
    style: {
      strokeWidth: 2
    }
  }));
}

/* =============== EDITABLE TEXT =============== */
function E(_ref2) {
  var value = _ref2.value,
    onChange = _ref2.onChange,
    className = _ref2.className,
    style = _ref2.style,
    multi = _ref2.multi;
  var Tag = multi ? 'div' : 'span';
  var ref = useRef(null);
  var prevValue = useRef(value);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    focused = _useState2[0],
    setFocused = _useState2[1];
  var handleFocus = function handleFocus() {
    prevValue.current = ref.current ? ref.current.innerHTML : value;
    setFocused(true);
    window.__mlFmtActive = {
      el: ref.current,
      onSave: function onSave(html) {
        return onChange(html);
      },
      onCancel: function onCancel() {
        if (ref.current) ref.current.innerHTML = prevValue.current;
      }
    };
  };
  var handleBlur = function handleBlur() {
    // Delay — deixa SlotToolbar capturar o clique antes de limpar
    setTimeout(function () {
      if (document.activeElement === ref.current) return;
      setFocused(false);
      if (ref.current) onChange(ref.current.innerHTML);
      if (window.__mlFmtActive && window.__mlFmtActive.el === ref.current) {
        window.__mlFmtActive = null;
      }
    }, 150);
  };
  var handleKeyDown = function handleKeyDown(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
      e.preventDefault();
      document.execCommand('bold');
      onChange(ref.current.innerHTML);
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'i') {
      e.preventDefault();
      document.execCommand('italic');
      onChange(ref.current.innerHTML);
    }
    if (e.key === 'Escape') {
      if (ref.current) ref.current.innerHTML = prevValue.current;
      ref.current && ref.current.blur();
      e.preventDefault();
    }
    if (e.key === 'Enter' && !multi) {
      ref.current && ref.current.blur();
      e.preventDefault();
    }
  };
  return /*#__PURE__*/React.createElement(Tag, {
    ref: ref,
    className: className,
    style: _objectSpread(_objectSpread({}, style), {}, {
      outline: focused ? '2px solid #3b82f6' : 'none',
      outlineOffset: focused ? 3 : 0,
      borderRadius: focused ? 4 : 0,
      transition: 'outline .1s',
      cursor: 'text'
    }),
    contentEditable: true,
    suppressContentEditableWarning: true,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    dangerouslySetInnerHTML: {
      __html: (value || '').replace(/\n/g, '<br/>')
    }
  });
}

/* =============== EXPORT TO PNG =============== */
var FONT_FILES = [{
  family: 'Inter',
  file: '/anuncios/fonts/inter-latin-ext-400.woff2',
  range: 'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF'
}, {
  family: 'Inter',
  file: '/anuncios/fonts/inter-latin-400.woff2',
  range: 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'
}, {
  family: 'Montserrat',
  file: '/anuncios/fonts/montserrat-latin-ext.woff2',
  range: 'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF'
}, {
  family: 'Montserrat',
  file: '/anuncios/fonts/montserrat-latin.woff2',
  range: 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'
}];
var fontEmbedCache = null;
var TRANSPARENT_IMAGE_PLACEHOLDER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/p9sAAAAASUVORK5CYII=';
function arrayBufferToBase64(buffer) {
  var bytes = new Uint8Array(buffer);
  var binary = '';
  for (var i = 0; i < bytes.length; i += 0x8000) binary += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  return btoa(binary);
}
function buildLocalFontEmbedCSS() {
  return _buildLocalFontEmbedCSS.apply(this, arguments);
}
function _buildLocalFontEmbedCSS() {
  _buildLocalFontEmbedCSS = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var blocks;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          if (!fontEmbedCache) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, fontEmbedCache);
        case 1:
          _context2.n = 2;
          return Promise.all(FONT_FILES.map(/*#__PURE__*/function () {
            var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref1) {
              var family, file, range, response, base64, _t;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    family = _ref1.family, file = _ref1.file, range = _ref1.range;
                    _context.n = 1;
                    return fetch(file, {
                      cache: 'force-cache'
                    });
                  case 1:
                    response = _context.v;
                    if (response.ok) {
                      _context.n = 2;
                      break;
                    }
                    throw new Error('Fonte não encontrada: ' + file);
                  case 2:
                    _t = arrayBufferToBase64;
                    _context.n = 3;
                    return response.arrayBuffer();
                  case 3:
                    base64 = _t(_context.v);
                    return _context.a(2, "@font-face{font-family:'" + family + "';font-style:normal;font-weight:100 900;font-display:block;src:url(data:font/woff2;base64," + base64 + ") format('woff2');unicode-range:" + range + ";}");
                }
              }, _callee);
            }));
            return function (_x4) {
              return _ref10.apply(this, arguments);
            };
          }()));
        case 2:
          blocks = _context2.v;
          fontEmbedCache = blocks.join('\n') + '\n*{font-synthesis:none!important;text-rendering:geometricPrecision!important;}';
          return _context2.a(2, fontEmbedCache);
      }
    }, _callee2);
  }));
  return _buildLocalFontEmbedCSS.apply(this, arguments);
}
function waitForTemplateFonts() {
  return _waitForTemplateFonts.apply(this, arguments);
}
function _waitForTemplateFonts() {
  _waitForTemplateFonts = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    var _t2;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          if (!(document.fonts && document.fonts.load)) {
            _context3.n = 1;
            break;
          }
          _context3.n = 1;
          return Promise.all([document.fonts.load('400 24px Inter'), document.fonts.load('600 24px Inter'), document.fonts.load('700 48px Montserrat'), document.fonts.load('800 56px Montserrat')]);
        case 1:
          _context3.n = 2;
          return document.fonts;
        case 2:
          _t2 = _context3.v;
          if (!_t2) {
            _context3.n = 3;
            break;
          }
          document.fonts.ready;
        case 3:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return _waitForTemplateFonts.apply(this, arguments);
}
function exportCanvas(_x, _x2) {
  return _exportCanvas.apply(this, arguments);
}
/* =============== PAN + ZOOM IMAGE — livre, sem clip ===============
   O produto flutua em position:absolute sobre o canvas inteiro.
   - Arrastar: move livremente por todo o canvas (sem clip)
   - Scroll / wheel: zoom centrado no cursor
   - Zoom externo (ZoomBar): continua funcionando via prop zoom
   Estado salvo em panKey = { x, y, scale }
   wrapStyle ainda aceito para compatibilidade mas ignorado (posição livre)
*/
function _exportCanvas() {
  _exportCanvas = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(node, filename) {
    var prevTransform, fontEmbedCSS, dataUrl, a, details, _t3;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          if (window.htmlToImage) {
            _context4.n = 1;
            break;
          }
          alert('Carregando biblioteca de export... aguarde 1s e tente de novo.');
          return _context4.a(2);
        case 1:
          prevTransform = '';
          _context4.p = 2;
          _context4.n = 3;
          return waitForTemplateFonts();
        case 3:
          prevTransform = node.style.transform;
          node.style.transform = 'scale(1)';
          node.style.transformOrigin = 'top left';
          node.classList.add('exporting');
          _context4.n = 4;
          return new Promise(function (r) {
            return setTimeout(r, 80);
          });
        case 4:
          _context4.n = 5;
          return buildLocalFontEmbedCSS();
        case 5:
          fontEmbedCSS = _context4.v;
          _context4.n = 6;
          return window.htmlToImage.toPng(node, {
            width: 1200,
            height: 1540,
            pixelRatio: 1,
            fontEmbedCSS: fontEmbedCSS,
            imagePlaceholder: TRANSPARENT_IMAGE_PLACEHOLDER
            // cacheBust removido — causava re-fetch de URLs externas no export
          });
        case 6:
          dataUrl = _context4.v;
          node.style.transform = prevTransform;
          node.classList.remove('exporting');
          a = document.createElement('a');
          a.href = dataUrl;
          a.download = filename;
          a.click();
          _context4.n = 8;
          break;
        case 7:
          _context4.p = 7;
          _t3 = _context4.v;
          console.error('Falha no export PNG:', _t3);
          details = _t3 && _t3.message || (_t3 instanceof Event ? 'alguma imagem do template não carregou' : String(_t3 || 'erro desconhecido'));
          alert('Erro ao exportar: ' + details);
          node.style.transform = prevTransform;
          node.classList.remove('exporting');
        case 8:
          return _context4.a(2);
      }
    }, _callee4, null, [[2, 7]]);
  }));
  return _exportCanvas.apply(this, arguments);
}
function PanZoomImg(_ref3) {
  var src = _ref3.src,
    _ref3$zoom = _ref3.zoom,
    zoom = _ref3$zoom === void 0 ? 1 : _ref3$zoom,
    panKey = _ref3.panKey,
    data = _ref3.data,
    set = _ref3.set,
    _ref3$wrapStyle = _ref3.wrapStyle,
    wrapStyle = _ref3$wrapStyle === void 0 ? {} : _ref3$wrapStyle,
    _ref3$disabled = _ref3.disabled,
    disabled = _ref3$disabled === void 0 ? false : _ref3$disabled;
  var state = panKey && data && data[panKey] || {
    x: 0,
    y: 0,
    scale: 1
  };
  var imgRef = useRef(null);
  var dragging = useRef(false);
  var lastZoom = useRef(zoom);
  // Quando textMode está ativo, desabilita interação com a imagem
  var isLocked = !!(data && data.__textMode);

  // Quando zoom externo muda, propaga pro scale interno proporcionalmente
  useEffect(function () {
    if (!set || !panKey) return;
    if (Math.abs(zoom - lastZoom.current) < 0.001) return;
    var ratio = zoom / (lastZoom.current || 1);
    lastZoom.current = zoom;
    set(panKey, _objectSpread(_objectSpread({}, state), {}, {
      scale: (state.scale || 1) * ratio
    }));
  }, [zoom]);

  // Descobrir o scale visual do canvas (para converter coords do mouse)
  var getCanvasScale = function getCanvasScale() {
    var el = imgRef.current;
    while (el && !(el.classList && el.classList.contains('canvas'))) el = el.parentElement;
    var rect = el && el.getBoundingClientRect();
    return rect ? rect.width / 1200 : 1;
  };

  // ── Drag ──
  var onMouseDown = function onMouseDown(e) {
    if (disabled || !set || !panKey) return;
    e.preventDefault();
    e.stopPropagation();
    dragging.current = true;
    var startX = e.clientX,
      startY = e.clientY;
    var startState = _objectSpread({}, state);
    var canvasScale = getCanvasScale();
    var onMove = function onMove(ev) {
      if (!dragging.current) return;
      set(panKey, _objectSpread(_objectSpread({}, startState), {}, {
        x: startState.x + (ev.clientX - startX) / canvasScale,
        y: startState.y + (ev.clientY - startY) / canvasScale
      }));
    };
    var _onUp = function onUp() {
      dragging.current = false;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', _onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', _onUp);
  };

  // ── Scroll / wheel zoom ──
  var onWheel = function onWheel(e) {
    if (disabled || !set || !panKey) return;
    e.preventDefault();
    e.stopPropagation();
    var canvasScale = getCanvasScale();
    var delta = e.deltaY < 0 ? 1.08 : 0.93;
    var curScale = state.scale || 1;
    var newScale = Math.max(0.05, Math.min(8, curScale * delta));

    // Zoom centrado no cursor: ajusta x/y para que o ponto sob o cursor não mova
    var el = imgRef.current;
    if (el) {
      var rect = el.getBoundingClientRect();
      // posição do cursor relativa ao centro da imagem, em coords canvas
      var mx = (e.clientX - rect.left - rect.width / 2) / canvasScale;
      var my = (e.clientY - rect.top - rect.height / 2) / canvasScale;
      var ratio = newScale / curScale;
      set(panKey, {
        x: state.x + mx - mx * ratio,
        y: state.y + my - my * ratio,
        scale: newScale
      });
    } else {
      set(panKey, _objectSpread(_objectSpread({}, state), {}, {
        scale: newScale
      }));
    }
  };
  if (!src) return null;
  var sc = state.scale || 1;
  var canInteract = !disabled && !isLocked && set && panKey;
  var BASE = 800;
  return /*#__PURE__*/React.createElement("div", {
    ref: imgRef,
    "data-panzoom": "true",
    onMouseDown: canInteract ? onMouseDown : undefined,
    onWheel: canInteract ? onWheel : undefined,
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: BASE * sc,
      height: 'auto',
      transform: "translate(calc(-50% + ".concat(state.x, "px), calc(-50% + ").concat(state.y, "px))"),
      cursor: isLocked ? 'default' : canInteract ? dragging.current ? 'grabbing' : 'grab' : 'default',
      zIndex: isLocked ? 0 : 5,
      pointerEvents: isLocked ? 'none' : 'auto',
      userSelect: 'none',
      touchAction: 'none',
      opacity: isLocked ? 0.85 : 1,
      transition: 'opacity .2s, z-index 0s'
    },
    title: isLocked ? 'Modo texto ativo — imagem bloqueada' : canInteract ? 'Arraste para mover · Scroll para zoom' : undefined
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    draggable: false,
    style: {
      width: '100%',
      height: 'auto',
      display: 'block',
      pointerEvents: 'none'
    }
  }), canInteract && (state.x !== 0 || state.y !== 0 || Math.abs(sc - 1) > 0.05) && /*#__PURE__*/React.createElement("div", {
    "data-export-hide": "true",
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    },
    onClick: function onClick(e) {
      e.stopPropagation();
      set(panKey, {
        x: 0,
        y: 0,
        scale: 1
      });
    },
    style: {
      position: 'absolute',
      top: -28,
      right: 0,
      fontSize: 10,
      fontWeight: 700,
      padding: '3px 8px',
      border: '1px solid rgba(255,255,255,.5)',
      borderRadius: 5,
      background: 'rgba(0,0,0,.6)',
      color: '#fff',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, "\u21BA reset"));
}

/* =============== DRAGGABLE COM GUIDES =============== */
function Draggable(_ref4) {
  var id = _ref4.id,
    data = _ref4.data,
    set = _ref4.set,
    children = _ref4.children,
    _ref4$defaultPos = _ref4.defaultPos,
    defaultPos = _ref4$defaultPos === void 0 ? {
      x: 0,
      y: 0
    } : _ref4$defaultPos,
    enabled = _ref4.enabled,
    style = _ref4.style;
  var key = 'pos_' + id;
  var pos = data[key] || defaultPos;
  var ref = useRef(null);
  var _useState3 = useState({
      h: null,
      v: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    guides = _useState4[0],
    setGuides = _useState4[1];

  // Ativo se: bgMode/enabled passado OU modo mover global
  var isEnabled = enabled || !!(data && data.__moveMode);
  var getCanvasScale = function getCanvasScale() {
    var el = ref.current;
    while (el && !(el.classList && el.classList.contains('canvas'))) el = el.parentElement;
    var rect = el && el.getBoundingClientRect();
    return rect ? rect.width / 1200 : 1;
  };
  var onMouseDown = function onMouseDown(e) {
    if (!isEnabled) return;
    // Se está em modo mover, impede que o clique propague para o texto
    if (data && data.__moveMode) e.preventDefault();
    e.stopPropagation();
    var startX = e.clientX,
      startY = e.clientY,
      startPos = _objectSpread({}, pos);
    var scale = getCanvasScale();
    var onMove = function onMove(ev) {
      var nx = startPos.x + (ev.clientX - startX) / scale;
      var ny = startPos.y + (ev.clientY - startY) / scale;
      var sx = Math.abs(nx) < 10 ? 0 : nx;
      var sy = Math.abs(ny) < 10 ? 0 : ny;
      set(key, {
        x: sx,
        y: sy
      });
      setGuides({
        h: Math.abs(ny) < 10 ? 50 : null,
        v: Math.abs(nx) < 10 ? 50 : null
      });
    };
    var _onUp2 = function onUp() {
      setGuides({
        h: null,
        v: null
      });
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', _onUp2);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', _onUp2);
  };
  var wrapperStyle = _objectSpread(_objectSpread({}, style), {}, {
    transform: 'translate(' + pos.x + 'px,' + pos.y + 'px)' + (style && style.transform ? ' ' + style.transform : ''),
    cursor: isEnabled ? 'move' : undefined,
    outline: isEnabled ? '2px dashed rgba(245,158,11,.6)' : 'none',
    outlineOffset: isEnabled ? 4 : 0
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, isEnabled && guides.h !== null && /*#__PURE__*/React.createElement("div", {
    "data-export-hide": "true",
    style: {
      position: 'absolute',
      top: guides.h + '%',
      left: 0,
      right: 0,
      height: 2,
      background: '#ef4444',
      opacity: .8,
      zIndex: 999,
      pointerEvents: 'none'
    }
  }), isEnabled && guides.v !== null && /*#__PURE__*/React.createElement("div", {
    "data-export-hide": "true",
    style: {
      position: 'absolute',
      left: guides.v + '%',
      top: 0,
      bottom: 0,
      width: 2,
      background: '#ef4444',
      opacity: .8,
      zIndex: 999,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: wrapperStyle,
    onMouseDown: onMouseDown
  }, children));
}

/* =============== AJUSTES DE IMAGEM POR SLOT =============== */
function ImgAdjustBar(_ref5) {
  var slotKey = _ref5.slotKey,
    data = _ref5.data,
    set = _ref5.set;
  var adjKey = slotKey + '_adj';
  var adj = data[adjKey] || {
    brightness: 100,
    contrast: 100,
    saturation: 100
  };
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    open = _useState6[0],
    setOpen = _useState6[1];
  var isDefault = adj.brightness === 100 && adj.contrast === 100 && adj.saturation === 100;
  var update = function update(field, val) {
    return set(adjKey, _objectSpread(_objectSpread({}, adj), {}, _defineProperty({}, field, val)));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setOpen(function (v) {
        return !v;
      });
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      padding: '4px 10px',
      border: '1px solid ' + (open || !isDefault ? '#FFC42B' : '#e5e7eb'),
      borderRadius: 7,
      background: open || !isDefault ? '#FFF8E1' : 'white',
      fontSize: 11,
      fontWeight: 700,
      cursor: 'pointer',
      color: isDefault ? '#9ca3af' : '#7A5A00'
    },
    title: "Ajustes de imagem"
  }, "\u2726 Ajustes", !isDefault && ' •'), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '110%',
      left: 0,
      zIndex: 500,
      background: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: 10,
      boxShadow: '0 8px 24px rgba(0,0,0,.12)',
      padding: '14px 16px',
      minWidth: 220,
      marginTop: 4
    }
  }, [{
    key: 'brightness',
    label: '☀ Brilho',
    min: 50,
    max: 180
  }, {
    key: 'contrast',
    label: '◑ Contraste',
    min: 50,
    max: 180
  }, {
    key: 'saturation',
    label: '◈ Saturação',
    min: 0,
    max: 200
  }].map(function (_ref6) {
    var key = _ref6.key,
      label = _ref6.label,
      min = _ref6.min,
      max = _ref6.max;
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      style: {
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 11,
        fontWeight: 600,
        color: '#555',
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'monospace',
        color: adj[key] !== 100 ? '#1F7A3A' : '#aaa'
      }
    }, adj[key], "%")), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: min,
      max: max,
      step: 1,
      value: adj[key],
      onChange: function onChange(e) {
        return update(key, Number(e.target.value));
      },
      style: {
        width: '100%',
        accentColor: '#1F7A3A'
      }
    }));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setOpen(false);
    },
    style: {
      padding: '4px 10px',
      border: '1px solid #e5e7eb',
      borderRadius: 6,
      fontSize: 11,
      background: 'white',
      cursor: 'pointer',
      color: '#666'
    }
  }, "Fechar"), !isDefault && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return set(adjKey, {
        brightness: 100,
        contrast: 100,
        saturation: 100
      });
    },
    style: {
      padding: '4px 10px',
      border: '1px solid #fca5a5',
      borderRadius: 6,
      fontSize: 11,
      background: 'white',
      cursor: 'pointer',
      color: '#dc2626',
      fontWeight: 600
    }
  }, "Reset"))));
}

/* =============== ICON PICKER =============== */
var ICON_LIST = ['gear', 'shield', 'tools', 'target', 'feather', 'check', 'alert', 'star', 'ruler', 'bolt', 'leaf', 'diamond', 'package', 'truck'];
function IconPicker(_ref7) {
  var iconKey = _ref7.iconKey,
    data = _ref7.data,
    set = _ref7.set,
    _ref7$size = _ref7.size,
    size = _ref7$size === void 0 ? 110 : _ref7$size,
    _ref7$borderRadius = _ref7.borderRadius,
    borderRadius = _ref7$borderRadius === void 0 ? 22 : _ref7$borderRadius,
    iconSize = _ref7.iconSize;
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    open = _useState8[0],
    setOpen = _useState8[1];
  var currentIcon = data && data[iconKey] || 'gear';
  var IcEl = I[currentIcon] || I.gear;
  var svgSize = iconSize || Math.round(size * 0.62);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ic-square",
    onClick: function onClick() {
      return setOpen(function (v) {
        return !v;
      });
    },
    style: {
      width: size,
      height: size,
      borderRadius: borderRadius,
      cursor: 'pointer',
      outline: open ? '3px solid #3b82f6' : 'none',
      outlineOffset: 2,
      position: 'relative'
    },
    title: "Clique para trocar o \xEDcone"
  }, /*#__PURE__*/React.createElement(IcEl, {
    style: {
      width: svgSize,
      height: svgSize,
      color: '#fff',
      stroke: '#fff'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "data-export-hide": "true",
    style: {
      position: 'absolute',
      bottom: 3,
      right: 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: 'rgba(0,0,0,.35)',
      display: 'grid',
      placeItems: 'center',
      fontSize: 9,
      color: '#fff',
      fontWeight: 800
    }
  }, "\u270E")), open && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "data-export-hide": "true",
    style: {
      position: 'absolute',
      top: size + 6,
      left: 0,
      zIndex: 9999,
      background: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: 10,
      boxShadow: '0 8px 28px rgba(0,0,0,.16)',
      padding: 10,
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 44px)',
      gap: 6,
      minWidth: 250
    }
  }, ICON_LIST.map(function (name) {
    var Ic = I[name];
    if (!Ic) return null;
    return /*#__PURE__*/React.createElement("button", {
      key: name,
      onClick: function onClick() {
        set(iconKey, name);
        setOpen(false);
      },
      title: name,
      style: {
        width: 44,
        height: 44,
        borderRadius: 8,
        border: name === currentIcon ? '2px solid #1F7A3A' : '1px solid #e5e7eb',
        background: name === currentIcon ? '#E8F3EC' : '#f9f9f9',
        cursor: 'pointer',
        display: 'grid',
        placeItems: 'center',
        padding: 0
      }
    }, /*#__PURE__*/React.createElement(Ic, {
      style: {
        width: 24,
        height: 24,
        color: name === currentIcon ? '#1F7A3A' : '#555',
        stroke: name === currentIcon ? '#1F7A3A' : '#555'
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    "data-export-hide": "true",
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 599
    },
    onClick: function onClick() {
      return setOpen(false);
    }
  })));
}

/* =============== ROTATE IMAGE =============== */
function rotateImageDataUrl(_x3) {
  return _rotateImageDataUrl.apply(this, arguments);
}
function _rotateImageDataUrl() {
  _rotateImageDataUrl = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(dataUrl) {
    var degrees,
      _args5 = arguments;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          degrees = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : 90;
          return _context5.a(2, new Promise(function (resolve) {
            var img = new Image();
            img.onload = function () {
              var swap = degrees === 90 || degrees === 270;
              var w = swap ? img.naturalHeight : img.naturalWidth;
              var h = swap ? img.naturalWidth : img.naturalHeight;
              var c = document.createElement('canvas');
              c.width = w;
              c.height = h;
              var ctx = c.getContext('2d');
              ctx.translate(w / 2, h / 2);
              ctx.rotate(degrees * Math.PI / 180);
              ctx.drawImage(img, -img.naturalWidth / 2, -img.naturalHeight / 2);
              resolve(c.toDataURL('image/png'));
            };
            img.src = dataUrl;
          }));
      }
    }, _callee5);
  }));
  return _rotateImageDataUrl.apply(this, arguments);
}
window.MLRotateImage = rotateImageDataUrl;

/* =============== CROP OVERLAY =============== */
function CropOverlay(_ref8) {
  var src = _ref8.src,
    onConfirm = _ref8.onConfirm,
    onCancel = _ref8.onCancel;
  var canvasRef = useRef(null);
  var imgRef = useRef(null);
  var _useState9 = useState({
      x: 10,
      y: 10,
      w: 80,
      h: 80
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    rect = _useState0[0],
    setRect = _useState0[1];
  var dragging = useRef(null);
  var startDrag = function startDrag(e, type) {
    e.preventDefault();
    e.stopPropagation();
    dragging.current = {
      type: type,
      startX: e.clientX,
      startY: e.clientY,
      startRect: _objectSpread({}, rect)
    };
    var onMove = function onMove(ev) {
      if (!dragging.current) return;
      var el = canvasRef.current;
      if (!el) return;
      var bounds = el.getBoundingClientRect();
      var dx = (ev.clientX - dragging.current.startX) / bounds.width * 100;
      var dy = (ev.clientY - dragging.current.startY) / bounds.height * 100;
      var r = _objectSpread({}, dragging.current.startRect);
      if (type === 'move') {
        r.x = Math.max(0, Math.min(100 - r.w, r.x + dx));
        r.y = Math.max(0, Math.min(100 - r.h, r.y + dy));
      } else if (type === 'se') {
        r.w = Math.max(10, Math.min(100 - r.x, r.w + dx));
        r.h = Math.max(10, Math.min(100 - r.y, r.h + dy));
      } else if (type === 'nw') {
        var nx = Math.max(0, r.x + dx),
          ny = Math.max(0, r.y + dy);
        r.w = Math.max(10, r.w - (nx - r.x));
        r.h = Math.max(10, r.h - (ny - r.y));
        r.x = nx;
        r.y = ny;
      } else if (type === 'ne') {
        r.w = Math.max(10, Math.min(100 - r.x, r.w + dx));
        var _ny = Math.max(0, r.y + dy);
        r.h = Math.max(10, r.h - (_ny - r.y));
        r.y = _ny;
      } else if (type === 'sw') {
        var _nx = Math.max(0, r.x + dx);
        r.w = Math.max(10, r.w - (_nx - r.x));
        r.x = _nx;
        r.h = Math.max(10, Math.min(100 - r.y, r.h + dy));
      }
      setRect(r);
    };
    var _onUp3 = function onUp() {
      dragging.current = null;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', _onUp3);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', _onUp3);
  };
  var handleConfirm = function handleConfirm() {
    var img = imgRef.current;
    if (!img) return;
    var nw = img.naturalWidth,
      nh = img.naturalHeight;
    var sx = rect.x / 100 * nw,
      sy = rect.y / 100 * nh,
      sw = rect.w / 100 * nw,
      sh = rect.h / 100 * nh;
    var c = document.createElement('canvas');
    c.width = sw;
    c.height = sh;
    c.getContext('2d').drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);
    onConfirm(c.toDataURL('image/png'));
  };
  var H = function H(type, pos) {
    return /*#__PURE__*/React.createElement("div", {
      onMouseDown: function onMouseDown(e) {
        return startDrag(e, type);
      },
      style: _objectSpread({
        position: 'absolute',
        width: 16,
        height: 16,
        borderRadius: '50%',
        background: 'white',
        border: '2px solid #3b82f6',
        cursor: type === 'move' ? 'move' : type + '-resize',
        zIndex: 10,
        transform: 'translate(-50%,-50%)'
      }, pos)
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.6)',
      zIndex: 2000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'white',
      fontSize: 13,
      fontWeight: 600
    }
  }, "Arraste as al\xE7as para recortar \xB7 Mova a \xE1rea pelo centro"), /*#__PURE__*/React.createElement("div", {
    ref: canvasRef,
    style: {
      position: 'relative',
      maxWidth: '70vw',
      maxHeight: '70vh',
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    ref: imgRef,
    src: src,
    alt: "",
    draggable: false,
    style: {
      display: 'block',
      maxWidth: '70vw',
      maxHeight: '65vh',
      borderRadius: 8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("mask", {
    id: "crop-mask"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "white"
  }), /*#__PURE__*/React.createElement("rect", {
    x: rect.x + '%',
    y: rect.y + '%',
    width: rect.w + '%',
    height: rect.h + '%',
    fill: "black"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "rgba(0,0,0,.55)",
    mask: "url(#crop-mask)"
  }))), /*#__PURE__*/React.createElement("div", {
    onMouseDown: function onMouseDown(e) {
      return startDrag(e, 'move');
    },
    style: {
      position: 'absolute',
      left: rect.x + '%',
      top: rect.y + '%',
      width: rect.w + '%',
      height: rect.h + '%',
      border: '2px solid #3b82f6',
      cursor: 'move',
      boxSizing: 'border-box'
    }
  }, H('nw', {
    top: 0,
    left: 0
  }), " ", H('ne', {
    top: 0,
    left: '100%'
  }), " ", H('sw', {
    top: '100%',
    left: 0
  }), " ", H('se', {
    top: '100%',
    left: '100%'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onCancel,
    style: {
      padding: '10px 24px',
      border: '1px solid rgba(255,255,255,.4)',
      borderRadius: 8,
      background: 'transparent',
      color: 'white',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "Cancelar"), /*#__PURE__*/React.createElement("button", {
    onClick: handleConfirm,
    style: {
      padding: '10px 24px',
      border: 0,
      borderRadius: 8,
      background: '#3b82f6',
      color: 'white',
      fontSize: 13,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, "\u2713 Aplicar recorte")));
}
window.MLCropOverlay = CropOverlay;

/* =============== COLOR PICKER DE MARCA =============== */
var BRAND_PRESETS = [{
  name: 'ML Verde',
  primary: '#1F7A3A',
  accent: '#FFC42B',
  primaryDark: '#155427',
  primaryLight: '#E8F3EC'
}, {
  name: 'Azul Pro',
  primary: '#1a56db',
  accent: '#FBBF24',
  primaryDark: '#1341b0',
  primaryLight: '#EBF2FF'
}, {
  name: 'Laranja',
  primary: '#C2410C',
  accent: '#FDE68A',
  primaryDark: '#9a330a',
  primaryLight: '#FFF7ED'
}, {
  name: 'Preto',
  primary: '#111827',
  accent: '#FFC42B',
  primaryDark: '#000000',
  primaryLight: '#F3F4F6'
}, {
  name: 'Roxo',
  primary: '#6D28D9',
  accent: '#FCD34D',
  primaryDark: '#5B21B6',
  primaryLight: '#EDE9FE'
}];
function applyBrandColors(preset) {
  var root = document.documentElement;
  root.style.setProperty('--green', preset.primary);
  root.style.setProperty('--green-dark', preset.primaryDark);
  root.style.setProperty('--green-light', preset.primaryLight);
  root.style.setProperty('--yellow', preset.accent);
  root.style.setProperty('--orange', preset.accent);
  try {
    localStorage.setItem('gerarml_brand', JSON.stringify(preset));
  } catch (_) {}
}
(function loadSavedBrand() {
  try {
    var s = localStorage.getItem('gerarml_brand');
    if (s) applyBrandColors(JSON.parse(s));
  } catch (_) {}
})();
function BrandColorPicker() {
  var getSaved = function getSaved() {
    try {
      return JSON.parse(localStorage.getItem('gerarml_brand') || 'null') || BRAND_PRESETS[0];
    } catch (_) {
      return BRAND_PRESETS[0];
    }
  };
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    open = _useState10[0],
    setOpen = _useState10[1];
  var _useState11 = useState(getSaved),
    _useState12 = _slicedToArray(_useState11, 2),
    current = _useState12[0],
    setCurrent = _useState12[1];
  var _useState13 = useState(current.primary),
    _useState14 = _slicedToArray(_useState13, 2),
    customPrimary = _useState14[0],
    setCustomPrimary = _useState14[1];
  var _useState15 = useState(current.accent),
    _useState16 = _slicedToArray(_useState15, 2),
    customAccent = _useState16[0],
    setCustomAccent = _useState16[1];
  var apply = function apply(preset) {
    applyBrandColors(preset);
    setCurrent(preset);
    setCustomPrimary(preset.primary);
    setCustomAccent(preset.accent);
  };
  var applyCustom = function applyCustom() {
    apply({
      name: 'Personalizado',
      primary: customPrimary,
      accent: customAccent,
      primaryDark: customPrimary,
      primaryLight: '#F5F5F5'
    });
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setOpen(function (v) {
        return !v;
      });
    },
    className: "btn",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    },
    title: "Paleta de cores da marca"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: current.primary,
      display: 'inline-block',
      border: '1px solid rgba(0,0,0,.1)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: current.accent,
      display: 'inline-block',
      border: '1px solid rgba(0,0,0,.1)'
    }
  })), "\uD83C\uDFA8 Cores"), open && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '110%',
      right: 0,
      zIndex: 400,
      background: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: 12,
      boxShadow: '0 8px 28px rgba(0,0,0,.14)',
      padding: 16,
      minWidth: 260
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: '#888',
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      marginBottom: 10
    }
  }, "Presets"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 14
    }
  }, BRAND_PRESETS.map(function (p) {
    return /*#__PURE__*/React.createElement("button", {
      key: p.name,
      onClick: function onClick() {
        apply(p);
        setOpen(false);
      },
      title: p.name,
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        padding: '8px 10px',
        borderRadius: 8,
        border: current.primary === p.primary ? '2px solid #3b82f6' : '1px solid #e5e7eb',
        background: 'white',
        cursor: 'pointer',
        fontSize: 10,
        fontWeight: 600,
        color: '#555'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        borderRadius: 4,
        background: p.primary,
        display: 'inline-block'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        borderRadius: 4,
        background: p.accent,
        display: 'inline-block'
      }
    })), p.name);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: '#888',
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      marginBottom: 8
    }
  }, "Personalizado"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8,
      marginBottom: 10
    }
  }, [['Cor principal', customPrimary, setCustomPrimary], ['Acento', customAccent, setCustomAccent]].map(function (_ref9) {
    var _ref0 = _slicedToArray(_ref9, 3),
      label = _ref0[0],
      val = _ref0[1],
      setVal = _ref0[2];
    return /*#__PURE__*/React.createElement("label", {
      key: label,
      style: {
        fontSize: 11,
        fontWeight: 600,
        color: '#555'
      }
    }, label, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "color",
      value: val,
      onChange: function onChange(e) {
        return setVal(e.target.value);
      },
      style: {
        width: 32,
        height: 32,
        border: 'none',
        padding: 0,
        cursor: 'pointer'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontFamily: 'monospace',
        color: '#555'
      }
    }, val)));
  })), /*#__PURE__*/React.createElement("button", {
    onClick: applyCustom,
    style: {
      width: '100%',
      padding: '8px 0',
      background: '#1F7A3A',
      color: 'white',
      border: 0,
      borderRadius: 8,
      fontSize: 13,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, "Aplicar cores")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 399
    },
    onClick: function onClick() {
      return setOpen(false);
    }
  })));
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
