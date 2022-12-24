import React, {useState} from 'react'
import CompetitionLink from '../Components/CompetitionLink'
import CompTeams from './CompTeams'

 function Competitions({comps, onAddComps}) {
  const [compName, setCompName] = useState('')
  const [showCompTeam, setShowCompTeam] = useState(false)
  function handleSubmit(e){
    e.preventDefault()
  
    fetch('/competitions', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({name: compName})
    })
    .then((res)=> res.json())
    .then((data)=> {
      
      onAddComps(data) 
      setCompName({name: ''})
    })

  }

 

  const compList = comps.map((comp) => <CompetitionLink 
    key= {comp.id} 
    comp={comp}
    showCompTeam={showCompTeam}
    setShowCompTeam={setShowCompTeam}
    />)
  return (
   <div>
      
        Competitions<hr/>
        <button onClick={()=>setShowCompTeam(!showCompTeam)} >
          Show Team List
        </button>
      {compList}
      

      <br/>
      <form onSubmit={handleSubmit}>
        <label>Input New Competition:</label>
        <input 
          name='name' 
          type='text' 
          value={compName}
          onChange={(e) => setCompName(e.target.value)}
        />
        <input 
          type='submit'
        />
      </form>
     
    </div>
  )
}

export default Competitions