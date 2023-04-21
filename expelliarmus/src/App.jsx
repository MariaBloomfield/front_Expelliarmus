import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <header>
        <div>
          <a href="/acerca" target="_blank">
            <img src="src/assets/imgs/logo.png" className="logo expelliarmus" alt="logo" />
          </a> 
        </div>
      </header>
      <br /><br />
      <div>
        <h4>Ataca y conquista las diferentes ubicaciones del mundo mágico de Harry Potter, en donde podras enfrentarte con 
        magos y brujas de las diferentes casas de Hogwarts e incluso muggles. </h4>
      </div>
      <div class="main-div">
        <img src="src/assets/imgs/tres.jpeg" alt="" title="Harry"/>
      </div>
      <p className="read-the-docs">
        Página hecha por el equipo Las Motomamis
      </p> 
    </div>
  )
}

export default App
