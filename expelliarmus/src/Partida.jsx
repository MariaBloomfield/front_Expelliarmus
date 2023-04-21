import './Partida.css'
import AnimacionFicha from './AnimacionFicha'
export default function Partida() {
    return (
        <>
        <h2>Simulación de una jugada</h2>
        <div class="parent">
            <div class="image-container">
                <img class="image1" src="src/assets/imgs/tablero.png" />
                    <img class="image2" src="src/assets/imgs/ficha_roja.png" />
                    <img class="image3" src="src/assets/imgs/ficha_roja.png" />
                    <img class="image4" src="src/assets/imgs/ficha_roja.png" />
                    <img class="image5" src="src/assets/imgs/ficha_roja.png" />
                    <img class="image6" src="src/assets/imgs/ficha_roja.png" />
                    <img class="image7" src="src/assets/imgs/ficha_roja.png" />
                    <img class="image8" src="src/assets/imgs/ficha_amarilla.png" />
                    <img class="image9" src="src/assets/imgs/ficha_amarilla.png" />
                    <img class="image10" src="src/assets/imgs/ficha_amarilla.png" />
                    <img class="image11" src="src/assets/imgs/ficha_amarilla.png" />
                    <img class="image12" src="src/assets/imgs/ficha_azul.png" />
                    <img class="image13" src="src/assets/imgs/ficha_azul.png" />
                    <img class="image14" src="src/assets/imgs/ficha_azul.png" />
                    <img class="image15" src="src/assets/imgs/ficha_azul.png" />
                    <img class="image16" src="src/assets/imgs/ficha_gris.png" />
                    <img class="image17" src="src/assets/imgs/ficha_gris.png" />
                    <img class="image18" src="src/assets/imgs/ficha_gris.png" />
                    <img class="image19" src="src/assets/imgs/ficha_gris.png" />
                    <img class="image20" src="src/assets/imgs/ficha_gris.png" />
            </div>
        </div>
        <AnimacionFicha />
    
        <p className="read-the-docs">
            Página hecha por el equipo Las Motomamis
        </p>
        </>
    )
}