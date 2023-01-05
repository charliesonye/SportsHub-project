import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

 function AddPlayerForm({teams, handleAddPlayer}) {
    const [playerName, setPlayerName] = useState('')
    const [playerPosition, setPlayerPosition] = useState('')
    const [teamIdSelection, setTeamIdSelection] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
  
        fetch('/players', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: playerName,
                position: playerPosition,
                team_id: teamIdSelection
            })
        })
        .then((res)=> res.json())
        .then((newPlayer)=> {
            handleAddPlayer(newPlayer)
            navigate('/teams')
        })
    }


    return (
    <div>
        <h3>Add Players: </h3><hr />
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type='text' value={playerName} onChange={(e)=> setPlayerName(e.target.value)}/><br/>
            <label>Position: </label>
            <input type='text' value={playerPosition} onChange={(e)=> setPlayerPosition(e.target.value)}  />
            <select name='Team Id' onChange={(e) => setTeamIdSelection(e.target.value)}>
            <option value='prompt' > Please Select Team:</option>
            {
              teams.map((team)=> (
                <option key={team.id} value={team.id}>{team.name}</option>
              ))
            }
            </select>
            <input type='submit' />
            
        </form>
    </div>
  )
}

export default AddPlayerForm