// Функція, яка приймає масив та повертає число, яке є сумою елементів масиву:
function sumArray(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
  }
  
  // Функція, яка приймає масив та повертає відфільтрований масив, що містить тільки позитивні числа:
  function filterPositive(array) {
    return array.filter((num) => num > 0);
  }
  
  // Функція, яка приймає масив та повертає відфільтрований масив, що містить тільки негативні числа:
  function filterNegative(array) {
    return array.filter((num) => num < 0);
  }
  
  module.exports = { sumArray, filterPositive, filterNegative };
  