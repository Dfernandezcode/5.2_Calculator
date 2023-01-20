/*constants*/

const display2El = document.querySelector('.calculator__result');
const numbersEl = document.querySelectorAll('.button--operand');
const operationEl = document.querySelectorAll('.button--operator');
const equalEl = document.querySelector('.button--equal');
const clearEl = document.querySelector('.button--clear');

/*Display properties*/
let dis2Num = '';
let result = 'null';
let lastOperation = '';
let haveDot = false;

/* Number functions */

numbersEl.forEach((number) => {
	number.addEventListener('click', (e) => {
		if (e.target.innerText === '.' && !haveDot) {
			haveDot = true;
		} else if (e.target.innerText === '.' && haveDot) {
			return;
		}
		dis2Num += e.target.innerText;
		display2El.innerText = dis2Num;
	});
});

//Dot functionality (non-repeating dot!)

operationEl.forEach((operation) => {
	operation.addEventListener('click', (e) => {
		if (!dis2Num) result;
		haveDot = false;
		const operationName = e.target.innerText;
		if (dis2Num && lastOperation) {
			mathOperation();
		} else {
			result = parseFloat(dis2Num);
		}
		clearVar(operationName);
		lastOperation = operationName;
		console.log(result);
	});
});

function clearVar(name = '') {
	dis2Num += dis2Num + ' ' + ' ';
	display2El.innerText = dis2Num;
	display2El.innerText = '';
	dis2Num = '';
}

/*mathOps functionality - woohoo youtube*/

function mathOperation() {
	if (lastOperation === 'X') {
		result = parseFloat(result) * parseFloat(dis2Num);
	} else if (lastOperation === '+') {
		result = parseFloat(result) + parseFloat(dis2Num);
	} else if (lastOperation === '-') {
		result = parseFloat(result) - parseFloat(dis2Num);
	} else if (lastOperation === '/') {
		result = parseFloat(result) / parseFloat(dis2Num);
	}
}

//Equal Function

equalEl.addEventListener('click', (e) => {
	if (!dis2Num) return;
	haveDot = false;
	mathOperation();
	clearVar();
	display2El.innerText = result;
});

clearEl.addEventListener('click', (e) => {
	display2El.innerText = '0';
	dis2Num = '';
	result = '';
	display2El.innerText = '0';
});
