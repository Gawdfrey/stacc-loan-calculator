webpackHotUpdate_N_E("pages/index",{

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
            lineNumber: 72,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
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
              lineNumber: 81,
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
              lineNumber: 88,
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
              lineNumber: 95,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
              type: "button",
              "class": "btn btn-primary",
              onClick: function onClick() {
                return _this2.changeIndex(3);
              },
              children: "Sum"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["Carousel"], {
          activeIndex: this.state.index,
          controls: true,
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
                  lineNumber: 115,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Table__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  response: this.state.internApi
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "col",
                style: {
                  marginTop: 20
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "row justify-content-center",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Chart__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    response: this.state.internApi
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["CarouselItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "col",
                style: {
                  marginTop: 20
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
                  children: "Seriel\xE5n"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Table__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  response: this.state.eksternApiSerie
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 127,
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
                    lineNumber: 133,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 132,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["CarouselItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "col",
                style: {
                  marginTop: 20
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
                  children: "Annuitetsl\xE5n"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Table__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  response: this.state.eksternApiAnnuitet
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 140,
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
                    lineNumber: 146,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["CarouselItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "row",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "col",
                style: {
                  marginTop: 20
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_Sum__WEBPACK_IMPORTED_MODULE_14__["default"], {
                  internApiResponse: this.state.internApi,
                  EksternApiAnnuitetResponse: this.state.eksternApiAnnuitet,
                  response3: this.state.eksternApiSerie
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZWtzdGVybl9hcGlfdXJsIiwiaW50ZXJuX2FwaV91cmxfc2VyaWUiLCJpbnRlcm5fYXBpX3VybF9hbm51aXRldCIsIkluZGV4IiwicHJvcHMiLCJuZXdJbmRleCIsInNldFN0YXRlIiwiaW5kZXgiLCJsYWFuRGV0YWxqZXIiLCJqc29uT2JqZWN0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3VsdCIsImludGVybkFwaSIsImVrc3Rlcm5BcGlTZXJpZSIsImVrc3Rlcm5BcGlBbm51aXRldCIsInN0YXRlIiwiaGFuZGxlU3VibWl0IiwibWFyZ2luVG9wIiwidGV4dEFsaWduIiwiY2hhbmdlSW5kZXgiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQ25CLGdHQURGO0FBR0EsSUFBTUMsb0JBQW9CLEdBQUcscUNBQTdCO0FBQ0EsSUFBTUMsdUJBQXVCLEdBQUcseUNBQWhDOztJQUVNQyxLOzs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQixzTkFXTCxVQUFDQyxRQUFEO0FBQUEsYUFBYyxNQUFLQyxRQUFMLENBQWM7QUFBRUMsYUFBSyxFQUFFRjtBQUFULE9BQWQsQ0FBZDtBQUFBLEtBWEs7O0FBQUEsdU5BYUosVUFBQ0csWUFBRCxFQUFrQjtBQUMvQixZQUFLRixRQUFMLENBQWM7QUFBRUcsa0JBQVUsRUFBRUQ7QUFBZCxPQUFkOztBQUNBRSxXQUFLLENBQUNWLGVBQUQsRUFBa0I7QUFDckJXLGNBQU0sRUFBRSxNQURhO0FBRXJCQyxlQUFP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QkFERixlQUtFO0FBQUsseUJBQVMsRUFBQyxLQUFmO0FBQXFCLHFCQUFLLEVBQUU7QUFBRUcsMkJBQVMsRUFBRTtBQUFiLGlCQUE1QjtBQUFBLHVDQUNFO0FBQUssMkJBQVMsRUFBQyw0QkFBZjtBQUFBLHlDQUNFLHFFQUFDLDBEQUFEO0FBQU8sNEJBQVEsRUFBRSxLQUFLRixLQUFMLENBQVdEO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTNCRixlQXdDRSxxRUFBQyw2REFBRDtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxLQUFmO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFDLEtBQWY7QUFBcUIscUJBQUssRUFBRTtBQUFFRywyQkFBUyxFQUFFO0FBQWIsaUJBQTVCO0FBQUEsdUNBQ0UscUVBQUMsd0RBQUQ7QUFDRSxtQ0FBaUIsRUFBRSxLQUFLRixLQUFMLENBQVdILFNBRGhDO0FBRUUsNENBQTBCLEVBQUUsS0FBS0csS0FBTCxDQUFXRCxrQkFGekM7QUFHRSwyQkFBUyxFQUFFLEtBQUtDLEtBQUwsQ0FBV0Y7QUFIeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF4Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQWdHRDs7OztFQXRKaUJPLDZDQUFLLENBQUNDLFM7O0FBeUpYMUIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODI5MWYyMzQ1ZDI3ZWZmZmRkMGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1cIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGFibGVcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL0NoYXJ0XCI7XHJcbmltcG9ydCB7IENhcm91c2VsLCBDYXJvdXNlbEl0ZW0gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBTdW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU3VtXCI7XHJcblxyXG5jb25zdCBla3N0ZXJuX2FwaV91cmwgPVxyXG4gIFwiaHR0cHM6Ly92aXNuaW5nc3JvbS5zdGFjYy5jb20vZGRfc2VydmVyX2xhYW5lYmVyZWduaW5nL3Jlc3QvbGFhbmViZXJlZ25pbmcvdjEvbmVkYmV0YWxpbmdzcGxhblwiO1xyXG5cclxuY29uc3QgaW50ZXJuX2FwaV91cmxfc2VyaWUgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvU2VyaWVsYWFuXCI7XHJcbmNvbnN0IGludGVybl9hcGlfdXJsX2FubnVpdGV0ID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL0FubnVpdGV0c2xhYW5cIjtcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAganNvbk9iamVjdDogbnVsbCxcclxuICAgICAgaW50ZXJuQXBpOiBudWxsLFxyXG4gICAgICBla3N0ZXJuQXBpU2VyaWU6IG51bGwsXHJcbiAgICAgIGVrc3Rlcm5BcGlBbm51aXRldDogbnVsbCxcclxuICAgICAgaW5kZXg6IDAsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlSW5kZXggPSAobmV3SW5kZXgpID0+IHRoaXMuc2V0U3RhdGUoeyBpbmRleDogbmV3SW5kZXggfSk7XHJcblxyXG4gIGhhbmRsZVN1Ym1pdCA9IChsYWFuRGV0YWxqZXIpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBqc29uT2JqZWN0OiBsYWFuRGV0YWxqZXIgfSk7XHJcbiAgICBmZXRjaChla3N0ZXJuX2FwaV91cmwsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShsYWFuRGV0YWxqZXIpLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnRlcm5BcGk6IHJlc3VsdCB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgZmV0Y2goaW50ZXJuX2FwaV91cmxfc2VyaWUsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShsYWFuRGV0YWxqZXIpLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBla3N0ZXJuQXBpU2VyaWU6IHJlc3VsdCB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgZmV0Y2goaW50ZXJuX2FwaV91cmxfYW5udWl0ZXQsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShsYWFuRGV0YWxqZXIpLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBla3N0ZXJuQXBpQW5udWl0ZXQ6IHJlc3VsdCB9KTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEZvcm0gaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiM3JlbVwiIH19PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cImJ0bi1ncm91cFwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJncm91cFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJCYXNpYyBleGFtcGxlXCJcclxuICAgICAgICAgICAgdHlwZT17eyBtYXJnaW5Ub3A6IFwiM3JlbVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoYW5nZUluZGV4KDApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTMOlbiBmcmEgZWtzdGVybiBBUElcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5jaGFuZ2VJbmRleCgxKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNlcmllbMOlbiBmcmEgaW50ZXJuIEFQSVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoYW5nZUluZGV4KDIpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQW5udWl0ZXRzbMOlbiBmcmEgaW50ZXJuIEFQSVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoYW5nZUluZGV4KDMpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU3VtXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPENhcm91c2VsIGFjdGl2ZUluZGV4PXt0aGlzLnN0YXRlLmluZGV4fSBjb250cm9scz17dHJ1ZX0+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWxJdGVtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgIDxoMT5Fa3N0ZXJudCBsw6VuPC9oMT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZSByZXNwb25zZT17dGhpcy5zdGF0ZS5pbnRlcm5BcGl9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hhcnQgcmVzcG9uc2U9e3RoaXMuc3RhdGUuaW50ZXJuQXBpfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWxJdGVtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgIDxoMT5TZXJpZWzDpW48L2gxPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlIHJlc3BvbnNlPXt0aGlzLnN0YXRlLmVrc3Rlcm5BcGlTZXJpZX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGFydCByZXNwb25zZT17dGhpcy5zdGF0ZS5la3N0ZXJuQXBpU2VyaWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Nhcm91c2VsSXRlbT5cclxuICAgICAgICAgIDxDYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgPGgxPkFubnVpdGV0c2zDpW48L2gxPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlIHJlc3BvbnNlPXt0aGlzLnN0YXRlLmVrc3Rlcm5BcGlBbm51aXRldH0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGFydCByZXNwb25zZT17dGhpcy5zdGF0ZS5la3N0ZXJuQXBpQW5udWl0ZXR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Nhcm91c2VsSXRlbT5cclxuICAgICAgICAgIDxDYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgPFN1bVxyXG4gICAgICAgICAgICAgICAgICBpbnRlcm5BcGlSZXNwb25zZT17dGhpcy5zdGF0ZS5pbnRlcm5BcGl9XHJcbiAgICAgICAgICAgICAgICAgIEVrc3Rlcm5BcGlBbm51aXRldFJlc3BvbnNlPXt0aGlzLnN0YXRlLmVrc3Rlcm5BcGlBbm51aXRldH1cclxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2UzPXt0aGlzLnN0YXRlLmVrc3Rlcm5BcGlTZXJpZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=