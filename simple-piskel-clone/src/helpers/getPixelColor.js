import fullColorHex from './convertRGBtoHex';

export default (e, ctx, mouseCoords, defaultColor, canvasResizeCoefficient) => {
  let pixelColor;
  mouseCoords.x = e.offsetX === undefined ? Math.floor(e.layerX / canvasResizeCoefficient) : Math.floor(e.offsetX / canvasResizeCoefficient);
  mouseCoords.y = e.offsetY === undefined ? Math.floor(e.layerY / canvasResizeCoefficient) : Math.floor(e.offsetY / canvasResizeCoefficient);

  const p = ctx.getImageData(mouseCoords.x, mouseCoords.y, 1, 1).data;
  if (p[0] === 0 && p[1] === 0 && p[2] === 0 && p[3] === 0) {
    pixelColor = defaultColor;
  } else {
    pixelColor = fullColorHex(p[0], p[1], p[2]);
  }

  return pixelColor;
};
