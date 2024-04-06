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
allClear.addEventListener('click', clear)
positiveNegativeBtn.addEventListener('click', positiveNegative)


function inputNum (num) {
    if(calcDisplay.textContent == '0' || noDisplay) {
        removeDisplay()
    }
    calcDisplay.textContent += num
}

function removeDisplay () {
    calcDisplay.textContent = '';
    noDisplay = false;
}

function getOperator (para) {
    if(operator !== null) {
        evaluate()
    }
    previousNum = calcDisplay.textContent
    operator = para
    // console.log(operator)
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

function clear () {
    calcDisplay.textContent = '0';
    operator = null;
    currentNum = '';
    previousNum = '';
}

function evaluate () {
    if (operator === null || noDisplay) return
    if (operator === '/' && calcDisplay.textContent === '0') {
      alert("You can't divide by 0!")
      return
    }
    currentNum = calcDisplay.textContent
    calcDisplay.textContent = roundResult(operate(previousNum, operator, currentNum))
    operator = null
}

const roundResult = (x) => Math.round(x * 1000) / 1000
const add = (x,y) => x + y;
const subtract = (x,y) => x - y;
const multiply = (x,y) => x * y;
const divide = (x,y) => x / y;
const percentage = (x,y) => x * (y/100)

function operate (x,operator,y) {
    x = Number(x);
    y = Number(y);
    switch (operator) {
            case "+":
                return add(x,y)
            case "-":
                return subtract(x,y)
            case "X":
                return multiply(x,y)
            case "/":
                return divide(x,y)
            case "%":
                return percentage(x,y)
        }
}

clear()