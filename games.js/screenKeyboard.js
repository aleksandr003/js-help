// function screenKeyboard() {
//   const items = document.querySelectorAll("li");
//   const input = document.querySelector("input");
//   const CapsLock = document.querySelector("#CapsLock");
//   for (const item of items) {
//     item.addEventListener("click", function () {
//       input.value += item.dataset.val;
//       CapsLock.addEventListener("click", function () {
//         input.value = input.value.toUpperCase();
//       });
//     });
//   }
// }
// screenKeyboard();

/* <div id="block">
      <ul>
        <li data-val="1">1</li>
        <li data-val="2">2</li>
        <li data-val="3">3</li>
        <li data-val="4">4</li>
        <li data-val="5">5</li>
        <li data-val="6">6</li>
        <li data-val="7">7</li>
        <li data-val="8">8</li>
        <li data-val="9">9</li>
        <li data-val="0">0</li>
      </ul>
      <ul>
        <li data-val="q">q</li>
        <li data-val="w">w</li>
        <li data-val="e">e</li>
        <li data-val="r">r</li>
        <li data-val="t">t</li>
        <li data-val="y">y</li>
        <li data-val="u">u</li>
        <li data-val="i">i</li>
        <li data-val="o">o</li>
        <li data-val="p">p</li>
      </ul>

      <ul>
        <li data-val="a">a</li>
        <li data-val="s">s</li>
        <li data-val="d">d</li>
        <li data-val="f">f</li>
        <li data-val="g">g</li>
        <li data-val="h">h</li>
        <li data-val="j">j</li>
        <li data-val="k">k</li>
        <li data-val="l">l</li>
      </ul>
      <ul>
        <li data-val="z">z</li>
        <li data-val="x">x</li>
        <li data-val="c">c</li>
        <li data-val="v">v</li>
        <li data-val="b">b</li>
        <li data-val="n">n</li>
        <li data-val="m">m</li>
        <li data-val=" ">probel</li>
        <li id="shift" data-val="">shift</li>
        <li id="CapsLock" data-val="">CapsLock</li>
      </ul>
    </div>
    <input type="text" /> */

//     li {
//   display: block;
//   min-width: 30px;
//   height: 30px;
//   border: 1px solid black;
//   padding: 10px;
//   margin: 10px;
//   cursor: pointer;
//   font-weight: bold;
// }
// li:hover {
//   border-color: blue;
//   border-radius: 10px;
// }
// div {
//   display: flex;
//   flex-wrap: wrap;
//   padding-top: 50px;
// }
// ul {
//   width: 50%;
//   display: flex;
//   justify-content: space-between;
//   margin: 0 auto;
// }

// input {
//   display: block;
//   width: 350px;
//   height: 30px;
//   margin: 0 auto;
//   margin-top: 30px;
//   font-size: 24px;
// }
