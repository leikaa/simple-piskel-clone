import './screens/canvas/style.scss';

window.onload = () => {
  const canvasBlock = document.querySelector('.work-area-canvas-block');
  const canvasWrapper = document.querySelector('.work-area-canvas-block__canvas-wrapper');

  const debounce = (func) => {
    let timer;
    return function setDebounce(event) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(func, 300, event);
    };
  };

  function getCanvasSize() {
    const canvasHeight = canvasBlock.offsetHeight;
    const canvasWidth = canvasBlock.offsetWidth;
    const canvasSize = canvasWidth < canvasHeight ? canvasWidth : canvasHeight;
    canvasWrapper.style.height = ''.concat(canvasSize, 'px');
    canvasWrapper.style.width = ''.concat(canvasSize, 'px');
  }

  getCanvasSize();

  window.addEventListener('resize', debounce(() => {
    getCanvasSize();
  }));
};
