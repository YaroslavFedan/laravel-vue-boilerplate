(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/g2fa/ToggleSecurityForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/g2fa/ToggleSecurityForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-the-mask */ "./node_modules/vue-the-mask/dist/vue-the-mask.js");
/* harmony import */ var vue_the_mask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_the_mask__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_check_errors_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/mixins/check-errors.mixin */ "./resources/js/src/mixins/check-errors.mixin.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "toggle-security-form",
  props: {
    btnTitle: {
      type: String,
      required: true
    },
    btnColor: {
      type: String,
      "default": "primary"
    }
  },
  mixins: [_mixins_check_errors_mixin__WEBPACK_IMPORTED_MODULE_2__["default"]],
  directives: {
    mask: vue_the_mask__WEBPACK_IMPORTED_MODULE_1__["mask"]
  },
  computed: {
    securityIsEnabled: function securityIsEnabled() {
      return this.$store.getters["auth/securityIsEnabled"];
    }
  },
  data: function data() {
    return {
      loading: false,
      mask: "######",
      code: null,
      codeRules: [function (v) {
        return !!v || "Code is required";
      }, function (v) {
        if (v !== null && v.length !== 6) {
          return "Сode length should be 6 characters";
        }

        return true;
      }],
      messageEnabled: {
        title: "Two-factor authentication",
        message: "Successfully Enabled.",
        type: "success"
      },
      messageDisabled: {
        title: "Two-factor authentication",
        message: "Successfully Disabled.",
        type: "error"
      }
    };
  },
  methods: {
    submitHandler: function () {
      var _submitHandler = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.$refs.form.validate()) {
                  _context.next = 15;
                  break;
                }

                this.loading = true;
                _context.prev = 2;
                _context.next = 5;
                return this.$store.dispatch("auth/toggleSecurity", this.code);

              case 5:
                this.showMessage();
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                this.serverErrors = _context.t0.response.data.errors;

              case 11:
                this.loading = false;
                this.code = null;
                this.$refs.input.blur();
                this.$refs.form.resetValidation();

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8]]);
      }));

      function submitHandler() {
        return _submitHandler.apply(this, arguments);
      }

      return submitHandler;
    }(),
    showMessage: function showMessage() {
      if (this.securityIsEnabled) {
        this.$store.dispatch("setMessage", this.messageEnabled);
      } else {
        this.$store.dispatch("setMessage", this.messageDisabled);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/g2fa/ToggleSecurityForm.vue?vue&type=template&id=4fea0a51&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/g2fa/ToggleSecurityForm.vue?vue&type=template&id=4fea0a51& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-form",
    {
      ref: "form",
      attrs: { id: "security-form", "lazy-validation": "" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.submitHandler($event)
        }
      }
    },
    [
      _c("v-text-field", {
        directives: [
          {
            name: "mask",
            rawName: "v-mask",
            value: _vm.mask,
            expression: "mask"
          }
        ],
        ref: "input",
        attrs: {
          id: "code",
          label: "Enter the 6-digit code in your Google Authenticator app",
          name: "code",
          rules: _vm.codeRules,
          "error-messages": _vm.checkError("code"),
          type: "text",
          required: ""
        },
        model: {
          value: _vm.code,
          callback: function($$v) {
            _vm.code = $$v
          },
          expression: "code"
        }
      }),
      _vm._v(" "),
      _c(
        "v-card-actions",
        { staticClass: "pl-0 pr-0" },
        [
          _c(
            "v-btn",
            {
              attrs: {
                type: "submit",
                block: "",
                color: _vm.btnColor,
                loading: _vm.loading,
                form: "security-form"
              }
            },
            [_vm._v(_vm._s(_vm.btnTitle))]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-the-mask/dist/vue-the-mask.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-the-mask/dist/vue-the-mask.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(e,t){ true?module.exports=t():undefined})(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=10)}([function(e,t){e.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleLowerCase()}},"!":{escape:!0}}},function(e,t,n){"use strict";function r(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var a=n(2),o=n(0),i=n.n(o);t.a=function(e,t){var o=t.value;if((Array.isArray(o)||"string"==typeof o)&&(o={mask:o,tokens:i.a}),"INPUT"!==e.tagName.toLocaleUpperCase()){var u=e.getElementsByTagName("input");if(1!==u.length)throw new Error("v-mask directive requires 1 input, found "+u.length);e=u[0]}e.oninput=function(t){if(t.isTrusted){var i=e.selectionEnd,u=e.value[i-1];for(e.value=n.i(a.a)(e.value,o.mask,!0,o.tokens);i<e.value.length&&e.value.charAt(i-1)!==u;)i++;e===document.activeElement&&(e.setSelectionRange(i,i),setTimeout(function(){e.setSelectionRange(i,i)},0)),e.dispatchEvent(r("input"))}};var s=n.i(a.a)(e.value,o.mask,!0,o.tokens);s!==e.value&&(e.value=s,e.dispatchEvent(r("input")))}},function(e,t,n){"use strict";var r=n(6),a=n(5);t.a=function(e,t){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];return Array.isArray(t)?n.i(a.a)(r.a,t,i)(e,t,o,i):n.i(r.a)(e,t,o,i)}},function(e,t,n){"use strict";function r(e){e.component(s.a.name,s.a),e.directive("mask",i.a)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),i=n(1),u=n(7),s=n.n(u);n.d(t,"TheMask",function(){return s.a}),n.d(t,"mask",function(){return i.a}),n.d(t,"tokens",function(){return o.a}),n.d(t,"version",function(){return c});var c="0.11.1";t.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=n(0),o=n.n(a),i=n(2);t.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return o.a}}},directives:{mask:r.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(e){e!==this.lastValue&&(this.display=e)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(e){e.isTrusted||this.refresh(e.target.value)},refresh:function(e){this.display=e;var e=n.i(i.a)(e,this.mask,this.masked,this.tokens);e!==this.lastValue&&(this.lastValue=e,this.$emit("input",e))}}}},function(e,t,n){"use strict";function r(e,t,n){return t=t.sort(function(e,t){return e.length-t.length}),function(r,a){for(var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=0;i<t.length;){var u=t[i];i++;var s=t[i];if(!(s&&e(r,s,!0,n).length>u.length))return e(r,u,o,n)}return""}}t.a=r},function(e,t,n){"use strict";function r(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];e=e||"",t=t||"";for(var a=0,o=0,i="";a<t.length&&o<e.length;){var u=t[a],s=r[u],c=e[o];s&&!s.escape?(s.pattern.test(c)&&(i+=s.transform?s.transform(c):c,a++),o++):(s&&s.escape&&(a++,u=t[a]),n&&(i+=u),c===u&&o++,a++)}for(var f="";a<t.length&&n;){var u=t[a];if(r[u]){f="";break}f+=u,a++}return i+f}t.a=r},function(e,t,n){var r=n(8)(n(4),n(9),null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var a,o=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(a=e,o=e.default);var u="function"==typeof o?o.options:o;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach(function(e){var t=r[e];s[e]=function(){return t}})}return{esModule:a,exports:o,options:u}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"mask",rawName:"v-mask",value:e.config,expression:"config"}],attrs:{type:"text"},domProps:{value:e.display},on:{input:e.onInput}})},staticRenderFns:[]}},function(e,t,n){e.exports=n(3)}])});

