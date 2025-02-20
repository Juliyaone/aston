// 2) Решить несколькими способами.
// в чем ошибка? как исправить? Можно делать что угодно.

class Animal {
  constructor(name) {
    this.name = name;
  }
}

// 1 вариант

class Rabbit extends Animal {
  constructor(name) {
    // !! В классах-наследниках перед использованием this нужно сначала вызвать super(), потому что this создаётся в родительском Animal (через super()).
    super(name);
    this.created = Date.now();
  }
}

// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// console.log(rabbit.name);

// 2 вариант

// function Animal(name) {
//   this.name = name;
// }

// function Rabbit(name) {
//   Animal.call(this, name); // Привязываем `this` к `Animal`
//   this.created = Date.now();
// }

// Rabbit.prototype = Object.create(Animal.prototype);
// Rabbit.prototype.constructor = Rabbit;

// let rabbit = new Rabbit("Белый кролик");
// console.log(rabbit.name); // "Белый кролик"

// 3 вариант

// class Rabbit {
//   constructor(name) {
//     let animal = new Animal(name); // Создаём объект вручную
//     Object.setPrototypeOf(this, animal); // Устанавливаем его прототип
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("Белый кролик");
// console.log(rabbit.name); // "Белый кролик"
