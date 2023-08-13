// const links = document.querySelectorAll("a");
// const tabs = document.querySelectorAll(".tab");

// for (let i = 0; i < links.length; i += 1) {
//   links[i].addEventListener("click", function (event) {
//     event.preventDefault();
//     for (let j = 0; j < links.length; j += 1) {
//       links[j].classList.remove("active");
//       tabs[j].classList.remove("active");
//     }
//     links[i].classList.add("active");
//     tabs[i].classList.add("active");
//   });
// }

/* <div id="parent">
  <div class="menu">
    <a href="" class="active">
      вкладка 1
    </a>
    <a href="">вкладка 2</a>
    <a href="">вкладка 3</a>
  </div>
  <div class="tabs">
    <div class="tab active">текст вкладки 1</div>
    <div class="tab">текст вкладки 2</div>
    <div class="tab">текст вкладки 3</div>
  </div>
</div>; */

// #parent {
//   margin: 0 auto;
//   width: 400px;
// }

// .menu a {
//   margin-right: 5px;
//   display: inline-block;
//   padding: 10px;
//   color: black;
//   text-decoration: none;
//   border: 1px solid gray;
// }
// .menu a:hover {
//   background: #f8f8f8;
// }
// .menu a.active {
//   border-color: transparent;
//   background: #f2f2f2;
// }

// .tabs .tab:not(.active) {
//   display: none;
// }
// .tabs .tab {
//   padding: 10px;
//   background: #f2f2f2;
//   height: 300px;
// }