/***/ }),

/***/ "./resources/js/src/components/g2fa/ToggleSecurityForm.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/components/g2fa/ToggleSecurityForm.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToggleSecurityForm_vue_vue_type_template_id_4fea0a51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToggleSecurityForm.vue?vue&type=template&id=4fea0a51& */ "./resources/js/src/components/g2fa/ToggleSecurityForm.vue?vue&type=template&id=4fea0a51&");
/* harmony import */ var _ToggleSecurityForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToggleSecurityForm.vue?vue&type=script&lang=js& */ "./resources/js/src/components/g2fa/ToggleSecurityForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ToggleSecurityForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ToggleSecurityForm_vue_vue_type_template_id_4fea0a51___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ToggleSecurityForm_vue_vue_type_template_id_4fea0a51___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/g2fa/ToggleSecurityForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/g2fa/ToggleSecurityForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/components/g2fa/ToggleSecurityForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleSecurityForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToggleSecurityForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/g2fa/ToggleSecurityForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleSecurityForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/g2fa/ToggleSecurityForm.vue?vue&type=template&id=4fea0a51&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/components/g2fa/ToggleSecurityForm.vue?vue&type=template&id=4fea0a51& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleSecurityForm_vue_vue_type_template_id_4fea0a51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ToggleSecurityForm.vue?vue&type=template&id=4fea0a51& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/g2fa/ToggleSecurityForm.vue?vue&type=template&id=4fea0a51&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleSecurityForm_vue_vue_type_template_id_4fea0a51___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToggleSecurityForm_vue_vue_type_template_id_4fea0a51___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/mixins/check-errors.mixin.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/mixins/check-errors.mixin.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      serverErrors: {}
    };
  },
  methods: {
    checkError: function checkError(field) {
      return this.serverErrors.hasOwnProperty(field) ? this.serverErrors[field] : [];
    }
  }
});

/***/ })

}]);