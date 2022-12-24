import React, {useState, useEffect} from 'react'
import TeamLink from '../Components/TeamLink'
import AddTeamsForm from '../Components/AddTeamsForm'

function Teams({teams, onAddTeam, comps}) {
  const [showTeamPlayer, setShowTeamPlayer] = useState(false)
  const [players, setPlayers] = useState([])
  const [playerName, setPlayerName] = useState('')
  const [playerPosition, setPlayerPosition] = useState('')
  const [teamIdSelection, setTeamIdSelection] = useState('')
  
  useEffect(()=>{
    fetch('/players')
    .then((res)=>res.json())
    .then((data)=> setPlayers(data) )
    }, [])

    function handleAddPlayer(newPlayer){
      setPlayers([...players, newPlayer])
  }
  
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
      })
  }

  const teamsList = teams.map((team)=> <TeamLink key={team.id} team={team} showTeamPlayer={showTeamPlayer} /> )
  
  return (
    <div>
      <h2>Teams: </h2><hr/>
      
      {teamsList}
      <br/><AddTeamsForm comps={comps} onAddTeam={onAddTeam} />
      <h3>Add Players: </h3><hr />
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type='text' value={playerName} onChange={(e)=> setPlayerName(e.target.value)}/><br/>
            <label>Position: </label>
            <input type='text' value={playerPosition} onChange={(e)=> setPlayerPosition(e.target.value)}  />
            <select name='Team Id' onChange={(e) => setTeamIdSelection(e.target.value)}>
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

export default  Teams