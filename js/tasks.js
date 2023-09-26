// ============   Level 1;   ==============

// №1
// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
// const num = 0;
// if (num >= 0) {
//   console.log("Positive number");
// } else {
//   console.log("Negative number");
// }

// №2
// Дана строка. Выведите в консоль длину этой строки.
// const str = "Hello World!";
// console.log(str.length);

// №3
// Дана строка. Выведите в консоль последний символ строки.
// const str = "Hello World";
// console.log(str[str.length - 1]);

// №4
// Дано число. Проверьте, четное оно или нет.
// const num = 36;
// if (num % 2 == 0) {
//   console.log("number is even");
// } else {
//   console.log("number is not even");
// }

// №5
// Даны два слова. Проверьте, что первые буквы этих слов совпадают.
// const str1 = "hello";
// const str2 = "hello";
// console.log(str1[0] == str2[0]);

// №6
// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
// const str1 = "Якорь";
// let a;
// if (str1[str1.length - 1] == "ь") {
//   a = str1[str1.length - 2];
// } else {
//   a = str1[str1.length - 1];
// }
// console.log(a);

// Уровень 1.2 задачника JavaScript
// №1
// Дано число. Выведите в консоль первую цифру этого числа.
// const num = 34;
// console.log(String(num)[0]);

// №2
// Дано число. Выведите в консоль последнюю цифру этого числа.
// const num = 34;
// console.log(String(num)[String(num).length - 1]);

// №3
// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
// const num = 3448;
// const firstNum = String(num)[0];
// const lastNum = String(num)[String(num).length - 1];
// console.log(Number(firstNum) + Number(lastNum));

// №4
// Дано число. Выведите количество цифр в этом числе.
// const num = 3654;
// console.log(String(num).length);

// №5
// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
// const num1 = 246;
// const num2 = 2167;
// console.log(String(num1)[0] == String(num2)[0]);

// Уровень 1.3 задачника JavaScript
// №1
// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
// const str = "dfrwvw";
// if (str.length > 1) {
//   console.log(str[str.length - 2]);
// }

// Уровень 1.4 задачника JavaScript
// №1
// Выведите в консоль все целые числа от 1 до 100.
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// №2
// Выведите в консоль все целые числа от -100 до 0.
// for (let i = -100; i < 0; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// №3
// Выведите в консоль все целые числа от 100 до 1.
// for (let i = 100; i > 1; i--) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// №4
// Выведите в консоль все четные числа из промежутка от 1 до 100.
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// Уровень 1.5 задачника JavaScript
// №1
// Найдите сумму всех целых чисел от 1 до 100.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// №2
// Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// №3
// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 != 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// №4
// Даны два целых числа. Найдите остаток от деления первого числа на второе.
// const num1 = 345;
// const num2 = 223;
// console.log(num1 % num2);

// №5
// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
// const str = "abcdefgj";
// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]);
// }

// Уровень 1.6 задачника JavaScript
// №3
// Дан массив с числами. Найдите сумму положительных элементов этого массива.
// const arr = [-1, 2, 3, -4, 5];
// let sum = 0;
// for (const elem of arr) {
//   if (elem > 0) {
//     sum += elem;
//   }
// }
// console.log(sum);

// №4
// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
// const arr = [-1, 2, 32, -4, 5];
// let sum = 0;
// for (const elem of arr) {
//   if (elem > 0 && elem < 10) {
//     sum += elem;
//   }
// }
// console.log(sum);

// Уровень 1.7 задачника JavaScript
// №1
// Дана строка:
// 'abcde'
// Получите массив букв этой строки.
// const str = "abcde";
// const arr = str.split("");
// console.log(arr);

// №2
// Дано некоторое число:
// 12345
// Получите массив цифр этого числа.
// const num = 12345;
// const arr = String(num).split("");
// console.log(arr);

// №3
// Дано некоторое число:
// 12345
// Переверните его:
// const num = 12345;
// const newNum = Number(String(num).split("").reverse().join(""));
// console.log(newNum);

// №4
// Дано некоторое число:
// 12345
// Найдите сумму цифр этого числа.
// const num = 12345;
// const arrNum = String(num).split("");
// let sum = 0;
// for (const elem of arrNum) {
//   sum += Number(elem);
// }
// console.log(sum);

// Уровень 1.8 задачника JavaScript
// №1
// Заполните массив целыми числами от 1 до 10.
// const arr = [];
// for (let i = 1; i <= 10; i++) {
//   arr.push(i);
// }
// console.log(arr);

// №2
// Заполните массив четными числами из промежутка от 1 до 100.
// const arr = [];
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     arr.push(i);
//   }
// }
// console.log(arr);

// №3
// Дан массив с дробями:
// [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.
// const arr = [1.456, 2.125, 3.32, 4.1, 5.34];
// const newArr = [];
// for (const elem of arr) {
//   newArr.push(Math.round(elem));
// }
// console.log(newArr);

// Уровень 1.9 задачника JavaScript
// №1
// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
// const arr = ["http://ert", "frwcwv.com", "http://wwqettr"];
// const newArr = [];
// for (const elem of arr) {
//   if (elem.startsWith("http://")) {
//     newArr.push(elem);
//   }
// }
// console.log(newArr);

// №2
// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
// const arr = ["http://ert", "frwcwv.com.html", "http://wwqettr"];
// const newArr = [];
// for (const elem of arr) {
//   if (elem.endsWith(".html")) {
//     newArr.push(elem);
//   }
// }
// console.log(newArr);

// №3
// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
// const arr = [13, 21, 35, 45, 57];
// let newArr = [];
// for (const elem of arr) {
//   newArr.push(Number((elem * 1.1).toFixed(2)));
// }
// console.log(newArr);

// Уровень 1.10 задачника JavaScript
// №1
// Заполните массив случайными числами из промежутка от 1 до 100.
// const arr = [];
// for (let i = 0; i < 10; i++) {
//   arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
// }
// console.log(arr);

// №2
// Дано некоторое число:
// 12345
// Выведите в консоль все его символы с конца.
// const num = 12345;
// const arr = String(num).split("");
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// №3
// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// [1, 2]
// [3, 4]
// [5, 6]
// const array = [1, 2, 3, 4, 5, 6];
// const array_size = 2;
// const sliced_array = [];
// for (let i = 0; i < array.length; i += array_size) {
//   sliced_array.push(array.slice(i, i + array_size));
// }
// console.log(sliced_array);

// №4
// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив:
// [1, 2, 3, 4, 5, 6]
// const arr = arr1.concat(arr2);
// console.log(arr);

// Уровень 2.1 задачника JavaScript
// №1
// Дана некоторая строка. Найдите позицию первого нуля в строке.
// const num = 12086;
// console.log(String(num).indexOf("0"));

// №2
// Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.
// for (let i = 1; i <= 1000; i++) {
//   if (Number(String(i)[0]) + Number(String(i)[1]) == 5) {
//     console.log(i);
//   }
// }

// №3
// Дан массив. Удалите из него элементы с заданным значением.
// const str = "fr";
// const arr = ["de", "sw", "vg", "fr", "ji", "ww"];
// console.log(arr.indexOf(str));
// arr.splice(arr.indexOf(str), 1);
// console.log(arr);

// №4
// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.
// const arr = [1, 2, 3, 4, 5, 6, 3, 7];
// const halfArray = arr.length / 2;
// console.log(halfArray);
// let sumArr = 0;
// for (let i = 0; i < halfArray; i++) {
//   sumArr += arr[i];
// }
// console.log(sumArr);

// Уровень 2.2 задачника JavaScript
// №1
// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
// const arr = [1, -2, 3, -4, -5, 6];
// let num = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     num++;
//   }
// }
// console.log(num);
//
// const arr = [1, -2, 3, -4, -5, 6];
// let newArr = [];
// const w = arr.filter((elem) => elem > 0);
// console.log(w.length);

// №2
// Дан массив с числами. Оставьте в нем только положительные числа.
// const arr = [1, -2, 3, -4, -5, 6];
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);
//
// const arr = [1, -2, 3, -4, -5, 6];
// const newArr = arr.filter((elem) => elem > 0);
// console.log(newArr);

// №3
// Дана строка. Удалите предпоследний символ из этой строки.
// let str = "cearwq";
// let str2 = "";
// if (str.length >= 2) {
//   str2 = str.slice(0, -2) + str.slice(-1);
// }
// console.log(str2);

// №4
// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.
// function sumFirstSecondArr(arr) {
//   if (arr % 2 == 0) {
//     return "массив не четный";
//   }
//   const half = arr.length / 2;
//   const firstArr = arr.slice(0, half);
//   const lastArr = arr.slice(half);
//   const sumfirstArr = firstArr.reduce((sum, elem) => sum + elem, 0);
//   const sumlastArr = lastArr.reduce((sum, elem) => sum + elem, 0);
//   if (sumlastArr < 1) {
//     return "сумма второй половины массива мельше 1";
//   }
//   return sumfirstArr / sumlastArr;
// }
// console.log(sumFirstSecondArr([1, 2, 3, 4, 5, 6]));

// Уровень 2.3 задачника JavaScript
// №1
// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
// const word1 = "qwer";
// const word2 = "rqwer";
// console.log(word1[word1.length - 1] === word2[0]);

// №2
// Дана некоторая строка. Найдите позицию третьего нуля в строке.

// №3
// Даны числа, разделенные запятыми:
// '12,34,56'
// Найдите сумму этих чисел.
// const str = "12,34,56";
// const arrFromStr = str.split(",");
// const sum = arrFromStr.reduce((sum, elem) => sum + Number(elem), 0);
// console.log(sum);

// №4
// Дана дата в следующем формате:
// '2025-12-31'
// Преобразуйте эту дату в следующий объект:
// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }
// const str = "2025-12-31";
// const arr = str.split("-");
// const obj = {};
// obj.year = arr[0];
// obj.month = arr[1];
// obj.day = arr[2];
// console.log(obj);

// Уровень 2.4 задачника JavaScript
// №1
// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
// const str = "s55w25gty";
// const arr = str.split("");
// for (let i = 0; i < arr.length; i++) {
//   if (!isNaN(Number(arr[i]))) {
//     console.log(arr[i]);
//     break;
//   }
// }

// №2
// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
// const obj = {
//   year: "2025",
//   month: "12",
//   day: "31",
// };
// const keys = [];
// const elems = [];
// for (const elem in obj) {
//   keys.push(elem);
//   elems.push(obj[elem]);
// }
//
// const obj = {
//   year: "2025",
//   month: "12",
//   day: "31",
// };
// const keys = Object.keys(obj);
// const values = Object.values(obj);
// console.log(keys);
// console.log(values);

