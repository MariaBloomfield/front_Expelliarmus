import './AcercaJuego.css'
export default function AcercaJuego() {
    return(
        <>
        <br></br>
        <div>
            <h1>¿Qué es Expelliarmus?</h1>
        </div>

        <div class="main-div">
            <p class="description">Este nuevo y creativo juego de mesa online es una variación del tradicional juego 'Ataque' en el que el
                objetivo principal es conquistar el mundo. En este caso la ubicación del juego es el mundo mágico de Harry Potter, en donde
                cada jugador posee un objetivo único para la partida. Ejemplos de estos objetivos son: conquistar Hogwarts, derrotar al jugador
                de Slytherin, etc. El jugador que complete su objetivo primero será el ganador de la partida.
            </p>
            <p class="description">
                En esta página podrás jugar Expelliarmus, un juego de mesa basado en el mundo mágico de Harry Potter. En donde para lograr tu
                objetivo deberás atacar y conquistar las diferentes ubicaciones que estén dentro de la categoría de tu objetivo, por ejemplo
                que pertenezcan a Hogwarts. Para esto deberás enfrentarte con magos y muggles quienes serán tus contrincantes.
            </p>
        </div>
        <div>

        <h2>Ranking jugadores</h2>

        <table id="customers">
        <tr>
            <th>Ranking</th>
            <th>Avatar</th>
            <th>Nombre usuario</th>
            <th>Casa de Hogwarts</th>
            <th>Puntaje</th>
        </tr>
        <tr>
            <td>1</td>
            <td> <img class="image-cell" src="src/assets/imgs/avatars/harry.jpeg" alt="" title="Harry"/></td>
            <td>Maria Anders</td>
            <td>Griffindor</td>
            <td>1057</td>
        </tr>
        <tr>
            <td>2</td>
            <td> <img class="image-cell" src="src/assets/imgs/avatars/cedric.jpeg" alt="" title="Harry"/></td>
            <td>Christina Berglund</td>
            <td>Hufflepuff</td>
            <td>934</td>
        </tr>
        <tr>
            <td>3</td>
            <td> <img class="image-cell" src="src/assets/imgs/avatars/luna.jpeg" alt="" title="Harry"/></td>
            <td>Francisco Chang</td>
            <td>Ravenclaw</td>
            <td>823</td>
        </tr>
        <tr>
            <td>4</td>
            <td> <img class="image-cell" src="src/assets/imgs/avatars/draco.jpeg" alt="" title="Harry"/></td>
            <td>Roland Mendel</td>
            <td>Slytherin</td>
            <td>808</td>
        </tr>
        <tr>
            <td>5</td>
            <td> <img class="image-cell" src="src/assets/imgs/avatars/hermaione.jpeg" alt="" title="Harry"/></td>
            <td>Helen Bennett</td>
            <td>Griffindor</td>
            <td>779</td>
        </tr>
        </table>

        </div>
        <p className="read-the-docs">
            Página hecha por el equipo Las Motomamis
        </p>
        </>
    )
}