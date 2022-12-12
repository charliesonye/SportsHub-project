import React, {useState, useEffect} from 'react'
import Players from '../Components/Players'
import Coaches from '../Components/Coaches'
import TeamLink from '../Components/TeamLink'
import AddTeamsForm from '../Components/AddTeamsForm'

function Teams({teams, onAddTeams, comps}) {
  

  const teamsList = teams.map((team)=> <TeamLink key={team.id} team={team} /> )
  
  return (
    <div>
      <h2>Teams: </h2><hr/>
      
      {
        teamsList
      }
      <br/><AddTeamsForm comps={comps} onAddTeams={onAddTeams} />
    </div>
  )
}

export default  Teams