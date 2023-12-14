import React from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import SecondaryTitle from '../components/SecondaryTitle'
import { RiMovie2Line } from "react-icons/ri";
import { BiCameraMovie } from "react-icons/bi";
import { BiMoviePlay } from "react-icons/bi";
import { MdOutlineLocalMovies } from "react-icons/md";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";


let movieData = [
  {
    id: "tt0816692",
    title: "Interstellar",
    year: 2014,
    genre: "Adventure, Drama, Sci-Fi",
    description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    rating: 8.7,
    image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    id: "tt8228288",
    title: "The Platform",
    year: 2019,
    genre: "Horror, Sci-Fi, Thriller",
    description: "A vertical prison with one cell per level. Two people per cell. Only one food platform and two minutes per day to feed. An endless nightmare trapped in The Hole.",
    rating: 7.0,
    image: "https://m.media-amazon.com/images/M/MV5BMzllNmRjYWItNjlhNS00MjcyLWIyODEtMTg0ZjBiNTNhNzQwXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_SX300.jpg"
  },
  {
    id: "tt0070511",
    title: "Papillon",
    year: 1973,
    genre: "Biography, Crime, Drama",
    description: "A French convict in the 1930s befriends a fellow criminal as the two of them begin serving their sentence in the South American penal colony on Devil's Island, which inspires the man to plot his escape.",
    rating: 8.0,
    image: "https://m.media-amazon.com/images/M/MV5BZGRjZjQ0NzAtYmZlNS00Zjc1LTk1YWItMDY5YzQxMzA4MTAzXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg"
  },
  {
    id: "tt0482571",
    title: "The Prestige",
    year: 2006,
    genre: "Drama, Mystery, Sci-Fi",
    description: "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    rating: 8.5,
    image: "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg"
  },
  {
    id: "tt6710474",
    title: "Everything Everywhere All at Once",
    year: 2022,
    genre: "Action, Adventure, Comedy",
    description: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
    rating: 8.5,
    image: "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg"
  },
  {
    id: "tt0137523",
    title: "Fight Club",
    year: 1999,
    genre: "Drama",
    description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    rating: 8.8,
    image: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
  },
  {
    id: "tt7939766",
    title: "I'm Thinking of Ending Things",
    year: 2020,
    genre: "Drama, Thriller",
    description: "Full of misgivings, a young woman travels with her new boyfriend to his parents' secluded farm. Upon arriving, she comes to question everything she thought she knew about him, and herself.",
    rating: 6.6,
    image: "https://m.media-amazon.com/images/M/MV5BNWMyZTA1MTItMzFhOS00NGY5LWJlZDMtMzczZmRjOThkMmViXkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_SX300.jpg"
  },
  {
    id: "tt2553424",
    title: "The Infinite Man",
    year: 2014,
    genre: "Comedy, Fantasy, Sci-Fi",
    description: "A man's attempt to construct the ultimate romantic weekend backfires when his quest for perfection traps his lover in an infinite loop.",
    rating: 6.2,
    image: "https://m.media-amazon.com/images/M/MV5BNzJhMDRiZmEtMDY4NS00NmM5LThmYTctYzc2ZjVhMzkxYjI0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    id: "tt2101383",
    title: "Knight of Cups",
    year: 2015,
    genre: "Drama, Fantasy, Romance",
    description: "A writer indulging in all that Los Angeles and Las Vegas have to offer, undertakes a search for love and self via a series of adventures with six different women.",
    rating: 5.6,
    image: "https://m.media-amazon.com/images/M/MV5BMjQyOTcwODIyNF5BMl5BanBnXkFtZTgwMDE4OTI4NzE@._V1_SX300.jpg"
  },
  {
    id: "tt1375666",
    title: "Inception",
    year: 2010,
    genre: "Action, Adventure, Sci-Fi",
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    rating: 8.8,
    image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
  },
  {
    id: "tt0110413",
    title: "Léon: The Professional",
    year: 1994,
    genre: "Action, Crime, Drama",
    description: "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
    rating: 8.5,
    image: "https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
  },
  {
    id: "tt0110333",
    title: "Leave the World Behind",
    year: 2023,
    genre: "Thriler",
    description: "A family vacation is interrupted by two strangers. As the threat grows, both families must decide how best to survive the potential crisis, all while grappling with their own place in this collapsing world.",
    rating: 6.6,
    image: "https://m.media-amazon.com/images/M/MV5BMTUzM2I3NDEtMjNhYi00NTQ0LThmZDItZTMyMzM2MjJmZGRjXkEyXkFqcGdeQXVyMTU3NDU4MDg2._V1_SX300.jpg, "
  },
]
//

