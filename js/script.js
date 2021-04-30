/*** ОБЪЕКТЫ (начало) ***/
// Литеральный способ создания объекта {}
let button = {
   id: "generateBtn",
   text: "Купить",
   class: "btn animate__animated",
   isBorder: false
};

//select - селектор тега (типа)
//.select - селектор класса
//select option - контекстный селектор (селектор потомков)
//.menu .item-menu - контекстный селектор (селектор потомков)
//select > option - дочерний селектор
//[type] - селектор по атрибуту
//[type="checkbox"] - селектор по атрибуту
//select + p - соседний селектор (найди p, который сразу за select)
//select ~ p - соседи

let select = document.getElementById("variantsButton");
let div = document.querySelector(".buttons");
let btn;

select.addEventListener("input", () => {
   if(document.getElementById(button.id)) {
      btn.className = `${button.class} ${select.value}`;
      btn.classList.add("animate__bounceIn");

      setTimeout(()=>{
         btn.classList.remove("animate__bounceIn");
      }, 1000);
   }
   else {
      btn = document.createElement("button");
      btn.id = button.id;
      btn.textContent = button.text;
      btn.className = `${button.class} ${select.value}`;

      btn.classList.add("animate__backInDown");

      setTimeout(() => {
         btn.classList.remove("animate__backInDown");
      }, 2000);

      div.insertAdjacentElement("afterend", btn);
   }
});


// let btn = document.createElement("button");
// btn.textContent = button.text;
// btn.classList.add(button.class, "btn-big");

// if(button.isBorder) {   
//    btn.style.border = "2px solid red";
// }
// else {
//    btn.style.border = "none";
// }

// document.body.prepend(btn);


//string, number, boolean, Array, Object, Function


/*** ОБЪЕКТЫ (конец) ***/



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



/*** МИНИ-КАЛЬКУЛЯТОР (начало) ***/
// сложение 2-х чисел
// разность 2-х чисел
// произведение 2-х чисел
// частное 2-х чисел
// возведение числа в n-степень
// корень n-й степени

// let cancel = true;
// let menu = `Ваш выбор (0-6):
// 1. Сложение 2-х чисел
// 2. Разность 2-х чисел
// 3. Произведение 2-х чисел
// 4. Деление 2-х чисел
// 5. Возведение числа в n-ю степень
// 6. Вычисление корня n-й степени
// 0. Отмена`;

// let num1, num2;
// let result; //сумма, разность, произведение...

// do {
//   let operation = prompt(menu, "0");

//   switch(operation) {
//     case "1": num1 = +prompt("Первое число:");
//               num2 = +prompt("Второе число:");

//               result = num1 + num2;
//               alert(`Сумма чисел = ${result}`);
//               break;
//     case "2": num1 = prompt("Первое число:");
//               num2 = prompt("Второе число:");

//               result = num1 - num2;
//               alert(`Разность чисел = ${result}`);
//               break;
//     case "3": num1 = prompt("Первое число:");
//               num2 = prompt("Второе число:");

//               result = num1 * num2;
//               alert(`Произведение чисел = ${result}`);
//               break;
//     case "4": num1 = prompt("Первое число:");
//               num2 = prompt("Второе число:");

//               if(num2 != 0) {
//                 result = num1 / num2;
//                 alert(`Частное 2-х чисел = ${result.toFixed(2)}`);
//               }
//               else {
//                 alert(`Делить на 0 нельзя!`);
//               }
//               break;
//     case "5": num1 = prompt("Число:");
//               num2 = prompt("Степень:");

//               if(num2 < 0) {
//                 result = Math.pow(num1, num2).toFixed(4);  
//               }
//               else {
//                 // result = num1**num2;
//                 result = Math.pow(num1, num2);
//               }

//               alert(`Число ${num1} в степени ${num2} = ${result}`);
//               break;
//     case "6": num1 = prompt("Число:");
//               num2 = prompt("Степень корня:");

//               result = Math.pow(num1, 1 / num2);
//               alert(`Корень степени ${num2} из числа ${num1} = ${result}`);

//               break;

//     //отмена (закрытие меню)
//     case "0": 
//     case null: cancel = false;
//               break;
//     default:  alert("Ошибка! Неверный выбор!!!");
//               break;
//   }
// } while(cancel);

/*** МИНИ-КАЛЬКУЛЯТОР (конец) ***/



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