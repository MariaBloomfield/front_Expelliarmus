import React, { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from "./auth/AuthContext";
import './UnirseJuego.css';
import { useNavigate } from 'react-router-dom';

export default function UnirseJuego() {
    const navigate = useNavigate();
    const { user, gameId, setGameId, logout, players, setPlayers } = useContext(AuthContext);
    console.log(gameId);
    const handleLogout = () => {
        logout();
        navigate('/');
    };
    const rollDice = () => {
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/game`, { user: user, gameId: gameId})
        .then((response) => {
            // Manejar la respuesta del backend, si es necesario
            console.log(response.data);
            const { players } = response.data;
            setPlayers(players);
            console.log("players: ", players);
            const { gameId } = response.data; // Obtener el gameId de la respuesta
            console.log("gameId: ", gameId);
            setGameId(gameId);
            if (players === 4) {
                console.log("Se llegó a 4 jugadores");
                navigate('/partida');
            }
        })
        .catch((error) => {
            // Manejar el error en caso de que ocurra
            console.error(error);
        });
    };



    return (
        <>
            <br />
            <div>
                <h1>¿Quieres jugar a Expelliarmus?</h1>
            </div>
            <button onClick={rollDice} className="custom-button">
                Unirse
            </button>
            <button onClick={handleLogout} className="custom-button1">
                Cerrar sesión
            </button>

            <p className="read-the-docs">
                Página hecha por el equipo Las Motomamis
            </p>
        </>
    );
}
