Снипет упращения написания кода

# Справочник JS на англ: https://devdocs.io/

===
настройка для prettierrc

prettierrc.json - создаем файл

{
"printWidth": 100,
"tabWidth": 2,
"useTabs": false,
"semi": true,
"singleQuote": true,
"trailingComma": "es5",
"bracketSpacing": true,
"jsxBracketSameLine": false,
"arrowParens": "avoid",
"proseWrap": "always"
}

===

нужно для браузеров указывать атрибут <script type="module"> там по умолчанию строгий режим

===

# js-help

ЧИСЛА!!!!!==============================

Метод Number.parseInt() парсит из строки целое число.

console.log(Number.parseInt("5px")); // 5

console.log(Number.parseInt("12qwe74")); // 12

===
Метод Number.parseFloat() парсит из строки дробное число.

console.log(Number.parseFloat("5px")); // 5

console.log(Number.parseFloat("12.46qwe79")); // 12.46

===
Проверка на число метод

Number.isNaN(val)

const validNumber = Number("51"); // 51

console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number("qweqwe"); // NaN

console.log(Number.isNaN(invalidNumber)); // true

===
toFixed()

console.log((0.17 + 0.24).toFixed(2)); // 0.41

===
Класс Math
// Math.floor(num)
console.log(Math.floor(1.7)); // 1

// Math.ceil(num)
console.log(Math.ceil(1.2)); // 2

// Math.round(num)
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...)
console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...)
console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - возведение в степень
console.log(Math.pow(2, 4)); // 16

// Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
console.log(Math.random()); // случайное число между 0 и 1
console.log(Math.random() \* (10 - 1) + 1); // псевдослучайное число от 1 до 10

===

СТРОКИ!!!!!==============================

Шаблонные строки

const guestName = "Манго";

const roomNumber = 207;

const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;

console.log(greeting); // "Welcome Mango, your room number is 207!"

===
Свойства и методы строк:
===

length

const message = "Welcome to Bahamas!";

console.log(message.length); // 19

===
Методы toLowerCase() и toUpperCase()

const message = "Welcome to Bahamas!";

console.log(message.toLowerCase()); // "welcome to bahamas!"

console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"

===
Метод indexOf()

Возвращает позицию (индекс) на которой находится первое совпадение подстроки или -1, если ничего не найдено.

const message = "Welcome to Bahamas!";

console.log(message.indexOf("to")); // 8

console.log(message.indexOf("hello")); // -1

===
Метод includes()

Проверяет входит ли подстрока в строку, возвращает буль - true если входит и false в противном случае. Регистр символов в строке и подстроке имеет значение, так как например буква "a" не равна букве "А".

const productName = "Ремонтный дроид";

console.log(productName.includes("н")); // true

console.log(productName.includes("Н")); // false

console.log(productName.includes("дроид")); // true

console.log(productName.includes("Дроид")); // false

console.log(productName.includes("Ремонтный")); // true

console.log(productName.includes("ремонтный")); // false

===
Метод endsWith()

Позволяет определить, заканчивается ли строка символами (подстрокой) указанными в скобках, возвращая true или false.

const jsFileName = "script.js";

console.log(jsFileName.endsWith(".js")); // true

const cssFileName = "styles.css";

console.log(cssFileName.endsWith(".js")); // false

===
Методы replace() и replaceAll()

Возвращают новую строку, в которой первое (replace) или все совпадения (replaceAll) подстроки заменены на указанное значение.

const jsFileName = "script.js";

const minifiedJsFileName = jsFileName.replace(".js", ".min.js");

console.log(minifiedJsFileName); // "script.min.js"

const cssFileNames = "styles.css, about.css, portfolio.css";

const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");

console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

===
Метод slice()

Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки. Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку, не изменяя оригинал.

const productName = "Repair droid";

console.log(productName.slice(0, 4)); // "Repa"

console.log(productName.slice(3, 9)); // "air dr"

console.log(productName.slice(0, productName.length)); // "Repair droid"

console.log(productName.slice(7, productName.length)); // "droid"

===
Методы split() и join()
Метод indexOf() - найти индекс елемента
Метод includes() - проверяет есть ли в массиве элемент
Методы push() и pop(), shift() unshift()
Метод slice() возвращает новый массив, содержащий копию части исходного массива, не изменяя его
Метод splice() Удаляет, добавляет и заменяет элементы в произвольном месте массива
Метод concat() Объединяет два или более массива в один
