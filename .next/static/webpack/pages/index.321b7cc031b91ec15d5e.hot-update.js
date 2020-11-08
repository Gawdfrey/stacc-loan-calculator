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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "myChangeHandler", function (event) {
      var nam = event.target.name;
      var val = event.target.value;

      _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, nam, val));
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
        onSubmit: this.mySubmitHandler,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
          children: "Generisk Banks l\xE5nekalkulator!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h5", {
          children: "Ta \xE5 fyll in skjemaet under, s\xE5 vil tabellene og grafene oppdatere seg!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
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
                lineNumber: 46,
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
                lineNumber: 47,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "col",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "form-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
                children: "Nominell rente"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                type: "number",
                className: "form-control",
                name: "nominellRente",
                onChange: this.myChangeHandler,
                placeholder: "Hvilken rente \xF8nsker du?",
                required: true,
                value: this.state.nominellRente
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
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
          lineNumber: 43,
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
            lineNumber: 108,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
            className: "btn btn-outline-danger btn-sm",
            type: "reset",
            children: "Avbryt"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbIkZvcm0iLCJwcm9wcyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJqc29uT2JqZWN0IiwibGFhbmViZWxvcCIsInN0YXRlIiwibGFhbmVCZWxvcCIsIm5vbWluZWxsUmVudGUiLCJ0ZXJtaW5HZWJ5ciIsInV0bG9wc0RhdG8iLCJNb21lbnQiLCJhZGQiLCJhbnRhbGxBYXIiLCJmb3JtYXQiLCJzYWxkb0RhdG8iLCJkYXRvRm9yc3RlSW5uYmV0YWxpbmciLCJ1a2plbnRWZXJkaSIsImhhbmRsZVN1Ym1pdCIsIm5hbSIsInRhcmdldCIsIm5hbWUiLCJ2YWwiLCJ2YWx1ZSIsInNldFN0YXRlIiwibXlTdWJtaXRIYW5kbGVyIiwibXlDaGFuZ2VIYW5kbGVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsSTs7Ozs7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsME5BU0QsVUFBQ0MsS0FBRCxFQUFXO0FBQzNCQSxXQUFLLENBQUNDLGNBQU47QUFDQSxVQUFJQyxVQUFVLEdBQUc7QUFDZkMsa0JBQVUsRUFBRSxNQUFLQyxLQUFMLENBQVdDLFVBRFI7QUFFZkMscUJBQWEsRUFBRSxNQUFLRixLQUFMLENBQVdFLGFBRlg7QUFHZkMsbUJBQVcsRUFBRSxNQUFLSCxLQUFMLENBQVdHLFdBSFQ7QUFJZkMsa0JBQVUsRUFBRUMsNkNBQU0sQ0FBQyxZQUFELEVBQWUsWUFBZixDQUFOLENBQ1RDLEdBRFMsQ0FDTCxNQUFLTixLQUFMLENBQVdPLFNBRE4sRUFDaUIsR0FEakIsRUFFVEMsTUFGUyxDQUVGLFlBRkUsQ0FKRztBQU9mQyxpQkFBUyxFQUFFLFlBUEk7QUFRZkMsNkJBQXFCLEVBQUUsWUFSUjtBQVNmQyxt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eC4zMjFiN2NjMDMxYjkxZWMxNWQ1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBsYWFuZUJlbG9wOiAxMDAwMDAwLFxyXG4gICAgICBub21pbmVsbFJlbnRlOiAzLFxyXG4gICAgICB0ZXJtaW5HZWJ5cjogNTAsXHJcbiAgICAgIGFudGFsbEFhcjogNSxcclxuICAgIH07XHJcbiAgfVxyXG4gIG15U3VibWl0SGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBqc29uT2JqZWN0ID0ge1xyXG4gICAgICBsYWFuZWJlbG9wOiB0aGlzLnN0YXRlLmxhYW5lQmVsb3AsXHJcbiAgICAgIG5vbWluZWxsUmVudGU6IHRoaXMuc3RhdGUubm9taW5lbGxSZW50ZSxcclxuICAgICAgdGVybWluR2VieXI6IHRoaXMuc3RhdGUudGVybWluR2VieXIsXHJcbiAgICAgIHV0bG9wc0RhdG86IE1vbWVudChcIjIwMjAtMDEtMDFcIiwgXCJZWVlZLU1NLUREXCIpXHJcbiAgICAgICAgLmFkZCh0aGlzLnN0YXRlLmFudGFsbEFhciwgXCJ5XCIpXHJcbiAgICAgICAgLmZvcm1hdChcIllZWVktTU0tRERcIiksXHJcbiAgICAgIHNhbGRvRGF0bzogXCIyMDIwLTAxLTAxXCIsXHJcbiAgICAgIGRhdG9Gb3JzdGVJbm5iZXRhbGluZzogXCIyMDIwLTAxLTAxXCIsXHJcbiAgICAgIHVramVudFZlcmRpOiBcIlRFUk1JTkJFTE9QXCIsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXQoanNvbk9iamVjdCk7XHJcbiAgfTtcclxuICBteUNoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGxldCBuYW0gPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgIGxldCB2YWwgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgW25hbV06IHZhbCB9KTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm15U3VibWl0SGFuZGxlcn0+XHJcbiAgICAgICAgPGgxPkdlbmVyaXNrIEJhbmtzIGzDpW5la2Fsa3VsYXRvciE8L2gxPlxyXG4gICAgICAgIDxoNT5cclxuICAgICAgICAgIFRhIMOlIGZ5bGwgaW4gc2tqZW1hZXQgdW5kZXIsIHPDpSB2aWwgdGFiZWxsZW5lIG9nIGdyYWZlbmUgb3BwZGF0ZXJlXHJcbiAgICAgICAgICBzZWchXHJcbiAgICAgICAgPC9oNT5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+TMOlbmViZWzDuHA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImxhYW5lQmVsb3BcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubXlDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJIdm9yIG15ZSDDuG5za2VyIGR1IMOlIGzDpW5lP1wiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxhYW5lQmVsb3B9XHJcbiAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Ob21pbmVsbCByZW50ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibm9taW5lbGxSZW50ZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5teUNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkh2aWxrZW4gcmVudGUgw7huc2tlciBkdT9cIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5ub21pbmVsbFJlbnRlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+VGVybWluZ2VieXI8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0ZXJtaW5HZWJ5clwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubXlDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSHZvciBzdG9ydCB0ZXJtaW5nZWJ5ciDDuG5za2VyIGR1P1wiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGVybWluR2VieXJ9XHJcbiAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0b1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+T3ZlciBodm9yIG1hbmdlIMOlciBza2FsIGzDpW5ldCBzdHJla2tlIHNlZz88L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUZvcm1Db250cm9sU2VsZWN0MVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5teUNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYW50YWxsQWFyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+MTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+MTU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+MjA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+MjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+MzA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJCYXNpYyBleGFtcGxlXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgS2Fsa3VsZXIgbMOlblxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtXCIgdHlwZT1cInJlc2V0XCI+XHJcbiAgICAgICAgICAgIEF2YnJ5dFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9