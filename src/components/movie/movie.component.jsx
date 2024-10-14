import React from 'react'
import './movie.styles.scss'
import { Link } from 'react-router-dom'
const Movie = ({movie}) => {
  const {imdbID} = movie
  return (
    <Link to='/searchresults/movieinfo' state={{imdbID}}>
      <div className='movieCotanier '>
          <img src={movie.Poster} alt={movie.Title}/>
          <p>{movie.Title} ({movie.Year})</p>
      </div>
    </Link>
  )
}

export default Movie
