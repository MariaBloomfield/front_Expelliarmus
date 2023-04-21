import './NavBar.css'
export default function NavBar() {
    return (
        <>
        <div class="topnav">
            <a class="active" href="/">Inicio</a>
            <a href="/acerca">Acerca del juego</a>
            <a href="/equipo">Equipo</a>
            <a href="/instrucciones">Instrucciones</a>
            <a href="/partida">Partida</a>
            <img class="logo" src="src/assets/imgs/logo.png" alt="Logo de la página" />
        </div>
        </>
    )
}