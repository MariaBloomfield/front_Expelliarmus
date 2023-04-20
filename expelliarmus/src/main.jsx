import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routing from './Routing'
import NavBar from './NavBar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Routing />
  </React.StrictMode>,
)
