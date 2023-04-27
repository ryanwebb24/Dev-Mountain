const counter = document.querySelector('#counter')
const minus = document.querySelector('#minus-btn')
const plus = document.querySelector('#plus-btn')
const reset = document.querySelector('#reset-btn')
const themeList = document.querySelectorAll(".theme-buttons")

// basic counter function that looks if it is plus or minus and add or subtracts to the counter 
function counterLogic(event){
    if (event.target.innerHTML === "+"){
        counter.innerHTML++
    } else if (event.target.innerHTML === "-"){
        counter.innerHTML--
    } else {
        counter.innerHTML = 0
    }
}

// the event listeners for all the counter buttons
minus.addEventListener("click", counterLogic)
plus.addEventListener("click", counterLogic)
reset.addEventListener("click", counterLogic)



function themeSwitcher(event){
    let body = document.querySelector('body')
    let main = document.querySelector('main')
    let allButtons = document.querySelectorAll('button')
    body.classList = ''
    main.classList = ''
    body.classList.add(event.target.innerHTML)
    main.classList.add(event.target.innerHTML)
    for (let btn in allButtons){
        allButtons[btn].classList = ''
        allButtons[btn].classList.add(event.target.innerHTML)
    }
}

for (let btn in themeList){
    themeList[btn].addEventListener('click', themeSwitcher)
}

