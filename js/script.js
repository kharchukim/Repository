const formUsers = document.forms.formUsers;
const fldCountUsers = formUsers.elements.countUsers;
const fldUserName = formUsers.elements.userName;
const fldLogin = formUsers.elements.login;
const fldStatus = formUsers.elements.status;
const btnAddUser = formUsers.elements.addUser;
const btnClear = formUsers.elements.clear;

let userName,
  login,
  status = fldStatus.value,
  countUsers;

// обработчик события ввода значения в поле Кол-во пользователей
fldCountUsers.addEventListener("input", () => {
  if (+fldCountUsers.value != 0) {
    fldUserName.removeAttribute("disabled");
  } else {
    fldUserName.setAttribute("disabled", "");
  }
});

// обработчик события ввода значения в поле Имя пользователя
fldUserName.addEventListener("input", () => {
  userName = fldUserName.value.trim();

  if (userName != "") {
    fldLogin.removeAttribute("disabled");
    btnClear.removeAttribute("disabled");
  } else {
    fldLogin.setAttribute("disabled", "");
  }
});

// обработчик события ввода значения в поле Логин
fldLogin.addEventListener("input", () => {
  login = fldLogin.value.trim();

  if (login != "") {
    fldStatus.removeAttribute("disabled");
    btnAddUser.removeAttribute("disabled");
  } else {
    fldStatus.setAttribute("disabled", "");
  }
});

fldStatus.addEventListener("change", () => {
  status = fldStatus.value;
});

// обработчик кнопки очистки
btnClear.addEventListener("click", (e) => {
  // e.preventDefault();
  // for (let field of formUsers) {
  //   if (field != fldCountUsers) {
  //     if (field != btnAddUser && field != btnClear && field != fldStatus) {
  //       field.value = "";
  //     }
  //     field.setAttribute("disabled", "disabled");
  //   } else {
  //     fldCountUsers.value = 0;
  //     fldStatus.options.selectedIndex = 0;
  //   }
  // }
});

function clearFields(e) {
  e.preventDefault();
  for (let field of formUsers) {
    if (field != fldCountUsers) {
      if (field != btnAddUser && field != btnClear && field != fldStatus) {
        field.value = "";
      }
      field.setAttribute("disabled", "disabled");
    } else {
      fldCountUsers.value = 0;
      fldStatus.options.selectedIndex = 0;
    }
  }
}

// обработчик кнопки добавить
btnAddUser.addEventListener("click", (e) => {
  let user;
  countUsers = +fldCountUsers.value;

  user = new User(userName, login, status);
  fldCountUsers.value = --countUsers;

  fldUserName.value = "";
  fldLogin.value = "";
  fldStatus.options.selectedIndex = 0;

  if (countUsers == 0) {
    fldCountUsers.removeAttribute("disabled");
    clearFields(e);
  }

  fldCountUsers.setAttribute("disabled", "disabled");
  console.log(user);
});

class User {
  //name, login, isAdmin - формальные параметры

  static MAX_COUNT_USERS = 3; //максимально возможное число пользователей
  static #countUsers = 0; //кол-во пользователей

  #name;
  #login;
  #status;

  constructor(name, login, status) {
    User.#countUsers++;

    if (User.#countUsers > User.MAX_COUNT_USERS) {
      console.log("Невозможно создать нового пользователя!");
    } else {
      this.#name = name;
      this.#login = login;
      this.#status = status;
    }
  }

  get Name() {
    return this.#name;
  }
  set Name(value) {
    if (typeof value == "string" && value.length >= 3 && value.length <= 20) {
      this.#name = value;
    } else {
      console.log(
        "Значение имени должно быть строковым и соотвествовать определённому кол-ву символов!"
      );
    }
  }

  get Login() {
    return this.#login;
  }
  set Login(value) {
    if (typeof value == "string") {
      this.#login = value;
    } else {
      console.log("Значение логина должно быть строковым!");
    }
  }

