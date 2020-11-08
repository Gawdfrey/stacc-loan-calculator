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
          eksternApiAnuitetResponse = _this$props.eksternApiAnuitetResponse;
      var sumEksterntLån = 0;
      var sumInterntSerieLån = 0;
      var sumInterntAnnuitetsLån = 0;

      if (internApiResponse != null) {
        internApiResponse.nedbetalingsplan.innbetalinger.map(function (row) {
          sumEksterntLån += row.total;
        });
      }

      if (eksternApiSerieResponse != null) {
        eksternApiSerieResponse.nedbetalingsplan.innbetalinger.map(function (row) {
          sumInterntSerieLån += row.total;
        });
      }

      if (eksternApiAnuitetResponse != null) {
        eksternApiAnuitetResponse.nedbetalingsplan.innbetalinger.map(function (row) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdW0uanMiXSwibmFtZXMiOlsiU3VtIiwicHJvcHMiLCJpbnRlcm5BcGlSZXNwb25zZSIsImVrc3Rlcm5BcGlTZXJpZVJlc3BvbnNlIiwiZWtzdGVybkFwaUFudWl0ZXRSZXNwb25zZSIsInN1bUVrc3Rlcm50TMOlbiIsInN1bUludGVybnRTZXJpZUzDpW4iLCJzdW1JbnRlcm50QW5udWl0ZXRzTMOlbiIsIm5lZGJldGFsaW5nc3BsYW4iLCJpbm5iZXRhbGluZ2VyIiwibWFwIiwicm93IiwidG90YWwiLCJtYXJnaW5Ub3AiLCJNYXRoIiwicm91bmQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsRzs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUFBLHdCQUMyRSxLQUFLQyxLQURoRjtBQUFBLFVBQ0NDLGlCQURELGVBQ0NBLGlCQUREO0FBQUEsVUFDb0JDLHVCQURwQixlQUNvQkEsdUJBRHBCO0FBQUEsVUFDNkNDLHlCQUQ3QyxlQUM2Q0EseUJBRDdDO0FBRVAsVUFBSUMsY0FBYyxHQUFHLENBQXJCO0FBQ0EsVUFBSUMsa0JBQWtCLEdBQUcsQ0FBekI7QUFDQSxVQUFJQyxzQkFBc0IsR0FBRyxDQUE3Qjs7QUFDQSxVQUFJTCxpQkFBaUIsSUFBSSxJQUF6QixFQUErQjtBQUM3QkEseUJBQWlCLENBQUNNLGdCQUFsQixDQUFtQ0MsYUFBbkMsQ0FBaURDLEdBQWpELENBQXFELFVBQUNDLEdBQUQsRUFBUztBQUM1RE4sd0JBQWMsSUFBSU0sR0FBRyxDQUFDQyxLQUF0QjtBQUNELFNBRkQ7QUFHRDs7QUFDRCxVQUFJVCx1QkFBdUIsSUFBSSxJQUEvQixFQUFxQztBQUNuQ0EsK0JBQXVCLENBQUNLLGdCQUF4QixDQUF5Q0MsYUFBekMsQ0FBdURDLEdBQXZELENBQTJELFVBQUNDLEdBQUQsRUFBUztBQUNsRUwsNEJBQWtCLElBQUlLLEdBQUcsQ0FBQ0MsS0FBMUI7QUFDRCxTQUZEO0FBR0Q7O0FBQ0QsVUFBSVIseUJBQXlCLElBQUksSUFBakMsRUFBdUM7QUFDckNBLGlDQUF5QixDQUFDSSxnQkFBMUIsQ0FBMkNDLGFBQTNDLENBQXlEQyxHQUF6RCxDQUE2RCxVQUFDQyxHQUFELEVBQVM7QUFDcEVKLGdDQUFzQixJQUFJSSxHQUFHLENBQUNDLEtBQTlCO0FBQ0QsU0FGRDtBQUdEOztBQUNELDBCQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUFFRTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFxQixlQUFLLEVBQUU7QUFBQ0MscUJBQVMsRUFBRTtBQUFaLFdBQTVCO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxtQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFNRTtBQUFLLHFCQUFTLEVBQUMsS0FBZjtBQUFBLG1DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORixlQVdFO0FBQUsscUJBQVMsRUFBQyxLQUFmO0FBQUEsbUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQW1CRTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxLQUFmO0FBQUEsbUNBQ0U7QUFBQSx5QkFBS0MsSUFBSSxDQUFDQyxLQUFMLENBQVdWLGNBQVgsQ0FBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUU7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxtQ0FDRTtBQUFBLHlCQUFLUyxJQUFJLENBQUNDLEtBQUwsQ0FBV1Qsa0JBQVgsQ0FBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLGVBT0U7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxtQ0FDRTtBQUFBLHlCQUFLUSxJQUFJLENBQUNDLEtBQUwsQ0FBV1Isc0JBQVgsQ0FBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFpQ0Q7Ozs7RUF0RGVTLDRDQUFLLENBQUNDLFM7O0FBeURUakIsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzM5ZDQwNzFlOWE5NDk5YTNlODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIFN1bSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBpbnRlcm5BcGlSZXNwb25zZSwgZWtzdGVybkFwaVNlcmllUmVzcG9uc2UsIGVrc3Rlcm5BcGlBbnVpdGV0UmVzcG9uc2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICB2YXIgc3VtRWtzdGVybnRMw6VuID0gMDtcclxuICAgIHZhciBzdW1JbnRlcm50U2VyaWVMw6VuID0gMDtcclxuICAgIHZhciBzdW1JbnRlcm50QW5udWl0ZXRzTMOlbiA9IDA7XHJcbiAgICBpZiAoaW50ZXJuQXBpUmVzcG9uc2UgIT0gbnVsbCkge1xyXG4gICAgICBpbnRlcm5BcGlSZXNwb25zZS5uZWRiZXRhbGluZ3NwbGFuLmlubmJldGFsaW5nZXIubWFwKChyb3cpID0+IHtcclxuICAgICAgICBzdW1Fa3N0ZXJudEzDpW4gKz0gcm93LnRvdGFsO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChla3N0ZXJuQXBpU2VyaWVSZXNwb25zZSAhPSBudWxsKSB7XHJcbiAgICAgIGVrc3Rlcm5BcGlTZXJpZVJlc3BvbnNlLm5lZGJldGFsaW5nc3BsYW4uaW5uYmV0YWxpbmdlci5tYXAoKHJvdykgPT4ge1xyXG4gICAgICAgIHN1bUludGVybnRTZXJpZUzDpW4gKz0gcm93LnRvdGFsO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChla3N0ZXJuQXBpQW51aXRldFJlc3BvbnNlICE9IG51bGwpIHtcclxuICAgICAgZWtzdGVybkFwaUFudWl0ZXRSZXNwb25zZS5uZWRiZXRhbGluZ3NwbGFuLmlubmJldGFsaW5nZXIubWFwKChyb3cpID0+IHtcclxuICAgICAgICBzdW1JbnRlcm50QW5udWl0ZXRzTMOlbiArPSByb3cudG90YWw7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGgxPlRvdGFsIGtvc3RuYWRlcjwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17e21hcmdpblRvcDogXCIycmVtXCJ9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICBFa3N0ZXJudCBsw6VuOlxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgSW50ZXJudCBzZXJpZWzDpW46XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICBJbnRlcm50IGFubnVpdGV0c2zDpW46XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgPGgxPntNYXRoLnJvdW5kKHN1bUVrc3Rlcm50TMOlbil9IE5PSzwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxoMT57TWF0aC5yb3VuZChzdW1JbnRlcm50U2VyaWVMw6VuKX0gTk9LPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgPGgxPntNYXRoLnJvdW5kKHN1bUludGVybnRBbm51aXRldHNMw6VuKX0gTk9LPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=