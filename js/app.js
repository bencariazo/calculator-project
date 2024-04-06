const calcDisplay = document.querySelector("#calculator-display");
const clearBtn = document.querySelector('#positiveNegative')
const allClear = document.querySelector('#allClear')
const allBtn = document.querySelectorAll('.buttons')
const allBtnNumber = document.querySelectorAll('.btn-number')
const allBtnOperations = document.querySelectorAll('.btn-operations')
const allBtnFunctions = document.querySelectorAll('.btn-function')
const decimalBtn = document.querySelector('#period')
const positiveNegativeBtn = document.querySelector('#positiveNegative')

let previousNum = 0;
let operator = null;
let currentNum = 0;
let noDisplay = false;

allBtnNumber.forEach(btn => btn.addEventListener('click', () => inputNum(btn.textContent)))
allBtnOperations.forEach(btn => btn.addEventListener('click', () => getOperator(btn.textContent)))
decimalBtn.addEventListener('click', addDecimal)
allClear.addEventListener('click', () => clear())
positiveNegativeBtn.addEventListener('click', positiveNegative)


const inputNum = (num) => {
    if(calcDisplay.textContent == '0' || noDisplay) {
        removeDisplay()
    }
    calcDisplay.textContent += num
}

const removeDisplay = () => {
    calcDisplay.textContent = '';
    noDisplay = false;
}

const getOperator = (para) => {
    if(operator !== null) evaluate()
    previousNum = calcDisplay.textContent
    operator = para
    noDisplay = true;
}

function addDecimal () {
    if (noDisplay) removeDisplay()
    if (calcDisplay.textContent === ''){
        calcDisplay.textContent = '0'
    }
    if (calcDisplay.textContent.includes('.')) {
        return
    }
    calcDisplay.textContent += '.'
}

function positiveNegative () {
    if (calcDisplay.textContent !== '' || calcDisplay.textContent !== 0) {
        calcDisplay.textContent *= -1
    }
}


const roundResult = (x) => Math.round(x * 1000) / 1000
const add = (x,y) => x + y;
const subtract = (x,y) => x - y;
const multiply = (x,y) => x * y;
const divide = (x,y) => x / y;
const percentage = (x,y) => x * (y/100)