  get Status() {
    return this.#status;
  }
  set Status(value) {
    if (typeof value == "string") {
      this.#status = value;
    } else {
      console.log("Значение должно быть строкового типа!");
    }
  }

  getUserInfo() {
    let str = "Информация о пользователе:".toUpperCase() + "\n";

    str += `Имя: ${this.Name}\n`;
    str += `Логин: ${this.Login}\n`;

    if (this.Status == "admin") {
      str += `Является админом!`;
    } else {
      str += `Обычный пользователь :(`;
    }

    return str;
  }

  changeUserName() {
    this.Name = prompt("Новое имя:");
    return this.getUserInfo();
  }
}

// if (countUsers > User.MAX_COUNT_USERS) {
//   alert("Слишком много пользователей!");
// }

function createUsers(countUsers, userName, login, status) {
  let users = []; // массив пользователей (объектов)

  for (let i = 0; i < countUsers; i++) {
    users[i] = new User(userName, login, status);
    // userName = prompt(`Имя ${i + 1}-пользователя:`);
    // if (userName == "") {
    //   userName = "Гость";
    // }

    // login = prompt("Логин:");
    // if (login == "") {
    //   login = "guest";
    // }

    // status = confirm("Пользователь с правами администратора?");

    //создание нового объекта (пользователя) и добавление в массив users
  }
  console.log(users);
}

function getInfoUsers() {
  for (let user of users) {
    console.log(user.getUserInfo());
  }
}

// getInfoUsers();

/*** ОБЪЕКТЫ (начало) ***/

// function Button(id, styles, name, types) {
//   this.id = id;
//   this.text = name;
//   this.defaultStyles = {};
//   this.btnStyles = {};

//   // Формирование дефолтных свойств (для всех кнопок)

//   for (let key in styles) {
//     this.defaultStyles[key] = styles[key];
//   }

//   // Формирование индивидуальных свойств (у каждой кнопки свои!)
//   for (let key in types) {
//     if (key == this.id) {
//       for (let prop in types[key]) {
//         this.btnStyles = types[key];
//       }
//     }
//   }

//   // Создание кнопки (объекта DOM)
//   this.create = function () {
//     let btn = document.createElement("button"); //создание тега button
//     btn.id = this.id; //задаём атрибут id из св-ва объекта

//     // задаём общие свойства для кнопки
//     // key - имя свойства
//     // this.defaultStyles - свойство (объект) со стилями по умолчанию
//     for (let key in this.defaultStyles) {
//       btn.style[key] = this.defaultStyles[key];
//     }

//     // задаём индивидуальные свойства для кнопки
//     // key - имя свойства
//     // this.btnStyles - свойство (объект) со индивидуальными свойствами
//     for (let key in this.btnStyles) {
//       btn.style[key] = this.btnStyles[key];
//     }

//     btn.textContent = this.text; // задаём текст на кнопке
//     document.body.insertAdjacentElement("afterbegin", btn); // добавляем в начало body
//   };
// }

// // массив с id кнопок
// const ids = ["buy", "more", "read", "link"];

// // объект с общими CSS-свойствами кнопок
// const defaultStyles = {
//   color: "white",
//   padding: "10px 15px",
//   fontSize: "14px",
//   marginRight: "15px",
// };

// // объект с разновидностями кнопок - содержит индивидуальные CSS-свойства
// const typeButtons = {
//   buy: {
//     backgroundColor: "darkred",
//     boxShadow: "0 0 5px 0 red",
//   },
//   more: {
//     backgroundColor: "darkblue",
//     border: "2px solid gold",
//   },
//   read: {
//     backgroundColor: "darkgreen",
//     transform: "scale(1.1)",
//   },
//   link: {
//     textDecoration: "underline",
//     backgroundColor: "transparent",
//     padding: "0",
//     color: "red",
//     border: "none",
//   },
// };

// // массив с названиями кнопок
// const namesButton = ["Купить", "Подробнее", "Читать", "Перейти на Яндекс"];
// // массив для хранения объектов (кнопок)
// let buttons = [];

