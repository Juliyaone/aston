// 4.1 Массивы:

// - Создайте массив чисел и найдите его сумму разными способами.

// Создание массива с помощью литерала:
const numbers = [1, 2, 3, 4, 5];

// Нахождение суммы с помощью цикла:

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum); // Вывод: 15

// Использование метода reduce():
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Вывод: 15

// Применение оператора spread (…):
const arraySum = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
};
const total = arraySum([...numbers]);
console.log(total); // Вывод: 15

// Нахождение суммы в функциональном стиле:
function sumArray(array) {
  if (!Array.isArray(array)) {
    throw new Error("Ошибка: не массив");
  } else {
    return array.reduce((acc, curr) => acc + curr, 0);
  }
}
const result = sumArray([1, 2, 3, 4, 5]);
console.log(result); // Вывод: 15

// - Создайте массив строк и объедините их в одну строку разными способами.

// Создание массива строк с помощью литерала:
const fruits = ["яблоко", "банан", "вишня"];

// Объединение строк с помощью метода join():

console.log(fruits.join(" ")); // Вывод: «яблоко банан вишня»

// Использование цикла for:
let fullString = "";
for (let i = 0; i < fruits.length; i++) {
  fullString += fruits[i] + " ";
}
console.log(fullString); // Вывод: «яблоко банан вишня »

// Применение оператора spread (…):
const combinedString = (arr) => {
  return arr.join("");
};
const result = combinedString([...fruits]);
console.log(result); // Вывод: «яблокобананвишня»

// Объединение строк в функциональном стиле:
function combineStrings(array) {
  if (!Array.isArray(array)) {
    throw new Error("Ошибка: не массив");
  } else {
    return array.join("");
  }
}
const output = combineStrings(["яблоко", "банан", "вишня"]);
console.log(output); // Вывод: «яблокобананвишня»

// - Найдите максимальный и минимальный элементы в массиве чисел разными способами.
// Использование методов Math.max() и Math.min():
const numbers = [5, 3, 8, 2, 9];
let maxNumber = Math.max(...numbers);
console.log(maxNumber); // Вывод: 9

let minNumber = Math.min(...numbers);
console.log(minNumber); // Вывод: 2

// Применение циклов for и if:
numbers = [5, 3, 8, 2, 9];

// Нахождение максимального элемента
maxNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}
console.log(maxNumber); // Вывод: 9

// Нахождение минимального элемента
minNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < minNumber) {
    minNumber = numbers[i];
  }
}
console.log(minNumber); // Вывод: 2

// Нахождение максимального и минимального элементов с помощью функций reduce() и sort():
function findMaxAndMin(array) {
  const sortedArray = array.sort((a, b) => a - b);
  return {
    max: sortedArray[sortedArray.length - 1],
    min: sortedArray[0],
  };
}

const result = findMaxAndMin([5, 3, 8, 2, 9]);
console.log("Максимальный элемент:", result.max); // Вывод: 9
console.log("Минимальный элемент:", result.min); // Вывод: 2
