import './Instrucciones.css'
import CambiarTexto from './CambiarTexto'
export default function Instrucciones() {
    return (
        <>
        <div class="container">
            <div id="cf">
                <img class="primera" src="public/assets/imgs/lugares/pic1.jpeg" />
                <img class="segunda" src="public/assets/imgs/lugares/pic2.jpeg" />
                <img class="tercera" src="public/assets/imgs/lugares/pic3.jpeg" />

            </div>
            <div>
                <h1 class="ocultar"> Instrucciones</h1>
                <CambiarTexto />
            </div>
        </div>
        <br></br>
        <p className="read-the-docs">
            Página hecha por el equipo Las Motomamis
        </p>
        </>
    )
}