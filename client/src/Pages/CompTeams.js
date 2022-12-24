import React, {useState, useEffect,useContext} from 'react'
import { CompContext } from '../Components/CompetitionLink'
import {useParams, useNavigate} from 'react-router-dom'
import EditComp from '../Components/EditComp'


 function CompTeams({onDeleteComps, onUpdateComps, comp}) {
  // const [comp, setComp] = useState({
  //   teams: []
  // })
  const [showEdit, setShowEdit] = useState(false)

  const params = useParams()
  const navigate = useNavigate()
 
  // useEffect(()=> {
  //   fetch(`/competitions/${params.id}`)
  //   .then((res)=> res.json())
  //   .then((comp)=> setComp(comp))
  // }, [params.id])

  function handleDelete(){
    fetch(`/competitions/${params.id}`, {
      method: 'DELETE'
    })
    onDeleteComps(params.id)
    navigate('/competitions')

  }

    return (
    <div className='CompTeamContainer'>

        <button onClick={handleDelete}>Remove Competition</button>
        <button onClick={()=> setShowEdit(!showEdit)}>Edit Competition Name</button>
        { showEdit ? 
            (<EditComp 
              onUpdateComps={onUpdateComps} 
              onShowEdit={setShowEdit} 
              showEdit={showEdit} 
              // setComp={setComp}
            />
            )
            : 
            (<h2>{comp.name}</h2> )
         
         } 
        <h4>Teams Participating:</h4><hr/>
        {
            comp.teams.map((team)=>(
                <li key={team.id} >{team.name}</li>
            ))
        }
    </div>
  )
}

export default CompTeams