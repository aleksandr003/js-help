// const slider = document.querySelector("#slider");
// let texts = ["text1", "text2", "text3"];

// let i = 0;
// setInterval(function () {
//   if (i == texts.length) {
//     i = 0;
//   }
//   slider.textContent = texts[i];
//   i++;
// }, 1000);

// ------------

// const slider = document.querySelector("#slider");
// const left = document.querySelector("#left");
// const right = document.querySelector("#right");
// let texts = ["text1", "text2", "text3"];

// let i = 0; // внешняя переменная
// slider.textContent = texts[i];
// left.addEventListener("click", function func1(event) {
//   event.preventDefault();
//   i--;
//   if (i < 0) {
//     return this.removeEventListener("click", func1);
//   }
//   slider.textContent = texts[i];
// });
// right.addEventListener("click", function func2(event) {
//   event.preventDefault();
//   i++;
//   if (i == texts.length) {
//     return this.removeEventListener("click", func2);
//   }
//   slider.textContent = texts[i];
// });

// -------
// let texts = ["1.png", "2.png", "3.png"];

// const slider = document.querySelector("#slider");
// const prev = document.querySelector("#prev");
// const next = document.querySelector("#next");

// let i = 0;
// const timerId = setInterval(function () {
//   slider.src = texts[i];
//   i++;
//   if (i == texts.length) {
//     i = 0;
//   }
// }, 1000);

// prev.addEventListener("click", prevFunc);
// next.addEventListener("click", nextFunc);
// function prevFunc() {
//   i--;
//   if (i < 0) {
//     i = texts.length - 1;
//   }
//   slider.src = texts[i];
// }
// function nextFunc() {
//   i++;
//   if (i == texts.length) {
//     i = 0;
//   }
//   slider.src = texts[i];
// }

// -------
// Пусть теперь в HTML коде у нас есть все картинки, которые мы планируем показывать в нашем слайдере:

// <div id="slider">
// 	<img src="1.png">
// 	<img src="2.png">
// 	<img src="3.png">
// </div>
// Давайте сделаем так, чтобы по заходу на страницу показывалась первая картинка, затем через секунду - вторая, и так далее по кругу.

// const images = document.querySelectorAll("img");
// let i = 0;

// setInterval(function () {
//   images[i].style.display = "block";
// }, 1000);

// setInterval(function () {
//   images[i].style.display = "none";
//   i++;
//   if (i == images.length) {
//     i = 0;
//   }
// }, 999);
