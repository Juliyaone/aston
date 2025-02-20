// 3)
class A {
    constructor() {
    }

    arrFunc = () => {
        console.log('wtf’', this === i)
    }
}



var i = new A();
i.arrFunc(); // wtf’ true
// this в стрелочной функции привязан к объекту i, потому что стрелочная функция берёт this из лексического окружения (в данном случае — из конструктора A).
// this === i → true, потому что стрелочная функция не создаёт свой this, а использует тот, который был в момент объявления (i)



console.log(i.hasOwnProperty('arrFunc')); //
// поясните ответ
// i.hasOwnProperty('arrFunc'); // true → arrFunc создаётся прямо в объекте i, а не в A.prototype.

