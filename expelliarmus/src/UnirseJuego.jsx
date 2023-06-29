import React, { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from "./auth/AuthContext";
import './UnirseJuego.css';

export default function UnirseJuego() {
    const { user, gameId, setGameId } = useContext(AuthContext);
    const rollDice = () => {
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/game`, { user: user, gameId: gameId})
        .then((response) => {
            // Manejar la respuesta del backend, si es necesario
            console.log(response.data);
            console.log("HOLA");
            const { gameId } = response.data; // Obtener el gameId de la respuesta
            console.log("gameId: ", gameId);
            setGameId(gameId);
        })
        .catch((error) => {
            // Manejar el error en caso de que ocurra
            console.error(error);
        });
    };

    return (
        <>
            <header>
                <div>
                    <a href="/acerca" target="_blank">
                        <img
                            src="src/assets/imgs/logo.png"
                            className="logo expelliarmus"
                            alt="logo"
                        />
                    </a>
                </div>
            </header>
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
