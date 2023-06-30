import React, { useState, useContext } from 'react';
import { AuthContext } from './auth/AuthContext';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigateTo = useNavigate();
    const { token, setToken } = useContext(AuthContext);
    const { user, setUser } = useContext(AuthContext);
    const { gameId, setGameId } = useContext(AuthContext);
    const { players, setPlayers } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, {
            username: username,
            password: password
        }).then((response) => {
            console.log('Login successful');
            setError(false);
            setMsg("Login exitoso!");
            console.log(response.data);

            // Recibimos el token y lo procesamos
            const access_token = response.data.access_token;
            localStorage.setItem('token', access_token);
            localStorage.setItem('user', JSON.stringify(username));
            setToken(access_token);
            setUser(response.data.username);
            axios.get(`${import.meta.env.VITE_BACKEND_URL}/game_info/${username}`)
            .then((response) => {
                const { gameId, players } = response.data;
            
                // Actualizar gameId y players en el contexto de autenticación
                setGameId(gameId);
                setPlayers(players);
                console.log("num de jugadores: ", players);
                console.log("gameId: ", gameId);
                if (gameId !== null && players === 4) {
                    console.log("incio sesion y esta en un juego con 4 jugadores");
                    navigateTo('/partida');
                }
                else {
                    navigateTo('/unirse');
                }
            });
            setUsername("");
            setPassword("");
        }).catch((error) => {
            console.error('An error occurred while trying to login:', error);
            setError(true); // aquí puede haber más lógica para tratar los errores
        });
    };

    return (
        <div className="Login">
            <h2>Log in</h2>
            {msg.length > 0 && <div className="successMsg"> {msg} </div>}

            {error && <div className="error">Hubo un error con el Login, por favor intenta nuevamente.</div>}
            <form onSubmit={handleSubmit}>
                <label>
                    {/* <span className="sr-only">Username:</span> */}
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    {/* <span className="sr-only">Password:</span> */}
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <input type="submit" value="Iniciar Sesión" />
            </form>
        </div>
    );
}

export default Login;