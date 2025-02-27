// Собственная реализация метода some
function mySome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        return true;
      }
    }
    return false;
  }
  
  // Собственная реализация метода reduce
  function myReduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
  
    for (let i = startIndex; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
  }
  
  // Собственная реализация метода map
  function myMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }
  
  // Примеры использования
  const numbers = [1, 2, 3, 4, 5];
  
  console.log(mySome(numbers, num => num > 3)); // true
  console.log(myReduce(numbers, (sum, num) => sum + num, 0)); // 15
  console.log(myMap(numbers, num => num * 2)); // [2, 4, 6, 8, 10]
  