// что в консоли и в каком порядке?

Promise.resolve(1) // Промис сразу резолвится со значением 1
  .then((val) => {
    // принимает 1
    console.log(val); // (1) → выводит 1
    return val + 1; // возвращает 2
  })
  .then((val) => {
    // принимает 2
    console.log(val); // (2) → выводит 2
  })
  .then((val) => {
    // принимает undefined, так как предыдущий then ничего не вернул
    console.log(val); // (3) → выводит undefined
    return Promise.resolve(3).then((val) => {
      // возвращаем новый промис, который резолвится в 3
      console.log(val); // (4) → выводит 3
    });
  })
  .then((val) => {
    // принимает undefined, так как предыдущий then ничего не вернул
    console.log(val); // (5) → выводит undefined
    return Promise.reject(4); // возвращаем промис, который реджектится со значением 4
  })
  .catch((val) => {
    // принимает 4, так как предыдущий then зареджектился
    console.log(val); // (6) → выводит 4
  })
  .finally((val) => {
    // finally НИЧЕГО НЕ ПРИНИМАЕТ, всегда выполняется
    console.log(val); // (7) → выводит undefined
    return 10; // возвращаем 10, но оно игнорируется finally
  })
  .then((val) => {
    // принимает 10 из finally, так как finally НЕ прерывает цепочку
    console.log(val); // (8) → выводит 10
  });

// 1
// 2
// undefined
// 3
// undefined
// 4
// undefined
// undefined
