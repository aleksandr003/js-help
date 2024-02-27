// class Car {
//   color; // цвет автомобиля
//   fuel; // количество топлива

//   // Команда ехать:
//   go() {
//     // какой-то JavaScript код
//   }

//   // Команда поворачивать:
//   turn() {
//     // какой-то JavaScript код
//   }

//   // Команда остановиться:
//   stop() {
//     // какой-то JavaScript код
//   }
// }
// let myCar = new Car();
// myCar.color = "red";
// myCar.fuel = 50;
// myCar.go();
// myCar.turn();
// myCar.stop();

// class User {}
// let user = new User();
// user.name = "john";
// user.surn = "smit";
// console.log(user);

// class Employee {}
// const employee = new Employee();
// employee.name = "Linda";
// employee.age = 30;
// employee.salary = 1860;
// console.log(employee.name);

// class User {}
// let user1 = new User();
// let user2 = new User();
// user1.name = "john";
// user2.name = "eric";
// console.log(user1.name);
// console.log(user2.name);

// class Employee {}
// const employee1 = new Employee();
// const employee2 = new Employee();
// const employee3 = new Employee();
// employee1.name = "Linda";
// employee1.age = 30;
// employee1.salary = 1860;
// employee2.name = "Darty";
// employee2.age = 31;
// employee2.salary = 1810;
// employee3.name = "Baty";
// employee3.age = 28;
// employee3.salary = 1750;
// console.log(employee1.salary + employee2.salary + employee3.salary);

// class User {
//   show() {
//     return "+++";
//   }
// }
// const user = new User();
// console.log(user.show());

// class Employee {
//   num() {
//     return 100;
//   }
// }
// const employee = new Employee();
// console.log(employee.num());

// class User {
//   show(num, surn) {
//     return num + " " + surn;
//   }
// }
// const user = new User();
// console.log(user.show("Murtyn", "Lendrees"));

// class Employee {
//   show(name, salary) {
//     return name + " " + salary;
//   }
// }
// const employee = new Employee();
// console.log(employee.show("Murtyn", 1254));
// class User {
//   show() {
//     console.log(this.name);
//   }
// }
// let user = new User();
// user.name = "Rotys";
// user.show();

// class Employee {
//   showName() {
//     console.log(this.name);
//   }
//   showSalory() {
//     console.log(this.salary);
//   }
// }
// const employee = new Employee();
// employee.name = "Defwv";
// employee.salary = "1432";
// employee.showName();
// employee.showSalory();

// Обращение к методам внутри классов

// class User {
//   show() {
//     return this.cape(this.name);
//   }

//   cape(str) {
//     return str[0].toUpperCase() + str.slice(1);
//   }
// }

// class Student {
//   name;
//   surn;

//   cape(str) {
//     return str[0].toUpperCase() + str.slice(1);
//   }
//   firstNameSurn() {
//     return this.name[0].toUpperCase() + "." + this.surn[0].toUpperCase() + ".";
//   }
// }
// const student = new Student();
// student.name = "wer";
// student.surn = "cvb";
// console.log(student.cape(student.name));
// console.log(student.cape(student.surn));
// console.log(student.firstNameSurn());

// class User {
//   name = "john";

//   show() {
//     return this.name;
//   }
// }
// let user = new User();
// console.log(user.name);

// class Student {
//   name = "vsv";
//   surn = "ecwvcvf";
//   show() {
//     return this.name + " " + this.surn;
//   }
// }
// const student = new Student();
// console.log(student.show());

// class User {
//   constructor(name, surn) {
//     console.log(name + " " + surn);
//   }
// }
// const user = new User("john", "smit");
// user;

// Свойства через параметры конструктора
// class User {
//   constructor(name, surn) {
//     this.name = name;
//     this.surn = surn;
//   }

//   show() {
//     return this.name + " " + this.surn;
//   }
// }

// class Employee {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//   }
//   showName() {
//     return this.name;
//   }
//   showSalary() {
//     return this.salary;
//   }
//   increaseSalary() {
//     return (this.salary *= 1.1);
//   }
// }
// const employee = new Employee("Judy", 1000);
// console.log(employee.increaseSalary());

// class User {
//   #name;

//   constructor(name) {
//     this.#name = name;
//   }

//   show() {
//     return this.#name;
//   }
// }
// const user = new User("Ivan");
// console.log(user.show());

// class Employee {
//   #name;
//   #salary;
//   #age;

