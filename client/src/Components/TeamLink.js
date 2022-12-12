import React from 'react'
import {Link} from 'react-router-dom'

function TeamLink({team}) {
  
    return (
    <div>
      <Link to={`/teams/${team.id}`} style={{color: 'white'}}>

        <li>{team.name}</li>       
      </Link>
    </div>
  )
}

export default TeamLink