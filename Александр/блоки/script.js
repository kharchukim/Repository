const generateForm = document.forms.generateForm;
const inputCount = generateForm.elements.countBlocks;
const btnGenerate = generateForm.elements.btnGenerate;
const blocksContainer = document.getElementById("blocksContainer");

const arrayBlocks = []; // массив для хранения объектов (блоков)

// делаем поле активным (в фокусе)
inputCount.focus();

// обработчик события ввода ("input") кол-ва элементов в поле "inputCount"
inputCount.addEventListener("input", () => {
	inputCount.classList.remove("error");
	if(inputCount.value == "0") {
			btnGenerate.value = "Очистить";
			
			if(document.querySelector(".container div")) {
				btnGenerate.removeAttribute("disabled"); // делаем кнопку доступной
			}
			else {
				btnGenerate.setAttribute("disabled", "");
			}
	}
	else if(+inputCount.value > inputCount.getAttribute("max")) {
		inputCount.classList.add("error");
		btnGenerate.setAttribute("disabled", "");
	}
	else if(+inputCount.value > 0){
		btnGenerate.value = "Сгенерировать блоки";
		btnGenerate.removeAttribute("disabled"); // делаем кнопку доступной
	}
	else {
		btnGenerate.value = "Сгенерировать блоки";
		btnGenerate.setAttribute("disabled", ""); // делаем кнопку недоступной
	}
});

// обработчик события "click" по кнопке "btnGenerate"
btnGenerate.addEventListener("click", () => {
	if(document.querySelector(".container div") && +inputCount.value == 0) {
		document.getElementById("blocksContainer").innerHTML = "";
		document.getElementById("blocksContainer").classList.add("hiden");
		btnGenerate.setAttribute("disabled", "");
	}
	else {
		if(document.querySelector(".container div")) {
			document.getElementById("blocksContainer").innerHTML = "";
		}
		generateBlocks(+inputCount.value);
		inputCount.value = "";
		inputCount.focus();
		btnGenerate.setAttribute("disabled", "");
	
		showBlocks(arrayBlocks); // вызов функции отображения (создания) блоков
		clearArrayBlocks(arrayBlocks); // вызов функции очистки массива блоков
	}
});

// Функция очистки массива блоков
function clearArrayBlocks(arr) {
	for(let i = arr.length; i > 0; i--) {
		arr.pop();
	}
}

// Функция генерации (создания) объектов
function generateBlocks(count) {
	const COLORS = ["red", "orange", "yellow", "green", "cyan", "blue", "violet", "gray", "black", "white"];
	
	let block; // объект
	let width, height; // ширина и высота объекта (случайные)
	let indexColor; // случайный номер элемента в массиве COLORS
	
	// цикл для создания объекта и формирования массива объектов
	for(let i = 0; i < count; i++) {
		width = Math.ceil(Math.random() * 300);
		height = Math.ceil(Math.random() * 150);
		
		indexColor = Math.floor(Math.random() * 10);
	
		block = new Block(width, height, COLORS[indexColor]); // создание объекта
		arrayBlocks.push(block); // добавление объекта в массив
	}
}

// Функция отображения (создания) блоков в div с id "blocksContainer"
function showBlocks(arr) {
	let block;
	
	// цикл по массиву объектов
	for(let elem of arr) {
		block = document.createElement("div"); // создаём div
		
		block.style.width = elem.Width + "px"; // задаём CSS св-во ширины
		block.style.height = elem.Heigth + "px"; // задаём CSS св-во высоты
		block.style.backgroundColor = elem.BgColor; // задаём CSS св-во цвета фона
		
		blocksContainer.append(block); // добавляем div к контейнеру в конец
		blocksContainer.classList.remove("hiden"); // делаем видимым контейнер
	}
}

// Класс объектов (блок) - будущие div-ы
class Block {
	#width;
	#height;
	#bgColor;
	
	constructor(width, height, bgColor) {
		this.#width = width;
		this.#height = height;
		this.#bgColor = bgColor;
	}
	
	get Width() {
		return this.#width;
	}
	
	set Width(value) {
		this.#width = value;
	}
	
	get Height() {
		return this.#height;
	}
	
	set Height(value) {
		this.#height = value;
	}
	
	get BgColor() {
		return this.#bgColor;
	}
	
	set BgColor(value) {
		this.#bgColor = value;
	}
}