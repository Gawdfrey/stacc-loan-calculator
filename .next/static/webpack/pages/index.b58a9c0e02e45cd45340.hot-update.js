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
          sum += row.total;
        });
      }

      if (response != null) {
        response.nedbetalingsplan.innbetalinger.map(function (row) {
          sum += row.total;
        });
      }

      if (response != null) {
        response.nedbetalingsplan.innbetalinger.map(function (row) {
          sum += row.total;
        });
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
        children: ["Total kostnad for eksternt l\xE5n: ", sum]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 12
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdW0uanMiXSwibmFtZXMiOlsiU3VtIiwicHJvcHMiLCJyZXNwb25zZSIsInJlc3BvbnNlMiIsInJlc3BvbnNlMyIsInN1bUVrc3Rlcm50TMOlbiIsInN1bUludGVybnRTZXJpZUzDpW4iLCJzdW1JbnRlcm50QW5udWl0ZXRzTMOlbiIsIm5lZGJldGFsaW5nc3BsYW4iLCJpbm5iZXRhbGluZ2VyIiwibWFwIiwicm93Iiwic3VtIiwidG90YWwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsRzs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUFBLHdCQUNvQyxLQUFLQyxLQUR6QztBQUFBLFVBQ0NDLFFBREQsZUFDQ0EsUUFERDtBQUFBLFVBQ1dDLFNBRFgsZUFDV0EsU0FEWDtBQUFBLFVBQ3NCQyxTQUR0QixlQUNzQkEsU0FEdEI7QUFFUCxVQUFJQyxjQUFjLEdBQUcsQ0FBckI7QUFDQSxVQUFJQyxrQkFBa0IsR0FBRyxDQUF6QjtBQUNBLFVBQUlDLHNCQUFzQixHQUFHLENBQTdCOztBQUNBLFVBQUlMLFFBQVEsSUFBSSxJQUFoQixFQUFzQjtBQUNwQkEsZ0JBQVEsQ0FBQ00sZ0JBQVQsQ0FBMEJDLGFBQTFCLENBQXdDQyxHQUF4QyxDQUE0QyxVQUFDQyxHQUFELEVBQVM7QUFDbkRDLGFBQUcsSUFBSUQsR0FBRyxDQUFDRSxLQUFYO0FBQ0QsU0FGRDtBQUdEOztBQUNELFVBQUlYLFFBQVEsSUFBSSxJQUFoQixFQUFzQjtBQUNwQkEsZ0JBQVEsQ0FBQ00sZ0JBQVQsQ0FBMEJDLGFBQTFCLENBQXdDQyxHQUF4QyxDQUE0QyxVQUFDQyxHQUFELEVBQVM7QUFDbkRDLGFBQUcsSUFBSUQsR0FBRyxDQUFDRSxLQUFYO0FBQ0QsU0FGRDtBQUdEOztBQUNELFVBQUlYLFFBQVEsSUFBSSxJQUFoQixFQUFzQjtBQUNwQkEsZ0JBQVEsQ0FBQ00sZ0JBQVQsQ0FBMEJDLGFBQTFCLENBQXdDQyxHQUF4QyxDQUE0QyxVQUFDQyxHQUFELEVBQVM7QUFDbkRDLGFBQUcsSUFBSUQsR0FBRyxDQUFDRSxLQUFYO0FBQ0QsU0FGRDtBQUdEOztBQUNELDBCQUFPO0FBQUEsMERBQXFDRCxHQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQUNEOzs7O0VBdEJlRSw0Q0FBSyxDQUFDQyxTOztBQXlCVGYsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjU4YTljMGUwMmU0NWNkNDUzNDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNsYXNzIFN1bSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyByZXNwb25zZSwgcmVzcG9uc2UyLCByZXNwb25zZTMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICB2YXIgc3VtRWtzdGVybnRMw6VuID0gMDtcclxuICAgIHZhciBzdW1JbnRlcm50U2VyaWVMw6VuID0gMDtcclxuICAgIHZhciBzdW1JbnRlcm50QW5udWl0ZXRzTMOlbiA9IDA7XHJcbiAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCkge1xyXG4gICAgICByZXNwb25zZS5uZWRiZXRhbGluZ3NwbGFuLmlubmJldGFsaW5nZXIubWFwKChyb3cpID0+IHtcclxuICAgICAgICBzdW0gKz0gcm93LnRvdGFsO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChyZXNwb25zZSAhPSBudWxsKSB7XHJcbiAgICAgIHJlc3BvbnNlLm5lZGJldGFsaW5nc3BsYW4uaW5uYmV0YWxpbmdlci5tYXAoKHJvdykgPT4ge1xyXG4gICAgICAgIHN1bSArPSByb3cudG90YWw7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlc3BvbnNlICE9IG51bGwpIHtcclxuICAgICAgcmVzcG9uc2UubmVkYmV0YWxpbmdzcGxhbi5pbm5iZXRhbGluZ2VyLm1hcCgocm93KSA9PiB7XHJcbiAgICAgICAgc3VtICs9IHJvdy50b3RhbDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPGgxPlRvdGFsIGtvc3RuYWQgZm9yIGVrc3Rlcm50IGzDpW46IHtzdW19PC9oMT47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdW07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=