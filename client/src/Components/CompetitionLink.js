import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import CompTeams from '../Pages/CompTeams'
export const CompContext  = React.createContext()

function CompetitionLink({comp, showCompTeam}) {
  
  const navigate = useNavigate()

    return (
    <div>
      {/* <button  >{comp.name} </button> */}
      <Link to={`/competitions/${comp.id}`}>{comp.name}</Link>
      <br/>
        {/* {
          showCompTeam?
            (
              <CompTeams comp={comp}/>
            )
              :
            (
              null
            )

        } */}
        
      
        
    </div>
  )
}

export default CompetitionLink