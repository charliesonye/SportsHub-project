import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import EditComp from '../Components/EditComp'


 function CompTeams({onDeleteComps, onUpdateComps}) {
  const [comp, setComp] = useState({
    teams: []
  })
  const [showEdit, setShowEdit] = useState(false)

  const params = useParams()
  const navigate = useNavigate()
 
  useEffect(()=> {
    fetch(`/competitions/${params.id}`)
    .then((res)=> res.json())
    .then((comp)=> setComp(comp))
  }, [])

  function handleDelete(){
    fetch(`/competitions/${params.id}`, {
      method: 'DELETE'
    })
    onDeleteComps(params.id)
    navigate('/competitions')

  }

    return (
    <div>

        <button onClick={handleDelete}>Remove Competition</button>
        <button onClick={()=> setShowEdit(!showEdit)}>Edit Competition Name</button>
        { showEdit ? 
            (<EditComp 
              onUpdateComps={onUpdateComps} 
              onShowEdit={setShowEdit} 
              showEdit={showEdit} 
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