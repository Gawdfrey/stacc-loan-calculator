webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sum.js":
/*!***************************!*\
  !*** ./components/Sum.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);






var _jsxFileName = "D:\\git\\nextjs\\components\\Sum.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Sum = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Sum, _React$Component);

  var _super = _createSuper(Sum);

  function Sum() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Sum);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Sum, [{
    key: "render",
    value: function render() {
      var response = this.props.response;
      var array = [];

      if (response != null) {
        response.nedbetalingsplan.innbetalinger.map(function (row) {
          array.push({
            dato: row.dato,
            innbetaling: Math.round(row.innbetaling),
            renter: Math.round(row.renter)
          });
          return array;
        });
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
        children: "hey"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }, this);
    }
  }]);

  return Sum;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Sum);

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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Form */ "./components/Form.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Table */ "./components/Table.js");
/* harmony import */ var _components_Chart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Chart */ "./components/Chart.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_Sum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Sum */ "./components/Sum.js");








var _jsxFileName = "D:\\git\\nextjs\\pages\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var ekstern_api_url = "https://visningsrom.stacc.com/dd_server_laaneberegning/rest/laaneberegning/v1/nedbetalingsplan";
var intern_api_url_serie = "http://localhost:3000/api/Serielaan";
var intern_api_url_annuitet = "http://localhost:3000/api/Annuitetslaan";

