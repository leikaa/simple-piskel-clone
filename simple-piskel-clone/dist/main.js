/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/screens/canvas/style.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/screens/canvas/style.scss ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = {};

function modulesToDom(moduleId, list, options) {
  for (var i = 0; i < list.length; i++) {
    var part = {
      css: list[i][1],
      media: list[i][2],
      sourceMap: list[i][3]
    };

    if (stylesInDom[moduleId][i]) {
      stylesInDom[moduleId][i](part);
    } else {
      stylesInDom[moduleId].push(addStyle(part, options));
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (moduleId, list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  moduleId = options.base ? moduleId + options.base : moduleId;
  list = list || [];

  if (!stylesInDom[moduleId]) {
    stylesInDom[moduleId] = [];
  }

  modulesToDom(moduleId, list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    if (!stylesInDom[moduleId]) {
      stylesInDom[moduleId] = [];
    }

    modulesToDom(moduleId, newList, options);

    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {
      stylesInDom[moduleId][j]();
    }

    stylesInDom[moduleId].length = newList.length;

    if (stylesInDom[moduleId].length === 0) {
      delete stylesInDom[moduleId];
    }
  };
};

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screens_canvas_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/canvas/style.scss */ "./src/screens/canvas/style.scss");
/* harmony import */ var _screens_canvas_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_screens_canvas_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_getCanvasSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/getCanvasSize */ "./src/helpers/getCanvasSize.js");
/* harmony import */ var _helpers_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/debounce */ "./src/helpers/debounce.js");
/* harmony import */ var _helpers_changeToolOnClick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/changeToolOnClick */ "./src/helpers/changeToolOnClick.js");
/* harmony import */ var _helpers_changePixelSizeOnClick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/changePixelSizeOnClick */ "./src/helpers/changePixelSizeOnClick.js");
/* harmony import */ var _helpers_changeCanvasSizeOnClick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/changeCanvasSizeOnClick */ "./src/helpers/changeCanvasSizeOnClick.js");
/* harmony import */ var _helpers_drawPixel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/drawPixel */ "./src/helpers/drawPixel.js");
/* harmony import */ var _helpers_drawStrokeLine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/drawStrokeLine */ "./src/helpers/drawStrokeLine.js");
/* harmony import */ var _helpers_clearCurrentPixel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/clearCurrentPixel */ "./src/helpers/clearCurrentPixel.js");
/* harmony import */ var _helpers_getPixelColor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/getPixelColor */ "./src/helpers/getPixelColor.js");
/* harmony import */ var _helpers_colorsHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/colorsHelper */ "./src/helpers/colorsHelper.js");
/* harmony import */ var _components_setInitialCanvasGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/setInitialCanvasGrid */ "./src/components/setInitialCanvasGrid.js");













window.onload = function () {
  var columns = [];
  var tool = 'pencil';
  var pixelSize = '1';
  var canvasSize = '32';
  var draw = false;
  var clear = false;
  var canvasFrameSize = '128';
  var defaultColor = '#c4c4c4';
  var ulFrameList = document.querySelector('.work-area-left-frame-block-list');
  var canvas = document.querySelector('.work-area-canvas-block__canvas');
  var ctx = canvas.getContext('2d');
  var mouseCoords = {
    x: 0,
    y: 0
  };
  var currentStartCoords = {
    x: 0,
    y: 0
  };
  var mouseButton = 'lmb';
  var imageData = '';
  var LMB_KEYCODE = 1;
  var RMB_KEYCODE = 3;
  var colorSet = {
    lmb: window.getComputedStyle(document.querySelector('.js-lmb')).getPropertyValue('background-color'),
    rmb: window.getComputedStyle(document.querySelector('.js-rmb')).getPropertyValue('background-color')
  };
  var colorToFillTemplate = colorSet.lmb; // set initial canvas grid

  columns = Object(_components_setInitialCanvasGrid__WEBPACK_IMPORTED_MODULE_11__["default"])(columns, defaultColor, pixelSize, canvasFrameSize); // get main canvas size according to window resize and choosen frame size options

  var currentCanvasResizedSize = Object(_helpers_getCanvasSize__WEBPACK_IMPORTED_MODULE_1__["default"])();

  var getCanvasResizeCoefficient = function getCanvasResizeCoefficient(currentCanvasResizedSize, canvasFrameSize) {
    return currentCanvasResizedSize / canvasFrameSize;
  };

  var canvasResizeCoefficient = getCanvasResizeCoefficient(currentCanvasResizedSize, canvasFrameSize);

  var getCanvasFrameCoefficient = function getCanvasFrameCoefficient(canvasSize, canvasFrameSize) {
    return canvasFrameSize / canvasSize;
  };

  var canvasFrameCoefficient = getCanvasFrameCoefficient(canvasSize, canvasFrameSize);
  window.addEventListener('resize', Object(_helpers_debounce__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    currentCanvasResizedSize = Object(_helpers_getCanvasSize__WEBPACK_IMPORTED_MODULE_1__["default"])();
    canvasResizeCoefficient = getCanvasResizeCoefficient(currentCanvasResizedSize, canvasFrameSize);
  })); // set active tools / canvas size / pixel size

  document.querySelectorAll('.work-area-left-panel-block-size__item').forEach(function (value) {
    value.addEventListener('click', function onPixelSizeItemClick() {
      pixelSize = Object(_helpers_changePixelSizeOnClick__WEBPACK_IMPORTED_MODULE_4__["default"])(this);
    });
  });
  document.querySelectorAll('.work-area-left-panel-block-tools__item:not(.disabled)').forEach(function (value) {
    value.addEventListener('click', function onToolsItemClick() {
      tool = Object(_helpers_changeToolOnClick__WEBPACK_IMPORTED_MODULE_3__["default"])(this);
    });
  });
  document.querySelectorAll('.work-area-right-block__resize-btns-item').forEach(function (value) {
    value.addEventListener('click', function onCanvasSizeItemClick() {
      canvasSize = Object(_helpers_changeCanvasSizeOnClick__WEBPACK_IMPORTED_MODULE_5__["default"])(this);
      canvasFrameCoefficient = getCanvasFrameCoefficient(canvasSize, canvasFrameSize);
    });
  }); // add additional frames
  // document.querySelector('.js-add-frame').addEventListener('click', () => {
  //   const liAdditionalFrame = document.createElement('li');
  //   liAdditionalFrame.className = 'work-area-left-frame-block-list__item';
  //   ulFrameList.appendChild(liAdditionalFrame);
  // });
  // colors section

  document.querySelector('.js-lmb').addEventListener('click', function onColorItemClick() {
    mouseButton = this.getAttribute('data-button');
    Object(_helpers_colorsHelper__WEBPACK_IMPORTED_MODULE_10__["openColorPalette"])(this, mouseButton);
  });
  document.querySelector('.js-lmb-color-picker').addEventListener('change', function onColorChange() {
    Object(_helpers_colorsHelper__WEBPACK_IMPORTED_MODULE_10__["changeColorFromPalette"])(colorSet, this, mouseButton);
  });
  document.querySelector('.js-rmb').addEventListener('click', function onColorItemClick() {
    mouseButton = this.getAttribute('data-button');
    Object(_helpers_colorsHelper__WEBPACK_IMPORTED_MODULE_10__["openColorPalette"])(this, mouseButton);
  });
  document.querySelector('.js-rmb-color-picker').addEventListener('change', function onColorChange() {
    Object(_helpers_colorsHelper__WEBPACK_IMPORTED_MODULE_10__["changeColorFromPalette"])(colorSet, this, mouseButton);
  });
  document.querySelector('.js-swap').addEventListener('click', function () {
    Object(_helpers_colorsHelper__WEBPACK_IMPORTED_MODULE_10__["swapColors"])(colorSet);
  }); // draw according to tools

  var drawPixel = function drawPixel(e, colorToFillTemplate) {
    Object(_helpers_drawPixel__WEBPACK_IMPORTED_MODULE_6__["default"])(e, ctx, columns, mouseCoords, canvasResizeCoefficient, pixelSize, colorToFillTemplate, canvasFrameCoefficient);
  };

  var startDrawStrokeLine = function startDrawStrokeLine(e, colorToFillTemplate) {
    currentStartCoords = Object(_helpers_drawStrokeLine__WEBPACK_IMPORTED_MODULE_7__["startDrawStroke"])(e, ctx, columns, mouseCoords, canvasResizeCoefficient, pixelSize, colorToFillTemplate, canvasFrameCoefficient);
    imageData = ctx.getImageData(0, 0, currentCanvasResizedSize, currentCanvasResizedSize);
  };

  var moveDrawStrokeLine = function moveDrawStrokeLine(e, colorToFillTemplate, imageData, currentStartCoords) {
    Object(_helpers_drawStrokeLine__WEBPACK_IMPORTED_MODULE_7__["moveDrawStroke"])(e, ctx, columns, mouseCoords, canvasResizeCoefficient, pixelSize, colorToFillTemplate, canvasFrameCoefficient, imageData, currentStartCoords);
  };

  var stopDrawStrokeLine = function stopDrawStrokeLine(e, colorToFillTemplate) {
    Object(_helpers_drawStrokeLine__WEBPACK_IMPORTED_MODULE_7__["stopDrawStroke"])(e, ctx, columns, mouseCoords, canvasResizeCoefficient, pixelSize, colorToFillTemplate, canvasFrameCoefficient);
  };

  var clearPixel = function clearPixel(e) {
    Object(_helpers_clearCurrentPixel__WEBPACK_IMPORTED_MODULE_8__["default"])(e, ctx, columns, mouseCoords, canvasResizeCoefficient, pixelSize, canvasFrameCoefficient);
  };

  canvas.addEventListener('click', function (e) {
    colorToFillTemplate = colorSet.lmb;

    if (tool === 'pencil') {
      drawPixel(e, colorToFillTemplate);
    }

    if (tool === 'picker') {
      var currentPixelColor = Object(_helpers_getPixelColor__WEBPACK_IMPORTED_MODULE_9__["default"])(e, ctx, mouseCoords, defaultColor, canvasResizeCoefficient);
      colorSet.lmb = currentPixelColor;
      document.querySelector('.js-lmb').style.setProperty('background-color', currentPixelColor);
    }

    if (tool === 'bucket-all') {// TODO скорректировать формирование карты пикселей для канваса при отрисовке
      // let colorToFill = getPixelColor(e, ctx, mouseCoords, defaultColor, canvasResizeCoefficient);
      // let fillCoefficient = canvasFrameSize / canvasSize;
      //
      // columns.forEach((row, i) => {
      //   row.forEach((currentPixelColor, j) => {
      //     if (currentPixelColor === colorToFill) {
      //       ctx.fillStyle = colorToFillTemplate;
      //       ctx.fillRect(i * pixelSize * fillCoefficient, j * pixelSize * fillCoefficient, pixelSize * fillCoefficient, pixelSize * fillCoefficient);
      //       columns[i][j] = colorToFillTemplate;
      //     }
      //   });
      // });
    }

    if (tool === 'eraser') {
      clearPixel(e);
    }
  });
  canvas.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    colorToFillTemplate = colorSet.rmb;

    if (tool === 'pencil') {
      drawPixel(e, colorToFillTemplate);
    }

    if (tool === 'picker') {
      var currentPixelColor = Object(_helpers_getPixelColor__WEBPACK_IMPORTED_MODULE_9__["default"])(e, ctx, mouseCoords, defaultColor, canvasResizeCoefficient);
      colorSet.rmb = currentPixelColor;
      document.querySelector('.js-rmb').style.setProperty('background-color', currentPixelColor);
    }
  });
  canvas.addEventListener('mousedown', function (e) {
    if (tool === 'pencil') {
      draw = true;
    }

    if (tool === 'stroke') {
      draw = true;
      startDrawStrokeLine(e, colorToFillTemplate);
    }

    if (tool === 'eraser') {
      clear = true;
    }
  });
  canvas.addEventListener('mousemove', function (e) {
    if (e.which === LMB_KEYCODE) {
      colorToFillTemplate = colorSet.lmb;
    } else if (e.which === RMB_KEYCODE) {
      colorToFillTemplate = colorSet.rmb;
    }

    if (tool === 'pencil' && draw === true) {
      drawPixel(e, colorToFillTemplate);
    }

    if (tool === 'stroke' && draw === true) {// TODO придумать как сохранять первоначальные координаты и состояние канваса
      // moveDrawStrokeLine(e, colorToFillTemplate, imageData, currentStartCoords);
    }

    if (tool === 'eraser' && clear === true) {
      clearPixel(e);
    }
  });
  canvas.addEventListener('mouseup', function (e) {
    if (tool === 'pencil') {
      draw = false;
    }

    if (tool === 'stroke') {
      draw = false;
      stopDrawStrokeLine(e, colorToFillTemplate);
    }

    if (tool === 'eraser') {
      clear = false;
    }
  });
};

