import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar';
import Competitions from './Pages/Competitions';
import Home from './Components/Home'
import Teams from './Pages/Teams'
import Login from './Pages/Login';
import CompTeams from './Pages/CompTeams';
import TeamPlayers from './Pages/TeamPlayers';

function App() {
  const [user, setUser] = useState(null)
  const [comps, setComps] = useState([])
  const [teams, setTeams] = useState([])
  const [players, setPlayers] = useState([])

  useEffect(()=>{
    fetch('/me').then((res)=>{
      if(res.ok){
        res.json().then((user)=> setUser(user))
      }
    })
  }, [])

  useEffect(() => {
    fetch('/competitions').then((res)=> {
      if(res.ok){
        res.json().then((comps)=> setComps(comps))
      }
    })
   
  }, [])

  useEffect(() =>{
    fetch('/teams')
    .then((res)=> res.json())
    .then((data)=> setTeams(data))
  }, [])

 
 
  
  useEffect(()=>{
    fetch('/players')
    .then((res)=>res.json())
    .then((data)=> setPlayers(data) )
    }, [])
   
    function handleAddPlayer(newPlayer){
      setPlayers([...players, newPlayer])
      
    }

  function handleAddComps(newComp){
    setComps([...comps, newComp])
  }

  function handleAddTeams(newTeam){
    setTeams([...teams, newTeam])
     
  }



  function handleUpdateComps(updatedObj){
    const updatedComps = comps.map((comp) =>{
      if(comp.id === updatedObj.id){
        return updatedObj
      }else {
        return comp
      }

      })
  
    setComps(updatedComps)
  }
  
  function handleDeleteComps(id){
    const newListOfComps = comps.filter(comp=> comp.id !== parseInt(id))
    
    setComps(newListOfComps)
  }


   
  
  if(!user) return <Login onLogin={setUser} />

  return (
    <div className="App">
         <Router>
      <NavBar setUser={setUser} />
      <header className="App-header">
        <Routes>

          <Route path='/' element={<Home
              teams={teams}
            />} 
          />
          <Route 
            path='/teams' 
            element={<Teams
                teams={teams}
                onAddTeam={handleAddTeams}
                comps={comps}
                handleAddPlayer={handleAddPlayer}
              />} 
          />
          <Route 
            path='/competitions' 
            element={<Competitions 
                comps={comps} 
                onAddComps={handleAddComps}
               
              />}
            
          />
          <Route 
            path='/teams/:id' 
            element={<TeamPlayers
                teams={teams}
                
              />}
          /> 
          <Route 
            path='/competitions/:id' 
            element={<CompTeams  
              onDeleteComps={handleDeleteComps}
              handleUpdateComps={handleUpdateComps}
              comps={comps}
              />} 
          />

        </Routes>
      
      </header>
      </Router>
    </div>
  );
}

export default App;
