// const array = ["Audi", "Tesls", "Lexus"];

// for (let i = 0; i < array.length; i += 1) {
//   console.log(array[i]);
// }

// const showAllElems = function (arr) {
//   for (const elem of arr) {
//     console.log(elem);
//   }
// };
// const array = ["Audi", "Tesls", "Lexus"];
// showAllElems(array);

//===========

// const array = ["Audi", "Tesls", "Lexus"];

// for (const elem of array) {
//   console.log(elem);
// }

//==========

// const array = ["Audi", "Tesls", "Lexus"];
// const nameCar = "Toyota";
// let masseg;

// for (const elem of array) {
//   if (elem === nameCar) {
//     masseg = "Есть такая машина!";
//     break;
//   }
//   masseg = "Нет накой машины!";
// }
// console.log(masseg);

// const findCar = function (nameCar, allCars) {
//   for (const car of allCars) {
//     if (car === nameCar) {
//       return "Есть такая машина!";
//     }
//   }

//   return "Нет накой машины!";
// };

// const array = ["Audi", "Tesls", "Lexus"];
// const nameCar = "Lexus";

// console.log(findCar(nameCar, array));

//==========

// const numbersArray = [1, 2, 5, 3, 12, 555, 34, 39, 34, 56, 9];
// let needNum = 1;

// for (const elem of numbersArray) {
//   if (elem > needNum) {
//     needNum = elem;
//   }
// }
// console.log(needNum);

// const minNumber = function (array) {
//   let num = array[0];
//   for (const elem of array) {
//     if (elem < num) {
//       num = elem;
//     }
//   }
//   return num;
// };

// const numbersArray = [1, 2, 5, 3, 12, 555, 34, -39, 34, 56, 9];
// console.log(minNumber(numbersArray));

//===========

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(b); // 5

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const num = numbers.pop();
// console.log(numbers);
// console.log(num);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// numbers.splice(2, 2);
// console.log(numbers);

// let a = 5;
// let b = a;
// a = 23;
// console.log(b);
// b = a;
// console.log(b);

// const numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// for (const elem of numbers) {
//   if (elem % 2 === 0) {
//     sum += elem;
//   }
// }
// console.log(sum);

// const array = ["Audi", "Tesls", "Lexus"];
// const nameCar = "Lexus";
// let masseg = "We don`t have it car";

// for (const elem of array) {
//   if (elem === nameCar) {
//     masseg = "We have it car";
//   }
// }
// console.log(masseg);

// const array = ["Audi", "Tesls", "Lexus"];
// const nameCar = "Lexus";
// const masseg = array.includes(nameCar)
//   ? "We have it car"
//   : "We don`t have it car";
// console.log(masseg);

// const numbers = [1, 3, 14, 18, 4, 77, -17, 29, 6, 34];
// let minNum = numbers[0];
// for (const elem of numbers) {
//   if (minNum < elem) {
//     minNum = elem;
//   }
// }
// console.log(minNum);

// const numbers = [1, 3, 14, 18, 4, 77, -17, 29, 6, 34];
// let minNum = numbers[0];
// for (let i = 1; i < numbers.length; i += 1) {
//   if (minNum > numbers[i]) {
//     minNum = numbers[i];
//   }
// }
// console.log(minNum);

// const array = ["Audi", "Tesls", "Lexus"];
// const str = array.join(", ");
// console.log(str);

// const array = ["Audi", "Tesls", "Lexus"];
// let str = "";
// for (const elem of array) {
//   str += elem + ", ";
// }
// str = str.slice(0, -2);
// console.log(str);

// const str = "JavaScript";
// console.log(str);
// const arr = str.split("");
// console.log(arr);
// let newStr = "";
// let newArr = [];

// for (const elem of arr) {
//   if (elem !== elem.toLowerCase()) {
//     newArr.push(elem.toLowerCase());
//   } else {
//     newArr.push(elem.toUpperCase());
//   }
// }
// newStr = newArr.join("");
// console.log(newStr);

// const str = "JavaScript";
// console.log(str);
// const arr = str.split("");
// console.log(arr);
// let newStr = "";

// for (const elem of arr) {
//   newStr +=
//     elem !== elem.toLowerCase() ? elem.toLowerCase() : elem.toUpperCase();
// }
// console.log(newStr);

// const text = "We have it car";
// const newText = text.toLowerCase().split(" ").join("-");
// console.log(newText);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 20];
// const together = arr1.concat(arr2);
// let sumArr = 0;
// for (const elem of together) {
//   sumArr += elem;
// }
// console.log(sumArr);

// const array = ["Audi", "Tesla", "Lexus"];
// const indexCar = array.indexOf("Tesla");

// array.splice(indexCar, 1);
// console.log(array);

// const array = ["Audi", "Tesla", "Lexus", "Audi", "Lexus", "Lexus", "BMW"];
// const sortCar = [];

// for (let i = 0; i < array.length; i += 1) {
//   if (i === array.indexOf(array[i])) {
//     sortCar.push(array[i]);
//   }
// }

// console.log(sortCar);

// const indexNameCar = sortCar.indexOf("Tesla");
// sortCar.splice(indexNameCar, 1);
// console.log(sortCar);
