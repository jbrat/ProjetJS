webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(7);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(163);\n\nvar _table = __webpack_require__(164);\n\nvar _form = __webpack_require__(165);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Tutu = function () {\n  function Tutu() {\n    _classCallCheck(this, Tutu);\n  }\n\n  _createClass(Tutu, [{\n    key: 'alert',\n    value: function alert() {\n      console.log('Test Class');\n    }\n  }]);\n\n  return Tutu;\n}();\n\nvar t = new Tutu();\nconsole.log('test basic');\nt.alert();\nfetch('http://localhost:9312', {\n  method: 'get'\n}).then(function (response) {}).catch(function (err) {});\n(0, _reactDom.render)(_react2.default.createElement(_form.Form, null), document.getElementById('form'));\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./main.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./main.js?");

/***/ }
])