// class реализация очереди на основе массива:
// В этом примере мы создали класс Queue, который реализует методы для работы с очередью, используя массив items для хранения элементов очереди. Методы enqueue, dequeue, peek и isEmpty позволяют добавлять элементы в очередь, удалять их, просматривать первый элемент и проверять, пуста ли очередь.

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.items.length > 0) {
      return this.items.shift();
    } else {
      return null;
    }
  }

  peek() {
    if (this.items.length > 0) {
      return this.items[0];
    } else {
      return null;
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.peek()); // Вывод: 1
console.log(queue.dequeue()); // Вывод: 1

// Функция реализация очереди на основе массива:

//   1. Определение очереди:
//    Очередь определяется как функция queue, которая принимает массив initialArray в качестве аргумента (по умолчанию пустой массив).
//    Функция возвращает объект со свойствами, которые имитируют поведение очереди.

//   2. Свойства очереди:
//    enqueue: добавляет элемент в конец очереди. Если очередь пуста, то используется переданный массив initialArray.
//    dequeue: удаляет и возвращает первый элемент из очереди. Если очередь пуста, возвращается null.
//    peek: возвращает первый элемент очереди без его удаления. Если очередь пуста, возвращает null.
//    isEmpty: проверяет, пуста ли очередь.

//   3. Использование очереди:
//    Создаётся экземпляр очереди myQueue с помощью функции queue и пустого массива.
//    Используются методы очереди для добавления элементов (enqueue), получения первого элемента (peek) и удаления элемента (dequeue).

const queue = (initialArray = []) => {
  return {
    enqueue(item) {
      return queue([...initialArray, item]);
    },

    dequeue() {
      if (initialArray.length > 0) {
        return initialArray.shift();
      } else {
        return null;
      }
    },

    peek() {
      if (initialArray.length > 0) {
        return initialArray[0];
      } else {
        return null;
      }
    },

    isEmpty() {
      return initialArray.length === 0;
    },
  };
};

const myQueue = queue([]);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue.peek()); // Вывод: 1
console.log(myQueue.dequeue()); // Вывод: 1




// В функциональном программировании очередь можно использовать для имитации процесса ожидания на кассе. Вот как это может выглядеть:

// Определение очереди:
// Очередь представляет собой список клиентов, ожидающих обслуживания на кассе. Каждый клиент имеет свой порядковый номер (номер в очереди).
// Свойства очереди:
// enqueue: добавление клиента в конец очереди;
// dequeue: обслуживание клиента и удаление его из очереди;
// peek: просмотр информации о клиенте, стоящем первым в очереди;
// isEmpty: проверка, пуста ли очередь.
// Использование очереди:
// Клиент приходит в магазин и встаёт в очередь (enqueue);
// Кассир обслуживает клиента, стоящего первым в очереди (dequeue);
// Если касса свободна, кассир может сразу начать обслуживание следующего клиента;
// Клиенты могут видеть, кто стоит перед ними в очереди (peek), и сколько людей уже обслужено (isEmpty).
// Этот подход позволяет моделировать процесс ожидания на кассе с использованием очереди, где клиенты добавляются в конец очереди и удаляются из неё по мере обслуживания.
const queue = (initialArray = []) => {
    return {
      enqueue(customer) {
        return queue([...initialArray, customer]);
      },
  
      dequeue() {
        if (initialArray.length > 0) {
          const customer = initialArray[0];
          initialArray.shift();
          return customer;
        } else {
          return null;
        }
      },
  
      peek() {
        if (initialArray.length > 0) {
          return initialArray[0];
        } else {
          return null;
        }
      },
  
      isEmpty() {
        return initialArray.length === 0;
      }
    };
  };
  