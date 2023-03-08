// Функція для додавання двох чисел
function add(a, b) {
    return a + b;
  }
  
  // Функція для віднімання другого числа від першого
  function subtract(a, b) {
    return a - b;
  }
  
  // Функція для множення двох чисел
  function multiply(a, b) {
    return a * b;
  }
  
  // Функція для ділення першого числа на друге
  function divide(a, b) {
    if (b === 0) {
      return "Неможливо поділити на нуль";
    } else {
      return a / b;
    }
  }
  module.exports = { add, subtract, multiply, divide };