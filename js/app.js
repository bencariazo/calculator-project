const calcDisplay = document.querySelector("#calculator-display");
const clearBtn = document.querySelector('#positiveNegative')
const allClear = document.querySelector('#allClear')
const allBtn = document.querySelectorAll('.buttons')
const allBtnNumber = document.querySelectorAll('.btn-number')
const allBtnOperations = document.querySelectorAll('.btn-operations')
const allBtnFunctions = document.querySelectorAll('.btn-function')


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