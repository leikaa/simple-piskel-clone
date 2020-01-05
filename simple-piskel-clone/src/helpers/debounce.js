export default (func) => {
  let timer;
  return function setDebounce(event) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(func, 300, event);
  };
};
