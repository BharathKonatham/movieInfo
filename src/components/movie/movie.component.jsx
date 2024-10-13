import React from 'react'
import './movie.styles.scss'
const Movie = ({movie}) => {
  return (
    <div className='movieCotanier'>
        <img src={movie.Poster} alt={movie.Title}/>
        <p>{movie.Title} ({movie.Year})</p>
    </div>
  )
}

export default Movie
