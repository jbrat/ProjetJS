webpackHotUpdate(0,{

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(fetch) {'use strict';\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(158);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Form = _react2.default.createClass({\n\tdisplayName: 'Form',\n\n\tajouterSerie: function ajouterSerie(e) {\n\t\te.preventDefault();\n\n\t\tvar title = document.querySelector('input[name=\"serie\"]').value;\n\t\tvar season = document.querySelector('input[name=\"season\"]').value;\n\t\tvar episode = document.querySelector('input[name=\"episode\"]').value;\n\n\t\tfetch('http://localhost:9312/', {\n\t\t\tmethod: 'POST',\n\t\t\theaders: {\n\t\t\t\t'Accept': 'application/json',\n\t\t\t\t'Content-Type': 'application/json'\n\t\t\t},\n\t\t\tbody: JSON.stringify({\n\t\t\t\ttitle: 'yourValue',\n\t\t\t\tseason: 'yourOtherValue',\n\t\t\t\tepisode: 'test'\n\t\t\t})\n\t\t}).then(function (response) {\n\t\t\treturn response.text();\n\t\t}).then(function (responseText) {\n\t\t\tconsole.log(responseText);\n\t\t}).catch(function (error) {\n\t\t\tconsole.warn(error);\n\t\t});\n\t},\n\n\trender: function render() {\n\t\treturn _react2.default.createElement(\n\t\t\t'form',\n\t\t\t{ method: 'POST', onSubmit: this.ajouterSerie },\n\t\t\t_react2.default.createElement(\n\t\t\t\t'table',\n\t\t\t\t{ 'class': 'table' },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'tr',\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'td',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'label',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'Serie :'\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'td',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t_react2.default.createElement('input', { type: 'text', name: 'serie', placeholder: 'Serie' })\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'tr',\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'td',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'label',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'Season :'\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'td',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t_react2.default.createElement('input', { type: 'text', name: 'season', placeholder: 'Season' })\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'tr',\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'td',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'label',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t'Episode :'\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'td',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t_react2.default.createElement('input', { type: 'text', name: 'episode', placeholder: 'Episode' })\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'tr',\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'td',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t_react2.default.createElement('input', { type: 'submit', value: 'Search' })\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});\n\n(0, _reactDom.render)(_react2.default.createElement(Form, null), document.getElementById('form'));\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(161)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./form.js\n ** module id = 160\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./form.js?");

/***/ }

})