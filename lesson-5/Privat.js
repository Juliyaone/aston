// 1) Создать приватное поле в функции-конструкторе, создать геттер и сеттер для него.
// Вариант 1

// function Person(name) {
//     // Приватное поле (доступно только внутри функции-конструктора)
//     let _age = 0;

//     // Публичное свойство
//     this.name = name;

//     // Сеттер для _age
//     this.setAge = function(age) {
//         if (age > 0) {
//             _age = age;
//         } else {
//             console.log("Возраст должен быть положительным числом!");
//         }
//     };

//     // Геттер для _age
//     this.getAge = function() {
//         return _age;
//     };
// }

// // Используем
// let person = new Person("Иван");

// person.setAge(25);
// console.log(person.getAge()); // 25

// person.setAge(-5); // Ошибка: Возраст должен быть положительным числом!
// console.log(person.getAge()); // 25 (осталось прежним)

// console.log(person._age); // undefined (нельзя обратиться напрямую)
// Вариант 2

class Person {
  #age = 0; // Приватное поле (новый стандарт ES6)

  constructor(name) {
    this.name = name;
  }

  set age(value) {
    if (value > 0) {
      this.#age = value;
    } else {
      console.log("Возраст должен быть положительным!");
    }
  }

  get age() {
    return this.#age;
  }
}

let person = new Person("Анна");

person.age = 30;
console.log(person.age); // 30

person.age = -5; // Ошибка
console.log(person.age); // 30

console.log(person.#age); //Ошибка: нельзя обратиться напрямую
