const express = require('express')
const cors = require('cors')
const {getMovies, addMovie, updateMovie, deleteMovie} = require('./controller.js')

const app = express()
app.use(express.json())
app.use(cors())

app.get("/api/movies", getMovies)
app.post("/api/movies", addMovie)
app.put("/api/movies/:id", updateMovie)
app.delete("/api/movies/:id", deleteMovie)



app.listen(4004, () => console.log('server up on 4004'))