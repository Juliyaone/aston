// ПРИМИТИВЫ
// string
// number;
// boolean;
// null;
// undefined;
// symbol;
// bigInt;

// Способы создания примитивов

// 1. **STRING (строка):**

let str = "Привет, мир!"; // typeof вернет string
// str instanceof String вернет false

const strNewObj = new String("Hello world"); // typeof вернет object
// strNewObj instanceof String вернет true

const strObj = String("Hello world"); // typeof вернет string
// strObj instanceof String вернет false

// 2. **NUMBER (число):**

let num = 42; // typeof вернет number
// num instanceof Number вернет false

const objNum = Number(42); // typeof вернет number
// objNum instanceof Number вернет false

const objNewNum = new Number(42); // typeof вернет object
// objNewNum instanceof Number вернет true

// 3. **BOOLEAN (логическое значение):**

let bool = true;
// console.log("bool", bool); // вернет true
// console.log("bool", typeof bool); // typeof вернет boolean
// console.log("bool", bool instanceof Boolean); // instanceof Boolean вернет false

const objBool = Boolean(true);
// console.log("objBool", objBool); // вернет true
// console.log("objBool", typeof objBool); // typeof вернет boolean
// console.log("objBool", objBool instanceof Boolean); // instanceof Boolean вернет false

const objNewBool = new Boolean(true);
// console.log("objNewBool", objNewBool); // вернет [Boolean: true]
// console.log("objNewBool", typeof objNewBool); // typeof вернет object
// console.log("objNewBool", objNewBool instanceof Boolean); // instanceof Boolean вернет true

// 4. **NULL:**

let nullValue = null;
// console.log("nullValue", nullValue); // вернет null
// console.log("nullValue", typeof nullValue); // typeof вернет object

// 5. **UNDEFINED:**

let undefVariable; // Значение переменной не определено до её инициализации
// console.log(undefVariable); // вернет undefined
// console.log("undefVariable", typeof undefVariable); // typeof вернет undefined

// 6. **SYMBOL (символ):**

const mySymbol = Symbol("привет");
// console.log(mySymbol); // вернет Symbol(привет)
// console.log("mySymbol", typeof mySymbol); // typeof вернет symbol

// 7. **BIGINT (большое целое число):**

let bigIntValue = 9007199254740991n;
// console.log(bigIntValue); // вернет 9007199254740991n
// console.log("bigIntValue", typeof bigIntValue); // typeof вернет bigint

let bigIntObg = BigInt(9007199254740991n);
// console.log(bigIntObg); // вернет 9007199254740991n
// console.log("bigIntObg", typeof bigIntObg); // typeof вернет bigint
