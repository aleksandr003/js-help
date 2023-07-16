// parseInt;---------------------------
// let num = parseInt("12px");
// alert(num); // выведет 12

// parseFloat;--------------------------
// let num = parseFloat("12.5px");
// alert(num); // выведет 12.5

// const num = 34457456;
// console.log(String(num).length);

// alert(true + 3); // выведет 4
// alert(true + true); // выведет 2
// alert(true - true); // выведет 0
// alert("1" + true); // выведет 1true

// toFixed;--------------------------
// let a = 0.1 + 0.2;
// alert(a.toFixed(2)); // выведет '0.30'

// prompt;--------------------------
// let num1 = Number(prompt("Введите первое число"));
// let num2 = Number(prompt("Введите второе число"));
// alert(num1 + num2);

// push;--------------------------
// let arr = [1, 2, 3];
// arr.push(4);
// console.log(arr); // [1, 2, 3, 4]

// delete;--------------------------
// let arr = ["a", "b", "c"];
// delete arr[1];
// console.log(arr);

// Object.keys;--------------------------
// let obj = { a: 1, b: 2, c: 3 };
// let keys = Object.keys(obj);
// console.log(keys); // ["a", "b", "c"];

// let obj = { x: 1, y: 2, z: 3 };
// console.log(Object.keys(obj).length);

// let obj = { x: 1, y: 2, z: 3 };
// const key = "y";
// console.log(obj[key]);

// let obj = { x: 1, y: 2, z: 3 };
// console.log(obj["x"]);

// let obj = { x: 1, y: 2, z: 3 };
// let key = "x";
// console.log(obj[key]);

// let key = "a";
// let obj = {
//   [key + "1"]: 1,
//   [key + "2"]: 2,
//   [key + "3"]: 3,
// };
// console.log(obj["a3"]);

// let key = "x";
// let obj = {
//   [key]: 1,
//   y: 2,
//   z: 3,
// };

// in --------------------------
// let obj = { x: 1, y: 2, z: 3 };
// console.log("x" in obj); // true;
// console.log("w" in obj); // false

// delete --------------------------
// let obj = { a: 1, b: 2, c: 3 };
// delete obj.b;
// console.log(obj); // {a: 1, c: 3}

// let lang = "ua";
// switch (lang) {
//   case "ua":
//     console.log("Укр");
//     break;
//   case "en":
//     console.log("анг");
//     break;
//   case "de":
//     console.log("нем");
//     break;
//   default:
//     console.log("язык не поддерживается");
//     break;
// }

// let num = -1;
// let res;
// res = num >= 0 ? (res = "1") : (res = "2");
// console.log(res);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// const obj = {};
// for (let i = 0; i < arr1.length; i++) {
//   obj[arr1[i]] = arr2[i];
// }
// console.log(obj);

// let obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };
// let total = 0;
// const keys = Object.keys(obj);
// for (const key of keys) {
//   total += Number(key);
// }
// total /= keys.length;
// console.log(total);

// let obj = {
//   1: 125,
//   2: 225,
//   3: 128,
//   4: 356,
//   5: 145,
//   6: 281,
//   7: 452,
// };
// const arr1 = [];
// for (const key in obj) {
//   let elem = String(obj[key])[0];
//   if (elem == 1 || elem == 2) {
//     arr1.push(Number(obj[key]));
//   }
// }
// console.log(arr1);

// let arr = ["a", "b", "c", "d", "e"];

// const obj = {};
// for (let i = 1; i <= arr.length; i++) {
//   obj[i] = arr[i - 1];
// }
// console.log(obj);

// let arr = ["a", "b", "c", "d", "e"];

// const obj = {};
// for (let i = 1; i <= arr.length; i++) {
//   obj[arr[i - 1]] = i;
// }
// console.log(obj);

// Обращаясь к каждому элементу массива найдите сумму всех его элементов.
// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// let total = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     total += arr[i][j];
//   }
// }
// console.log(total);