// for (let i = 0; i < namesButton.length; i++) {
//   buttons[i] = new Button(ids[i], defaultStyles, namesButton[i], typeButtons);
// }

// for (let key in buttons) {
//   buttons[key].create();
// }

// let select = document.getElementById("variantsButton");
// let div = document.querySelector(".buttons");
// let btn;

// select.addEventListener("input", () => {
//   if (document.getElementById(button.id)) {
//     btn.className = `${button.class} ${select.value}`;
//     btn.classList.add("animate__bounceIn");

//     setTimeout(() => {
//       btn.classList.remove("animate__bounceIn");
//     }, 1000);
//   } else {
//     btn = document.createElement("button");
//     btn.id = button.id;
//     btn.textContent = button.text;
//     btn.className = `${button.class} ${select.value}`;

//     btn.classList.add("animate__backInDown");

//     setTimeout(() => {
//       btn.classList.remove("animate__backInDown");
//     }, 2000);

//     div.insertAdjacentElement("afterend", btn);
//   }
// });

/*** ОБЪЕКТЫ (конец) ***/

/***** Пример работы с событиями (начало) *****/
// const form = document.forms.form;

// const btnSubmit = form.elements.submit;
// const btnReset = form.elements.reset;

// btnSubmit.addEventListener("click", submit);
// btnReset.addEventListener("click", clear);

// function submit(e) {
//   e.preventDefault();

//   const login = form.elements.login;
//   const pass = form.elements.pswd;
//   const comments = form.elements.comments;

//   if (login.value.length >= 6 && pass.value.length >= 6) {
//     if (!document.getElementById("answer")) {
//       const p = document.createElement("p");
//       p.id = "answer";
//       p.innerHTML = `Логин пользователя: ${login.value}<br>
// 										Пароль: ${pass.value}`;
//       form.insertAdjacentElement("afterend", p);
//     } else {
//       document.getElementById(
//         "answer"
//       ).innerHTML = `Логин пользователя: ${login.value}<br>
// 										Пароль: ${pass.value}`;
//     }
//   }
//   if (comments.value != "") {
//     document.getElementById(
//       "answer"
//     ).innerHTML += `<br>Комментарий: ${comments.value}`;
//   }
// }

// function clear(e) {
//   e.preventDefault();

//   for (let field of form) {
//     if (
//       !(
//         field.getAttribute("type") == "submit" ||
//         field.getAttribute("type") == "reset"
//       )
//     ) {
//       field.value = "";
//     }
//   }

//   if (document.getElementById("answer")) {
//     document.getElementById("answer").remove();
//   }
// }

// // Создание картинки
// document.getElementById("btn").addEventListener("click", createImage);

// function createImage() {
//   if (!document.getElementById("image")) {
//     const img = document.createElement("img");
//     img.id = "image";
//     img.alt = "Фото";
//     // img.src = "/438/img/logo.svg"; // (для Github)
//     img.src = "../img/logo.svg";
//     img.className = "image";

//     setTimeout(() => {
//       document.getElementById("btn").insertAdjacentElement("afterend", img);
//       document.getElementById("btn").textContent = "Скрыть картинку";
//     }, 500);

//     // Клик по картинке
//     img.addEventListener("click", showMessage);
//   } else {
//     setTimeout(() => {
//       document.getElementById("image").remove();
//       if (document.getElementById("message")) {
//         document
//           .getElementById("message")
//           .classList.remove("animate__rotateIn");
//         document.getElementById("message").classList.add("animate__rotateOut");

//         setTimeout(() => {
//           document.getElementById("message").remove();
//         }, 1000);
//       }
//       document.getElementById("btn").textContent = "Показать картинку";
//     }, 500);
//   }
// }

// function showMessage(e) {
//   const src = e.target.src;

//   if (!document.getElementById("message")) {
//     const div = document.createElement("div");
//     div.id = "message";
//     div.classList.add("message", "animate__animated", "animate__rotateIn");

