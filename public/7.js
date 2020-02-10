(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/todo/TodoForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/todo/TodoForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_check_errors_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/check-errors.mixin */ "./resources/js/src/mixins/check-errors.mixin.js");
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
  name: "todo-form",
  mixins: [_mixins_check_errors_mixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      newTodo: "",
      todoRules: [function (v) {
        return !!v || "Todo is required";
      }, function (v) {
        return v.length <= 255 || "Todo must be less than 10 characters";
      }],
      messageSuccess: {
        show: true,
        color: "success",
        text: "New task successfully created"
      }
    };
  },
  methods: {
    onAddTodo: function onAddTodo() {
      var _this = this;

      if (this.$refs.input.validate()) {
        this.$emit("onLoading", true);
        this.$store.dispatch("todo/addTodo", this.newTodo).then(function (response) {
          _this.$emit("onLoading", false);

          _this.clearErrors();

          _this.$store.dispatch("updateNotice", _this.messageSuccess);
        })["catch"](function (error) {
          _this.$emit("onLoading", false);

          _this.serverErrors = error.response.data.errors;
        });
      }
    },
    clearErrors: function clearErrors() {
      this.$refs.input.reset();
      this.$refs.input.blur();
      this.newTodo = "";
      this.serverErrors = {};
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/todo/TodoForm.vue?vue&type=template&id=a0a5ccfa&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/todo/TodoForm.vue?vue&type=template&id=a0a5ccfa& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "v-col",
    { attrs: { cols: "12" } },
    [
      _c("v-text-field", {
        ref: "input",
        attrs: {
          dense: "",
          label: "What needs to be done",
          hint: "Write a task and press Enter.",
          name: "newTodo",
          "prepend-icon": "edit",
          type: "text",
          counter: 255,
          rules: _vm.todoRules,
          "error-messages": _vm.checkError("title"),
          required: ""
        },
        on: {
          keyup: function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            return _vm.onAddTodo($event)
          }
        },
        model: {
          value: _vm.newTodo,
          callback: function($$v) {
            _vm.newTodo = $$v
          },
          expression: "newTodo"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/components/todo/TodoForm.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/components/todo/TodoForm.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TodoForm_vue_vue_type_template_id_a0a5ccfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoForm.vue?vue&type=template&id=a0a5ccfa& */ "./resources/js/src/components/todo/TodoForm.vue?vue&type=template&id=a0a5ccfa&");
/* harmony import */ var _TodoForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoForm.vue?vue&type=script&lang=js& */ "./resources/js/src/components/todo/TodoForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TodoForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TodoForm_vue_vue_type_template_id_a0a5ccfa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TodoForm_vue_vue_type_template_id_a0a5ccfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/todo/TodoForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/todo/TodoForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/components/todo/TodoForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/todo/TodoForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/todo/TodoForm.vue?vue&type=template&id=a0a5ccfa&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/components/todo/TodoForm.vue?vue&type=template&id=a0a5ccfa& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoForm_vue_vue_type_template_id_a0a5ccfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoForm.vue?vue&type=template&id=a0a5ccfa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/todo/TodoForm.vue?vue&type=template&id=a0a5ccfa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoForm_vue_vue_type_template_id_a0a5ccfa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoForm_vue_vue_type_template_id_a0a5ccfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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