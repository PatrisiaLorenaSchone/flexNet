import React from 'react'
import NotFound from './NotFound'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import placeholder from "../assets/placeholder.png"
import spinner from "../assets/spinner.svg"


function Resultspage() {
    let { name } = useParams()
    const [loading, setLoading] = React.useState(false)
    const [arrOfMovies, setArrOfMovies] = React.useState([])

  
    React.useEffect(()=>{
      const fetchMovies = async()=>{
        setLoading(true)
        const response = await fetch(`https://www.omdbapi.com/?apikey=2e6aad13&s=${name}`)
        const movies = await response.json()
        setArrOfMovies((movies.Search))
        setLoading(false)
      };
      fetchMovies()

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
      <div className='results-container'>
        {!arrOfMovies ? <NotFound/> : 
        arrOfMovies.map((movie)=>{
          return(
            <div key={movie.imdbID} className='movie-container'>
              <Link to={"/movie/" + movie.Title}><img src={movie.Poster ? movie.Poster : placeholder} alt={movie.Title}/></Link>
              <div>
              <h3>{movie.Title} {movie.Year}</h3> 
              </div>
            </div>
          )
      })}
      </div>
    )
  }

export default Resultspage
