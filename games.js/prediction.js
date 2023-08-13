/* <div id="parent">
  <div id="timer">?</div>
  <div id="text"></div>
  <button id="start" class="active">
    узнать свою судьбу
  </button>
  <button id="stop">получить предсказание</button>
</div>; */

// #parent {
//   text-align: center;
// }
// #parent > * {
//   margin-bottom: 10px;
// }

// #timer {
//   font-size: 18px;
// }
// #text {
//   font-size: 17px;
//   font-style: italic;
// }

// button {
//   padding: 5px 10px;
//   font-size: 15px;
//   cursor: pointer;
// }
// button:not(.active) {
//   display: none;
// }

// const predictions = [
//   "today you will succeed in learning JavaScript",
//   "give yourself a day off today - let the whole world wait",
//   "today you risk forgetting something when you leave the house2",
//   "don`t leave the house today2",
//   "today you will find good luck and success in all your endeavors",
//   "today you better lie down on the couch all day2",
//   "you will have a wonderful day today",
// ];

// const timer = document.querySelector("#timer");
// const text = document.querySelector("#text");
// const start = document.querySelector("#start");
// const stop = document.querySelector("#stop");

// let arr = [4, 2, 6, 3, 1, 5, 7];

// start.addEventListener("click", function () {
//   let i = 0;
//   const timerId = setInterval(function () {
//     timer.textContent = arr[i];
//     if (i == arr.length) {
//       i = 0;
//       timer.textContent = arr[i];
//     }
//     i++;
//   }, 100);

//   start.classList.remove("active");
//   stop.classList.add("active");

//   stop.addEventListener("click", function () {
//     text.textContent = predictions[Number(arr[i])];
//     clearInterval(timerId);
//     if (i == 0 || i == 1 || i == 4 || i == 6) {
//       text.style.color = "yellow";
//     } else {
//       text.style.color = "red";
//     }
//   });
// });
