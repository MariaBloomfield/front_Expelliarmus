import React, { useState } from 'react';

const Dados = () => {
    const [atacanteResultado, setAtacanteResultado] = useState(1);
    const [defensorResultado, setDefensorResultado] = useState(1);

    const rollDice = () => {
        const atacanteRandom = Math.floor(Math.random() * 6) + 1;
        const defensorRandom = Math.floor(Math.random() * 6) + 1;

        setAtacanteResultado(atacanteRandom);
        setDefensorResultado(defensorRandom);
    };

    return (
        <div>
            <div className="button-container"> 
                <button onClick={rollDice}>Atacar</button>
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