//     const p = document.createElement("p");
//     p.innerHTML = `Адрес картинки: <strong>${src}</strong>`;
//     div.insertAdjacentElement("beforeend", p);

//     document.getElementById("image").insertAdjacentElement("afterend", div);
//   }
// }

/***** Пример работы с событиями (конец) *****/

// let num1 = 100;
// let num2 = 200;

// //Function Expression
// let multiple = function(num1, num2) {
//    return num1 * num2;
// }

// //() => {}
// let getNumber = () => {
//    return [num1, num2];
// }

//Function Declaration
// function calcSum(num1, num2) {
//    return num1 + num2;
// }

/*** ЗАДАЧИ (начало) ***/
// 38. Дан массив с числами.Выведите последовательно его элементы используя рекурсию и не используя цикл.
// let mas = [];

// const setElements = () => {
// 	for (let i = 0; i < 2; i++) {
// 		mas.push(Math.ceil(Math.random() * 10));
// 	}
// }

// setElements();
// const getElements = (index) => {

// 	if (index < mas.length) {
// 		return mas[index].toString() + '\n' + getElements(index + 1);
// 	}
// 	return "";
// }

// console.log(getElements(0));

// let factRecourse = function innerFact(num) {
// 	if (num <= 1) {
// 		return 1;
// 	}
// 	return num * innerFact(num - 1);
// }

// Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.

// let symb = prompt("Введите символ");
// if(symb.length != 1) {
//    alert("Только один символ!!!");
// }
// else {
//    let setMas = symb => {
//       let mas = [];
//       let str = symb;

//       for(let i = 0; i < 10; i++) {
//          mas.push(str);
//          str += symb;
//       }
//       return mas;
//    }
//    console.log(setMas(symb));
// }

// let factRecourse = function innerFact(num) {
//    if(num <= 1) {
//       return 1;
//    }
//    return num * innerFact(num - 1);
// }

// console.log(factRecourse(5));

// let fact = num => {
//    let result = 1;

//    while(num >= 1) {
//       result *= num;
//       num--;
//    }
//    return result;
// }

// console.log(fact(5));
/*** ЗАДАЧИ (конец)***/

/*** МИНИ-КАЛЬКУЛЯТОР (начало) ***/
// сложение 2-х чисел
// разность 2-х чисел
// произведение 2-х чисел
// частное 2-х чисел
// возведение числа в n-степень
// корень n-й степени

// let cancel = true; //пока true - пользователю выводится меню
// let menu = `Ваш выбор (0-6):
// 1. Сложение 2-х чисел
// 2. Разность 2-х чисел
// 3. Произведение 2-х чисел
// 4. Деление 2-х чисел
// 5. Возведение числа в n-ю степень
// 6. Вычисление корня n-й степени
// 0. Отмена`;

// let result;
// let params = [];

// do {
//    result = undefined;
//    let operation = prompt(menu, "0"); //выбор пользователя (пункт меню)

//    switch(operation) {
//       case "1": params = getParametrs(operation);
//                result = getResult(params, "+");
//                break;

//       case "2": params = getParametrs(operation);
//                result = getResult(params, "-");
//                break;

//       case "3": params = getParametrs(operation);
//                result = getResult(params, "*");
//                break;

//       case "4": params = getParametrs(operation);
//                result = getResult(params, "/");
//                break;

//       case "5": params = getParametrs(operation);
//                result = getResult(params, "^");
//                break;

//       case "6": params = getParametrs(operation);
//                result = getResult(params, "n");
//                break;

//       //отмена (закрытие меню)
//       case "0":
//       case null: cancel = false;
//                break;
//       default:  result = "Ошибка! Неверный выбор!!!";
//                break;
//    }
//    if(result){
//       alert(result);
//    }
// } while(cancel);

// //Задаёт параметры (вводимые значения)
// function getParametrs(oper) {
//    let str1, str2;

