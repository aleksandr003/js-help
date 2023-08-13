/* <div id="parent">
  <input id="input" placeholder="введите год и нажмите Enter" />
  <table id="table"></table>
</div>; */

// Массивы обьектов с событиями года
const year2020 = [
  {
    date: "17.06.2020",
    event: "Событие 1",
    description: "Описание события 1",
  },
  {
    date: "23.02.2020",
    event: "Событие 2",
    description: "Описание события 2",
  },
  {
    date: "11.12.2020",
    event: "Событие 2",
    description: "Описание события 2",
  },
];

const year2021 = [
  {
    date: "12.09.2021",
    event: "Событие 1",
    description: "Описание события 1",
  },
  {
    date: "07.11.2021",
    event: "Событие 2",
    description: "Описание события 2",
  },
  {
    date: "10.02.2021",
    event: "Событие 2",
    description: "Описание события 2",
  },
];

// получаем DOM елементы
const input = document.querySelector("#input");
const table = document.querySelector("#table");

// при вводе года и нажатия на клавишу Enter отчищаем таблицу и вызываем функцию которая выбирает по условую нужный масив и заполняет таблицу
input.addEventListener("keypress", function (event) {
  if (input.value == 2020 && event.code == "Enter") {
    table.innerHTML = ""; // чистим таблицу
    makeTable(year2020); // вызываем вспомогутельнцю функцию
  }
  if (input.value == 2021 && event.code == "Enter") {
    table.innerHTML = ""; // чистим таблицу
    makeTable(year2021); // вызываем вспомогутельнцю функцию
  }
});

// функция которая в параметр вставляеться массив из обьектов и создаеться и заполняються теги которые вставляються в таблицу
function makeTable(obj) {
  for (const elem of obj) {
    const tr = document.createElement("tr");
    for (const key in elem) {
      const td = document.createElement("td");
      td.textContent = elem[key];
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  return table;
}
