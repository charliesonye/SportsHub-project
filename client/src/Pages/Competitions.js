import React, {useState, useEffect} from 'react'
import CompetitionLink from '../Components/CompetitionLink'

 function Competitions({comps, onAddComps}) {
  const [compName, setCompName] = useState('')
  
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

 

  const compList = comps.map((comp) => <CompetitionLink key= {comp.id} comp={comp} />)
  return (
    <div>
     Competitions<hr/>
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