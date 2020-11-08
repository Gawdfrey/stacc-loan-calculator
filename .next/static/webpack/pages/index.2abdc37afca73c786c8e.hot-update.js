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
var intern_api_url_serie = window.location.host;
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
                  eksternApiAnnuitetResponse: this.state.eksternApiAnnuitet,
                  eksternApiSerieResponse: this.state.eksternApiSerie
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZWtzdGVybl9hcGlfdXJsIiwiaW50ZXJuX2FwaV91cmxfc2VyaWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3QiLCJpbnRlcm5fYXBpX3VybF9hbm51aXRldCIsIkluZGV4IiwicHJvcHMiLCJuZXdJbmRleCIsInNldFN0YXRlIiwiaW5kZXgiLCJsYWFuRGV0YWxqZXIiLCJqc29uT2JqZWN0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlc3VsdCIsImludGVybkFwaSIsImVrc3Rlcm5BcGlTZXJpZSIsImVrc3Rlcm5BcGlBbm51aXRldCIsInN0YXRlIiwiaGFuZGxlU3VibWl0IiwibWFyZ2luVG9wIiwidGV4dEFsaWduIiwiY2hhbmdlSW5kZXgiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQ25CLGdHQURGO0FBR0EsSUFBTUMsb0JBQW9CLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBN0M7QUFDQSxJQUFNQyx1QkFBdUIsR0FBRyx5Q0FBaEM7O0lBRU1DLEs7Ozs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLHNOQVdMLFVBQUNDLFFBQUQ7QUFBQSxhQUFjLE1BQUtDLFFBQUwsQ0FBYztBQUFFQyxhQUFLLEVBQUVGO0FBQVQsT0FBZCxDQUFkO0FBQUEsS0FYSzs7QUFBQSx1TkFhSixVQUFDRyxZQUFELEVBQWtCO0FBQy9CLFlBQUtGLFFBQUwsQ0FBYztBQUFFRyxrQkFBVSxFQUFFRDtBQUFkLE9BQWQ7O0FBQ0FFLFdBQUss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ZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1cIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGFibGVcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL0NoYXJ0XCI7XHJcbmltcG9ydCB7IENhcm91c2VsLCBDYXJvdXNlbEl0ZW0gfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBTdW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU3VtXCI7XHJcblxyXG5jb25zdCBla3N0ZXJuX2FwaV91cmwgPVxyXG4gIFwiaHR0cHM6Ly92aXNuaW5nc3JvbS5zdGFjYy5jb20vZGRfc2VydmVyX2xhYW5lYmVyZWduaW5nL3Jlc3QvbGFhbmViZXJlZ25pbmcvdjEvbmVkYmV0YWxpbmdzcGxhblwiO1xyXG5cclxuY29uc3QgaW50ZXJuX2FwaV91cmxfc2VyaWUgPSB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuY29uc3QgaW50ZXJuX2FwaV91cmxfYW5udWl0ZXQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvQW5udWl0ZXRzbGFhblwiO1xyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBqc29uT2JqZWN0OiBudWxsLFxyXG4gICAgICBpbnRlcm5BcGk6IG51bGwsXHJcbiAgICAgIGVrc3Rlcm5BcGlTZXJpZTogbnVsbCxcclxuICAgICAgZWtzdGVybkFwaUFubnVpdGV0OiBudWxsLFxyXG4gICAgICBpbmRleDogMCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VJbmRleCA9IChuZXdJbmRleCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGluZGV4OiBuZXdJbmRleCB9KTtcclxuXHJcbiAgaGFuZGxlU3VibWl0ID0gKGxhYW5EZXRhbGplcikgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGpzb25PYmplY3Q6IGxhYW5EZXRhbGplciB9KTtcclxuICAgIGZldGNoKGVrc3Rlcm5fYXBpX3VybCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGxhYW5EZXRhbGplciksXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGludGVybkFwaTogcmVzdWx0IH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBmZXRjaChpbnRlcm5fYXBpX3VybF9zZXJpZSwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGxhYW5EZXRhbGplciksXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVrc3Rlcm5BcGlTZXJpZTogcmVzdWx0IH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBmZXRjaChpbnRlcm5fYXBpX3VybF9hbm51aXRldCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGxhYW5EZXRhbGplciksXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVrc3Rlcm5BcGlBbm51aXRldDogcmVzdWx0IH0pO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Rm9ybSBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIzcmVtXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuLWdyb3VwXCJcclxuICAgICAgICAgICAgcm9sZT1cImdyb3VwXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkJhc2ljIGV4YW1wbGVcIlxyXG4gICAgICAgICAgICB0eXBlPXt7IG1hcmdpblRvcDogXCIzcmVtXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY2hhbmdlSW5kZXgoMCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBMw6VuIGZyYSBla3N0ZXJuIEFQSVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoYW5nZUluZGV4KDEpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2VyaWVsw6VuIGZyYSBpbnRlcm4gQVBJXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY2hhbmdlSW5kZXgoMil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBbm51aXRldHNsw6VuIGZyYSBpbnRlcm4gQVBJXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY2hhbmdlSW5kZXgoMyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTdW1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Q2Fyb3VzZWwgYWN0aXZlSW5kZXg9e3RoaXMuc3RhdGUuaW5kZXh9IGNvbnRyb2xzPXt0cnVlfT5cclxuICAgICAgICAgIDxDYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgPGgxPkVrc3Rlcm50IGzDpW48L2gxPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlIHJlc3BvbnNlPXt0aGlzLnN0YXRlLmludGVybkFwaX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGFydCByZXNwb25zZT17dGhpcy5zdGF0ZS5pbnRlcm5BcGl9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Nhcm91c2VsSXRlbT5cclxuICAgICAgICAgIDxDYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgPGgxPlNlcmllbMOlbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgcmVzcG9uc2U9e3RoaXMuc3RhdGUuZWtzdGVybkFwaVNlcmllfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPENoYXJ0IHJlc3BvbnNlPXt0aGlzLnN0YXRlLmVrc3Rlcm5BcGlTZXJpZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxyXG4gICAgICAgICAgPENhcm91c2VsSXRlbT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICA8aDE+QW5udWl0ZXRzbMOlbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8VGFibGUgcmVzcG9uc2U9e3RoaXMuc3RhdGUuZWtzdGVybkFwaUFubnVpdGV0fSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPENoYXJ0IHJlc3BvbnNlPXt0aGlzLnN0YXRlLmVrc3Rlcm5BcGlBbm51aXRldH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxyXG4gICAgICAgICAgPENhcm91c2VsSXRlbT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiIHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICA8U3VtXHJcbiAgICAgICAgICAgICAgICAgIGludGVybkFwaVJlc3BvbnNlPXt0aGlzLnN0YXRlLmludGVybkFwaX1cclxuICAgICAgICAgICAgICAgICAgZWtzdGVybkFwaUFubnVpdGV0UmVzcG9uc2U9e3RoaXMuc3RhdGUuZWtzdGVybkFwaUFubnVpdGV0fVxyXG4gICAgICAgICAgICAgICAgICBla3N0ZXJuQXBpU2VyaWVSZXNwb25zZT17dGhpcy5zdGF0ZS5la3N0ZXJuQXBpU2VyaWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9