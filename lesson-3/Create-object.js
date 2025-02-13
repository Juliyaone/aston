// Задание 1 – Создать объект workingObject всеми возможными способами;

// const innerObject = {};

// const middleArray = [1, 2, 3, innerObject];

// const workingObject = {
//   a: middleArray,
// };

// >>>>>>>>>>>>>>>
// Использование литерала объекта:
// const workingObject = {
//   a: [1, 2, 3, innerObject],
// };

// >>>>>>>>>>>>>>>
// Добавление свойств к объекту после его создания:
// Создание пустого объекта
const workingObject = {};

// Добавление свойства a с массивом
workingObject.a = [1, 2, 3, innerObject];

// >>>>>>>>>>>>>>>
// Создание объекта с использованием функции:
function createWorkingObject() {
  const middleArray = [1, 2, 3, innerObject];
  return {
    a: middleArray,
  };
}

const workingObject = createWorkingObject();

// >>>>>>>>>>>>>>>
// Создание объекта через деструктуризацию:
const { a: workingArray } = { a: [1, 2, 3, innerObject] };

const workingObject = { workingArray };

// >>>>>>>>>>>>>>>
// Создание объекта с помощью оператора spread:
const middleArray = [1, 2, 3, innerObject];

const workingObject = { ...{ a: middleArray } };

// >>>>>>>>>>>>>>>
// Создание объекта с помощью Object.create(proto, ?properties)

const proto = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// Создаем объект с прототипом и свойствами
const workingObject = Object.create(proto, {
  name: {
    value: "John",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  age: {
    value: 30,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

// Используем объект
workingObject.greet(); // Выведет: "Hello, my name is John"
console.log(workingObject.age); // Выведет: 30

// >>>>>>>>>>>>>>>
// Создание объекта с помощью Object.assign(targetObject, ...sourceObjects)
// Создаем исходные объекты
const source1 = {
  name: "Alice",
  age: 25,
};

const source2 = {
  job: "Developer",
  age: 26, // Это значение перезапишет age из source1
};

// Создаем целевой объект и копируем свойства
const workingObject = Object.assign({}, source1, source2);

// Используем объект
console.log(workingObject.name); // Выведет: "Alice"
console.log(workingObject.age); // Выведет: 26 (перезаписанное значение)
console.log(workingObject.job); // Выведет: "Developer"


// >>>>>>>>>>>>>>>
// Пример создания объекта с помощью функции-конструктора

// Создаем функцию-конструктор
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
}

// Создаем объект с помощью ключевого слова new
const workingObject = new Person('John', 30);

// Используем объект
workingObject.greet(); // Выведет: "Hello, my name is John and I am 30 years old."
console.log(workingObject.name); // Выведет: "John"
console.log(workingObject.age);  // Выведет: 30




// >>>>>>>>>>>>>>>
// Пример создания объекта с помощью класса (ES6)
// Создаем класс
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Создаем объект с помощью ключевого слова new
  const workingObject = new Person('Alice', 25);
  
  // Используем объект
  workingObject.greet(); // Выведет: "Hello, my name is Alice and I am 25 years old."
  console.log(workingObject.name); // Выведет: "Alice"
  console.log(workingObject.age);  // Выведет: 25