// Создать функцию makeCounter всеми способами из презентации

// >>>>>>>>>>>>>>> makeCounter вариант 1
function makeCounter() {
  // Лексическое окружение для каждого вызова makeCounter
  let count = 0; // Локальная переменная count

  // Возвращаем функцию counter, которая имеет доступ к count
  function counter() {
    count += 1; // Увеличиваем count на 1
    return count; // Возвращаем текущее значение count
  }

  return counter; // Возвращаем функцию counter
}

// Пример использования
// создаёт 2 независимыx счётчикa
const counterA = makeCounter();
const counterB = makeCounter();

console.log(counterA()); // 1
console.log(counterA()); // 2

console.log(counterB()); // 1 (независимый счётчик)
console.log(counterB()); // 2
console.log(counterB()); // 3

console.log(counterA()); // 3 (продолжает счёт независимо от counterB)

// Каждый вызов makeCounter создаёт новое лексическое окружение с собственной переменной count.
// counterA и counterB независимы, так как они ссылаются на разные лексические окружения.


// >>>>>>>>>>>>>>> makeCounter вариант 2
function makeCounter() {
  let count = 0;

  function innerFunction() {
    return count++;
  }

  return innerFunction;
}
// Пример использования
const counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
// Функция innerFunction имеет доступ к переменной count через замыкание.
// При каждом вызове counter() значение count увеличивается, но возвращается старое значение (постфиксный инкремент count++).


// >>>>>>>>>>>>>>> makeCounter вариант 3
function makeCounter() {
  let count = 0;

  function innerFunction() {
    count++;
    return count;
  }

  return innerFunction;
}
// Пример использования
// const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
// Функция innerFunction увеличивает count и возвращает новое значение (префиксный инкремент ++count или count++ с последующим возвратом).


// >>>>>>>>>>>>>>>
// Задача на замыкание 1:

function createIncrement() {
  let value = 0;

  function increment() {
    value += 1;
    console.log(value);
  }

  const message = `Current value is ${value}`;

  function log() {
    console.log(message);
  }

  return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();

log(); //"Current value is 0"        // почему не 3?
// Переменная message вычисляется один раз при создании области видимости функции createIncrement.

// >>>>>>>>>>>>>>>
// Задача на замыкание 2:

let group = getGroup();

group[0](); // Выводит 10
group[5](); // Выводит 10

function getGroup() {
  let students = [];
  let i = 0;
  while (i < 10) {
    students[i] = function () {
      console.log(i);
    };
    i++;
  }

  return students;
}
// Все функции в массиве students ссылаются на одну и ту же переменную i, которая после завершения цикла равна 10.

// Исправленный код для задачи 2:
// Чтобы исправить, нужно создать новое лексическое окружение для каждой итерации цикла. Например, с помощью IIFE (Immediately Invoked Function Expression):

// function getGroup() {
//   let students = [];
//   for (let i = 0; i < 10; i++) {
//     students[i] = (function (i) {
//       return function () {
//         console.log(i);
//       };
//     })(i);
//   }
//   return students;
// }

// let group = getGroup();
// group[0](); // 0
// group[5](); // 5



// >>>>>>>>>>>>>>>
// Задача на замыкание 3:

var globalVar = "global";
var outerVar = "outer";

function outerFunc(outerParam) {
  function innerFunc(innerParam) {
    console.log(globalVar, outerParam, innerParam); // guess,outer,inner
  }
  return innerFunc;
}

const x = outerFunc(outerVar);
outerVar = "outer-2";
globalVar = "guess";
x("inner"); // guess outer inner