// С помощью вложенных циклов найдите сумму элементов этого массива.
// let arr = [[1, 2, 3], [4, 5], [6]];
// let total = 0;
// for (const subArr of arr) {
//   for (const elem of subArr) {
//     total += elem;
//   }
// }
// console.log(total);

// let obj = {
//   a: {
//     1: "a1",
//     2: "a2",
//     3: "a3",
//   },
//   b: {
//     1: "b1",
//     2: "b2",
//     3: "b3",
//   },
//   c: {
//     1: "c1",
//     2: "c2",
//     3: "c3",
//   },
// };
// for (let key in obj) {
//   let subObj = obj[key];
//   for (let subKey in subObj) {
//     console.log(subKey);
//   }
// }

// let days = {
//   ru: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
//   en: ["mn", "ts", "wd", "th", "fr", "st", "sn"],
// };

// console.log(days.ru[0]); // выведет 'пн'
// console.log(days.en[2]); // выведет 'wd'

// Выведите на экран первого студента из третьей группы.
// let students = {
//   group1: ["name11", "name12", "name13"],
//   group2: ["name21", "name22", "name23"],
//   group3: ["name31", "name32", "name33"],
// };
// console.log(students.group3[0]);

// let students = {
//   group1: ["student11", "student12", "student13"],
//   group2: ["student21", "student22", "student23"],
//   group3: ["student31", "student32"],
// };

// for (const key in students) {
//   for (const elem of students[key]) {
//     console.log(elem);
//   }
// }

// С помощью вложенных циклов выведите на экран все строки с данными.
// let data = [
//   {
//     1: "data11",
//     2: "data12",
//     3: "data13",
//   },
//   {
//     1: "data21",
//     2: "data22",
//     3: "data33",
//   },
//   {
//     1: "data31",
//     2: "data32",
//     3: "data33",
//   },
// ];

// for (const key of data) {
//   for (const elem in key) {
//     console.log(key[elem]);
//   }
// }

// let users = [
//   {
//     name: "name1",
//     surn: "surn1",
//   },
//   {
//     name: "name2",
//     surn: "surn2",
//   },
//   {
//     name: "name3",
//     surn: "surn3",
//   },
// ];
// for (const elem of users) {
//   console.log(elem.name + " " + elem.surn);
// }

// let employees = [
//   {
//     name: "name1",
//     salary: 300,
//     age: 28,
//   },
//   {
//     name: "name2",
//     salary: 400,
//     age: 29,
//   },
//   {
//     name: "name3",
//     salary: 500,
//     age: 30,
//   },
//   {
//     name: "name4",
//     salary: 600,
//     age: 31,
//   },
//   {
//     name: "name5",
//     salary: 700,
//     age: 32,
//   },
// ];
// let total = 0;
// for (const elem of employees) {
//   if (elem.age >= 30) {
//     console.log(elem);
//   }
// }
// console.log(total);

// let months = {
//   ru: [
//     "январь",
//     "февраль",
//     "март",
//     "апрель",
//     "май",
//     "июнь",
//     "июль",
//     "август",
//     "сентябрь",
//     "октябрь",
//     "ноябрь",
//     "декабрь",
//   ],
//   en: [
//     "january",
//     "february",
//     "march",
//     "april",
//     "may",
//     "june",
//     "july",
//     "august",
//     "september",
//     "october",
//     "november",
//     "december",
//   ],
// };
// let lang = "ru";
// let month = 5;
// console.log(months[lang][month]);

// let obj = {
//   key1: {
//     key2: "12",
//     key3: "13",
//   },
//   key2: {
//     key4: "24",
//     key5: "25",
//   },
// };

// let key1 = "key2";
// let key2 = "key4";
// console.log(obj[key1][key2]);

// let obj = {
//   key1: {
//     key2: "12",
//     key3: "13",
//   },
//   key2: {
//     key4: "24",
//     key5: "25",
//   },
// };
// let key1 = "key2";
// console.log(obj[key1]["key4"]);

// Добавьте в следующий массив еще одного работника:
// let employees = [
//   {
//     name: "name1",
//     salary: 300,
//     age: 28,
//   },
//   {
//     name: "name2",
//     salary: 400,
//     age: 29,
//   },
//   {
//     name: "name3",
//     salary: 500,
//     age: 30,
//   },
// ];
// employees.push({
//   name: "Hary",
//   salary: 450,
//   age: 35,
// });
// console.log(employees);

