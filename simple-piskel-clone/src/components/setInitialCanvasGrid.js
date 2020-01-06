export default (columns, defaultColor, pixelSize, canvasFrameSize) => {
  columns = [];
  const columnsCount = canvasFrameSize / pixelSize;
  const rowsCount = canvasFrameSize / pixelSize;

  for (let i = 0; i < columnsCount; i += 1) {
    const row = [];
    for (let j = 0; j < rowsCount; j += 1) {
      row.push(defaultColor);
    }
    columns.push(row);
  }

  return columns;
};
