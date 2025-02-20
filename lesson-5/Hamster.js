// 1) Подобное бывает на срезе:
// Вы — руководитель команды, которая разрабатывает игру, хомяковую ферму.
// Один из программистов получил задание создать класс «хомяк» (англ - "Hamster").

// Объекты-хомяки должны иметь массив food для хранения еды и метод found,
// который добавляет к нему еду.

// Ниже — его решение. При создании двух хомяков, если поел один — почему-то сытым
// становится и второй тоже.

// В чём дело? Как поправить?


function Hamster() {
    this.food = []; // Теперь у каждого хомяка свой массив
}

Hamster.prototype.found = function (something) {
    this.food.push(something);
};

// Создаём двух хомяков и кормим первого
const speedy = new Hamster();
const lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

console.log(speedy.food.length); // 2
console.log(lazy.food.length); //  0
