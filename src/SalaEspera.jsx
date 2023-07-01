import './SalaEspera.css'
import { AuthContext } from "./auth/AuthContext";
import { useContext, useEffect } from 'react';

export default function SalaEspera() {
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
            <div>
                <h1>Sala de espera</h1>
            </div>
            <div id="loader">
                <div id="top"></div>
                <div id="bottom"></div>
                <div id="line"></div>
            </div>
            <h2>Esperando a más jugadores</h2>
            <p className="read-the-docs">
                Página hecha por el equipo Las Motomamis
            </p>
        </>
    )
}