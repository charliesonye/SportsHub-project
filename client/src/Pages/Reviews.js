import React, {useState, useEffect} from 'react'
import Review from '../Components/Review'
import AddReviewForm from '../Components/AddReviewForm'

 function Reviews({teams}) {
    const [reviews, setReviews] = useState([])

    useEffect(()=> {
        fetch('/reviews')
        .then((res)=> res.json())
        .then((data)=> setReviews(data))
    }, [])

    function addReviews(newReview){
        setReviews([...reviews, newReview])
    }
        const reviewsList = reviews.map((review)=> (
            <Review key={review.id}  review={review}/> 
        ))
  
        return (
    
    
    <div>
         <AddReviewForm teams={teams} onAddReviews={addReviews} />
        <h2>Reviews</h2><hr/>
        {reviewsList}
    </div>
  )
}

export default Reviews