//   constructor(name, salary, age) {
//     this.#name = name;
//     this.#salary = salary;
//     this.#age = age;
//   }
//   show() {
//     return this.#name + " " + this.#salary + " " + this.#age;
//   }
// }

// const employee = new Employee("Ivan", 1500, 36);
// console.log(employee.show());

// toUpperCase;

// class User {
//   #name;

//   constructor(name) {
//     this.#name = name;
//   }
//   show() {
//     return this.#cap(this.#name);
//   }
//   #cap(str) {
//     return str[0].toUpperCase() + str.slice(1);
//   }
// }
// const user = new User("ivan");
// console.log(user.show());

// class Employee {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//   }
//   getSalary() {
//     return this.#addSign(this.salary);
//   }
//   #addSign(num) {
//     return num + "$";
//   }
// }
// const employee = new Employee("Inna", 1500);
// console.log(employee.getSalary());

// class User {
//   #name;
//   #surn;

//   constructor(name, surn) {
//     this.#name = name;
//     this.#surn = surn;
//   }
//   getName() {
//     return this.#name;
//   }
//   getSurn() {
//     return this.#surn;
//   }
// }

// const user = new User("ivan", "raylor");
// console.log(user.getName());
// console.log(user.getSurn());

// class User {
//   #name;
//   #surn;

//   setName(name) {
//     this.#name = name;
//   }
//   setSurn(surn) {
//     this.#surn = surn;
//   }

//   getName() {
//     return this.#name;
//   }
//   getSurn() {
//     return this.#surn;
//   }
// }
// const user = new User();
// user.setName("Linda");
// user.setSurn("Wellou");
// console.log(user.getName());
// console.log(user.getSurn());

// class User {
//   #name;
//   #surn;

//   setName(name) {
//     if (name.length > 0) {
//       this.#name = name;
//     } else {
//       throw new Error("name is incorrect");
//     }
//   }
//   setSurn(surn) {
//     if (surn.length > 0) {
//       this.#surn = surn;
//     } else {
//       throw new Error("surn is incorrect");
//     }
//   }

//   getName() {
//     return this.#name;
//   }
//   getSurn() {
//     return this.#surn;
//   }
// }
// let user = new User();
// user.setName("");
// console.log(user.getName());

// class User {
//   #name;
//   #surn;

//   setName(name) {
//     this.#name = name;
//     return this;
//   }
//   setSurn(surn) {
//     this.#surn = surn;
//     return this;
//   }

//   getName() {
//     return this.#name;
//   }
//   getSurn() {
//     return this.#surn;
//   }
// }
// let user = new User();
// user.setName("Kavin").setSurn("Bobid");
// console.log(user.getName());
// console.log(user.getSurn());

// class Employee {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let emp1 = new Employee("john");
// let emp2 = emp1;
// emp2.name = "eric";

// console.log(emp1 === emp2);

// Оператор instanceof в ООП в JavaScript

// class Student {}
// class Employee {}

// let employee = new Employee();
// console.log(employee instanceof Employee);
// console.log(employee instanceof Student);

// class Student {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Employee {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let users = [
//   new Student("user1"),
//   new Employee("user2"),
//   new Student("user3"),
//   new Employee("user4"),
//   new Student("user5"),
//   new Employee("user6"),
//   new Student("user7"),
// ];

// for (const user of users) {
//   if (user instanceof Employee) {
//     console.log(user.name);
//   }
// }

// class ArrHelper {
//   getSum(arr) {
//     let sum = 0;
//     for (const elem of arr) {
//       sum += elem;
//     }
//     return sum;
//   }

//   getAvg(arr) {
//     if (arr.length > 0) {
//       return this.getSum(arr) / arr.length;
//     } else {
//       return 0;
//     }
//   }
// }

// const arrHelper = new ArrHelper();

// console.log(arrHelper.getSum([1, 2, 3, 4, 5]));
// console.log(arrHelper.getAvg([3, 4, 5]));

// class Validator {
//   isEmail(str) {
//     let res = false;
//     let arr = str.split("");
//     for (const elem of arr) {
//       if (elem == "@") {
//         res = true;
//       }
//     }
//     return res;
//   }
//   isDomain(str) {
//     const domainPattern =
//       /^(?:[a-zA-z0-9](?:[a-zA-z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
//     return domainPattern.test(str);
//   }
//   isNumber(str) {
//     if (!isNaN(Number(str))) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// const validator = new Validator();
// console.log(validator.isEmail("dfgee234@de"));
// console.log(validator.isDomain("cj*u.com"));
// console.log(validator.isNumber("3452"));

