/* <div id="parent">
  <input id="elem" />
  <ul id="list"></ul>
</div>; */

// #parent {
//   position: relative;
// }
// #elem {
//   padding: 5px;
//   font-size: 18px;
// }

// #parent ul {
//   position: absolute;
//   margin: 0;
//   padding: 0;
//   list-style-type: none;
//   background-color: white;
// }
// #parent li {
//   border: 1px solid gray;
//   font-size: 18px;
//   padding: 5px;
// }
// #parent li:hover {
//   border: 1px solid black;
//   cursor: pointer;
// }

// const countries = [
//   "Afghanistan",
//   "Albania",
//   "Algeria",
//   "American Samoa",
//   "Andorra",
//   "Angola",
//   "Anguilla",
//   "Antigua and Barbuda",
//   "Argentina",
//   "Armenia",
//   "Aruba",
//   "Australia",
//   "Austria",
//   "Azerbaijan",
//   "Bangladesh",
//   "Barbados",
//   "Bahamas",
//   "Bahrain",
//   "Belarus",
//   "Belgium",
//   "Belize",
//   "Benin",
//   "Bermuda",
//   "Bhutan",
//   "Bolivia",
//   "Bosnia and Herzegovina",
//   "Botswana",
//   "Brazil",
//   "British Indian Ocean Territory",
//   "British Virgin Islands",
//   "Brunei Darussalam",
//   "Bulgaria",
//   "Burkina Faso",
//   "Burma",
//   "Burundi",
//   "Cambodia",
//   "Cameroon",
//   "Canada",
//   "Cape Verde",
//   "Cayman Islands",
//   "Central African Republic",
//   "Chad",
//   "Chile",
//   "China",
//   "Christmas Island",
//   "Cocos (Keeling) Islands",
//   "Colombia",
//   "Comoros",
//   "Congo-Brazzaville",
//   "Congo-Kinshasa",
//   "Cook Islands",
//   "Costa Rica",
//   "Croatia",
//   "Cura?ao",
//   "Cyprus",
//   "Czech Republic",
//   "Denmark",
//   "Djibouti",
//   "Dominica",
//   "Dominican Republic",
//   "East Timor",
//   "Ecuador",
//   "El Salvador",
//   "Egypt",
//   "Equatorial Guinea",
//   "Eritrea",
//   "Estonia",
//   "Ethiopia",
//   "Falkland Islands",
//   "Faroe Islands",
//   "Federated States of Micronesia",
//   "Fiji",
//   "Finland",
//   "France",
//   "French Guiana",
//   "French Polynesia",
//   "French Southern Lands",
//   "Gabon",
//   "Gambia",
//   "Georgia",
//   "Germany",
//   "Ghana",
//   "Gibraltar",
//   "Greece",
//   "Greenland",
//   "Grenada",
//   "Guadeloupe",
//   "Guam",
//   "Guatemala",
//   "Guernsey",
//   "Guinea",
//   "Guinea-Bissau",
//   "Guyana",
//   "Haiti",
//   "Heard and McDonald Islands",
//   "Honduras",
//   "Hong Kong",
//   "Hungary",
//   "Iceland",
//   "India",
//   "Indonesia",
//   "Iraq",
//   "Ireland",
//   "Isle of Man",
//   "Israel",
//   "Italy",
//   "Jamaica",
//   "Japan",
//   "Jersey",
//   "Jordan",
//   "Kazakhstan",
//   "Kenya",
//   "Kiribati",
//   "Kuwait",
//   "Kyrgyzstan",
//   "Laos",
//   "Latvia",
//   "Lebanon",
//   "Lesotho",
//   "Liberia",
//   "Libya",
//   "Liechtenstein",
//   "Lithuania",
//   "Luxembourg",
//   "Macau",
//   "Macedonia",
//   "Madagascar",
//   "Malawi",
//   "Malaysia",
//   "Maldives",
//   "Mali",
//   "Malta",
//   "Marshall Islands",
//   "Martinique",
//   "Mauritania",
//   "Mauritius",
//   "Mayotte",
//   "Mexico",
//   "Moldova",
//   "Monaco",
//   "Mongolia",
//   "Montenegro",
//   "Montserrat",
//   "Morocco",
//   "Mozambique",
//   "Namibia",
//   "Nauru",
//   "Nepal",
//   "Netherlands",
//   "New Caledonia",
//   "New Zealand",
//   "Nicaragua",
//   "Niger",
//   "Nigeria",
//   "Niue",
//   "Norfolk Island",
//   "Northern Mariana Islands",
//   "Norway",
//   "Oman",
//   "Pakistan",
//   "Palau",
//   "Panama",
//   "Papua New Guinea",
//   "Paraguay",
//   "Peru",
//   "Philippines",
//   "Pitcairn Islands",
//   "Poland",
//   "Portugal",
//   "Puerto Rico",
//   "Qatar",
//   "R?union",
//   "Romania",
//   "Russia",
//   "Rwanda",
//   "Saint Barth?lemy",
//   "Saint Helena",
//   "Saint Kitts and Nevis",
//   "Saint Lucia",
//   "Saint Martin",
//   "Saint Pierre and Miquelon",
//   "Saint Vincent",
//   "Samoa",
//   "San Marino",
//   "S?o Tom? and Pr?ncipe",
//   "Saudi Arabia",
//   "Senegal",
//   "Serbia",
//   "Seychelles",
//   "Sierra Leone",
//   "Singapore",
//   "Sint Maarten",
//   "Slovakia",
//   "Slovenia",
//   "Solomon Islands",
//   "Somalia",
//   "South Africa",
//   "South Georgia",
//   "South Korea",
//   "Spain",
//   "Sri Lanka",
//   "Sudan",
//   "Suriname",
//   "Svalbard and Jan Mayen",
//   "Sweden",
//   "Swaziland",
//   "Switzerland",
//   "Syria",
//   "Taiwan",
//   "Tajikistan",
//   "Tanzania",
//   "Thailand",
//   "Togo",
//   "Tokelau",
//   "Tonga",
//   "Trinidad and Tobago",
//   "Tunisia",
//   "Turkey",
//   "Turkmenistan",
//   "Turks and Caicos Islands",
//   "Tuvalu",
//   "Uganda",
//   "Ukraine",
//   "United Arab Emirates",
//   "United Kingdom",
//   "United States",
//   "Uruguay",
//   "Uzbekistan",
//   "Vanuatu",
//   "Vatican City",
//   "Vietnam",
//   "Venezuela",
//   "Wallis and Futuna",
//   "Western Sahara",
//   "Yemen",
//   "Zambia",
//   "Zimbabwe",
// ];

// const input = document.querySelector("#elem");
// const list = document.querySelector("#list");

// input.addEventListener("input", function () {
//   list.innerHTML = "";
//   let array = needArr(input.value, countries);
//   makeLI(list, array);
// });

// // Вспомогательные функции:

// // Получили массив которые совпадают со строкой
// function needArr(str, array) {
//   return array.filter((elem) => elem.startsWith(str));
// }

// // Заполняем li элементами массива и вставляем в ul
// function makeLI(root, arr) {
//   for (const elem of arr) {
//     const li = document.createElement("li");
//     li.textContent = elem;
//     li.addEventListener("click", function () {
//       input.value = this.textContent;
//       list.innerHTML = "";
//     });
//     root.appendChild(li);
//   }
// }
