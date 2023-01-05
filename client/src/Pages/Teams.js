import React, {useState, useEffect} from 'react'
import TeamLink from '../Components/TeamLink'
import AddTeamsForm from '../Components/AddTeamsForm'
import AddPlayerForm from '../Components/AddPlayerForm'

function Teams({teams, onAddTeam, comps}) {
  const [showTeamPlayer, setShowTeamPlayer] = useState(false)
  const [players, setPlayers] = useState([])
  // const [playerName, setPlayerName] = useState('')
  // const [playerPosition, setPlayerPosition] = useState('')
  // const [teamIdSelection, setTeamIdSelection] = useState('')
  
  useEffect(()=>{
    fetch('/players')
    .then((res)=>res.json())
    .then((data)=> setPlayers(data) )
    }, [])

    function handleAddPlayer(newPlayer){
      setPlayers([...players, newPlayer])
  }
  
  

  const teamsList = teams.map((team)=> <TeamLink key={team.id} team={team} showTeamPlayer={showTeamPlayer} /> )
  
  return (
    <div>
      <h2>Teams: </h2><hr/>
      
      {teamsList}
      <br/><AddTeamsForm comps={comps} onAddTeam={onAddTeam} />
      <br/><AddPlayerForm teams={teams} handleAddPlayer={handleAddPlayer} players={players} />
    </div>
  )
}

export default  Teams