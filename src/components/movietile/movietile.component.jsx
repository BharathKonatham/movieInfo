import React from 'react'
import Movie from '../movie/movie.component'
import './movietile.styles.scss'
import { Link } from 'react-router-dom'
const MovieTile = ({movieList}) => {
  return (
    <div className='movieTileContainer'>
      
      {movieList.map((movie)=>(
        <Movie key={movie.imdbID} movie={movie}/>
      ))}
      
      
    </div>
  )
}

export default MovieTile
