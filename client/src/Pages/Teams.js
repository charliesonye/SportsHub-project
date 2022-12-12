import React, {useState, useEffect} from 'react'
import Players from '../Components/Players'
import Coaches from '../Components/Coaches'

function Teams() {
  const [teams, setTeams] = useState([])

  useEffect(() =>{
    fetch('/teams')
  }, [])
  
  return (
    <div>Teams</div>
  )
}

export default  Teams