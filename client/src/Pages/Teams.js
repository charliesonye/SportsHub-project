import React, {useState, useEffect} from 'react'

import TeamLink from '../Components/TeamLink'
import AddTeamsForm from '../Components/AddTeamsForm'
import AddPlayerForm from '../Components/AddPlayerForm'

function Teams({teams, onAddTeam, comps, handleAddPlayer}) {
  const [showTeamPlayer, setShowTeamPlayer] = useState(false)
  
  
  

  const teamsList = teams.map((team)=> <TeamLink key={team.id} team={team} showTeamPlayer={showTeamPlayer} /> )
  
  return (
    <div>
      <h2>Teams: </h2><hr/>
      
      {teamsList}
      <br/><AddTeamsForm comps={comps} onAddTeam={onAddTeam} />
      <br/><AddPlayerForm teams={teams} handleAddPlayer={handleAddPlayer}/>
    </div>
  )
}

export default  Teams