/* Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями.
Первым параметром функция принимает значение, которым заполнять массив, а вторым -
сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x',
'x', 'x']. */

const fldSymb = document.getElementById("fldSymb");
const fldNum = document.getElementById("fldNum");
const result = document.getElementById("result");
let arr = [];

fldSymb.focus();

fldSymb.addEventListener("input", () => {
	if(fldSymb.value == "") {
		fldNum.setAttribute("disabled", "");
	}
	else {
		fldNum.removeAttribute("disabled");
		fldNum.focus();
	}
});

fldNum.addEventListener("input", () => {
	if(fldSymb.value != "") {
		arr = arrayFill(fldSymb.value, fldNum.value);
		result.innerHTML = `<span>Массив: </span> [${arr}]`;
	}
});



function arrayFill(symb, count) {
	let mas = [];
	
	for (let i = 0; i < +count; i++) {
		mas.push(symb);
  }
	
	return mas;
}