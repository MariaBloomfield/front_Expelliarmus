import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from "./auth/AuthContext";
import './UnirseJuego.css';
import { useNavigate } from 'react-router-dom';

export default function UnirseJuego() {
    const navigate = useNavigate();
    const { user, setUser, gameId, setGameId, logout, players, setPlayers, armyInfo, setArmyinfo } = useContext(AuthContext);
    const handleLogout = () => {
        logout();
        navigate('/');
    };

    useEffect(() => {
        if (typeof user === 'string') {
            const regex = /[^a-zA-Z0-9]/g;
            const cleanString = user.replace(regex, "");
            console.log("El nombre de usuario es:", cleanString);
            setUser(cleanString);
        }
    }, [user]);
    const rollDice = () => {
        console.log("user: ", user);
        console.log("gameId PRIMERO: ", gameId);
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/game`, { user: user, gameId: gameId})
        .then((response) => {
            setArmyinfo(null);
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
