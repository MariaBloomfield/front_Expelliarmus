import './Instrucciones.css'
import CambiarTexto from './CambiarTexto'
import { AuthContext } from "./auth/AuthContext";
import { useContext, useEffect } from 'react';

export default function Instrucciones() {
    const { user, setUser } = useContext(AuthContext);

    useEffect(() => {
        if (typeof user === 'string') {
            const regex = /[^a-zA-Z0-9]/g;
            const cleanString = user.replace(regex, "");
            console.log("El nombre de usuario es:", cleanString);
            setUser(cleanString);
        }
    }, [user]);
    return (
        <>
        <div class="container">
            <div id="cf">
                <img class="primera" src="/assets/imgs/lugares/pic1.jpeg" />
                <img class="segunda" src="/assets/imgs/lugares/pic2.jpeg" />
                <img class="tercera" src="/assets/imgs/lugares/pic3.jpeg" />

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