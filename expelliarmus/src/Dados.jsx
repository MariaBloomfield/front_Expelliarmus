import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from "./auth/AuthContext";
import Ejercitos from './Ejercitos';

const Dados = ({ resultado }) => {
    const [atacanteResultado, setAtacanteResultado] = useState(1);
    const [defensorResultado, setDefensorResultado] = useState(1);
    const { user } = useContext(AuthContext);
    const { territoryId } = useContext(AuthContext);
    const { numterritories, setNumterritories } = useContext(AuthContext);
    const { datosterritory, setDatosterritory } = useContext(AuthContext);

    const rollDice = () => {
        const atacanteRandom = Math.floor(Math.random() * 6) + 1;
        const defensorRandom = Math.floor(Math.random() * 6) + 1;

        setAtacanteResultado(atacanteRandom);
        setDefensorResultado(defensorRandom);
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/attack_valid/${territoryId}/${atacanteRandom}/${defensorRandom}/${user}`)
        .then((response) => {
            const data = response.data.resultado;
            setNumterritories(data.territories);
            setDatosterritory(data.territorio);
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
                        src={`src/assets/imgs/dado/dice-${atacanteResultado}.png`}
                        alt={`Dice ${atacanteResultado}`}
                        className="dice-image"
                    />
                )}
            </div>
            <div className="dado-container">
                <h4>Defensor:</h4>
                {defensorResultado && (
                    <img
                        src={`src/assets/imgs/dado/dice-${defensorResultado}.png`}
                        alt={`Dice ${defensorResultado}`}
                        className="dice-image"
                    />
                )}
            </div>
        </div>
    );
};

export default Dados;
