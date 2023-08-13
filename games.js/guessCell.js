// =======     Игра угадай ячейку на JavaScript    =======
// Давайте теперь реализуем игру угадай ячейку. В этой игре будет дана таблица 10 на 10. Компьютер случайным образом запоминает 10 ячеек из этой таблицы. Игроку нужно кликать на клетки пока он не найдет все загаданные компьютером клетки.
/* <div id="block">
  <button id="btnGuessCell">Play</button>
</div>; */
// Вызываем нашу созданую игру нажав на кнопку
const block = document.querySelector("#blick");
const btnGuessCell = document.querySelector("#btnGuessCell");
btnGuessCell.addEventListener("click", function () {
  makeTable("#block", 10, 10);
  guessCell();
});

// Создаем таблицу
function makeTable(root, columns, rows) {
  const block = document.querySelector(root);
  const table = document.createElement("table");
  table.id = "table";
  block.appendChild(table);
  for (let i = 0; i < columns; i += 1) {
    const tr = document.createElement("tr");
    for (let j = 0; j < rows; j += 1) {
      const td = document.createElement("td");
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  block.appendChild(table);
  // Создаем таймер
  const text = document.createElement("p");
  text.textContent = 0;
  block.appendChild(text);
  const timerId = setInterval(function () {
    text.textContent = Number(text.textContent) + 1;
    if (text.textContent == 5) {
      clearInterval(timerId);
      text.textContent = "Игра окончена!";
    }
  }, 1000);
}

// Заполняем все ячейки от 1 до 100
function guessCell() {
  const tds = document.querySelectorAll("td");
  let x = 1;
  for (const elem of tds) {
    elem.textContent = x;
    x++;
  }
  // Перебираем каждый элемент из таблицы и проверяем на совпаднеия чисел из созданого случайных чисел массива
  const arrayNums = arrNumbers();
  for (const td of tds) {
    td.addEventListener("click", function () {
      let res = arrayNums.some(function (elem) {
        return elem == td.textContent;
      });
      if (res) {
        td.style.backgroundColor = "yellow";
        td.style.fontSize = "25px";
      } else {
        td.style.backgroundColor = "green";
      }
    });
  }
}

// Вспомогательные функции:
// Создаем массив из случайных чисел
function arrNumbers() {
  const arr = [];
  for (let i = 0; i < 10; i += 1) {
    arr.push(randomNum());
  }
  return arr;
}
// Создаем случайное число
function randomNum() {
  return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
}

// создаем таймер

// function timer() {
//   const timerId = setInterval(function () {
//     text.textContent += 1;
//     if (text.textContent == 100) {
//       clearInterval(timerId);
//     }
//   }, 1000);
// }
// ========================================================
// ========================================================
