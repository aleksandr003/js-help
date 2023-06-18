// const number = prompt("Напиши число");
// const powNum = prompt("В какцю степень надо");
// const result = Math.pow(number, powNum);
// console.log(result);

// const maxNumber = 10;
// const minNumber = 20;

// const result = Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
// console.log(result);

// const str1 = "apple";
// const str2 = "munth";
// const text = `${str1} have ${str2} lives`;
// console.log(text);

// const userNume = prompt("Your name?").toLocaleLowerCase();
// // const ToUoCase = userNume.toLocaleLowerCase();
// console.log(userNume);

// const subscripsion = "free";
// let cost = subscripsion === "pro" ? 100 : 0;
// console.log(cost);

// let cost;
// if (subscripsion === "pro") {
//   cost = 500;
// } else {
//   cost = 0;
// }
// console.log(cost);

// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // "adult"

// const num1 = 15;
// const num2 = 10;
// let biggerNumber = num1 > num2 ? num1 : num2;

// if (num1 > num2) {
//   biggerNumber = num1;
// } else {
//   biggerNumber = num2;
// }

// console.log(biggerNumber);

// let cost;
// const subscripsion = "pro";

// switch (subscripsion) {
//   case "free":
//     cost = 0;
//     break;
//   case "pro":
//     cost = 100;
//     break;
//   case "premium":
//     cost = 500;
//     break;
//   default:
//     cost = 0;
// }

// console.log(cost);

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter <= maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// for (let i = 1; i <= 10; i += 1) {
//   console.log(i);
// }

// const max = 10;
// for (let i = 1; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i <= 10; i += 1) {
//   console.log(i);

//   if (i === 5) {
//     console.log("Find count 5");
//     break;
//   }
// }

// console.log("Stop");

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
// }

// задача №7

// function hi() {
//   console.log("hello world");
// }

// hi();
// hi();
// hi();

// function numNumbers(a, b) {
//   console.log(`результат сложения: ${a + b}`);
// }
// numNumbers(5, 8);

// function xxx(a, b) {
//   return;
// }
// const num = xxx(5, 3);
// console.log(num);

// function makeMessage(name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// }
// console.log(makeMessage("apple", 1.5));

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice(5, 5));

// function validPass(password) {
//   const pass = "qweewq";
//   return pass === password;
// }

// console.log(validPass("qweewq"));

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line
//   const isNotInRange = !isInRange;
//   return isNotInRange;
// }

// console.log(isNumberInRange(10, 20, 3));

// function lengthText(text) {
//   return `В этом тексте "${text}" вот столко символов: ${text.length}`;
// }

// const text = "JavaScript essentials";
// console.log(lengthText(text));

// function formatMessage(message, maxLength) {
//   return message.length > maxLength
//     ? message.slice(0, maxLength) + "..."
//     : message;
// }

// const text = "Hello, world!";

// console.log(formatMessage(text, 7));

// function checkForName(fullName, name) {
//   return fullName.includes(name);
// }
// console.log(checkForName("Rendy Oly", "Oly"));

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   let text = message.toLowerCase();
//   if (text.includes("span") || text.includes("sale")) {
//     result = true;
//   } else {
//     result = false;
//   }
//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam("Trust me, this is not a SpAm message"));

// const clients = ["Mango", "Poly", "Ajax"];
// console.log(clients[0]); // Mango