// let students = {
//   group1: ["student11", "student12", "student13"],
//   group2: ["student21", "student22", "student23"],
//   group3: ["student31", "student32"],
// };
// students.group1.push("student14");
// students.group4 = [];
// console.log(students);
// students.group4.push("student41");

// Добавьте нового студента в подгруппу 'subgroup11'.
// let students = {
//   group1: {
//     subgroup11: ["student111", "student112", "student113"],
//     subgroup12: ["student121", "student122", "student123"],
//   },
//   group2: {
//     subgroup21: ["student211", "student212", "student213"],
//     subgroup22: ["student221", "student222", "student223"],
//   },
//   group3: {
//     subgroup31: ["student311", "student312", "student313"],
//     subgroup32: ["student321", "student322", "student323"],
//   },
// };
// // Сделайте четвертую группу, в ней сделайте подгруппу и добавьте в нее двух новых студентов.
// students.group1.subgroup15 = {};
// console.log(students);

// students.group4 = {};
// students.group4.subgroup41 = [];
// students.group4.subgroup41.push("student451");
// students.group4.subgroup41.push("student467");
// console.log(students);

// Код должен найти сумму цифр числа:
// let num = 12345;
// let arr = String(num).split("");
// let sum = 0;
// for (let digit of arr) {
//   sum += Number(digit);
// }
// console.log(sum);

// function sqrt(num) {
//   return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// const res = sum(sqrt(2), sqrt(3), sqrt(4)).toFixed(3);
// console.log(res);

// function func(num) {
//   if (num <= 0) {
//     return Math.abs(num);
//   }

//   return num ** 2;
// }

// console.log(func(10));
// console.log(func(-5));

// function func(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     sum += arr[i];
//     if (sum >= 10) {
//       return i + 1;
//     }
//   }
// }

// function func(arr) {
//   const newArr = [];
//   for (const elem of arr) {
//     if (elem % 2 === 0) {
//       newArr.push(elem);
//     }
//   }
//   return newArr;
// }
// console.log(func([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// function func(arr) {
//   let res = 0;
//   for (let elem of arr) {
//     res += elem;
//   }
//   return res;
// }

// function sumDublArray(sum1, sum2) {
//   return +(sum1 / sum2).toFixed(1);
// }

// const arr1 = [4, 7, 4, 3];
// const arr2 = [2, 1, 3, 1];

// const a = sumDublArray(func(arr1), func(arr2));

// console.log(a);

// function getSum(arr) {
//   let res = 1;

//   for (let elem of arr) {
//     res *= elem;
//   }

//   return res;
// }
// console.log(getSum([1, 2, 3, 4, 5]));

// let num = 12345;
// let res = getDigitsSum(num);
// console.log(res);

// ------------------

// Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.
// const arr = [1, 2, 3, 4, 5];
// const sumArr = function (array) {
//   let sum = 0;
//   for (const elem of array) {
//     sum += elem;
//   }
//   return sum;
// };
// console.log(sumArr(arr));

// ------------------

// Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.
// const arrayfromNum = function (num) {
//   const arr = [];
//   for (let i = 1; i <= num; i += 1) {
//     if (num % i === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// };
// console.log(arrayfromNum(35));

// ------------------

// Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.

// const arrFromStr = function (str) {
//   return str.split("");
// };
// console.log(arrFromStr("qwert"));

// ------------------

// Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
// const arrFromStr = function (str) {
//   return str.split("");
// };

// const gatArr = function (arr) {
//   let str = "";
//   for (let i = arr.length - 1; i >= 0; i--) {
//     str += arr[i];
//   }
//   return str;
// };
// const gatArrRevers = function (str) {
//   return gatArr(arrFromStr(str));
// };
// console.log(gatArrRevers("asd"));

// ------------------

// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.

// const firstUpfromStr = function (str) {
//   return str[0].toUpperCase() + str.slice(1);
// };
// console.log(firstUpfromStr("asd"));

// ------------------

//6 Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.

// const getArr = function (str) {
//   return str.split(" ");
// };

// const firstLatterUp = function (arr) {
//   let newStr = [];
//   for (const elem of arr) {
//     newStr.push(elem[0].toUpperCase() + elem.slice(1));
//   }
//   return newStr;
// };

// const makeFirstLetterUp = function (str) {
//   return firstLatterUp(getArr(str)).join(" ");
// };
// console.log(makeFirstLetterUp("hello world"));

//7 ------------------

// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.

// const getArrfromOneToNumber = function (num) {
//   const arr = [];
//   for (let i = 1; i <= num; i += 1) {
//     arr.push(i);
//   }
//   return arr;
// };
// console.log(getArrfromOneToNumber(10));

// ------------------

// Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.

// const getSumFromArr = function (arr) {
//   let sum = 0;
//   for (const elem of arr) {
//     sum += elem;
//   }
//   return sum;
// };
// console.log(getSumFromArr([1, 2, 3, 4, 5]));

// ------------------

// Сделайте функцию, которая будет возвращать случайный элемент из массива.

// const randomNum = function (num) {
//   return Math.floor(Math.random() * (num - 0) + 0);
// };

// const randomElemfromArr = function (arr) {
//   let count = arr.length;
//   return arr[randomNum(count)];
// };
// console.log(randomElemfromArr([1, 2, 3, 4, 5]));

// ------------------

// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.

// 223
// let math = {
//   square: function (num) {
//     return num * num;
//   },
//   cube: function (num) {
//     return num * num * num;
//   },
// };
// console.log(math.square(2)); // выведет 4
// console.log(math.cube(2)); // выведет 8

// const math = {
//   sum: function (arr) {
//     let res = 0;
//     for (const elem of arr) {
//       res += elem;
//     }
//     return res;
//   },
// };
// const array = [1, 2, 3, 4, 5];
// console.log(math.sum(array));

// 240

// function test(func1, func2, func3) {
//   console.log(func1() + func2() + func3());
// }

// test(
//   function () {
//     return 1;
//   },
//   function () {
//     return 2;
//   },
//   function () {
//     return 3;
//   }
// );

// const get1 = function () {
//   return 1;
// };
// const get2 = function () {
//   return 2;
// };
// const get3 = function () {
//   return 3;
// };
// function test(func1, func2, func3) {
//   console.log(func1() + func2() + func3());
// }
// test(get1, get2, get3);

// function test(num, func) {
//   console.log(func(num));
// }
// // Выведет 4:
// test(5, function (num) {
//   return num * num;
// });

// function test(num, func1, func2) {
//   console.log(func1(num) + func2(num));
// }

// test(
//   5,
//   function (num) {
//     return num + num;
//   },
//   function (num) {
//     return num * num;
//   }
// );

// function test(arr, func) {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] = func(arr[i]);
//   }
//   return arr;
// }
// function func(num) {
//   return num + 5;
// }
// const array = [1, 2, 3, 4, 5];
// console.log(test(array, func));

// function func() {
//   return function () {
//     return "!";
//   };
// }

// console.log(func()());

// function func1() {
//   return function () {
//     return 1;
//   };
// }

// function func2() {
//   return function () {
//     return 2;
//   };
// }
// console.log(func1()() + func2()());

// 252

// function func() {
//   return function () {
//     return function () {
//       return function () {
//         return function () {
//           return "!";
//         };
//       };
//     };
//   };
// }
// console.log(func()()()()());

// function func() {
//   return function (str) {
//     return str;
//   };
// }

// console.log(func()("hvhg"));

// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(), вернет массив переданных в параметры чисел.
// function func(num1) {
//   const arr = [];
//   return function (num2) {
//     return function (num3) {
//       return function () {
//         arr.push(num1);
//         arr.push(num2);
//         arr.push(num3);
//         return arr;
//       };
//     };
//   };
// }
// console.log(func(2)(3)(4)());

// Функции - коллбэки в JavaScript
// 253