//    if(oper >= 1 && oper <= 4) {
//       str1 = "Первое число:";
//       str2 = "Второе число:";
//    }
//    else if(oper == 5) {
//       str1 = "Число:";
//       str2 = "Степень:";
//    }
//    else {
//       str1 = "Число:";
//       str2 = "Степень корня:";
//    }
//    return checkParametrs(str1, str2);
// }

// //Проверяет параметры
// function checkParametrs(str1, str2) {
//    let p1, p2; //параметры (вводимые пользователем значения)

//    let cancel; //флаг для анализа выхода из цикла
//                //когда значение false - выходим из цикла

//    let exit = true; //флаг для выхода из внутреннего цикла
//                     //когда значение false - выходим из цикла

//    start:
//    if(exit) {
//       do {
//          p1 = prompt(str1);
//          cancel = checkP(p1); //проверка параметра на null,
//                               //пустую строку или не число

//          if(cancel == "undefined") {
//             break;
//          }
//          //если первый параметр введён корректно (т.е. является числом)
//          //т.е. cancel --> false
//          if(!cancel) {
//             do {
//                p2 = prompt(str2);
//                cancel = checkP(p2);

//                if(cancel == "undefined") {
//                   exit = false;
//                   break start;
//                }
//             } while(cancel);
//          }
//       } while(cancel);
//    }

//    return [p1, p2];
// }

// //Проверяет параметр.
// //Возвращает "undefined" или true (введена пустая строка или не число!)
// //или false (введено число)
// function checkP(param) {
//    if(!param && typeof param == "object") {
//       param = "undefined";
//       return param;
//    }
//    if(param == "" || isNaN(+param)) {
//       alert("Пустая строка или не число!");
//       return true;
//    }
//    return false;
// }

// //Вычисляет результат и возвращает строку с ним
// function getResult(params, oper) {
//    let result;
//    let p1 = params[0], p2 = params[1];

//    if(!p1 && typeof p1 == "object" ||
//       !p2 && typeof p2 == "object") {
//       result = "Вы отменили ввод!";
//    }
//    else {
//       p1 = +p1;
//       p2 = +p2;

//       switch(oper) {
//          case "+": result = `Сумма чисел = ${p1 + p2}`;
//                   break;

//          case "-": result = `Разность чисел = ${p1 - p2}`;
//                   break;

//          case "*": result = `Произведение чисел = ${p1 * p2}`;
//                   break;

//          case "/": if(p2 != 0) {
//                      if(Number.isInteger(p1 / p2)) {
//                         result = `Частное 2-х чисел = ${(p1 / p2)}`;
//                      }
//                      else {
//                         result = `Частное 2-х чисел = ${(p1 / p2).toFixed(4)}`;
//                      }
//                   }
//                   else {
//                      result = "Делить на 0 нельзя!";
//                   }
//                   break;

//          case "^": if(p2 < 0) {
//                      result = `Число ${p1} в степени ${p2} = ${(p1**p2).toFixed(4)}`;
//                   }
//                   else {
//                      result = `Число ${p1} в степени ${p2} = ${p1**p2}`;
//                   }
//                   break;

//          case "n": if(Number.isInteger(p1**(1 / p2))) {
//                      result = `Корень степени ${p2} из числа ${p1} = ${p1**(1 / p2)}`;
//                    }
//                    else {
//                      result = `Корень степени ${p2} из числа ${p1} = ${(p1**(1 / p2)).toFixed(4)}`;
//                    }
//                   break;
//       }
//    }
//    return result;
// }
/*** МИНИ-КАЛЬКУЛЯТОР (конец) ***/

// Примитивные типы данных
//string "123"
//number 12; 14.6
//boolean true/false
//null
//undefined
//symbol

//Сложные типы данных
//object ==> массивы, объекты, функции

/*** ИНКРЕМЕНТ И ДЕКРЕМЕНТ (начало) ***/
// инкремент
// i = i + 1;
// i++; //постфиксная запись
// ++i; //префиксная запись

// декремент
// i = i - 1;
// i--; //постфиксная запись
// --i; //префиксная запись

// Разница между постфиксной и префиксной записью
// let x = 10;
// let y, z;
// console.log(x);

// y = x++; //y = 10, x = 11
// z = ++x; //z = 12, x = 12
// console.log(y);
// console.log(z);
// console.log(x);

/*** ИНКРЕМЕНТ И ДЕКРЕМЕНТ (конец) ***/

/*** МЕТОДЫ МАССИВА
1) push / unshift - добавление эл-та(ов) в конец/начало массива
2) pop / shift - удаление последнего/первого элемента в массиве

3) slice() - без параметров создаёт полную копию массива
   slice(0, 3) - выбирает элементы с 0-го до 3-го (не включая)
   slice(0, -2) - выбирает элементы с 0-го до конца массива, кроме последних 2-х

4) splice(0, 3) - удаляет 3 элемента с начала
   splice(-3, 3) - удаляет 3 элемента с конца
   splice(0, 3, 1000, 2000) - удаляет 3 элемента с начала и вставляет 2 новых (1000 и 2000)
***/

/*** ПРИМЕР АССОЦИАТИВНОГО МАССИВА (начало) ***/
// let assocMas = new Map([
//   ["number", 1000],
//   ["city", "Москва"],
//   ["flag", true]
// ]);

// assocMas.set("date", "28.04.2021"); //создать элемент с ключом "date"
// console.log(assocMas.get("date")); //вернуть значение по ключу "date"
// console.log(assocMas.size); //длина массива

// assocMas.delete("number"); //удаление элемента с ключом "number"

// assocMas.clear(); //очищает массив (удаляет все его элементы)

// console.log(assocMas);
// console.log(assocMas.has("city")); // проверяет есть ли элемент с указанным ключом

// цикл по всем ключам
// for(let key of assocMas.keys()) {
//    console.log(key);
// }

// цикл по всем значениям
// for(let value of assocMas.values()) {
//    console.log(value);
// }

// метод forEach для перебора всех элементов массива и применения функции к ним (неких действий)
// assocMas.forEach(
//    function(value, key) {
//       console.log('Имя: ' + key + '\nЗначение: ' + value);
//    }
// );

/*** ПРИМЕР АССОЦИАТИВНОГО МАССИВА (конец) ***/

/*** ПРИМЕР ЗАДАЧИ С ДВУМЕРНЫМ МАССИВОМ (начало) ***/
// let matrix = [];

// let countElements = +prompt("Кол-во элементов в массиве:");

// for(let i = 0; i < countElements; i++) {
//   let isArray = confirm(`${i + 1}-й элемент, массив?`); //true или false

//   if(isArray) {
//     let innerCount = +prompt("Кол-во элементов в массиве?");

//     matrix[i] = []; //элемент массива - сам является массивом

//     for(let j = 0, elem = ""; j < innerCount; j++) {
//       elem = prompt(`${j + 1}-й эл-т:`);

//       if( (+elem).toString() == "NaN"
//           && elem != "true" && elem != "false") {
//         matrix[i][j] = elem;
//       }
//       else if( isNaN(+elem) ) {
//         elem == "true" ? matrix[i][j] = true : matrix[i][j] = false;
//       }
//       else {
//         matrix[i][j] = +elem;
//       }
//     }
//   }
//   else {
//     matrix[i] = +prompt(`Введите число:`);
//   }
// }

// // вывод элементов массива в консоль
// for(let i in matrix) {
//   if(Array.isArray(matrix[i])) {
//     for(let j = 0; j < matrix[i].length; j++) {
//       console.log(matrix[i][j]);
//     }
//   }
//   else {
//     console.log(matrix[i]);
//   }
// }
// console.log(JSON.stringify(matrix));

/*** ПРИМЕР ЗАДАЧИ С ДВУМЕРНЫМ МАССИВОМ (конец) ***/

