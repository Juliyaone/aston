// Задачи на EventLoop и Promise
// Задача 1

// Promise.reject("a") // промис зареджектился то есть вернет ошибку
//     .catch((p) => p + "b") //получает a и складывает с b
//     .catch((p) => p + "c") // пропускаем выше ошибки нет
//     .then((p) => p + "d") // получаем ab + d
//     .then((p) => p + "f") // получаем abd + f
//     .catch((p) => p + "h") // пропускаем выше ошибки нет
//     .finally((p) => p + "e") //finally ничего не принимает пропускаем
//     .then((p) => console.log(p)); // abdf

//     // abdf

// Задача 2

// console.log("1"); // Синхронная задача 1

// setTimeout(() => console.log("2"), 1); // Макрозадача (попадёт в Callback Queue с задержкой ~1мс) 6

// let promise = new Promise((resolve) => { // Синхронный код внутри конструктора промиса
//     console.log("3"); // Синхронная задача 2
//     resolve(); // Промис переходит в состояние "fulfilled", создаётся микрозадача
// });

// promise.then(() => console.log("4")); // Микрозадача (выполнится после синхронного кода) 4

// setTimeout(() => console.log("5"));  // Макрозадача (попадёт в Callback Queue без задержки) 5

// console.log("6"); // Синхронная задача 3

//Ответ
// 1 3 6 4 5 2

// // Задача 3

// setTimeout(() => console.log("a")); // Макрозадача (попадёт в Callback Queue без задержки)

// Promise.resolve()
//     .then((first) => {
//         console.log("first:", first); // микрозадача напишет в консоль first: undefined
//         return "b";
//     })
//     .then(
//         Promise.resolve().then((second) => { // Ошибка в логике: в .then(...) передана Promise, а не функция.
//             console.log("second: ", second); // 'second: undefined' выведет в консоль
//             return "c";
//         })
//     )
//     .then((third) => console.log("third:", third)); // "third: b"

// console.log("d"); // Синхронный код выпониться первым

// Ответ:
// d
// first: undefined
// second:  undefined
// third: b
// a

// // Задача 4

let a = 5;

console.log(a); // 1 синхронный код

setTimeout(() => {
  // 4 макрозадача
  console.log(a);
  a = 10;
}, 0);

Promise.resolve().then(() => {
  // микрозадача
  console.log(a); // 3
  a = 15;
});

console.log(a); // 2 синхронный код

// 5 5 5 15
