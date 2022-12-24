import React from 'react'
import {Link} from 'react-router-dom'
import TeamPlayers from '../Pages/TeamPlayers'

function TeamLink({team, showTeamPlayer}) {
  
    return (
    <div>
      
    {team.name}<hr/>       
    <br/>
    {
      showTeamPlayer ?
      (
        <TeamPlayers team={team} />
      )
        :
      (
        null
      )
    }
    </div>
  )
}

export default TeamLink