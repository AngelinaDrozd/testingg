const { add, subtract, multiply, divide } = require('./math_operations');

// Тести для функції add()
test('додавання двох позитивних чисел', () => {
  expect(add(2, 3)).toBe(5);
});

test('додавання від’ємного та позитивного числа', () => {
  expect(add(-2, 3)).toBe(1);
});

// Тести для функції subtract()
test('віднімання двох позитивних чисел', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('віднімання від’ємного числа з позитивним', () => {
  expect(subtract(2, -3)).toBe(5);
});

// Тести для функції multiply()
test('множення двох позитивних чисел', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('множення від’ємного та дробового числа', () => {
  expect(multiply(-2, 0.5)).toBe(-1);
});

// Тести для функції divide()
test('ділення двох позитивних чисел', () => {
  expect(divide(6, 2)).toBe(3);
});

test('ділення на дробове число', () => {
  expect(divide(5, 0.5)).toBe(10);
});

test('ділення на 0', () => {
  expect(divide(4, 0)).toBe('Неможливо поділити на нуль');
});