// №3
// Дано число. Выведите в консоль количество четных цифр в этом числе.
// const num = 18743;
// const arrNums = String(num).split("");
// arrNums.forEach((element) => {
//   if (element % 2 == 0) {
//     console.log(element);
//   }
// });

// №4
// Дана некоторая строка:
// 'abcde'
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:
// 'AbCdE'
// let str = "abcde";
// const arr = str.split("");
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 == 0) {
//     newArr.push(arr[i].toUpperCase());
//   } else {
//     newArr.push(arr[i]);
//   }
// }
// str = newArr.join("");
// console.log(str);

// №5
// Дана некоторая строка со словами:
// 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:
// 'Aaa Bbb Ccc'
// const str = "aaa bbb ccc";
// const arr = str.split(" ");
// const newArr = [];
// arr.forEach((elem) => {
//   newArr.push(elem[0].toUpperCase() + elem.slice(1));
// });
// console.log(newArr);

// Уровень 2.5 задачника JavaScript
// №1
// Дана некоторая строка, например, вот такая:
// '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.
// const str = "023m0df0dfg0";
// const arr = str.split("");
// const newArr = [];
// arr.filter((elem, index) => {
//   if (elem == "0") {
//     newArr.push(index);
//   }
// });
// console.log(newArr);

// №2
// Дана некоторая строка:
// 'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:
// 'abdeg'
// const str = "abcdefg";
// let newStr = "";
// for (let i = 0; i < str.length; i++) {
//   if ((i + 1) % 3 != 0) {
//     newStr += str[i];
//   }
// }
// console.log(newStr);

// №3
// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.
// const arr = [1, 2, 3, 4, 5, 6];
// let even = 0;
// let odd = 0;
// for (let i = 0; i < arr.length; i++) {
//   if ((i + 1) % 2 == 0) {
//     even += arr[i];
//   } else {
//     odd += arr[i];
//   }
// }
// console.log(even);
// console.log(odd);

// Уровень 2.6 задачника JavaScript
// №1
// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
// const str = "def3f52vg7k5";
// let numsArr = [];
// for (let i = 0; i < str.length; i++) {
//   if (!isNaN(Number(str[i]))) {
//     numsArr.push(str[i]);
//   }
// }
// console.log(numsArr);

// №2
// Дан массив с некоторыми числами, например, вот такой:
// [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу:
// [321, 654, 987]
// const arr = [123, 456, 789];
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   let rev = String(arr[i]).split("").reverse().join("");
//   newArr.push(Number(rev));
// }
// console.log(newArr);

// №3
// Дана некоторая строка с числом:
// '1234567'
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:
// '1 234 567'
// let str = "1234567";
// let arr = str.split("").reverse();
// let newArr = [];
// let str2 = "";
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   if ((i + 1) % 3 == 0) {
//     newArr.push(arr[i]);
//     newArr.push(" ");
//   } else {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);
// str2 = newArr.reverse().join("");
// console.log(str2);

// №4
// Дана некоторая строка:
// 'AbCdE'
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:
// 'aBcDe'
// const str = "AbCdE";
// let newStr = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] == str[i].toUpperCase()) {
//     newStr += str[i].toLowerCase();
//   } else {
//     newStr += str[i].toUpperCase();
//   }
// }
// console.log(newStr);

// №5
// Дан некоторый массив с числами, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе:
// [12, 34, 56]
// const arr = [1, 2, 3, 4, 5, 6];
// const newArr = [];
// for (let i = 0; i < arr.length; i += 2) {
//   newArr.push(Number(String(arr[i]) + String(arr[i + 1])));
// }
// console.log(newArr);

// №6
// Дана некоторая строка со словами:
// 'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:
// 'aaa Bbb ccc Eee fff'
// let str = "aaa bbb ccc eee fff";
// let newArr = [];
// const arr = str.split(" ");
// for (let i = 0; i < arr.length; i++) {
//   if ((i + 1) % 2 == 0) {
//     newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
//   } else {
//     newArr.push(arr[i]);
//   }
// }
// newArr = newArr.join(" ");
// console.log(newArr);

// Уровень 2.7 задачника JavaScript
// №1
// Дана некоторая строка:
// 'a bc def ghij'
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:
// 'A BC DEF ghij'
// const str = "a bc def ghij";
// const arr = str.split(" ");
// const newArr = [];
// for (const elem of arr) {
//   if (elem.length <= 3) {
//     newArr.push(elem.toUpperCase());
//   } else {
//     newArr.push(elem);
//   }
// }
// console.log(newArr);

// №2
// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
// const str = "a";
// if (str === str.toUpperCase()) {
//   console.log("Up");
// } else {
//   console.log("Doun");
// }

// №3
// Дано некоторое число, например, такое:
// 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:
// 28
// const num = 123789;
// const arr = String(num).split("");
// let newStr = "";
// for (const elem of arr) {
//   if (elem % 2 == 0) {
//     newStr += elem;
//   }
// }
// const newNum = Number(newStr);
// console.log(newNum);

// Уровень 2.8 задачника JavaScript
// №1
// Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.
// const str = "deQsXdA";
// const arr = str.split("");
// let num = 0;
// for (const elem of arr) {
//   if (elem === elem.toUpperCase()) {
//     num++;
//   }
// }
// if (num > 2) {
//   console.log("в этой строке больше 2-х заглавных букв!");
// } else {
//   console.log("в этой строке не больше 2-х заглавных букв!");
// }

// №2
// Дана некоторая строка:
// '1 22 333 4444 22 5555 1'
// Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:
// '1 22 333 22 1'
// let str = "1 22 333 22 1";
// const arr = str.split(" ");
// const newArr = [];
// for (const elem of arr) {
//   if (elem.length <= 3) {
//     newArr.push(elem);
//   }
// }
// str = newArr.join(" ");
// console.log(str);

// №3
// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// Слейте эти массивы в новый массив следующим образом:
// [1, 2, 'a', 'b', 'c', 3]
// let arr1 = [1, 2, 3];
// let arr2 = ["a", "b", "c"];
// arr1.splice(2, 0, ...arr2);
// console.log(arr1);

// Уровень 2.9 задачника JavaScript
// №1
// Дано некоторое число:
// 123456
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:
// 12 + 34 + 56
// const num = 123456;
// const arr = String(num).split("");
// let sum = 0;
// for (let i = 0; i < arr.length; i += 2) {
//   sum += Number(arr[i] + arr[i + 1]);
// }
// console.log(sum);

// №2
// Дан массив с числами:
// [1, 2, 3, 4, 5]
// Выведите в консоль элементы этого массива в обратном порядке.
// let arr = [1, 2, 3, 4, 5];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// Уровень 2.10 задачника JavaScript
// №1
// Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.
// function countiSymbols(str) {
//   const arr = str.split("");
//   let num = 0;
//   for (const elem of arr) {
//     if (isNaN(Number(elem))) {
//       num++;
//     }
//   }
//   return num;
// }
// const str = "e45t75";
// if (countiSymbols(str) > 3) {
//   console.log("в это строке больше 3-х букв!");
// } else {
//   console.log("в это строке не больше 3-х букв!");
// }

// №2
// Дано число. Получите первую четную цифру с конца этого числа.
// const str = "3147849";
// const arr = str.split("");
// for (const elem of arr) {
//   if (elem % 2 == 0) {
//     console.log(elem);
//     break;
//   }
// }

// №3
// Дана некоторая строка:
// 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!':
// '!bcde !bcde !bcde'
// const str = "abcde abcde abcde";
// const arr = str.split(" ");
// const newArr = [];
// for (const elem of arr) {
//   let x = elem[0];
//   newArr.push(elem.replace(x, "!"));
// }
// console.log(newArr);

// №4
// Дан массив с числами:
// [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.
// const arr = [1, 2, 3, 7, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === arr[i + 1]) {
//     console.log("good");
//     break;
//   }
// }

// Уровень 3.1 задачника JavaScript
// №1
// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.
// const num = 12345;
// const arr = String(num).split("");
// let flag = true;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > arr[i + 1]) {
//     flag = false;
//     break;
//   }
// }
// console.log(flag);

// №2
// Дан массив:
// [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.
// const arr = [1, "", 2, 3, "", 5];
// const newArr = [];
// for (const elem of arr) {
//   if (elem !== "") {
//     newArr.push(elem);
//   }
// }
// console.log(newArr);
//
// const arr = [1, "", 2, 3, "", 5];
// const newArr = arr.filter((elem) => {
//   return elem !== "";
// });
// console.log(newArr);

// №3
// Дан массив:
// [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]
// Отсортируйте элементы в каждом подмассиве.
// const arr = [
//   [2, 1, 4, 3, 5],
//   [3, 5, 2, 4, 1],
//   [4, 3, 1, 5, 2],
// ];
// for (const elem of arr) {
//   elem.sort();
// }
// console.log(arr);

// №4
// Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];
// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];
// let arr22 = [];
// for (let i = 0; i < arr1.length; i++) {
//   arr22.push(arr2[i]);
// }
// console.log(arr1);
// console.log(arr22);

// Уровень 3.2 задачника JavaScript
// №1
// Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.
// for (let i = 10; i <= 1000; i++) {
//   let numArr = String(i).split("");
//   if (numArr[numArr.length - 2] % 2 == 0 && numArr[numArr.length - 2] != 0) {
//     console.log(i);
//   }
// }

// №2
// Дан массив. Удалите из него каждый пятый элемент.
// const arr = ["csfrte", "fdcxdyt", "yh34dfv"];
// const newArr = arr.map((elem) => {
//   let x = elem.split("").splice(4, 1);
//   return elem.replace(x, "");
// });
// console.log(newArr);

// №3
// Дана некоторая переменная с числом:
// let num = 5;
// Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:
// '00000'
// let num = 5;
// let str = "";
// for (let i = 0; i < num; i++) {
//   str += "0";
// }
// console.log(str);

// №4
// Дана некоторая строка со словами:
// 'aaa bbb ccc eee fff'
// Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:
// 'aaa ccc fff'
// const str = "aaa bbb ccc eee fff";
// const arr = str.split(" ");
// let newArr = [];
// for (let i = 0; i < arr.length; i += 2) {
//   newArr.push(arr[i]);
// }
// let newStr = newArr.join(" ");
// console.log(newStr);

// №5
// Дан массив:
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Найдите сумму элементов этого массива.
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let sum = 0;
// for (const elem of arr) {
//   for (const num of elem) {
//     sum += num;
//   }
// }
// console.log(sum);

// Уровень 3.3 задачника JavaScript
// №1
// Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.
// const arr = ["csfrte", "fdc", "yh", "rfs5"];
// const newArr = arr.filter((elem) => {
//   return elem.length <= 3;
// });
// console.log(newArr);

// №2
// Дано некоторое число:
// 1357
// Проверьте, что все цифры этого числа являются нечетными.
// const num = 1357;
// const res = String(num)
//   .split("")
//   .every((elem) => {
//     return elem % 2 !== 0;
//   });
// console.log(res);

// №3
// Дано некоторое слово:
// 'abcba'
// Проверьте, что это слово читается одинаково с любой стороны.
// const strOriginal = "abcba";
// const strReverse = strOriginal.split("").reverse().join("");
// const result = strOriginal === strReverse;
// console.log(result);

// №4
// Дан массив:
// [
// 	[
// 		[11, 12, 13],
// 		[14, 15, 16],
// 		[17, 17, 19],
// 	],
// 	[
// 		[21, 22, 23],
// 		[24, 25, 26],
// 		[27, 27, 29],
// 	],
// 	[
// 		[31, 32, 33],
// 		[34, 35, 36],
// 		[37, 37, 39],
// 	],
// ]
// Найдите сумму элементов этого массива.
// const arr = [
//   [
//     [11, 12, 13],
//     [14, 15, 16],
//     [17, 17, 19],
//   ],
//   [
//     [21, 22, 23],
//     [24, 25, 26],
//     [27, 27, 29],
//   ],
//   [
//     [31, 32, 33],
//     [34, 35, 36],
//     [37, 37, 39],
//   ],
// ];
// let sum = 0;
// for (const elem of arr) {
//   for (const elem2 of elem) {
//     for (const num of elem2) {
//       sum += Number(num);
//     }
//   }
// }
// console.log(sum);

// Уровень 3.4 задачника JavaScript
// №1
// Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.
// for (let i = 10; i <= 1000; i++) {
//   let num = String(i).split("");
//   if (num[0] % 2 == 0) {
//     console.log(i);
//   }
// }

// №2
// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поменяйте местами пары элементов этого массива:
// [2, 1, 4, 3, 6, 5]
// const arr = [1, 2, 3, 4, 5, 6];
// const newArr = [];
// for (let i = 0; i < arr.length; i += 2) {
//   newArr.push(arr[i + 1]);
//   newArr.push(arr[i]);
// }
// console.log(newArr);

// №3
// Дан следующий объект:
// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }
// Найдите сумму элементов этого объекта.
// let obj = {
//   1: {
//     1: 11,
//     2: 12,
//     3: 13,
//   },
//   2: {
//     1: 21,
//     2: 22,
//     3: 23,
//   },
//   3: {
//     1: 24,
//     2: 25,
//     3: 26,
//   },
// };
// let num = 0;
// for (let key in obj) {
//   let subObj = obj[key];

//   for (let subKey in subObj) {
//     num += subObj[subKey];
//   }
// }
// console.log(num);

// Уровень 3.5 задачника JavaScript
// №1
// Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.
// const str = document.querySelector("#text");
// const arr = str.textContent.split(" ");
// const newArr = [];
// for (const word of arr) {
//   if (word[0] == "a") {
//     newArr.push(word);
//   }
// }
// console.log(newArr);

// №2
// Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.
// const arr = [1, 20, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = arr.filter((elem) => {
//   return elem % 5 === 0;
// });
// console.log(newArr);

// №3
// Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.
// const arr = [1, 20, 3, 4, 505, 6103, 700, 8, 9, 10];
// function findZiroElem(array) {
//   const arr = array.filter((elem) => {
//     return String(elem).includes("0");
//   });
//   return arr;
// }
// const newArr = findZiroElem(arr);
// console.log(newArr);

// №4
// Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.
// const arr = [1, 20, 26, 4, 505, 6102, 700, 83, 9, 10];
// function findNumber3(arr) {
//   const array = arr.some((elem) => {
//     return String(elem).includes("3");
//   });
//   if (array) {
//     console.log("В массиве есть число 3!");
//   } else {
//     console.log("В массиве нету числа 3!");
//   }
// }
// findNumber3(arr);

// №5
// Дано некоторое число:
// 35142
// Отсортируйте цифры этого числа. В нашем случае должно получится следующее:
// 12345
// const str = 35142;
// const newStr = Number(String(str).split("").sort().join(""));
// console.log(newStr);

// №6
// Напишите программу, которая сформирует следующую строку:
// '-1-2-3-4-5-'
// function addHyphens(num) {
//   let str = "";
//   const arr = String(num).split("");
//   for (const elem of arr) {
//     str += elem + "-";
//   }
//   return "-" + str;
// }
// console.log(addHyphens(12345));

// №7
// Дан следующий объект:
// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// }
// Найдите сумму элементов этого объекта.
// let obj = {
//   1: {
//     1: {
//       1: 111,
//       2: 112,
//       3: 113,
//     },
//     2: {
//       1: 121,
//       2: 122,
//       3: 123,
//     },
//   },
//   2: {
//     1: {
//       1: 211,
//       2: 212,
//       3: 213,
//     },
//     2: {
//       1: 221,
//       2: 222,
//       3: 223,
//     },
//   },
//   3: {
//     1: {
//       1: 311,
//       2: 312,
//       3: 313,
//     },
//     2: {
//       1: 321,
//       2: 322,
//       3: 323,
//     },
//   },
// };
// let sum = 0;
// for (const elem1 in obj) {
//   let keyElem1 = obj[elem1];
//   for (const elem2 in keyElem1) {
//     let keyElem2 = keyElem1[elem2];
//     for (const elem3 in keyElem2) {
//       sum += keyElem2[elem3];
//     }
//   }
// }
// console.log(sum);

// Уровень 3.6 задачника JavaScript
// №1
// Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.
// const arr = [14, 426, 2, 67, 4765, 300, 5739, 10005];
// const newArr = arr.filter((elem) => {
//   return String(elem).length <= 3;
// });
// console.log(newArr);

// №2
// Дано число, например, вот такое:
// let num = 12345;
// Проверьте, что все цифры этого числа больше нуля.
// let num = 12345;
// const arr = String(num).split("");
// const result = arr.every((elem) => {
//   return Number(elem) > 0;
// });
// console.log(result);

// №3
// Дан некоторый массив, например, вот такой:
// [123, 456, 789]
// Слейте все элементы этого массива в один массив, разбив их посимвольно:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const arr = [123, 456, 789];
// const newArr = [];
// for (const elem of arr) {
//   let arr = String(elem).split("");
//   for (const num of arr) {
//     newArr.push(Number(num));
//   }
// }
// console.log(newArr);
//
// const arr = [123, 456, 789];
// let newArr = [];
// for (const elem of arr) {
//   newArr.push(...String(elem));
// }
// console.log(newArr);

// №4
// Дан следующая структура:
// let data = [
// 	{
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	{
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	{
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// ];
// Найдите сумму элементов этой структуры.

// let data = [
//   {
//     1: 11,
//     2: 12,
//     3: 13,
//   },
//   {
//     1: 21,
//     2: 22,
//     3: 23,
//   },
//   {
//     1: 24,
//     2: 25,
//     3: 26,
//   },
// ];

// let sum = 0;
// for (const elem of data) {
//   for (const key in elem) {
//     sum += elem[key];
//   }
// }
// console.log(sum);

// Уровень 3.7 задачника JavaScript
// №1
// Дана строка со словами. Отсортируйте слова в алфавитном порядке.
// const str = document.querySelector("p");
// const text = str.textContent;
// const arrText = text.split(" ").sort().join(" ");
// console.log(arrText);

// №2
// Дано число. Получите массив делителей этого числа.
// const num = 25;
// const arr = [];
// for (let i = 1; i <= num; i++) {
//   if (num % i == 0) {
//     arr.push(i);
//   }
// }
// console.log(arr);

// №3
// Даны два числа. Получите массив общих делителей этих чисел.
// const num1 = 25;
// const num2 = 37;
// function divideNumbers(num) {
//   const arr = [];
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// const newArr = divideNumbers(num1).concat(divideNumbers(num2));
// console.log(newArr);

// №4
// Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.
// const num = 25;
// if (divideNumbers(num).length > 1) {
//   console.log("Делителей больше одного!");
// } else {
//   console.log("Один делитель!");
// }
// console.log(divideNumbers(num));
// function divideNumbers(num) {
//   const arr = [];
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// №5
// Через запятую написаны числа. Получите максимальное из этих чисел.
// const str = "2.7.35.777.83.13.6.17";
// function maxNumOfNams(str) {
//   const arr = str.split(".");
//   return Math.max(...arr);
// }
// console.log(maxNumOfNams(str));

// №6
// Дан массив с числами. После каждого однозначного числа вставьте еще такое же.
// const arr = [2, 15, 6, 3, 7, 46, 28, 5];
// function func(arr) {
//   const newArr = [];
//   for (const elem of arr) {
//     if (String(elem).length === 1) {
//       newArr.push(Number(String(elem) + String(elem)));
//     } else {
//       newArr.push(Number(String(elem)));
//     }
//   }
//   return newArr;
// }
// console.log(func(arr));

// №7
// Дана строка. Удалите из нее все гласные буквы.
// const str = "lorem ipsum dolor sit amet";
// const newStr = str.replace(/[AEIOUaeiou]/g, "");
// console.log(newStr);
//
// const str = "lorem ipsum dolor sit amet";
// function func(str) {
//   const strVowels = "AEIOUaeiou";
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (strVowels.indexOf(str[i]) === -1) {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }
// console.log(func(str));

// №8
// Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.
// let str = "lorem ipsum dolor sit";
// const arr = str.split(" ");
// let newArr = [];
// for (const elem of arr) {
//   newArr.push(
//     elem.slice(0, elem.length - 1) + elem[elem.length - 1].toUpperCase()
//   );
// }
// str = newArr.join(" ");
// console.log(str);

// №9
// Дан следующая структура:
// let data = [
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// ];
// Найдите сумму элементов этой структуры.
// let data = [
//   {
//     1: [1, 2, 3],
//     2: [1, 2, 3],
//     3: [1, 2, 3],
//   },
//   {
//     1: [1, 2, 3],
//     2: [1, 2, 3],
//     3: [1, 2, 3],
//   },
//   {
//     1: [1, 2, 3],
//     2: [1, 2, 3],
//     3: [1, 2, 3],
//   },
// ];
// let sum = 0;
// for (const elem of data) {
//   for (const elem2 in elem) {
//     let key = elem[elem2];
//     for (const num in key) {
//       sum += key[num];
//     }
//   }
// }
// console.log(sum);

// Уровень 3.8 задачника JavaScript
// №1
// Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.
// const arr = [34, 31, 53, 731, 3, 853];
// const res = arr.every((elem) => {
//   return String(elem).includes("3");
// });
// console.log(res);

// №2
// Дана строка в формате:
// 'kebab-case'
// Преобразуйте ее в формат:
// 'snake_case'
// const str = "kebab-case";
// const arr = str.split("-");
// const newArr = arr.splice(1, 1);
// newArr.unshift("snake");
// const newStr = newArr.join("_");
// console.log(newStr);

// №3
// Дана строка в формате:
// 'snake_case'
// Преобразуйте ее в формат:
// 'camelCase'
// const str = "snake_case";
// const arr = str.split("_");
// const newStr = arr.splice(1, 1).join("");
// const newStr2 = "camel" + newStr[0].toUpperCase() + newStr.slice(1);
// console.log(newStr2);

// №4
// Дана строка в формате:
// 'camelCase'
// Преобразуйте ее в формат:
// 'snake_case'
// const str = "camelCase";
// const a = str.slice(-4);
// const newStr2 = "snake_" + a[0].toLowerCase() + a.slice(1);
// console.log(newStr2);

// №5
// Сформируйте с помощью циклов следующий массив:
// [
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// ]
// const arr = [];
// for (let i = 0; i < 5; i++) {
//   arr[i] = [];
//   for (let j = 1; j < 4; j++) {
//     arr[i].push(j);
//   }
// }
// console.log(arr);

// Уровень 3.9 задачника JavaScript
// №1
// Дана строка. Проверьте, что эта строка состоит только из цифр.
// function func(str) {
//   const arr = str.split("");
//   return arr.every((elem) => {
//     return !isNaN(Number(elem));
//   });
// }
// console.log(func("12345"));

// №2
// Дана строка. Проверьте, что эта строка состоит только из четных цифр.
// const str = "1234";
// function func(str) {
//   const arr = str.split("");
//   const res = arr.every((elem) => {
//     return !isNaN(Number(elem));
//   });
//   if (str.length === 4 && res === true) {
//     console.log("Эта строка из 4-х цифр!");
//   } else {
//     console.log("Эта строка не из 4-х цифр!");
//   }
// }
// func(str);

// №3
// Дан массив со числами. Удалите из него числа, имеющие два и более нуля.
// const arr = [15, 4030, 2100, 70, 4050, 80, 390];
// function func(arr) {
//   const newArr = [];
//   for (const elem of arr) {
//     let arr2 = String(elem).split("");
//     let num = 0;
//     for (const elem2 of arr2) {
//       if (elem2 == "0") {
//         num++;
//       }
//     }
//     if (num < 2) {
//       newArr.push(elem);
//     }
//   }
//   return newArr;
// }
// console.log(func(arr));

// №4
// Найдите все числа от 1 до 1000, сумма цифр которых равна 13.
// for (let i = 1; i <= 1000; i++) {
//   let arrNum = String(i).split("");
//   let num = 0;
//   for (const elem of arrNum) {
//     num += Number(elem);
//   }
//   if (Number(num) == 13) {
//     console.log(i);
//   }
// }

// №5
// Сформируйте с помощью циклов следующий массив:
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]

// const arr = [];
// let num = 1;
// for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 1; j <= 3; j++) {
//     arr[i].push(num);
//     num++;
//   }
// }
// console.log(arr);

// Уровень 3.10 задачника JavaScript
// №1
// Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.
// const arr = [34, "fd", "5b", 77];
// const newArr = [];
// for (const elem of arr) {
//   newArr.push(String(elem) + String(elem));
// }
// const newArr2 = [];
// for (const elem of newArr) {
//   if (!isNaN(Number(elem))) {
//     newArr2.push(Number(elem));
//   } else {
//     newArr2.push(elem);
//   }
// }
// console.log(newArr2);

// №2
// Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.
// const arr = [12, 45, 50, 432, 437, 100];
// const num = 25;
// const newArr = arr.filter((elem) => {
//   return elem % num == 0;
// });
// console.log(newArr);

// №3
// Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.

// №4
// Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.

// №5
// Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.

// №6
// Дан массив:
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Слейте элементы этого массива в один одномерный массив:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const newArr = [];
// for (const elem of arr) {
//   for (const num of elem) {
//     newArr.push(num);
//   }
// }
// console.log(newArr);

// Уровень 4.1 задачника JavaScript
// №1
// Сделайте функцию, которая вернет текущий день недели словом.
// function func() {
//   const week = [
//     "Понедельник",
//     "Вторник",
//     "Среда",
//     "Четверг",
//     "Пятница",
//     "Суббота",
//     "Воскресенье",
//   ];
//   const data = new Date();
//   return console.log(week[data.getDay() - 1]);
// }
// func();

// №2
// Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.

// №3
// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.

// №4
// Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.
// function func(num, str) {
//   return str.slice(0, num);
// }
// console.log(func(8, "Hello, world!"));

// №5
// Сделайте функцию, которая параметром будет получать дату, а возвращать знак зодиака, соответствующий этой дате.

// №6
// Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.
// function func(num) {
//   const arr = [];
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       arr.push(i);
//     }
//   }
//   let res = arr.reduce(function (sum, elem) {
//     return sum + elem;
//   }, 0);
//   return res;
// }
// console.log(func(25));

// Уровень 4.2 задачника JavaScript
// №1
// Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
// const num = 327;
// function func(num) {
//   const arr = String(num).split("");
//   let res = arr.reduce(function (sum, elem) {
//     return sum + Number(elem);
//   }, 0);
//   return res;
// }
// console.log(func(num));

// №2
// Сделайте функцию, которая параметром будет принимать число и удалять из него нули.
// function func(num) {
//   const arr = String(num).split("");
//   const res = arr.filter((elem) => {
//     return elem != 0;
//   });
//   return Number(res.join(""));
// }
// console.log(func(1205007));

// №3
// Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет.

// №4
// Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.

// №5
// Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.

// №6
// Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.

// №7
// Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:
// {
// 	next: 'пн',
// 	curr: 'вс',
// 	prev: 'сб',
// }

// Уровень 4.3 задачника JavaScript
// №1
// Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.
// function func(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) === i) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(func([23, 65, "hy", 65, "bg", 32, 6, "hy", 6, 23]));

// №2
// Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз.
// function func(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (func1(arr, arr[i]) < 4) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// вспомогательная функция
// function func1(arr, value) {
//   let num = 0;
//   for (const elem of arr) {
//     if (elem == value) {
//       num++;
//     }
//   }
//   return num;
// }
// const arr = [23, 65, "hy", 65, "bg", 65, 32, "hy", 65, 23, "hy", "hy"];
// console.log(func(arr));

// №3
// Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.
// function func(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(func([1, 2, 3, 3, 7, 6, 8, 8, "dd", 7, "ee", "ee", 10]));

// №4
// Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта:
// {
// 	max: 9,
// 	min: 1,
// }
// function func(arr) {
//   const obj = {};
//   obj.max = Math.max(...arr);
//   obj.min = Math.min(...arr);
//   return obj;
// }
// console.log(func([1, 2, 3, 4, 5]));

// Уровень 4.4 задачника JavaScript
// №1
// Сделайте функцию, которая параметром будет принимать число, а количество его делителей.
// function func(num) {
//   let res = 0;
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       res++;
//     }
//   }
//   return res;
// }
// console.log(func(55));

// №2
// Сделайте функцию, которая параметром будет принимать дату, а возвращать знак зодиака, соответствующий этой дате.

// №3
// Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.
// function func(num) {
//   const arr = [];
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(func(55));

// №4
// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
// function func(num) {
//   let res = "простое число!";
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       res = "не простое число!";
//     }
//   }
//   return res;
// }
// console.log(func(31));

// №5
// Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.
// function func(num) {
//   let arr = String(num).split("");
//   const newArr = arr.filter((elem) => {
//     return Number(elem) % 2 !== 0;
//   });
//   let res = Number(newArr.join(""));
//   return res;
// }
// console.log(func(12345678));

// №6
// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.
// function func(from, to, length) {
//   const arr = [];
//   for (let i = 0; i < length; i++) {
//     let randomNum = Math.floor(Math.random() * (to - from + 1)) + from;
//     arr.push(randomNum);
//   }
//   return arr;
// }
// console.log(func(1, 8, 10));

// Уровень 4.5 задачника JavaScript
// №1
// Дана переменная со строкой. Проверьте, что в эта строка представляет собой число, то есть состоит только из цифр.
// const str = "12345";
// const arr = str.split("");
// function func(arr) {
//   for (const elem of arr) {
//     if (!Number(elem)) {
//       console.log("NO");
//       return;
//     }
//   }
//   return console.log("GOOD");
// }
// func(arr);

// №2
// Дана переменная со строкой. Проверьте, что в эта строка представляет собой дробь.
// const str = "1255";
// const arr = str.split("");
// const res = arr.some((elem) => {
//   return elem == ".";
// });
// console.log(res);

// №3
// Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число.
// function func(arr) {
//   arr.sort((a, b) => {
//     return b - a;
//   });
//   return arr[1];
// }
// console.log(func([4, 6, 12, 5, 80, 4, 17, 2, 4]));

// №4
// Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, заполненный целыми числами от минимального параметра до максимального.
// function func(min, max) {
//   const arr = [];
//   for (let i = min; i <= max; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(func(1, 4));

// №5
// Сделайте функцию, которая заполнит массив случайными латинскими буквами.
// function func(lengthStr) {
//   const str = "qwertyuiopasdfghjklzxcvbnm";
//   let newArr = [];
//   for (let i = 0; i < lengthStr; i++) {
//     let randomNum = Math.floor(Math.random() * (str.length - 1 + 1)) + 1;
//     newArr.push(str[randomNum]);
//   }
//   return newArr;
// }
// console.log(func(5));

// №6
// Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи.

// Уровень 4.6 задачника JavaScript
// №1
// Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день, и определять, существует ли такая дата или нет.

// №2
// Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами.
// function func(lengthStr) {
//   const str = "qwertyuiopasdfghjklzxcvbnm";
//   let newStr = "";
//   for (let i = 0; i < lengthStr; i++) {
//     let randomNum = Math.floor(Math.random() * (str.length - 1 + 1)) + 1;
//     newStr += str[randomNum];
//   }
//   return newStr;
// }
// console.log(func(5));

// №3
// Сделайте функцию, которая параметром будет получать строку со словами, а возвращать строку в верхнем регистре, состоящую из первых букв слов.
// function func(str) {
//   let newStr = "";
//   const arr = str.split(" ");
//   arr.forEach((element) => {
//     newStr += element[0].toUpperCase();
//   });
//   return newStr;
// }
// console.log(func("dewv ef es asww verv"));

// №4
// Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей.
// function func(arr) {
//   const array = [];
//   for (const elem of arr) {
//     let arrElems = [];
//     for (let i = 1; i <= elem; i++) {
//       if (elem % i == 0) {
//         arrElems.push(i);
//       }
//     }
//     array.push(arrElems);
//   }
//   return array;
// }
// const arr1 = [23, 64, 31, 28, 25, 55];
// console.log(func(arr1));

// №5
// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта:
// {
// 	d: 12,
// 	h: 10,
// 	m: 59,
// 	s: 59,
// }

// Уровень 4.7 задачника JavaScript
// №1
// Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.
// function func(text) {
//   return text.split(" ").sort().join(" ");
// }
// const text1 = "sdvd as revf bvrsv wswdw acrht evfbrgv";
// console.log(func(text1));

// №2
// Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.
// function func(arr1, arr2) {
//   const arr = [];
//   for (const elem of arr1) {
//     if (arr2.includes(elem)) {
//       arr.push(elem);
//     }
//   }
//   return arr;
// }
// console.log(func([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// №3
// Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.
// let num = null;
// function func() {
//   let num1 = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
//   if (num === num1) {
//     func();
//   } else {
//     return num1;
//   }
// }
// console.log(func());

// №4
// Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:
// let arr = [1, 2, 3, 4, 5];
// func(arr, 1); // 2
// func(arr, 4); // 5
// func(arr, 5); // 1
//
// function func(arr, num) {
//   const newElem = arr.indexOf(num);
//   if (arr[newElem] == arr[arr.length - 1]) {
//     return console.log(arr[0]);
//   } else {
//     return console.log(arr[newElem + 1]);
//   }
// }
// let arr1 = [1, 2, 3, 4, 5];
// func(arr1, 5);

// Уровень 4.8 задачника JavaScript
// №1
// Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.
// function func(arr) {
//   return arr[Math.floor(Math.random() * (arr.length - 1 - 0 + 1)) + 0];
// }
// console.log(func([1, 2, 3, 4, 5]));

// №2
// Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.
// function func(arr) {
//   let randomLength = Math.floor(Math.random() * (arr.length - 1 - 1 + 1)) + 1;
//   const newArr = [];
//   for (let i = 0; i < randomLength; i++) {
//     let randomNum = Math.floor(Math.random() * (arr.length - 1 - 0 + 1)) + 0;
//     newArr.push(arr[randomNum]);
//   }
//   return newArr;
// }
// console.log(func([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// №3
// Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.

// №4
// Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.
// function func(from, to) {
//   const arr = [];
//   for (let i = from; i <= to; i++) {
//     if (funcHelp(i)) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// function funcHelp(num) {
//   let res = true;
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       res = false;
//     }
//   }
//   return res;
// }
// console.log(func(1, 100));

// №5
// Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвщать их сумму.
// function func(...elems) {
//   return elems.reduce((sum, elem) => {
//     return sum + Number(elem);
//   }, 0);
// }
// console.log(func(1, 2, 3, 4, 5));

// №6
// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.

// №7
// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись.
// function func(arr) {
//   let randomLength = Math.floor(Math.random() * (arr.length - 1 - 1 + 1)) + 1;
//   const newArr = [];
//   for (let i = 0; i < randomLength; i++) {
//     let randomNum = Math.floor(Math.random() * (arr.length - 1 - 0 + 1)) + 0;
//     newArr.push(arr[randomNum]);
//   }
//   return newArr;
// }
// function funcHalp(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) === i) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(
//   funcHalp(func([1, 3, 5, 3, 2, 4, 6, 7, 6, 8, 9, 12, 3, 22, 45, 66]))
// );

// Уровень 4.9 задачника JavaScript
// №1
// Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля.

// №2
// Сделайте функцию, которая будет возвращать дату следующей масленницы, которая празднуется в последнее воскресенье зимы.

// №3
// Сделайте функцию, которая будет возвращать случайный цвет.
// function func() {
//   let color1 = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
//   let color2 = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
//   let color3 = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
//   const str = color1 + ", " + color2 + ", " + color3;
//   return str;
// }
// const block = document.querySelector(".block");
// block.style.background = "rgb" + "(" + func() + ")";

// №4
// Сделайте функцию, которая параметром будет принимать массив чисел и возвращать массив общих делителей всех чисел из переданного массива.
// function func(arr) {
//   const newArr = [];
//   for (const elem of arr) {
//     for (let i = 1; i <= elem; i++) {
//       if (elem % i === 0) {
//         newArr.push(i);
//       }
//     }
//   }
//   return newArr;
// }
// //
// function func3(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) === i) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// №5
// Сделайте функцию, которая параметром будет принимать двухмерный массив чисел и возвращать массив максимальных чисел в каждом подмассиве.
// const arr = [
//   [10, 2, 3],
//   [4, 2, 7, 4],
//   [3, 7, 12, 32, 7, 4],
// ];
// function func(arr) {
//   const newArr = [];
//   for (const elem of arr) {
//     newArr.push(Math.max(...elem));
//   }
//   return newArr;
// }
// console.log(func(arr));

// Уровень 4.10 задачника JavaScript
// №1
// Сделайте функцию, которая параметром будет принимать букву и проверять, это буква кириллицы или латиницы.
// function func(letter) {
//   const str1 = "qwertyuiopasdfghjklzxcvbnm";
//   const str2 = "йцукенгшщзфывапролдячсмить";
//   let elem = letter.toLowerCase();
//   if (str1.includes(elem)) {
//     console.log("Латиница");
//   } else if (str2.includes(elem)) {
//     console.log("Кирилица");
//   } else {
//     console.log("Символ не буква!");
//   }
// }
// func("w");

// №2
// Сделайте функцию, которая параметром будет принимать массив и перемешивать элементы этого массива в случайном порядке.
// function func(arr) {
//   const newArr = [];
//   const a = arr.length;
//   for (let i = 0; i < a; i++) {
//     let rand = Math.floor(Math.random() * (arr.length - 1 - 0 + 1)) + 0;
//     newArr.push(...arr.splice(rand, 1));
//   }
//   return newArr;
// }
// console.log(func([1, 2, 3, 4, 5]));

// №3
// Дан текст со словами. Запишите все слова этого текста в специальный объект. Ключами в этом объекте будут буквы, а значениями - массивы слов, начинающихся на эти буквы.
// const str = "hello world I am Sasha";
// function func(text) {
//   let obj = {};
//   const arr = text.split(" ");
//   for (const elem of arr) {
//     obj[elem[0]] = elem;
//   }
//   return obj;
// }
// console.log(func(str));

// №4
// Сделайте функцию, которая параметром будет принимать число, а возвращать это число прописью, то есть словами.

// №5
// Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей, являющихся простыми числами.

// №6
// Сделайте функцию, которая параметром будет принимать слово и возвращать массив его слогов.

// Уровень 5.1 задачника JavaScript
// №1
// Даны два инпута, абзац и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите в абзац сумму этих чисел.
// const input1 = document.querySelector(".input1");
// const input2 = document.querySelector(".input2");
// const text = document.querySelector(".text");
// const button = document.querySelector(".button");
// button.addEventListener("click", function () {
//   text.textContent = Number(input1.value) + Number(input2.value);
// });

// №2
// Дан абзац с числом и кнопка. По нажатию на кнопку возведите текст абзаца в квадрат.
// const text = document.querySelector(".text");
// const button = document.querySelector(".button");
// button.addEventListener("click", function () {
//   text.textContent = text.textContent * 2;
// });

// №3
// Дан абзацы с числами, абзац и кнопка. По нажатию на кнопку найдите сумму значений абзацев и запишите ее в абзац.
// const textNum1 = document.querySelector(".textNum1");
// const textNum2 = document.querySelector(".textNum2");
// const text = document.querySelector(".text");
// const button = document.querySelector(".button");
// button.addEventListener("click", function () {
//   text.textContent =
//     Number(textNum1.textContent) + Number(textNum2.textContent);
// });

// №4
// Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его значение возводилось в квадрат.
// const texts = document.querySelectorAll("p");
// for (const elem of texts) {
//   elem.addEventListener("click", function () {
//     elem.textContent *= 2;
//   });
// }
//
// const textNum2 = document.querySelector(".textNum2");
// textNum1.addEventListener("click", function () {
//   textNum1.textContent *= 2;
// });
// textNum2.addEventListener("click", function () {
//   textNum2.textContent *= 2;
// });

// №5
// Даны инпуты, в которые вводятся числа. Сделайте так, чтобы по потери фокуса в любом инпуте его значение возводилось в квадрат.
// const inputs = document.querySelectorAll("input");
// for (const input of inputs) {
//   input.addEventListener("blur", function () {
//     this.value *= 2;
//   });
// }

// Уровень 5.2 задачника JavaScript
// №1
// Дан абзац и кнопка. По нажатию на кнопку найдите сумму чисел от 1 до 100 и запишите результат в абзац.
// const text = document.querySelector(".text");
// const button = document.querySelector(".button");
// button.addEventListener("click", function () {
//   let res = 0;
//   for (let i = 1; i <= 100; i++) {
//     res += i;
//   }
//   text.textContent = res;
// });

// №2
// Дана кнопка и два инпута. В инпуты вводятся числа. По нажатию на кнопку найдите сумму введенных чисел.
// const tests = document.querySelectorAll("input");
// const button = document.querySelector(".button");
// button.addEventListener("click", function () {
//   console.log(Number(tests[0].value) + Number(tests[1].value));
// });

// №3
// Даны абзацы, кнопка и див. По нажатию на кнопку найдите количество абзацев и выведите это значение в див.
// const texts = document.querySelectorAll("p");
// const button = document.querySelector(".button");
// const block = document.querySelector(".block");
// button.addEventListener("click", function () {
//   block.textContent = texts.length;
// });

// №4
// Дана кнопка и инпут. В инпут вводится строка. По нажатию на кнопку определите, сколько символов в введенной строке.
// const text = document.querySelector("input");
// const button = document.querySelector(".button");
// button.addEventListener("click", function () {
//   console.log(text.value.length);
// });

// Уровень 5.3 задачника JavaScript
// №1
// Дан абзац, инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал введенного числа.
// const input = document.querySelector(".input1");
// const text = document.querySelector("p");
// const button = document.querySelector(".button");
// button.addEventListener("click", function () {
//   text.textContent = func(input.value);
// });
// function func(num) {
//   let res = 1;
//   for (let i = 2; i <= num; i++) {
//     res *= i;
//   }
//   return res;
// }

// №2
// Даны два инпута, кнопка и абзац. В инпуты вводятся целые числа. Определите, какое из введенных чисел больше и выведите его в абзац.
// const inputs = document.querySelectorAll("input");
// const text = document.querySelector("p");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   let res = 0;
//   if (inputs[0].value > inputs[1].value) {
//     res = inputs[0].value;
//   } else if (inputs[0].value < inputs[1].value) {
//     res = inputs[1].value;
//   } else {
//     res = "Числа одинаковые!";
//   }
//   text.textContent = res;
// });

// №3
// Дана кнопка и инпут. В инпут вводится число. По нажатию на кнопку найдите сумму цифр введеного числа.
// const input = document.querySelector("input");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   const arr = input.value.split("");
//   const res = arr.reduce((sum, elem) => {
//     return sum + Number(elem);
//   }, 0);
//   return console.log(res);
// });

// №4
// Дан абзац, инпут и кнопка. В инпут вводится слово. По нажатию на кнопку переверните слово и запишите его в абзац.
// const input = document.querySelector("input");
// const text = document.querySelector("p");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   text.textContent = input.value.split("").reverse().join("");
// });

// №5
// Даны пустые абзацы и кнопка. По нажатию на кнопку заполните абзацы числами по порядку.
// const texts = document.querySelectorAll("p");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   for (let i = 0; i < texts.length; i++) {
//     texts[i].textContent = i + 1;
//   }
// });

// №6
// Дан инпут, абзац и кнопка. В инпут вводится число. По клику на кнопку выведите в абзац факториал этого числа.
// const input = document.querySelector("input");
// const text = document.querySelector("p");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   let sum = 1;
//   for (let i = 2; i <= input.value; i++) {
//     sum *= i;
//   }
//   text.textContent = sum;
// });

// Уровень 5.4 задачника JavaScript
// №1
// Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текстом становилось значение '!'.
// const texts = document.querySelectorAll("p");
// for (const elem of texts) {
//   elem.addEventListener("click", function () {
//     this.textContent += "!";
//   });
// }

// №2
// Даны ссылки и кнопка. По нажатию на кнопку получите массив атрибутов href ссылок.
// const links = document.querySelectorAll("a");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   const arr = [];
//   for (const elem of links) {
//     arr.push(elem.href);
//   }
//   console.log(arr);
// });

// №3
// Дан абзац и кнопка. По нажатию на кнопку сделайте в цикле строку '123456789' и запишите ее в абзац.
// const text = document.querySelector("p");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   let res = "";
//   for (let i = 1; i <= 9; i++) {
//     res += i;
//   }
//   text.textContent = res;
// });

// №4
// Даны три абзаца. Выведите в первый текущий год, во второй - текущий месяц, в третий - текущий день.
// const texts = document.querySelectorAll("p");
// const data = new Date();
// texts[0].textContent = data.getFullYear();
// texts[1].textContent = data.getMonth();
// texts[2].textContent = data.getDate();

// №5
// Дана ссылка, абзац и кнопка. По нажатию на кнопку запишите href ссылки в текст абзаца.
// const link = document.querySelector("a");
// const text = document.querySelector("p");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   text.textContent = link.href;
// });

// Уровень 5.5 задачника JavaScript
// №1
// Дан инпут, кнопка и три абзаца. В инпут вводится дата в формате 2025-12-31. По нажатию на кнопку выведите в первый абзац год, во второй абзац - месяц, в третий день.

// №2
// Даны два инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку заполните массив целыми числами от первого введеного числа до последнего.
// const input1 = document.querySelector(".input1");
// const input2 = document.querySelector(".input2");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   const arr = [];
//   for (let i = Number(input1.value); i <= Number(input2.value); i++) {
//     arr.push(i);
//   }
//   console.log(arr);
// });

// №3
// Дан инпут, абзац и кнопка. В инпут вводится строка. По нажатию на кнопку выведите в абзац последний символ введенной строки.
// const input1 = document.querySelector("input");
// const text = document.querySelector("p");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   text.textContent = input1.value[input1.value.length - 1];
// });

// №4
// Дан абзац, в котором записано число 1. По нажатию на кнопку увеличивайте число в абзаце на единицу.
// const text = document.querySelector("p");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   text.textContent = Number(text.textContent) + 1;
// });

// №5
// Дан инпут и абзац. В инпут вводится строка со словами. По потери фокуса выведите в абзац количество слов во введенной строке.
// const text = document.querySelector("p");
// const input = document.querySelector("input");
// input.addEventListener("blur", function () {
//   const arr = this.value.split(" ");
//   text.textContent = arr.length;
// });

// Уровень 5.6 задачника JavaScript
// №1
// Дан инпут, кнопка и абзац. В инпут вводится год. По нажатию на кнопку определите, введен високосный год или нет и выведите информацию об этом в абзац.

// №2
// Дан инпут и кнопка. По нажатию на кнопку выведите в инпут случайное число из диапазона от 1 до 100.
// const input = document.querySelector("input");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   let randomNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
//   input.value = randomNum;
// });

// №3
// Дан инпут, кнопка и абзац. В инпут вводится дата в формате 2025-12-31. По нажатию на кнопку выведите в абзац день недели, соответствующий этой дате.

// №4
// Дан див с шириной, высотой и границей, и кнопка. По клику на кнопку увеличьте размеры дива в два раза.
// const button = document.querySelector("button");
// const block = document.querySelector(".block");
// button.addEventListener("click", function () {
//   block.style.width = block.offsetWidth * 2 + "px";
//   block.style.height = block.offsetHeight * 2 + "px";
// });

// №5
// Даны ссылки. Сделайте так, чтобы по наведению на любую ссылку над ней появлялось значение ее атрибута href.
// const links = document.querySelectorAll("a");
// for (const link of links) {
//   link.addEventListener("mouseover", function () {
//     this.textContent = this.href;
//   });
// }

// Уровень 5.7 задачника JavaScript
// №1
// Даны теги li с числами, инпут и кнопка. По нажатию на кнопку найдите сумму чисел и выведите их в инпут.
// const input = document.querySelector("input");
// const items = document.querySelectorAll("li");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   let sum = 0;
//   for (const item of items) {
//     sum += Number(item.textContent);
//   }
//   input.value = sum;
// });

// №2
// Даны теги li с числами и кнопка. По нажатию на кнопку увеличьте все числа в тегах li на единицу.
// const items = document.querySelectorAll("li");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   for (const item of items) {
//     item.textContent = Number(item.textContent) + 1;
//   }
// });

// №3
// Дан инпут, абзац и кнопка. В инпут вводится число. По нажатию на кнопку получите массив делителей числа и выведите их в абзац через запятую.
// const text = document.querySelector("p");
// const input = document.querySelector("input");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   let arr = [];
//   for (let i = 1; i <= input.value; i++) {
//     if (input.value % i === 0) {
//       arr.push(i);
//     }
//   }
//   const res = arr.join(",");
//   text.textContent = res;
// });

// №4
// Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст переворачивался.
// const texts = document.querySelectorAll("p");
// for (const text of texts) {
//   text.addEventListener("click", function () {
//     this.textContent = this.textContent.split(" ").reverse().join(" ");
//   });
// }

// №5
// В инпут вводится число из 6-ти цифр. По нажатию на кнопку проверьте, равна ли сумма первых трех цифр сумме вторых трех цифр.
// const input = document.querySelector("input");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   const arr = input.value.split("");
//   const res =
//     Number(arr[0]) + Number(arr[1]) + Number(arr[2]) ===
//     Number(arr[3]) + Number(arr[4]) + Number(arr[5]);
//   console.log(res);
// });

// Уровень 5.8 задачника JavaScript
// №1
// Даны инпуты. В них вводятся числа. Сделайте так, чтобы при потери фокуса в любом из инпутов в нем появлялся квадрат введенного в него числа.
// const inputs = document.querySelectorAll("input");
// for (const input of inputs) {
//   input.addEventListener("blur", function () {
//     this.value = this.value * 2;
//   });
// }

// №2
// Дан массив, кнопка и инпут. Сделайте так, чтобы по клику на кнопку в инпут выводился случайный элемент массива.
// const input = document.querySelector("input");
// const button = document.querySelector("button");
// const arr = [1, 2, 3, 4];

// button.addEventListener("click", function () {
//   let randomNum = Math.floor(Math.random() * (arr.length - 1 - 0 + 1)) + 0;
//   input.value = arr[randomNum];
// });

// №3
// Дан инпут и абзац. В него через запятую вводятся числа. По потери фокуса найдите сумму введенных чисел и выведите ее в абзац.
// const text = document.querySelector("p");
// const input = document.querySelector("input");
// input.addEventListener("blur", function () {
//   const arr = this.value.split(",");
//   text.textContent = arr.reduce((sum, num) => {
//     return sum + Number(num);
//   }, 0);
// });

// №4
// Даны два инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку получите массив общих делителей этих чисел и выведите его в консоль.
// const inputs = document.querySelectorAll("input");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   const arr1 = func(inputs[0].value);
//   const arr2 = func(inputs[1].value);
//   const res = [];
//   for (const elem of arr1) {
//     if (arr2.includes(elem)) {
//       res.push(elem);
//     }
//   }
//   return console.log(res);
// });
// Вспомогательная функция
// function func(num) {
//   const arr = [];

//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// №5
// Дан инпут и кнопка. В инпут через запятую вводятся числа. По нажатию на кнопку проверьте, есть ли среди введенных число 13.
// const input = document.querySelector("input");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   const arr = input.value.split(",");
//   console.log(arr);
//   return console.log(arr.includes("13"));
// });

// №6
// Дан инпут и кнопка. В него вводится число из шести цифр. По клику на кнопку проверьте, что число представляет собой счастливый билет, то есть сумма первых трех цифр равна сумме вторых трех цифр.
// const input = document.querySelector("input");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   let res;
//   const arr = input.value.split("");
//   if (arr.length === 6) {
//     res =
//       Number(arr[0]) + Number(arr[1]) + Number(arr[2]) ===
//       Number(arr[3]) + Number(arr[4]) + Number(arr[5]);
//   } else {
//     res = "Сумма не из 6-ти цифр!";
//   }
//   return console.log(res);
// });

// Уровень 5.9 задачника JavaScript
// №1
// Дан массив с числами, кнопка и инпут. По нажатию на кнопку запишите в инпут все числа из массива, разделив их запятыми.
// const input = document.querySelector("input");
// const button = document.querySelector("button");
// const arr = [1, 2, 3, 4, 5];
// button.addEventListener("click", function () {
//   input.value = arr.join(",");
// });

// №2
// Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст красился в красный цвет.
// const texts = document.querySelectorAll("p");
// for (const text of texts) {
//   text.addEventListener("click", function () {
//     this.style.color = "red";
//   });
// }

// №3
// Дан инпут. В него вводится число. Если введено нечетное число, то покрасьте границу инпута в красный цвет, а если четное - то в зеленый.
// const input = document.querySelector("input");
// input.addEventListener("blur", function () {
//   if (this.value % 2 === 0) {
//     this.style.borderColor = "red";
//   } else {
//     this.style.borderColor = "blue";
//   }
// });

// №4
// В инпут вводится дата в формате 2025-12-31. По потери фокуса сделайте так, чтобы в инпуте стала дата в формате 35.12.2025.
// const input = document.querySelector("input");
// input.addEventListener("blur", function () {
//   this.value = this.value.split("-").reverse().join(".");
// });

// №5
// Дан пустой список ul и текстареа. В него вводится текст со знаками препинания. По потери фокуса запишите каждое предложение из текста в свой тег li.
// const items = document.querySelectorAll("li");
// const textar = document.querySelector("textarea");
// textar.addEventListener("blur", function () {
//   const arr = textar.value.split(".");
//   for (let i = 0; i < items.length; i++) {
//     items[i].innerHTML = arr[i];
//   }
//   console.log(arr);
// });

// Уровень 5.10 задачника JavaScript
// №1
// Дан инпут. В него вводится число. Если введено нечетное число, то покрасьте границу инпута в красный цвет, а если четное - то в зеленый.
// const input = document.querySelector("input");
// input.addEventListener("blur", function () {
//   if (this.value % 2 === 0) {
//     this.style.borderColor = "red";
//   } else {
//     this.style.borderColor = "blue";
//   }
// });

// №2
// Дан массив с числами и кнопка. По нажатию на кнопку добавьте в массив случайное число и выведите массив в консоль.
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   const arr = [1, 2, 3, 4, 5];
//   let randomNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
//   arr.push(randomNum);
//   console.log(arr);
// });

// №3
// Дан массив с названиями цвета. Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст красился в случайный цвет из массива.
// const arrColor = ["red", "blue", "yellow", "green", "gold", "wight"];
// const texts = document.querySelectorAll("p");

// for (const text of texts) {
//   text.addEventListener("click", function () {
//     let randomNum =
//       Math.floor(Math.random() * (arrColor.length - 1 - 0 + 1)) + 0;
//     text.style.color = arrColor[randomNum];
//   });
// }

// №4
// Дан массив с числами, кнопка и абзац. Сделайте так, чтобы по клику на кнопку в инпут через запятую выводились четные числа из этого массива.
// const text = document.querySelector("p");
// const button = document.querySelector("button");
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// button.addEventListener("click", function () {
//   const res = func(arr1).join(",");
//   text.textContent = res;
// });
// Вспомогательная функция:
// function func(arr) {
//   return arr.filter((elem) => {
//     return elem % 2 === 0;
//   });
// }

// №5
// Дана кнопка и див. По нажатию на кнопку выведите, сколько дней осталось до Нового Года.

// №6
// Дана кнопка и ul. По клику на кнопку выведите список всех годов за сто лет назад и вперед.

// Уровень 6.1 задачника JavaScript
// №1
// Дана кнопка, пустой список ul и массив. По клику на кнопку заполните список элементами этого массива.
// const button = document.querySelector("button");
// const items = document.querySelectorAll("li");
// const arr = [1, 2, 3];
// button.addEventListener("click", function () {
//   for (let i = 0; i < items.length; i++) {
//     items[i].textContent = arr[i];
//   }
// });

// №2
// Дана кнопка и пустой список ul. По клику на кнопку заполните список числами от 1 до 10.
// const button = document.querySelector("button");
// const items = document.querySelectorAll("li");
// button.addEventListener("click", function () {
//   for (let i = 0; i < items.length; i++) {
//     items[i].textContent = i + 1;
//   }
// });

// №3
// Дана кнопка и пустой список ul. По клику на кнопку добавьте в конец списка новый пункт с текстом '!'.
// const button = document.querySelector("button");
// const items = document.querySelectorAll("li");
// button.addEventListener("click", function () {
//   for (let i = 0; i < items.length; i++) {
//     items[i].textContent += "!";
//   }
// });

// №4
// Дана кнопка и пустой список ul. По клику на кнопку добавьте в конец списка новый пункт с порядковым номером.
// const button = document.querySelector("button");
// const items = document.querySelectorAll("li");
// button.addEventListener("click", function () {
//   for (let i = 0; i < items.length; i++) {
//     items[i].textContent += i + 1;
//   }
// });

// №5
// Дана кнопка и список ul, заполненный пунктами. По клику на кнопку удалите последний пункт списка.
// const button = document.querySelector("button");
// const list = document.querySelector("ul");
// button.addEventListener("click", function () {
//   let lastChild = list.lastElementChild;
//   list.removeChild(lastChild);
// });

// №6
// Дана кнопка и список ul, заполненный пунктами. По клику на кнопку удалите случайный пункт списка.
// const button = document.querySelector("button");
// const items = document.querySelectorAll("li");
// const list = document.querySelector("ul");
// button.addEventListener("click", function () {
//   let randomNum = Math.floor(Math.random() * (items.length - 1 - 0 + 1)) + 0;
//   list.removeChild(items[randomNum]);
// });

// Уровень 6.2 задачника JavaScript
// №1
// По клику на кнопку создайте HTML таблицу с заданной шириной и высотой.
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   const table = document.createElement("table");
//   document.body.appendChild(table);
//   for (let i = 0; i < 3; i++) {
//     const tr = document.createElement("tr");
//     for (let j = 0; j < 5; j++) {
//       const td = document.createElement("td");
//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }
// });
//
// function func(columns, posts) {
//   const table = document.createElement("table");
//   document.body.appendChild(table);
//   for (let i = 0; i < columns; i++) {
//     const tr = document.createElement("tr");
//     for (let j = 0; j < posts; j++) {
//       const td = document.createElement("td");
//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }
// }

// №2
// По клику на кнопку создайте HTML таблицу с заданной шириной и высотой так, чтобы в ячейках стояли их порядковые номера.
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   const table = document.createElement("table");
//   document.body.appendChild(table);
//   for (let i = 0; i < 3; i++) {
//     const tr = document.createElement("tr");
//     for (let j = 0; j < 5; j++) {
//       const td = document.createElement("td");
//       td.textContent = j + 1;
//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }
// });

// №3
// По клику на кнопку создайте HTML таблицу с заданной шириной и высотой так, чтобы в ячейках стояли номера их рядов и колонок.
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   const table = document.createElement("table");
//   document.body.appendChild(table);
//   for (let i = 0; i < 3; i++) {
//     const tr = document.createElement("tr");
//     for (let j = 0; j < 5; j++) {
//       const td = document.createElement("td");
//       td.textContent = "column: " + (i + 1) + ", " + "posts: " + (j + 1);
//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }
// });

// №4
// Дан массив:
// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// По нажатию на кнопку создайте таблицу, заполненную данными из этого массива.
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   const table = document.createElement("table");
//   document.body.appendChild(table);
//   for (let i = 0; i < arr.length; i++) {
//     const tr = document.createElement("tr");
//     for (let j = 0; j < arr[i].length; j++) {
//       const td = document.createElement("td");
//       td.textContent = arr[i][j];
//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }
// });

// Уровень 6.3 задачника JavaScript
// №1
// Дан абзац и кнопка. Пусть первое нажатие на кнопку красит абзац в красный цвет, а второе нажатие в зеленый.
// const text = document.querySelector("p");
// const button = document.querySelector("button");
// let i = 0;
// button.addEventListener("click", function () {
//   const arr = ["red", "blue"];
//   text.style.color = arr[i];
//   i++;
//   if (i > 1) {
//     i = 0;
//   }
// });
//
// const text = document.querySelector("p");
// const button = document.querySelector("button");
// let flag = true;
// function changeColor() {
//   if (flag) {
//     text.style.color = "red";
//   } else {
//     text.style.color = "blue";
//   }
//   flag = !flag;
// }
// button.addEventListener("click", changeColor);

// №2
// Дан список ul. По клику на любую li добавьте ей в конец ее порядковый номер в списке, но только один раз.
// const items = document.querySelectorAll("li");
// for (let i = 0; i < items.length; i++) {
//   items[i].addEventListener("click", function addNamer() {
//     this.textContent += i + 1;
//     items[i].removeEventListener("click", addNamer);
//   });
// }

// №3
// Дан список ul. По клику на любую li, если нажата клавиша Ctrl, удалите эту li из списка.
// const items = document.querySelectorAll("li");
// for (const item of items) {
//   item.addEventListener("click", function (event) {
//     if (event.ctrlKey) {
//       this.remove();
//     }
//   });
// }

// №4
// Дан абзац с числом и кнопка. По нажатию на кнопку пусть число из абзаца каждую секунду увеличивается на единицу.
// const p = document.querySelector("p");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   setInterval(function () {
//     p.textContent = Number(p.textContent) + 1;
//   }, 1000);
// });

// №5
// Дан инпут и абзац. В инпут вводится дата. Определите, была уже дата в текущем году. Результат выведите в абзац.

// Уровень 6.4 задачника JavaScript
// №1
// Дан список ul. Сделайте так, чтобы по клику на любую li она удалялась из списка.
// const items = document.querySelectorAll("li");
// for (const item of items) {
//   item.addEventListener("click", function () {
//     this.remove();
//   });
// }

// №2
// Дан список ul и инпут. Сделайте так, чтобы по потери фокуса инпутом его текст становился новым пунктом списка.
// const list = document.querySelector("ul");
// const input = document.querySelector("input");
// input.addEventListener("blur", function () {
//   const li = document.createElement("li");
//   li.textContent = input.value;
//   list.appendChild(li);
//   input.value = "";
// });

// №3
// Дана таблица из трех колонок, три инпута и кнопка. Сделайте так, чтобы по клику на кнопку в таблицу добавлялся новый ряд с текстами ячеек из инпутов.
// const inputs = document.querySelectorAll("input");
// const button = document.querySelector("button");
// const table = document.querySelector("table");
// button.addEventListener("click", function () {
//   const tr = document.createElement("tr");
//   for (const input of inputs) {
//     const td = document.createElement("td");
//     td.textContent = input.value;
//     tr.appendChild(td);
//     input.value = "";
//   }
//   table.appendChild(tr);
// });

// №4
// Дан инпут и ul. В инпут вводится год. Выведите в список даты всех пятниц 13-е в заданном году.

// Уровень 6.5 задачника JavaScript
// №1
// Дан абзац и инпут. В инпут вводится дата рождения юзера в формате год-месяц-день. Выведите в абзац, сколько полных лет юзеру.

// №2
// Дан абзац и инпут. В инпут вводятся числа, разделенные запятыми. Сделайте так, чтобы по мере ввода данных в инпут в абзац выводилась сумма введеных чисел.
// const input = document.querySelector("input");
// const text = document.querySelector("p");
// let arr;
// let sum = 0;
// input.addEventListener("keyup", function (event) {
//   if (event.key == ",") {
//     arr = input.value.split(",");
//     for (const elem of arr) {
//       sum += Number(elem);
//     }
//     text.textContent = sum;
//   }
// });

// №3
// Дан абзац и кнопка. Каждое нажатие на кнопку добавляет новый инпут. В инпуты вводятся числа. Сделайте так, чтобы по мере ввода чисел в инпуты в абзац выводилась сумма введеных чисел.
// const text = document.querySelector("p");
// const button = document.querySelector("button");
// let sum = 0;
// button.addEventListener("click", function () {
//   const input = document.createElement("input");
//   input.addEventListener("blur", function () {
//     sum += Number(this.value);
//     text.textContent = sum;
//   });
//   document.body.prepend(input);
// });

// №4
// Дано произвольное количество инпутов и кнопка. В инпуты вводятся числа. По нажатию на кнопку найдите сумму введенных чисел и выведите в текст кнопки.
// const inputs = document.querySelectorAll("input");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   let sum = 0;
//   for (const input of inputs) {
//     sum += Number(input.value);
//     input.value = "";
//   }
//   button.textContent = sum;
// });

// №5
// Даны два инпута, абзац и кнопка. В инпуты через запятую вводятся числа. По клику на кнопку выведите через запятую в абзац числа, которые есть в обоих инпутах.
// const inputs = document.querySelectorAll("input");
// const button = document.querySelector("button");
// const text = document.querySelector("p");
// button.addEventListener("click", function () {
//   const arr1 = inputs[0].value.split(",");
//   const arr2 = inputs[1].value.split(",");
//   const res = [...arr1, ...arr2].join(",");
//   text.textContent = res;
//   inputs[0].value = "";
//   inputs[1].value = "";
// });

// Уровень 6.6 задачника JavaScript
// №1
// Дан массив, инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац элемент массива, номер которого введен в инпут.
// const input = document.querySelector("input");
// const button = document.querySelector("button");
// const text = document.querySelector("p");
// const arr = [1, 2, 3, 4, 5, 6, 7];
// button.addEventListener("click", function () {
//   if (arr[Number(input.value - 1)] === Number(input.value)) {
//     text.textContent = arr[Number(input.value) - 1];
//   } else {
//     text.textContent = "Такого елемента в массиве нету!";
//   }
// });

// №2
// Дан абзац, кнопка и массив с цветами. Пусть нажатие на кнопку красит абзац в случайный цвет из массива.
// const button = document.querySelector("button");
// const text = document.querySelector("p");
// const arr = ["red", "blue", "yellow"];
// button.addEventListener("click", function () {
//   let randonNum = Math.floor(Math.random() * (arr.length - 1 - 0 + 1)) + 0;
//   text.style.color = arr[randonNum];
// });

// №3
// Дана таблица, кнопка и массив с цветами. Пусть нажатие на любую ячейку красит ее в случайный цвет из массива цветов.
// const tds = document.querySelectorAll("td");
// const arr = ["red", "blue", "yellow"];
// for (const td of tds) {
//   td.addEventListener("click", function () {
//     let randonNum = Math.floor(Math.random() * (arr.length - 1 - 0 + 1)) + 0;
//     td.style.color = arr[randonNum];
//   });
// }

// №4
// Дан текстареа и див. В текстареа вводится текст. Сделайте так, чтобы по нажатию Shift + Enter этот текст добавился в див.
// const textarea = document.querySelector("textarea");
// const div = document.querySelector("div");
// textarea.addEventListener("keyup", function (event) {
//   if (event.shiftKey && event.key == "Enter") {
//     div.textContent = textarea.value;
//     textarea.value = "";
//   }
// });

// Уровень 6.7 задачника JavaScript
// №1
// Выведите даты всех выходных дней текущего года в виде списка ul.

// №2
// Дан абзац и кнопка. По клику на кнопку выведите в абзац название дня недели последнего дня текущего месяца.

// №3
// Дана кнопка и селект. По клику на кнопку заполните селект числами от первого до последнего дня текущего месяца.

// №4
// Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац строку, состоящую из нулей, количество которых равно числу. Например, при вводе числа 5 у нас должна получится строка '00000'.
// const text = document.querySelector("p");
// const input = document.querySelector("input");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   let str = "";
//   for (let i = 0; i < Number(input.value); i++) {
//     str += 0;
//   }
//   text.textContent = str;
// });

// Уровень 6.8 задачника JavaScript
// №1
// Дана таблица. По клику на ячейку, если нажата клавиша Shift, красьте ячейку в красный цвет, а если клавиша Ctrl, то в зеленый.
// const tds = document.querySelectorAll("td");
// for (const td of tds) {
//   td.addEventListener("click", function (event) {
//     if (event.shiftKey) {
//       td.style.color = "red";
//     }
//     if (event.ctrlKey) {
//       td.style.color = "blue";
//     }
//   });
// }

// №2
// Дан див и кнопка. По первому клику на кнопку покажите див, а по второму клику - спрячьте.
// const div = document.querySelector("div");
// const button = document.querySelector("button");
// let flag = false;
// button.addEventListener("click", function () {
//   if (flag) {
//     div.style.display = "block";
//   } else {
//     div.style.display = "none";
//   }
//   flag = !flag;
// });
//
// button.addEventListener("click", close());
// function close() {
//   div.style.display = "none";
//   button.removeEventListener("click", close);
//   button.addEventListener("click", open);
// }
// function open() {
//   div.style.display = "block";
//   button.removeEventListener("click", open);
//   button.addEventListener("click", close);
// }

// Уровень 6.9 задачника JavaScript
// №1
// Дан абзац, кнопка и массив с цветами. Пусть нажатие на кнопку красит абзац в следующий цвет из массива и так по кругу.
// const p = document.querySelector("p");
// const button = document.querySelector("button");
// const arr = ["yellow", "orange", "red"];
// let i = 0;
// button.addEventListener("click", function () {
//   p.style.color = arr[i];
//   i++;
//   if (i > 2) {
//     i = 0;
//   }
// });

// №2
// Дан абзац и два инпута. В инпуты вводятся даты. Выведите в абзац, сколько дней между введенными датами.

// №3
// Дан список ul. По клику на любую li записывайте в конец ее текста порядковый номер клика по этой li.
// const items = document.querySelectorAll("li");
// let i = 1;
// for (const item of items) {
//   item.addEventListener("click", () => {
//     item.textContent += i;
//     i++;
//   });
// }

// №4
// Дана кнопка и список ul, заполненный пунктами с числами. По клику на кнопку добавляйте новую li с числом, на единицу больше числа последей li из списка.
// const button = document.querySelector(".button");
// const list = document.querySelector("ul");
// button.addEventListener("click", function () {
//   const items = document.querySelectorAll("li");
//   const li = document.createElement("li");
//   li.textContent = Number(items[items.length - 1].textContent) + 1;
//   list.appendChild(li);
// });

// Уровень 6.10 задачника JavaScript
// №1
// Дана кнопка, инпут и список ul, В инпут вводится текст. По клику на кнопку добавьте в список новую li с этим текстом, но только если этот текст больше текста последнего тега li из списка..
// const input = document.querySelector("input");
// const button = document.querySelector("button");
// const list = document.querySelector("ul");
// button.addEventListener("click", function () {
//   const items = document.querySelectorAll("li");
//   let lastElemLength = items[items.length - 1].textContent.length;
//   if (lastElemLength < input.value.length) {
//     const li = document.createElement("li");
//     li.textContent = input.value;
//     list.appendChild(li);
//     input.value = "";
//   }
// });

// №2
// Сделайте вручную HTML таблицу 8 на 8. По нажатию на кнопку покрасьте каждую четную ячейку в белый цвет, а нечетную - в черный.

// №3
// Напишите код, который выведет на экран таблицу умножения.

// №4
// Даны текстареа, инпут и кнопка. В текстареа вводится текст со словами. В инпут вводится слово. По нажатию на кнопку выведите на экран, сколько раз встречается это слово в веденном тексте.

//
//
// const text = document.querySelector("p");
// const input = document.querySelector("input");
// const link = document.querySelector("a");
// const items = document.querySelectorAll("li");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   //
// });

// function isUnique(str) {
//   //   let arr = str.split("");
//   for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) !== i) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isUnique("abc"));

// function isUnique(str) {
//   return new Set(str).size === str.length;
// }
// console.log(isUnique("abcb"));

// const arr1 = [[1], [[[[4]]]], [[7]]];

// function flatter(arr) {
//   const newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       let flat = flatter(arr[i]);

//       for (let j = 0; j < flat.length; j++) {
//         newArr.push(flat[j]);
//       }
//     } else {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// }
// console.log(flatter(arr1));

// function removeDubls(str) {
//   return [...new Set(str)].join("");
// }
// console.log(removeDubls("abcaccrt"));