let trailers = ["https://www.youtube.com/embed/OAZWXUkrjPc", "https://www.youtube.com/embed/_inKs4eeHiI", "https://www.youtube.com/embed/avz06PDqDbM", "https://www.youtube.com/embed/KDUtdcU10YA", "https://www.youtube.com/embed/7mgu9mNZ8Hk"]

function Homepage() {
  const [index, setIndex] = React.useState(0)

  function next(){
    if(index < trailers.length - 1){
      setIndex( index + 1)
    }else{
      setIndex(0)
    }
  }

  function prev(){
    if(index > 0){
      setIndex( index - 1)
    }else{
      setIndex(trailers.length - 1)
    }
  }

  let movies = movieData.map((movie)=>{
    return(
    <div className='movie-container' key={movie.id}>
      <Link to={"movie/" + movie.title}><img src={movie.image} alt={movie.title}/></Link>
      <p className="badge">{movie.genre}</p>
      <h3>{movie.title}, {movie.year}</h3> 
      <p>{movie.description}</p> 
      <small className="rating">Rating IMDB: {movie.rating}</small>
    </div>
    )
  })
  return (
    <div>
      <SecondaryTitle text="Our top picks"/>
      <div className='main-container'>
      {movies}
      </div>
      <div className='hero-section'>
        <h1>Cinema Experience at Home</h1>
        <p>FlexNet is a cutting-edge movie streaming app that redefines the way you experience entertainment. With a sleek and user-friendly interface, FlexNet offers a vast library of movies spanning genres, from thrilling blockbusters to indie gems. Whether you're a cinephile or casual viewer, FlexNet provides the ultimate cinematic journey, making movie nights more flexible and enjoyable than ever before.</p>
        <a href="#top"><button>Discover</button></a>
      </div>
      <div className='marquee'>
        <div>
          <RiMovie2Line />
          <BiCameraMovie />
          <BiMoviePlay />
          <MdOutlineLocalMovies />
          <RiMovie2Line />
          <BiCameraMovie />
          <BiMoviePlay />
          <MdOutlineLocalMovies />
          <RiMovie2Line />
          <BiCameraMovie />
          <BiMoviePlay />
          <MdOutlineLocalMovies />
          <RiMovie2Line />
          <BiCameraMovie />
          <BiMoviePlay />
          <MdOutlineLocalMovies />
          <RiMovie2Line />
          <BiCameraMovie />
        </div>
        </div>
        <div className='red-section'>
          <SecondaryTitle text="2023 Trailers "/>
          <div className='carousel'>
          <FaChevronCircleLeft  className='left-arrow' onClick={prev}/>
          <iframe className='trailer-container' src={trailers[index]} allowFullScreen={true} ></iframe>
          <FaChevronCircleRight className='right-arrow' onClick={next}/>
          </div>
        </div>
    </div>
  )
}

export default Homepage

  // const [searchParams, useSearchParams] = useSearchParams()
  //const [movie, setMovie] = React.useState("")

  // React.useEffect(()=>{
  //   fetch(`https://www.omdbapi.com/?apikey=2e6aad13&t=Léon: The Professional`)
  //   .then(res => res.json())
  //   .then(data => console.log(data)
  //   )

  //   .catch(err => console.log(err))
  // }, [movie])