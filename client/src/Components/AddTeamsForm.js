import React, {useState} from 'react'


 function AddTeamsForm({comps, onAddTeam}) {
  const [teamName, setTeamName] = useState('')
  const [compSelection, setCompSelection] = useState('')
  const [errors, setErrors] = useState('')
    
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
    }).then((res)=> {
        if(res.ok){
            res.json().then((data)=> onAddTeam(data))
                
            }else {
            res.json().then((errors)=> setErrors(errors.errors[0]))
        }
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
            <h3 style={{color: 'red'}}>{errors}</h3>
        </form>
    </div>
  )
}

export default AddTeamsForm