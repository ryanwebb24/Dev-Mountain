const inputFeild = document.querySelector('.movie-input')
const movieList = document.querySelector('ul')
const movieForm = document.querySelector('.add-movie')

function addMovie(event){
    event.preventDefault()
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movieTitle.textContent = inputFeild.value
    movie.appendChild(movieTitle)
    movie.appendChild(deleteBtn)
    movieList.appendChild(movie)
    inputFeild.value = ''
}
function deleteMovie(event){
    event.preventDefault()
    event.target.parentNode.remove()
}

movieForm.addEventListener('submit', addMovie)



