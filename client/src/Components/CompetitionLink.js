import React from 'react'
import {Link} from 'react-router-dom'

function CompetitionLink({comp}) {
  
  
    return (
    <div>
        <Link to={`/competitions/${comp.id}`} style={{color: 'white'}} >
         {comp.name}
        </Link>
        
    </div>
  )
}

export default CompetitionLink