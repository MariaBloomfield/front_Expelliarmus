import './Partida.css'
export default function Partida() {
    return (
        <>
        <header>
        <div>
          <a href="/acerca" target="_blank">
            <img src="src/assets/imgs/logo.png" className="logo expelliarmus" alt="logo" />
          </a> 
        </div>
        </header>
        <br></br>
        <h1>Simulación de una jugada</h1>
        <p>A continuación, es posible observar una breve simulación de una partida. En este caso el jugador perteneciente a la casa Griffindor
            es decir, el de color rojo, es el que está jugando. En la imagen se puede observar que el jugador tiene 7 fichas en su poder. Durante 
            la jugada, este comienza por atacar a jugador de Ravenclaw, moviendo uno de sus magos hacia ese territorio. Luego ataca a un jugador 
            de Hufflepuff y termina moviendo 2 de sus magos a ese nuevo territorio, con el fin de poder atacar a los territorios cercanos a este.
        </p>
        <div class="image-container">
            <img class="image1" src="src/assets/imgs/tablero.png" />
            <img class="image2" src="src/assets/imgs/fichas/roja.png" />
            <img class="image3" src="src/assets/imgs/fichas/roja.png" />
            <img class="image4" src="src/assets/imgs/fichas/roja.png" />
            <img class="image5" src="src/assets/imgs/fichas/roja.png" />
            <img class="image6" src="src/assets/imgs/fichas/roja.png" />
            <img class="image7" src="src/assets/imgs/fichas/roja.png" />
            <img class="image8" src="src/assets/imgs/fichas/amarilla.png" />
            <img class="image9" src="src/assets/imgs/fichas/amarilla.png" />
            <img class="image10" src="src/assets/imgs/fichas/amarilla.png" />
            <img class="image11" src="src/assets/imgs/fichas/amarilla.png" />
            <img class="image12" src="src/assets/imgs/fichas/amarilla.png" />
            <img class="image13" src="src/assets/imgs/fichas/azul.png" />
            <img class="image14" src="src/assets/imgs/fichas/azul.png" />
            <img class="image15" src="src/assets/imgs/fichas/azul.png" />
            <img class="image16" src="src/assets/imgs/fichas/gris.png" />
            <img class="image17" src="src/assets/imgs/fichas/gris.png" />
            <img class="image18" src="src/assets/imgs/fichas/gris.png" />
            <img class="image19" src="src/assets/imgs/fichas/gris.png" />
            <img class="image20" src="src/assets/imgs/fichas/gris.png" />
            <img class="image21" src="src/assets/imgs/fichas/roja.png" />
            <img class="image22" src="src/assets/imgs/fichas/azul.png" />
        </div>
        <div className="contenedor">
            <div className="dados">
                <div className="dado-container">
                    <h4>Atacante:</h4>
                    <div>
                        <img className="dado-img" src="src/assets/imgs/dado/uno.png" alt="" />
                        <img className="dado-img" src="src/assets/imgs/dado/cinco.png" alt="" />
                    </div>
                    
                </div>

                <div className="dado-container">
                    <h4>Defensor:</h4>
                    <div>
                        <img className="dado-img" src="src/assets/imgs/dado/tres.png" alt="" />
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div>
                    <img class="hogwarts" src="src/assets/imgs/lugares/pic2.jpeg" alt="Avatar"/>
                    <h4><b>Hogwarts</b></h4>
                </div>
                
                <div class="container">
                    <p>Tu objetivo es conquistar todos los territorios pertenecientes a Hogwarts</p>
                </div>
            </div> 
        </div>
        
        <p className="read-the-docs">
            Página hecha por el equipo Las Motomamis
        </p>
        </>
    )
}