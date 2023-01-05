import React from 'react'

 function Review({review, teams}) {
  
    return (
    <div className='Review'>
    
        <h3>"{review.comments}"</h3>
        <h5><b>{teams[review.team_id].name}</b></h5>
    </div>
  )
}

export default Review 