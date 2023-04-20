import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import AcercaJuego from './AcercaJuego'
import Equipo from './Equipo'
import Instrucciones from './Instrucciones'
import Partida from './Partida'

export default function Routing () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App />}/>
                <Route path={'/acerca'} element={<AcercaJuego />}/>
                <Route path={'/equipo'} element={<Equipo />}/>
                <Route path={'/instrucciones'} element={<Instrucciones />}/>
                <Route path={'/partida'} element={<Partida />}/>
            </Routes>
        </BrowserRouter>
    )
}