import React from 'react'

 function Review({review}) {
  
    return (
    <div className='Review'>
        {/* <h3><li></li></h3> */}
        <h3>{review.comments}</h3>
    </div>
  )
}

export default Review 