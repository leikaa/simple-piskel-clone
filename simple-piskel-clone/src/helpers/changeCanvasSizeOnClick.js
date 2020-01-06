export default (value) => {
  document.querySelectorAll('.work-area-right-block__resize-btns-item').forEach((val) => {
    val.classList.remove('selected');
  });
  value.classList.add('selected');
  return value.getAttribute('data-size');
};
