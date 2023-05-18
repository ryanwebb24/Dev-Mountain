let testBtn = document.querySelector("#test-btn")
let nameInput = document.querySelector("#name")
let loginForm = document.querySelector("#login-form")

testBtn.addEventListener("click", () => {
    axios.get("http://localhost:4000/japan")
    .then(res => {
        document.write(res.data)
    })
    .catch(err => console.log(err))
})


loginForm.addEventListener("submit", event => {
    event.preventDefault()
    let user = {
        name: nameInput.value
    }
    console.log(user);
    axios.post("http://localhost:4000/login", user)
    .then(res => alert(res.data))
    .catch(err => console.log(err))
})