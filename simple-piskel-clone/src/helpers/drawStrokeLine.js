export const startDrawStroke = (e, ctx, columns, mouseCoords, canvasResizeCoefficient, pixelSize, colorToFillTemplate, canvasFrameCoefficient) => {
  pixelSize = pixelSize * canvasFrameCoefficient;
  mouseCoords.x = e.offsetX === undefined ? Math.floor((e.layerX / canvasResizeCoefficient) / pixelSize)
    : Math.floor((e.offsetX / canvasResizeCoefficient) / pixelSize);
  mouseCoords.y = e.offsetY === undefined ? Math.floor((e.layerY / canvasResizeCoefficient) / pixelSize)
    : Math.floor((e.offsetY / canvasResizeCoefficient) / pixelSize);
  ctx.beginPath();
  ctx.moveTo(mouseCoords.x * pixelSize, mouseCoords.y * pixelSize);

  return mouseCoords;
};

export const moveDrawStroke = (e, ctx, columns, mouseCoords, canvasResizeCoefficient, pixelSize, colorToFillTemplate, canvasFrameCoefficient, imageData, currentStartCoords) => {
  pixelSize = pixelSize * canvasFrameCoefficient;
  mouseCoords.x = e.offsetX === undefined ? Math.floor((e.layerX / canvasResizeCoefficient) / pixelSize)
    : Math.floor((e.offsetX / canvasResizeCoefficient) / pixelSize);
  mouseCoords.y = e.offsetY === undefined ? Math.floor((e.layerY / canvasResizeCoefficient) / pixelSize)
    : Math.floor((e.offsetY / canvasResizeCoefficient) / pixelSize);

  ctx.putImageData(imageData, 0, 0);
  ctx.lineWidth = pixelSize;
  ctx.moveTo(currentStartCoords.x * pixelSize, currentStartCoords.y * pixelSize);
  ctx.lineTo(mouseCoords.x * pixelSize, mouseCoords.y * pixelSize);
  ctx.stroke();
};

export const stopDrawStroke = (e, ctx, columns, mouseCoords, canvasResizeCoefficient, pixelSize, colorToFillTemplate, canvasFrameCoefficient) => {
  pixelSize = pixelSize * canvasFrameCoefficient;
  mouseCoords.x = e.offsetX === undefined ? Math.floor((e.layerX / canvasResizeCoefficient) / pixelSize)
    : Math.floor((e.offsetX / canvasResizeCoefficient) / pixelSize);
  mouseCoords.y = e.offsetY === undefined ? Math.floor((e.layerY / canvasResizeCoefficient) / pixelSize)
    : Math.floor((e.offsetY / canvasResizeCoefficient) / pixelSize);

  ctx.lineWidth = pixelSize;
  ctx.lineTo(mouseCoords.x * pixelSize, mouseCoords.y * pixelSize);
  ctx.stroke();
  ctx.closePath();
};
