const mathOperations = require('./math_operations');

describe('параметризовані тести додавання', () => {
  test.each([
    [2, 3, 5],
    [5, 2, 7],
    [-2, 3, 1],
  ])('додати %i до %i отримуємо %i', (a, b, expected) => {
    expect(mathOperations.add(a, b)).toBe(expected);
  });
});

describe('параметризовані тести віднімання', () => {
  test.each([
    [5, 2, 3],
    [2, 5, -3],
    [-2, -3, 1],
  ])('відняти %i від %i отримуємо %i', (a, b, expected) => {
    expect(mathOperations.subtract(a, b)).toBe(expected);
  });
});

describe('параметризовані тести множення', () => {
  test.each([
    [2, 3, 6],
    [5, -2, -10],
    [-2, -3, 6],
  ])('помножити %i на %i отримуємо %i', (a, b, expected) => {
    expect(mathOperations.multiply(a, b)).toBe(expected);
  });
});

describe('параметризовані тести ділення', () => {
  test.each([
    [6, 3, 2],
    [6, -3, -2],
    [0, 6, 0],
    [2.5, 5, 0.5],
    [-2, 4, -0.5],
    [-10, -2.5, 4],
  ])('ділимо %i на %i отримуємо %i', (a, b, expected) => {
    expect(mathOperations.divide(a, b)).toBe(expected);
  });
});
