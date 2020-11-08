module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/Annuitetslaan.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/Annuitetslaan.js":
/*!************************************!*\
  !*** ./pages/api/Annuitetslaan.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const {
    laanebelop,
    nominellRente,
    terminGebyr,
    utlopsDato,
    saldoDato,
    datoForsteInnbetaling,
    ukjentVerdi
  } = req.body;
  var h = {
    "nedbetalingsplan": {
      "innbetalinger": [{
        "restgjeld": laanebelop,
        "dato": saldoDato,
        "innbetaling": 0.0,
        "gebyr": 0.0,
        "renter": 0.0,
        "total": 0.0
      }]
    }
  };
  const datoDiff = monthsDiff(datoForsteInnbetaling, utlopsDato);
  var restgjeld = laanebelop;
  var rente = laanebelop * (nominellRente / 100 / datoDiff);
  var dato = new Date(datoForsteInnbetaling);
  var td = nominellRente / 100 / datoDiff / (1 - Math.pow(1 + nominellRente / 100 / datoDiff, -datoDiff)) * laanebelop;

  for (var i = 0; i <= datoDiff; i++) {
    rente = restgjeld * (nominellRente / 100 / datoDiff);
    var avdrag = td - rente;
    restgjeld -= avdrag;
    h.nedbetalingsplan.innbetalinger.push({
      "restgjeld": Math.round(restgjeld),
      "dato": dato.toISOString().substring(0, 10),
      "innbetaling": Math.round(avdrag),
      "gebyr": terminGebyr,
      "renter": Math.round(rente),
      "total": Math.round(td + terminGebyr)
    });
    dato.setMonth(dato.getMonth() + 1, 1);
  }

  h.nedbetalingsplan.innbetalinger.pop();
  res.status(200).json(h);
});

function yearsDiff(d1, d2) {
  let date1 = new Date(d1);
  let date2 = new Date(d2);
  let yearsDiff = date2.getFullYear() - date1.getFullYear();
  return yearsDiff;
}

function monthsDiff(d1, d2) {
  let date1 = new Date(d1);
  let date2 = new Date(d2);
  let years = yearsDiff(d1, d2);
  let months = years * 12 + (date2.getMonth() - date1.getMonth());
  return months;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL0FubnVpdGV0c2xhYW4uanMiXSwibmFtZXMiOlsicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwiZW5kIiwibGFhbmViZWxvcCIsIm5vbWluZWxsUmVudGUiLCJ0ZXJtaW5HZWJ5ciIsInV0bG9wc0RhdG8iLCJzYWxkb0RhdG8iLCJkYXRvRm9yc3RlSW5uYmV0YWxpbmciLCJ1a2plbnRWZXJkaSIsImJvZHkiLCJoIiwiZGF0b0RpZmYiLCJtb250aHNEaWZmIiwicmVzdGdqZWxkIiwicmVudGUiLCJkYXRvIiwiRGF0ZSIsInRkIiwiTWF0aCIsInBvdyIsImkiLCJhdmRyYWciLCJuZWRiZXRhbGluZ3NwbGFuIiwiaW5uYmV0YWxpbmdlciIsInB1c2giLCJyb3VuZCIsInRvSVNPU3RyaW5nIiwic3Vic3RyaW5nIiwic2V0TW9udGgiLCJnZXRNb250aCIsInBvcCIsImpzb24iLCJ5ZWFyc0RpZmYiLCJkMSIsImQyIiwiZGF0ZTEiLCJkYXRlMiIsImdldEZ1bGxZZWFyIiwieWVhcnMiLCJtb250aHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFD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QUFLLEdBQUcsSUFBSXBCLElBQUosQ0FBU2tCLEVBQVQsQ0FBWjtBQUNBLE1BQUlGLFNBQVMsR0FBR0ksS0FBSyxDQUFDQyxXQUFOLEtBQXNCRixLQUFLLENBQUNFLFdBQU4sRUFBdEM7QUFDQSxTQUFPTCxTQUFQO0FBQ0Q7O0FBRUQsU0FBU3BCLFVBQVQsQ0FBb0JxQixFQUFwQixFQUF3QkMsRUFBeEIsRUFBNEI7QUFDMUIsTUFBSUMsS0FBSyxHQUFHLElBQUluQixJQUFKLENBQVNpQixFQUFULENBQVo7QUFDQSxNQUFJRyxLQUFLLEdBQUcsSUFBSXBCLElBQUosQ0FBU2tCLEVBQVQsQ0FBWjtBQUNBLE1BQUlJLEtBQUssR0FBR04sU0FBUyxDQUFDQyxFQUFELEVBQUtDLEVBQUwsQ0FBckI7QUFDQSxNQUFJSyxNQUFNLEdBQUdELEtBQUssR0FBRyxFQUFSLElBQWNGLEtBQUssQ0FBQ1AsUUFBTixLQUFtQk0sS0FBSyxDQUFDTixRQUFOLEVBQWpDLENBQWI7QUFDQSxTQUFPVSxNQUFQO0FBQ0QsQyIsImZpbGUiOiJwYWdlcy9hcGkvQW5udWl0ZXRzbGFhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL0FubnVpdGV0c2xhYW4uanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICAgIGlmIChyZXEubWV0aG9kICE9PSBcIlBPU1RcIikge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qge1xyXG4gICAgICBsYWFuZWJlbG9wLFxyXG4gICAgICBub21pbmVsbFJlbnRlLFxyXG4gICAgICB0ZXJtaW5HZWJ5cixcclxuICAgICAgdXRsb3BzRGF0byxcclxuICAgICAgc2FsZG9EYXRvLFxyXG4gICAgICBkYXRvRm9yc3RlSW5uYmV0YWxpbmcsXHJcbiAgICAgIHVramVudFZlcmRpLFxyXG4gICAgfSA9IHJlcS5ib2R5O1xyXG4gICAgXHJcbiAgICB2YXIgaCA9IHtcclxuICAgIFwibmVkYmV0YWxpbmdzcGxhblwiOiB7XHJcbiAgICAgIFwiaW5uYmV0YWxpbmdlclwiOiBbXHJcbiAgICAgIHtcclxuICAgICAgXHRcInJlc3RnamVsZFwiOiBsYWFuZWJlbG9wLFxyXG4gICAgICAgIFwiZGF0b1wiOiBzYWxkb0RhdG8sXHJcbiAgICAgICAgXCJpbm5iZXRhbGluZ1wiOiAwLjAsXHJcbiAgICAgICAgXCJnZWJ5clwiOiAwLjAsXHJcbiAgICAgICAgXCJyZW50ZXJcIjogMC4wLFxyXG4gICAgICAgIFwidG90YWxcIjogMC4wXHJcbiAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSxcclxuICB9XHJcbiAgY29uc3QgZGF0b0RpZmYgPSBtb250aHNEaWZmKGRhdG9Gb3JzdGVJbm5iZXRhbGluZywgdXRsb3BzRGF0bylcclxuICB2YXIgcmVzdGdqZWxkID0gbGFhbmViZWxvcFxyXG4gIHZhciByZW50ZSA9IGxhYW5lYmVsb3AgKiAobm9taW5lbGxSZW50ZSAvIDEwMCAvIGRhdG9EaWZmKVxyXG4gIHZhciBkYXRvID0gbmV3IERhdGUoZGF0b0ZvcnN0ZUlubmJldGFsaW5nKVxyXG4gIHZhciB0ZCA9ICgobm9taW5lbGxSZW50ZSAvIDEwMCAvIGRhdG9EaWZmKSAvICgxIC0gTWF0aC5wb3coMSArIChub21pbmVsbFJlbnRlIC8gMTAwIC8gZGF0b0RpZmYpLCAtZGF0b0RpZmYpKSogbGFhbmViZWxvcClcclxuICBmb3IgKHZhciBpID0gMDsgaTw9ZGF0b0RpZmY7IGkrKykge1xyXG4gIFx0cmVudGUgPSByZXN0Z2plbGQgKiAobm9taW5lbGxSZW50ZSAvIDEwMCAvIGRhdG9EaWZmKVxyXG4gICAgdmFyIGF2ZHJhZyA9IHRkIC0gcmVudGVcclxuICAgIHJlc3RnamVsZCAtPSBhdmRyYWdcclxuICAgIGgubmVkYmV0YWxpbmdzcGxhbi5pbm5iZXRhbGluZ2VyLnB1c2goXHJcbiAgICB7XHJcbiAgICAgIFwicmVzdGdqZWxkXCI6IE1hdGgucm91bmQocmVzdGdqZWxkKSxcclxuICAgICAgXCJkYXRvXCI6IGRhdG8udG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApLFxyXG4gICAgICBcImlubmJldGFsaW5nXCI6IE1hdGgucm91bmQoYXZkcmFnKSxcclxuICAgICAgXCJnZWJ5clwiOiB0ZXJtaW5HZWJ5cixcclxuICAgICAgXCJyZW50ZXJcIjogTWF0aC5yb3VuZChyZW50ZSksXHJcbiAgICAgIFwidG90YWxcIjogTWF0aC5yb3VuZCh0ZCArIHRlcm1pbkdlYnlyKSxcclxuICAgIH1cclxuICAgIClcclxuICAgIGRhdG8uc2V0TW9udGgoZGF0by5nZXRNb250aCgpICsgMSwgMSlcclxuICB9XHJcbiAgaC5uZWRiZXRhbGluZ3NwbGFuLmlubmJldGFsaW5nZXIucG9wKClcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGgpO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiB5ZWFyc0RpZmYoZDEsIGQyKSB7XHJcbiAgICBsZXQgZGF0ZTEgPSBuZXcgRGF0ZShkMSk7XHJcbiAgICBsZXQgZGF0ZTIgPSBuZXcgRGF0ZShkMik7XHJcbiAgICBsZXQgeWVhcnNEaWZmID0gZGF0ZTIuZ2V0RnVsbFllYXIoKSAtIGRhdGUxLmdldEZ1bGxZZWFyKCk7XHJcbiAgICByZXR1cm4geWVhcnNEaWZmO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBtb250aHNEaWZmKGQxLCBkMikge1xyXG4gICAgbGV0IGRhdGUxID0gbmV3IERhdGUoZDEpO1xyXG4gICAgbGV0IGRhdGUyID0gbmV3IERhdGUoZDIpO1xyXG4gICAgbGV0IHllYXJzID0geWVhcnNEaWZmKGQxLCBkMik7XHJcbiAgICBsZXQgbW9udGhzID0geWVhcnMgKiAxMiArIChkYXRlMi5nZXRNb250aCgpIC0gZGF0ZTEuZ2V0TW9udGgoKSk7XHJcbiAgICByZXR1cm4gbW9udGhzO1xyXG4gIH1cclxuICAiXSwic291cmNlUm9vdCI6IiJ9