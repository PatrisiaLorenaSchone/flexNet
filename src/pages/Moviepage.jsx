import React from 'react'
import NotFound from './NotFound'
import spinner from '../assets/spinner.svg'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { IoAddCircleOutline } from "react-icons/io5";
import {FilmContext} from '../App'

function Moviepage() {
  const {setList} = React.useContext(FilmContext)
  let { name } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [movie, setMovie] = React.useState("")
  const[error, setError] = React.useState(false)

  function handleAdd(){
    setList((prevList)=>[...prevList, movie.title])
  }

  React.useEffect(()=>{
      const fetchMovie = async()=>{
        setLoading(true) 
        const response = await fetch(`https://www.omdbapi.com/?apikey=2e6aad13&t=${name}`)
        const data = await response.json()
        setMovie({
          id: data.imdbID,
          title: data.Title,
          year: data.Year,
          genre: data.Genre,
          description: data.Plot,
          rating: data.imdbRating,
          image: data.Poster,
        });
        setLoading(false)
      }
      fetchMovie()
  }, [name])

if (loading) {
    return( 
      <div className='loading'>
      <img src={spinner} alt="" />
        <h2>Loading...</h2>
      </div>
    )
}

  return (
    !movie ? <NotFound/> :
    <>
    <div className='dashboard-container'>
      <div className='movie-dashboard'>
        <img src={movie.image} alt={movie.title}/>
        <div>
        <h2>{movie.title} {movie.year}</h2> 
        <p>{movie.genre}</p>
        <p>{movie.description}</p> 
        <small className="rating">Rating IMDB: {movie.rating}</small>
        <div onClick={handleAdd} className='add-btn'> Add to Watch list</div>
        </div>
      </div>
    </div>
    {/* <div className='info-section'></div> */}
    </>
  )
}
//`<div id="movie-container" class="movie-container"><img src="${data.Poster}"/><p class="badge">${data.Genre}</p><h3>${data.Title}, ${data.Year}</h3> <p>${data.Plot}</p> <small class="rating">Rating IMDB: ${data.imdbRating}</small></div>`
export default Moviepage
