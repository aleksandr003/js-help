// let rows = 3;
// let cols = 3;

// const table = document.querySelector("#field");
// let colors = ["red", "yellow", "blue"];
// let currentColor = "";
// for (let i = 0; i < rows; i += 1) {
//   const tr = document.createElement("tr");
//   for (let j = 0; j < cols; j += 1) {
//     const td = document.createElement("td");
//     td.style.backgroundColor = randomColor(colors);
//     td.addEventListener("click", function () {
//       currentColor = nextColor(colors, this.style.backgroundColor);
//       this.style.backgroundColor = currentColor;
//       colorsCheck();
//     });
//     tr.appendChild(td);
//   }
//   table.appendChild(tr);
// }

// function randomColor(arr) {
//   let num = Math.floor(Math.random() * (arr.length - 1 - 0 + 1)) + 0;
//   return arr[num];
// }

// function nextColor(arr, color) {
//   let res = "";
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] == color) {
//       res = arr[i + 1];
//     }
//     if (color == arr[arr.length - 1]) {
//       res = arr[0];
//     }
//   }
//   return res;
// }

// function colorsCheck() {
//   const calls = document.querySelectorAll("td");
//   const firstColor = calls[0].style.backgroundColor;
//   let allColorMatch = true;
//   for (const elem of calls) {
//     if (elem.style.backgroundColor != firstColor) {
//       allColorMatch = false;
//       break;
//     }
//   }
//   if (allColorMatch) {
//     alert("finishid");
//   }
// }

// #field td {
//   width: 50px;
//   height: 50px;
//   border: 1px solid black;
//   text-align: center;
//   font-weight: bold;
// }

/* <table id="field"></table> */
