const inputFeild = document.querySelector('.movie-input')
const movieList = document.querySelector('ul')
const movieForm = document.querySelector('.add-movie')
const message = document.querySelector('#message')

function addMovie(event){
    event.preventDefault()
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movieTitle.textContent = inputFeild.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    movie.appendChild(deleteBtn)
    movieList.appendChild(movie)
    inputFeild.value = ''
}
function deleteMovie(event){
    event.preventDefault()
    event.target.parentNode.remove()
    message.textContent = "Movie Deleted!"
}
function crossOffMovie(event){
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = "Movie Watched!"
    } else {
        message.textContent = "Movie added back!"
    }
}

movieForm.addEventListener('submit', addMovie)