// class City {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class User {
//   constructor(name, surn, city) {
//     this.name = name;
//     this.surn = surn;
//     this.city = city;
//   }
// }
// const city = new City("Kiev");
// const user = new User("Tolik", "Gsvvnd", city);
// console.log(user.name);
// console.log(user.city.name);

// class Position {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Department {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Employee {
//   constructor(name, position, department) {
//     this.name = name;
//     this.position = position;
//     this.department = department;
//   }
// }
// const position = new Position("Developer");
// const department = new Department("Web");
// const employee = new Employee("Alex", position, department);
// console.log(employee.name);
// console.log(employee.position.name);
// console.log(employee.department.name);

// const position1 = new Position("Seo");
// const department1 = new Department("site");
// const employee1 = new Employee("Tolik", position1, department1);
// console.log(employee1.name);
// console.log(employee1.position.name);
// console.log(employee1.department.name);

// class User {
//   #name;

//   constructor(name) {
//     this.#name = name;
//   }
//   getName() {
//     return this.#name;
//   }
// }
// let users = [new User("john"), new User("eric"), new User("kyle")];
// for (const elem of users) {
//   console.log(elem.getName());
// }

// class Employee {
//   #name;
//   #salory;

//   constructor(name, salory) {
//     this.#name = name;
//     this.#salory = salory;
//   }

//   getName() {
//     return this.#name;
//   }

//   getSalory() {
//     return this.#salory;
//   }
// }
// const arrEmployee = [
//   new Employee("Ivan", 1250),
//   new Employee("Linda", 1310),
//   new Employee("Sarty", 1420),
// ];

// for (const elem of arrEmployee) {
//   console.log(elem.getName() + " - " + elem.getSalory());
// }

// class User {
//   #name;

//   constructor(name) {
//     this.#name = name;
//   }
//   getName() {
//     return this.#name;
//   }
// }

// class UsersCollection {
//   #users;
//   constructor() {
//     this.#users = [];
//   }
//   add(user) {
//     this.#users.push(user);
//   }
//   show() {
//     for (let user of this.#users) {
//       console.log(user.getName());
//     }
//   }
// }
// let uc = new UsersCollection();
// uc.add(new User("john"));
// uc.add(new User("eric"));
// uc.add(new User("kyle"));
// uc.show();

// class Employee {
//   #name;
//   #salory;
//   constructor(name, salory) {
//     this.#name = name;
//     this.#salory = salory;
//   }
//   getName() {
//     return this.#name;
//   }
//   getSalory() {
//     return this.#salory;
//   }
// }

// class EmployeesCollection {
//   #employees;
//   constructor() {
//     this.#employees = [];
//   }
//   addEmployees(employees) {
//     this.#employees.push(employees);
//   }
//   showEmployees() {
//     for (const elem of this.#employees) {
//       console.log(elem.getName() + " - " + elem.getSalory());
//     }
//   }
//   sumSalary() {
//     let sum = 0;
//     for (const elem of this.#employees) {
//       sum += elem.getSalory();
//     }
//     return sum;
//   }
//   salarAllEmp() {
//     return this.sumSalary() / this.#employees.length;
//   }
// }
// let ec = new EmployeesCollection();
// ec.addEmployees(new Employee("john", 1100));
// ec.addEmployees(new Employee("eric", 2330));
// ec.addEmployees(new Employee("kyle", 650));
// ec.showEmployees();
// console.log(ec.sumSalary());
// console.log(ec.salarAllEmp());

// let obj = new Object();

// console.log(obj);
// console.dir(obj);

// console.log(obj instanceof Object);

// const elem = document.querySelector("p");
// console.log(elem);
// console.dir(elem);
// console.log(elem instanceof HTMLParagraphElement);

// let elem = document.querySelector("div");
// console.dir(elem);

// let elem = document.querySelector("input");
// console.dir(elem);

// let elem = document.querySelector("div");
// let elems = elem.children;

// console.dir(elems);

// class User {}

// class Employee extends User {}

// class User {
//   setName(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }

// class Student extends User {
//   setYear(year) {
//     this.year = year;
//   }
//   getYear() {
//     return this.year;
//   }
// }
// const student = new Student();
// student.setName("Ivan");
// student.setYear(23);
// console.log(student.getName());
// console.log(student.getYear());

