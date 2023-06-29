import './NavBar.css';
import logo from './assets/imgs/logo.png';
import expelliarmusLogo from './assets/imgs/expelliarmus.png';
import React, { useContext } from 'react';
import { AuthContext } from './auth/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    console.log("AYUDA");
    const { user } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const handleLogout = () => {
    //     logout();
    //     navigate('/');
    // };

    return (
        <>
            <div className="topnav">
                <a href="/acerca" target="_blank" className="logo-link">
                    <img src={logo} className="logo" alt="logo" />
                    <img src={expelliarmusLogo} className="expelliarmus" alt="expelliarmus" />
                </a>
                <a href="/" className="hover-link">Inicio</a>
                <a href="/acerca" className="hover-link">Acerca del juego</a>
                <a href="/equipo" className="hover-link">Equipo</a>
                <a href="/instrucciones" className="hover-link">Instrucciones</a>
                <a href="/partida" className="hover-link">Partida</a>
                <a href="/unirse" className="hover-link">Unirse a juego</a>
                {!user && (
                    <div className="right-links">
                        <a href="/login" className="hover-link">Log in</a>
                        <a href="/signup" className="hover-link">Sign up</a>
                    </div>
                )}
                {/* // )} : {(
                //     <div className="right-links">
                //         <button onClick={handleLogout} className="hover-link">Log out</button>
                //     </div>
                // )}  */}
            </div>
        </>
    );
}
