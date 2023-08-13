/* <div id="parent">
  <input id="input" placeholder="d/m/y" />
  <label>
    <input class="www" type="radio" name="xxx" value="today" />
    Today
    <input class="www" type="radio" name="xxx" value="tomorrow" />
    Tomorrow
    <input class="www" type="radio" name="xxx" value="afterTomorrow" />
    Day after tomorrow
  </label>
  <h1></h1>
  <p></p>
</div>; */

// const aries = [
//   {
//     today: "today text",
//   },
//   {
//     tomorrow: "tomorrow text",
//   },
//   {
//     afterTomorrow: "afterTomorrow text",
//   },
// ];

// const taurus = [
//   {
//     today: "today text",
//   },
//   {
//     tomorrow: "tomorrow text",
//   },
//   {
//     afterTomorrow: "afterTomorrow text",
//   },
// ];

// const gemini = [
//   {
//     today: "today text",
//   },
//   {
//     tomorrow: "tomorrow text",
//   },
//   {
//     afterTomorrow: "afterTomorrow text",
//   },
// ];

// const cancer = [
//   {
//     today: "today text",
//   },
//   {
//     tomorrow: "tomorrow text",
//   },
//   {
//     afterTomorrow: "afterTomorrow text",
//   },
// ];

// const leo = [
//   {
//     today: "today text",
//   },
//   {
//     tomorrow: "tomorrow text",
//   },
//   {
//     afterTomorrow: "afterTomorrow text",
//   },
// ];

// const virgo = [
//   {
//     today: "today text",
//   },
//   {
//     tomorrow: "tomorrow text",
//   },
//   {
//     afterTomorrow: "afterTomorrow text",
//   },
// ];

// const libra = [
//   {
//     today: "today text",
//   },
//   {
//     tomorrow: "tomorrow text",
//   },
//   {
//     afterTomorrow: "afterTomorrow text",
//   },
// ];

// const scorpio = [
//   {
//     today: "today text",
//   },
//   {
//     tomorrow: "tomorrow text",
//   },
//   {
//     afterTomorrow: "afterTomorrow text",
//   },
// ];

// const sagittarius = [
//   {
//     today: "today text",
//   },
//   {
//     tomorrow: "tomorrow text",
//   },
//   {
//     afterTomorrow: "afterTomorrow text",
//   },
// ];

// const capricorn = [
//   {
//     today: "today text",
//   },
//   {
//     tomorrow: "tomorrow text",
//   },
//   {
//     afterTomorrow: "afterTomorrow text",
//   },
// ];

// const aquarius = [
//   {
//     today: "today text",
//   },
//   {
//     tomorrow: "tomorrow text",
//   },
//   {
//     afterTomorrow: "afterTomorrow text",
//   },
// ];

// const pisces = [
//   {
//     today: "today text",
//   },
//   {
//     tomorrow: "tomorrow text",
//   },
//   {
//     afterTomorrow: "afterTomorrow text",
//   },
// ];

// const input = document.querySelector("#input");
// const inputs = document.querySelectorAll(".www");
// const text = document.querySelector("p");
// const title = document.querySelector("h1");

// input.addEventListener("input", function () {
//   if (input.value.length == 2 || input.value.length == 5) {
//     input.value += ".";
//   }
// });

// let day = xxx();

// function xxx() {
//   for (const elem of inputs) {
//     elem.addEventListener("click", function () {
//       day = elem.value;
//       func1();
//     });
//   }
// }

// function func1() {
//   const dateX = String(input.value).slice(3, 5);

//   switch (dateX) {
//     case "03":
//       func(aries);
//       title.textContent = "Aries";
//       break;
//     case "04":
//       func(taurus);
//       title.textContent = "Taurus";
//       break;
//     case "05":
//       func(gemini);
//       title.textContent = "Gemini";
//       break;
//     case "06":
//       func(cancer);
//       title.textContent = "Cancer";
//       break;
//     case "07":
//       func(leo);
//       title.textContent = "Leo";
//       break;
//     case "08":
//       func(virgo);
//       title.textContent = "Virgo";
//       break;
//     case "09":
//       func(libra);
//       title.textContent = "Libra";
//       break;
//     case "10":
//       func(scorpio);
//       title.textContent = "Scorpio";
//       break;
//     case "11":
//       func(sagittarius);
//       title.textContent = "Sagittarius";
//       break;
//     case "12":
//       func(capricorn);
//       title.textContent = "Capricorn";
//       break;
//     case "01":
//       func(aquarius);
//       title.textContent = "Aquarius";
//       break;
//     case "02":
//       func(pisces);
//       title.textContent = "Pisces";
//       break;
//   }
// }

// function func(arr) {
//   for (const elem of arr) {
//     for (const key in elem) {
//       if (day == key) {
//         return (text.textContent = elem[key]);
//       }
//     }
//   }
// }
