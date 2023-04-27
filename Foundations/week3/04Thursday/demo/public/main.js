console.log('connected')

const getAllBtn = document.querySelector('#all')
const charBtns = document.querySelectorAll('.char-btns')
const ageForm = document.querySelector('#age-form')
const ageInput = document.querySelector('#age-input')
const createForm = document.querySelector('#create-form')
const newFirstInput = document.querySelector('#first')
const newLastInput = document.querySelector('#last')
const newGenderDropDown = document.querySelector('select')
const newAgeInput = document.querySelector('#age')
const newLikesText = document.querySelector('textarea')
const charContainer = document.querySelector('section')

const baseURL = "http://localhost:4000"

function createCharacterCard(char) {
  let charCard = document.createElement('div')
  charCard.innerHTML = `<h3>${char.firstName} ${char.lastName}</h3>
  <p>gender: ${char.gender} | age: ${char.age}</p>
  <h4>Likes</h4>
  <ul>
    <li>${char.likes[0]}</li>
    <li>${char.likes[1]}</li>
    <li>${char.likes[2]}</li>
  </ul>`

  charContainer.appendChild(charCard)
}

function clearCharacters() {
  charContainer.innerHTML = ``
}

// create a callback that will send axios.get request
function getAllChars(){
  axios.get(`${baseURL}/characters`)
  .then((response) => {
    clearCharacters()
    for (let i in response.data){
      createCharacterCard(response.data[i])
    }
  })
}
function getChar(event){
  axios.get(`${baseURL}/character/${event.target.id}`)
  .then(response => {
    clearCharacters() 
    createCharacterCard(response.data)
  })
}
function getAgeOfChars(event){
  event.preventDefault()
  clearCharacters()
  axios.get(`${baseURL}/character/?age=${ageInput.value}`)
  .then(response => {
    for (let i in response.data){
      createCharacterCard(response.data[i])
    }
  })
  .catch(err => {
    console.log(err);
  })
}
function createNewChar(event){
  event.preventDefault()
  clearCharacters()
  axios.post(`${baseURL}/character`, {
    firstName: newFirstInput.value, 
    lastName: newLastInput.value, 
    gender: newGenderDropDown.value, 
    age: newAgeInput.value, 
    likes: newLikesText.value.split(',')
  })
  .then(response => {
    for (let i in response.data){
      createCharacterCard(response.data[i])
    }
  })
  .catch(err => console.log(err))
  newFirstInput.value = ''
  newLastInput.value = '' 
  newGenderDropDown.value = ''
  newAgeInput.value = ''
  newLikesText.value = ''
}
//function deleteChar(){

//}
// event listeners
getAllBtn.addEventListener('click', getAllChars)
ageForm.addEventListener('submit', getAgeOfChars)
createForm.addEventListener('submit', createNewChar)
for(let i = 0; i < charBtns.length; i++){
  charBtns[i].addEventListener('click', getChar)
}
