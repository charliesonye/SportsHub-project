import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Player from './Player'
import AddPlayerForm from '../Components/AddPlayerForm'


 function TeamPlayers({teams, setTeams}) {
    // const [team, setTeam] = useState({
    //     players: []
    // })
    // const [players, setPlayers] = useState([])
    // const [playerName, setPlayerName] = useState('')
    // const [playerPosition, setPlayerPosition] = useState('')
    const params = useParams()

    // useEffect(()=> {
    //     fetch(`/teams/${params.id}`)
    //     .then((res)=>res.json())
    //     .then((data)=> setTeam(data))
    // }, [team])
    // useEffect(()=>{
    //     fetch('/players')
    //     .then((res)=>res.json())
    //     .then((data)=> setPlayers(data) )
    // }, [])

    // function handleAddPlayer(newPlayer){
    //     setPlayers([...players, newPlayer])
    // }
    
    // function handleSubmit(e){
    //     e.preventDefault()

    //     fetch('/players', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             name: playerName,
    //             position: playerPosition,
    //             team_id: team.id
    //         })
    //     })
    //     .then((res)=> res.json())
    //     .then((newPlayer)=> {
    //         handleAddPlayer(newPlayer)
    //     })
    // }
  
  //   function handleAddPlayer(newPlayer){
  //     const team = teams[params.id] 
  //     team = teams[params.id].players.push(newPlayer) 
      
  //     setTeams([...teams, team])
  // }
  
    const teamList = teams[params.id - 1]?.players.map((player)=> <Player key={player.id} player={player} />)
    return (
    <div>
        <h2>Team: {teams[params.id - 1]?.name}</h2><hr />
        {teamList}

     
        {/* <h3>Add Players: </h3><hr />
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type='text' value={playerName} onChange={(e)=> setPlayerName(e.target.value)}/><br/>
            <label>Position: </label>
            <input type='text' value={playerPosition} onChange={(e)=> setPlayerPosition(e.target.value)}  />
            <input type='submit' />
        </form> */}
    </div>
  )
}

export default TeamPlayers