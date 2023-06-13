import React from 'react'
import MovieCard from "./MovieCard"

function MovieScreen(props) {
  let movieDisplay = props.movieList.map(movie => <MovieCard movie={movie} addMovie={props.addMovie} removeMovie={props.removeMovie} list={props.list}/>)
  function increment() {
    props.setPage(prevPage => prevPage + 1)
  }
  function decrement() {
    props.setPage(prevPage => prevPage - 1)
  }

  return (
    <div className="page">
      <h1>Ryan's Movie Theatre</h1>
      <h3>Add a movie to your watchlist</h3>
      <div className="btn-container">
        <button onClick={increment}>Next</button>
        <button onClick={decrement}>Previous</button>
      </div>
      <div className="movie-container">
        {movieDisplay}
      </div>
    </div>
  )
}

export default MovieScreen