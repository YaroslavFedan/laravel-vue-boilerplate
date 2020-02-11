(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/auth/RegisterForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/auth/RegisterForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_check_errors_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/check-errors.mixin */ "./resources/js/src/mixins/check-errors.mixin.js");
/* harmony import */ var _mixins_loading_mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/loading.mixin */ "./resources/js/src/mixins/loading.mixin.js");
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
  name: "register-form",
  mixins: [_mixins_check_errors_mixin__WEBPACK_IMPORTED_MODULE_0__["default"], _mixins_loading_mixin__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    var _this = this;

    return {
      show_password: false,
      show_password_confirmation: false,
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        rules: false
      },
      nameRules: [function (v) {
        return !!v || "The name field is required.";
      }],
      emailRules: [function (v) {
        return !!v || "The email field is required.";
      }, function (v) {
        return /.+@.+\..+/.test(v) || "The email must be a valid email address.";
      }],
      passwordRules: [function (v) {
        return !!v || "The password field is required.";
      }],
      passwordConfirmationRules: [function (v) {
        return !!v || "The password confirmation field is required.";
      }, function (v) {
        return v === _this.form.password || "The passwords does not match.";
      }],
      agreeRules: [function (v) {
        return !!v || "You must agree to the rules!";
      }],
      messageSuccess: {
        title: "Registered Successfully!",
        message: "You can login here.",
        type: "success"
      }
    };
  },
  methods: {
    onRegister: function onRegister() {
      var _this2 = this;

      if (this.$refs.form.validate()) {
        this.$store.dispatch("setLoading", true);
        this.$store.dispatch("auth/register", this.form).then(function (response) {
          _this2.$store.dispatch("setLoading", false);

          _this2.$store.dispatch("setMessage", _this2.messageSuccess);

          _this2.$router.push({
            name: "login"
          });
        })["catch"](function (error) {
          _this2.$store.dispatch("setLoading", false);

          _this2.serverErrors = error.response.data.errors;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/auth/RegisterForm.vue?vue&type=template&id=4120253e&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/auth/RegisterForm.vue?vue&type=template&id=4120253e& ***!
  \************************************************************************************************************************************************************************************************************************/
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
              attrs: { id: "register-form", "lazy-validation": "" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.onRegister($event)
                }
              }
            },
            [
              _c("v-text-field", {
                attrs: {
                  id: "name",
                  label: "Name",
                  name: "name",
                  "prepend-icon": "person",
                  type: "text",
                  rules: _vm.nameRules,
                  "error-messages": _vm.checkError("name"),
                  required: ""
                },
                model: {
                  value: _vm.form.name,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "name", $$v)
                  },
                  expression: "form.name"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: {
                  id: "email",
                  label: "Email",
                  name: "email",
                  "prepend-icon": "email",
                  type: "email",
                  rules: _vm.emailRules,
                  "error-messages": _vm.checkError("email"),
                  required: ""
                },
                model: {
                  value: _vm.form.email,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "email", $$v)
                  },
                  expression: "form.email"
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
                  "error-messages": _vm.checkError("password"),
                  type: _vm.show_password ? "text" : "password",
                  "append-icon": _vm.show_password ? "mdi-eye" : "mdi-eye-off",
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
              _c("v-text-field", {
                attrs: {
                  id: "password_confirmation",
                  label: "Confirm password",
                  name: "password_confirmation",
                  "prepend-icon": "lock",
                  rules: _vm.passwordConfirmationRules,
                  type: _vm.show_password_confirmation ? "text" : "password",
                  "append-icon": _vm.show_password_confirmation
                    ? "mdi-eye"
                    : "mdi-eye-off",
                  required: ""
                },
                on: {
                  "click:append": function($event) {
                    _vm.show_password_confirmation = !_vm.show_password_confirmation
                  }
                },
                model: {
                  value: _vm.form.password_confirmation,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "password_confirmation", $$v)
                  },
                  expression: "form.password_confirmation"
                }
              }),
              _vm._v(" "),
              _c("v-checkbox", {
                attrs: {
                  rules: _vm.agreeRules,
                  label: "I agree with the rules",
                  required: ""
                },
                model: {
                  value: _vm.form.rules,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "rules", $$v)
                  },
                  expression: "form.rules"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c(
            "v-btn",
            {
              attrs: {
                block: "",
                type: "submit",
                color: "primary",
                form: "register-form",
                loading: _vm.loading
              }
            },
            [_vm._v("Registration")]
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
            { staticClass: "pt-2 pb-2" },
            [
              _vm._v("\n      Already have an account?\n      "),
              _c(
                "router-link",
                { attrs: { to: { name: "login" }, upper: "" } },
                [_vm._v("Sign in")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/components/auth/RegisterForm.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/components/auth/RegisterForm.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterForm_vue_vue_type_template_id_4120253e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterForm.vue?vue&type=template&id=4120253e& */ "./resources/js/src/components/auth/RegisterForm.vue?vue&type=template&id=4120253e&");
/* harmony import */ var _RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterForm.vue?vue&type=script&lang=js& */ "./resources/js/src/components/auth/RegisterForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterForm_vue_vue_type_template_id_4120253e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegisterForm_vue_vue_type_template_id_4120253e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/auth/RegisterForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/auth/RegisterForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/components/auth/RegisterForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/auth/RegisterForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/auth/RegisterForm.vue?vue&type=template&id=4120253e&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/components/auth/RegisterForm.vue?vue&type=template&id=4120253e& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_template_id_4120253e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterForm.vue?vue&type=template&id=4120253e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/auth/RegisterForm.vue?vue&type=template&id=4120253e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_template_id_4120253e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_template_id_4120253e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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