var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "changeIndex", function (newIndex) {
      return _this.setState({
        index: newIndex
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSubmit", function (laanDetaljer) {
      _this.setState({
        jsonObject: laanDetaljer
      });

      fetch(ekstern_api_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(laanDetaljer)
      }).then(function (res) {
        return res.json();
      }).then(function (result) {
        _this.setState({
          internApi: result
        });
      });
      fetch(intern_api_url_serie, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(laanDetaljer)
      }).then(function (res) {
        return res.json();
      }).then(function (result) {
        _this.setState({
          eksternApiSerie: result
        });
      });
      fetch(intern_api_url_annuitet, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(laanDetaljer)
      }).then(function (res) {
        return res.json();
      }).then(function (result) {
        _this.setState({
          eksternApiAnnuitet: result
        });
      });
    });

    _this.state = {
      jsonObject: null,
      internApi: null,
      eksternApiSerie: null,
      eksternApiAnnuitet: null,
      index: 0
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Form__WEBPACK_IMPORTED_MODULE_9__["default"], {
            handleSubmit: this.handleSubmit
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          "class": "row justify-content-center",
          style: {
            marginTop: "3rem"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            "class": "btn-group",
            role: "group",
            "aria-label": "Basic example",
            type: {
              marginTop: "3rem",
              textAlign: "center"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
              type: "button",
              "class": "btn btn-primary",
              onClick: function onClick() {
                return _this2.changeIndex(0);
              },
              children: "L\xE5n fra ekstern API"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
              type: "button",
              "class": "btn btn-primary",
              onClick: function onClick() {
                return _this2.changeIndex(1);
              },
              children: "Seriel\xE5n fra intern API"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
              type: "button",
              "class": "btn btn-primary",
              onClick: function onClick() {
                return _this2.changeIndex(2);
              },
              children: "Annuitetsl\xE5n fra intern API"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["Carousel"], {
          activeIndex: this.state.index,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["CarouselItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "col",
                style: {
                  marginTop: 20
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
                  children: "Eksternt l\xE5n"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Table__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  response: this.state.internApi
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "col",
                style: {
                  marginTop: 20
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "row justify-content-center",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Chart__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    response: this.state.internApi
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Sum__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["CarouselItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              "class": "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "col",
                style: {
                  marginTop: 20
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
                  children: "Seriel\xE5n"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Table__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  response: this.state.eksternApiSerie
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "col",
                style: {
                  marginTop: 20
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "row justify-content-center",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Chart__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    response: this.state.eksternApiSerie
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["CarouselItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              "class": "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "col",
                style: {
                  marginTop: 20
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
                  children: "Annuitetsl\xE5n"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Table__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  response: this.state.eksternApiAnnuitet
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "col",
                style: {
                  marginTop: 20
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "row justify-content-center",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Chart__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    response: this.state.eksternApiAnnuitet
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 130,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 7
      }, this);
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlN1bSIsInJlc3BvbnNlIiwicHJvcHMiLCJhcnJheSIsIm5lZGJldGFsaW5nc3BsYW4iLCJpbm5iZXRhbGluZ2VyIiwibWFwIiwicm93IiwicHVzaCIsImRhdG8iLCJpbm5iZXRhbGluZyIsIk1hdGgiLCJyb3VuZCIsInJlbnRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZWtzdGVybl9hcGlfdXJsIiwiaW50ZXJuX2FwaV91cmxfc2VyaWUiLCJpbnRlcm5fYXBpX3VybF9hbm51aXRldCIsIkluZGV4IiwibmV3SW5kZXgiLCJzZXRTdGF0ZSIsImluZGV4IiwibGFhbkRldGFsamVyIiwianNvbk9iamVjdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJpbnRlcm5BcGkiLCJla3N0ZXJuQXBpU2VyaWUiLCJla3N0ZXJuQXBpQW5udWl0ZXQiLCJzdGF0ZSIsImhhbmRsZVN1Ym1pdCIsIm1hcmdpblRvcCIsInRleHRBbGlnbiIsImNoYW5nZUluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVNQSxHOzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQUEsVUFDQ0MsUUFERCxHQUNjLEtBQUtDLEtBRG5CLENBQ0NELFFBREQ7QUFFUCxVQUFNRSxLQUFLLEdBQUcsRUFBZDs7QUFDQSxVQUFJRixRQUFRLElBQUksSUFBaEIsRUFBc0I7QUFDcEJBLGdCQUFRLENBQUNHLGdCQUFULENBQTBCQyxhQUExQixDQUF3Q0MsR0FBeEMsQ0FBNEMsVUFBQ0MsR0FBRCxFQUFTO0FBQ25ESixlQUFLLENBQUNLLElBQU4sQ0FBVztBQUNUQyxnQkFBSSxFQUFFRixHQUFHLENBQUNFLElBREQ7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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFtRUQ7Ozs7RUEzSGlCdkIsNkNBQUssQ0FBQ0MsUzs7QUE4SFhJLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmViZjJiNGM2MDg0Y2E5YzY4Yzg2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jbGFzcyBTdW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBhcnJheSA9IFtdO1xyXG4gICAgaWYgKHJlc3BvbnNlICE9IG51bGwpIHtcclxuICAgICAgcmVzcG9uc2UubmVkYmV0YWxpbmdzcGxhbi5pbm5iZXRhbGluZ2VyLm1hcCgocm93KSA9PiB7XHJcbiAgICAgICAgYXJyYXkucHVzaCh7XHJcbiAgICAgICAgICBkYXRvOiByb3cuZGF0byxcclxuICAgICAgICAgIGlubmJldGFsaW5nOiBNYXRoLnJvdW5kKHJvdy5pbm5iZXRhbGluZyksXHJcbiAgICAgICAgICByZW50ZXI6IE1hdGgucm91bmQocm93LnJlbnRlciksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxoMT5oZXk8L2gxPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1bTsiLCJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCIuLi9jb21wb25lbnRzL1RhYmxlXCI7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGFydFwiO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCwgQ2Fyb3VzZWxJdGVtIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgU3VtIGZyb20gXCIuLi9jb21wb25lbnRzL1N1bVwiXHJcblxyXG5jb25zdCBla3N0ZXJuX2FwaV91cmwgPVxyXG4gIFwiaHR0cHM6Ly92aXNuaW5nc3JvbS5zdGFjYy5jb20vZGRfc2VydmVyX2xhYW5lYmVyZWduaW5nL3Jlc3QvbGFhbmViZXJlZ25pbmcvdjEvbmVkYmV0YWxpbmdzcGxhblwiO1xyXG5cclxuY29uc3QgaW50ZXJuX2FwaV91cmxfc2VyaWUgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvU2VyaWVsYWFuXCI7XHJcbmNvbnN0IGludGVybl9hcGlfdXJsX2FubnVpdGV0ID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL0FubnVpdGV0c2xhYW5cIjtcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAganNvbk9iamVjdDogbnVsbCxcclxuICAgICAgaW50ZXJuQXBpOiBudWxsLFxyXG4gICAgICBla3N0ZXJuQXBpU2VyaWU6IG51bGwsXHJcbiAgICAgIGVrc3Rlcm5BcGlBbm51aXRldDogbnVsbCxcclxuICAgICAgaW5kZXg6IDAsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlSW5kZXggPSAobmV3SW5kZXgpID0+IChcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbmRleDogbmV3SW5kZXggfSlcclxuICApXHJcblxyXG4gIGhhbmRsZVN1Ym1pdCA9IChsYWFuRGV0YWxqZXIpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBqc29uT2JqZWN0OiBsYWFuRGV0YWxqZXIgfSk7XHJcbiAgICBmZXRjaChla3N0ZXJuX2FwaV91cmwsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShsYWFuRGV0YWxqZXIpLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnRlcm5BcGk6IHJlc3VsdCB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgZmV0Y2goaW50ZXJuX2FwaV91cmxfc2VyaWUsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShsYWFuRGV0YWxqZXIpLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBla3N0ZXJuQXBpU2VyaWU6IHJlc3VsdCB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgZmV0Y2goaW50ZXJuX2FwaV91cmxfYW5udWl0ZXQsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShsYWFuRGV0YWxqZXIpLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBla3N0ZXJuQXBpQW5udWl0ZXQ6IHJlc3VsdCB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEZvcm0gaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiM3JlbVwiIH19PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cImJ0bi1ncm91cFwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJncm91cFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJCYXNpYyBleGFtcGxlXCJcclxuICAgICAgICAgICAgdHlwZT17eyBtYXJnaW5Ub3A6IFwiM3JlbVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoYW5nZUluZGV4KDApfT5cclxuICAgICAgICAgICAgICBMw6VuIGZyYSBla3N0ZXJuIEFQSVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoYW5nZUluZGV4KDEpfT5cclxuICAgICAgICAgICAgICBTZXJpZWzDpW4gZnJhIGludGVybiBBUElcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4gdGhpcy5jaGFuZ2VJbmRleCgyKX0+XHJcbiAgICAgICAgICAgICAgQW5udWl0ZXRzbMOlbiBmcmEgaW50ZXJuIEFQSVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxDYXJvdXNlbCBhY3RpdmVJbmRleD17dGhpcy5zdGF0ZS5pbmRleH0+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWxJdGVtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgIDxoMT5Fa3N0ZXJudCBsw6VuPC9oMT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZSByZXNwb25zZT17dGhpcy5zdGF0ZS5pbnRlcm5BcGl9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hhcnQgcmVzcG9uc2U9e3RoaXMuc3RhdGUuaW50ZXJuQXBpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8U3VtLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Nhcm91c2VsSXRlbT5cclxuICAgICAgICAgIDxDYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICA8aDE+U2VyaWVsw6VuPC9oMT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZSByZXNwb25zZT17dGhpcy5zdGF0ZS5la3N0ZXJuQXBpU2VyaWV9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hhcnQgcmVzcG9uc2U9e3RoaXMuc3RhdGUuZWtzdGVybkFwaVNlcmllfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWxJdGVtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgPGgxPkFubnVpdGV0c2zDpW48L2gxPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlIHJlc3BvbnNlPXt0aGlzLnN0YXRlLmVrc3Rlcm5BcGlBbm51aXRldH0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGFydCByZXNwb25zZT17dGhpcy5zdGF0ZS5la3N0ZXJuQXBpQW5udWl0ZXR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Nhcm91c2VsSXRlbT5cclxuICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==