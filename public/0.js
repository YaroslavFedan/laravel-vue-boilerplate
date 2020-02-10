(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/todo/TodoItem.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/todo/TodoItem.vue?vue&type=script&lang=js& ***!
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
  name: "todo-item",
  mixins: [_mixins_check_errors_mixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    todo: {
      type: Object,
      required: true
    },
    checkAll: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {
      id: this.todo.id,
      title: this.todo.title,
      completed: this.todo.completed,
      editing: this.todo.editing,
      beforeEditCache: "",
      todoRules: [function (v) {
        return !!v || "Title is required";
      }, function (v) {
        return v.length <= 255 || "Todo must be less than 10 characters";
      }],
      message: {
        updateSuccess: {
          show: true,
          color: "success",
          text: "The task update was successful"
        },
        deleteSuccess: {
          show: true,
          color: "success",
          text: "The task delete was successful"
        }
      }
    };
  },
  watch: {
    checkAll: function checkAll() {
      this.completed = this.checkAll ? true : this.todo.completed;
    }
  },
  methods: {
    removeTodo: function removeTodo(id) {
      var _this = this;

      this.$store.dispatch("todo/deleteTodo", id).then(function (res) {
        _this.$store.dispatch("updateNotice", _this.message.deleteSuccess);
      })["catch"](function (error) {
        _this.$store.dispatch("updateNotice", {
          show: true,
          color: "danger",
          text: error.response.data
        });
      });
    },
    doneEdit: function doneEdit() {
      var _this2 = this;

      this.$emit("onLoading", true);
      this.$store.dispatch("todo/updateTodo", {
        id: this.id,
        title: this.title,
        completed: this.completed,
        editing: this.editing
      }).then(function (res) {
        _this2.$emit("onLoading", false);

        _this2.editing = false;

        _this2.$store.dispatch("updateNotice", _this2.message.updateSuccess);
      })["catch"](function (error) {
        _this2.$emit("onLoading", false);

        _this2.serverErrors = error.response.data.errors;
      });
    },
    editTodo: function editTodo() {
      this.beforeEditCache = this.title;
      this.editing = true;
    },
    cancelEdit: function cancelEdit() {
      this.title = this.beforeEditCache;
      this.editing = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/todo/TodoItem.vue?vue&type=style&index=0&id=4cbe6f5c&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/todo/TodoItem.vue?vue&type=style&index=0&id=4cbe6f5c&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.completed[data-v-4cbe6f5c] {\n  text-decoration: line-through;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/todo/TodoItem.vue?vue&type=style&index=0&id=4cbe6f5c&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/todo/TodoItem.vue?vue&type=style&index=0&id=4cbe6f5c&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoItem.vue?vue&type=style&index=0&id=4cbe6f5c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/todo/TodoItem.vue?vue&type=style&index=0&id=4cbe6f5c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/todo/TodoItem.vue?vue&type=template&id=4cbe6f5c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/todo/TodoItem.vue?vue&type=template&id=4cbe6f5c&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    "v-list-item",
    [
      !_vm.editing
        ? _c(
            "v-list-item-action",
            [
              _c("v-checkbox", {
                on: { change: _vm.doneEdit },
                model: {
                  value: _vm.completed,
                  callback: function($$v) {
                    _vm.completed = $$v
                  },
                  expression: "completed"
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-list-item-content",
        [
          !_vm.editing
            ? _c("v-list-item-title", {
                class: { completed: _vm.completed },
                domProps: { textContent: _vm._s(_vm.title) }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.editing
            ? _c("v-text-field", {
                ref: "input",
                attrs: {
                  hint:
                    "Key press Escape - cancel editing. Key press Enter - finish edit.",
                  name: "title",
                  type: "text",
                  counter: 255,
                  rules: _vm.todoRules,
                  "error-messages": _vm.checkError("title"),
                  required: "",
                  autofocus: ""
                },
                on: {
                  blur: _vm.doneEdit,
                  keyup: [
                    function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.doneEdit($event)
                    },
                    function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k(
                          $event.keyCode,
                          "escape",
                          undefined,
                          $event.key,
                          undefined
                        )
                      ) {
                        return null
                      }
                      return _vm.cancelEdit($event)
                    }
                  ]
                },
                model: {
                  value: _vm.title,
                  callback: function($$v) {
                    _vm.title = $$v
                  },
                  expression: "title"
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      !_vm.editing
        ? _c(
            "v-list-item-icon",
            [
              _c(
                "v-icon",
                {
                  attrs: { color: "green mr-2 ml-2" },
                  on: { click: _vm.editTodo }
                },
                [_vm._v("edit")]
              ),
              _vm._v(" "),
              _c(
                "v-icon",
                {
                  attrs: { color: "red mr-2 ml-2" },
                  on: {
                    click: function($event) {
                      return _vm.removeTodo(_vm.id)
                    }
                  }
                },
                [_vm._v("delete")]
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/components/todo/TodoItem.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/components/todo/TodoItem.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TodoItem_vue_vue_type_template_id_4cbe6f5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoItem.vue?vue&type=template&id=4cbe6f5c&scoped=true& */ "./resources/js/src/components/todo/TodoItem.vue?vue&type=template&id=4cbe6f5c&scoped=true&");
/* harmony import */ var _TodoItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoItem.vue?vue&type=script&lang=js& */ "./resources/js/src/components/todo/TodoItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TodoItem_vue_vue_type_style_index_0_id_4cbe6f5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoItem.vue?vue&type=style&index=0&id=4cbe6f5c&scoped=true&lang=css& */ "./resources/js/src/components/todo/TodoItem.vue?vue&type=style&index=0&id=4cbe6f5c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TodoItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TodoItem_vue_vue_type_template_id_4cbe6f5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TodoItem_vue_vue_type_template_id_4cbe6f5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4cbe6f5c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/todo/TodoItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/todo/TodoItem.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/components/todo/TodoItem.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/todo/TodoItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/todo/TodoItem.vue?vue&type=style&index=0&id=4cbe6f5c&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/components/todo/TodoItem.vue?vue&type=style&index=0&id=4cbe6f5c&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_style_index_0_id_4cbe6f5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoItem.vue?vue&type=style&index=0&id=4cbe6f5c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/todo/TodoItem.vue?vue&type=style&index=0&id=4cbe6f5c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_style_index_0_id_4cbe6f5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_style_index_0_id_4cbe6f5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_style_index_0_id_4cbe6f5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_style_index_0_id_4cbe6f5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_style_index_0_id_4cbe6f5c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/components/todo/TodoItem.vue?vue&type=template&id=4cbe6f5c&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/components/todo/TodoItem.vue?vue&type=template&id=4cbe6f5c&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_template_id_4cbe6f5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TodoItem.vue?vue&type=template&id=4cbe6f5c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/todo/TodoItem.vue?vue&type=template&id=4cbe6f5c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_template_id_4cbe6f5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TodoItem_vue_vue_type_template_id_4cbe6f5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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