import React from 'react'
import './searchbox.styles.scss'

const SearchBox = ({setMovieName,handleKeyEnter}) => {
  const handleChange = (e) => {
    setMovieName(e.target.value)
  }

  return (
    <div className='searchContainer'>
      <input className='searchBox' name='search' onChange={handleChange} onKeyDown={handleKeyEnter} placeholder='Enter movie title'/>
    </div>
  )
}

export default SearchBox
