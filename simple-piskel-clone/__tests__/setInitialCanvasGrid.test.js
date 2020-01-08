import setInitialCanvasGrid from '../src/components/setInitialCanvasGrid';

test('Should return canvas grid', () => {
    expect(setInitialCanvasGrid).toBeDefined();
});

test('Should return set initial grid function', () => {
    expect(setInitialCanvasGrid).toBeInstanceOf(Function);
});
