import React from 'react'
import {Link} from 'react-router-dom'
import TeamPlayers from '../Pages/TeamPlayers'

function TeamLink({team, showTeamPlayer}) {
  
    

    return (
    <div>
      
   
    <Link to={`/teams/${team.id}`}>{team.name}</Link>    
    <hr/><br/>
    {/* {
      showTeamPlayer ?
      (
        <TeamPlayers team={team} />
      )
        :
      (
        null
      )
    } */}
    </div>
  )
}

export default TeamLink