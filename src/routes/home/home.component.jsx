import React from 'react'
import SearchBox from '../../components/searchbox/searchbox.component'
import './home.styles.scss'
const Home = () => {
  return (
    <div className='home'>
      <p>Search movie name here</p>
        <SearchBox />
    </div>
  )
}

export default Home
