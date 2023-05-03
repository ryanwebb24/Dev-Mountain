let movies = require("./db.json")
let globalId = 11

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies)
    },
    addMovie: (req,res) => {
        let {title, rating, imageURL} = req.body
        if (!title || !rating || ! imageURL){
            res.status(400).send('New movies must have a title, rating and image URL!')
        } else {
            let newMovie = {
                title,
                rating: +rating,
                imageURL,
                id: globalId
            }
            globalId++
            movies.push(newMovie)
            res.status(200).send(movies)
        }
    },
    updateMovie: (req, res) => {
        const {id} = req.params
        const {type} = req.body
        let index = movies.findIndex(movie => +movie.id === +id)
        if (movies[index].rating === 5 && type === 'plus'){
            res.status(400).send('Movies cannot be rated above a 5')
        } else if (movies[index].rating === 0 && type === 'minus'){
            res.status(400).send('Movies cannot be rated below a 0')
        } else if (type === 'plus'){
            movies[index].rating++
            res.status(200).send(movies)
        } else if (type === 'minus'){
            movies[index].rating--
            res.status(200).send(movies)
        } else {
            res.sendStatus(400)
        }
    },
    deleteMovie: (req, res) => {
        const {id} = req.params
        let index = movies.findIndex(movie => +movie.id === +id)
        movies.splice(index, 1)
        res.status(200).send(movies)

    }
}