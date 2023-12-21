import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function Header() {
  const [movie, setMovie] = React.useState("")
  const navigate = useNavigate()
  function handleSubmit(e){
    e.preventDefault()
    navigate(`results/${movie}`)
    setMovie("")
  }
  return (
    <header id='top'>
      <Link to="/" className="title">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#ffff"><path d="M20.327 13.099l-.427-.427.71-.71.424.427-.707.71zm-.417 4.467l-.708-.709-.428.427.707.709.429-.427zm4.09-11.566v16h-24v-16h10.888l-2.888-3.375.781-.625 3.219 3.75 3.219-3.75.781.625-2.888 3.375h10.888zm-21.049 12.993c.674.671 3.362 1.007 6.05 1.007 2.687 0 5.375-.336 6.049-1.007.633-.632.95-2.851.95-5.059 0-2.181-.31-4.351-.93-4.97-.637-.635-3.399-.964-6.141-.964-2.681 0-5.346.314-5.997.964-.603.601-.913 2.668-.931 4.786-.018 2.268.299 4.594.95 5.243zm15.049-5.9c0 1.021.796 1.851 1.802 1.904 1.097.059 2.009-.814 2.009-1.904 0-1.049-.85-1.906-1.907-1.906-1.048 0-1.904.847-1.904 1.906zm4-3.093v-.555h-4v.555h4zm-4 7.988c0 1.062.86 1.907 1.903 1.907 1.058 0 1.907-.858 1.907-1.907s-.85-1.906-1.907-1.906c-1.047 0-1.903.846-1.903 1.906zm4-9.988h-4v.555h4v-.555z"/></svg>
        <h1>Flex<span>N</span>ET</h1>
      </Link>
      <form onSubmit={handleSubmit}>
          <input 
          name='movie'
          type="search"
          placeholder='Movie Name'
          value={movie}
          onChange={(e)=> setMovie(e.target.value)}
          />
          <button>Search</button>
        </form>
        <Link className='list-btn' to="list">Watch List</Link>
    </header>
  )
}

export default Header
