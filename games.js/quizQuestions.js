// const texts = document.querySelectorAll("p");
// const inputs = document.querySelectorAll("input");
// const button = document.querySelector("#button");
// const test = document.querySelector("#test");
// let answers = ["ответ 1", "ответ 2", "ответ 3"];

// button.addEventListener("click", function () {
//   for (let i = 0; i < inputs.length; i += 1) {
//     if (inputs[i].value == inputs[i].dataset.right) {
//       texts[i].classList.add("right");
//     } else {
//       texts[i].classList.add("wrong");
//     }
//   }
// });

// let answers = ["ответ 1", "ответ 2", "ответ 3"];
// let questions = ["вопрос 1?", "вопрос 2?", "вопрос 3?"];

// button.addEventListener("click", function () {
//   const div = document.createElement("div");
//   for (let i = 0; i < answers.length; i += 1) {
//     const p = document.createElement("p");
//     p.textContent = questions[i];
//     div.appendChild(p);
//     const input = document.createElement("input");
//     input.value = answers[i];
//     div.appendChild(input);
//     if (input.value == answers[i]) {
//       p.classList.add("right");
//     } else {
//       p.classList.add("wrong");
//     }
//   }
//   test.appendChild(div);
// });

// let questions = {
//   "Вопрос 1?": "ответ 1",
//   "Вопрос 2?": "ответ 2",
//   "Вопрос 3?": "ответ 3",
// };

// button.addEventListener("click", function () {
//   const div = document.createElement("div");
//   for (const key in questions) {
//     const p = document.createElement("p");
//     p.textContent = key;
//     div.appendChild(p);
//     const input = document.createElement("input");
//     input.value = questions[key];
//     div.appendChild(input);
//     if (input.value == questions[key]) {
//       p.classList.add("right");
//     } else {
//       p.classList.add("wrong");
//     }
//   }
//   test.appendChild(div);
// });

// const button = document.querySelector("#button");
// const inputs = document.querySelectorAll("input");

// button.addEventListener("click", function () {
//   for (const elem of inputs) {
//     if (elem.hasAttribute("data-right") | elem.checked) {
//       elem.parentElement.parentElement.firstElementChild.classList.add("right");
//     } else {
//       elem.parentElement.parentElement.firstElementChild.classList.add("wrong");
//     }
//   }
// });
