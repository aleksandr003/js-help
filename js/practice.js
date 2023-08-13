// =======     Игра угадай число на JavaScript    =======

// Сейчас мы реализуем игру угадай число. В этой игре компьютер загадывает число от 1 до 100. В инпут на экране игрок вводит число от 1 до 100, пытаясь угадать, что же загадал компьютер.

// Если игрок ввел число, меньше загаданного, компьютер должен написать 'введите число побольше', а если введено больше загаданного, то, соответственно, компьютер должен написать 'введите число поменьше'.
//<input id="input" type="text" />
//<p id="text"></p>
// let num = Math.floor(Math.random() * (100 - 1) + 1);
// console.log(num);
// function guessNumber() {
//   const input = document.querySelector("#input");
//   const text = document.querySelector("#text");
//   input.addEventListener("blur", function () {
//     if (input.value < num) {
//       text.textContent = "введите число побольше";
//     } else if (input.value > num) {
//       text.textContent = "введите число поменьше";
//     } else {
//       text.textContent = "Вы угадали!";
//     }
//   });
// }
// guessNumber();
// ========================================================
// ========================================================
// =======     Игра угадай ячейку на JavaScript    =======
// Давайте теперь реализуем игру угадай ячейку. В этой игре будет дана таблица 10 на 10. Компьютер случайным образом запоминает 10 ячеек из этой таблицы. Игроку нужно кликать на клетки пока он не найдет все загаданные компьютером клетки.

// Заполняем все ячейки от 1 до 100
// function guessCell() {
//   const tds = document.querySelectorAll("td");
//   let x = 1;
//   for (const elem of tds) {
//     elem.textContent = x;
//     x++;
//   }
//   // Перебираем каждый элемент из таблицы и проверяем на совпаднеия чисел из созданого случайных чисел массива
//   const arrayNums = arrNumbers();
//   for (const td of tds) {
//     td.addEventListener("click", function () {
//       let res = arrayNums.some(function (elem) {
//         return elem == td.textContent;
//       });
//       if (res) {
//         td.style.backgroundColor = "yellow";
//         td.style.fontSize = "25px";
//       } else {
//         td.style.backgroundColor = "green";
//       }
//     });
//   }
// }
// // Создаем массив из случайных чисел
// function arrNumbers() {
//   const arr = [];
//   for (let i = 0; i < 10; i += 1) {
//     arr.push(randomNum());
//   }
//   return arr;
// }
// // Создаем случайное число
// function randomNum() {
//   return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
// }
// // Вызываем нашу созданую игру
// guessCell();

// const block = document.querySelector("#blick");
// const btnGuessCell = document.querySelector("#btnGuessCell");
// btnGuessCell.addEventListener("click", function () {
//   makeTable("#block", 10, 10);
// });

// function makeTable(root, columns, rows) {
//   const block = document.querySelector(root);
//   const table = document.createElement("table");
//   table.id = "table";
//   block.appendChild(table);
//   for (let i = 0; i < columns; i += 1) {
//     const tr = document.createElement("tr");
//     for (let j = 0; j < rows; j += 1) {
//       const td = document.createElement("td");
//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }
//   block.appendChild(table);
//   guessCell();
// }
// // makeTable("#block", 5, 5);
// // ========================================================
// // ========================================================