/*** ЗАДАЧА 3 (начало) ***/
// Пользователь вводит сумму вклада и процент, который будет начисляться ежегодно.
// Отобразить размер вклада поочередно на ближайшие 5 лет.

// let sum; //сумма вклада
// let percent; //годовой процент
// let countYears; //кол-во лет
// let result; //итоговая строка с выводом

// let endWordYears = ""; //строка, содержащая "год(а)", "лет"

// sum = Number(prompt("Сумма вклада:"));
// percent = Number(prompt("Годовой %:"));
// countYears = Number(prompt("Период вклада (лет):"));

// for(let i = 1; i <= countYears; i++) {
//   sum += sum * percent / 100;

//   //1 год, 21 год
//   //2, 3, 4 года
//   //5,6,7,8,9,10 лет + 11 лет!

//   if(i != 11 && i % 10 == 1) {
//     endWordYears = "год";
//   }
//   else if((i >= 5 && i <= 20) || (i % 10 >= 5 && i % 10 <= 9 ) || (i % 10) == 0) {
//     endWordYears = "лет";
//   }
//   else {
//     endWordYears = "года";
//   }

//   result += `Через ${i} ${endWordYears} сумма = ${sum.toFixed(2)}\n`;
//   console.log(`Через ${i} ${endWordYears} сумма = ${sum.toFixed(2)}`);
// }

// alert(result);

/*** ЗАДАЧА 3 (конец) ***/

/*** ЗАДАЧА 2 (начало) ***/
// Пользователь вводит длину оснований трапеции (a и b), а также высоту трапеции h.
// Программа выводит сообщение: «Площадь трапеции будет равна <значение>». Площадь
// вычисляется по формуле ((a + b) / 2) * h, где a, b - основания, h - высота.
// let a, b; //стороны трапеции
// let h; //высота трапеции
// let S; //искомая площадь трапеции

// let result = ""; //строка с результатом

// a = +prompt("Сторона a:");
// b = +prompt("Сторона b:");
// h = +prompt("Высота h:");

// if(a > 0 && b > 0 && h > 0) {
//   S = ((a + b) / 2) * h;
//   result = `Площадь трапеции со сторонами a = ${a}, b = ${b}\nи высотой h = ${h} равна ${S}.`
// }
// else {
//   result = "Неверные данные!!! Площадь невозможно посчитать!";
// }
// alert(result);

/*** ЗАДАЧА 2 (конец) ***/

/*** ЗАДАЧА 1 (начало) ***/
// Программа хранит в двух переменных курс доллара и евро. В первой переменной у вас
// хранится стоимость одного евро в рублях, во второй - стоимость одного доллара в рублях.
// Вы спрашиваете у пользователя, сколько рублей он хочет сконвертировать, получаете это
// число и считаете. Результат надо вывести на страницу с помощью alert.
// let kursDollara = 74.8;
// let kursEuro = 90.5;
// let sumDollars = 0, sumEuro = 0;

// let rubles = prompt("Сумма в рублях:");

// if(!rubles && typeof rubles == "object") {
//   alert("Вы отменили!!!");
// }
// else {
//   if(rubles == "") {
//     alert("Вы ничего не ввели!!!");
//   }
//   else {
//     if(isNaN(+rubles)) {
//       alert("Это не число!");
//     }
//     else {
//       sumDollars = (rubles/kursDollara).toFixed(2);
//       sumEuro = (rubles/kursEuro).toFixed(2);

//       alert(`Сумма в долларах = ${sumDollars}$, сумма в евро = ${sumEuro}\u20AC`);
//     }
//   }
// }

// let number = prompt("Введите число:"); //возвращает тип string или null

// if(!number && typeof number == "object") {
//   alert("Вы отменили!!!");
// }
// else {
//   if(number == "") {
//     alert("Вы ничего не ввели!!!");
//   }
//   else {
//     isNaN(+number) ? alert("Это не число!") : alert(`Число ${number} в степени 3 = ${number**3}`);
//   }
// }
