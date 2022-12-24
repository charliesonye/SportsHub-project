import React from 'react'
import {Link} from 'react-router-dom'
import CompTeams from '../Pages/CompTeams'
export const CompContext  = React.createContext()

function CompetitionLink({comp, showCompTeam}) {
  
  
    return (
    <div>
      
      {comp.name}
      <br/>
        {
          showCompTeam?
            (
              <CompTeams comp={comp}/>
            )
              :
            (
              null
            )

        }
        
      
        
    </div>
  )
}

export default CompetitionLink