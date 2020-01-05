import './screens/canvas/style.scss';
import getCanvasSize from './helpers/getCanvasSize';
import debounce from './helpers/debounce';
import changeToolOnClick from './helpers/changeToolOnClick';
import changePixelSizeOnClick from './helpers/changePixelSizeOnClick';
// import setInitialCanvasGrid from './components/setInitialCanvasGrid';

let tool = 'pencil';
let pixelSize = '1';

window.onload = () => {
  const ulFrameList = document.querySelector('.work-area-left-frame-block-list');
  getCanvasSize();

  window.addEventListener('resize', debounce(() => {
    getCanvasSize();
  }));

  document.querySelectorAll('.work-area-left-panel-block-size__item').forEach((value) => {
    value.addEventListener('click', function onPixelSizeItemClick() {
      pixelSize = changePixelSizeOnClick(this);
      console.log(pixelSize);
    });
  });

  document.querySelectorAll('.work-area-left-panel-block-tools__item').forEach((value) => {
    value.addEventListener('click', function onToolsItemClick() {
      tool = changeToolOnClick(this);
      console.log(tool);
    });
  });

  document.querySelector('.work-area-left-frame-block__add-frame').addEventListener('click', () => {
    const liAdditionalFrame = document.createElement('li');
    liAdditionalFrame.className = 'work-area-left-frame-block-list__item';
    ulFrameList.appendChild(liAdditionalFrame);
  });
};
