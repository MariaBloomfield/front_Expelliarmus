import { useState, useContext, useEffect } from 'react'
import reactLogo from '../public/assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import { AuthContext } from "./auth/AuthContext";

function App() {
  const [count, setCount] = useState(0)
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
      if (typeof user === 'string') {
          const regex = /[^a-zA-Z0-9]/g;
          const cleanString = user.replace(regex, "");
          console.log("El nombre de usuario es:", cleanString);
          setUser(cleanString);
      }
  }, [user]);
  
  return (
    <div className="App">
      <br /><br />
      <h1>EXPELLIARMUS</h1>
      <div class="main-div">
        <img src="/assets/imgs/tres.jpeg" alt="" title="Harry"/>
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
