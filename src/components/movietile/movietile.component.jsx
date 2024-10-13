import React from 'react'
import Movie from '../movie/movie.component'
import './movietile.styles.scss'
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
