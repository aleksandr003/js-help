// let button = document.querySelector("#button");
// console.log(button);

// const elem1 = document.querySelector("#elem1");
// const elem2 = document.querySelector("#elem2");
// const elem3 = document.querySelector("#elem3");

// console.log(elem1);
// console.log(elem2);
// console.log(elem3);

// const elem = document.querySelector("#parent input");
// console.log(elem);

// const block = document.querySelector(".block p");
// console.log(block);

// const elem = document.querySelector(".www");
// console.log(elem);

// 341

// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   console.log("Hello");
// });

// const button1 = document.querySelector("#button1");
// const button2 = document.querySelector("#button2");
// const button3 = document.querySelector("#button3");
// button1.addEventListener("click", () => console.log(1));
// button2.addEventListener("click", () => console.log(2));
// button3.addEventListener("click", () => console.log(3));

// function func1() {
//   console.log(1);
// }
// function func2() {
//   console.log(2);
// }
// const button1 = document.querySelector("#button1");
// const button2 = document.querySelector("#button2");
// button1.addEventListener("click", func1);
// button2.addEventListener("click", func2);

// function func() {
//   console.log("!!!");
// }
// let button1 = document.querySelector("#button1");
// let button2 = document.querySelector("#button2");
// button1.addEventListener("click", func);
// button2.addEventListener("click", func);

// function func() {
//   console.log("message");
// }
// const elem1 = document.querySelector("#elem1");
// const elem2 = document.querySelector("#elem2");
// const elem3 = document.querySelector("#elem3");
// const elem4 = document.querySelector("#elem4");
// const elem5 = document.querySelector("#elem5");
// elem1.addEventListener("click", func);
// elem2.addEventListener("click", func);
// elem3.addEventListener("click", func);
// elem4.addEventListener("click", func);
// elem5.addEventListener("click", func);

// function func1() {
//   console.log("1");
// }
// function func2() {
//   console.log("2");
// }
// const button = document.querySelector("#button");
// button.addEventListener("click", func1);
// button.addEventListener("click", func2);

// function func1() {
//   console.log("1");
// }
// function func2() {
//   console.log("2");
// }
// function func3() {
//   console.log("3");
// }
// const elem = document.querySelector("#elem");
// elem.addEventListener("click", func1);
// elem.addEventListener("click", func2);
// elem.addEventListener("click", func3);

// const button = document.querySelector("#button");

// button.addEventListener("mouseover", function () {
//   console.log("1");
// });
// button.addEventListener("mouseout", function () {
//   console.log("2");
// });

// const button = document.querySelector("#button");
// button.addEventListener("dblclick", () => console.log("hi"));
// button.addEventListener("mouseover", function () {
//   console.log("Hello");
// });
// button.addEventListener("mouseout", function () {
//   console.log("Bay");
// });

// 346

// const elem = document.querySelector("#elem");
// console.log(elem.textContent);
// elem.textContent = "Hello";
// console.log(elem.textContent);

// Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль.
// const elem = document.querySelector("#elem");
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   console.log(elem.textContent);
// });

// Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст.
// const elem = document.querySelector("#elem");
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   elem.textContent = "hello!";
//   console.log(elem.textContent);
// });

// Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел.
// const elem1 = document.querySelector("#elem1");
// const elem2 = document.querySelector("#elem2");
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   console.log(+elem1.textContent + +elem2.textContent);
// });

// Даны три абзаца с числами, див, и кнопка. По нажатию на кнопку запишите в текст дива сумму чисел.
// const elem1 = document.querySelector("#elem1");
// const elem2 = document.querySelector("#elem2");
// const elem3 = document.querySelector("#elem3");
// const block = document.querySelector("#block");
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   block.textContent =
//     +elem1.textContent + +elem2.textContent + +elem3.textContent;
// });

// Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.
// const elem1 = document.querySelector("#elem1");
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   elem1.textContent = Number(elem1.textContent) + 1;
// });

// Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.
// const elem1 = document.querySelector("#elem1");
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   if (elem1.textContent.slice(-1) !== "!") {
//     elem1.textContent += "!";
//   }
// });

// let elem = document.querySelector("#elem");
// console.log(elem.innerHTML);
// elem.innerHTML = "<i>!!!</i>";
// console.log(elem.innerHTML);

// Дан абзац и кнопка. По клику на кнопку прочитайте HTML код абзаца и выведите его в консоль.
// const elem1 = document.querySelector("#elem1");
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   console.log(elem1.innerHTML);
// });

// Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст так, чтобы он был жирным.
// const elem1 = document.querySelector("#elem1");
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   elem1.innerHTML = "<b>" + elem1.innerHTML + "</b>";
// });

// 348
// let elem = document.querySelector("#elem");
// console.log(elem.id);
// console.log(elem.type);
// elem.type = "submit";
// console.log(elem.type);

// Дана также кнопка. По нажатию на кнопку выведите на экран содержимое атрибута type указанного выше инпута.
// const elem = document.querySelector("#elem");
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   console.log(elem.type);
// });

// Дана также кнопка. По нажатию на кнопку запишите в атрибут type значение submit.
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   button.type = "submit";
// });

// Пусть у вас есть ссылка в виде тега a, кнопка и абзац. По нажатию на кнопку выведите в абзац содержимое атрибута href ссылки.

// const link = document.querySelector("#link");
// const button = document.querySelector("#button");
// const text = document.querySelector("#text");
// button.addEventListener("click", function () {
//   text.textContent = link.href;
// });

// Пусть у вас есть ссылка и кнопка. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках.
// const link = document.querySelector("#link");
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   link.innerHTML += " (" + link.href + ")";
// });

// Пусть у вас есть картинка. Разместите ее на странице с помощью тега img. Пусть даны также кнопка и абзац. Сделайте так, чтобы по клику на кнопку в абзац записался путь к картинки из ее атрибута src.
// const img = document.querySelector("#img");
// const button = document.querySelector("#button");
// const text = document.querySelector("#text");
// button.addEventListener("click", function () {
//   text.textContent = img.src;
// });

// Дана картинка в теге img и кнопка. По нажатию на кнопку в атрибут width запишите значение 300.
// const img = document.querySelector("#img");
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   img.width = 300;
// });

// Дана картинка в теге img и кнопка. Пусть в атрибуте width задана некоторая ширина. Сделайте кнопку, по нажатию на которую ширина картинки будет увеличиваться в 2 раза.
// const img = document.querySelector("#img");
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   img.width *= 2;
// });

// Пусть у вас есть две картинки. Сделайте на странице тег img и две кнопки. По нажатию на первую кнопку запишите в атрибут src путь к первой картинке, а по нажатию на вторую - путь ко второй картинке.
// const img = document.querySelector("#img");
// const button1 = document.querySelector("#button1");
// const button2 = document.querySelector("#button2");
// button1.addEventListener("click", function () {
//   img.src = "./service2.jpg";
// });
// button2.addEventListener("click", function () {
//   img.src = "./service9.jpg";
// });

// const elem = document.querySelector("#elem");
// console.log(elem.value);
// elem.value = "hi";

// Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст.
// const input = document.querySelector("#input");
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   input.value = "hi";
// });

// Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац текст из инпута.
// const input = document.querySelector("#input");
// const text = document.querySelector("#text");
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   text.textContent = input.value;
// });

// Даны два инпута и кнопка. В первый инпут пользователем вводится число. По нажатию на кнопку запишите во второй инпут квадрат введенного числа.
// const input1 = document.querySelector("#input1");
// const input2 = document.querySelector("#input2");
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   input2.value = input1.value * 2;
// });

// Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа. По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац.
// const input1 = document.querySelector("#input1");
// const input2 = document.querySelector("#input2");
// const input3 = document.querySelector("#input3");
// const input4 = document.querySelector("#input4");
// const input5 = document.querySelector("#input5");
// const text = document.querySelector("#text");
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   text.textContent =
//     (+input1.value +
//       +input2.value +
//       +input3.value +
//       +input4.value +
//       +input5.value) *
//     5;
// });

// Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа. По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац.
// const inputs = document.querySelectorAll("input");
// const text = document.querySelector("#text");
// const button = document.querySelector("#button");
// const infoFromInputs = [...inputs];
// button.addEventListener("click", function () {
//   let sum = 0;
//   for (const elem of infoFromInputs) {
//     sum += Number(elem.value);
//   }
//   return (text.textContent = sum * infoFromInputs.length);
// });

// Дан инпут. Пусть в него вводится число. По потери фокуса выведите на экран квадрат этого числа.
// let elem = document.querySelector("#elem");
// elem.addEventListener("blur", function () {
//   elem.value *= 2;
// });

// Дан инпут, в котором изначально есть какой-то текст. По получению фокуса инпутом очистите содержимое этого инпута.
// let elem = document.querySelector("#elem");
// elem.addEventListener("focus", function () {
//   elem.value = "";
// });

// Дана также кнопка. По нажатию на кнопку запишите в атрибут class нашего дива какой-нибудь класс.
// const elem = document.querySelector("#elem");
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   elem.className = "input";
//   console.log(elem);
// });

// Дана также кнопка. По нажатию на кнопку получите массив CSS классов нашего дива.
// const elem = document.querySelector("#elem");
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   return (elem.textContent = elem.className.split(" "));
// });

// Переделайте приведенный выше код так, чтобы вместо введения переменной image использовалась цепочка.
// console.log(document.querySelector("#image").src);

// Укажите на недостатки данного кода. Исправьте их.
// const image = document.querySelector("#image");
// console.log(image.src);
// console.log(image.width);
// console.log(image.height);

// 354
// let elem = document.querySelector("#elem");
// elem.addEventListener("blur", func);
// function func() {
//   this.value = "!";
// }

// Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.
// const input = document.querySelector("#input");
// input.addEventListener("click", func);
// function func() {
//   this.value++;
// }

// 355 Преимущество this в JavaScript
// let button1 = document.querySelector("#button1");
// let button2 = document.querySelector("#button2");
// let button3 = document.querySelector("#button3");
// button1.addEventListener("click", func);
// button2.addEventListener("click", func);
// button3.addEventListener("click", func);
// function func() {
//   console.log(this.value);
// }

// Даны 5 абзацев с какими-то текстами. По клику на любой абзац запишите в конец его текста восклицательный знак.
// const text1 = document.querySelector("#text1");
// const text2 = document.querySelector("#text2");
// const text3 = document.querySelector("#text3");
// const text4 = document.querySelector("#text4");
// const text5 = document.querySelector("#text5");
// text1.addEventListener("click", func);
// text2.addEventListener("click", func);
// text3.addEventListener("click", func);
// text4.addEventListener("click", func);
// text5.addEventListener("click", func);
// function func() {
//   this.innerHTML += "!";
// }

// Даны 3 инпута, в которых записаны какие-то числа. По потери фокуса в любом из инпутов возведите стоящее в нем число в квадрат.
// const input1 = document.querySelector("#input1");
// const input2 = document.querySelector("#input2");
// const input3 = document.querySelector("#input3");
// input1.addEventListener("blur", func);
// input2.addEventListener("blur", func);
// input3.addEventListener("blur", func);
// function func() {
//   this.value *= this.value;
// }

// const elems = document.querySelectorAll(".www");
// console.log(elems);
// for (const elem of elems) {
//   if (elem.textContent.slice(-1) !== "!") {
//     elem.textContent += "!";
//   }
// }

// Даны абзацы с текстом и кнопка. По нажатию на кнопку запишите в конец текста каждого абзаца его порядковый номер.
// const elems = document.querySelectorAll(".www");
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   elems.forEach(function (elem, index) {
//     elem.textContent += index;
//   });
// });
// button.addEventListener("click", function () {
//   for (let i = 0; i < elems.length; i++) {
//     elems[i].textContent += i;
//   }
// });

// Даны инпуты с числами, абзац и кнопка. По нажатию на кнопку найдите сумму чисел из инпутов и запишите эту сумму в текст абзаца.
// const elems = document.querySelectorAll(".www");
// const text = document.querySelector("#text");
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   let sum = 0;
//   for (const elem of elems) {
//     sum += +elem.value;
//   }
//   return (text.textContent = sum);
// });

// Добавление обработчиков в цикле
// const elems = document.querySelectorAll("p");
// for (const elem of elems) {
//   elem.addEventListener("click", function () {
//     console.log(this.textContent);
//   });
// }

// Даны также инпуты. Сделайте так, чтобы по потери фокуса в любом из наших инпутов выполнялась приведенная выше функция.
// function func() {
//   this.value = Number(this.value) + 1;
// }
// const elems = document.querySelectorAll(".www");
// for (const elem of elems) {
//   elem.addEventListener("blur", func);
// }

// Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его число в нем возводилось в квадрат.
// const elems = document.querySelectorAll(".www");
// for (const elem of elems) {
//   elem.addEventListener("click", func);
// }
// function func() {
//   this.textContent *= this.textContent;
// }

// 358 Добавление анонимных обработчиков
// let divs = document.querySelectorAll("div");
// for (let div of divs) {
//   div.addEventListener("click", function () {
//     this.textContent++;
//   });
// }

// let button = document.querySelector("#button");
// button.addEventListener("click", func);
// function func() {
//   console.log("!!!");
//   this.removeEventListener("click", func);
// }

// Дана ссылка и кпнока. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
// const link = document.querySelector("#link");
// const button = document.querySelector("#button");
// button.addEventListener("click", func);
// function func() {
//   link.textContent += " (" + link.href + ")";
//   this.removeEventListener("click", func);
// }

// Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу. После того, как значение кнопки достигнет 10 - отвяжите обработчик события, чтобы кнопка больше не реагировала на нажатие.
// const button = document.querySelector("#button");
// button.addEventListener("click", func);
// function func() {
//   this.textContent++;
//   if (this.textContent >= 10) {
//     this.removeEventListener("click", func);
//   }
// }

// Даны абзацы. По нажатию на любой из абзацев добавьте ему в конец восклицательный знак. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
// let elems = document.querySelectorAll("p");
// for (let elem of elems) {
//   elem.addEventListener("click", func);
// }
// function func() {
//   this.textContent += "!";
//   this.removeEventListener("click", func);
// }

// 361
// let elems = document.querySelectorAll("p");
// for (const elem of elems) {
//   elem.addEventListener("click", function func() {
//     console.log(this.textContent);
//     this.removeEventListener("click", func);
//   });
// }

// Дан список ul, в каждом пункте которого записано число. Сделайте так, чтобы по клику на любую li ее число увеличивалось на единицу.
// const items = document.querySelectorAll(".item");
// for (const item of items) {
//   item.addEventListener("click", function func() {
//     this.textContent++;
//     this.removeEventListener("click", func);
//   });
// }

// Модифицируйте предыдущую задачу так, чтобы каждая li увеличивала свое значение только если ее значение меньше 10.
// const items = document.querySelectorAll(".item");
// for (const item of items) {
//   item.addEventListener("click", function func() {
//     this.textContent++;
//     if (this.textContent >= 10) {
//       this.removeEventListener("click", func);
//     }
//   });
// }

// Советы по написанию кода на примере DOM

// Пусть перед вами стоит задача найти абзацы с числами, кратными 3, и найти сумму их чисел.
// const elems = document.querySelectorAll("p");
// let sum = 0;
// for (const elem of elems) {
//   if (elem.textContent % 3 === 0) {
//     sum += +elem.textContent;
//   }
// }
// console.log(sum);

// Получите года, сумма цифр которых равна 6. Найдите сумму полученных годов.
// const elems = document.querySelectorAll("li");
// const needSum = 6;
// let res = 0;
// for (const elem of elems) {
//   const arrElem = elem.textContent.split("");
//   let sum = 0;
//   for (const num of arrElem) {
//     sum += +num;
//   }
//   if (sum === needSum) {
//     res += sum;
//   }
// }
// console.log(res);

// 363
// Код должен добавить текст в конец каждого абзаца:
// let elems = document.querySelectorAll("p");
// for (const elem of elems) {
//   elem.textContent += "!";
// }

// По клику на абзац его значение должно увеличиться на единицу:
// let elems = document.querySelectorAll("p");
// for (let elem of elems) {
//   elem.addEventListener("click", function () {
//     this.textContent++;
//   });
// }

// По клику на кнопку текст абзаца должен стать жирным:
// let button = document.querySelector("button");
// let elem = document.querySelector("p");

// button.addEventListener("click", function () {
//   elem.innerHTML = "<b>" + elem.innerHTML + "</b>";
// });

// По клику на кнопку в консоль должна вывестись сумма чисел из абзацев:
// let button = document.querySelector("button");
// let elems = document.querySelectorAll("p");
// let sum = 0;
// button.addEventListener("click", function func() {
//   for (let elem of elems) {
//     sum += +elem.textContent;
//   }
//   button.removeEventListener("click", func);
//   return console.log(sum);
// });

// В инпуты вводятся числа. По клику на кнопку в консоль должна вывестись сумма чисел из инпутов:
// let button = document.querySelector("button");
// let elems = document.querySelectorAll("input");
// let sum = 0;
// button.addEventListener("click", function func() {
//   for (let elem of elems) {
//     sum += +elem.value;
//   }
//   console.log(sum);
//   button.removeEventListener("click", func);
// });

// В первые два инпута вводятся числа. По клику на кнопку в третий инпут должна вывестись сумма этих чисел:
// let btn = document.querySelector("#btn");
// let inp1 = document.querySelector("#inp1");
// let inp2 = document.querySelector("#inp2");
// let inp3 = document.querySelector("#inp3");
// btn.addEventListener("click", function () {
//   inp3.value = +inp1.value + +inp2.value;
// });

// По клику на кнопку нужно проверить, что текст в каждом инпуте совпадает с текстом его data атрибута:
// let inputs = document.querySelectorAll("input");
// let button = document.querySelector("#btn");
// button.addEventListener("click", function () {
//   for (let input of inputs) {
//     if (input.value === input.dataset.text) {
//       input.value = "right";
//     } else {
//       input.value = "wrong";
//     }
//   }
// });

// По клику на кнопку нужно проверить, что текст в каждом инпуте совпадает с текстом соответствующего элемента массива:
// let inputs = document.querySelectorAll("input");
// let button = document.querySelector("#btn");
// let texts = ["text1", "text2", "text3"];
// button.addEventListener("click", function () {
//   for (let i = 0; i < inputs.length; i++) {
//     if (inputs[i].value === texts[i]) {
//       inputs[i].classList.add("right");
//     } else {
//       inputs[i].classList.add("wrong");
//     }
//   }
// });

// В инпут вводится число. По потери фокуса в консоль должна вывестись сумма цифр этого числа:
// let inp = document.querySelector("#inp");
// let sum = 0;
// inp.addEventListener("blur", function () {
//   let digits = inp.value.split("");
//   for (let digit of digits) {
//     sum += +digit;
//   }
//   console.log(sum);
// });

//1 Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
// const input = document.querySelector("input");
// const text = document.querySelector("p");
// input.addEventListener("blur", function () {
//   text.textContent += input.value;
// });

//2 Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.
// const inputs = document.querySelectorAll("input");
// const text = document.querySelector("p");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   let sum = 0;
//   for (const input of inputs) {
//     sum += Number(input.value);
//   }
//   text.textContent = sum;
// });

//3 Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
// const input = document.querySelector("input");
// input.addEventListener("blur", function () {
//   let res = 0;
//   const arrInput = input.value.split("");
//   for (const elem of arrInput) {
//     res += Number(elem);
//   }
//   console.log(res);
// });

//4 Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).
// const input = document.querySelector("input");
// input.addEventListener("blur", function () {
//   let res = 0;
//   const arrInput = input.value.split(",");
//   for (const elem of arrInput) {
//     res += Number(elem);
//   }
//   console.log(res / arrInput.length);
// });

//5 Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.
// const inputs = document.querySelectorAll("input");
// inputs[0].addEventListener("blur", function () {
//   const arr = inputs[0].value.split(",");
//   inputs[0].value = "";
//   inputs[1].value = arr[0];
//   inputs[2].value = arr[1];
//   inputs[3].value = arr[2];
// });

//6 Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).
// 6
// const input = document.querySelector("input");
// input.addEventListener("blur", function () {
//   const arr = input.value.split(" ");
//   let str = "";
//   for (const elem of arr) {
//     str += elem.slice(0, 1).toUpperCase() + elem.slice(1) + " ";
//   }
//   input.value = str;
// });

//7 Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.
// const input = document.querySelector("input");
// input.addEventListener("blur", function () {
//   input.value = input.value.split(" ").length;
// });

//8 Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
// const input = document.querySelector("input");
// input.addEventListener("blur", function () {
//   input.value = input.value.split(".").reverse().join("-");
// });

//9 Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
// const input = document.querySelector("input");
// const button = document.querySelector("button");
// const text = document.querySelector("p");
// button.addEventListener("click", function () {
//   if (input.value === input.value.split("").reverse().join("")) {
//     text.textContent = "yes";
//   } else text.textContent = "no";
// });

//10 Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
// const input = document.querySelector("input");
// input.addEventListener("blur", function () {
//   const arr = input.value.split("");
//   return arr.find(function (elem) {
//     return (input.value = elem === "3");
//   });
// });

//11 Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
// const elems = document.querySelectorAll("p");
// const button = document.querySelector("button");
// button.addEventListener("click", function func() {
//   elems.forEach(function (elem, index) {
//     elem.textContent += index;
//     button.removeEventListener("click", func);
//   });
// });

//12 Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
// const links = document.querySelectorAll("a");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   for (const elem of links) {
//     elem.textContent += " (" + elem.href + ")";
//   }
// });

//13 Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).
// const links = document.querySelectorAll("a");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   for (const elem of links) {
//     if (elem.href.startsWith("http://")) {
//       elem.textContent += ">";
//     }
//   }
// });

//14 Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.
// const elems = document.querySelectorAll("p");
// for (const elem of elems) {
//   elem.addEventListener("click", function () {
//     this.textContent *= this.textContent;
//   });
// }

//15 Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.
// const input = document.querySelector("input");
// let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
// input.addEventListener("blur", function () {
//   let date = new Date(input.value.split(".").reverse().join("."));
//   input.value = days[date.getDay()];
// });

//16 Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.
// const input = document.querySelector("input");
// const btnMinus = document.querySelector("#minus");
// const btnPlus = document.querySelector("#plus");
// btnMinus.addEventListener("click", function () {
//   if (input.value > 0) {
//     input.value--;
//   }
// });
// btnPlus.addEventListener("click", function () {
//   input.value++;
// });

//17 Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
// const input = document.querySelector("input");
// const texts = document.querySelectorAll("p");
// for (const text of texts) {
//   text.addEventListener("click", function () {
//     input.value++;
//   });
// }

//18 На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста
// const elems = document.querySelectorAll("div");
// for (const elem of elems) {
//   if (elem.textContent.length > 10) {
//     elem.textContent = elem.textContent.slice(0, 10) + "...";
//   }
// }

//19 Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.
// const input = document.querySelector("input");
// input.addEventListener("blur", function () {
//   if (input.value >= 1 && input.value <= 100) {
//     input.style.background = "green";
//   } else input.style.background = "red";
// });

//20 Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
// const input = document.querySelector("input");
// const str =
//   "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*";
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   const arr = str.split("");
//   const newArr = [];
//   for (let i = 0; i < 8; i++) {
//     newArr.push(arr[Math.floor(Math.random() * (str.length - 1) + 1)]);
//   }
//   input.value = newArr.join("");
// });

//21 Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.
// const input = document.querySelector("input");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   input.value = input.value.split("").sort().join("");
// });
//--
// const input = document.querySelector("input");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   let arr = input.value.split("");
//   let newArr = [];
//   let elem = "";
//   for (let i = arr.length - 1; i >= 0; i--) {
//     elem = arr.splice(Math.ceil(Math.random() * (i - 0) + 0), 1);
//     newArr.push(elem);
//   }
//   input.value = newArr.join("");
// });

// 365 Атрибуты
// let button1 = document.querySelector("#button1");
// let button2 = document.querySelector("#button2");
// let text = document.querySelector("p");
// let num = 1;
// button1.addEventListener("click", function () {
//   button1.dataset.num = num;
//   num++;
// });
// button2.addEventListener("click", function () {
//   text.textContent = button1.dataset.num;
// });

// 377 Стилизация элементов через атрибут style
// const block = document.querySelector("div");
// let button = document.querySelector("button");
// button.addEventListener("click", function () {
//   block.style.width = "200px";
//   block.style.height = "200px";
//   block.style.backgroundColor = "green";
//   block.style.fontSize = "30px";
// });

// const texts = document.querySelectorAll("p");
// for (const text of texts) {
//   text.addEventListener("click", function () {
//     text.classList.toggle("text");
//   });
// }

// Дан абзац. Даны кнопки 'перечеркнуть', 'сделать жирным', 'сделать красным'. Пусть по нажатию на каждую кнопку заданное действие происходит с абзацем (становится красным, например).
// const text = document.querySelector("#text");
// const buttonMakeBold = document.querySelector("#buttonMakeBold");
// const buttonMakeRad = document.querySelector("#buttonMakeRad");

// buttonMakeBold.addEventListener("click", function () {
//   text.classList.toggle("fatty");
// });
// buttonMakeRad.addEventListener("click", function () {
//   text.classList.toggle("colored");
// });

// let button = document.querySelector("#button");
// let elem = document.querySelector("#elem");
// button.addEventListener("click", function () {
//   elem.classList.toggle("active");
// });

// 383
// let parent = document.querySelector("#parent");
// let elems = parent.children;
// for (let elem of elems) {
//   console.log(elem.textContent);
// }

// ----Формы
// Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.
// const text = document.querySelector("p");
// const textarea = document.querySelector("textarea");
// textarea.addEventListener("blur", function () {
//   text.textContent = textarea.value;
//   textarea.value = "";
// });

// const input = document.querySelector("input");
// input.disabled = false;

// const input = document.querySelector("input");
// const button1 = document.querySelector("#close");
// const button2 = document.querySelector("#open");
// button1.addEventListener("click", function () {
//   input.disabled = true;
// });
// button2.addEventListener("click", function () {
//   input.disabled = false;
// });

// let elem = document.querySelector("input");
// const button1 = document.querySelector("#close");
// const button2 = document.querySelector("#open");
// button1.addEventListener("click", function () {
//   elem.checked = true;
// });
// button2.addEventListener("click", function () {
//   elem.checked = false;
// });

// let elem = document.querySelector("input");
// let button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   if (elem.disabled) {
//     elem.disabled = false;
//   } else elem.disabled = true;
// });

// 400
// Даны 3 радиокнопки, абзац и кнопка. По клику на кнопку выведите в абзац value отмеченной радиокнопки.
// const radios = document.querySelectorAll(".radio");
// const res = document.querySelector("p");
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   for (const radio of radios) {
//     if (radio.checked) {
//       res.textContent = radio.value;
//     }
//   }
// });

// Дан инпут. Пусть в него вводится текст. Как только длина текста достигнет 5-ти, выведите на экран сообщение об этом.
// let elem = document.querySelector("#elem");
// elem.addEventListener("input", function () {
//   if (this.value.length === 5) {
//     console.log(this.value);
//   }
// });

// Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац. По мере ввода символов в инпут пишите, сколько еще символов можно ввести. Когда количество символов превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста.
// let elem = document.querySelector("#elem");
// let text = document.querySelector("p");
// let span = document.querySelector("span");
// elem.addEventListener("input", function () {
//   let a = this.value.length;
//   if (span.textContent <= 0) {
//     text.textContent = "Количество символов превышает ";
//   } else span.textContent = 5 - a;
// });

// let elem = document.querySelector("#elem");
// const btn = document.querySelector("#button");
// btn.addEventListener("click", function () {
//   elem.value = "";
//   elem.focus();
// });

// По потери фокуса текст из textarea должен записаться в див:
// let textarea = document.querySelector("textarea");
// let div = document.querySelector("div");
// textarea.addEventListener("blur", function () {
//   div.textContent = textarea.value;
// });

// По клику на кнопку в див должно записаться или одно, или другое значение:
// let checkbox = document.querySelector("input");
// let button = document.querySelector("button");
// let div = document.querySelector("div");
// button.addEventListener("click", function () {
//   if (checkbox.checked) {
//     div.textContent = "111";
//   } else {
//     div.textContent = "222";
//   }
// });

// По клику на кнопку, если чекбокс отмечен, то должно вывестись одно значение, а если не отмечен - другое:
// let checkbox = document.querySelector('[type="checkbox"]');
// let button = document.querySelector("button");
// button.addEventListener("click", function () {
//   if (checkbox.checked) {
//     console.log("+++");
//   } else {
//     console.log("---");
//   }
// });

//----- Основы работы с объектом Event

// let elem = document.querySelector("#elem");
// elem.addEventListener("click", function () {
//   console.log(event);
// });

// const elem = document.querySelector("#elem");
// elem.addEventListener("mousemove", function (event) {
//   elem.textContent = event.clientX + " : " + event.clientY;
// });

// const elem = document.querySelector("#elem");
// elem.addEventListener("click", function (event) {
//   console.log(event.type); // выведет 'click'
// });

// код функции func так, чтобы при клике на элемент этот элемент красился в зеленый цвет, а при двойном клике - в красный.
// const elem = document.querySelector("#elem");
// elem.addEventListener("click", func);
// elem.addEventListener("dblclick", func);
// function func() {
//   if (event.type == "click") {
//     this.style.background = "green";
//   }
//   if (event.type == "dblclick") {
//     this.style.background = "red";
//   }
// }

// let elem = document.querySelector("div");
// elem.addEventListener("click", function (event) {
//   console.log(event.target); // выведет наш абзац
//   //   console.log(this); // выведет наш див
// });

// Привяжите к тегу ul обработчик клика. В этом обработчике проверяйте с помощью свойства tagName, по какому тегу был клик. Если клик был по тегу li - добавьте в конец текста этого тега восклицательный знак. А если клик был по тегу ul - выведите информацию об этом в консоль.
// let elem = document.querySelector("ul");
// elem.addEventListener("click", function (event) {
//   if (event.target.tagName.toLowerCase() === "li") {
//     event.target.textContent += "!";
//   } else {
//     console.log("это не li");
//   }
// });

// const elem = document.querySelector("#elem");
// elem.addEventListener("click", function (event) {
//   event.target.style.color = "yellow";
// });

// 418
// let elem = document.querySelector("input");
// elem.addEventListener("keypress", function (event) {
//   console.log(event.key);
//   console.log(event.code);
// });

// Сделайте инпут, который будет по вводу выводить значения введенных клавиш и их коды.
// const elem = document.querySelector("input");
// const text = document.querySelector("p");
// elem.addEventListener("keypress", function (event) {
//   text.textContent += event.key;
// });

// Понажимайте в инпуте различные клавиши и посмотрите, какие у них значения и коды.
// const elem = document.querySelector("input");
// const text = document.querySelector("p");
// let res = "";
// elem.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     text.textContent = res;
//     elem.value = "";
//     res = "";
//   } else res += event.key;
// });

// По клику на кнопку будем выводить сообщение о том, была ли нажата одна из клавиш Ctrl, Alt и Shift:
// let elem = document.querySelector("#elem");
// elem.addEventListener("click", function (event) {
//   if (event.ctrlKey) {
//     console.log("нажат Ctrl");
//   }

//   if (event.altKey) {
//     console.log("нажат Alt");
//   }

//   if (event.shiftKey) {
//     console.log("нажат Shift");
//   }
// });

// Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Alt.
// let elem = document.querySelector("#elem");
// elem.addEventListener("click", function (event) {
//   if (event.altKey) {
//     this.style.color = "yellow";
//   }
// });

// Пусть у вас есть список ul с тегами li:
// Сделайте так, чтобы по клику на любую li, в конец ее текста добавлялось число 1, если нажата клавиша Ctrl, и число 2, если нажата клавиша Shift.
// const elem = document.querySelector("#elem");
// elem.addEventListener("click", function (event) {
//   if (event.ctrlKey || event.shiftKey) {
//     event.target.innerHTML += 2;
//   } else event.target.innerHTML += 1;
// });

// Давайте сделаем так, чтобы по клику на ссылку не происходило перехода на другую страницу:
// let elem = document.querySelector("#elem");
// elem.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("Вы не можете перейти  по этой ссылке!");
// });

// Даны ссылки. Сделайте так, чтобы по клику на ссылку ей в конец записывался ее href, а перехода по ссылке не происходило.
// const block = document.querySelector("div");
// block.addEventListener("click", function (event) {
//   event.preventDefault();
//   event.target.innerHTML += event.target.href;
// });

// Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся числа. Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел.
// const elem1 = document.querySelector("#elem1");
// const elem2 = document.querySelector("#elem2");
// const text = document.querySelector("p");
// const click = document.querySelector("a");
// click.addEventListener("click", function (event) {
//   event.preventDefault();
//   text.innerHTML = Number(elem1.value) + Number(elem2.value);
//   console.log(event);
// });

// let elem1 = document.querySelector("#elem1");
// let elem2 = document.querySelector("#elem2");
// let elem3 = document.querySelector("#elem3");
// elem1.addEventListener("click", function () {
//   alert("зеленый");
// });
// elem2.addEventListener("click", function () {
//   alert("голубой");
// });
// elem3.addEventListener("click", function () {
//   alert("красный");
// });

// let div = document.querySelector("div");
// div.addEventListener("click", function () {
//   if (event.target.tagName === "DIV") {
//     console.log("клик именно по диву");
//   }
//   if (event.target.tagName === "P") {
//     console.log("клик именно по абзацу");
//   }
// });

// Навешайте на див обработчик клика. В этом обработчике определите, в каком из тегов сработало событие.
// const div = document.querySelector("div");
// div.addEventListener("click", function (event) {
//   if (event.target.tagName === "LI") {
//     console.log("тег: " + event.target.tagName + " " + event.target.innerHTML);
//   }
//   if (event.target.tagName === "UL") {
//     console.log("тег: " + event.target.tagName);
//   }
//   if (event.target.tagName === "DIV") {
//     console.log("тег: " + event.target.tagName);
//   }
// });

// Модифицируйте предыдущую задачу. Сделайте так, чтобы при клике на li, ей в конец добавлялся восклицательный знак, а при клике на ul в консоль выводилась информация об этом.
// const div = document.querySelector("div");
// div.addEventListener("click", function (event) {
//   if (event.target.tagName === "LI") {
//     event.target.innerHTML += "!";
//   } else console.log("is`s not a tag LI");
// });

//426 Применение прекращения всплытия событий
// let parent = document.querySelector("#parent");
// let button = document.querySelector("button");
// let block = document.querySelector("#block");
// button.addEventListener("click", function (event) {
//   block.classList.add("active");
//   event.stopPropagation();
// });
// parent.addEventListener("click", function (event) {
//   block.classList.remove("active");
// });

// let button = document.querySelector("button");
// let list = document.querySelector("ul");
// let items = list.querySelectorAll("li");

// list.addEventListener("click", function (event) {
//   event.target.innerHTML += "!";
// });

// button.addEventListener("click", function () {
//   let item = document.createElement("li");
//   item.textContent = "NewItem";
//   list.appendChild(item);
// });

// let button = document.querySelector("button");
// let list = document.querySelector("ul");
// let items = list.querySelectorAll("li");
// list.addEventListener("click", function (event) {
//   let li = event.target.closest("li");
//   if (li) {
//     li.innerHTML += "!";
//   }
// });

// 431
// let elem1 = document.querySelector("#elem1");
// elem1.addEventListener("blur", func);
// let elem2 = document.querySelector("#elem2");
// elem2.addEventListener("blur", func);
// function func() {
//   console.log(this.value);
// }

// let elem = document.querySelector("#elem");
// elem.addEventListener("blur", parent);
// function parent() {
//   console.log(this.value); // что выведет?
//   function child() {
//     console.log(this.value); // что выведет?
//   }
//   child();
// }

// let elem = document.querySelector("#elem");
// elem.addEventListener("blur", parent);
// function parent() {
//   console.log(this.value); // выведет 'text'
//   let self = this; // запишем this в любую
//   function child() {
//     console.log(self.value); // выведет 'text'
//   }
//   child();
// }

// let elem = document.querySelector("#elem");
// elem.addEventListener("blur", func);
// function func() {
//   let self = this;
//   function square() {
//     return self.value * self.value;
//   }
//   alert(square());
// }

// let elem = document.querySelector("#elem");
// elem.addEventListener("blur", parent);

// function parent() {
//   child(this); // передаем параметром this

//   function child(param) {
//     console.log(param.value);
//   }
// }

// let elem = document.querySelector("#elem");
// elem.addEventListener("blur", func);
// function func() {
//   square(this);
//   function square(param) {
//     alert(param.value * param.value);
//   }
// }

// let elem = document.querySelector("#elem");
// elem.addEventListener("blur", func);
// function func() {
//   let child = () => {
//     alert(this.value * this.value);
//   };
//   child();
// }

// let elem = document.querySelector("#elem");
// func.call(elem);
// function func() {
//   console.log(this.value);
// }

// const elem1 = document.querySelector("#elem1");
// const elem2 = document.querySelector("#elem2");
// const elem3 = document.querySelector("#elem3");
// func.call(elem1);
// func.call(elem2);
// func.call(elem3);
// function func() {
//   console.log(this.value);
// }

// const elems = document.querySelectorAll("input");
// for (const elem of elems) {
//   func.call(elem);
// }
// function func() {
//   console.log(this.value);
// }

// let elem = document.querySelector("#elem");
// function func(param1, param2) {
//   console.log(Number(this.value) + param1 + param2);
// }
// func.call(elem, 10, 10);

// let elem = document.querySelector("#elem");
// function func(surname, name) {
//   console.log(this.value + ", " + name + " " + surname);
// }
// func.call(elem, "Smit", "John");

// let elem = document.querySelector("#elem");
// function func(surname, name) {
//   console.log(this.value + ", " + surname + " " + name);
// }
// func.apply(elem, ["Smit", "John"]);

// let elem = document.querySelector("#elem");
// function func(param1, param2) {
//   console.log(this.value + param1 + param2);
// }
// func = func.bind(elem);
// func("1", "2");

// let elem = document.getElementById("elem");
// function func(name, surname) {
//   console.log(this.value + ", " + name + " " + surname);
// }
// func = func.bind(elem);
// func("John", "Smit");
// func("Eric", "Luis");

//-------- Таймеры;
// 442

// Запустите таймер, который каждые 3 секунды будет что-нибудь выводить в консоль.
// setInterval(function () {
//   console.log("!");
// }, 3000);

// let i = 0;
// setInterval(function () {
//   console.log(++i);
// }, 1000);

// let i = 0;
// setInterval(() => console.log(++i), 1000);

// let i = 100;
// setInterval(() => console.log(i--), 1000);

// let i = 0;
// const timerId = setInterval(function () {
//   console.log(++i);
//   if (i >= 5) {
//     clearInterval(timerId);
//   }
// }, 1000);

// Пусть дана переменная, в которой изначально хранится число 10. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.
// let i = 10;
// const timerId = setInterval(function () {
//   console.log(i--);
//   if (i < 0) {
//     clearInterval(timerId);
//   }
// }, 1000);

// Кнопка для запуска таймера
// const start = document.querySelector("#start");
// start.addEventListener("click", function () {
//   let i = 0;
//   let func = setInterval(function () {
//     console.log(++i);
//     if (i >= 5) {
//       clearInterval(func);
//     }
//   }, 1000);
// });

// let start = document.querySelector("#start");
// start.addEventListener("click", function func() {
//   let i = 0;
//   const itemId = setInterval(function () {
//     console.log(++i);
//     if (i >= 5) {
//       clearInterval(itemId);
//     }
//   }, 1000);
//   this.removeEventListener("click", func);
// });

//447 Кнопки для запуска и остановки таймера

// const start = document.querySelector("#start");
// const stop = document.querySelector("#stop");
// start.addEventListener("click", function func() {
//   let i = 0;
//   const timerId = setInterval(function () {
//     console.log(++i);
//   }, 1000);
// });
// stop.addEventListener("click", function () {
//   clearInterval(timerId);
// });

// let start = document.querySelector("#start");
// let stop = document.querySelector("#stop");
// let timerId;
// start.addEventListener("click", function () {
//   timerId = setInterval(function () {
//     console.log("!");
//   }, 1000);
// });
// stop.addEventListener("click", function () {
//   clearInterval(timerId);
// });

// Пусть дана переменная, в которой изначально хранится число 100. Даны также две кнопки. По нажатию на первую кнопку запустите таймер, который каждую секунду будет уменьшать значение переменной на 1 и выводить новое значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.
// По нажатию на вторую кнопку остановите таймер. Также остановите таймер, если вторая кнопка не была нажата, но значение переменной достигло нуля.
// const start = document.querySelector("#start");
// const stop = document.querySelector("#stop");
// let elem = 7;
// let timerId;
// start.addEventListener("click", function () {
//   timerId = setInterval(function () {
//     console.log(elem--);
//     if (elem < 0) {
//       clearInterval(timerId);
//     }
//   }, 1000);
// });
// stop.addEventListener("click", function () {
//   clearInterval(timerId);
// });

// Приведенный мною в теоретической части код не учитывает то, что на кнопку старт можно сделать несколько нажатий. Для исправления этой проблемы можно по нажатию на кнопку старт отвязывать событие от этой кнопки, а по нажатию на кнопку стоп - привязывать обратно. Исправьте проблему.
// let start = document.querySelector("#start");
// let stop = document.querySelector("#stop");
// let timerId;
// const func = function () {
//   timerId = setInterval(function () {
//     let date = new Date();
//     console.log(date.getMinutes() + " " + date.getSeconds());
//   }, 1000);
//   this.removeEventListener("click", func);
// };
// start.addEventListener("click", func);
// stop.addEventListener("click", function () {
//   clearInterval(timerId);
//   start.addEventListener("click", func);
// });

// Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.
// const button = document.querySelector("#button");
// const text = document.querySelector("#text");
// button.addEventListener("click", function () {
//   const timerId = setInterval(function () {
//     text.innerHTML++;
//   }, 1000);
// });

// Дана кнопка. Дан абзац, текстом которого является число, например, 10. По нажатию на кнопку запустите таймер, который каждую секунду будет уменьшать текст абзаца на 1. Как только значение абзаца станет равно нулю - остановите таймер.
// const button = document.querySelector("#button");
// const text = document.querySelector("#text");
// let timerId;
// button.addEventListener("click", function () {
//   timerId = setInterval(function () {
//     text.innerHTML--;
//     if (text.innerHTML <= 0) {
//       clearInterval(timerId);
//     }
//   }, 1000);
// });

// Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.
// const input = document.querySelector("input");
// input.addEventListener("blur", function () {
//   const timerId = setInterval(function () {
//     input.value *= input.value;
//   }, 1000);
// });

// Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится.
// const input = document.querySelector("input");
// const text = document.querySelector("p");
// input.addEventListener("blur", function () {
//   let num = input.value;
//   input.value = "";
//   const timeId = setInterval(function () {
//     text.innerHTML = num--;
//     if (text.innerHTML <= 0) {
//       clearInterval(timeId);
//     }
//   }, 1000);
// });

// Дан инпут, кнопка и абзац. В инпут вводится какое-то число. По нажатию на кнопку запишите введенное число в текст абзаца и запустите обратный отсчет в абзаце: пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет до нуля.
// const input = document.querySelector("input");
// const button = document.querySelector("button");
// const text = document.querySelector("p");
// button.addEventListener("click", function () {
//   let i = input.value;
//   input.value = "";
//   const timerId = setInterval(function () {
//     text.innerHTML = i--;
//     if (text.innerHTML <= 0) {
//       clearInterval(timerId);
//       text.innerHTML = "Stop";
//     }
//   }, 1000);
// });

// Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1 до бесконечности, а по нажатию на вторую таймер останавливался.
// const start = document.querySelector("#start");
// const stop = document.querySelector("#stop");
// const text = document.querySelector("p");
// let timerId;
// const func = function () {
//   timerId = setInterval(function () {
//     text.innerHTML++;
//   }, 1000);
//   this.removeEventListener("click", func);
// };
// start.addEventListener("click", func);
// stop.addEventListener("click", function () {
//   clearInterval(timerId);
//   start.addEventListener("click", func);
// });

// Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.
// let timerId;
// const title = document.querySelector("h1");
// function setRed() {
//   title.style.color = "red";
//   clearInterval(timerId);
//   timerId = setInterval(setYellow, 1000);
// }
// function setYellow() {
//   title.style.color = "yellow";
//   clearInterval(timerId);
//   timerId = setInterval(setRed, 1000);
// }
// setYellow();

// еще решение:
// const title = document.querySelector("h1");
// let isRed = true;
// setInterval(function () {
//   if (isRed) {
//     title.style.color = "red";
//   } else {
//     title.style.color = "yellow";
//   }
//   isRed = !isRed;
// }, 1000);

// Если выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы. Реализуйте такие же часики, как показано ниже в образце:
// let title = document.querySelector("p");
// setInterval(function () {
//   let date = new Date();
//   title.textContent =
//     plusZiro(date.getHours()) +
//     ":" +
//     plusZiro(date.getMinutes()) +
//     ":" +
//     plusZiro(date.getSeconds());
// }, 1000);
// function plusZiro(num) {
//   return num < 10 ? (num = "0" + num) : num;
// }

//------ Задержка перед выполнением
// Сделай так, чтобы по нажатию на кнопку на экран вывелся alert, но не сразу, а через 3 секунды после нажатия:
// let elem = document.querySelector("#elem");
// elem.addEventListener("click", function () {
//   setTimeout(function () {
//     alert("!");
//   }, 3000);
// });

// Дан абзац. Напишите код, который выведет сообщение в этот абзац через 10 секунд после загрузки страницы.
// const text = document.querySelector("p");
// function func() {
//   setTimeout(function () {
//     text.innerHTML = "hello, Man!";
//   }, 3000);
// }
// func();
// еще пример
// setTimeout(function () {
//   text.innerHTML = "hello, Man!";
// }, 3000);

// Запуск таймера через задержку
// const text = document.querySelector("p");
// setTimeout(function () {
//   setInterval(function () {
//     text.innerHTML++;
//   }, 1000);
// }, 3000);

//------ Создание и вставка элементов
// let parent = document.querySelector("#parent");
// let p = document.createElement("p");
// p.textContent = "!";
// parent.appendChild(p);

// const elem = document.querySelector("#elem");
// const li = document.createElement("li");
// li.textContent = "item";
// elem.appendChild(li);

// Сделайте так, чтобы по клику на кнопку в конец списка добавлялся li с текстом 'item'.
// const elem = document.querySelector("#elem");
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   const li = document.createElement("li");
//   li.textContent = "item";
//   elem.appendChild(li);
// });

//--- Привязывание событий при вставке элементов
// const parent = document.querySelector("#parent");
// const p = document.createElement("p");
// p.innerHTML = "!";
// p.addEventListener("click", function () {
//   console.log(this.textContent);
// });
// parent.appendChild(p);

// Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li. Сделайте так, чтобы по клику на любой из добавленных li в конец его текста записывался восклицательный знак.
// const ol = document.querySelector("ol");
// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   const li = document.createElement("li");
//   li.textContent = "ggg";
//   li.addEventListener("click", function () {
//     this.textContent += "!";
//   });
//   ol.appendChild(li);
// });

//---- Создание элементов в цикле
// Давайте запустим цикл, который добавит в конец нашего дива 9 новых абзацев:
// let parent = document.querySelector("#parent");
// for (let i = 0; i < 9; i++) {
//   const p = document.createElement("p");
//   p.textContent = "!";
//   parent.appendChild(p);
// }

// Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li. Сделайте так, чтобы текстом каждой li был ее порядковый номер.
// let parent = document.querySelector("#parent");
// for (let i = 0; i < 9; i++) {
//   const li = document.createElement("li");
//   li.textContent = i;
//   parent.appendChild(li);
// }

//---- Навешивание обработчиков в цикле
// let parent = document.querySelector("#parent");
// for (let i = 0; i < 9; i++) {
//   const p = document.createElement("p");
//   p.textContent = "!";
//   p.addEventListener("click", function () {
//     this.textContent += "@";
//   });
//   parent.appendChild(p);
// }

// Дан див. Запустите цикл, который добавит в наш див 5 инпутов. Пусть дан также абзац. Сделайте так, чтобы каждый из новых инпутов по потери фокуса записывал свой текст в абзац.
// let parent = document.querySelector("#parent");
// let text = document.querySelector("p");
// for (let i = 0; i < 5; i++) {
//   const input = document.createElement("input");
//   input.addEventListener("blur", function () {
//     text.textContent = input.value;
//     input.value = "";
//   });
//   parent.appendChild(input);
// }

//---- Удаление элементов
// Давайте сделаем так, чтобы любой абзац удалялся по клику на нем:
// let elems = document.querySelectorAll("p");
// for (const elem of elems) {
//   elem.addEventListener("click", function () {
//     this.remove();
//   });
// }

// Сделайте так, чтобы любая li удалялась по клику на нее.
// let elems = document.querySelectorAll("li");
// for (const elem of elems) {
//   elem.addEventListener("click", function () {
//     this.remove();
//   });
// }

// Сделайте так, чтобы по каждому клику на кнопку удалялся последний элемент из #parent.
// const button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   let elem = document.querySelector("#parent li:last-child");
//   elem.remove();
// });
// еще вариант
// let parent = document.querySelector("#parent");
// const button = document.querySelector("#button");
// button.addEventListener("click", function func() {
//   let lis = document.querySelectorAll("li");
//   lis[lis.length - 1].remove();
// });

//----- Создание элементов из массива
// const parent = document.querySelector("#parent");
// let arr = [1, 2, 3, 4, 5];
// for (const elem of arr) {
//   let p = document.createElement("p");
//   p.textContent = elem;
//   p.addEventListener("click", function () {
//     p.textContent += 1;
//   });
//   parent.appendChild(p);
// }

// let parent = document.querySelector("#parent");
// for (let i = 1; i <= 9; i++) {
//   let p = document.createElement("p");
//   p.textContent = i;
//   p.addEventListener("click", function () {
//     this.remove();
//   });
//   parent.appendChild(p);
// }

// let elem = document.querySelector("#elem");
// let remove = document.querySelector("#remove");
// remove.addEventListener("click", function (event) {
//   elem.remove();
//   event.preventDefault();
// });

// Создание ссылок для удаление элементов
// let elems = document.querySelectorAll("#parent p");
// for (let elem of elems) {
//   let remove = document.createElement("a");
//   remove.href = "";
//   remove.textContent = "remove";
//   elem.appendChild(remove);
//   remove.addEventListener("click", function (event) {
//     elem.remove();
//     event.preventDefault();
//   });
// }

// 475
// const elem = document.querySelector("#elem");
// const input = document.querySelector("#input");
// input.value = elem.textContent;
// input.addEventListener("blur", function () {
//   elem.innerHTML = this.value;
//   this.value = "";
// });

// const elem = document.querySelector("#elem");
// const input = document.querySelector("#input");
// input.addEventListener("input", function () {
//   elem.innerHTML = this.value;
// });

// let elem = document.querySelector("#elem");
// elem.addEventListener("click", function () {
//   let input = document.createElement("input");
//   input.value = elem.textContent;

//   input.addEventListener("blur", function () {
//     elem.textContent = this.value;
//     this.remove(); // удалим инпут
//   });
//   elem.parentElement.appendChild(input);
// });

// let elem = document.querySelector("#elem");
// elem.addEventListener("click", function func() {
//   let input = document.createElement("input");
//   input.value = elem.textContent;
//   elem.textContent = "";
//   elem.appendChild(input);
//   input.addEventListener("blur", function () {
//     elem.textContent = input.value;
//     elem.addEventListener("click", func);
//   });
//   elem.removeEventListener("click", func);
// });

//---- Кнопки для скрытия и показа элемента
// Давайте теперь сделаем так, чтобы по клику на одну кнопку наш абзац скрывался, а на другую - показывался. Будем для этого давать или убирать элементу соответствующий CSS класс:
// const elem = document.querySelector("#elem");
// const show = document.querySelector("#show");
// const hide = document.querySelector("#hide");
// show.addEventListener("click", function () {
//   elem.classList.remove("hidden");
// });
// hide.addEventListener("click", function () {
//   elem.classList.add("hidden");
// });

// Модифицируйте мой код так, чтобы была только одна кнопка. Пусть по первому клику на эту кнопку элемент показывается, а по второму - скрывается.
// const elem = document.querySelector("#elem");
// const click = document.querySelector("#click");
// click.addEventListener("click", function () {
//   elem.classList.toggle("hidden");
// });

// Сделаем так, чтобы по клику на кнопку скрывался или показывался соответствующий ей абзац.
// Для этого нам каким-то образом нужно связать кнопки с нашими абзацами. Для этого существует несколько способов.
// const buttons = document.querySelectorAll("button");
// for (const button of buttons) {
//   button.addEventListener("click", function () {
//     const elem = document.querySelector("#" + this.dataset.elem);
//     elem.classList.toggle("hidden");
//   });
// }

// Расставлять id и data-атрибуты не очень удобно. Давайте сделаем так, чтобы связь была по порядковому номеру: пусть первая кнопка скрывает первый абзац, вторая кнопка - второй и так далее.
// Реализуем описанное:
// let buttons = document.querySelectorAll("button");
// let elems = document.querySelectorAll("p");
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     elems[i].classList.toggle("hidden");
//   });
// }

// Как можно увидеть, абзац, связанный с кнопкой, является ее соседом слева. Можно это использовать в качестве связи:
// const buttons = document.querySelectorAll("button");
// for (const button of buttons) {
//   button.addEventListener("click", function () {
//     this.previousElementSibling.classList.toggle("hidden");
//   });
// }

// const boxes = document.querySelectorAll("#table td");
// for (const box of boxes) {
//   box.addEventListener("click", function () {
//     this.classList.add("active");
//   });
// }
// еще вариант
// const boxes = document.querySelector("#table");
// boxes.addEventListener("click", function (event) {
//   event.target.classList.add("active");
// });

// Дана HTML список ul. Сделайте так, чтобы по нажатию на любой пункт списка он активировался красным фоном.
// const elems = document.querySelectorAll("li");
// for (const elem of elems) {
//   elem.addEventListener("click", function () {
//     this.classList.add("active");
//   });
// }

// Модифицируйте предыдущую задачу так, чтобы по нажатию на активированный пункт списка активация с него снималась.
// const elems = document.querySelectorAll("li");
// for (const elem of elems) {
//   elem.addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// }

// Давайте теперь сделаем так, чтобы происходило чередование цветов: пусть первая ячейка красится в красный, вторая - в зеленый, третья - опять в красный и так далее.
// Для решения этой задачи нам понадобится уже два CSS класса:
// const elems = document.querySelectorAll("#table td");
// let color = "color1";
// for (const elem of elems) {
//   elem.addEventListener("click", function () {
//     if (color === "color1") {
//       color = "color2";
//     } else {
//       color = "color1";
//     }
//     elem.classList.add(color);
//   });
// }

// Пусть теперь мы хотим чередовать не два цвета, а произвольное количество.Давайте для этого будем хранить массив CSS классов:
// const elems = document.querySelectorAll("#table td");
// const arrColors = ["color1", "color2", "color3"];
// let i = 0;
// for (const elem of elems) {
//   elem.addEventListener("click", function () {
//     elem.classList.add(arrColors[i]);
//     i++;
//     if (i == arrColors.length) {
//       i = 0;
//     }
//   });
// }

// ПРАКТИКА
// Дан массив. Выведите его элементы в виде списка ul.
// const colors = ["color1", "color2", "color3"];
// const ul = document.createElement("ul");
// document.body.appendChild(ul);
// for (const color of colors) {
//   const li = document.createElement("li");
//   li.textContent = color;
//   ul.appendChild(li);
// }

// Модифицируйте предыдущую задачу так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать.
// const colors = ["color1", "color2", "color3"];
// const ul = document.createElement("ul");
// document.body.appendChild(ul);
// for (const color of colors) {
//   const li = document.createElement("li");
//   li.textContent = color;
//   ul.appendChild(li);
//   const input = document.createElement("input");
//   input.addEventListener("blur", function () {
//     li.textContent = input.value;
//     input.value = "";
//   });
//   ul.appendChild(input);
// }

// Модифицируйте предыдущую задачу так, чтобы под списком был инпут, с помощью которого можно будет добавить новый элемент в конец списка ul. Сделайте так, чтобы новые li также можно было редактировать.
// const colors = ["color1", "color2", "color3"];
// const ul = document.createElement("ul");
// document.body.appendChild(ul);
// for (const color of colors) {
//   const li = document.createElement("li");
//   li.textContent = color;
//   ul.appendChild(li);
//   const input = document.createElement("input");
//   input.addEventListener("blur", function () {
//     li.textContent = input.value;
//     input.value = "";
//   });
//   ul.appendChild(input);
// }
// const button = document.createElement("input");
// button.value = "button";
// button.type = "button";
// document.body.appendChild(button);
// button.addEventListener("click", function () {
//   const elem = document.createElement("li");
//   elem.textContent = "New color";
//   ul.appendChild(elem);
//   const input = document.createElement("input");
//   input.addEventListener("blur", function () {
//     elem.textContent = input.value;
//     input.value = "";
//   });
//   ul.appendChild(input);
// });

// Модифицируйте предыдущую задачу так, чтобы в конце каждой li стояла ссылка 'удалить', с помощью которой можно будет удалить эту li из ul.
// const colors = ["color1", "color2", "color3"];
// const ul = document.createElement("ul");
// document.body.appendChild(ul);
// for (const color of colors) {
//   const li = document.createElement("li");
//   li.textContent = color;
//   ul.appendChild(li);
//   const input = document.createElement("input");
//   input.addEventListener("blur", function () {
//     li.textContent = input.value;
//     input.value = "";
//   });
//   ul.appendChild(input);
//   const a = document.createElement("a");
//   a.textContent = "delite";
//   a.href = "#";
//   a.addEventListener("click", function () {
//     li.remove();
//     input.remove();
//   });
//   li.appendChild(a);
// }
// const button = document.createElement("input");
// button.value = "button";
// button.type = "button";
// document.body.appendChild(button);
// button.addEventListener("click", function () {
//   const elem = document.createElement("li");
//   elem.textContent = "New color";
//   ul.appendChild(elem);
//   const input = document.createElement("input");
//   input.addEventListener("blur", function () {
//     elem.textContent = input.value;
//     input.value = "";
//   });
//   ul.appendChild(input);
//   const a = document.createElement("a");
//   a.textContent = "delite";
//   a.href = "#";
//   a.addEventListener("click", function () {
//     elem.remove();
//     input.remove();
//   });
//   elem.appendChild(a);
// });

// Создание HTML таблицы из массива объектов
// let users = [
//   {
//     name: "name1",
//     surname: "surname1",
//     patronymic: "patronymic1",
//   },
//   {
//     name: "name2",
//     surname: "surname2",
//     patronymic: "patronymic2",
//   },
//   {
//     name: "name3",
//     surname: "surname3",
//     patronymic: "patronymic3",
//   },
// ];

// let table = document.getElementById("table");

// for (let user of users) {
//   let tr = document.createElement("tr");

//   let td1 = document.createElement("td");
//   td1.textContent = user.name;
//   tr.appendChild(td1);

//   let td2 = document.createElement("td");
//   td2.textContent = user.surname;
//   tr.appendChild(td2);

//   let td3 = document.createElement("td");
//   td3.textContent = user.patronymic;
//   tr.appendChild(td3);

//   table.appendChild(tr);
// }

// Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с зарплатой ее содержимое увеличивалось на 10%.
// let employees = [
//   { name: "employee1", age: 30, salary: 400 },
//   { name: "employee2", age: 31, salary: 500 },
//   { name: "employee3", age: 32, salary: 600 },
// ];

// const table = document.querySelector("#table");
// for (const elem of employees) {
//   const tr = document.createElement("tr");

//   const td1 = document.createElement("td");
//   td1.textContent = elem.name;
//   tr.append(td1);

//   const td2 = document.createElement("td");
//   td2.textContent = elem.age;
//   td2.addEventListener("click", function () {
//     this.textContent++;
//   });
//   tr.append(td2);

//   const td3 = document.createElement("td");
//   td3.textContent = elem.salary;
//   td3.addEventListener("click", function () {
//     this.textContent =
//       Number(this.textContent) + Number(this.textContent) * 0.1;
//   });
//   tr.append(td3);

//   table.appendChild(tr);
// }

// let employees = [
//   { name: "employee1", age: 30, salary: 400 },
//   { name: "employee2", age: 31, salary: 500 },
//   { name: "employee3", age: 32, salary: 600 },
// ];

// const table = document.querySelector("#table");
// for (const elem of employees) {
//   const tr = document.createElement("tr");
//   for (const key in elem) {
//     const td = document.createElement("td");
//     td.textContent = elem[key];
//     td.addEventListener("click", function () {
//       td.textContent = "";
//       const input = document.createElement("input");
//       table.appendChild(input);
//       input.addEventListener("blur", function () {
//         td.textContent = input.value;
//         input.remove();
//       });
//     });
//     tr.appendChild(td);
//   }
//   const delite = document.createElement("td");
//   delite.textContent = "delite";
//   delite.addEventListener("click", function () {
//     tr.remove();
//   });
//   tr.appendChild(delite);
//   table.appendChild(tr);
// }

// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   const tr1 = document.createElement("tr");
//   tr1.classList.add("tr1");
//   const td1 = document.createElement("td");
//   td1.textContent = "name";
//   tr1.appendChild(td1);

//   const td2 = document.createElement("td");
//   td2.textContent = "age";
//   tr1.appendChild(td2);

//   const td3 = document.createElement("td");
//   td3.textContent = "salary";
//   tr1.appendChild(td3);

//   const delite = document.createElement("td");
//   delite.textContent = "delite";
//   tr1.appendChild(delite);
//   delite.addEventListener("click", function () {
//     tr1.remove();
//   });

//   table.appendChild(tr1);

//   const arrTr1 = document.querySelectorAll(".tr1 td");

//   for (const td of arrTr1) {
//     td.addEventListener("click", function () {
//       td.textContent = "";
//       const input = document.createElement("input");
//       table.appendChild(input);
//       input.addEventListener("blur", function () {
//         td.textContent = input.value;
//         input.remove();
//       });
//     });
//   }
// });

//--------- Функции для работы с DOM элементом

// makeElem(".elem1", "Hllo, world!");
// makeElem(".elem2", "I`m Alex!");
// function makeElem(className, text) {
//   const elem = document.querySelector(className);
//   elem.textContent = text;
// }

// Сделайте функцию setAttr, которая будет менять атрибут DOM элементу. Пусть первым параметром функция принимает селектор элемента, вторым - имя атрибута, а третьим - его новое значение.
// function setAttr(idName, dateName, newDateName) {
//   const id = document.querySelector(idName);
//   id.setAttribute(dateName, newDateName);
// }
// setAttr("#input", "type", "number");

// Давайте теперь напишем функцию, которая параметром будет принимать селектор группы элементов и их новый текст. Пусть эта функция устанавливает всем подпадающим под селектор элементам новый текст.
// function setText(selector, newText) {
//   const elems = document.querySelectorAll(selector);
//   for (const elem of elems) {
//     elem.textContent = newText;
//   }
// }
// setText("p", "hi");

// Сделайте функцию appendText, которая первым параметром будет принимать селектор, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.
// function appendText(selector, text) {
//   const elem = document.querySelector(selector);
//   elem.textContent += " " + text;
// }
// appendText("p", "hi");

//-- Передача коллбэка для работы с DOM
// 487. Давайте сделаем функцию forEach, которая первым параметром будет принимать селектор группы элементов, а вторым параметром - функцию-коллбэк, которая применится по очереди к каждому из найденных элементов:
// function forEach(selecrorGrup, func) {
//   const elems = document.querySelectorAll(selecrorGrup);
//   for (const elem of elems) {
//     func(elem);
//   }
// }
// forEach(".elem", function (elem) {
//   elem.textContent += "hi";
// });

// 488. Давайте сделаем так, чтобы, если в нашей функции-коллбэке написан второй параметр, в него пусть попадает порядковый номер элемента в найденном наборе элементов:
// function forEach(selectorGrup, func, index) {
//   const elems = document.querySelectorAll(selectorGrup);
//   for (let i = 0; i < elems.length; i++) {
//     func(elems[i], (index = i));
//   }
// }
// forEach(".elem", function (elem, index) {
//   elem.textContent += index;
//   console.log(index);
// });
// Вариант 2
// function forEach(selector, func) {
//   let elems = document.querySelectorAll(selector);

//   for (let i = 0; i < elems.length; i++) {
//     func(elems[i], i);
//   }
// }
// forEach(".elem", function (elem, index) {
//   elem.textContent = elem.textContent + index;
// });

// 489. Передача DOM элемента параметром функции
// function setText(elem, text) {
//   elem.textContent = text;
// }
// const elem1 = document.querySelector("#elem1");
// setText(elem1, "text1");

// const elem2 = document.querySelector("#elem2");
// setText(elem2, "text2");

// Сделайте функцию appendText, которая первым параметром будет принимать DOM элемент, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец этого элемента.
// function appendText(selector, text) {
//   const elem = document.querySelector(selector);
//   elem.textContent = text;
// }
// appendText("#elem1", "hello");

// Даны абзацы. Получите их, переберите циклом и каждому добавьте в конец '!' с помощью функции appendText, сделанной в предыдущей задаче.
// const elems = document.querySelectorAll("p");
// for (const elem of elems) {
//   setText(elem, "!");
// }

// Сделайте функцию setValue, которая первым параметром будет принимать ссылку на инпут, а вторым - текст. Сделайте так, чтобы данная функция устанавливала переданный текст в value инпута.
// function setValue(input, text) {
//   const elem = document.querySelector(input);
//   elem.value = text;
// }
// setValue("#input", "text");

// Передача группы DOM элементов параметрами функций
// function setText(elems, text) {
//   for (const elem of elems) {
//     elem.textContent = text;
//   }
// }
// const arrElems = document.querySelectorAll(".elem");
// setText(arrElems, "text5");

// Сделайте функцию appendText, которая первым параметром будет принимать массив DOM элементов, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.
// function appendText(arr, text) {
//   for (const elem of arr) {
//     elem.textContent += text;
//   }
// }
// const elems = document.querySelectorAll(".elem");
// appendText(elems, "!");

// Сделайте функцию appendElem, которая первым параметром будет принимать ссылку на DOM объект, в котором лежит тег ul, а вторым - текст. Сделайте так, чтобы данная функция создавала новую li с переданным текстом и добавляла ее в конец переданного тега ul.
// function appendElem(elem, text) {
//   const li = document.createElement("li");
//   li.textContent = text;
//   elem.appendChild(li);
// }
// const ul = document.querySelector(".list");
// appendElem(ul, "text!!!");

// Дан массив и ul. С помощью функции appendElem, созданной в предыдущей задаче, запишите каждый элемент массива в отдельную li в этом ul.
// function appendElem(elem, text) {
//   const li = document.createElement("li");
//   li.textContent = text;
//   elem.appendChild(li);
// }
// const ul = document.querySelector(".list");
// const arr = ["sws", "cdc", "23", "vrr"];
// for (const elem of arr) {
//   appendElem(ul, elem);
// }

//491. Функция для создания HTML таблиц
// Давайте теперь сделаем функцию createTable, которая будет будет создавать таблицу заданного размера и добавлять ее в конец заданного элемента.
// Пусть первым параметром наша функция принимает количество рядов, вторым параметром - количество колонок, а третьим - ссылку на DOM элемент, внутри которого будет создаваться наша таблица.
// Давайте посмотрим, как мы будем пользоваться описанной функцией, когда она будет создана. Пусть, к примеру, у нас дан вот такой див:
// function createTable(ranks, columns, elem) {
//   const table = document.createElement("table");
//   for (let i = 0; i < ranks; i++) {
//     const tr = document.createElement("tr");
//     for (let j = 0; j < columns; j++) {
//       const td = document.createElement("td");
//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }
//   elem.appendChild(table);
// }
// let div1 = document.querySelector("#elem1");
// createTable(3, 4, div1);

// let div2 = document.querySelector("#elem2");
// createTable(5, 6, div2);

// С помощью функции createTable создайте новую таблицу, а затем вставьте ее в конец дива.
// function createTable(ranks, columns) {
//   const table = document.createElement("table");
//   for (let i = 0; i < ranks; i++) {
//     const tr = document.createElement("tr");
//     for (let j = 0; j < columns; j++) {
//       const td = document.createElement("td");
//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }
//   return table;
// }
// const elem = document.querySelector("#elem");
// elem.appendChild(createTable(3, 3));

//493. Функция для создания таблицы из массива
// В предыдущих уроках мы с вами сделали функцию createTable, которая создает таблицу заданного размера. Давайте теперь сделаем функцию createTableByArr, которая параметром будет принимать двухмерный массив и строить на его основе таблицу.
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let div = document.querySelector("#elem");
// function createTableByArr(arr) {
//   const table = document.createElement("table");
//   for (const key of arr) {
//     const tr = document.createElement("tr");
//     for (const elem of key) {
//       const td = document.createElement("td");
//       td.textContent = elem;
//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }
//   return table;
// }
// let table = createTableByArr(arr);
// div.appendChild(table);

// Давайте сделаем так, чтобы по клику по первому диву его значение возводилось в квадрат, а по клику по второму диву - в куб.

// Организуем наш код в виде двух модулей:
// (function () {
//   const div1 = document.querySelector("#div1");
//   div1.addEventListener("click", function () {
//     div1.textContent = div1.textContent * div1.textContent;
//   });
// })();
// (function () {
//   const div2 = document.querySelector("#div2");
//   div2.addEventListener("click", function () {
//     div2.textContent = div2.textContent * div2.textContent * div2.textContent;
//   });
// })();

// Передача параметров в модуль через замыкания

// (function () {
//   let div = document.querySelector("#div");
//   let btn = document.querySelector("#btn");

//   function func(num) {
//     return num * num;
//   }

//   btn.addEventListener("click", function () {
//     div.textContent = func(div.textContent);
//   });
// })();

// (function (selector1, selector2) {
//   let div = document.querySelector(selector1);
//   let btn = document.querySelector(selector2);

//   function func(num) {
//     return num * num;
//   }

//   btn.addEventListener("click", function () {
//     div.textContent = func(div.textContent);
//   });
// })("#div", "#btn");

// Дана кнопка и три инпута, в которые вводятся числа. По нажатию на кнопку выведите в консоль сумму введенных чисел. Реализуйте задачу с помощью модуля.
// (function (selector1, selector2, selector3) {
//   const input1 = document.querySelector(selector1);
//   const input2 = document.querySelector(selector2);
//   const button = document.querySelector(selector3);

//   button.addEventListener("click", function () {
//     return console.log(+input1.value + +input2.value);
//   });
// })("#input1", "#input2", "button");

// Передача родительского элемента в модуль через замыкания
// (function (root) {
//   let parent = document.querySelector(root);

//   let div1 = parent.querySelector("#div1");
//   let div2 = parent.querySelector("#div2");
//   let div3 = parent.querySelector("#div3");

//   let res = parent.querySelector("#res");
//   let btn = parent.querySelector("#btn");

//   btn.addEventListener("click", function () {
//     let num1 = Number(div1.textContent);
//     let num2 = Number(div2.textContent);
//     let num3 = Number(div3.textContent);

//     res.textContent = num1 + num2 + num3;
//   });
// })("#parent");

// Передача настроек модуля через замыкания
// (function (root, type, amount) {
//   let parent = document.querySelector(root);

//   for (let i = 1; i <= amount; i++) {
//     let elem = document.createElement(type);
//     parent.append(elem);
//   }
// })("#parent", "p", 5);

// Давайте передадим параметром модуля наш объект:
// let config = {
//   root: "#parent",
//   type: "p",
//   amount: 5,
// };
// (function (config) {
//   let parent = document.querySelector(config.root);

//   for (let i = 1; i <= config.amount; i++) {
//     let elem = document.createElement(config.type);
//     parent.append(elem);
//   }
// })(config);

// Более принято выполнять деструктуризацию объекта с настройками:
// let config = {
//   root: "#parent",
//   type: "p",
//   amount: 5,
// };

// (function ({ root, type, amount }) {
//   let parent = document.querySelector(root);

//   for (let i = 1; i <= amount; i++) {
//     let elem = document.createElement(type);
//     parent.append(elem);
//   }
// })(config);

// Параметры по умолчанию
// let config = {
//   root: "#parent",
// };
// (function ({ root, type = "p", amount = 5 }) {
//   let parent = document.querySelector(root);

//   for (let i = 1; i <= amount; i++) {
//     let elem = document.createElement(type);
//     parent.append(elem);
//   }
// })(config);

// Экспорт переменных и функций в модулях через замыкания
// (function () {
//   let str = "переменная модуля";

//   function func() {
//     alert("функция модуля");
//   }

//   window.func = func;
// })();

// func(); // выведет 'функция модуля'
// Экспортируйте наружу одну из переменных и две любые функции.
// (function () {
//   let str1 = "переменная модуля";
//   let str2 = "переменная модуля";
//   let str3 = "переменная модуля";

//   function func1() {
//     alert("функция модуля");
//   }
//   function func2() {
//     alert("функция модуля");
//   }
//   function func3() {
//     alert("функция модуля");
//   }
//   window.str1 = str1;
//   window.str3 = str3;
//   window.func1 = func1;
//   window.func2 = func2;
// })();
// func1();
// func2();

// (function () {
//   function func1() {
//     alert("функция модуля");
//   }
//   function func2() {
//     alert("функция модуля");
//   }
//   function func3() {
//     alert("функция модуля");
//   }
// })();

// Можно пойти и другим путем. Будем записывать функции в объект сразу при описании функции, вот так:

// (function () {
//   let module = {};

//   module.func1 = function () {
//     alert("функция модуля");
//   };
//   module.func2 = function () {
//     alert("функция модуля");
//   };
//   module.func3 = function () {
//     alert("функция модуля");
//   };

//   window.module = module;
// })();

// Экспортируйте наружу объект с первыми пятью функциями и первыми двумя переменными.
// (function () {
//   let str1 = "переменная модуля";
//   let str2 = "переменная модуля";
//   let str3 = "переменная модуля";

//   function func1() {
//     alert("функция модуля");
//   }
//   function func2() {
//     alert("функция модуля");
//   }
//   function func3() {
//     alert("функция модуля");
//   }
//   function func4() {
//     alert("функция модуля");
//   }
//   function func5() {
//     alert("функция модуля");
//   }

//   window.module = { func1, func2, func3, func4, func5 };
// })();
// module.func3();

// Библиотеки через замыкания
// function square(num) {
//   return num ** 2;
// }
// function cube(num) {
//   return num ** 3;
// }
// function avg(arr) {
//   return sum(arr, 1) / arr.length;
// }
// function digitsSum(num) {
//   return sum(String(num).split(""));
// }

// вспомогательная функция
// function sum(arr) {
//   let res = 0;

//   for (let elem of arr) {
//     res += +elem;
//   }

//   return res;
// }

// Давайте оформим наши функции в виде модуля:

// (function () {
//   function square(num) {
//     return num ** 2;
//   }
//   function cube(num) {
//     return num ** 3;
//   }
//   function avg(arr) {
//     return sum(arr, 1) / arr.length;
//   }
//   function digitsSum(num) {
//     return sum(String(num).split(""));
//   }

//   // вспомогательная функция
//   function sum(arr) {
//     let res = 0;

//     for (let elem of arr) {
//       res += +elem;
//     }

//     return res;
//   }
// })();

// А теперь экспортируем все функции, кроме вспомогательной:
// (function () {
//   function square(num) {
//     return num ** 2;
//   }
//   function cube(num) {
//     return num ** 3;
//   }
//   function avg(arr) {
//     return sum(arr, 1) / arr.length;
//   }
//   function digitsSum(num) {
//     return sum(String(num).split(""));
//   }

//   // вспомогательная функция
//   function sum(arr) {
//     let res = 0;

//     for (let elem of arr) {
//       res += +elem;
//     }

//     return res;
//   }

//   window.math = { square, cube, avg, digitsSum };
// })();
// console.log(math.cube(5));

// // Оформите этот код в виде модуля. Эспортируйте наружу все функции, кроме вспомогательной.
// (function () {
//   function avg1(arr) {
//     return sum(arr, 1) / arr.length;
//   }

//   function avg2(arr) {
//     return sum(arr, 2) / arr.length;
//   }

//   function avg3(arr) {
//     return sum(arr, 3) / arr.length;
//   }

//   // вспомогательная функция
//   function sum(arr, pow) {
//     let res = 0;

//     for (let elem of arr) {
//       res += elem ** pow;
//     }

//     return res;
//   }
//   window.math7 = { avg1, avg2, avg3 };
// })();

// console.log(math7.avg1([5, 2]));
