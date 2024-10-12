import React from 'react'
import './searchbox.styles.scss'
import axiosInstance from '../../utils/axios' 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { fetchMoviesTen } from '../../utils/fetchData';
const SearchBox = () => {
  const [movieName,setMovieName] = useState('')
  const navigate = useNavigate()


  
  const handleKeyEnter = async (event)=>{
    if(event.key === 'Enter'){
      const data =await fetchMoviesTen(movieName)
      data.Response === 'True' && navigate('./searchresults',{state:{data,movieName}})
    }
      
  }
  const handleChange = (e) => {
    setMovieName(e.target.value)
  }

  return (
    <div className='searchContainer'>
      <input className='searchBox' name='search' onChange={handleChange} onKeyDown={handleKeyEnter} placeholder='Enter movie name'/>
    </div>
  )
}

export default SearchBox
