import React from 'react'

 function Player({player}) {
  
   


    return (
    <div>
        <li>Player: {player.name}</li>
        <li>Position: {player.position}</li><br/>
    
    </div>
  )
}

export default Player