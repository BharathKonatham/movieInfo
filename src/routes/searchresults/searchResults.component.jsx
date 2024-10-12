import React from 'react'
import { useLocation } from 'react-router-dom';
import SearchBox from '../../components/searchbox/searchbox.component';
const SearchResults = () => {
  const location = useLocation();
  const {data,movieName} = location.state;
  const {totalResults,Search,Response} = data
  console.log(movieName)
  return (
    <div className='resultsContainer'>
    <SearchBox />
    
    </div>
  )
}

export default SearchResults
