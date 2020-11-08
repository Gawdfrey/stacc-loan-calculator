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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "mySubmitHandler", function (event) {
      event.preventDefault();
      console.log(moment__WEBPACK_IMPORTED_MODULE_9___default()("2020-01-01", "YYYY-MM-DD").add(_this.state.antallAar, 'y'));
      var jsonObject = {
        laanebelop: _this.state.laaneBelop,
        nominellRente: _this.state.nominellRente,
        terminGebyr: _this.state.terminGebyr,
        utlopsDato: moment__WEBPACK_IMPORTED_MODULE_9___default()("2020-01-01", "YYYY-MM-DD").add(_this.state.antallAar, 'y'),
        saldoDato: "2020-01-01",
        datoForsteInnbetaling: "2020-01-01",
        ukjentVerdi: "TERMINBELOP"
      };

      _this.props.handleSubmit(jsonObject);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "myChangeHandler", function (event) {
      var nam = event.target.name;
      var val = event.target.value;

      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, nam, val));
    });

    _this.state = {
      laaneBelop: null,
      nominellRente: null,
      terminGebyr: null,
      antallAar: 0
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Form, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("form", {
        onSubmit: this.mySubmitHandler,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
          children: "Generisk Banks l\xE5nekalkulator!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h5", {
          children: "Ta \xE5 fyll in skjemaet under, s\xE5 vil tabellene og grafene oppdatere seg!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
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
                lineNumber: 45,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                type: "number",
                className: "form-control",
                name: "laaneBelop",
                onChange: this.myChangeHandler,
                placeholder: "Hvor mye \xF8nsker du \xE5 l\xE5ne?",
                required: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "col",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
                children: "Nominell rente"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                type: "number",
                className: "form-control",
                name: "nominellRente",
                onChange: this.myChangeHandler,
                placeholder: "Hvilken rente \xF8nsker du?",
                required: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "col",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
              children: "Termingebyr"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
              type: "number",
              className: "form-control",
              name: "terminGebyr",
              onChange: this.myChangeHandler,
              placeholder: "Hvor stort termingebyr \xF8nsker du?",
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "form-row",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "col",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
                children: "Hvor lang l\xE5netid \xF8nsker du?"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
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
                  lineNumber: 86,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                  children: "10"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                  children: "15"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                  children: "20"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                  children: "25"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                  children: "30"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "btn-group",
          role: "group",
          "aria-label": "Basic example",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
            className: "btn btn-primary",
            type: "submit",
            children: "Kalkuler l\xE5n"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
            className: "btn btn-outline-danger btn-sm",
            type: "reset",
            children: "Avbryt"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbIkZvcm0iLCJwcm9wcyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiTW9tZW50IiwiYWRkIiwic3RhdGUiLCJhbnRhbGxBYXIiLCJqc29uT2JqZWN0IiwibGFhbmViZWxvcCIsImxhYW5lQmVsb3AiLCJub21pbmVsbFJlbnRlIiwidGVybWluR2VieXIiLCJ1dGxvcHNEYXRvIiwic2FsZG9EYXRvIiwiZGF0b0ZvcnN0ZUlubmJldGFsaW5nIiwidWtqZW50VmVyZGkiLCJoYW5kbGVTdWJtaXQiLCJuYW0iLCJ0YXJnZXQiLCJuYW1lIiwidmFsIiwidmFsdWUiLCJzZXRTdGF0ZSIsIm15U3VibWl0SGFuZGxlciIsIm15Q2hhbmdlSGFuZGxlciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLEk7Ozs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLDBOQVNELFVBQUNDLEtBQUQsRUFBVztBQUMzQkEsV0FBSyxDQUFDQyxjQUFOO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZQyw2Q0FBTSxDQUFDLFlBQUQsRUFBZSxZQUFmLENBQU4sQ0FBbUNDLEdBQW5DLENBQXVDLE1BQUtDLEtBQUwsQ0FBV0MsU0FBbEQsRUFBNkQsR0FBN0QsQ0FBWjtBQUNBLFVBQUlDLFVBQVUsR0FBRztBQUNmQyxrQkFBVSxFQUFFLE1BQUtILEtBQUwsQ0FBV0ksVUFEUjtBQUVmQyxxQkFBYSxFQUFFLE1BQUtMLEtBQUwsQ0FBV0ssYUFGWDtBQUdmQyxtQkFBVyxFQUFFLE1BQUtOLEtBQUwsQ0FBV00sV0FIVDtBQUlmQyxrQkFBVSxFQUFFVCw2Q0FBTSxDQUFDLFlBQUQsRUFBZSxZQUFmLENBQU4sQ0FB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QUFBUSx5QkFBTSxjQUFkO0FBQTZCLGtCQUFFLEVBQUMsMkJBQWhDO0FBQTRELHdCQUFRLEVBQUUsS0FBS0EsZUFBM0U7QUFBNEYsb0JBQUksRUFBQyxXQUFqRztBQUFBLHdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUpGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBTEYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBOUNGLGVBNkRFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQTJCLGNBQUksRUFBQyxPQUFoQztBQUF3Qyx3QkFBVyxlQUFuRDtBQUFBLGtDQUNFO0FBQVEscUJBQVMsRUFBQyxpQkFBbEI7QUFBb0MsZ0JBQUksRUFBQyxRQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQVEscUJBQVMsRUFBQywrQkFBbEI7QUFBa0QsZ0JBQUksRUFBQyxPQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBN0RGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBd0VEOzs7O0VBdEdnQkMsNENBQUssQ0FBQ0MsUzs7QUF5R1Y3QixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNmJiYzE0N2FlMmQzZTZkNjdiOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gJ21vbWVudCdcclxuXHJcbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBsYWFuZUJlbG9wOiBudWxsLFxyXG4gICAgICBub21pbmVsbFJlbnRlOiBudWxsLFxyXG4gICAgICB0ZXJtaW5HZWJ5cjogbnVsbCxcclxuICAgICAgYW50YWxsQWFyOiAwLFxyXG4gICAgfTtcclxuICB9XHJcbiAgbXlTdWJtaXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coTW9tZW50KFwiMjAyMC0wMS0wMVwiLCBcIllZWVktTU0tRERcIikuYWRkKHRoaXMuc3RhdGUuYW50YWxsQWFyLCAneScpKVxyXG4gICAgbGV0IGpzb25PYmplY3QgPSB7XHJcbiAgICAgIGxhYW5lYmVsb3A6IHRoaXMuc3RhdGUubGFhbmVCZWxvcCxcclxuICAgICAgbm9taW5lbGxSZW50ZTogdGhpcy5zdGF0ZS5ub21pbmVsbFJlbnRlLFxyXG4gICAgICB0ZXJtaW5HZWJ5cjogdGhpcy5zdGF0ZS50ZXJtaW5HZWJ5cixcclxuICAgICAgdXRsb3BzRGF0bzogTW9tZW50KFwiMjAyMC0wMS0wMVwiLCBcIllZWVktTU0tRERcIikuYWRkKHRoaXMuc3RhdGUuYW50YWxsQWFyLCAneScpLFxyXG4gICAgICBzYWxkb0RhdG86IFwiMjAyMC0wMS0wMVwiLFxyXG4gICAgICBkYXRvRm9yc3RlSW5uYmV0YWxpbmc6IFwiMjAyMC0wMS0wMVwiLFxyXG4gICAgICB1a2plbnRWZXJkaTogXCJURVJNSU5CRUxPUFwiLFxyXG4gICAgfTtcclxuICAgIHRoaXMucHJvcHMuaGFuZGxlU3VibWl0KGpzb25PYmplY3QpO1xyXG4gIH07XHJcbiAgbXlDaGFuZ2VIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBsZXQgbmFtID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICBsZXQgdmFsID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtuYW1dOiB2YWwgfSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5teVN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgIDxoMT5HZW5lcmlzayBCYW5rcyBsw6VuZWthbGt1bGF0b3IhPC9oMT5cclxuICAgICAgICA8aDU+XHJcbiAgICAgICAgICBUYSDDpSBmeWxsIGluIHNramVtYWV0IHVuZGVyLCBzw6UgdmlsIHRhYmVsbGVuZSBvZyBncmFmZW5lIG9wcGRhdGVyZVxyXG4gICAgICAgICAgc2VnIVxyXG4gICAgICAgIDwvaDU+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkzDpW5lYmVsw7hwPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJsYWFuZUJlbG9wXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm15Q2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSHZvciBteWUgw7huc2tlciBkdSDDpSBsw6VuZT9cIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Ob21pbmVsbCByZW50ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibm9taW5lbGxSZW50ZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5teUNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkh2aWxrZW4gcmVudGUgw7huc2tlciBkdT9cIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5UZXJtaW5nZWJ5cjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInRlcm1pbkdlYnlyXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5teUNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIdm9yIHN0b3J0IHRlcm1pbmdlYnlyIMO4bnNrZXIgZHU/XCJcclxuICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Idm9yIGxhbmcgbMOlbmV0aWQgw7huc2tlciBkdT88L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImV4YW1wbGVGb3JtQ29udHJvbFNlbGVjdDFcIiBvbkNoYW5nZT17dGhpcy5teUNoYW5nZUhhbmRsZXJ9IG5hbWU9XCJhbnRhbGxBYXJcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj4xMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj4xNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj4yMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj4yNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj4zMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkJhc2ljIGV4YW1wbGVcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICBLYWxrdWxlciBsw6VuXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc21cIiB0eXBlPVwicmVzZXRcIj5cclxuICAgICAgICAgICAgQXZicnl0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=