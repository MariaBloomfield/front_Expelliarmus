import React from 'react';
import './Ejercitos.css';

const ejercitosPosiciones = {
    1: { id: 1, color: "rojo", top: '5%', left: '51%' },
    2: { id: 2, color: "rojo", top: '3.5%', left: '58%' },
    3: { id: 3, color: "rojo", top: '2%', left: '63%' },
    4: { id: 4, color: "rojo", top: '2.5%', left: '70%' },
    5: { id: 5, color: "rojo", top: '5.5%', left: '68%' },
    6: { id: 6, color: "rojo", top: '2.5%', left: '78%' },
    7: { id: 7, color: "rojo", top: '8.5%', left: '70%' },
    8: { id: 8, color: "rojo", top: '12%', left: '67%' },
    9: { id: 9, color: "rojo", top: '17.5%', left: '71%' },
    10: { id: 10, color: "rojo", top: '15%', left: '63.5%' },
    11: { id: 11, color: "rojo", top: '8%', left: '58%' },
    12: { id: 12, color: "rojo", top: '13%', left: '52.5%' },
    13: { id: 13, color: "rojo", top: '9%', left: '46.5%' },
    14: { id: 14, color: "rojo", top: '6.5%', left: '44%' },
    15: { id: 15, color: "rojo", top: '9%', left: '40%' },
    16: { id: 16, color: "rojo", top: '11%', left: '80%' },
    17: { id: 17, color: "rojo", top: '5.5%', left: '39.5%' },
    18: { id: 18, color: "rojo", top: '1.8%', left: '36.5%' },
    19: { id: 19, color: "rojo", top: '0%', left: '32.5%' },
    20: { id: 20, color: "rojo", top: '30.5%', left: '82%' },
    21: { id: 21, color: "rojo", top: '24.5%', left: '83%' },
    22: { id: 22, color: "rojo", top: '31%', left: '76%' },
    23: { id: 23, color: "rojo", top: '33.5%', left: '21%' },
    24: { id: 24, color: "rojo", top: '26.5%', left: '25%' },
    25: { id: 25, color: "rojo", top: '27.5%', left: '19%' },
    26: { id: 26, color: "rojo", top: '21%', left: '19%' },
    27: { id: 27, color: "rojo", top: '16%', left: '10%' },
    28: { id: 28, color: "rojo", top: '16%', left: '40%' },
    29: { id: 29, color: "rojo", top: '14.5%', left: '47%' },
    30: { id: 30, color: "rojo", top: '20%', left: '51%' },
    31: { id: 31, color: "rojo", top: '23%', left: '47%' },
    32: { id: 32, color: "rojo", top: '29.5%', left: '47.5%' },
    33: { id: 33, color: "rojo", top: '29%', left: '54%' },
    34: { id: 34, color: "rojo", top: '11%', left: '15.5%' },
    35: { id: 35, color: "rojo", top: '10%', left: '9%' },
    36: { id: 36, color: "rojo", top: '5.5%', left: '11%' },
    37: { id: 37, color: "rojo", top: '6%', left: '17%' },
    38: { id: 38, color: "rojo", top: '5.5%', left: '22.5%' },
    39: { id: 39, color: "rojo", top: '2.5%', left: '13%' },
    40: { id: 40, color: "rojo", top: '2.5%', left: '6%' },
    41: { id: 41, color: "rojo", top: '22.5%', left: '75%' },
};

const Ejercitos = ({ territorioConquistado, cantidadTerritoriosConquistados }) => {
    const actualizarColor = () => {
        const { id, color } = territorioConquistado;

        if (id !== -1) {
            const posicion = ejercitosPosiciones[id];
            if (posicion) {
                posicion.color = color;
            }
        }
    };

    React.useEffect(() => {
        actualizarColor();
    }, [territorioConquistado]);

    return (
        <div>
            <img className="ejercito-1" src="src/assets/imgs/fichas/amarillo.png" alt="Ejército Amarillo" />
            <div className="ejercitos-container">
                <div className="jugador-container">
                    <div className="jugador">Jugador 1</div>
                    <img className="ejercito-amarillo" src="src/assets/imgs/fichas/amarillo.png" alt="Ejército Amarillo" />
                </div>
                <div className="jugador-container">
                    <div className="jugador">Jugador 2</div>
                    <img className="ejercito-rojo" src="src/assets/imgs/fichas/rojo.png" alt="Ejército Rojo" />
                </div>
                <div className="jugador-container">
                    <div className="jugador">Jugador 3</div>
                    <img className="ejercito-azul" src="src/assets/imgs/fichas/azul.png" alt="Ejército Azul" />
                </div>
                <div className="jugador-container">
                    <div className="yo">Jugador 4 (Yo)</div>
                    <img className="ejercito-gris" src="src/assets/imgs/fichas/gris.png" alt="Ejército Gris" />
                </div>
            </div>
        </div>
    );
};

export default Ejercitos;

