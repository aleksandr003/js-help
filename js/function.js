// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }

//   return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }

// console.log(checkStorage(12, 2));

// function getExtremeElements(array) {
//   // Change code below this line
//   const newArr = [];
//   newArr[0].push(array[0]);
//   newArr[1].push(array[array.length - 1]);
//   return newArr;
//   // Change code above this line
// }

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// function findLongestWord(string) {
//   // Change code below this line
//   const arr = string.split(" ");
//   let str = arr[0];
//   for (const elem of arr) {
//     if (elem.length > str.length) {
//       str = elem;
//     }
//   }

//   return str;
//   // Change code above this line
// }

// console.log(findLongestWord("defe vsrdd eefwrgwrg fwf"));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }
