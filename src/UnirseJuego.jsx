import React, { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from "./auth/AuthContext";
import './UnirseJuego.css';
import { useNavigate } from 'react-router-dom';

export default function UnirseJuego() {
    const navigate = useNavigate();
    const { user, gameId, setGameId, logout, players, setPlayers } = useContext(AuthContext);
    const handleLogout = () => {
        logout();
        navigate('/');
    };
    const rollDice = () => {
        console.log("user: ", user);
        console.log("gameId PRIMERO: ", gameId);
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/game`, { user: user, gameId: gameId})
        .then((response) => {
            // Manejar la respuesta del backend, si es necesario
            console.log("imprimiendo respuesta:", response.data.players, response.data.gameId);
            const players1  = response.data.players;
            console.log("players: ", players1);
            setPlayers(response.data.players);
            console.log("players: ", players);
            const game1 = response.data.gameId; // Obtener el gameId de la respuesta
            console.log("gameId: ", game1);
            setGameId(response.data.gameId);
            console.log("gameId: ", gameId);
            if (players1 === 4) {
                console.log("Se llegó a 4 jugadores");
                navigate('/partida');
            } else {
                navigate('/espera');
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

            <p className="read-the-docs">
                Página hecha por el equipo Las Motomamis
            </p>
        </>
    );
}
