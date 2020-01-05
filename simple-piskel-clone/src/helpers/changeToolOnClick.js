export default (value) => {
  document.querySelectorAll('.work-area-left-panel-block-tools__item').forEach((val) => {
    val.classList.remove('selected');
  });
  value.classList.add('selected');
  return value.getAttribute('data-tool');
};
