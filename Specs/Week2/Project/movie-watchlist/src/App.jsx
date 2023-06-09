import { useState, useEffect } from "react"
import "./App.css"
import axios from "axios"


import Header from "./components/Header"
import MovieScreen from "./components/MovieScreen"
import Watchlist from "./components/Watchlist"

function App() {
  const [list, setList] = useState([])
  const [movieList, setMovieList] = useState([])
  const [page, setPage] = useState(1)
  useEffect(() => {
    getData()
  }, [page])
  function getData() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => setMovieList(res.data.results))
      .catch((err) => console.log(err))
  }
  function addMovie(movie) {
    setList((prevList) => [...prevList, movie])
  }
  function removeMovie(movie) {
    let newState = list.filter((newMovie) => newMovie !== movie)
    setList(newState)
  }

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          list={list}
          page={page}
          setPage={setPage}
          movieList={movieList}
          addMovie={addMovie}
          removeMovie={removeMovie}
        />
        <Watchlist list={list} removeMovie={removeMovie}/>
      </main>
    </div>
  )
}

export default App
