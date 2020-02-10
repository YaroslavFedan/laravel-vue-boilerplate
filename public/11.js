(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/todo/TodoFiltered.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/todo/TodoFiltered.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "todo-filtered",
  computed: {
    filter: function filter() {
      return this.$store.state.todo.filter;
    }
  },
  methods: {
    changeFilter: function changeFilter(filter) {
      this.$store.dispatch("todo/updateFilter", filter);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/todo/TodoFiltered.vue?vue&type=template&id=9c08cc54&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/todo/TodoFiltered.vue?vue&type=template&id=9c08cc54& ***!
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
    "div",
    [
      _c(
        "v-btn",
        {
          class: { primary: _vm.filter == "all" },
          attrs: { text: "", small: "" },
          on: {
            click: function($event) {
              return _vm.changeFilter("all")
            }
          }
        },
        [_vm._v("All")]
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          class: { primary: _vm.filter == "active" },
          attrs: { text: "", small: "" },
          on: {
            click: function($event) {
              return _vm.changeFilter("active")
            }
          }
        },
        [_vm._v("Active")]
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          class: { primary: _vm.filter == "completed" },
          attrs: { text: "", small: "" },
          on: {
            click: function($event) {
              return _vm.changeFilter("completed")
            }
          }
        },
        [_vm._v("Completed")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/components/todo/TodoFiltered.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/components/todo/TodoFiltered.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TodoFiltered_vue_vue_type_template_id_9c08cc54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoFiltered.vue?vue&type=template&id=9c08cc54& */ "./resources/js/src/components/todo/TodoFiltered.vue?vue&type=template&id=9c08cc54&");
/* harmony import */ var _TodoFiltered_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoFiltered.vue?vue&type=script&lang=js& */ "./resources/js/src/components/todo/TodoFiltered.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TodoFiltered_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TodoFiltered_vue_vue_type_template_id_9c08cc54___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TodoFiltered_vue_vue_type_template_id_9c08cc54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/todo/TodoFiltered.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/todo/TodoFiltered.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/components/todo/TodoFiltered.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoFiltered_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoFiltered.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/todo/TodoFiltered.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoFiltered_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/todo/TodoFiltered.vue?vue&type=template&id=9c08cc54&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/components/todo/TodoFiltered.vue?vue&type=template&id=9c08cc54& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoFiltered_vue_vue_type_template_id_9c08cc54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoFiltered.vue?vue&type=template&id=9c08cc54& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/todo/TodoFiltered.vue?vue&type=template&id=9c08cc54&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoFiltered_vue_vue_type_template_id_9c08cc54___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoFiltered_vue_vue_type_template_id_9c08cc54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);