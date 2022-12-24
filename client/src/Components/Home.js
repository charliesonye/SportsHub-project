import React from 'react'
import Reviews from '../Pages/Reviews'
import AddReviewForm from './AddReviewForm'

function Home({teams}) {
 
  return (
    <div>
      <h1>Fantasy Football Hub</h1>
      <h3>Where can you can imagine your favorite players on different teams!</h3>
     
      <Reviews teams={teams} />
    </div>
    
   
    
  )
}

export default  Home