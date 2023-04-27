// this accesses the p element with id of intro(this shows the whole object)
let referenceToP = document.getElementById("intro")
// this shows the whole object console.log(referenceToP);
// this will show the text on the inside console.log(referenceToP.innerHTML);
let buttonElement = document.querySelector('#my-button')
// this is the fuction that does something that will be used as a call back 
let clickHandler = () => {
    alert("Button clicked, yo!")
}
// this is the call back that whenever the button is clicked then it will run the callback 
buttonElement.addEventListener('click', clickHandler)
