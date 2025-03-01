// что в консоли и в каком порядке?

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

// var имеет функциональную область видимости
// Переменная i объявляется через var, что значит:

// Она создаётся в глобальной области видимости (или в области функции, если код внутри функции).
// Все итерации используют одну и ту же переменную i.
// 2. Первая итерация (i = 0)
// setTimeout(() => console.log(i), 1) ставит колбэк в очередь Callback Queue.
// i увеличивается до 1.
// Важно: setTimeout не останавливает цикл, он просто отправляет колбэк в очередь.

// 3. Вторая итерация (i = 1)
// setTimeout(() => console.log(i), 1) снова ставит колбэк в очередь.
// i увеличивается до 2.
// 4. Третья итерация (i = 2)
// setTimeout(() => console.log(i), 1) ещё раз ставит колбэк в очередь.
// i увеличивается до 3, цикл завершается.
// После завершения основного кода (цикла) движок JavaScript берёт задачи из очереди:

// Колбэки вызываются, но переменная i уже стала 3, потому что цикл давно завершился.
// Поэтому три раза в консоль выведется "3".


// ОТВЕТ
// 3 3 3


for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

// let создаёт новую переменную для каждой итерации.
// setTimeout замыкает значение i и использует то, которое было в момент итерации.
// ОТВЕТ
// 0 1 2