// const user = new User();
// user.setName("Ivan");
// console.log(user.getName());

// class User {
//   setName(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }

// class Student extends User {
//   setName(name) {
//     if (name.length > 0) {
//       this.name = name;
//     } else {
//       throw new Error("student name error");
//     }
//   }
// }
// let student = new Student();
// student.setName("");

// class User {
//   setName(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }

// class Student extends User {
//   setName(name) {
//     if (name.length > 0) {
//       super.setName(name); // метод родителя
//     } else {
//       throw new Error("student name error");
//     }
//   }
// }

// class User {
//   setAge(age) {
//     if (age >= 0) {
//       this.age = age;
//     } else {
//       throw new Error("need age more 0");
//     }
//   }
// }
// class Employee {
//   setAge(age) {
//     if (age <= 120) {
//       super.setAge(age);
//     } else {
//       throw new Error("need age less 120");
//     }
//   }
// }

// class User {
//   constructor(name, surn) {
//     this.name = name;
//     this.surn = surn;
//   }

//   getName() {
//     return this.name;
//   }
//   getSurn() {
//     return this.surn;
//   }
// }

// class Student extends User {
//   constructor(name, surn, year) {
//     super(name, surn);
//     this.year = year;
//   }

//   getYear() {
//     return this.year;
//   }
// }

// class User {
//   #name;

//   setName(name) {
//     this.#name = name;
//   }
//   getName() {
//     return this.#name;
//   }
// }

// class Student extends User {}
// let student = new Student();
// student.setName("john");
// let name = student.getName();
// console.log(name);

// class User {
//   constructor(name, cities) {
//     this.name = name;
//     this.cities = cities;
//   }

//   showCities() {
//     this.cities.forEach(function (city) {
//       console.log(this.#cape(city)); // контекст потерялся
//     });
//   }

//   #cape(str) {
//     return str[0].toUpperCase() + str.slice(1);
//   }
// }

// class User {
//   constructor(name, cities) {
//     this.name = name;
//     this.cities = cities;
//   }

//   showCities() {
//     this.cities.forEach((city) => {
//       console.log(this.#cape(city));
//     });
//   }

//   #cape(str) {
//     return str[0].toUpperCase() + str.slice(1);
//   }
// }

// class Employee {
//   constructor(name, salary, coeffs) {
//     this.name = name;
//     this.salary = salary;
//     this.coeffs = coeffs;
//   }

//   getTotal() {
//     return this.coeffs.reduce((res, coeff) => {
//       return res + this.salary * coeff;
//     }, 0);
//   }
// }

// let employee = new Employee("john", 1000, [1.1, 1.2, 1.3]);
// let total = employee.getTotal();
// console.log(total);

// class User {
//   #name;

//   constructor(name) {
//     this.#name = name;
//   }
//   getName() {
//     return this.#name;
//   }
// }

// let user = new User("john");
// console.log(user.getName);

// class User {
//   #name;

//   constructor(name) {
//     this.#name = name;
//   }
//   getName() {
//     return this.#name;
//   }
// }

// let user = new User("john");
// let func = user.getName;
// func = func.bind(user);
// console.log(func());

// class Text {
//   #text;

//   constructor(text) {
//     this.#text = text;
//   }

//   numberText() {
//     return this.#text.length;
//   }

//   numberLetter() {
//     let words = 0;
//     let arr = this.#text.split("");
//     for (const elem of arr) {
//       if (elem != " ") {
//         words++;
//       }
//     }
//     return words;
//   }

//   numberSpaces() {
//     let words = 0;
//     let arr = this.#text.split("");
//     for (const elem of arr) {
//       if (elem == " ") {
//         words++;
//       }
//     }
//     return words;
//   }

//   arrWords() {
//     return this.#text.split(" ");
//   }

//   arrTexts() {
//     return this.#text.split(". ").length;
//   }
// }

// const text = new Text("Cretehb erbete. Rrbetn eb rbrb");
// console.log(text.numberText());
// console.log(text.numberLetter());
// console.log(text.numberSpaces());
// console.log(text.arrWords());
// console.log(text.arrTexts());

//=====================================
//GOiT
//=====================================

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }
// const mango = new User("Mango", "vsfs@wvwrv");
// console.log(mango);
//---------------------------------
