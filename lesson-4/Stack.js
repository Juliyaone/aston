// В функциональном программировании стек можно реализовать с использованием массива.
//Определение стека:
// Стек определяется как функция stack, которая принимает массив initialArray в качестве аргумента (по умолчанию пустой массив).
// Функция возвращает объект со свойствами, которые имитируют поведение стека.
// Свойства стека:
// push: добавляет элемент в стек. Если стек пуст, то используется переданный массив initialArray.
// pop: удаляет и возвращает последний элемент из стека. Если стек пуст, возвращается null.
// peek: возвращает последний элемент стека без его удаления. Если стек пуст, возвращает null.
// isEmpty: проверяет, пуст ли стек.
// Использование стека:
// Создаётся экземпляр стека myStack с помощью функции stack и пустого массива.
// Используются методы стека для добавления элементов (push), получения последнего элемента (peek) и удаления элемента (pop).

const stack = (initialArray = []) => {
  return {
    push(item) {
      return stack([...initialArray, item]);
    },

    pop() {
      if (initialArray.length === 0) {
        return null;
      } else {
        return initialArray.pop();
      }
    },

    peek() {
      if (initialArray.length > 0) {
        return initialArray[initialArray.length - 1];
      } else {
        return null;
      }
    },

    isEmpty() {
      return initialArray.length === 0;
    },
  };
};

const myStack = stack([]);
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.peek()); // Вывод: 3
console.log(myStack.pop()); // Вывод: 3

// с помощью классов стек можно реализовать с использованием массива.
//В этом примере мы создали класс Stack, который реализует методы для работы со стеком, используя массив items для хранения элементов стека. Методы push, pop, peek и isEmpty позволяют добавлять элементы в стек, удалять их, просматривать верхний элемент и проверять, пуст ли стек.

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // Вывод: 3
console.log(stack.pop()); // Вывод: 3
