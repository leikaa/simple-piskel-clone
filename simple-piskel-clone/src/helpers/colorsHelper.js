export const getLmbColor = (context, colorToFillTemplate, colorSet) => {
  colorToFillTemplate = window.getComputedStyle(context).getPropertyValue('background-color');
  colorSet.lmb = colorToFillTemplate;
  document.querySelector('.js-lmb').style.setProperty('background-color', colorSet.lmb);
};

export const getRmbColor = (context, colorToFillTemplate, colorSet) => {
  colorToFillTemplate = window.getComputedStyle(context).getPropertyValue('background-color');
  colorSet.rmb = colorToFillTemplate;
  document.querySelector('.js-rmb').style.setProperty('background-color', colorSet.rmb);
};

export const swapColors = (colorSet) => {
  const intermediateColor = window.getComputedStyle(document.querySelector('.js-lmb')).getPropertyValue('background-color');

  colorSet.lmb = window.getComputedStyle(document.querySelector('.js-rmb')).getPropertyValue('background-color');
  document.querySelector('.js-lmb').style.setProperty('background-color', colorSet.lmb);

  colorSet.rmb = intermediateColor;
  document.querySelector('.js-rmb').style.setProperty('background-color', colorSet.rmb);
};
