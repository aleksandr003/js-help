// let name = document.querySelector("#name");
// let price = document.querySelector("#price");
// let amount = document.querySelector("#amount");
// let add = document.querySelector("#add");
// let table = document.querySelector("#table");
// let total = document.querySelector("#total");
// let sum = 0;
// let x = 0;
// let y = 0;
// add.addEventListener("click", function () {
//   const tr = document.createElement("tr");
//   const tdName = document.createElement("td");
//   tdName.textContent = name.value;
//   tdName.addEventListener("dblclick", function () {
//     const text = this.textContent;
//     this.textContent = "";
//     const input = document.createElement("input");
//     input.value = text;
//     this.appendChild(input);
//     input.addEventListener("keypress", function (event) {
//       if (event.key == "Enter") {
//         tdName.textContent = this.value;
//       }
//     });
//   });
//   tr.appendChild(tdName);

//   const tdPrice = document.createElement("td");
//   tdPrice.classList.add("price");
//   tdPrice.textContent = price.value;
//   tdPrice.addEventListener("dblclick", function () {
//     const text = this.textContent;
//     this.textContent = "";
//     const input = document.createElement("input");
//     input.value = text;
//     this.appendChild(input);
//     input.addEventListener("keypress", function (event) {
//       if (event.key == "Enter") {
//         tdPrice.textContent = this.value;
//         x = Number(tdPrice.textContent);
//         tdtTotal.textContent = x * y;
//         total.textContent = totalSum();
//       }
//     });
//   });
//   tr.appendChild(tdPrice);

//   const tdAmount = document.createElement("td");
//   tdAmount.classList.add("amount");
//   tdAmount.textContent = amount.value;
//   tdAmount.addEventListener("dblclick", function () {
//     const text = this.textContent;
//     this.textContent = "";
//     const input = document.createElement("input");
//     input.value = text;
//     this.appendChild(input);
//     input.addEventListener("keypress", function (event) {
//       if (event.key == "Enter") {
//         tdAmount.textContent = this.value;
//         y = Number(tdAmount.textContent);
//         tdtTotal.textContent = x * y;
//         total.textContent = totalSum();
//       }
//     });
//   });
//   tr.appendChild(tdAmount);

//   const tdtTotal = document.createElement("td");
//   tdtTotal.classList.add("tots");
//   x = Number(tdPrice.textContent);
//   y = Number(tdAmount.textContent);
//   //   sum += x * y;
//   tdtTotal.textContent = x * y;
//   tr.appendChild(tdtTotal);

//   const tdtRemove = document.createElement("td");
//   tdtRemove.textContent = "удалить";
//   tdtRemove.addEventListener("click", function () {
//     this.parentElement.remove();
//     total.textContent = totalSum();
//   });
//   tr.appendChild(tdtRemove);

//   table.appendChild(tr);
//   total.textContent = totalSum();
// });

// function totalSum() {
//   const tots = document.querySelectorAll(".tots");
//   let sums = 0;
//   for (const elem of tots) {
//     sums += Number(elem.textContent);
//   }
//   return sums;
// }

// Вариант 2
// let name = document.querySelector("#name");
// let price = document.querySelector("#price");
// let amount = document.querySelector("#amount");
// let add = document.querySelector("#add");
// let table = document.querySelector("#table");
// let total = document.querySelector("#total");

// add.addEventListener("click", function () {
//   const tr = document.createElement("tr");

//   allowEdit(createCell(tr, name.value, "name"));
//   allowEdit(createCell(tr, price.value, "price"));
//   allowEdit(createCell(tr, amount.value, "amount"));
//   createCell(tr, price.value * amount.value, "cost");
//   createCell(tr, "удалить", "remove").addEventListener("click", function () {
//     this.parentElement.remove();
//     recountTotal();
//   });

//   table.appendChild(tr);
//   recountTotal();
// });

// function createCell(root, value, name) {
//   const td = document.createElement("td");
//   td.textContent = value;
//   td.classList.add(name);
//   return root.appendChild(td);
// }

// function recountTotal() {
//   const costs = document.querySelectorAll(".cost");
//   let sum = 0;

//   for (const elem of costs) {
//     sum += elem;
//   }

//   return (total.innerHTML = sum);
// }

// function allowEdit(td) {
//   td.addEventListener("dblclick", function () {
//     const input = document.createElement("input");
//     input.value = td.textContent;
//     td.textContent = "";
//     td.appendChild(input);
//     input.addEventListener("keypress", function (event) {
//       if (event.key == "Enter") {
//         td.textContent = input.value;
//         input.remove();
//         if (td.classList.contains("price") || td.classList.contains("amount")) {
//           // выполним перерасчет
//         }
//         recountTotal();
//       }
//     });
//   });
// }

/* <div id="parent">
  <div id="form">
    <input id="name" placeholder="название" />
    <input id="price" placeholder="цена" />
    <input id="amount" placeholder="количество" />
    <input id="add" type="button" value="добавить" />
  </div>

  <h2>Таблица продуктов:</h2>
  <table id="table">
    <tr>
      <th>название</th>
      <th>цена</th>
      <th>кол-во</th>
      <th>сумма</th>
      <th>удалить</th>
    </tr>
  </table>
  <div id="result">
    общий итог: <span id="total">0</span>
  </div>
</div> */

// * {
//   box-sizing: border-box;
// }
// #parent {
//   margin: 0 auto;
//   width: 500px;
// }

// #form {
//   display: flex;
//   margin-bottom: 15px;
// }
// #form input {
//   padding: 8px;
//   width: 24%;
//   margin: 0 0.5% 10px 0.5%;
// }

// h2 {
//   margin-top: 0;
//   margin-bottom: 7px;
// }

// #table {
//   width: 100%;
//   margin-bottom: 10px;
// }
// #table td,
// #table th {
//   padding: 8px;
//   text-align: center;
//   border: 1px solid black;
// }
// #table td.remove {
//   color: blue;
//   cursor: pointer;
//   text-decoration: underline;
// }
// #table td.remove:hover {
//   text-decoration: none;
// }

// #result {
//   text-align: right;
//   margin-right: 10px;
// }
