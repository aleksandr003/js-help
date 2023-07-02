// const boy = {
//   name: "Nick",
//   lastName: "Onerlik",
//   age: 36,
//   profession: ["driver", "shef", "programmer"],
//   location: {
//     city: "Los-Angeles",
//     country: "USA",
//   },
// };

// const nameCar = "Lexus";
// const years = 4;

// const car = {
//   nameCar,
//   years,
// };

// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Это метод объекта
//   getBooks() {
//     return this.books;
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   // Это метод объекта
//   removeBook(bookName) {
//     const indexbook = this.books.indexOf(bookName);
//     this.books.splice(indexbook, 1);
//   },
// };

// Вызовы методов
// bookShelf.getBooks();
// bookShelf.removeBook();
// console.log(bookShelf.getBooks());
// bookShelf.addBook("new book");
// console.log(bookShelf.getBooks());
// bookShelf.removeBook("The Last Kingdom");
// console.log(bookShelf.getBooks());

// const carr = {
//   modal: "Lexus",
//   years: 2021,
//   color: "white",
// };

// for (const key in carr) {
//   console.log(key);
// }

// for (const key in carr) {
//   console.log(carr[key]);
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Если это не собственное свойство - ничего не делаем
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// const keysBook = Object.keys(book);

// const valBook = Object.values(book);

// for (const key of keysBook) {
//   console.log(book[key]);
// }

// for (const val of valBook) {
//   console.log(val);
// }

// console.log(valBook);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];

// let sumRating = 0;
// let i = 0;

// for (const elem of books) {
//   sumRating += elem.rating;
// }

// const xxx = (sumRating / books.length).toFixed(1);

// console.log(xxx);

// const bookNames = [];

// for (const elem of books) {
//   bookNames.push(elem.title);
// }
// console.log(bookNames);

// for (const book of books) {
//   // Объект книги
//   console.log(book);
//   //   // Название
//   console.log(book.title);
//   //   // Автор
//   console.log(book.author);
//   //   // Рейтинг
//   console.log(book.rating);
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(book[key]);
// }

// Получить зарплату всех работников ---------------------------

// const workers = {
//   Sam: 120,
//   Robert: 110,
//   Datty: 160,
// };

// const salaries = Object.values(workers);
// let total = 0;

// for (const salary of salaries) {
//   total += salary;
// }

// console.log(total);

// Напишите функцию которая будет возвращать масив имен
// const employees = [
//   {
//     name: "name1",
//     salary: 300,
//   },
//   {
//     name: "name2",
//     salary: 400,
//   },
//   {
//     name: "name3",
//     salary: 500,
//   },
// ];

// const allNames = function (array) {
//   const arr = [];

//   for (const elem of array) {
//     arr.push(elem.name);
//   }

//   return arr;
// };

// console.log(allNames(employees));

// Напишите функцию которая ищет зарплату по имени
// const employees = [
//   {
//     name: "name1",
//     salary: 300,
//   },
//   {
//     name: "name2",
//     salary: 400,
//   },
//   {
//     name: "name3",
//     salary: 500,
//   },
// ];

// const findName = function (array, useName) {
//   for (const elem of array) {
//     if (elem.name === useName) {
//       return elem.salary;
//     }
//   }
//   return "Нет такого имени!";
// };

// console.log(findName(employees, "name3"));

// Напишите функцию которая возвращает массив из всех имен обьекта
// const employees = [
//   {
//     name: "name1",
//     salary: 300,
//   },
//   {
//     name: "name2",
//     salary: 400,
//   },
//   {
//     name: "name3",
//     salary: 500,
//   },
// ];

// const allName = function (array) {
//   const arr = [];

//   for (const elem of array) {
//     arr.push(elem.name);
//   }

//   return arr;
// };

// console.log(allName(employees));

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// const fc = function (obj) {
//   const { title, author, genres, rating } = obj;
//   return `${title} and ${rating}`;
// };

// console.log(fc(book));

// const cart = {
//   item: [],
//   getItems() {
//     return this.item;
//   },
//   add(product) {
//     return this.item.push(product);
//   },
//   remove(productName) {
//     for (let i = 0; i < this.item.length; i += 1) {
//       if (this.item[i].nameProduct === productName) {
//         return this.item.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     return (this.item = []);
//   },
//   countTotalPrice() {
//     let total = 0;
//     for (const elem of this.item) {
//       total += elem.price * elem.nums;
//     }
//     return total.toFixed(2);
//   },
//   minusProduct(name) {
//     for (const elem of this.item) {
//       if (elem.nameProduct === name) {
//         return (elem.nums -= 1);
//       }
//     }
//   },
//   plusProduct(name) {
//     for (const elem of this.item) {
//       if (elem.nameProduct === name) {
//         return (elem.nums += 1);
//       }
//     }
//   },
// };

// cart.add({ nameProduct: "груша", price: 2.5, nums: 1 });
// cart.add({ nameProduct: "яблоко", price: 1.2, nums: 1 });
// cart.add({ nameProduct: "мандарин", price: 1.9, nums: 1 });
// cart.add({ nameProduct: "манго", price: 3.1, nums: 1 });

// function add(...args) {
//   const array = [...args];
//   const total = 0;

//   for (const elem of array) {
//     total += Number(elem);
//   }
//   return total;
//   // Change code above this line
// }

// console.log(add(12, 43));

// Change code below this line
// function findMatches(arrNums, ...rest) {
//   const matches = []; // Don't change this line
//   for (const item of arrNums) {
//     if (rest.includes(item)) {
//       matches.push(item);
//     }
//   }
//   // Change code above this line
//   return matches;
// }

// function findMatches(array, ...rest) {
//   const matches = []; // Don't change this line
//   const arr = [...array, ...rest];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (i !== arr.indexOf(arr[i])) {
//       matches.push(arr[i]);
//     }
//   }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   // Change code above this line
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   removePotion(potionName) {
//     const indexPotionName = this.potions.indexOf(potionName);
//     this.potions.splice(indexPotionName, 1);
//   },

//   // Change code above this line
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(oldName);
//     for (const elem of this.potions) {
//       if (elem.includes(oldName)) {
//         this.potions.splice(potionIndex, 1, newName);
//       }
//     }
//     // Change code above this line
//   },
// };

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const elem of this.potions) {
//       if (elem.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     let cycle = 0;
//     for (const elem of this.potions) {
//       if (elem.name === potionName) {
//         this.potions.splice(cycle, 1);
//       }
//       cycle += 1;
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (const elem of this.potions) {
//       if (elem.name === oldName) {
//         elem.name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };
