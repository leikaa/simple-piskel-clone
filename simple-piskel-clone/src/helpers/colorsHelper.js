import fullColorHex from './convertRGBtoHex';

const getColor = (context, mouseButton) => {
  const intermediateColor = window.getComputedStyle(context).getPropertyValue('background-color').slice(0, -1).slice(4)
    .split(', ');
  const colorPickerInput = document.querySelector(`.js-${mouseButton}-color-picker`);
  colorPickerInput.focus();
  colorPickerInput.value = fullColorHex(intermediateColor[0], intermediateColor[1], intermediateColor[2]);
  colorPickerInput.click();

  return colorPickerInput.value;
};

export const openColorPalette = (context, mouseButton) => {
  getColor(context, mouseButton);
};

export const swapColors = (colorSet) => {
  const intermediateColor = window.getComputedStyle(document.querySelector('.js-lmb')).getPropertyValue('background-color');

  colorSet.lmb = window.getComputedStyle(document.querySelector('.js-rmb')).getPropertyValue('background-color');
  document.querySelector('.js-lmb').style.setProperty('background-color', colorSet.lmb);

  colorSet.rmb = intermediateColor;
  document.querySelector('.js-rmb').style.setProperty('background-color', colorSet.rmb);
};

export const changeColorFromPalette = (colorSet, context, mouseButton) => {
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
