import React, {useEffect, useState} from 'react'

 function Review({review, teams}) {

  
    return (
    <div className='Review'>
    
        <h3>"{review?.comments}"</h3>
        <h5><b>Team: {review?.team.name}</b></h5>
        <h5>Username: {review?.user.username}</h5>
    </div>
  )
}

export default Review 