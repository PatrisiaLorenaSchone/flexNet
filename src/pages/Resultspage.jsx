import React from 'react'
import NotFound from './NotFound'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import placeholder from "../assets/placeholder.png"


function Resultspage() {
    let { name } = useParams()
    const [error, setError] = React.useState(false)
    const [arrOfMovies, setArrOfMovies] = React.useState([])

  
    React.useEffect(()=>{
      fetch(`https://www.omdbapi.com/?apikey=2e6aad13&s=${name}`)
      .then(res => res.json())
      .then(data =>{ 
        if(data.Search){
            setArrOfMovies(data.Search)
            setError(false)
        }else{
            setError(true)
        }
    })
      .catch(err => {setError(true); console.log(err)})
    }, [name])
  

    let results  = arrOfMovies.map((movie)=>{
        return(
          <div key={movie.imdbID} className='movie-container'>
            <Link to={"/movie/" + movie.Title}><img src={movie.Poster ? movie.Poster : placeholder} alt={movie.Title}/></Link>
            <div>
            <h3>{movie.Title} {movie.Year}</h3> 
            </div>
          </div>
        )
    })

    return (
      error ? <NotFound/> :
      <div className='results-container'>
        {results ? results : <h1>Loading...</h1>}
      </div>
    )
  }

export default Resultspage
