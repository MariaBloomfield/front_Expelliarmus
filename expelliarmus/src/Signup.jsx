import React, { useState, useContext } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './auth/AuthContext';

function Signup() {
    const navigateTo = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState("");
    const { token, setToken } = useContext(AuthContext);
    const { user, setUser } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        axios.post(`${import.meta.env.VITE_BACKEND_URL}/signup`, {
            username: username,
            password: password
        }).then((response) => {
            console.log('Registro exitoso! Ahora puedes volver y loguearte');
            setError(false);
            setMsg('Registro exitoso! Ahora puedes volver y loguearte');
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
                navigateTo('/unirse');
                setUsername("");
                setPassword("");
            }).catch((error) => {
                console.error('An error occurred while trying to login:', error);
                setError(true); // aquí puede haber más lógica para tratar los errores
            });
        }).catch((error) => {
            console.error('Ocurrió un error:', error);
            setError(true); // aquí puede haber más lógica para tratar los errores
        });
    };

    return (
        <div className="Login">
            <h2>Sign up</h2>
            {msg.length > 0 && <div className="successMsg"> {msg} </div>}

            {error && <div className="error">Hubo un error con el Registro, por favor intenta nuevamente.</div>}

            <form onSubmit={handleSubmit}>
                <label>
                    {/* <span className="input-label">Username:</span> */}
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
                    {/* <span className="input-label">Password:</span> */}
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </label>
                <input type="submit" value="Crear Sesión" />
            </form>
        </div>
    );
}

export default Signup;