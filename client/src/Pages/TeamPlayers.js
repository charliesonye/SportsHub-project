import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Player from './Player'


 function TeamPlayers() {
    const [team, setTeam] = useState({
        players: []
    })
    const params = useParams()

    useEffect(()=> {
        fetch(`/teams/${params.id}`)
        .then((res)=>res.json())
        .then((data)=> setTeam(data))
    }, [])

   
  
    const teamList = team.players.map((player)=> <Player key={player.id} player={player} />)
    return (
    <div>
        <h2>{team.name}</h2><hr/>
        {teamList}
    </div>
  )
}

export default TeamPlayers