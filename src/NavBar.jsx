import './NavBar.css';
import logo from '../public/assets/imgs/logo.png';
import expelliarmusLogo from '../public/assets/imgs/expelliarmus.png';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from './auth/AuthContext';

export default function NavBar() {
    const { user, gameId, setUser } = useContext(AuthContext);
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
                
                {gameId ===null && user && (
                    <a href="/unirse" className="hover-link">Unirse a juego</a>
                )} 
                {!user && (
                    <div className="right-links">
                        <a href="/login" className="hover-link">Log in</a>
                        <a href="/signup" className="hover-link">Sign up</a>
                    </div>
                )}
                {user && (
                    <div className="right-links">
                        <a href="/logout" className="hover-link">Log out</a>
                    </div>
                )}
            </div>
        </>
    );
}