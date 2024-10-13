import React from 'react'
import SearchBox from '../../components/searchbox/searchbox.component'
import './home.styles.scss'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { fetchMoviesTen } from '../../utils/fetchData';
import { useDispatch } from 'react-redux';
import { setMovlieList } from '../../store/movieList/movlieList.actions';

const Home = () => {

  const [movieName,setMovieName] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleKeyEnter = async (event)=>{
    
    if(event.key === 'Enter'){
      console.log('enter key')
      dispatch(setMovlieList([],null))
      const {Search,totalResults,Response} = await fetchMoviesTen(movieName)
      // const data = await fetchMoviesTen(movieName)
      console.log(Search,totalResults,Response)
      if(Response === 'True'){
        //dispatch(setMovlieList(Search,totalResults))
        navigate('./searchresults',{state:{movieName}})//}
      }  
    }
      
  }
 
  return (
    <div className='home'>
      <p>Search movie name here</p>
        <SearchBox setMovieName = {setMovieName} handleKeyEnter={handleKeyEnter}/>
    </div>
  )
}

export default Home
