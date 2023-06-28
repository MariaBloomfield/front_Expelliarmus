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
            <a href="/unirse">Unirse a juego</a>
            <a href="/login">Login</a>
            <a href="/logout">Logout</a>
            <a href="/signup">Signup</a>
        </div>
        </>
    )
}