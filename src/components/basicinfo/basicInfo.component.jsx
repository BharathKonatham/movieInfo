import React from 'react'
import './basicinfo.styles.scss'
const BasicInfo = ({data}) => {
    const {Title,Year,Rated,Released,Runtime,Genre,Poster} = data
  return (
    <div className='basicInfo'>
        <div className='textContent'>
            <span><h4>Title :</h4><p> {Title}</p></span>
            <span><h4>Year :</h4><p> {Year}</p></span>
            <span><h4>Rated :</h4><p> {Rated}</p></span>
            <span><h4>Released :</h4> <p>{Released}</p></span>
            <span><h4>Runtime :</h4> <p>{Runtime}</p></span>
            <span><h4>Genre :</h4><p> {Genre}</p></span>  
        </div>
        <div className='imageContainer'>
        <img src={Poster} alt={Title} />
        </div>
       
    </div>
  )
}

export default BasicInfo
