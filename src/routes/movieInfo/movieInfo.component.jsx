import React, { useEffect, useState } from 'react'
import './movieInfo.styles.scss'
import { useLocation } from 'react-router-dom'
import { fetchMovieInfo } from '../../utils/fetchData'
import BasicInfo from '../../components/basicinfo/basicInfo.component'
import Rating from '../../components/rating/rating.component'
const MovieInfo = () => {
    const location = useLocation()
    const imdbID = location.state?.imdbID
    const [movieInfo,setMovieInfo] = useState({})
    const {Title,Year,Rated,Released,Runtime,Genre,Poster,Ratings} = movieInfo

    console.log(Ratings)
    const basicInfo ={
        Title,
        Year,
        Rated,
        Released,
        Runtime,
        Genre,
        Poster
    }
    
    const fetchMoviedata = async ()=>{
        try {
            const data = await fetchMovieInfo(imdbID)
           if(data.Response === 'True'){
            setMovieInfo(data)
           }
           
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        fetchMoviedata()
    },[])

    return (
        <div className='movieInfoContainer'>
            <BasicInfo data = {basicInfo}/>
            <Rating data = {Ratings}/>
        </div>
    )
}

export default MovieInfo
