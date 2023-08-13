// const cells = document.querySelectorAll("#field td");
// let i = 0;
// for (const cell of cells) {
//   cell.addEventListener("click", function func() {
//     this.textContent = ["X", "O"][i % 2];
//     this.removeEventListener("click", func);
//     if (isVictory(cells)) {
//       alert("Victory " + this.textContent);
//     } else if (i == 8) {
//       alert("Draw");
//     }
//     i++;
//   });
// }

// function isVictory(cells) {
//   let combs = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   for (const comb of combs) {
//     if (
//       cells[comb[0]].textContent == cells[comb[1]].textContent &&
//       cells[comb[1]].textContent == cells[comb[2]].textContent &&
//       cells[comb[0]].textContent != ""
//     ) {
//       return true;
//     }
//   }
//   return false;
// }

/* <table id="field">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table> */

// #field td {
//   width: 50px;
//   height: 50px;
//   border: 1px solid black;
//   text-align: center;
//   font-weight: bold;
// }
