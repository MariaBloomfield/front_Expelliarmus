import './SalaEspera.css'

export default function SalaEspera() {
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