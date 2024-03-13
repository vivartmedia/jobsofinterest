import HomePageComponent from './components/HomePageComponent';
import NavbarComponent from './components/NavbarComponent';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import GoogleComponent from './components/GoogleComponent';
import MicrosoftComponent from './components/MicrosoftComponent';
import SpotifyComponent from './components/SpotifyComponent';
import BallastLaneComponent from './components/BallastLaneComponent';
import AirbnbComponent from './components/AirbnbComponent';


function App() {
  return (
   
   
  <BrowserRouter>
  <NavbarComponent />
  <Routes>
    <Route path='/' element = <HomePageComponent/> />
    <Route path='/GoogleComponent' element = <GoogleComponent/> />
    <Route path='/MicrosoftComponent' element = <MicrosoftComponent/> />
    <Route path='/SpotifyComponent' element =   <SpotifyComponent /> />
    <Route path='/AirbnbComponent' element = < AirbnbComponent /> />
    <Route path='/BallastLaneComponent' element = <BallastLaneComponent /> />


  </Routes>
  
  </BrowserRouter>
 

  )
}

export default App;
