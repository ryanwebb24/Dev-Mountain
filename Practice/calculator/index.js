const resultText = document.querySelector("#result-text")
const equals = document.querySelector("#equals")
const clearbtn = document.querySelector("#clear")
const allNumberBtns = document.querySelectorAll(".number")
const allOperators = document.querySelectorAll(".operator")
function allBtns(event){
    if (!(event.target.classList.contains('operator') && resultText.innerHTML === '') || event.target.innerHTML === '-'){
        resultText.innerHTML += event.target.innerHTML
    }
}
function clear(){
    resultText.textContent = ''
}
function equalsOperation(){
    const operation = resultText.innerHTML
    
}
for (let i = 0; i < allNumberBtns.length; i++) {
    allNumberBtns[i].addEventListener('click',allBtns)
}
for (let i = 0; i < allOperators.length; i++) {
    allOperators[i].addEventListener('click',allBtns)
}
clearbtn.addEventListener('click', clear)
equals.addEventListener('click', equalsOperation)
