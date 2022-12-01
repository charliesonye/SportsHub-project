import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar';
import Tournaments from './Components/Tournaments';
import Home from './Components/Home'
import Teams from './Components/Teams';

function App() {
  return (
    <div className="App">
         <Router>
      <NavBar />
      <header className="App-header">
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/teams' element={<Teams/>} />
          <Route path='/tournaments' element={<Tournaments/>} />

        </Routes>
       
      </header>
      </Router>
    </div>
  );
}

export default App;
