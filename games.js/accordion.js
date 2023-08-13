// const tabs = document.querySelectorAll(".tab");
// const links = document.querySelectorAll(".link a");
// for (let i = 0; i < links.length; i += 1) {
//   links[i].addEventListener("click", function (event) {
//     event.preventDefault();
//     for (let j = 0; j < links.length; j += 1) {
//       if (tabs[j].classList.contains("active")) {
//         tabs[j].classList.remove("active");
//       }
//     }

//     if (!tabs[i].classList.contains("active")) {
//       tabs[i].classList.toggle("active");
//     }
//   });
// }

// <div id="parent">
//   <div class="tab active">
//     <div class="link">
//       <a href="#">вкладка 1</a>
//     </div>
//     <div class="text">текст вкладки 1</div>
//   </div>
//   <div class="tab">
//     <div class="link">
//       <a href="#">вкладка 2</a>
//     </div>
//     <div class="text">текст вкладки 2</div>
//   </div>
//   <div class="tab">
//     <div class="link">
//       <a href="#">вкладка 3</a>
//     </div>
//     <div class="text">текст вкладки 3</div>
//   </div>
// </div>

// #parent {
//   margin: 0 auto;
//   width: 400px;
// }
// .tab {
//   margin-bottom: 10px;
// }

// .tab .link a {
//   display: block;
//   padding: 10px;
//   color: black;
//   text-decoration: none;
//   text-align: center;
//   background: #f8f8f8;
//   border: 1px solid gray;
// }
// .tab .link:hover a {
//   background: #f2f2f2;
// }

// .tab:not(.active) .text {
//   display: none;
// }
// .tab .text {
//   border: 1px dashed gray;
//   border-top: none;

//   padding: 10px;
//   height: 300px;
// }
