import React from 'react';
import './CambiarTexto.css'

export default function CambiarTexto() {
    function myFunction() {
        var x = document.getElementById("myDIV");
        if (x.innerHTML === "Al iniciar el juego cada jugador se le asignará un objetivo distinto. Este solo conoce su objetivo, no los de sus contrincantes. El jugador que logre su objetivo primero es el ganador. Luego, se distribuirán de manera aleatoria y equitativa los territorios entre todos los jugadores. En el territorio asignado se colocará automáticamente un ejército del jugador correspondiente.") {
            x.innerHTML = "Antes de comenzar cada ronda, el juego contará la cantidad de territorios que posee cada jugador, luego se divide en 2 para obtener la cantidad de fichas de ejército nuevas que les corresponde. En el caso de ser un número impar, se considera la parte entera. Luego, se le asignará la cantidad de ejércitos calculados, los cuales serán ubicados por cada jugador en los territorios que tengan ocupados, según sea su conveniencia, teniendo en cuenta el objetivo que debe conseguir.";
        } 
        else if (x.innerHTML === "Antes de comenzar cada ronda, el juego contará la cantidad de territorios que posee cada jugador, luego se divide en 2 para obtener la cantidad de fichas de ejército nuevas que les corresponde. En el caso de ser un número impar, se considera la parte entera. Luego, se le asignará la cantidad de ejércitos calculados, los cuales serán ubicados por cada jugador en los territorios que tengan ocupados, según sea su conveniencia, teniendo en cuenta el objetivo que debe conseguir.") {
            x.innerHTML = "Cada jugador los ubicará en el tablero cuando le corresponda el turno de jugar. Sólo en la primera ronda de juego la cantidad de ejércitos adicionales estará determinada para todos iguales. Cabe destacar que la mínima cantidad de ejércitos a recibir es 3, aunque un jugador tenga menos de 6 territorios.";
        }
        else if (x.innerHTML === "Cada jugador los ubicará en el tablero cuando le corresponda el turno de jugar. Sólo en la primera ronda de juego la cantidad de ejércitos adicionales estará determinada para todos iguales. Cabe destacar que la mínima cantidad de ejércitos a recibir es 3, aunque un jugador tenga menos de 6 territorios.") {
            x.innerHTML = "El jugador en su turno, deberá colocar todos los ejércitos recibidos en uno o más de sus territorios, de acuerdo a su estrategia para lograr el objetivo. A continuación, el jugador podrá o no atacar a sus adversarios de acuerdo a su conveniencia. Un territorio puede atacar solamente a un territorio adversario con el que tenga fronteras en común, o esté unido por línea de puntos. El jugador en su turno es libre de atacar, o no, las veces y territorios que desee.";
        }
        else if (x.innerHTML === "El jugador en su turno, deberá colocar todos los ejércitos recibidos en uno o más de sus territorios, de acuerdo a su estrategia para lograr el objetivo. A continuación, el jugador podrá o no atacar a sus adversarios de acuerdo a su conveniencia. Un territorio puede atacar solamente a un territorio adversario con el que tenga fronteras en común, o esté unido por línea de puntos. El jugador en su turno es libre de atacar, o no, las veces y territorios que desee.") {
            x.innerHTML = "El ataque y defensa de un territorio se hará a través de dados. El jugador en su turno tendrá dos dados virtuales para atacar y el jugador que se defiende tendrá un dado virtual, el cual será manejado por el juego. Es decir, el jugador qué no está en su turno no interactúa a la hora de defenderse, ya qué esto lo realiza la lógica del juego con un dado aleatorio. Si los dos valores de los dados del atacante son menores o iguales al dado del defensor, el atacante pierde un ejército. En caso contrario, el defensor pierde un ejército.";
        }
        else if (x.innerHTML === "El ataque y defensa de un territorio se hará a través de dados. El jugador en su turno tendrá dos dados virtuales para atacar y el jugador que se defiende tendrá un dado virtual, el cual será manejado por el juego. Es decir, el jugador qué no está en su turno no interactúa a la hora de defenderse, ya qué esto lo realiza la lógica del juego con un dado aleatorio. Si los dos valores de los dados del atacante son menores o iguales al dado del defensor, el atacante pierde un ejército. En caso contrario, el defensor pierde un ejército.") {
            x.innerHTML = "El primer jugador que se le acaben sus ejércitos en su territorio, pierde esa zona y queda en posesión del otro jugador. Si el atacante gana, desplaza la cantidad de ejércitos que desee desde el territorio del cual atacó. En cambio, si el defensor gana, este saca un ejército nuevo y lo coloca en el nuevo territorio y el turno del atacante finaliza.El jugador en turno puede atacar las veces que desee siempre y cuando no pierda contra un defensor. El turno del jugador finaliza cuando pierde contra un defensor o cuando decide no atacar más.";
        }
        else {
            x.innerHTML = "Al iniciar el juego cada jugador se le asignará un objetivo distinto. Este solo conoce su objetivo, no los de sus contrincantes. El jugador que logre su objetivo primero es el ganador. Luego, se distribuirán de manera aleatoria y equitativa los territorios entre todos los jugadores. En el territorio asignado se colocará automáticamente un ejército del jugador correspondiente.";
        }

    }

    return (
        <div>
            <div class="description" id="myDIV">Al iniciar el juego cada jugador se le asignará un objetivo distinto. Este solo conoce su objetivo, no los de sus contrincantes. El jugador que logre su objetivo primero es el ganador.
                Luego, se distribuirán de manera aleatoria y equitativa los territorios entre todos los jugadores. En el territorio asignado se colocará automáticamente un ejército del jugador correspondiente.</div>
            <br />
            <p><button onClick={myFunction}>Siguiente</button></p>
        </div>
    );
}



