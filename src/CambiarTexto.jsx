import React, { useState } from 'react';
import './CambiarTexto.css';

const CambiarTexto = () => {
    const [pagina, setPagina] = useState(1);

    const cambiarPagina = (nuevaPagina) => {
        setPagina(nuevaPagina);
    };

    const renderPagina = () => {
        switch (pagina) {
            case 1:
                return (
                    <p>
                        Al iniciar el juego cada jugador se le asignará un objetivo distinto. Este solo conoce su objetivo, no los de sus contrincantes. El jugador que logre su objetivo primero es el ganador. Luego, se distribuirán de manera aleatoria y equitativa los territorios entre todos los jugadores. En el territorio asignado se colocará automáticamente un ejército del jugador correspondiente.
                    </p>
                );
            case 2:
                return (
                    <p>
                        Antes de comenzar cada ronda, el juego contará la cantidad de territorios que posee cada jugador, luego se divide en 2 para obtener la cantidad de fichas de ejército nuevas que les corresponde. En el caso de ser un número impar, se considera la parte entera. Luego, se le asignará la cantidad de ejércitos calculados, los cuales serán ubicados por cada jugador en los territorios que tengan ocupados, según sea su conveniencia, teniendo en cuenta el objetivo que debe conseguir.
                    </p>
                );
            case 3:
                return (
                    <p>
                        Cada jugador los ubicará en el tablero cuando le corresponda el turno de jugar. Sólo en la primera ronda de juego la cantidad de ejércitos adicionales estará determinada para todos iguales. Cabe destacar que la mínima cantidad de ejércitos a recibir es 3, aunque un jugador tenga menos de 6 territorios.
                    </p>
                );
            case 4:
                return (
                    <p>
                        El jugador en su turno, deberá colocar todos los ejércitos recibidos en uno o más de sus territorios, de acuerdo a su estrategia para lograr el objetivo. A continuación, el jugador podrá o no atacar a sus adversarios de acuerdo a su conveniencia. Un territorio puede atacar solamente a un territorio adversario con el que tenga fronteras en común, o esté unido por línea de puntos. El jugador en su turno es libre de atacar, o no, las veces y territorios que desee.
                    </p>
                );
            case 5:
                return (
                    <p>
                        El ataque y defensa de un territorio se hará a través de dados. El jugador en su turno tendrá dos dados virtuales para atacar y el jugador que se defiende tendrá un dado virtual, el cual será manejado por el juego. Es decir, el jugador qué no está en su turno no interactúa a la hora de defenderse, ya qué esto lo realiza la lógica del juego con un dado aleatorio. Si los dos valores de los dados del atacante son menores o iguales al dado del defensor, el atacante pierde un ejército. En caso contrario, el defensor pierde un ejército.
                    </p>
                );
            case 6:
                return (
                    <p>
                        El primer jugador que se le acaben sus ejércitos en su territorio, pierde esa zona y queda en posesión del otro jugador. Si el atacante gana, desplaza la cantidad de ejércitos que desee desde el territorio del cual atacó. En cambio, si el defensor gana, este saca un ejército nuevo y lo coloca en el nuevo territorio y el turno del atacante finaliza. El jugador en turno puede atacar las veces que desee siempre y cuando no pierda contra un defensor. El turno del jugador finaliza cuando pierde contra un defensor o cuando decide no atacar más.
                    </p>
                );
            default:
                return null;
        }
    };

    return (
        <div className="contenedor">
            <h1>Instrucciones</h1>
            <div className="texto-container">
                {renderPagina()}
            </div>
            <div className="botones-container">
                <button className="boton1" onClick={() => cambiarPagina(1)}>1</button>
                <button className="boton2" onClick={() => cambiarPagina(2)}>2</button>
                <button className="boton3" onClick={() => cambiarPagina(3)}>3</button>
                <button className="boton4" onClick={() => cambiarPagina(4)}>4</button>
                <button className="boton5" onClick={() => cambiarPagina(5)}>5</button>
                <button className="boton6" onClick={() => cambiarPagina(6)}>6</button>
            </div>
        </div>
    );
};

export default CambiarTexto;