/***/ }),

/***/ "./src/components/setInitialCanvasGrid.js":
/*!************************************************!*\
  !*** ./src/components/setInitialCanvasGrid.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (columns, defaultColor, pixelSize, canvasFrameSize) {
  columns = [];
  var columnsCount = canvasFrameSize / pixelSize;
  var rowsCount = canvasFrameSize / pixelSize;

  for (var i = 0; i < columnsCount; i += 1) {
    var row = [];

    for (var j = 0; j < rowsCount; j += 1) {
      row.push(defaultColor);
    }

    columns.push(row);
  }

  return columns;
});

/***/ }),

/***/ "./src/helpers/changeCanvasSizeOnClick.js":
/*!************************************************!*\
  !*** ./src/helpers/changeCanvasSizeOnClick.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  document.querySelectorAll('.work-area-right-block__resize-btns-item').forEach(function (val) {
    val.classList.remove('selected');
  });
  value.classList.add('selected');
  return value.getAttribute('data-size');
});

/***/ }),

/***/ "./src/helpers/changePixelSizeOnClick.js":
/*!***********************************************!*\
  !*** ./src/helpers/changePixelSizeOnClick.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  document.querySelectorAll('.work-area-left-panel-block-size__item').forEach(function (val) {
    val.classList.remove('selected');
  });
  value.classList.add('selected');
  return value.getAttribute('data-size');
});

/***/ }),

/***/ "./src/helpers/changeToolOnClick.js":
/*!******************************************!*\
  !*** ./src/helpers/changeToolOnClick.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  document.querySelectorAll('.work-area-left-panel-block-tools__item').forEach(function (val) {
    val.classList.remove('selected');
  });
  value.classList.add('selected');
  return value.getAttribute('data-tool');
});

/***/ }),

/***/ "./src/helpers/clearCurrentPixel.js":
/*!******************************************!*\
  !*** ./src/helpers/clearCurrentPixel.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (e, ctx, columns, mouseCoords, canvasResizeCoefficient, pixelSize, canvasFrameCoefficient) {
  pixelSize = pixelSize * canvasFrameCoefficient;
  mouseCoords.x = e.offsetX === undefined ? Math.floor(e.layerX / canvasResizeCoefficient / pixelSize) : Math.floor(e.offsetX / canvasResizeCoefficient / pixelSize);
  mouseCoords.y = e.offsetY === undefined ? Math.floor(e.layerY / canvasResizeCoefficient / pixelSize) : Math.floor(e.offsetY / canvasResizeCoefficient / pixelSize);
  ctx.clearRect(mouseCoords.x * pixelSize, mouseCoords.y * pixelSize, pixelSize, pixelSize);
});

/***/ }),

/***/ "./src/helpers/colorsHelper.js":
/*!*************************************!*\
  !*** ./src/helpers/colorsHelper.js ***!
  \*************************************/
/*! exports provided: openColorPalette, swapColors, changeColorFromPalette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openColorPalette", function() { return openColorPalette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swapColors", function() { return swapColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeColorFromPalette", function() { return changeColorFromPalette; });
/* harmony import */ var _convertRGBtoHex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertRGBtoHex */ "./src/helpers/convertRGBtoHex.js");


var getColor = function getColor(context, mouseButton) {
  var intermediateColor = window.getComputedStyle(context).getPropertyValue('background-color').slice(0, -1).slice(4).split(', ');
  var colorPickerInput = document.querySelector(".js-".concat(mouseButton, "-color-picker"));
  colorPickerInput.focus();
  colorPickerInput.value = Object(_convertRGBtoHex__WEBPACK_IMPORTED_MODULE_0__["default"])(intermediateColor[0], intermediateColor[1], intermediateColor[2]);
  colorPickerInput.click();
  return colorPickerInput.value;
};

var openColorPalette = function openColorPalette(context, mouseButton) {
  getColor(context, mouseButton);
};
var swapColors = function swapColors(colorSet) {
  var intermediateColor = window.getComputedStyle(document.querySelector('.js-lmb')).getPropertyValue('background-color');
  colorSet.lmb = window.getComputedStyle(document.querySelector('.js-rmb')).getPropertyValue('background-color');
  document.querySelector('.js-lmb').style.setProperty('background-color', colorSet.lmb);
  colorSet.rmb = intermediateColor;
  document.querySelector('.js-rmb').style.setProperty('background-color', colorSet.rmb);
};
var changeColorFromPalette = function changeColorFromPalette(colorSet, context, mouseButton) {
  if (mouseButton === 'lmb') {
    colorSet.lmb = context.value;
    document.querySelector('.js-lmb').style.setProperty('background-color', colorSet.lmb);
  } else if (mouseButton === 'rmb') {
    colorSet.rmb = context.value;
    document.querySelector('.js-rmb').style.setProperty('background-color', colorSet.rmb);
  } else {
    console.log('unexpected error');
  }
};

/***/ }),

/***/ "./src/helpers/convertRGBtoHex.js":
/*!****************************************!*\
  !*** ./src/helpers/convertRGBtoHex.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var rgbToHex = function rgbToHex(rgb) {
  var hex = Number(rgb).toString(16);

  if (hex.length < 2) {
    hex = "0".concat(hex);
  }

  return hex;
};

/* harmony default export */ __webpack_exports__["default"] = (function (r, g, b) {
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return "#".concat(red).concat(green).concat(blue);
});

/***/ }),

/***/ "./src/helpers/debounce.js":
/*!*********************************!*\
  !*** ./src/helpers/debounce.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (func) {
  var timer;
  return function setDebounce(event) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(func, 300, event);
  };
});

/***/ }),

/***/ "./src/helpers/drawPixel.js":
/*!**********************************!*\
  !*** ./src/helpers/drawPixel.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _convertRGBtoHex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertRGBtoHex */ "./src/helpers/convertRGBtoHex.js");

