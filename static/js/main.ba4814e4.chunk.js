(this["webpackJsonpcalculator-app"]=this["webpackJsonpcalculator-app"]||[]).push([[0],{10:function(_,e,a){"use strict";a.r(e);a(1);var r=a(4),s=a.n(r),t=a(5),l=a(0);s.a.render(Object(l.jsx)(t.a,{}),document.getElementById("root"))},2:function(_,e,a){_.exports={header:"Calculator_header__3DEro",container:"Calculator_container__3IPrO",items:"Calculator_items__1DOAC"}},5:function(module,__webpack_exports__,__webpack_require__){"use strict";var G_VS_programs_HTML_React_js_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),G_VS_programs_HTML_React_js_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),G_VS_programs_HTML_React_js_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),G_VS_programs_HTML_React_js_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_Calculator_module_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),_Calculator_module_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_Calculator_module_css__WEBPACK_IMPORTED_MODULE_5__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__),Calculator=function(_Component){Object(G_VS_programs_HTML_React_js_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Calculator,_Component);var _super=Object(G_VS_programs_HTML_React_js_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator);function Calculator(props){var _this;return Object(G_VS_programs_HTML_React_js_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),_this=_super.call(this,props),_this.changeHandler=function(value){var expression=_this.state.exp;if("pw"===value)expression=_this.check(expression)||""===expression?"":(parseInt(expression)*parseInt(expression)).toString();else if("c"===value)expression=expression.substr(0,expression.length-1);else if("ce"===value)expression="";else if("%"===value);else if("."===value){var index=-1;if(""===expression)expression="0.";else{for(var i=expression.length-1;i>=0;i--)if(expression.charCodeAt(i)<48||expression.charCodeAt(i)>57){index=i;break}-1===expression.indexOf(".",index)&&(_this.isOperator(expression.charAt(expression.length-1))?expression+="0.":expression+=".")}}else"="===value?""!==_this.state.exp?_this.isOperator(expression.charAt(expression.length-1))||(expression=eval(_this.state.exp).toString()):expression="":_this.isOperator(value)&&_this.isOperator(expression.charAt(expression.length-1))?expression=expression.substr(0,expression.length-1)+value:expression+=value;_this.setState({exp:expression})},_this.isOperator=function(_){return"+"===_||"-"===_||"*"===_||"/"===_},_this.check=function(_){_this.operators.forEach((function(e,a){return-1===_.indexOf(e)}))},_this.operators=["+","-","%","*","/"],_this.state={buttons:["pw","c","ce","/","7","8","9","*","4","5","6","-","1","2","3","+","0",".","="],exp:""},_this}return Object(G_VS_programs_HTML_React_js_calculator_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"render",value:function(){var _=this;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.header,children:"Calculator"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Field,{data:this.state.exp}),this.state.buttons.map((function(e,a){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Button,{handler:function(e){_.changeHandler(e)},value:e},a)}))]})]})}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_4__.Component);function Button(_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.items,type:"button",value:_.value,onClick:function(e){_.handler(e.target.value)}})}function Field(_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input",{className:_Calculator_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.items,type:"text",value:_.data,disabled:!0})}__webpack_exports__.a=Calculator}},[[10,1,2]]]);
//# sourceMappingURL=main.ba4814e4.chunk.js.map