// function each(arr, callback) {
//   let result = [];
//   for (let elem of arr) {
//     result.push(callback(elem));
//   }
//   return result;
// }

// function func(num) {
//   return num * num;
// }
// function func2(num) {
//   return num + num;
// }
// const array = [1, 2, 3, 4, 5];
// const a = each(array, function (num) {
//   return num + 100;
// });
// console.log(a);

// const arr2 = ["katy", "lola"];
// const res = each(arr2, function (str) {
//   return str.split("").reverse().join("");
// });
// console.log(res);

// const upStrFirst = each(arr2, function (str) {
//   return str[0].toUpperCase() + str.slice(1);
// });
// console.log(upStrFirst);

// 255 Стрелочные функции

// function each(arr, callback) {
//   let result = [];
//   for (let elem of arr) {
//     result.push(callback(elem));
//   }
//   return result;
// }
// const arr2 = ["katy", "lola"];
// const xxx = each(arr2, (str) => str[0].toUpperCase() + str.slice(1));
// console.log(xxx);

// let result = each([1, 2, -3, 4, 5], (elem, index) => elem * index > 10);
// console.log(result);

// 258 Лексическое окружение функций

// let num = 1;
// const func = function () {
//   console.log(num);
//   num++;
//   if (num < 5) {
//     func();
//   }
// };
// func();

// const array = [1, 2, 3, 4, 5];
// const func = function (arr) {
//   console.log(arr.shift(), arr);
//   if (arr.length != 0) {
//     func(arr);
//   }
// };
// func(array);

// let array = [1, 2, 3, 4, 5];

// const func = function (arr) {
//   let sum = arr.shift();
//   if (arr.length != 0) {
//     sum += func(arr) * 2;
//   }
//   return sum;
// };
// console.log(func(array));

// 276

// function func(arr) {
//   for (let elem of arr) {
//     if (typeof elem == "object") {
//       func(elem);
//     } else {
//       console.log(elem);
//     }
//   }
// }

// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);

// const obj = {
//   a: 1,
//   b: { c: 2, d: 3, e: 4 },
//   f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } },
// };

// function func(obj) {
//   for (let elem in obj) {
//     if (typeof obj[elem] == "object") {
//       func(obj[elem]);
//     } else {
//       console.log(obj[elem]);
//     }
//   }
// }
// func(obj);

// const newArr = [];
// function func(arr) {
//   for (let elem of arr) {
//     if (typeof elem == "object") {
//       func(elem);
//     } else {
//       newArr.push(elem);
//     }
//   }
//   return newArr;
// }

// console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));

// function func(arr) {
//   let sum = 0;
//   for (let elem of arr) {
//     if (typeof elem == "object") {
//       sum += func(elem);
//     } else {
//       sum += elem;
//     }
//   }

//   return sum;
// }
// console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));

// 279

// let arr = [1, 2, 3, 4, 5];

// const newArr = arr.map(function (elem) {
//   return elem + 100;
// });
// console.log(newArr);

// const func = function (arr, callback) {
//   const newArr = [];
//   for (const elem of arr) {
//     newArr.push(callback(elem));
//   }
//   return newArr;
// };

// const func2 = function (elem) {
//   return (elem += 10);
// };

// const xxx = func([1, 2, 3], func2);

// console.log(xxx);

// const arr2 = [12, 31, 55, 76];
// const res = func(arr2, function (elem) {
//   return elem * arr2.length;
// });

// console.log(res);

// const arr = [12, 31, 55, 76];

// const res = arr.map(function (elem) {
//   return (elem += 100);
// });
// console.log(res);

// const arr = [12, 31, 55, 76];
// const res = arr.map(function (elem, index) {
//   return elem * index;
// });
// console.log(res);

// const arr = [12, 31, 55, 76];
// const res5 = arr.map((elem, index) => elem * index);
// console.log(res5);

// const arr = ["de", "vffdfs", "tyyt"];
// const newArr = arr.map(function (elem) {
//   return (elem += "!");
// });
// console.log(newArr);

// const arr = ["de", "vffdfs", "tyytr"];
// const newArr = arr.map(function (elem) {
//   return elem.split("").reverse().join("");
// });
// console.log(newArr);

