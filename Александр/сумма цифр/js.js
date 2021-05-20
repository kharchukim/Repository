/* Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое
число и возвращает сумму его цифр. */

let sum = 0;
let fldNumber = document.getElementById("fldNum");
let result = document.getElementById("result");

fldNumber.focus();

fldNumber.addEventListener("input", () => {
	sum = getDigitSum(fldNumber.value);
	
	result.innerHTML = `<span>Сумма цифр =</span> ${sum}`;
});


function getDigitSum(str) {
	let sum = 0;
	let num = (Math.abs(str)).toString();
	
  for(let i = 0; i < num.length; i++) {
		sum += Number(num[i]);
	}
	
  return sum;
}
