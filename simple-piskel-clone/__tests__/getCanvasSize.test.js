import getCanvasSize from '../src/helpers/getCanvasSize';

test('Should return canvas size', () => {
    expect(getCanvasSize).toBeDefined();
});

test('Should return get canvas size function', () => {
    expect(getCanvasSize).toBeInstanceOf(Function);
});
