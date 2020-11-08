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
      var _this$props = this.props,
          internApiResponse = _this$props.internApiResponse,
          eksternApiSerieResponse = _this$props.eksternApiSerieResponse,
          response3 = _this$props.response3;
      var sumEksterntLån = 0;
      var sumInterntSerieLån = 0;
      var sumInterntAnnuitetsLån = 0;

      if (response != null) {
        response.nedbetalingsplan.innbetalinger.map(function (row) {
          sumEksterntLån += row.total;
        });
      }

      if (response2 != null) {
        response2.nedbetalingsplan.innbetalinger.map(function (row) {
          sumInterntSerieLån += row.total;
        });
      }

      if (response3 != null) {
        response3.nedbetalingsplan.innbetalinger.map(function (row) {
          sumInterntAnnuitetsLån += row.total;
        });
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
          children: "Total kostnader"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "row",
          style: {
            marginTop: "2rem"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "col",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
              children: "Eksternt l\xE5n:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "col",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
              children: "Internt seriel\xE5n:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "col",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
              children: "Internt annuitetsl\xE5n:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "col",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
              children: [Math.round(sumEksterntLån), " NOK"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "col",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
              children: [Math.round(sumInterntSerieLån), " NOK"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "col",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
              children: [Math.round(sumInterntAnnuitetsLån), " NOK"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdW0uanMiXSwibmFtZXMiOlsiU3VtIiwicHJvcHMiLCJpbnRlcm5BcGlSZXNwb25zZSIsImVrc3Rlcm5BcGlTZXJpZVJlc3BvbnNlIiwicmVzcG9uc2UzIiwic3VtRWtzdGVybnRMw6VuIiwic3VtSW50ZXJudFNlcmllTMOlbiIsInN1bUludGVybnRBbm51aXRldHNMw6VuIiwicmVzcG9uc2UiLCJuZWRiZXRhbGluZ3NwbGFuIiwiaW5uYmV0YWxpbmdlciIsIm1hcCIsInJvdyIsInRvdGFsIiwicmVzcG9uc2UyIiwibWFyZ2luVG9wIiwiTWF0aCIsInJvdW5kIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLEc7Ozs7Ozs7Ozs7Ozs7NkJBQ0s7QUFBQSx3QkFDMkQsS0FBS0MsS0FEaEU7QUFBQSxVQUNDQyxpQkFERCxlQUNDQSxpQkFERDtBQUFBLFVBQ29CQyx1QkFEcEIsZUFDb0JBLHVCQURwQjtBQUFBLFVBQzZDQyxTQUQ3QyxlQUM2Q0EsU0FEN0M7QUFFUCxVQUFJQyxjQUFjLEdBQUcsQ0FBckI7QUFDQSxVQUFJQyxrQkFBa0IsR0FBRyxDQUF6QjtBQUNBLFVBQUlDLHNCQUFzQixHQUFHLENBQTdCOztBQUNBLFVBQUlDLFFBQVEsSUFBSSxJQUFoQixFQUFzQjtBQUNwQkEsZ0JBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEJDLGFBQTFCLENBQXdDQyxHQUF4QyxDQUE0QyxVQUFDQyxHQUFELEVBQVM7QUFDbkRQLHdCQUFjLElBQUlPLEdBQUcsQ0FBQ0MsS0FBdEI7QUFDRCxTQUZEO0FBR0Q7O0FBQ0QsVUFBSUMsU0FBUyxJQUFJLElBQWpCLEVBQXVCO0FBQ3JCQSxpQkFBUyxDQUFDTCxnQkFBVixDQUEyQkMsYUFBM0IsQ0FBeUNDLEdBQXpDLENBQTZDLFVBQUNDLEdBQUQsRUFBUztBQUNwRE4sNEJBQWtCLElBQUlNLEdBQUcsQ0FBQ0MsS0FBMUI7QUFDRCxTQUZEO0FBR0Q7O0FBQ0QsVUFBSVQsU0FBUyxJQUFJLElBQWpCLEVBQXVCO0FBQ3JCQSxpQkFBUyxDQUFDSyxnQkFBVixDQUEyQkMsYUFBM0IsQ0FBeUNDLEdBQXpDLENBQTZDLFVBQUNDLEdBQUQsRUFBUztBQUNwREwsZ0NBQXNCLElBQUlLLEdBQUcsQ0FBQ0MsS0FBOUI7QUFDRCxTQUZEO0FBR0Q7O0FBQ0QsMEJBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUVFO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQXFCLGVBQUssRUFBRTtBQUFDRSxxQkFBUyxFQUFFO0FBQVosV0FBNUI7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBLG1DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU1FO0FBQUsscUJBQVMsRUFBQyxLQUFmO0FBQUEsbUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GLGVBV0U7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxtQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBbUJFO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxtQ0FDRTtBQUFBLHlCQUFLQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1osY0FBWCxDQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRTtBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBLG1DQUNFO0FBQUEseUJBQUtXLElBQUksQ0FBQ0MsS0FBTCxDQUFXWCxrQkFBWCxDQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsZUFPRTtBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBLG1DQUNFO0FBQUEseUJBQUtVLElBQUksQ0FBQ0MsS0FBTCxDQUFXVixzQkFBWCxDQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQWlDRDs7OztFQXREZVcsNENBQUssQ0FBQ0MsUzs7QUF5RFRuQixrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZDIxZDk0YWVhZDZiZjhjYjExNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgU3VtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGludGVybkFwaVJlc3BvbnNlLCBla3N0ZXJuQXBpU2VyaWVSZXNwb25zZSwgcmVzcG9uc2UzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgdmFyIHN1bUVrc3Rlcm50TMOlbiA9IDA7XHJcbiAgICB2YXIgc3VtSW50ZXJudFNlcmllTMOlbiA9IDA7XHJcbiAgICB2YXIgc3VtSW50ZXJudEFubnVpdGV0c0zDpW4gPSAwO1xyXG4gICAgaWYgKHJlc3BvbnNlICE9IG51bGwpIHtcclxuICAgICAgcmVzcG9uc2UubmVkYmV0YWxpbmdzcGxhbi5pbm5iZXRhbGluZ2VyLm1hcCgocm93KSA9PiB7XHJcbiAgICAgICAgc3VtRWtzdGVybnRMw6VuICs9IHJvdy50b3RhbDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAocmVzcG9uc2UyICE9IG51bGwpIHtcclxuICAgICAgcmVzcG9uc2UyLm5lZGJldGFsaW5nc3BsYW4uaW5uYmV0YWxpbmdlci5tYXAoKHJvdykgPT4ge1xyXG4gICAgICAgIHN1bUludGVybnRTZXJpZUzDpW4gKz0gcm93LnRvdGFsO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChyZXNwb25zZTMgIT0gbnVsbCkge1xyXG4gICAgICByZXNwb25zZTMubmVkYmV0YWxpbmdzcGxhbi5pbm5iZXRhbGluZ2VyLm1hcCgocm93KSA9PiB7XHJcbiAgICAgICAgc3VtSW50ZXJudEFubnVpdGV0c0zDpW4gKz0gcm93LnRvdGFsO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxoMT5Ub3RhbCBrb3N0bmFkZXI8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMnJlbVwifX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgRWtzdGVybnQgbMOlbjpcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgIEludGVybnQgc2VyaWVsw6VuOlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgSW50ZXJudCBhbm51aXRldHNsw6VuOlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxoMT57TWF0aC5yb3VuZChzdW1Fa3N0ZXJudEzDpW4pfSBOT0s8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICA8aDE+e01hdGgucm91bmQoc3VtSW50ZXJudFNlcmllTMOlbil9IE5PSzwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxoMT57TWF0aC5yb3VuZChzdW1JbnRlcm50QW5udWl0ZXRzTMOlbil9IE5PSzwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3VtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9