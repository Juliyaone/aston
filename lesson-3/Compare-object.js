// Бонус Задание 1 – Написать функцию глубокого сравнения двух обьектов:

const obj1 = { here: { is: "on", other: "3" }, object: Z };
const obj2 = { here: { is: "on", other: "2" }, object: Z };

// >>>>>>>>>>>>>>>>> РЕКУРСИЯ Глубокое сравнение
function deepEqual(obj1, obj2) {
  // Если один из аргументов не является объектом, они не равны
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return obj1 === obj2;
  }

  // Итерируем по каждому ключу первого объекта
  for (const key in obj1) {
    // Проверяем, существует ли этот ключ во втором объекте
    if (!(key in obj2)) {
      // Если нет, объекты не равны
      return false;
    }

    // Сравниваем значения ключей. Если значение является объектом, вызываем функцию снова
    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  // Все ключи первого объекта были успешно сравнены со вторым объектом
  return true;
}

// >>>>>>>>>>>>>>>>> JSON.stringify() имеет недостатки
function deepEqual(obj1, obj2) {
  const stringified1 = JSON.stringify(obj1);
  const stringified2 = JSON.stringify(obj2);

  if (stringified1 === stringified2) {
    return true;
  } else {
    // Проверяем наличие каждого ключа в обоих объектах
    for (const key in obj1) {
      if (!obj2.hasOwnProperty(key)) {
        return false;
      }

      // Рекурсивный вызов для вложенных объектов
      if (!deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
  }

  return true;
}

// >>>>>>>>>>>>>>>>> Паттерн проектирования «Прототип» (Prototype) используется для создания новых объектов путём клонирования существующего объекта — прототипа.
class Base {
  constructor(name) {
    this.name = name;
  }

  clone() {
    const clonedObject = Object.create(this);
    clonedObject.name = this.name;
    return clonedObject;
  }
}

class SubClass extends Base {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  clone() {
    const clonedObject = super.clone();
    clonedObject.age = this.age;
    return clonedObject;
  }
}

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  for (let key in obj1) {
    if (!(key in obj2)) return false;

    if (!deepEqual(obj1[key], obj2[key])) return false;
  }
  return true;
}

const proto = new Base("John");
const clone = proto.clone();

console.log(deepEqual(proto, clone));

// >>>>>>>>>>>>>>>>> ПОВЕРХНОСТНОЕ СРАВНЕНИЕ
function shallowEqual(obj1, obj2) {
  // Получаем ключи первого объекта
  const keys1 = Object.keys(obj1);

  // Проверяем, что количество ключей у обоих объектов совпадает
  if (keys1.length !== Object.keys(obj2).length) {
    return false;
  }

  // Сравниваем значения ключей
  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

// Ручное сравнение. Создание функции, которая принимает на вход два объекта одинакового типа и сравнивает их по конкретным полям. Это может быть полезно, когда нужно сравнить объекты по определённым критериям.

// Сравнение на уровне класса. По сути, это то же самое, что описано в первом пункте, но в рамках класса (например, метод .equals(obj)). Такой подход позволяет сравнивать объекты одного класса.

// Поверхностное сравнение. Создание функции, которая принимает на вход два объекта и сравнивает их на основе свойств верхнего уровня. Этот метод подходит для сравнения простых объектов без вложенных структур.

// Глубокое сравнение. Создание функции, которая принимает на вход два объекта и сравнивает их на основе свойств на всех доступных уровнях вложенности. Для этого можно использовать рекурсию или библиотеки, такие как lodash или immer.
