(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/auth/LoginForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/auth/LoginForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_loading_mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/mixins/loading.mixin */ "./resources/js/src/mixins/loading.mixin.js");


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
  name: "login-form",
  mixins: [_mixins_loading_mixin__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      show_password: false,
      form: {
        username: "",
        password: ""
      },
      emailRules: [function (v) {
        return !!v || "E-mail is required";
      }, function (v) {
        return /.+@.+\..+/.test(v) || "E-mail must be valid";
      }],
      passwordRules: [function (v) {
        return !!v || "Password is required";
      }],
      serverError: ""
    };
  },
  computed: {
    securityIsEnabled: function securityIsEnabled() {
      return this.$store.getters["auth/securityIsEnabled"];
    }
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

                this.$store.dispatch("setLoading", true);
                _context.prev = 2;
                _context.next = 5;
                return this.$store.dispatch("auth/login", this.form);

              case 5:
                _context.next = 7;
                return this.$store.dispatch("auth/security");

              case 7:
                this.$store.dispatch("setLoading", false);

                if (!this.securityIsEnabled) {
                  // сохраняем токен авторизации
                  this.$store.dispatch("auth/authorize");
                  this.$router.push({
                    name: "home"
                  });
                } else {
                  //проходим валидацию Google Two Factor Authentication
                  this.$router.push({
                    name: "security"
                  });
                }

                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                this.$store.dispatch("setLoading", false);
                this.serverError = _context.t0.response.data;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 11]]);
      }));

      function submitHandler() {
        return _submitHandler.apply(this, arguments);
      }

      return submitHandler;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/auth/LoginForm.vue?vue&type=template&id=863307b4&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/auth/LoginForm.vue?vue&type=template&id=863307b4& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "elevation-12 pl-5 pr-5", attrs: { loading: _vm.loading } },
    [
      _c("v-card-title", { attrs: { "primary-title": "" } }, [
        _vm._v("Home accounting")
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-form",
            {
              ref: "form",
              attrs: { id: "login-form", "lazy-validation": "" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submitHandler($event)
                }
              }
            },
            [
              _c("v-text-field", {
                attrs: {
                  id: "email",
                  label: "Email",
                  name: "email",
                  "prepend-icon": "email",
                  type: "email",
                  rules: _vm.emailRules,
                  required: ""
                },
                model: {
                  value: _vm.form.username,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "username", $$v)
                  },
                  expression: "form.username"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  id: "password",
                  label: "Password",
                  name: "password",
                  "prepend-icon": "lock",
                  rules: _vm.passwordRules,
                  type: _vm.show_password ? "text" : "password",
                  "append-icon": _vm.show_password ? "mdi-eye" : "mdi-eye-off",
                  autocomplete: "on",
                  required: ""
                },
                on: {
                  "click:append": function($event) {
                    _vm.show_password = !_vm.show_password
                  }
                },
                model: {
                  value: _vm.form.password,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "password", $$v)
                  },
                  expression: "form.password"
                }
              }),
              _vm._v(" "),
              _vm.serverError
                ? _c(
                    "v-alert",
                    { attrs: { dense: "", outlined: "", type: "error" } },
                    [_vm._v(_vm._s(_vm.serverError))]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "v-card-actions",
                { attrs: { "justify-center": "" } },
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        type: "submit",
                        block: "",
                        color: "primary",
                        loading: _vm.loading
                      }
                    },
                    [_vm._v("Login")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "pt-2 pb-2 mr-1" },
                    [
                      _vm._v("\n          No account?\n          "),
                      _c(
                        "router-link",
                        { attrs: { to: { name: "register" } } },
                        [_vm._v("Sign up")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-spacer")
                ],
                1
              )
            ],
            1
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

/***/ "./resources/js/src/components/auth/LoginForm.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/components/auth/LoginForm.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginForm_vue_vue_type_template_id_863307b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=template&id=863307b4& */ "./resources/js/src/components/auth/LoginForm.vue?vue&type=template&id=863307b4&");
/* harmony import */ var _LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginForm.vue?vue&type=script&lang=js& */ "./resources/js/src/components/auth/LoginForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginForm_vue_vue_type_template_id_863307b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoginForm_vue_vue_type_template_id_863307b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/auth/LoginForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/auth/LoginForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/components/auth/LoginForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/auth/LoginForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/auth/LoginForm.vue?vue&type=template&id=863307b4&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/components/auth/LoginForm.vue?vue&type=template&id=863307b4& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_863307b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LoginForm.vue?vue&type=template&id=863307b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/auth/LoginForm.vue?vue&type=template&id=863307b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_863307b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginForm_vue_vue_type_template_id_863307b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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