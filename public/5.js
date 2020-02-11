(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/profile/Security.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/profile/Security.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_loading_mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/mixins/loading.mixin */ "./resources/js/src/mixins/loading.mixin.js");
/* harmony import */ var _components_g2fa_ToggleSecurityForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/g2fa/ToggleSecurityForm */ "./resources/js/src/components/g2fa/ToggleSecurityForm.vue");


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
  name: "security",
  components: {
    ToggleSecurityForm: _components_g2fa_ToggleSecurityForm__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mixins: [_mixins_loading_mixin__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      serverError: false,
      messageError: {
        title: "An error occurred on the server",
        message: "Try again later.",
        type: "error",
        timeOut: 10000
      }
    };
  },
  computed: {
    securityIsEnabled: function securityIsEnabled() {
      return this.$store.getters["auth/securityIsEnabled"];
    },
    qrCode: function qrCode() {
      return this.$store.getters["auth/qrCode"];
    }
  },
  methods: {
    init: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!this.securityIsEnabled && !this.qrCode)) {
                  _context.next = 11;
                  break;
                }

                this.$store.dispatch("setLoading", true);
                _context.prev = 2;
                _context.next = 5;
                return this.$store.dispatch("auth/security");

              case 5:
                this.$store.dispatch("setLoading", false);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                this.$store.dispatch("setMessage", this.messageError);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8]]);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  },
  mounted: function mounted() {
    this.init();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/profile/Security.vue?vue&type=template&id=0a301726&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/profile/Security.vue?vue&type=template&id=0a301726& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    "v-card",
    { staticClass: "elevation-0 pl-5 pr-5" },
    [
      _c("v-card-title", { attrs: { "primary-title": "" } }, [
        _vm._v("Google Two Factor Authenticator")
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-skeleton-loader",
            {
              staticClass: "mx-auto",
              attrs: {
                loading: _vm.loading,
                height: "50vh",
                type: "paragraph@1, image"
              }
            },
            [
              !_vm.securityIsEnabled
                ? _c(
                    "div",
                    [
                      _c("p", [
                        _vm._v(
                          "\n          Two-factor authentication (2FA) enhances access security by requiring two methods (also called factors) to verify your identity.\n          Two-factor authentication protects against phishing, social engineering and passwords,\n          and also protects your username from intruders using weak or stolen credentials.\n        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "To enable two-factor authentication in your account, you need to follow these steps:"
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "1. Scan this barcode with your Google Authenticator App"
                        )
                      ]),
                      _vm._v(" "),
                      _c("img", {
                        attrs: { src: _vm.qrCode, alt: "googleQrCode" }
                      }),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("2.Enter the pin the code to Enable 2FA")
                      ]),
                      _vm._v(" "),
                      _c("toggle-security-form", {
                        attrs: { btnTitle: "Enable", btnColor: "success" }
                      })
                    ],
                    1
                  )
                : _c(
                    "div",
                    [
                      _c("p", [
                        _vm._v(
                          "If you want to disable two-factor authentication. Please confirm your code and click the Disable button."
                        )
                      ]),
                      _vm._v(" "),
                      _c("toggle-security-form", {
                        attrs: { btnTitle: "Disable", btnColor: "warning" }
                      })
                    ],
                    1
                  )
            ]
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

/***/ "./resources/js/src/components/profile/Security.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/components/profile/Security.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Security_vue_vue_type_template_id_0a301726___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Security.vue?vue&type=template&id=0a301726& */ "./resources/js/src/components/profile/Security.vue?vue&type=template&id=0a301726&");
/* harmony import */ var _Security_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Security.vue?vue&type=script&lang=js& */ "./resources/js/src/components/profile/Security.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Security_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Security_vue_vue_type_template_id_0a301726___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Security_vue_vue_type_template_id_0a301726___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/profile/Security.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/profile/Security.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/components/profile/Security.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Security_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Security.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/profile/Security.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Security_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/profile/Security.vue?vue&type=template&id=0a301726&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/components/profile/Security.vue?vue&type=template&id=0a301726& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Security_vue_vue_type_template_id_0a301726___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Security.vue?vue&type=template&id=0a301726& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/profile/Security.vue?vue&type=template&id=0a301726&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Security_vue_vue_type_template_id_0a301726___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Security_vue_vue_type_template_id_0a301726___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/mixins/loading.mixin.js":
/*!**************************************************!*\
  !*** ./resources/js/src/mixins/loading.mixin.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    loading: function loading() {
      return this.$store.getters["loading"];
    },
    disabled: function disabled() {
      return this.loading;
    }
  }
});

/***/ })

}]);