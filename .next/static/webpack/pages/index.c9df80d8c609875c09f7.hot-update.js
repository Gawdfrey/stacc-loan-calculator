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
          response = _this$props.response,
          response2 = _this$props.response2,
          response3 = _this$props.response3;
      var sumEksterntLån = 0;
      var sumInterntSerieLån = 0;
      var sumInterntAnnuitetsLån = 0;

      if (response != null) {
        response.nedbetalingsplan.innbetalinger.map(function (row) {
          sumEksterntLån += row.total;
        });
      }

      if (response != null) {
        response.nedbetalingsplan.innbetalinger.map(function (row) {
          sumInterntSerieLån += row.total;
        });
      }

      if (response != null) {
        response.nedbetalingsplan.innbetalinger.map(function (row) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdW0uanMiXSwibmFtZXMiOlsiU3VtIiwicHJvcHMiLCJyZXNwb25zZSIsInJlc3BvbnNlMiIsInJlc3BvbnNlMyIsInN1bUVrc3Rlcm50TMOlbiIsInN1bUludGVybnRTZXJpZUzDpW4iLCJzdW1JbnRlcm50QW5udWl0ZXRzTMOlbiIsIm5lZGJldGFsaW5nc3BsYW4iLCJpbm5iZXRhbGluZ2VyIiwibWFwIiwicm93IiwidG90YWwiLCJtYXJnaW5Ub3AiLCJNYXRoIiwicm91bmQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsRzs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUFBLHdCQUNvQyxLQUFLQyxLQUR6QztBQUFBLFVBQ0NDLFFBREQsZUFDQ0EsUUFERDtBQUFBLFVBQ1dDLFNBRFgsZUFDV0EsU0FEWDtBQUFBLFVBQ3NCQyxTQUR0QixlQUNzQkEsU0FEdEI7QUFFUCxVQUFJQyxjQUFjLEdBQUcsQ0FBckI7QUFDQSxVQUFJQyxrQkFBa0IsR0FBRyxDQUF6QjtBQUNBLFVBQUlDLHNCQUFzQixHQUFHLENBQTdCOztBQUNBLFVBQUlMLFFBQVEsSUFBSSxJQUFoQixFQUFzQjtBQUNwQkEsZ0JBQVEsQ0FBQ00sZ0JBQVQsQ0FBMEJDLGFBQTFCLENBQXdDQyxHQUF4QyxDQUE0QyxVQUFDQyxHQUFELEVBQVM7QUFDbkROLHdCQUFjLElBQUlNLEdBQUcsQ0FBQ0MsS0FBdEI7QUFDRCxTQUZEO0FBR0Q7O0FBQ0QsVUFBSVYsUUFBUSxJQUFJLElBQWhCLEVBQXNCO0FBQ3BCQSxnQkFBUSxDQUFDTSxnQkFBVCxDQUEwQkMsYUFBMUIsQ0FBd0NDLEdBQXhDLENBQTRDLFVBQUNDLEdBQUQsRUFBUztBQUNuREwsNEJBQWtCLElBQUlLLEdBQUcsQ0FBQ0MsS0FBMUI7QUFDRCxTQUZEO0FBR0Q7O0FBQ0QsVUFBSVYsUUFBUSxJQUFJLElBQWhCLEVBQXNCO0FBQ3BCQSxnQkFBUSxDQUFDTSxnQkFBVCxDQUEwQkMsYUFBMUIsQ0FBd0NDLEdBQXhDLENBQTRDLFVBQUNDLEdBQUQsRUFBUztBQUNuREosZ0NBQXNCLElBQUlJLEdBQUcsQ0FBQ0MsS0FBOUI7QUFDRCxTQUZEO0FBR0Q7O0FBQ0QsMEJBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUVFO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQXFCLGVBQUssRUFBRTtBQUFDQyxxQkFBUyxFQUFFO0FBQVosV0FBNUI7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBLG1DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU1FO0FBQUsscUJBQVMsRUFBQyxLQUFmO0FBQUEsbUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GLGVBV0U7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxtQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBbUJFO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxtQ0FDRTtBQUFBLHlCQUFLQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1YsY0FBWCxDQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFJRTtBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBLG1DQUNFO0FBQUEseUJBQUtTLElBQUksQ0FBQ0MsS0FBTCxDQUFXVCxrQkFBWCxDQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsZUFPRTtBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBLG1DQUNFO0FBQUEseUJBQUtRLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixzQkFBWCxDQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQWlDRDs7OztFQXREZVMsNENBQUssQ0FBQ0MsUzs7QUF5RFRqQixrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jOWRmODBkOGM2MDk4NzVjMDlmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY2xhc3MgU3VtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHJlc3BvbnNlLCByZXNwb25zZTIsIHJlc3BvbnNlMyB9ID0gdGhpcy5wcm9wcztcclxuICAgIHZhciBzdW1Fa3N0ZXJudEzDpW4gPSAwO1xyXG4gICAgdmFyIHN1bUludGVybnRTZXJpZUzDpW4gPSAwO1xyXG4gICAgdmFyIHN1bUludGVybnRBbm51aXRldHNMw6VuID0gMDtcclxuICAgIGlmIChyZXNwb25zZSAhPSBudWxsKSB7XHJcbiAgICAgIHJlc3BvbnNlLm5lZGJldGFsaW5nc3BsYW4uaW5uYmV0YWxpbmdlci5tYXAoKHJvdykgPT4ge1xyXG4gICAgICAgIHN1bUVrc3Rlcm50TMOlbiArPSByb3cudG90YWw7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlc3BvbnNlICE9IG51bGwpIHtcclxuICAgICAgcmVzcG9uc2UubmVkYmV0YWxpbmdzcGxhbi5pbm5iZXRhbGluZ2VyLm1hcCgocm93KSA9PiB7XHJcbiAgICAgICAgc3VtSW50ZXJudFNlcmllTMOlbiArPSByb3cudG90YWw7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlc3BvbnNlICE9IG51bGwpIHtcclxuICAgICAgcmVzcG9uc2UubmVkYmV0YWxpbmdzcGxhbi5pbm5iZXRhbGluZ2VyLm1hcCgocm93KSA9PiB7XHJcbiAgICAgICAgc3VtSW50ZXJudEFubnVpdGV0c0zDpW4gKz0gcm93LnRvdGFsO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxoMT5Ub3RhbCBrb3N0bmFkZXI8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiMnJlbVwifX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgRWtzdGVybnQgbMOlbjpcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgIEludGVybnQgc2VyaWVsw6VuOlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgSW50ZXJudCBhbm51aXRldHNsw6VuOlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxoMT57TWF0aC5yb3VuZChzdW1Fa3N0ZXJudEzDpW4pfSBOT0s8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICA8aDE+e01hdGgucm91bmQoc3VtSW50ZXJudFNlcmllTMOlbil9IE5PSzwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxoMT57TWF0aC5yb3VuZChzdW1JbnRlcm50QW5udWl0ZXRzTMOlbil9IE5PSzwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3VtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9