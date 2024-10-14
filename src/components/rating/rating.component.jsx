import React from 'react'
import './rating.styles.scss'
const Rating = ({data}) => {


  return (
    <div className='ratingContainer'>
       {
        data?.map((rater)=>(
            <div className='rating' key={rater.Source}>
                <h3>{rater.Source}</h3>
                <p>{rater.Value}</p>
            </div>
            
        )
       )}
    </div>
  )
}

export default Rating
