import React from 'react'
import { FilmContext } from '../App';
import { Link } from 'react-router-dom';

function FilmList() {
  const{list, setList} = React.useContext(FilmContext)
  let set = new Set(list)
  let movieList = [...set]
  let empty = "It looks like your list is empty"
  let listItems = movieList.map((movie)=>{
    return(
        <li key={movie}>
            <Link to={`/movie/${movie}`} >{movie}</Link>
        </li>
    )
  })

  return (
    <div className='main-container list-page'>
    <h3>My Movie List</h3>
    <div className='list'>
        <ul>
        { movieList.length == 0 ? empty : listItems}
        </ul>
    </div>
    </div>
  )
}

export default FilmList
