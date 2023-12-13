import React from 'react'
import NotFound from './NotFound'
import { Link, useParams, useSearchParams } from 'react-router-dom'

function Moviepage() {
  let { name } = useParams()
  const [movie, setMovie] = React.useState("")
  const[error, setError] = React.useState(false)

  React.useEffect(()=>{
    fetch(`https://www.omdbapi.com/?apikey=2e6aad13&t=${name}`)
    .then(res => res.json())
    .then(data =>{ 
    if(data.Title){
      setMovie({
        id: data.imdbID,
        title: data.Title,
        year: data.Year,
        genre: data.Genre,
        description: data.Plot,
        rating: data.imdbRating,
        image: data.Poster,
      })
      setError(false)
    }else{
      setError(true)
    }
  })
    .catch(err => console.log(err))
  }, [movie, error, name])

  return (
    error ? <NotFound/> :
    movie &&
    <div className='main-container'>
      <div className='movie-dashboard'>
        <img src={movie.image} alt={movie.title}/>
        <div>
        <h2>{movie.title} {movie.year}</h2> 
        <p>{movie.genre}</p>
        <p>{movie.description}</p> 
        <small className="rating">Rating IMDB: {movie.rating}</small>
        </div>
      </div>
    </div>
  )
}
//`<div id="movie-container" class="movie-container"><img src="${data.Poster}"/><p class="badge">${data.Genre}</p><h3>${data.Title}, ${data.Year}</h3> <p>${data.Plot}</p> <small class="rating">Rating IMDB: ${data.imdbRating}</small></div>`
export default Moviepage
