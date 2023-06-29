import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <br /><br />
      <h1>EXPELLIARMUS</h1>
      <div class="main-div">
        <img src="src/assets/imgs/tres.jpeg" alt="" title="Harry"/>
      </div>
      <div>
        <h4>Ataca y conquista las diferentes ubicaciones del mundo mágico de Harry Potter, en donde podrás enfrentarte con 
        magos y brujas de las diferentes casas de Hogwarts e incluso muggles. </h4>
      </div>
      <p className="read-the-docs">
        Página hecha por el equipo Las Motomamis
      </p> 
    </div>
  )
}

export default App
