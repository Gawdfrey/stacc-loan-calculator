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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/Serielaan.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/Serielaan.js":
/*!********************************!*\
  !*** ./pages/api/Serielaan.js ***!
  \********************************/
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
  var avdrag = laanebelop / datoDiff;

  for (var i = 0; i <= datoDiff; i++) {
    restgjeld -= avdrag;
    rente = restgjeld * (nominellRente / 100 / datoDiff);
    h.nedbetalingsplan.innbetalinger.push({
      "restgjeld": Math.round(restgjeld),
      "dato": dato.toISOString().substring(0, 10),
      "innbetaling": Math.round(avdrag),
      "gebyr": terminGebyr,
      "renter": Math.round(rente),
      "total": Math.round(avdrag + rente + terminGebyr)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL1NlcmllbGFhbi5qcyJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJlbmQiLCJsYWFuZWJlbG9wIiwibm9taW5lbGxSZW50ZSIsInRlcm1pbkdlYnlyIiwidXRsb3BzRGF0byIsInNhbGRvRGF0byIsImRhdG9Gb3JzdGVJbm5iZXRhbGluZyIsInVramVudFZlcmRpIiwiYm9keSIsImgiLCJkYXRvRGlmZiIsIm1vbnRoc0RpZmYiLCJyZXN0Z2plbGQiLCJyZW50ZSIsImRhdG8iLCJEYXRlIiwiYXZkcmFnIiwiaSIsIm5lZGJldGFsaW5nc3BsYW4iLCJpbm5iZXRhbGluZ2VyIiwicHVzaCIsIk1hdGgiLCJyb3VuZCIsInRvSVNPU3RyaW5nIiwic3Vic3RyaW5nIiwic2V0TW9udGgiLCJnZXRNb250aCIsInBvcCIsImpzb24iLCJ5ZWFyc0RpZmYiLCJkMSIsImQyIiwiZGF0ZTEiLCJkYXRlMiIsImdldEZ1bGxZZWFyIiwieWVhcnMiLCJtb250aHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFt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QyxFQUF4QixFQUE0QjtBQUMxQixNQUFJQyxLQUFLLEdBQUcsSUFBSWpCLElBQUosQ0FBU2UsRUFBVCxDQUFaO0FBQ0EsTUFBSUcsS0FBSyxHQUFHLElBQUlsQixJQUFKLENBQVNnQixFQUFULENBQVo7QUFDQSxNQUFJSSxLQUFLLEdBQUdOLFNBQVMsQ0FBQ0MsRUFBRCxFQUFLQyxFQUFMLENBQXJCO0FBQ0EsTUFBSUssTUFBTSxHQUFHRCxLQUFLLEdBQUcsRUFBUixJQUFjRixLQUFLLENBQUNQLFFBQU4sS0FBbUJNLEtBQUssQ0FBQ04sUUFBTixFQUFqQyxDQUFiO0FBQ0EsU0FBT1UsTUFBUDtBQUNELEMiLCJmaWxlIjoicGFnZXMvYXBpL1NlcmllbGFhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL1NlcmllbGFhbi5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kICE9PSBcIlBPU1RcIikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcclxuICB9XHJcbiAgY29uc3Qge1xyXG4gICAgbGFhbmViZWxvcCxcclxuICAgIG5vbWluZWxsUmVudGUsXHJcbiAgICB0ZXJtaW5HZWJ5cixcclxuICAgIHV0bG9wc0RhdG8sXHJcbiAgICBzYWxkb0RhdG8sXHJcbiAgICBkYXRvRm9yc3RlSW5uYmV0YWxpbmcsXHJcbiAgICB1a2plbnRWZXJkaSxcclxuICB9ID0gcmVxLmJvZHk7XHJcblxyXG4gIHZhciBoID0ge1xyXG4gICAgXCJuZWRiZXRhbGluZ3NwbGFuXCI6IHtcclxuICAgICAgXCJpbm5iZXRhbGluZ2VyXCI6IFtcclxuICAgICAge1xyXG4gICAgICBcdFwicmVzdGdqZWxkXCI6IGxhYW5lYmVsb3AsXHJcbiAgICAgICAgXCJkYXRvXCI6IHNhbGRvRGF0byxcclxuICAgICAgICBcImlubmJldGFsaW5nXCI6IDAuMCxcclxuICAgICAgICBcImdlYnlyXCI6IDAuMCxcclxuICAgICAgICBcInJlbnRlclwiOiAwLjAsXHJcbiAgICAgICAgXCJ0b3RhbFwiOiAwLjBcclxuICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gIH1cclxuICBjb25zdCBkYXRvRGlmZiA9IG1vbnRoc0RpZmYoZGF0b0ZvcnN0ZUlubmJldGFsaW5nLCB1dGxvcHNEYXRvKVxyXG4gIHZhciByZXN0Z2plbGQgPSBsYWFuZWJlbG9wXHJcbiAgdmFyIHJlbnRlID0gbGFhbmViZWxvcCAqIChub21pbmVsbFJlbnRlIC8gMTAwIC8gZGF0b0RpZmYpXHJcbiAgdmFyIGRhdG8gPSBuZXcgRGF0ZShkYXRvRm9yc3RlSW5uYmV0YWxpbmcpXHJcbiAgdmFyIGF2ZHJhZyA9IGxhYW5lYmVsb3AgLyBkYXRvRGlmZjtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8PSBkYXRvRGlmZjsgaSsrKSB7XHJcbiAgICByZXN0Z2plbGQgLT0gYXZkcmFnO1xyXG4gICAgcmVudGUgPSByZXN0Z2plbGQgKiAobm9taW5lbGxSZW50ZSAvIDEwMCAvIGRhdG9EaWZmKTtcclxuICAgIGgubmVkYmV0YWxpbmdzcGxhbi5pbm5iZXRhbGluZ2VyLnB1c2goXHJcbiAgICAgIHtcclxuICAgICAgXCJyZXN0Z2plbGRcIjogTWF0aC5yb3VuZChyZXN0Z2plbGQpLFxyXG4gICAgICBcImRhdG9cIjogZGF0by50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMCksXHJcbiAgICAgIFwiaW5uYmV0YWxpbmdcIjogTWF0aC5yb3VuZChhdmRyYWcpLFxyXG4gICAgICBcImdlYnlyXCI6IHRlcm1pbkdlYnlyLFxyXG4gICAgICBcInJlbnRlclwiOiBNYXRoLnJvdW5kKHJlbnRlKSxcclxuICAgICAgXCJ0b3RhbFwiOiBNYXRoLnJvdW5kKGF2ZHJhZyArIHJlbnRlICsgdGVybWluR2VieXIpLFxyXG4gICAgfVxyXG4gICAgKTtcclxuICAgIGRhdG8uc2V0TW9udGgoZGF0by5nZXRNb250aCgpICsgMSwgMSk7XHJcbiAgfVxyXG4gIGgubmVkYmV0YWxpbmdzcGxhbi5pbm5iZXRhbGluZ2VyLnBvcCgpO1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB5ZWFyc0RpZmYoZDEsIGQyKSB7XHJcbiAgbGV0IGRhdGUxID0gbmV3IERhdGUoZDEpO1xyXG4gIGxldCBkYXRlMiA9IG5ldyBEYXRlKGQyKTtcclxuICBsZXQgeWVhcnNEaWZmID0gZGF0ZTIuZ2V0RnVsbFllYXIoKSAtIGRhdGUxLmdldEZ1bGxZZWFyKCk7XHJcbiAgcmV0dXJuIHllYXJzRGlmZjtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9udGhzRGlmZihkMSwgZDIpIHtcclxuICBsZXQgZGF0ZTEgPSBuZXcgRGF0ZShkMSk7XHJcbiAgbGV0IGRhdGUyID0gbmV3IERhdGUoZDIpO1xyXG4gIGxldCB5ZWFycyA9IHllYXJzRGlmZihkMSwgZDIpO1xyXG4gIGxldCBtb250aHMgPSB5ZWFycyAqIDEyICsgKGRhdGUyLmdldE1vbnRoKCkgLSBkYXRlMS5nZXRNb250aCgpKTtcclxuICByZXR1cm4gbW9udGhzO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=