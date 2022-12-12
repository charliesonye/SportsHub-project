import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

 function AddTeamsForm({comps, onAddTeams}) {
  const [teamName, setTeamName] = useState('')
  const [compSelection, setCompSelection] = useState('')
    
  function handleSubmit(e){
    e.preventDefault()

    fetch('/teams', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: teamName,
            competition_id: compSelection
            
        })
    })
    .then((res)=> res.json())
    .then((data)=> {
        console.log(data)
    })
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h3>Add Team</h3><hr />
            <label>Name: </label>
            <input type='text' value={teamName} onChange={(e)=>setTeamName(e.target.value)} /><br/>
            <label>Participating in:  </label>
            <select name='Competition Id'  onChange={(e)=>setCompSelection(e.target.value)} >
            {
                comps.map((comp)=> (
                    <option key={comp.id} value={comp.id}>{comp.name} </option>
                ))
                
            }
            </select>
            <input type='submit' />
        </form>
    </div>
  )
}

export default AddTeamsForm