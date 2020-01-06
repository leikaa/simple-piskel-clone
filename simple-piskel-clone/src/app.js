import './screens/canvas/style.scss';
import getCanvasSize from './helpers/getCanvasSize';
import debounce from './helpers/debounce';
import changeToolOnClick from './helpers/changeToolOnClick';
import changePixelSizeOnClick from './helpers/changePixelSizeOnClick';
import changeCanvasSizeOnClick from './helpers/changeCanvasSizeOnClick';
import setInitialCanvasGrid from './components/setInitialCanvasGrid';
import drawCurrentPixel from './helpers/drawPixel';
import { getLmbColor, getRmbColor, swapColors } from './helpers/colorsHelper';

window.onload = () => {
  let columns = [];
  let tool = 'pencil';
  let pixelSize = '1';
  let canvasSize = '32';
  let draw = false;
  const canvasFrameSize = '128';
  const ulFrameList = document.querySelector('.work-area-left-frame-block-list');
  const canvas = document.querySelector('.work-area-canvas-block__canvas');
  const ctx = canvas.getContext('2d');
  const mouseCoords = { x: 0, y: 0 };

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
      console.log(tool);
    });
  });

  document.querySelectorAll('.work-area-right-block__resize-btns-item').forEach((value) => {
    value.addEventListener('click', function onCanvasSizeItemClick() {
      canvasSize = changeCanvasSizeOnClick(this);
      canvasFrameCoefficient = getCanvasFrameCoefficient(canvasSize, canvasFrameSize);
    });
  });

  // add additional frames
  document.querySelector('.work-area-left-frame-block__add-frame').addEventListener('click', () => {
    const liAdditionalFrame = document.createElement('li');
    liAdditionalFrame.className = 'work-area-left-frame-block-list__item';
    ulFrameList.appendChild(liAdditionalFrame);
  });

  // colors section
  document.querySelectorAll('.work-area-left-panel-block-colors__item').forEach((value) => {
    value.addEventListener('contextmenu', function onColorItemClick(e) {
      e.preventDefault();
      getRmbColor(this, colorToFillTemplate, colorSet);
    });
  });

  document.querySelectorAll('.work-area-left-panel-block-colors__item').forEach((value) => {
    value.addEventListener('click', function onColorItemClick() {
      getLmbColor(this, colorToFillTemplate, colorSet);
    });
  });

  document.querySelector('.work-area-left-panel-block-colors__swap-item').addEventListener('click', () => {
    swapColors(colorSet);
  });

  // draw according to tools
  const drawPixel = (e, colorToFillTemplate) => {
    drawCurrentPixel(e, ctx, columns, mouseCoords, canvasResizeCoefficient, pixelSize, colorToFillTemplate, canvasFrameCoefficient);
  };

  canvas.addEventListener('click', (e) => {
    colorToFillTemplate = colorSet.lmb;
    if (tool === 'pencil') {
      drawPixel(e, colorToFillTemplate);
    }
  });

  canvas.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    colorToFillTemplate = colorSet.rmb;
    if (tool === 'pencil') {
      drawPixel(e, colorToFillTemplate);
    }
  });

  canvas.addEventListener('mousedown', () => {
    if (tool === 'pencil') {
      draw = true;
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
  });

  canvas.addEventListener('mouseup', () => {
    if (tool === 'pencil') {
      draw = false;
    }
  });
};
