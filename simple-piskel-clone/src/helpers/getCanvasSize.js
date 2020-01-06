export default () => {
  const canvasBlock = document.querySelector('.work-area-canvas-block');
  const canvasWrapper = document.querySelector('.work-area-canvas-block__canvas-wrapper');
  const canvasHeight = canvasBlock.offsetHeight;
  const canvasWidth = canvasBlock.offsetWidth;
  const canvasSize = canvasWidth < canvasHeight ? canvasWidth : canvasHeight;
  canvasWrapper.style.height = ''.concat(canvasSize, 'px');
  canvasWrapper.style.width = ''.concat(canvasSize, 'px');

  return canvasSize;
};
