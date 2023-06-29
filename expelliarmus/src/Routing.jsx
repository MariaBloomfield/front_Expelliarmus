import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import AcercaJuego from './AcercaJuego'
import Equipo from './Equipo'
import Instrucciones from './Instrucciones'
import Partida from './Partida'
import UnirseJuego from './UnirseJuego'
import Login from './Login'
import UserCheck from './protected/UserCheck'
import AdminCheck from './protected/AdminCheck'
import Logout from './Logout'
import Signup from './Signup'

export default function Routing () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App />}/>
                <Route path={'/acerca'} element={<AcercaJuego />}/>
                <Route path={'/equipo'} element={<Equipo />}/>
                <Route path={'/instrucciones'} element={<Instrucciones />}/>
                <Route path={'/partida'} element={<Partida />}/>
                <Route path={'/login'} element={<Login />}/>
                <Route path={'/unirse'} element={<UnirseJuego />} />
                <Route path={'/pruebauser'} element={<UserCheck />} />
                <Route path={'/pruebaadmin'} element={<AdminCheck />} />
                <Route path={'/signup'} element={<Signup />} />

            </Routes>
        </BrowserRouter>
    )
}