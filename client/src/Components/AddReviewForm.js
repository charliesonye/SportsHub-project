import React, {useState} from 'react'

function AddReviewForm({teams, onAddReviews}) {
  
  const [teamId, setTeamId] = useState('')
  const [comments, setComments] = useState('')
    

  function handleSubmit(e){
    e.preventDefault()

    fetch('/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            team_id: teamId,
            comments
        })
    })
    .then((res)=>res.json())
    .then((data)=> {
        onAddReviews(data)
    })
  }
  return (
    <div>
        <form>
            <h3>Add A Team Review</h3>
            <select name='team id' onChange={(e)=> setTeamId(e.target.value)} >
                {
                    teams.map((team)=>(
                        <option key={team.id} value={team.id}  >{team.name}</option>
                    ))
                }
            </select><br/>
            <input name='comments' type='text' value={comments} onChange={(e)=>setComments(e.target.value)} />
        </form>
    </div>
  )
}

export default AddReviewForm