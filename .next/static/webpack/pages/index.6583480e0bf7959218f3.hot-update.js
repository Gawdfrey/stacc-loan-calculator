webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);








var _jsxFileName = "D:\\git\\nextjs\\components\\Form.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Form = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Form, _React$Component);

  var _super = _createSuper(Form);

  function Form(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Form);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "myChangeHandler", function (event) {
      var nam = event.target.name;
      var val = event.target.value;

      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, nam, val));

      event.preventDefault();
      var jsonObject = {
        laanebelop: _this.state.laaneBelop,
        nominellRente: _this.state.nominellRente,
        terminGebyr: _this.state.terminGebyr,
        utlopsDato: moment__WEBPACK_IMPORTED_MODULE_9___default()("2020-01-01", "YYYY-MM-DD").add(_this.state.antallAar, "y").format("YYYY-MM-DD"),
        saldoDato: "2020-01-01",
        datoForsteInnbetaling: "2020-01-01",
        ukjentVerdi: "TERMINBELOP"
      };

      _this.props.handleSubmit(jsonObject);
    });

    _this.state = {
      laaneBelop: 1000000,
      nominellRente: 3,
      terminGebyr: 50,
      antallAar: 5
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Form, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("form", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
          children: "Generisk Banks l\xE5nekalkulator!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h5", {
          children: "Endre noen verdier for \xE5 se tabellene og grafene oppdatere seg!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "col",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
                children: "L\xE5nebel\xF8p"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                type: "number",
                className: "form-control",
                name: "laaneBelop",
                onChange: this.myChangeHandler,
                placeholder: "Hvor mye \xF8nsker du \xE5 l\xE5ne?",
                required: true,
                value: this.state.laaneBelop,
                min: 0
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "col",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
                children: "Nominell rente"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                type: "number",
                className: "form-control",
                name: "nominellRente",
                onChange: this.myChangeHandler,
                placeholder: "Hvilken rente \xF8nsker du?",
                required: true,
                value: this.state.nominellRente,
                min: 0,
                max: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "col",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
              children: "Termingebyr"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
              type: "number",
              className: "form-control",
              name: "terminGebyr",
              onChange: this.myChangeHandler,
              placeholder: "Hvor stort termingebyr \xF8nsker du?",
              required: true,
              value: this.state.terminGebyr,
              min: 0
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "form-row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "col-auto",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
                children: "Over hvor mange \xE5r skal l\xE5net strekke seg?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("select", {
                "class": "form-control",
                id: "exampleFormControlSelect1",
                onChange: this.myChangeHandler,
                name: "antallAar",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                  children: "5"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                  children: "10"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                  children: "15"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                  children: "20"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                  children: "25"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                  children: "30"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }, this);
    }
  }]);

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Form);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbIkZvcm0iLCJwcm9wcyIsImV2ZW50IiwibmFtIiwidGFyZ2V0IiwibmFtZSIsInZhbCIsInZhbHVlIiwic2V0U3RhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImpzb25PYmplY3QiLCJsYWFuZWJlbG9wIiwic3RhdGUiLCJsYWFuZUJlbG9wIiwibm9taW5lbGxSZW50ZSIsInRlcm1pbkdlYnlyIiwidXRsb3BzRGF0byIsIk1vbWVudCIsImFkZCIsImFudGFsbEFhciIsImZvcm1hdCIsInNhbGRvRGF0byIsImRhdG9Gb3JzdGVJbm5iZXRhbGluZyIsInVramVudFZlcmRpIiwiaGFuZGxlU3VibWl0IiwibXlDaGFuZ2VIYW5kbGVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsSTs7Ozs7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsME5BVUQsVUFBQ0MsS0FBRCxFQUFXO0FBQzNCLFVBQUlDLEdBQUcsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLElBQXZCO0FBQ0EsVUFBSUMsR0FBRyxHQUFHSixLQUFLLENBQUNFLE1BQU4sQ0FBYUcsS0FBdkI7O0FBQ0EsWUFBS0MsUUFBTCwrRkFBaUJMLEdBQWpCLEVBQXVCRyxHQUF2Qjs7QUFDQUosV0FBSyxDQUFDTyxjQUFOO0FBQ0EsVUFBSUMsVUFBVSxHQUFHO0FBQ2ZDLGtCQUFVLEVBQUUsTUFBS0MsS0FBTCxDQUFXQyxVQURSO0FBRWZDLHFCQUFhLEVBQUUsTUFBS0YsS0FBTCxDQUFXRSxhQUZYO0FBR2ZDLG1CQUFXLEVBQUUsTUFBS0gsS0FBTCxDQUFXRyxXQUhUO0FBSWZDLGtCQUFVLEVBQUVDLDZDQUFNLENBQUMsWUFBRCxFQUFlLFlBQWYsQ0FBTixD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RTtBQUNFLHlCQUFNLGNBRFI7QUFFRSxrQkFBRSxFQUFDLDJCQUZMO0FBR0Usd0JBQVEsRUFBRSxLQUFLVSxlQUhqQjtBQUlFLG9CQUFJLEVBQUMsV0FKUDtBQUFBLHdDQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQU5GLGVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUEYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFSRixlQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVRGLGVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBVkYsZUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBMkVEOzs7O0VBekdnQkMsNENBQUssQ0FBQ0MsUzs7QUE0R1YzQixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NTgzNDgwZTBiZjc5NTkyMThmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBsYWFuZUJlbG9wOiAxMDAwMDAwLFxyXG4gICAgICBub21pbmVsbFJlbnRlOiAzLFxyXG4gICAgICB0ZXJtaW5HZWJ5cjogNTAsXHJcbiAgICAgIGFudGFsbEFhcjogNSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBteUNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGxldCBuYW0gPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgIGxldCB2YWwgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgW25hbV06IHZhbCB9KTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQganNvbk9iamVjdCA9IHtcclxuICAgICAgbGFhbmViZWxvcDogdGhpcy5zdGF0ZS5sYWFuZUJlbG9wLFxyXG4gICAgICBub21pbmVsbFJlbnRlOiB0aGlzLnN0YXRlLm5vbWluZWxsUmVudGUsXHJcbiAgICAgIHRlcm1pbkdlYnlyOiB0aGlzLnN0YXRlLnRlcm1pbkdlYnlyLFxyXG4gICAgICB1dGxvcHNEYXRvOiBNb21lbnQoXCIyMDIwLTAxLTAxXCIsIFwiWVlZWS1NTS1ERFwiKVxyXG4gICAgICAgIC5hZGQodGhpcy5zdGF0ZS5hbnRhbGxBYXIsIFwieVwiKVxyXG4gICAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxyXG4gICAgICBzYWxkb0RhdG86IFwiMjAyMC0wMS0wMVwiLFxyXG4gICAgICBkYXRvRm9yc3RlSW5uYmV0YWxpbmc6IFwiMjAyMC0wMS0wMVwiLFxyXG4gICAgICB1a2plbnRWZXJkaTogXCJURVJNSU5CRUxPUFwiLFxyXG4gICAgfTtcclxuICAgIHRoaXMucHJvcHMuaGFuZGxlU3VibWl0KGpzb25PYmplY3QpO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgPGgxPkdlbmVyaXNrIEJhbmtzIGzDpW5la2Fsa3VsYXRvciE8L2gxPlxyXG4gICAgICAgIDxoNT5cclxuICAgICAgICAgIEVuZHJlIG5vZW4gdmVyZGllciBmb3Igw6Ugc2UgdGFiZWxsZW5lIG9nIGdyYWZlbmUgb3BwZGF0ZXJlIHNlZyFcclxuICAgICAgICA8L2g1PlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Mw6VuZWJlbMO4cDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibGFhbmVCZWxvcFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5teUNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkh2b3IgbXllIMO4bnNrZXIgZHUgw6UgbMOlbmU/XCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGFhbmVCZWxvcH1cclxuICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPk5vbWluZWxsIHJlbnRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJub21pbmVsbFJlbnRlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm15Q2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSHZpbGtlbiByZW50ZSDDuG5za2VyIGR1P1wiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5vbWluZWxsUmVudGV9XHJcbiAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICBtYXg9ezEwMH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgPGxhYmVsPlRlcm1pbmdlYnlyPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBuYW1lPVwidGVybWluR2VieXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm15Q2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkh2b3Igc3RvcnQgdGVybWluZ2VieXIgw7huc2tlciBkdT9cIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRlcm1pbkdlYnlyfVxyXG4gICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPk92ZXIgaHZvciBtYW5nZSDDpXIgc2thbCBsw6VuZXQgc3RyZWtrZSBzZWc/PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImV4YW1wbGVGb3JtQ29udHJvbFNlbGVjdDFcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubXlDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImFudGFsbEFhclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj41PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPjEwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPjE1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPjIwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPjI1PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPjMwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9