// let arr = ["123", "456", "789"];
// const newArr = arr.map((str) => str.split("").map((elem) => Number(elem)));
// console.log(newArr);

// const arr = ["1", "2", "3"];
// console.log(arr.map((elem) => Number(elem)));

// let arr = ["123", "456", "789"];
// const newArr = arr.map((elem) => elem.split("").map(Number));
// console.log(newArr);

// let arr = ["a", "b", "c", "d", "e"];
// const newArr = arr.map((elem, index) => elem + index);
// console.log(newArr);

// const arr = [12, 31, 55, 76];
// const newArr = arr.map((elem, index) => (elem *= index));
// const newArr = arr.map(function (elem, index) {
//   return (elem *= index);
// });
// console.log(newArr);

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let result = arr.map(function (elem) {
//   return elem.map(function (num) {
//     return num * num;
//   });
// });
// console.log(result);

// let arr = [1, 2, 3, 4, 5];
// let x = [];
// arr.forEach(function (elem) {
//   x.push(elem * 2);
// });
// console.log(x);

// let arr = ["a", "b", "c", "d", "e"];

// arr.forEach(function (elem, ind) {
//   console.log(elem, ind);
// });

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach(function (elem) {
//   sum += elem;
// });
// arr.forEach((elem) => (sum += elem * elem));
// console.log(sum);

// let arr = [-2, 5, 1, -5, -1, 1, 39, 4, -1];
// const newArr = arr.filter(function (elem) {
//   return elem > 0 && elem < 10;
// });
// console.log(newArr);

// const arr = ["de", "vffdfs", "dds", "tyytrij"];
// const newArr = arr.filter((elem) => elem.length > 5);
// console.log(newArr);

// const arr = [1, 2, [3, 4], 5, [6, 7]];
// const newArr = arr.filter(function (elem) {
//   return typeof elem != "object";
// });
// console.log(newArr);

// let arr = [1, 2, 3, 4, 5];
// let check = arr.every(function (elem, index) {
//   if (elem * index < 30) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(check);

// let arr = [1, 2, 3, 4, 5];
// const check = arr.every(function (elem) {
//   return elem > 0;
// });
// console.log(check);

// let arr = [2, 4, 6, 8];
// let result = arr.some(function (elem) {
//   return elem % 2 == 0;
// });
// console.log(result);

// let arr = [2, 4, 6, 8];
// const res = arr.reduce(function (sum, elem) {
//   return sum + elem;
// });
// console.log(res);

// 286

// let arr = [1, 2, 3, 4, 5];
// function func(num1, num2, num3, num4, num5) {
//   return num1 + num2 + num3 + num4 + num5;
// }
// console.log(func(...arr));
// let arr = ["a", ..."12345"];
// console.log(arr);

// let arr1 = [1, 2, 3, 4, 5];

// const func = function (...arr) {
//   let sum = 0;
//   for (const elem of arr) {
//     sum += elem * elem;
//   }
//   return sum;
// };
// console.log(func(...arr1));

// function unite(...arrs) {
//   return arrs;
// }
// let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// console.log(result);

// 296
// let arr = ["John", "Smit", "development", "programmer", 2000];
// let [name, surname, department, position, salary] = arr;
// console.log(salary);

// function func() {
//   return [2025, 12, 31];
// }
// let [year, month, day] = func();
// console.log(year);

// function func() {
//   return ["John", "Smit", "development", "programmer", 2000];
// }
// let [name, surname, department, position, salary] = func();
// console.log(surname);

// let arr = ["John", "Smit", "development", "programmer", 2000];
// let [, , department, position, ,] = arr;
// console.log(position);

// let arr = ["John", "Smit", "development", "programmer", 2000];
// const [name, surname, ...info] = arr;
// // let name = arr[0];
// // let surname = arr[1];
// // let info = arr.slice(2);
// console.log(info);

// let arr = ["John", "Smit", "development", "programmer"];
// const [name, surname, department, position = "trainee"] = arr;
// console.log(position);

// const arr = [2025, 12];
// function func() {
//   return new Date().getDate();
// }
// let [year, month, day = func()] = arr;
// console.log(day);

// let options = {
//   color: "red",
//   width: 400,
//   height: 500,
// };
// const { color, width, height } = options;
// console.log(height);

// let options = {
//   color: "red",
//   width: 400,
//   height: 500,
// };
// const { color: c, width: w, height: h } = options;
// console.log(c);

// function func([year, month, day]) {
//   console.log(year); // выведет 2025
//   console.log(month); // выведет 12
//   console.log(day); // выведет 31
// }
// func([2025, 12, 31]);

// function func([name, surname, department, position, salary]) {
//   console.log(name);
//   console.log(surname);
//   console.log(department);
//   console.log(position);
//   console.log(salary);
// }
// func(["John", "Smit", "development", "programmer", 2000]);

// function func(department, { name, surname }, [year, month, day]) {
//   console.log(department);
//   console.log(name);
//   console.log(surname);
//   console.log(year);
//   console.log(month);
//   console.log(day);
// }

// const obj = {
//   name: "John",
//   surname: "Smit",
// };
// func("development", obj, [2018, 12, 31]);

// function func({ color, width, height }) {
//   console.log(color);
//   console.log(width);
//   console.log(height);
// }
// func({ color: "red", width: 400, height: 500 });

// function func({ width, height, color = "black" }) {
//   console.log(color);
//   console.log(width);
//   console.log(height);
// }
// func({ color: "red", width: 400, height: 500 });

// 311

// const date = new Date();
// console.log(date.getHours() + " " + date.getMonth());

// function addZero(num) {
//   return num >= 0 && num <= 9 ? "0" + num : num;
// }
// const date = new Date();
// console.log(
//   addZero(date.getHours()) +
//     ":" +
//     addZero(date.getMinutes()) +
//     ":" +
//     addZero(date.getSeconds()) +
//     " " +
//     addZero(date.getDate()) +
//     "." +
//     addZero(date.getMonth() + 1) +
//     "." +
//     addZero(date.getFullYear())
// );

// let str = "2025-12-31";
// const newDate = str.split("-").reverse().join(".");
// console.log(newDate);

// let date = new Date();
// console.log(date.getDay());

// function holiday(day) {
//   if (day === 6 || day === 0) {
//     return "Выходной";
//   } else return "Рабочий";
// }
// console.log(holiday(date.getDay()));

// Определите сколько дней осталось до ближайшего воскресенья.
// function func(day) {
//   return day - 7;
// }
// let date = new Date();
// let a = Math.abs(func(date.getDay()));
// console.log(a);

// const date = new Date();
// const day = date.getDay();
// let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
// console.log(days[day]);

// let months = [
//   "янв",
//   "фев",
//   "мар",
//   "апр",
//   "май",
//   "июн",
//   "июл",
//   "авг",
//   "сен",
//   "окт",
//   "ноя",
//   "дек",
// ];
// const month = date.getMonth();
// console.log(months[month]);

// let date = new Date(2025, 10, 5, 12, 59, 59);

// let date = new Date(2023, 10, 5);
// let day = date.getDay();
// let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
// console.log(days[day]);

// let date = new Date();
// console.log(date.getTime());

// let now = new Date();
// let date = new Date(2015, 11, 4);
// let diff = now.getTime() - date.getTime();
// console.log(diff);
// console.log(diff / (1000 * 60));
// console.log(diff / (1000 * 60 * 60));
// console.log(diff / (1000 * 60 * 60 * 24));

// let now = new Date();
// let date = new Date(2015, 4, 25, 12, 59, 59);
// let diff = now - date;
// console.log(diff / (1000 * 60 * 60 * 24 * 30 * 12));

// let date = new Date(2025, 2, 0);

// if (date.getDate() == 29) {
//   console.log("високосный");
// } else {
//   console.log("обычный");
// }

// let now = new Date(); // получаем текущий момент
// let date = new Date(now.getFullYear(), 2, 8);
// console.log(date.getDay());

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
// console.log(now - date);

// 337
