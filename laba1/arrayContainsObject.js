
// Чи містить масив вказаний об’єкт

function arrayContainsObject(arr, obj) {
    return arr.some(item => JSON.stringify(item) === JSON.stringify(obj));
  }

// Чи містить текстовий фрагмент вказане слово

function stringContainsWord(str, word) {
    return str.toLowerCase().split(' ').includes(word.toLowerCase());
  }
  
  module.exports = {arrayContainsObject, stringContainsWord}; 
  