/* harmony default export */ __webpack_exports__["default"] = (function (e, ctx, columns, mouseCoords, canvasResizeCoefficient, pixelSize, colorToFillTemplate, canvasFrameCoefficient) {
  pixelSize = pixelSize * canvasFrameCoefficient;
  mouseCoords.x = e.offsetX === undefined ? Math.floor(e.layerX / canvasResizeCoefficient / pixelSize) : Math.floor(e.offsetX / canvasResizeCoefficient / pixelSize);
  mouseCoords.y = e.offsetY === undefined ? Math.floor(e.layerY / canvasResizeCoefficient / pixelSize) : Math.floor(e.offsetY / canvasResizeCoefficient / pixelSize);
  ctx.fillStyle = colorToFillTemplate;
  ctx.fillRect(mouseCoords.x * pixelSize, mouseCoords.y * pixelSize, pixelSize, pixelSize);
  var intermediateColor = colorToFillTemplate.slice(0, -1).slice(4).split(', ');
  columns[+mouseCoords.x][+mouseCoords.y] = Object(_convertRGBtoHex__WEBPACK_IMPORTED_MODULE_0__["default"])(intermediateColor[0], intermediateColor[1], intermediateColor[2]);
});

/***/ }),

/***/ "./src/helpers/drawStrokeLine.js":
/*!***************************************!*\
  !*** ./src/helpers/drawStrokeLine.js ***!
  \***************************************/
/*! exports provided: startDrawStroke, moveDrawStroke, stopDrawStroke */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startDrawStroke", function() { return startDrawStroke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveDrawStroke", function() { return moveDrawStroke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopDrawStroke", function() { return stopDrawStroke; });
var startDrawStroke = function startDrawStroke(e, ctx, columns, mouseCoords, canvasResizeCoefficient, pixelSize, colorToFillTemplate, canvasFrameCoefficient) {
  pixelSize = pixelSize * canvasFrameCoefficient;
  mouseCoords.x = e.offsetX === undefined ? Math.floor(e.layerX / canvasResizeCoefficient / pixelSize) : Math.floor(e.offsetX / canvasResizeCoefficient / pixelSize);
  mouseCoords.y = e.offsetY === undefined ? Math.floor(e.layerY / canvasResizeCoefficient / pixelSize) : Math.floor(e.offsetY / canvasResizeCoefficient / pixelSize);
  ctx.beginPath();
  ctx.moveTo(mouseCoords.x * pixelSize, mouseCoords.y * pixelSize);
  return mouseCoords;
};
var moveDrawStroke = function moveDrawStroke(e, ctx, columns, mouseCoords, canvasResizeCoefficient, pixelSize, colorToFillTemplate, canvasFrameCoefficient, imageData, currentStartCoords) {
  pixelSize = pixelSize * canvasFrameCoefficient;
  mouseCoords.x = e.offsetX === undefined ? Math.floor(e.layerX / canvasResizeCoefficient / pixelSize) : Math.floor(e.offsetX / canvasResizeCoefficient / pixelSize);
  mouseCoords.y = e.offsetY === undefined ? Math.floor(e.layerY / canvasResizeCoefficient / pixelSize) : Math.floor(e.offsetY / canvasResizeCoefficient / pixelSize);
  ctx.putImageData(imageData, 0, 0);
  ctx.lineWidth = pixelSize;
  ctx.moveTo(currentStartCoords.x * pixelSize, currentStartCoords.y * pixelSize);
  ctx.lineTo(mouseCoords.x * pixelSize, mouseCoords.y * pixelSize);
  ctx.stroke();
};
var stopDrawStroke = function stopDrawStroke(e, ctx, columns, mouseCoords, canvasResizeCoefficient, pixelSize, colorToFillTemplate, canvasFrameCoefficient) {
  pixelSize = pixelSize * canvasFrameCoefficient;
  mouseCoords.x = e.offsetX === undefined ? Math.floor(e.layerX / canvasResizeCoefficient / pixelSize) : Math.floor(e.offsetX / canvasResizeCoefficient / pixelSize);
  mouseCoords.y = e.offsetY === undefined ? Math.floor(e.layerY / canvasResizeCoefficient / pixelSize) : Math.floor(e.offsetY / canvasResizeCoefficient / pixelSize);
  ctx.lineWidth = pixelSize;
  ctx.lineTo(mouseCoords.x * pixelSize, mouseCoords.y * pixelSize);
  ctx.strokeStyle = colorToFillTemplate;
  ctx.stroke();
  ctx.closePath();
};

/***/ }),

/***/ "./src/helpers/getCanvasSize.js":
/*!**************************************!*\
  !*** ./src/helpers/getCanvasSize.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var canvasBlock = document.querySelector('.work-area-canvas-block');
  var canvasWrapper = document.querySelector('.work-area-canvas-block__canvas-wrapper');
  var canvasHeight = canvasBlock.offsetHeight;
  var canvasWidth = canvasBlock.offsetWidth;
  var canvasSize = canvasWidth < canvasHeight ? canvasWidth : canvasHeight;
  canvasWrapper.style.height = ''.concat(canvasSize, 'px');
  canvasWrapper.style.width = ''.concat(canvasSize, 'px');
  return canvasSize;
});

/***/ }),

/***/ "./src/helpers/getPixelColor.js":
/*!**************************************!*\
  !*** ./src/helpers/getPixelColor.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _convertRGBtoHex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertRGBtoHex */ "./src/helpers/convertRGBtoHex.js");

/* harmony default export */ __webpack_exports__["default"] = (function (e, ctx, mouseCoords, defaultColor, canvasResizeCoefficient) {
  var pixelColor;
  mouseCoords.x = e.offsetX === undefined ? Math.floor(e.layerX / canvasResizeCoefficient) : Math.floor(e.offsetX / canvasResizeCoefficient);
  mouseCoords.y = e.offsetY === undefined ? Math.floor(e.layerY / canvasResizeCoefficient) : Math.floor(e.offsetY / canvasResizeCoefficient);
  var p = ctx.getImageData(mouseCoords.x, mouseCoords.y, 1, 1).data;

  if (p[0] === 0 && p[1] === 0 && p[2] === 0 && p[3] === 0) {
    pixelColor = defaultColor;
  } else {
    pixelColor = Object(_convertRGBtoHex__WEBPACK_IMPORTED_MODULE_0__["default"])(p[0], p[1], p[2]);
  }

  return pixelColor;
});

/***/ }),

