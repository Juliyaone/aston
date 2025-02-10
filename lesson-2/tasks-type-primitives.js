console.log("B" + "a" + (1 - "hello"));

// "BaNaN"
// "B" + "a" = "Ba"
// 1 - "hello" = NaN (поскольку "hello" не может быть преобразовано в число)
// "Ba" + NaN = "BaNaN"

console.log((true && 3) + "d");

// "3d"
// true && 3 = 3 (логическое И возвращает последний операнд, если все истинны)
// 3 + "d" = "3d" (число преобразуется в строку)

console.log(Boolean(true && 3) + "d");

// trued
// true && 3 = 3
// Boolean(3) = true (любое ненулевое число — true)
// true + "d" = "trued"

console.log(NaN + 1);

// NaN
// NaN + 1 = NaN (любая операция с NaN возвращает NaN)

console.log(NaN + "o");

// "NaNo"
// NaN + 'o' = "NaNo" (NaN преобразуется в строку и конкатенируется)

console.log(undefined + 1);

// NaN
// undefined + 1 = NaN (undefined преобразуется в NaN при арифметических операциях)

console.log(undefined - 1);

// NaN
// undefined - 1 = NaN (undefined преобразуется в NaN при арифметических операциях)

console.log(null + 1);

// 1
// null + 1 = 1 (null преобразуется в 0 при арифметических операциях)

console.log(null / 5);

// 0
// 0 / 5 = 0 (null преобразуется в 0 при арифметических операциях)

console.log(5 / undefined);

// NaN
// 5 / NaN = NaN (undefined преобразуется в NaN)

console.log(-5 / null);

// -Infinity
// -5 / 0 =  (деление на 0 дает бесконечность)

console.log(null == 0);

// false
// (null равно только undefined или null)

console.log(null == "");

// false
// (null равно только undefined или null)

console.log(null > 0);

// false
// (null преобразуется в 0, и 0 не больше 0)

console.log(null >= 0);
// true
// (null преобразуется в 0, и 0 == 0)

console.log(null == "");
// false
// (null равно только undefined или null)

console.log("foo" + +"bar");

// +'bar' = NaN (унарный + пытается преобразовать строку в число)
// 'foo' + NaN = "fooNaN"

console.log("11" + "1" - 1);

// 110
// '111' - 1 строка преобразуется в число

console.log(typeof Object);
// function

console.log(typeof Math);
// Object

console.log(new String("foo") == "foo");
// true
// new String('foo') создает объект строки, а 'foo' — примитив.
// При нестрогом равенстве (==) объект преобразуется в примитив, и они равны.

console.log(new String("foo") === "foo");
// false
// new String('foo') создает объект строки,
// Строгое равенство (===) не преобразует типы, поэтому объект не равен примитиву.
