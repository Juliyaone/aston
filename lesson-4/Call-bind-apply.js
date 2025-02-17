// 2) Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

// Bind: возвращает новую функцию, которая при вызове использует указанный контекст и аргументы
const loggerBound = logger.bind(obj);
loggerBound(); // Выводит 'I output only external context: some value'

// Call: позволяет немедленно вызвать функцию с указанным контекстом и аргументами.
logger.call(obj); // Выводит 'I output only external context: some value'

// Apply: работает похожим образом, но принимает аргументы в виде массива.
const args = [];
logger.apply(obj, args); // Выводит 'I output only external context: some value'
