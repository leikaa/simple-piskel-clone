import fullColorHex from './convertRGBtoHex';

export default (e, ctx, columns, mouseCoords, canvasResizeCoefficient, pixelSize, colorToFillTemplate, canvasFrameCoefficient) => {
  pixelSize = pixelSize * canvasFrameCoefficient;
  mouseCoords.x = e.offsetX === undefined ? Math.floor((e.layerX / canvasResizeCoefficient) / pixelSize)
    : Math.floor((e.offsetX / canvasResizeCoefficient) / pixelSize);
  mouseCoords.y = e.offsetY === undefined ? Math.floor((e.layerY / canvasResizeCoefficient) / pixelSize)
    : Math.floor((e.offsetY / canvasResizeCoefficient) / pixelSize);

  ctx.fillStyle = colorToFillTemplate;
  ctx.fillRect(mouseCoords.x * pixelSize, mouseCoords.y * pixelSize, pixelSize, pixelSize);
  const intermediateColor = colorToFillTemplate.slice(0, -1).slice(4).split(', ');

  columns[+mouseCoords.x][+mouseCoords.y] = fullColorHex(intermediateColor[0], intermediateColor[1], intermediateColor[2]);
};
