import './screens/canvas/style.scss';
import getCanvasSize from './helpers/getCanvasSize';
import debounce from './helpers/debounce';
import changeToolOnClick from './helpers/changeToolOnClick';
import changePixelSizeOnClick from './helpers/changePixelSizeOnClick';
import changeCanvasSizeOnClick from './helpers/changeCanvasSizeOnClick';
import drawCurrentPixel from './helpers/drawPixel';
import { startDrawStroke, moveDrawStroke, stopDrawStroke } from './helpers/drawStrokeLine';
import clearCurrentPixel from './helpers/clearCurrentPixel';
import getPixelColor from './helpers/getPixelColor';
import { openColorPalette, swapColors, changeColorFromPalette } from './helpers/colorsHelper';
import setInitialCanvasGrid from './components/setInitialCanvasGrid';

window.onload = () => {
  let columns = [];
  let tool = 'pencil';
  let pixelSize = '1';
  let canvasSize = '32';
  let draw = false;
  let clear = false;
  const canvasFrameSize = '128';
  const defaultColor = '#c4c4c4';
  const ulFrameList = document.querySelector('.work-area-left-frame-block-list');
  const canvas = document.querySelector('.work-area-canvas-block__canvas');
  const ctx = canvas.getContext('2d');
  const mouseCoords = { x: 0, y: 0 };
  let currentStartCoords = { x: 0, y: 0 };
  let mouseButton = 'lmb';
  let imageData = '';

  const LMB_KEYCODE = 1;
  const RMB_KEYCODE = 3;

  const colorSet = {
    lmb: window.getComputedStyle(document.querySelector('.js-lmb')).getPropertyValue('background-color'),
    rmb: window.getComputedStyle(document.querySelector('.js-rmb')).getPropertyValue('background-color'),
  };
  let colorToFillTemplate = colorSet.lmb;

  // set initial canvas grid
  columns = setInitialCanvasGrid(columns, colorSet.lmb, pixelSize, canvasFrameSize);

  // get main canvas size according to window resize and choosen frame size options
  let currentCanvasResizedSize = getCanvasSize();
  const getCanvasResizeCoefficient = (currentCanvasResizedSize, canvasFrameSize) => currentCanvasResizedSize / canvasFrameSize;
  let canvasResizeCoefficient = getCanvasResizeCoefficient(currentCanvasResizedSize, canvasFrameSize);

  const getCanvasFrameCoefficient = (canvasSize, canvasFrameSize) => canvasFrameSize / canvasSize;
  let canvasFrameCoefficient = getCanvasFrameCoefficient(canvasSize, canvasFrameSize);

  window.addEventListener('resize', debounce(() => {
    currentCanvasResizedSize = getCanvasSize();
    canvasResizeCoefficient = getCanvasResizeCoefficient(currentCanvasResizedSize, canvasFrameSize);
  }));

  // set active tools / canvas size / pixel size
  document.querySelectorAll('.work-area-left-panel-block-size__item').forEach((value) => {
    value.addEventListener('click', function onPixelSizeItemClick() {
      pixelSize = changePixelSizeOnClick(this);
    });
  });

  document.querySelectorAll('.work-area-left-panel-block-tools__item').forEach((value) => {
    value.addEventListener('click', function onToolsItemClick() {
      tool = changeToolOnClick(this);
    });
  });

  document.querySelectorAll('.work-area-right-block__resize-btns-item').forEach((value) => {
    value.addEventListener('click', function onCanvasSizeItemClick() {
      canvasSize = changeCanvasSizeOnClick(this);
      canvasFrameCoefficient = getCanvasFrameCoefficient(canvasSize, canvasFrameSize);
    });
  });

  // add additional frames
  document.querySelector('.js-add-frame').addEventListener('click', () => {
    const liAdditionalFrame = document.createElement('li');
    liAdditionalFrame.className = 'work-area-left-frame-block-list__item';
    ulFrameList.appendChild(liAdditionalFrame);
  });

  // colors section
  document.querySelector('.js-lmb').addEventListener('click', function onColorItemClick() {
    mouseButton = this.getAttribute('data-button');
    openColorPalette(this, mouseButton);
  });

  document.querySelector('.js-lmb-color-picker').addEventListener('change', function onColorChange() {
    changeColorFromPalette(colorSet, this, mouseButton);
  });

  document.querySelector('.js-rmb').addEventListener('click', function onColorItemClick() {
    mouseButton = this.getAttribute('data-button');
    openColorPalette(this, mouseButton);
  });

  document.querySelector('.js-rmb-color-picker').addEventListener('change', function onColorChange() {
    changeColorFromPalette(colorSet, this, mouseButton);
  });

  document.querySelector('.js-swap').addEventListener('click', () => {
    swapColors(colorSet);
  });

  // draw according to tools
  const drawPixel = (e, colorToFillTemplate) => {
    drawCurrentPixel(e, ctx, columns, mouseCoords, canvasResizeCoefficient, pixelSize, colorToFillTemplate, canvasFrameCoefficient);
  };

  const startDrawStrokeLine = (e, colorToFillTemplate) => {
    currentStartCoords = startDrawStroke(e, ctx, columns, mouseCoords, canvasResizeCoefficient, pixelSize, colorToFillTemplate, canvasFrameCoefficient);
    imageData = ctx.getImageData(0, 0, currentCanvasResizedSize, currentCanvasResizedSize);
  };

  const moveDrawStrokeLine = (e, colorToFillTemplate, imageData, currentStartCoords) => {
    moveDrawStroke(e, ctx, columns, mouseCoords, canvasResizeCoefficient, pixelSize, colorToFillTemplate, canvasFrameCoefficient, imageData, currentStartCoords);
  };

  const stopDrawStrokeLine = (e, colorToFillTemplate) => {
    stopDrawStroke(e, ctx, columns, mouseCoords, canvasResizeCoefficient, pixelSize, colorToFillTemplate, canvasFrameCoefficient);
  };

  const clearPixel = (e) => {
    clearCurrentPixel(e, ctx, columns, mouseCoords, canvasResizeCoefficient, pixelSize, canvasFrameCoefficient);
  };

  canvas.addEventListener('click', (e) => {
    colorToFillTemplate = colorSet.lmb;
    if (tool === 'pencil') {
      drawPixel(e, colorToFillTemplate);
    }
    if (tool === 'picker') {
      const currentPixelColor = getPixelColor(e, ctx, mouseCoords, defaultColor, canvasResizeCoefficient);
      colorSet.lmb = currentPixelColor;
      document.querySelector('.js-lmb').style.setProperty('background-color', currentPixelColor);
    }
    if (tool === 'eraser') {
      clearPixel(e);
    }
  });

  canvas.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    colorToFillTemplate = colorSet.rmb;
    if (tool === 'pencil') {
      drawPixel(e, colorToFillTemplate);
    }
    if (tool === 'picker') {
      const currentPixelColor = getPixelColor(e, ctx, mouseCoords, defaultColor, canvasResizeCoefficient);
      colorSet.rmb = currentPixelColor;
      document.querySelector('.js-rmb').style.setProperty('background-color', currentPixelColor);
    }
  });

  canvas.addEventListener('mousedown', (e) => {
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

  canvas.addEventListener('mousemove', (e) => {
    if (e.which === LMB_KEYCODE) {
      colorToFillTemplate = colorSet.lmb;
    } else if (e.which === RMB_KEYCODE) {
      colorToFillTemplate = colorSet.rmb;
    }
    if (tool === 'pencil' && draw === true) {
      drawPixel(e, colorToFillTemplate);
    }
    if (tool === 'stroke' && draw === true) {
      // TODO придумать как сохранять первоначальные координаты и состояние канваса
      // moveDrawStrokeLine(e, colorToFillTemplate, imageData, currentStartCoords);
    }
    if (tool === 'eraser' && clear === true) {
      clearPixel(e);
    }
  });

  canvas.addEventListener('mouseup', (e) => {
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
