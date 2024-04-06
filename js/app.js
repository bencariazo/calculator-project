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


const add = (x,y) => x + y;
const subtract = (x,y) => x - y;
const multiply = (x,y) => x * y;
const divide = (x,y) => x / y;

const removeChild = () => {
    while(calcDisplay.hasChildNodes()){
        calcDisplay.removeChild(calcDisplay.firstChild)
    }
}
allClear.addEventListener('click', () => {
    currentNum = '';
    previousNum = '';
    removeChild();
})