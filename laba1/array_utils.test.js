const { sumArray, filterPositive, filterNegative } = require('./array_utils');

describe('sumArray', () => {
  let arr;

  beforeAll(() => {
    arr = [1, 2, 3, 4, 5];
  });

  test('додавання всіх додаткових значень', () => {
    expect(sumArray(arr)).toBe(15);
  });

  test('додавання разом з негативними значеннями', () => {
    arr = [-1, 2, -3, 4, -5];
    expect(sumArray(arr)).toBe(-3);
  });

});

describe('filterPositive', () => {
  let arr;

  beforeAll(() => {
    arr = [-1, 2, -3, 4, -5];
  });

  test('обираємо лише додаткові значення', () => {
    expect(filterPositive(arr)).toEqual([2, 4]);
  });

  test('повернення, якщо всі значення в масиві негативні', () => {
    arr = [-1, -2, -3, -4, -5];
    expect(filterPositive(arr)).toEqual([]);
  });

});

describe('negativeArray', () => {
  let arr;

  beforeAll(() => {
    arr = [-1, 2, -3, 4, -5];
  });

  test('вивід без позитивних значень', () => {
    expect(filterNegative(arr)).toEqual([-1, -3, -5]);
  });

  test('повернення, якщо всі значення в масиві позитивні', () => {
    arr = [1, 2, 3, 4, 5];
    expect(filterNegative(arr)).toEqual([]);
  });

});
