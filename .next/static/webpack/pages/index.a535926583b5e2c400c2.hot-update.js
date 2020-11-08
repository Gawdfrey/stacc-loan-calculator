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
                value: 1000000
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
                lineNumber: 60,
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
                lineNumber: 61,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: "col",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("label", {
              children: "Termingebyr"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
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
              lineNumber: 73,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
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
                lineNumber: 86,
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
                  lineNumber: 93,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                  children: "10"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                  children: "15"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                  children: "20"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                  children: "25"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                  children: "30"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
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
            lineNumber: 104,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
            className: "btn btn-outline-danger btn-sm",
            type: "reset",
            children: "Avbryt"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLmpzIl0sIm5hbWVzIjpbIkZvcm0iLCJwcm9wcyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJqc29uT2JqZWN0IiwibGFhbmViZWxvcCIsInN0YXRlIiwibGFhbmVCZWxvcCIsIm5vbWluZWxsUmVudGUiLCJ0ZXJtaW5HZWJ5ciIsInV0bG9wc0RhdG8iLCJNb21lbnQiLCJhZGQiLCJhbnRhbGxBYXIiLCJmb3JtYXQiLCJzYWxkb0RhdG8iLCJkYXRvRm9yc3RlSW5uYmV0YWxpbmciLCJ1a2plbnRWZXJkaSIsImhhbmRsZVN1Ym1pdCIsIm5hbSIsInRhcmdldCIsIm5hbWUiLCJ2YWwiLCJ2YWx1ZSIsInNldFN0YXRlIiwibXlTdWJtaXRIYW5kbGVyIiwibXlDaGFuZ2VIYW5kbGVyIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsSTs7Ozs7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsME5BU0QsVUFBQ0MsS0FBRCxFQUFXO0FBQzNCQSxXQUFLLENBQUNDLGNBQU47QUFDQSxVQUFJQyxVQUFVLEdBQUc7QUFDZkMsa0JBQVUsRUFBRSxNQUFLQyxLQUFMLENBQVdDLFVBRFI7QUFFZkMscUJBQWEsRUFBRSxNQUFLRixLQUFMLENBQVdFLGFBRlg7QUFHZkMsbUJBQVcsRUFBRSxNQUFLSCxLQUFMLENBQVdHLFdBSFQ7QUFJZkMsa0JBQVUsRUFBRUMsNkNBQU0sQ0FBQyxZQUFELEVBQWUsWUFBZixDQUFOLENBQ1RDLEdBRFMsQ0FDTCxNQUFLTixLQUFMLENBQVdPLFNBRE4sRUFDaUIsR0FEakIsRUFFVEMsTUFGUyxDQUVGLFlBRkUsQ0FKRztBQU9mQyxpQkFBUyxFQUFFLFlBUEk7QUFRZkMsNkJBQXFCLEVBQUUsWUFSUjtBQVNmQyxtQkFBVyxFQUFFO0FBVEUsT0FBakI7O0FBV0EsWUFBS2hCLEtBQUwsQ0FBV2lCLFlBQVgsQ0FBd0JkLFVBQXhCO0FBQ0QsS0F2QmtCOztBQUFBLDBOQXdCRCxVQUFDRixLQUFELEVBQVc7QUFDM0IsVUFBSWlCLEdBQUcsR0FBR2pCLEtBQUssQ0FBQ2tCLE1BQU4sQ0FBYUMsSUFBdkI7QUFDQSxVQUFJQyxHQUFHLEdBQUdwQixLQUFLLENBQUNrQixNQUFOLENBQWFHLEtBQXZCOztBQUNBLFlBQUtDLFFBQUwsK0ZBQWlCTCxHQUFqQixFQUF1QkcsR0FBdkI7QUFDRCxLQTVCa0I7O0FBRWpCLFVBQUtoQixLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsRUFBRSxPQUREO0FBRVhDLG1CQUFhLEVBQUUsQ0FGSjtBQUdYQyxpQkFBVyxFQUFFLEVBSEY7QUFJWEksZUFBUyxFQUFFO0FBSkEsS0FBYjtBQUZpQjtBQVFsQjs7Ozs2QkFxQlE7QUFDUCwwQkFDRTtBQUFNLGdCQUFRLEVBQUUsS0FBS1ksZUFBckI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixlQU9FO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsWUFBZjtBQUFBLHNDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUU7QUFDRSxvQkFBSSxFQUFDLFFBRFA7QUFFRSx5QkFBUyxFQUFDLGNBRlo7QUFHRSxvQkFBSSxFQUFDLFlBSFA7QUFJRSx3QkFBUSxFQUFFLEtBQUtDLGVBSmpCO0FBS0UsMkJBQVcsRUFBQyxxQ0FMZDtBQU1FLHdCQUFRLEVBQUUsSUFOWjtBQU9FLHFCQUFLLEVBQUU7QUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFlRTtBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxZQUFmO0FBQUEsc0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRTtBQUNFLG9CQUFJLEVBQUMsUUFEUDtBQUVFLHlCQUFTLEVBQUMsY0FGWjtBQUdFLG9CQUFJLEVBQUMsZUFIUDtBQUlFLHdCQUFRLEVBQUUsS0FBS0EsZUFKakI7QUFLRSwyQkFBVyxFQUFDLDZCQUxkO0FBTUUsd0JBQVEsRUFBRTtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFmRixlQTRCRTtBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFDRSxrQkFBSSxFQUFDLFFBRFA7QUFFRSx1QkFBUyxFQUFDLGNBRlo7QUFHRSxrQkFBSSxFQUFDLGFBSFA7QUFJRSxzQkFBUSxFQUFFLEtBQUtBLGVBSmpCO0FBS0UseUJBQVcsRUFBQyxzQ0FMZDtBQU1FLHNCQUFRLEVBQUU7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLGVBK0NFO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLFVBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsWUFBZjtBQUFBLHNDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUU7QUFDRSx5QkFBTSxjQURSO0FBRUUsa0JBQUUsRUFBQywyQkFGTDtBQUdFLHdCQUFRLEVBQUUsS0FBS0EsZUFIakI7QUFJRSxvQkFBSSxFQUFDLFdBSlA7QUFBQSx3Q0FNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFORixlQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVBGLGVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUkYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFURixlQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQVZGLGVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9DRixlQW1FRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUEyQixjQUFJLEVBQUMsT0FBaEM7QUFBd0Msd0JBQVcsZUFBbkQ7QUFBQSxrQ0FDRTtBQUFRLHFCQUFTLEVBQUMsaUJBQWxCO0FBQW9DLGdCQUFJLEVBQUMsUUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRTtBQUFRLHFCQUFTLEVBQUMsK0JBQWxCO0FBQWtELGdCQUFJLEVBQUMsT0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5FRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQThFRDs7OztFQTdHZ0JDLDRDQUFLLENBQUNDLFM7O0FBZ0hWNUIsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTUzNTkyNjU4M2I1ZTJjNDAwYzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbGFhbmVCZWxvcDogMTAwMDAwMCxcclxuICAgICAgbm9taW5lbGxSZW50ZTogMyxcclxuICAgICAgdGVybWluR2VieXI6IDUwLFxyXG4gICAgICBhbnRhbGxBYXI6IDUsXHJcbiAgICB9O1xyXG4gIH1cclxuICBteVN1Ym1pdEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQganNvbk9iamVjdCA9IHtcclxuICAgICAgbGFhbmViZWxvcDogdGhpcy5zdGF0ZS5sYWFuZUJlbG9wLFxyXG4gICAgICBub21pbmVsbFJlbnRlOiB0aGlzLnN0YXRlLm5vbWluZWxsUmVudGUsXHJcbiAgICAgIHRlcm1pbkdlYnlyOiB0aGlzLnN0YXRlLnRlcm1pbkdlYnlyLFxyXG4gICAgICB1dGxvcHNEYXRvOiBNb21lbnQoXCIyMDIwLTAxLTAxXCIsIFwiWVlZWS1NTS1ERFwiKVxyXG4gICAgICAgIC5hZGQodGhpcy5zdGF0ZS5hbnRhbGxBYXIsIFwieVwiKVxyXG4gICAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxyXG4gICAgICBzYWxkb0RhdG86IFwiMjAyMC0wMS0wMVwiLFxyXG4gICAgICBkYXRvRm9yc3RlSW5uYmV0YWxpbmc6IFwiMjAyMC0wMS0wMVwiLFxyXG4gICAgICB1a2plbnRWZXJkaTogXCJURVJNSU5CRUxPUFwiLFxyXG4gICAgfTtcclxuICAgIHRoaXMucHJvcHMuaGFuZGxlU3VibWl0KGpzb25PYmplY3QpO1xyXG4gIH07XHJcbiAgbXlDaGFuZ2VIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBsZXQgbmFtID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICBsZXQgdmFsID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtuYW1dOiB2YWwgfSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5teVN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgIDxoMT5HZW5lcmlzayBCYW5rcyBsw6VuZWthbGt1bGF0b3IhPC9oMT5cclxuICAgICAgICA8aDU+XHJcbiAgICAgICAgICBUYSDDpSBmeWxsIGluIHNramVtYWV0IHVuZGVyLCBzw6UgdmlsIHRhYmVsbGVuZSBvZyBncmFmZW5lIG9wcGRhdGVyZVxyXG4gICAgICAgICAgc2VnIVxyXG4gICAgICAgIDwvaDU+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkzDpW5lYmVsw7hwPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJsYWFuZUJlbG9wXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm15Q2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSHZvciBteWUgw7huc2tlciBkdSDDpSBsw6VuZT9cIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17MTAwMDAwMH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPk5vbWluZWxsIHJlbnRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJub21pbmVsbFJlbnRlXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm15Q2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSHZpbGtlbiByZW50ZSDDuG5za2VyIGR1P1wiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgPGxhYmVsPlRlcm1pbmdlYnlyPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBuYW1lPVwidGVybWluR2VieXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm15Q2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkh2b3Igc3RvcnQgdGVybWluZ2VieXIgw7huc2tlciBkdT9cIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0b1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWw+T3ZlciBodm9yIG1hbmdlIMOlciBza2FsIGzDpW5ldCBzdHJla2tlIHNlZz88L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIGlkPVwiZXhhbXBsZUZvcm1Db250cm9sU2VsZWN0MVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5teUNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYW50YWxsQWFyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+MTA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+MTU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+MjA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+MjU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+MzA8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJCYXNpYyBleGFtcGxlXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgS2Fsa3VsZXIgbMOlblxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtXCIgdHlwZT1cInJlc2V0XCI+XHJcbiAgICAgICAgICAgIEF2YnJ5dFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9