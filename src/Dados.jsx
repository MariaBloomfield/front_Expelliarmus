import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from "./auth/AuthContext";
import Ejercitos from './Ejercitos';


const Dados = ({ resultado }) => {
    const [atacanteResultado, setAtacanteResultado] = useState(1);
    const [defensorResultado, setDefensorResultado] = useState(1);
    const { user, gameId, territoryId } = useContext(AuthContext);
    const { numterritories, setNumterritories } = useContext(AuthContext);
    const { datosterritory, setDatosterritory } = useContext(AuthContext);
    const { winner, setWinner } = useContext(AuthContext);
    const { attacks, setAttacks } = useContext(AuthContext);
    const { gameTurn, setGameTurn } = useContext(AuthContext);

    useEffect(() => {
        if (typeof gameTurn === 'string') {
            const regex = /[\\"\\\\]+/g;
            const cleanString = gameTurn.replace(regex, "");
            const turno = parseInt(cleanString, 10);
            console.log("El valor del turno es:", turno);
            setGameTurn(turno);
        }
    }, [gameTurn]);

    const rollDice = () => {
        const currentAttacks = parseInt(attacks, 10);
        console.log("ataques: ", currentAttacks);
        console.log("atqques og", attacks);
        // tenemos un contador que solo puede llegar hasta 5 y ahi se cambia el turno
        const atacanteRandom = Math.floor(Math.random() * 6) + 1;
        const defensorRandom = Math.floor(Math.random() * 6) + 1;

        setAtacanteResultado(atacanteRandom);
        setDefensorResultado(defensorRandom);
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/attack_valid/${territoryId}/${atacanteRandom}/${defensorRandom}/${user}`)
        .then((response) => {
            setAttacks(currentAttacks + 1);
            console.log("ataques: ", currentAttacks);
            if (currentAttacks + 1 === 5) {
                axios.get(`${import.meta.env.VITE_BACKEND_URL}/end_play/${gameId}`)
                .then((response) => {
                    console.log(response.data);
                    console.log("Se termino el turno");
                    // Pop up de que ya no es tu turno
                    setGameTurn(response.data.turn);
                    setAttacks(0);
                })
                .catch((error) => {
                    console.log(error);
                });
            }
            const data = response.data.resultado;
            setNumterritories(data.territories);
            setDatosterritory(data.territorio);
            setWinner(data.winner);
            resultado(data);
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div>
            <div className="button-container"> 
                <button classname="atacar" onClick={rollDice}>Atacar</button>
            </div>
            <div className="dado-container">
                <h4>Atacante:</h4>
                {atacanteResultado && (
                    <img
                        src={`public/assets/imgs/dado/dice-${atacanteResultado}.png`}
                        alt={`Dice ${atacanteResultado}`}
                        className="dice-image"
                    />
                )}
            </div>
            <div className="dado-container">
                <h4>Defensor:</h4>
                {defensorResultado && (
                    <img
                        src={`public/assets/imgs/dado/dice-${defensorResultado}.png`}
                        alt={`Dice ${defensorResultado}`}
                        className="dice-image"
                    />
                )}
            </div>
        </div>
    );
};

export default Dados;