/***/ "./src/screens/canvas/style.scss":
/*!***************************************!*\
  !*** ./src/screens/canvas/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/screens/canvas/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmVlbnMvY2FudmFzL3N0eWxlLnNjc3M/NGI1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZXRJbml0aWFsQ2FudmFzR3JpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9jaGFuZ2VDYW52YXNTaXplT25DbGljay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9jaGFuZ2VQaXhlbFNpemVPbkNsaWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2NoYW5nZVRvb2xPbkNsaWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2NsZWFyQ3VycmVudFBpeGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2NvbG9yc0hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9jb252ZXJ0UkdCdG9IZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvZHJhd1BpeGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2RyYXdTdHJva2VMaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2dldENhbnZhc1NpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvZ2V0UGl4ZWxDb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyZWVucy9jYW52YXMvc3R5bGUuc2Nzcz8zZGIwIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9ubG9hZCIsImNvbHVtbnMiLCJ0b29sIiwicGl4ZWxTaXplIiwiY2FudmFzU2l6ZSIsImRyYXciLCJjbGVhciIsImNhbnZhc0ZyYW1lU2l6ZSIsImRlZmF1bHRDb2xvciIsInVsRnJhbWVMaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsIm1vdXNlQ29vcmRzIiwieCIsInkiLCJjdXJyZW50U3RhcnRDb29yZHMiLCJtb3VzZUJ1dHRvbiIsImltYWdlRGF0YSIsIkxNQl9LRVlDT0RFIiwiUk1CX0tFWUNPREUiLCJjb2xvclNldCIsImxtYiIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwicm1iIiwiY29sb3JUb0ZpbGxUZW1wbGF0ZSIsInNldEluaXRpYWxDYW52YXNHcmlkIiwiY3VycmVudENhbnZhc1Jlc2l6ZWRTaXplIiwiZ2V0Q2FudmFzU2l6ZSIsImdldENhbnZhc1Jlc2l6ZUNvZWZmaWNpZW50IiwiY2FudmFzUmVzaXplQ29lZmZpY2llbnQiLCJnZXRDYW52YXNGcmFtZUNvZWZmaWNpZW50IiwiY2FudmFzRnJhbWVDb2VmZmljaWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZWJvdW5jZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidmFsdWUiLCJvblBpeGVsU2l6ZUl0ZW1DbGljayIsImNoYW5nZVBpeGVsU2l6ZU9uQ2xpY2siLCJvblRvb2xzSXRlbUNsaWNrIiwiY2hhbmdlVG9vbE9uQ2xpY2siLCJvbkNhbnZhc1NpemVJdGVtQ2xpY2siLCJjaGFuZ2VDYW52YXNTaXplT25DbGljayIsIm9uQ29sb3JJdGVtQ2xpY2siLCJnZXRBdHRyaWJ1dGUiLCJvcGVuQ29sb3JQYWxldHRlIiwib25Db2xvckNoYW5nZSIsImNoYW5nZUNvbG9yRnJvbVBhbGV0dGUiLCJzd2FwQ29sb3JzIiwiZHJhd1BpeGVsIiwiZSIsImRyYXdDdXJyZW50UGl4ZWwiLCJzdGFydERyYXdTdHJva2VMaW5lIiwic3RhcnREcmF3U3Ryb2tlIiwiZ2V0SW1hZ2VEYXRhIiwibW92ZURyYXdTdHJva2VMaW5lIiwibW92ZURyYXdTdHJva2UiLCJzdG9wRHJhd1N0cm9rZUxpbmUiLCJzdG9wRHJhd1N0cm9rZSIsImNsZWFyUGl4ZWwiLCJjbGVhckN1cnJlbnRQaXhlbCIsImN1cnJlbnRQaXhlbENvbG9yIiwiZ2V0UGl4ZWxDb2xvciIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJwcmV2ZW50RGVmYXVsdCIsIndoaWNoIiwiY29sdW1uc0NvdW50Iiwicm93c0NvdW50IiwiaSIsInJvdyIsImoiLCJwdXNoIiwidmFsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwib2Zmc2V0WCIsInVuZGVmaW5lZCIsIk1hdGgiLCJmbG9vciIsImxheWVyWCIsIm9mZnNldFkiLCJsYXllclkiLCJjbGVhclJlY3QiLCJnZXRDb2xvciIsImNvbnRleHQiLCJpbnRlcm1lZGlhdGVDb2xvciIsInNsaWNlIiwic3BsaXQiLCJjb2xvclBpY2tlcklucHV0IiwiZm9jdXMiLCJmdWxsQ29sb3JIZXgiLCJjbGljayIsImNvbnNvbGUiLCJsb2ciLCJyZ2JUb0hleCIsInJnYiIsImhleCIsIk51bWJlciIsInRvU3RyaW5nIiwibGVuZ3RoIiwiciIsImciLCJiIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiZnVuYyIsInRpbWVyIiwic2V0RGVib3VuY2UiLCJldmVudCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsInB1dEltYWdlRGF0YSIsImxpbmVXaWR0aCIsImxpbmVUbyIsInN0cm9rZSIsInN0cm9rZVN0eWxlIiwiY2xvc2VQYXRoIiwiY2FudmFzQmxvY2siLCJjYW52YXNXcmFwcGVyIiwiY2FudmFzSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiY2FudmFzV2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsImNvbmNhdCIsIndpZHRoIiwicGl4ZWxDb2xvciIsInAiLCJkYXRhIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixRQUFTOztBQUUxQjs7OztBQUlBLDBCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obW9kdWxlSWQsIGxpc3QsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGxpc3RbaV1bMV0sXG4gICAgICBtZWRpYTogbGlzdFtpXVsyXSxcbiAgICAgIHNvdXJjZU1hcDogbGlzdFtpXVszXVxuICAgIH07XG5cbiAgICBpZiAoc3R5bGVzSW5Eb21bbW9kdWxlSWRdW2ldKSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF1baV0ocGFydCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXS5wdXNoKGFkZFN0eWxlKHBhcnQsIG9wdGlvbnMpKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgbGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBtb2R1bGVJZCA9IG9wdGlvbnMuYmFzZSA/IG1vZHVsZUlkICsgb3B0aW9ucy5iYXNlIDogbW9kdWxlSWQ7XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuXG4gIGlmICghc3R5bGVzSW5Eb21bbW9kdWxlSWRdKSB7XG4gICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdID0gW107XG4gIH1cblxuICBtb2R1bGVzVG9Eb20obW9kdWxlSWQsIGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXN0eWxlc0luRG9tW21vZHVsZUlkXSkge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdID0gW107XG4gICAgfVxuXG4gICAgbW9kdWxlc1RvRG9tKG1vZHVsZUlkLCBuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIGogPSBuZXdMaXN0Lmxlbmd0aDsgaiA8IHN0eWxlc0luRG9tW21vZHVsZUlkXS5sZW5ndGg7IGorKykge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdW2pdKCk7XG4gICAgfVxuXG4gICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdLmxlbmd0aCA9IG5ld0xpc3QubGVuZ3RoO1xuXG4gICAgaWYgKHN0eWxlc0luRG9tW21vZHVsZUlkXS5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVttb2R1bGVJZF07XG4gICAgfVxuICB9O1xufTsiLCJpbXBvcnQgJy4vc2NyZWVucy9jYW52YXMvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgZ2V0Q2FudmFzU2l6ZSBmcm9tICcuL2hlbHBlcnMvZ2V0Q2FudmFzU2l6ZSc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi9oZWxwZXJzL2RlYm91bmNlJztcbmltcG9ydCBjaGFuZ2VUb29sT25DbGljayBmcm9tICcuL2hlbHBlcnMvY2hhbmdlVG9vbE9uQ2xpY2snO1xuaW1wb3J0IGNoYW5nZVBpeGVsU2l6ZU9uQ2xpY2sgZnJvbSAnLi9oZWxwZXJzL2NoYW5nZVBpeGVsU2l6ZU9uQ2xpY2snO1xuaW1wb3J0IGNoYW5nZUNhbnZhc1NpemVPbkNsaWNrIGZyb20gJy4vaGVscGVycy9jaGFuZ2VDYW52YXNTaXplT25DbGljayc7XG5pbXBvcnQgZHJhd0N1cnJlbnRQaXhlbCBmcm9tICcuL2hlbHBlcnMvZHJhd1BpeGVsJztcbmltcG9ydCB7IHN0YXJ0RHJhd1N0cm9rZSwgbW92ZURyYXdTdHJva2UsIHN0b3BEcmF3U3Ryb2tlIH0gZnJvbSAnLi9oZWxwZXJzL2RyYXdTdHJva2VMaW5lJztcbmltcG9ydCBjbGVhckN1cnJlbnRQaXhlbCBmcm9tICcuL2hlbHBlcnMvY2xlYXJDdXJyZW50UGl4ZWwnO1xuaW1wb3J0IGdldFBpeGVsQ29sb3IgZnJvbSAnLi9oZWxwZXJzL2dldFBpeGVsQ29sb3InO1xuaW1wb3J0IHsgb3BlbkNvbG9yUGFsZXR0ZSwgc3dhcENvbG9ycywgY2hhbmdlQ29sb3JGcm9tUGFsZXR0ZSB9IGZyb20gJy4vaGVscGVycy9jb2xvcnNIZWxwZXInO1xuaW1wb3J0IHNldEluaXRpYWxDYW52YXNHcmlkIGZyb20gJy4vY29tcG9uZW50cy9zZXRJbml0aWFsQ2FudmFzR3JpZCc7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGxldCBjb2x1bW5zID0gW107XG4gIGxldCB0b29sID0gJ3BlbmNpbCc7XG4gIGxldCBwaXhlbFNpemUgPSAnMSc7XG4gIGxldCBjYW52YXNTaXplID0gJzMyJztcbiAgbGV0IGRyYXcgPSBmYWxzZTtcbiAgbGV0IGNsZWFyID0gZmFsc2U7XG4gIGNvbnN0IGNhbnZhc0ZyYW1lU2l6ZSA9ICcxMjgnO1xuICBjb25zdCBkZWZhdWx0Q29sb3IgPSAnI2M0YzRjNCc7XG4gIGNvbnN0IHVsRnJhbWVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmstYXJlYS1sZWZ0LWZyYW1lLWJsb2NrLWxpc3QnKTtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmstYXJlYS1jYW52YXMtYmxvY2tfX2NhbnZhcycpO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY29uc3QgbW91c2VDb29yZHMgPSB7IHg6IDAsIHk6IDAgfTtcbiAgbGV0IGN1cnJlbnRTdGFydENvb3JkcyA9IHsgeDogMCwgeTogMCB9O1xuICBsZXQgbW91c2VCdXR0b24gPSAnbG1iJztcbiAgbGV0IGltYWdlRGF0YSA9ICcnO1xuXG4gIGNvbnN0IExNQl9LRVlDT0RFID0gMTtcbiAgY29uc3QgUk1CX0tFWUNPREUgPSAzO1xuXG4gIGNvbnN0IGNvbG9yU2V0ID0ge1xuICAgIGxtYjogd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWxtYicpKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyksXG4gICAgcm1iOiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcm1iJykpLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtY29sb3InKSxcbiAgfTtcbiAgbGV0IGNvbG9yVG9GaWxsVGVtcGxhdGUgPSBjb2xvclNldC5sbWI7XG5cbiAgLy8gc2V0IGluaXRpYWwgY2FudmFzIGdyaWRcbiAgY29sdW1ucyA9IHNldEluaXRpYWxDYW52YXNHcmlkKGNvbHVtbnMsIGRlZmF1bHRDb2xvciwgcGl4ZWxTaXplLCBjYW52YXNGcmFtZVNpemUpO1xuXG4gIC8vIGdldCBtYWluIGNhbnZhcyBzaXplIGFjY29yZGluZyB0byB3aW5kb3cgcmVzaXplIGFuZCBjaG9vc2VuIGZyYW1lIHNpemUgb3B0aW9uc1xuICBsZXQgY3VycmVudENhbnZhc1Jlc2l6ZWRTaXplID0gZ2V0Q2FudmFzU2l6ZSgpO1xuICBjb25zdCBnZXRDYW52YXNSZXNpemVDb2VmZmljaWVudCA9IChjdXJyZW50Q2FudmFzUmVzaXplZFNpemUsIGNhbnZhc0ZyYW1lU2l6ZSkgPT4gY3VycmVudENhbnZhc1Jlc2l6ZWRTaXplIC8gY2FudmFzRnJhbWVTaXplO1xuICBsZXQgY2FudmFzUmVzaXplQ29lZmZpY2llbnQgPSBnZXRDYW52YXNSZXNpemVDb2VmZmljaWVudChjdXJyZW50Q2FudmFzUmVzaXplZFNpemUsIGNhbnZhc0ZyYW1lU2l6ZSk7XG5cbiAgY29uc3QgZ2V0Q2FudmFzRnJhbWVDb2VmZmljaWVudCA9IChjYW52YXNTaXplLCBjYW52YXNGcmFtZVNpemUpID0+IGNhbnZhc0ZyYW1lU2l6ZSAvIGNhbnZhc1NpemU7XG4gIGxldCBjYW52YXNGcmFtZUNvZWZmaWNpZW50ID0gZ2V0Q2FudmFzRnJhbWVDb2VmZmljaWVudChjYW52YXNTaXplLCBjYW52YXNGcmFtZVNpemUpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZSgoKSA9PiB7XG4gICAgY3VycmVudENhbnZhc1Jlc2l6ZWRTaXplID0gZ2V0Q2FudmFzU2l6ZSgpO1xuICAgIGNhbnZhc1Jlc2l6ZUNvZWZmaWNpZW50ID0gZ2V0Q2FudmFzUmVzaXplQ29lZmZpY2llbnQoY3VycmVudENhbnZhc1Jlc2l6ZWRTaXplLCBjYW52YXNGcmFtZVNpemUpO1xuICB9KSk7XG5cbiAgLy8gc2V0IGFjdGl2ZSB0b29scyAvIGNhbnZhcyBzaXplIC8gcGl4ZWwgc2l6ZVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud29yay1hcmVhLWxlZnQtcGFuZWwtYmxvY2stc2l6ZV9faXRlbScpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgdmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBvblBpeGVsU2l6ZUl0ZW1DbGljaygpIHtcbiAgICAgIHBpeGVsU2l6ZSA9IGNoYW5nZVBpeGVsU2l6ZU9uQ2xpY2sodGhpcyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53b3JrLWFyZWEtbGVmdC1wYW5lbC1ibG9jay10b29sc19faXRlbTpub3QoLmRpc2FibGVkKScpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgdmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBvblRvb2xzSXRlbUNsaWNrKCkge1xuICAgICAgdG9vbCA9IGNoYW5nZVRvb2xPbkNsaWNrKHRoaXMpO1xuICAgIH0pO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud29yay1hcmVhLXJpZ2h0LWJsb2NrX19yZXNpemUtYnRucy1pdGVtJykuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICB2YWx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIG9uQ2FudmFzU2l6ZUl0ZW1DbGljaygpIHtcbiAgICAgIGNhbnZhc1NpemUgPSBjaGFuZ2VDYW52YXNTaXplT25DbGljayh0aGlzKTtcbiAgICAgIGNhbnZhc0ZyYW1lQ29lZmZpY2llbnQgPSBnZXRDYW52YXNGcmFtZUNvZWZmaWNpZW50KGNhbnZhc1NpemUsIGNhbnZhc0ZyYW1lU2l6ZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIGFkZCBhZGRpdGlvbmFsIGZyYW1lc1xuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYWRkLWZyYW1lJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIC8vICAgY29uc3QgbGlBZGRpdGlvbmFsRnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAvLyAgIGxpQWRkaXRpb25hbEZyYW1lLmNsYXNzTmFtZSA9ICd3b3JrLWFyZWEtbGVmdC1mcmFtZS1ibG9jay1saXN0X19pdGVtJztcbiAgLy8gICB1bEZyYW1lTGlzdC5hcHBlbmRDaGlsZChsaUFkZGl0aW9uYWxGcmFtZSk7XG4gIC8vIH0pO1xuXG4gIC8vIGNvbG9ycyBzZWN0aW9uXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1sbWInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIG9uQ29sb3JJdGVtQ2xpY2soKSB7XG4gICAgbW91c2VCdXR0b24gPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1idXR0b24nKTtcbiAgICBvcGVuQ29sb3JQYWxldHRlKHRoaXMsIG1vdXNlQnV0dG9uKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWxtYi1jb2xvci1waWNrZXInKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiBvbkNvbG9yQ2hhbmdlKCkge1xuICAgIGNoYW5nZUNvbG9yRnJvbVBhbGV0dGUoY29sb3JTZXQsIHRoaXMsIG1vdXNlQnV0dG9uKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXJtYicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gb25Db2xvckl0ZW1DbGljaygpIHtcbiAgICBtb3VzZUJ1dHRvbiA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWJ1dHRvbicpO1xuICAgIG9wZW5Db2xvclBhbGV0dGUodGhpcywgbW91c2VCdXR0b24pO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcm1iLWNvbG9yLXBpY2tlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uIG9uQ29sb3JDaGFuZ2UoKSB7XG4gICAgY2hhbmdlQ29sb3JGcm9tUGFsZXR0ZShjb2xvclNldCwgdGhpcywgbW91c2VCdXR0b24pO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc3dhcCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHN3YXBDb2xvcnMoY29sb3JTZXQpO1xuICB9KTtcblxuICAvLyBkcmF3IGFjY29yZGluZyB0byB0b29sc1xuICBjb25zdCBkcmF3UGl4ZWwgPSAoZSwgY29sb3JUb0ZpbGxUZW1wbGF0ZSkgPT4ge1xuICAgIGRyYXdDdXJyZW50UGl4ZWwoZSwgY3R4LCBjb2x1bW5zLCBtb3VzZUNvb3JkcywgY2FudmFzUmVzaXplQ29lZmZpY2llbnQsIHBpeGVsU2l6ZSwgY29sb3JUb0ZpbGxUZW1wbGF0ZSwgY2FudmFzRnJhbWVDb2VmZmljaWVudCk7XG4gIH07XG5cbiAgY29uc3Qgc3RhcnREcmF3U3Ryb2tlTGluZSA9IChlLCBjb2xvclRvRmlsbFRlbXBsYXRlKSA9PiB7XG4gICAgY3VycmVudFN0YXJ0Q29vcmRzID0gc3RhcnREcmF3U3Ryb2tlKGUsIGN0eCwgY29sdW1ucywgbW91c2VDb29yZHMsIGNhbnZhc1Jlc2l6ZUNvZWZmaWNpZW50LCBwaXhlbFNpemUsIGNvbG9yVG9GaWxsVGVtcGxhdGUsIGNhbnZhc0ZyYW1lQ29lZmZpY2llbnQpO1xuICAgIGltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgY3VycmVudENhbnZhc1Jlc2l6ZWRTaXplLCBjdXJyZW50Q2FudmFzUmVzaXplZFNpemUpO1xuICB9O1xuXG4gIGNvbnN0IG1vdmVEcmF3U3Ryb2tlTGluZSA9IChlLCBjb2xvclRvRmlsbFRlbXBsYXRlLCBpbWFnZURhdGEsIGN1cnJlbnRTdGFydENvb3JkcykgPT4ge1xuICAgIG1vdmVEcmF3U3Ryb2tlKGUsIGN0eCwgY29sdW1ucywgbW91c2VDb29yZHMsIGNhbnZhc1Jlc2l6ZUNvZWZmaWNpZW50LCBwaXhlbFNpemUsIGNvbG9yVG9GaWxsVGVtcGxhdGUsIGNhbnZhc0ZyYW1lQ29lZmZpY2llbnQsIGltYWdlRGF0YSwgY3VycmVudFN0YXJ0Q29vcmRzKTtcbiAgfTtcblxuICBjb25zdCBzdG9wRHJhd1N0cm9rZUxpbmUgPSAoZSwgY29sb3JUb0ZpbGxUZW1wbGF0ZSkgPT4ge1xuICAgIHN0b3BEcmF3U3Ryb2tlKGUsIGN0eCwgY29sdW1ucywgbW91c2VDb29yZHMsIGNhbnZhc1Jlc2l6ZUNvZWZmaWNpZW50LCBwaXhlbFNpemUsIGNvbG9yVG9GaWxsVGVtcGxhdGUsIGNhbnZhc0ZyYW1lQ29lZmZpY2llbnQpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyUGl4ZWwgPSAoZSkgPT4ge1xuICAgIGNsZWFyQ3VycmVudFBpeGVsKGUsIGN0eCwgY29sdW1ucywgbW91c2VDb29yZHMsIGNhbnZhc1Jlc2l6ZUNvZWZmaWNpZW50LCBwaXhlbFNpemUsIGNhbnZhc0ZyYW1lQ29lZmZpY2llbnQpO1xuICB9O1xuXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29sb3JUb0ZpbGxUZW1wbGF0ZSA9IGNvbG9yU2V0LmxtYjtcbiAgICBpZiAodG9vbCA9PT0gJ3BlbmNpbCcpIHtcbiAgICAgIGRyYXdQaXhlbChlLCBjb2xvclRvRmlsbFRlbXBsYXRlKTtcbiAgICB9XG4gICAgaWYgKHRvb2wgPT09ICdwaWNrZXInKSB7XG4gICAgICBjb25zdCBjdXJyZW50UGl4ZWxDb2xvciA9IGdldFBpeGVsQ29sb3IoZSwgY3R4LCBtb3VzZUNvb3JkcywgZGVmYXVsdENvbG9yLCBjYW52YXNSZXNpemVDb2VmZmljaWVudCk7XG4gICAgICBjb2xvclNldC5sbWIgPSBjdXJyZW50UGl4ZWxDb2xvcjtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1sbWInKS5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsIGN1cnJlbnRQaXhlbENvbG9yKTtcbiAgICB9XG4gICAgaWYgKHRvb2wgPT09ICdidWNrZXQtYWxsJykge1xuICAgICAgLy8gVE9ETyDRgdC60L7RgNGA0LXQutGC0LjRgNC+0LLQsNGC0Ywg0YTQvtGA0LzQuNGA0L7QstCw0L3QuNC1INC60LDRgNGC0Ysg0L/QuNC60YHQtdC70LXQuSDQtNC70Y8g0LrQsNC90LLQsNGB0LAg0L/RgNC4INC+0YLRgNC40YHQvtCy0LrQtVxuICAgICAgLy8gbGV0IGNvbG9yVG9GaWxsID0gZ2V0UGl4ZWxDb2xvcihlLCBjdHgsIG1vdXNlQ29vcmRzLCBkZWZhdWx0Q29sb3IsIGNhbnZhc1Jlc2l6ZUNvZWZmaWNpZW50KTtcbiAgICAgIC8vIGxldCBmaWxsQ29lZmZpY2llbnQgPSBjYW52YXNGcmFtZVNpemUgLyBjYW52YXNTaXplO1xuICAgICAgLy9cbiAgICAgIC8vIGNvbHVtbnMuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICAvLyAgIHJvdy5mb3JFYWNoKChjdXJyZW50UGl4ZWxDb2xvciwgaikgPT4ge1xuICAgICAgLy8gICAgIGlmIChjdXJyZW50UGl4ZWxDb2xvciA9PT0gY29sb3JUb0ZpbGwpIHtcbiAgICAgIC8vICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvclRvRmlsbFRlbXBsYXRlO1xuICAgICAgLy8gICAgICAgY3R4LmZpbGxSZWN0KGkgKiBwaXhlbFNpemUgKiBmaWxsQ29lZmZpY2llbnQsIGogKiBwaXhlbFNpemUgKiBmaWxsQ29lZmZpY2llbnQsIHBpeGVsU2l6ZSAqIGZpbGxDb2VmZmljaWVudCwgcGl4ZWxTaXplICogZmlsbENvZWZmaWNpZW50KTtcbiAgICAgIC8vICAgICAgIGNvbHVtbnNbaV1bal0gPSBjb2xvclRvRmlsbFRlbXBsYXRlO1xuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgfSk7XG4gICAgICAvLyB9KTtcbiAgICB9XG4gICAgaWYgKHRvb2wgPT09ICdlcmFzZXInKSB7XG4gICAgICBjbGVhclBpeGVsKGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29sb3JUb0ZpbGxUZW1wbGF0ZSA9IGNvbG9yU2V0LnJtYjtcbiAgICBpZiAodG9vbCA9PT0gJ3BlbmNpbCcpIHtcbiAgICAgIGRyYXdQaXhlbChlLCBjb2xvclRvRmlsbFRlbXBsYXRlKTtcbiAgICB9XG4gICAgaWYgKHRvb2wgPT09ICdwaWNrZXInKSB7XG4gICAgICBjb25zdCBjdXJyZW50UGl4ZWxDb2xvciA9IGdldFBpeGVsQ29sb3IoZSwgY3R4LCBtb3VzZUNvb3JkcywgZGVmYXVsdENvbG9yLCBjYW52YXNSZXNpemVDb2VmZmljaWVudCk7XG4gICAgICBjb2xvclNldC5ybWIgPSBjdXJyZW50UGl4ZWxDb2xvcjtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1ybWInKS5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsIGN1cnJlbnRQaXhlbENvbG9yKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgIGlmICh0b29sID09PSAncGVuY2lsJykge1xuICAgICAgZHJhdyA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0b29sID09PSAnc3Ryb2tlJykge1xuICAgICAgZHJhdyA9IHRydWU7XG4gICAgICBzdGFydERyYXdTdHJva2VMaW5lKGUsIGNvbG9yVG9GaWxsVGVtcGxhdGUpO1xuICAgIH1cbiAgICBpZiAodG9vbCA9PT0gJ2VyYXNlcicpIHtcbiAgICAgIGNsZWFyID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgIGlmIChlLndoaWNoID09PSBMTUJfS0VZQ09ERSkge1xuICAgICAgY29sb3JUb0ZpbGxUZW1wbGF0ZSA9IGNvbG9yU2V0LmxtYjtcbiAgICB9IGVsc2UgaWYgKGUud2hpY2ggPT09IFJNQl9LRVlDT0RFKSB7XG4gICAgICBjb2xvclRvRmlsbFRlbXBsYXRlID0gY29sb3JTZXQucm1iO1xuICAgIH1cbiAgICBpZiAodG9vbCA9PT0gJ3BlbmNpbCcgJiYgZHJhdyA9PT0gdHJ1ZSkge1xuICAgICAgZHJhd1BpeGVsKGUsIGNvbG9yVG9GaWxsVGVtcGxhdGUpO1xuICAgIH1cbiAgICBpZiAodG9vbCA9PT0gJ3N0cm9rZScgJiYgZHJhdyA9PT0gdHJ1ZSkge1xuICAgICAgLy8gVE9ETyDQv9GA0LjQtNGD0LzQsNGC0Ywg0LrQsNC6INGB0L7RhdGA0LDQvdGP0YLRjCDQv9C10YDQstC+0L3QsNGH0LDQu9GM0L3Ri9C1INC60L7QvtGA0LTQuNC90LDRgtGLINC4INGB0L7RgdGC0L7Rj9C90LjQtSDQutCw0L3QstCw0YHQsFxuICAgICAgLy8gbW92ZURyYXdTdHJva2VMaW5lKGUsIGNvbG9yVG9GaWxsVGVtcGxhdGUsIGltYWdlRGF0YSwgY3VycmVudFN0YXJ0Q29vcmRzKTtcbiAgICB9XG4gICAgaWYgKHRvb2wgPT09ICdlcmFzZXInICYmIGNsZWFyID09PSB0cnVlKSB7XG4gICAgICBjbGVhclBpeGVsKGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZSkgPT4ge1xuICAgIGlmICh0b29sID09PSAncGVuY2lsJykge1xuICAgICAgZHJhdyA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodG9vbCA9PT0gJ3N0cm9rZScpIHtcbiAgICAgIGRyYXcgPSBmYWxzZTtcbiAgICAgIHN0b3BEcmF3U3Ryb2tlTGluZShlLCBjb2xvclRvRmlsbFRlbXBsYXRlKTtcbiAgICB9XG4gICAgaWYgKHRvb2wgPT09ICdlcmFzZXInKSB7XG4gICAgICBjbGVhciA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKGNvbHVtbnMsIGRlZmF1bHRDb2xvciwgcGl4ZWxTaXplLCBjYW52YXNGcmFtZVNpemUpID0+IHtcbiAgY29sdW1ucyA9IFtdO1xuICBjb25zdCBjb2x1bW5zQ291bnQgPSBjYW52YXNGcmFtZVNpemUgLyBwaXhlbFNpemU7XG4gIGNvbnN0IHJvd3NDb3VudCA9IGNhbnZhc0ZyYW1lU2l6ZSAvIHBpeGVsU2l6ZTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnNDb3VudDsgaSArPSAxKSB7XG4gICAgY29uc3Qgcm93ID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3dzQ291bnQ7IGogKz0gMSkge1xuICAgICAgcm93LnB1c2goZGVmYXVsdENvbG9yKTtcbiAgICB9XG4gICAgY29sdW1ucy5wdXNoKHJvdyk7XG4gIH1cblxuICByZXR1cm4gY29sdW1ucztcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAodmFsdWUpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndvcmstYXJlYS1yaWdodC1ibG9ja19fcmVzaXplLWJ0bnMtaXRlbScpLmZvckVhY2goKHZhbCkgPT4ge1xuICAgIHZhbC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICB9KTtcbiAgdmFsdWUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgcmV0dXJuIHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1zaXplJyk7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKHZhbHVlKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53b3JrLWFyZWEtbGVmdC1wYW5lbC1ibG9jay1zaXplX19pdGVtJykuZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgdmFsLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gIH0pO1xuICB2YWx1ZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICByZXR1cm4gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXNpemUnKTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAodmFsdWUpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndvcmstYXJlYS1sZWZ0LXBhbmVsLWJsb2NrLXRvb2xzX19pdGVtJykuZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgdmFsLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gIH0pO1xuICB2YWx1ZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICByZXR1cm4gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXRvb2wnKTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoZSwgY3R4LCBjb2x1bW5zLCBtb3VzZUNvb3JkcywgY2FudmFzUmVzaXplQ29lZmZpY2llbnQsIHBpeGVsU2l6ZSwgY2FudmFzRnJhbWVDb2VmZmljaWVudCkgPT4ge1xuICBwaXhlbFNpemUgPSBwaXhlbFNpemUgKiBjYW52YXNGcmFtZUNvZWZmaWNpZW50O1xuICBtb3VzZUNvb3Jkcy54ID0gZS5vZmZzZXRYID09PSB1bmRlZmluZWQgPyBNYXRoLmZsb29yKChlLmxheWVyWCAvIGNhbnZhc1Jlc2l6ZUNvZWZmaWNpZW50KSAvIHBpeGVsU2l6ZSlcbiAgICA6IE1hdGguZmxvb3IoKGUub2Zmc2V0WCAvIGNhbnZhc1Jlc2l6ZUNvZWZmaWNpZW50KSAvIHBpeGVsU2l6ZSk7XG4gIG1vdXNlQ29vcmRzLnkgPSBlLm9mZnNldFkgPT09IHVuZGVmaW5lZCA/IE1hdGguZmxvb3IoKGUubGF5ZXJZIC8gY2FudmFzUmVzaXplQ29lZmZpY2llbnQpIC8gcGl4ZWxTaXplKVxuICAgIDogTWF0aC5mbG9vcigoZS5vZmZzZXRZIC8gY2FudmFzUmVzaXplQ29lZmZpY2llbnQpIC8gcGl4ZWxTaXplKTtcblxuICBjdHguY2xlYXJSZWN0KG1vdXNlQ29vcmRzLnggKiBwaXhlbFNpemUsIG1vdXNlQ29vcmRzLnkgKiBwaXhlbFNpemUsIHBpeGVsU2l6ZSwgcGl4ZWxTaXplKTtcbn07XG4iLCJpbXBvcnQgZnVsbENvbG9ySGV4IGZyb20gJy4vY29udmVydFJHQnRvSGV4JztcblxuY29uc3QgZ2V0Q29sb3IgPSAoY29udGV4dCwgbW91c2VCdXR0b24pID0+IHtcbiAgY29uc3QgaW50ZXJtZWRpYXRlQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250ZXh0KS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJykuc2xpY2UoMCwgLTEpLnNsaWNlKDQpXG4gICAgLnNwbGl0KCcsICcpO1xuICBjb25zdCBjb2xvclBpY2tlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmpzLSR7bW91c2VCdXR0b259LWNvbG9yLXBpY2tlcmApO1xuICBjb2xvclBpY2tlcklucHV0LmZvY3VzKCk7XG4gIGNvbG9yUGlja2VySW5wdXQudmFsdWUgPSBmdWxsQ29sb3JIZXgoaW50ZXJtZWRpYXRlQ29sb3JbMF0sIGludGVybWVkaWF0ZUNvbG9yWzFdLCBpbnRlcm1lZGlhdGVDb2xvclsyXSk7XG4gIGNvbG9yUGlja2VySW5wdXQuY2xpY2soKTtcblxuICByZXR1cm4gY29sb3JQaWNrZXJJbnB1dC52YWx1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBvcGVuQ29sb3JQYWxldHRlID0gKGNvbnRleHQsIG1vdXNlQnV0dG9uKSA9PiB7XG4gIGdldENvbG9yKGNvbnRleHQsIG1vdXNlQnV0dG9uKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzd2FwQ29sb3JzID0gKGNvbG9yU2V0KSA9PiB7XG4gIGNvbnN0IGludGVybWVkaWF0ZUNvbG9yID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWxtYicpKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG5cbiAgY29sb3JTZXQubG1iID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXJtYicpKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1sbWInKS5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsIGNvbG9yU2V0LmxtYik7XG5cbiAgY29sb3JTZXQucm1iID0gaW50ZXJtZWRpYXRlQ29sb3I7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1ybWInKS5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsIGNvbG9yU2V0LnJtYik7XG59O1xuXG5leHBvcnQgY29uc3QgY2hhbmdlQ29sb3JGcm9tUGFsZXR0ZSA9IChjb2xvclNldCwgY29udGV4dCwgbW91c2VCdXR0b24pID0+IHtcbiAgaWYgKG1vdXNlQnV0dG9uID09PSAnbG1iJykge1xuICAgIGNvbG9yU2V0LmxtYiA9IGNvbnRleHQudmFsdWU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWxtYicpLnN0eWxlLnNldFByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJywgY29sb3JTZXQubG1iKTtcbiAgfSBlbHNlIGlmIChtb3VzZUJ1dHRvbiA9PT0gJ3JtYicpIHtcbiAgICBjb2xvclNldC5ybWIgPSBjb250ZXh0LnZhbHVlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1ybWInKS5zdHlsZS5zZXRQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicsIGNvbG9yU2V0LnJtYik7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ3VuZXhwZWN0ZWQgZXJyb3InKTtcbiAgfVxufTtcbiIsImNvbnN0IHJnYlRvSGV4ID0gKHJnYikgPT4ge1xuICBsZXQgaGV4ID0gTnVtYmVyKHJnYikudG9TdHJpbmcoMTYpO1xuICBpZiAoaGV4Lmxlbmd0aCA8IDIpIHtcbiAgICBoZXggPSBgMCR7aGV4fWA7XG4gIH1cblxuICByZXR1cm4gaGV4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKHIsIGcsIGIpID0+IHtcbiAgY29uc3QgcmVkID0gcmdiVG9IZXgocik7XG4gIGNvbnN0IGdyZWVuID0gcmdiVG9IZXgoZyk7XG4gIGNvbnN0IGJsdWUgPSByZ2JUb0hleChiKTtcblxuICByZXR1cm4gYCMke3JlZH0ke2dyZWVufSR7Ymx1ZX1gO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IChmdW5jKSA9PiB7XG4gIGxldCB0aW1lcjtcbiAgcmV0dXJuIGZ1bmN0aW9uIHNldERlYm91bmNlKGV2ZW50KSB7XG4gICAgaWYgKHRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIH1cbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuYywgMzAwLCBldmVudCk7XG4gIH07XG59O1xuIiwiaW1wb3J0IGZ1bGxDb2xvckhleCBmcm9tICcuL2NvbnZlcnRSR0J0b0hleCc7XG5cbmV4cG9ydCBkZWZhdWx0IChlLCBjdHgsIGNvbHVtbnMsIG1vdXNlQ29vcmRzLCBjYW52YXNSZXNpemVDb2VmZmljaWVudCwgcGl4ZWxTaXplLCBjb2xvclRvRmlsbFRlbXBsYXRlLCBjYW52YXNGcmFtZUNvZWZmaWNpZW50KSA9PiB7XG4gIHBpeGVsU2l6ZSA9IHBpeGVsU2l6ZSAqIGNhbnZhc0ZyYW1lQ29lZmZpY2llbnQ7XG4gIG1vdXNlQ29vcmRzLnggPSBlLm9mZnNldFggPT09IHVuZGVmaW5lZCA/IE1hdGguZmxvb3IoKGUubGF5ZXJYIC8gY2FudmFzUmVzaXplQ29lZmZpY2llbnQpIC8gcGl4ZWxTaXplKVxuICAgIDogTWF0aC5mbG9vcigoZS5vZmZzZXRYIC8gY2FudmFzUmVzaXplQ29lZmZpY2llbnQpIC8gcGl4ZWxTaXplKTtcbiAgbW91c2VDb29yZHMueSA9IGUub2Zmc2V0WSA9PT0gdW5kZWZpbmVkID8gTWF0aC5mbG9vcigoZS5sYXllclkgLyBjYW52YXNSZXNpemVDb2VmZmljaWVudCkgLyBwaXhlbFNpemUpXG4gICAgOiBNYXRoLmZsb29yKChlLm9mZnNldFkgLyBjYW52YXNSZXNpemVDb2VmZmljaWVudCkgLyBwaXhlbFNpemUpO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvclRvRmlsbFRlbXBsYXRlO1xuICBjdHguZmlsbFJlY3QobW91c2VDb29yZHMueCAqIHBpeGVsU2l6ZSwgbW91c2VDb29yZHMueSAqIHBpeGVsU2l6ZSwgcGl4ZWxTaXplLCBwaXhlbFNpemUpO1xuICBjb25zdCBpbnRlcm1lZGlhdGVDb2xvciA9IGNvbG9yVG9GaWxsVGVtcGxhdGUuc2xpY2UoMCwgLTEpLnNsaWNlKDQpLnNwbGl0KCcsICcpO1xuXG4gIGNvbHVtbnNbK21vdXNlQ29vcmRzLnhdWyttb3VzZUNvb3Jkcy55XSA9IGZ1bGxDb2xvckhleChpbnRlcm1lZGlhdGVDb2xvclswXSwgaW50ZXJtZWRpYXRlQ29sb3JbMV0sIGludGVybWVkaWF0ZUNvbG9yWzJdKTtcbn07XG4iLCJleHBvcnQgY29uc3Qgc3RhcnREcmF3U3Ryb2tlID0gKGUsIGN0eCwgY29sdW1ucywgbW91c2VDb29yZHMsIGNhbnZhc1Jlc2l6ZUNvZWZmaWNpZW50LCBwaXhlbFNpemUsIGNvbG9yVG9GaWxsVGVtcGxhdGUsIGNhbnZhc0ZyYW1lQ29lZmZpY2llbnQpID0+IHtcbiAgcGl4ZWxTaXplID0gcGl4ZWxTaXplICogY2FudmFzRnJhbWVDb2VmZmljaWVudDtcbiAgbW91c2VDb29yZHMueCA9IGUub2Zmc2V0WCA9PT0gdW5kZWZpbmVkID8gTWF0aC5mbG9vcigoZS5sYXllclggLyBjYW52YXNSZXNpemVDb2VmZmljaWVudCkgLyBwaXhlbFNpemUpXG4gICAgOiBNYXRoLmZsb29yKChlLm9mZnNldFggLyBjYW52YXNSZXNpemVDb2VmZmljaWVudCkgLyBwaXhlbFNpemUpO1xuICBtb3VzZUNvb3Jkcy55ID0gZS5vZmZzZXRZID09PSB1bmRlZmluZWQgPyBNYXRoLmZsb29yKChlLmxheWVyWSAvIGNhbnZhc1Jlc2l6ZUNvZWZmaWNpZW50KSAvIHBpeGVsU2l6ZSlcbiAgICA6IE1hdGguZmxvb3IoKGUub2Zmc2V0WSAvIGNhbnZhc1Jlc2l6ZUNvZWZmaWNpZW50KSAvIHBpeGVsU2l6ZSk7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbyhtb3VzZUNvb3Jkcy54ICogcGl4ZWxTaXplLCBtb3VzZUNvb3Jkcy55ICogcGl4ZWxTaXplKTtcblxuICByZXR1cm4gbW91c2VDb29yZHM7XG59O1xuXG5leHBvcnQgY29uc3QgbW92ZURyYXdTdHJva2UgPSAoZSwgY3R4LCBjb2x1bW5zLCBtb3VzZUNvb3JkcywgY2FudmFzUmVzaXplQ29lZmZpY2llbnQsIHBpeGVsU2l6ZSwgY29sb3JUb0ZpbGxUZW1wbGF0ZSwgY2FudmFzRnJhbWVDb2VmZmljaWVudCwgaW1hZ2VEYXRhLCBjdXJyZW50U3RhcnRDb29yZHMpID0+IHtcbiAgcGl4ZWxTaXplID0gcGl4ZWxTaXplICogY2FudmFzRnJhbWVDb2VmZmljaWVudDtcbiAgbW91c2VDb29yZHMueCA9IGUub2Zmc2V0WCA9PT0gdW5kZWZpbmVkID8gTWF0aC5mbG9vcigoZS5sYXllclggLyBjYW52YXNSZXNpemVDb2VmZmljaWVudCkgLyBwaXhlbFNpemUpXG4gICAgOiBNYXRoLmZsb29yKChlLm9mZnNldFggLyBjYW52YXNSZXNpemVDb2VmZmljaWVudCkgLyBwaXhlbFNpemUpO1xuICBtb3VzZUNvb3Jkcy55ID0gZS5vZmZzZXRZID09PSB1bmRlZmluZWQgPyBNYXRoLmZsb29yKChlLmxheWVyWSAvIGNhbnZhc1Jlc2l6ZUNvZWZmaWNpZW50KSAvIHBpeGVsU2l6ZSlcbiAgICA6IE1hdGguZmxvb3IoKGUub2Zmc2V0WSAvIGNhbnZhc1Jlc2l6ZUNvZWZmaWNpZW50KSAvIHBpeGVsU2l6ZSk7XG5cbiAgY3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xuICBjdHgubGluZVdpZHRoID0gcGl4ZWxTaXplO1xuICBjdHgubW92ZVRvKGN1cnJlbnRTdGFydENvb3Jkcy54ICogcGl4ZWxTaXplLCBjdXJyZW50U3RhcnRDb29yZHMueSAqIHBpeGVsU2l6ZSk7XG4gIGN0eC5saW5lVG8obW91c2VDb29yZHMueCAqIHBpeGVsU2l6ZSwgbW91c2VDb29yZHMueSAqIHBpeGVsU2l6ZSk7XG4gIGN0eC5zdHJva2UoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdG9wRHJhd1N0cm9rZSA9IChlLCBjdHgsIGNvbHVtbnMsIG1vdXNlQ29vcmRzLCBjYW52YXNSZXNpemVDb2VmZmljaWVudCwgcGl4ZWxTaXplLCBjb2xvclRvRmlsbFRlbXBsYXRlLCBjYW52YXNGcmFtZUNvZWZmaWNpZW50KSA9PiB7XG4gIHBpeGVsU2l6ZSA9IHBpeGVsU2l6ZSAqIGNhbnZhc0ZyYW1lQ29lZmZpY2llbnQ7XG4gIG1vdXNlQ29vcmRzLnggPSBlLm9mZnNldFggPT09IHVuZGVmaW5lZCA/IE1hdGguZmxvb3IoKGUubGF5ZXJYIC8gY2FudmFzUmVzaXplQ29lZmZpY2llbnQpIC8gcGl4ZWxTaXplKVxuICAgIDogTWF0aC5mbG9vcigoZS5vZmZzZXRYIC8gY2FudmFzUmVzaXplQ29lZmZpY2llbnQpIC8gcGl4ZWxTaXplKTtcbiAgbW91c2VDb29yZHMueSA9IGUub2Zmc2V0WSA9PT0gdW5kZWZpbmVkID8gTWF0aC5mbG9vcigoZS5sYXllclkgLyBjYW52YXNSZXNpemVDb2VmZmljaWVudCkgLyBwaXhlbFNpemUpXG4gICAgOiBNYXRoLmZsb29yKChlLm9mZnNldFkgLyBjYW52YXNSZXNpemVDb2VmZmljaWVudCkgLyBwaXhlbFNpemUpO1xuXG4gIGN0eC5saW5lV2lkdGggPSBwaXhlbFNpemU7XG4gIGN0eC5saW5lVG8obW91c2VDb29yZHMueCAqIHBpeGVsU2l6ZSwgbW91c2VDb29yZHMueSAqIHBpeGVsU2l6ZSk7XG4gIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yVG9GaWxsVGVtcGxhdGU7XG4gIGN0eC5zdHJva2UoKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgY2FudmFzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29yay1hcmVhLWNhbnZhcy1ibG9jaycpO1xuICBjb25zdCBjYW52YXNXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmstYXJlYS1jYW52YXMtYmxvY2tfX2NhbnZhcy13cmFwcGVyJyk7XG4gIGNvbnN0IGNhbnZhc0hlaWdodCA9IGNhbnZhc0Jsb2NrLm9mZnNldEhlaWdodDtcbiAgY29uc3QgY2FudmFzV2lkdGggPSBjYW52YXNCbG9jay5vZmZzZXRXaWR0aDtcbiAgY29uc3QgY2FudmFzU2l6ZSA9IGNhbnZhc1dpZHRoIDwgY2FudmFzSGVpZ2h0ID8gY2FudmFzV2lkdGggOiBjYW52YXNIZWlnaHQ7XG4gIGNhbnZhc1dyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gJycuY29uY2F0KGNhbnZhc1NpemUsICdweCcpO1xuICBjYW52YXNXcmFwcGVyLnN0eWxlLndpZHRoID0gJycuY29uY2F0KGNhbnZhc1NpemUsICdweCcpO1xuXG4gIHJldHVybiBjYW52YXNTaXplO1xufTtcbiIsImltcG9ydCBmdWxsQ29sb3JIZXggZnJvbSAnLi9jb252ZXJ0UkdCdG9IZXgnO1xuXG5leHBvcnQgZGVmYXVsdCAoZSwgY3R4LCBtb3VzZUNvb3JkcywgZGVmYXVsdENvbG9yLCBjYW52YXNSZXNpemVDb2VmZmljaWVudCkgPT4ge1xuICBsZXQgcGl4ZWxDb2xvcjtcbiAgbW91c2VDb29yZHMueCA9IGUub2Zmc2V0WCA9PT0gdW5kZWZpbmVkID8gTWF0aC5mbG9vcihlLmxheWVyWCAvIGNhbnZhc1Jlc2l6ZUNvZWZmaWNpZW50KSA6IE1hdGguZmxvb3IoZS5vZmZzZXRYIC8gY2FudmFzUmVzaXplQ29lZmZpY2llbnQpO1xuICBtb3VzZUNvb3Jkcy55ID0gZS5vZmZzZXRZID09PSB1bmRlZmluZWQgPyBNYXRoLmZsb29yKGUubGF5ZXJZIC8gY2FudmFzUmVzaXplQ29lZmZpY2llbnQpIDogTWF0aC5mbG9vcihlLm9mZnNldFkgLyBjYW52YXNSZXNpemVDb2VmZmljaWVudCk7XG5cbiAgY29uc3QgcCA9IGN0eC5nZXRJbWFnZURhdGEobW91c2VDb29yZHMueCwgbW91c2VDb29yZHMueSwgMSwgMSkuZGF0YTtcbiAgaWYgKHBbMF0gPT09IDAgJiYgcFsxXSA9PT0gMCAmJiBwWzJdID09PSAwICYmIHBbM10gPT09IDApIHtcbiAgICBwaXhlbENvbG9yID0gZGVmYXVsdENvbG9yO1xuICB9IGVsc2Uge1xuICAgIHBpeGVsQ29sb3IgPSBmdWxsQ29sb3JIZXgocFswXSwgcFsxXSwgcFsyXSk7XG4gIH1cblxuICByZXR1cm4gcGl4ZWxDb2xvcjtcbn07XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==