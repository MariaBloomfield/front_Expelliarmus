import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigateTo = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        axios.post(`${import.meta.env.VITE_BACKEND_URL}/signup`, {
            username: username,
            password: password
        }).then((response) => {
            console.log('Registro exitoso! Ahora puedes volver y loguearte');
            setError(false);
            setMsg('Registro exitoso! Ahora puedes volver y loguearte');
            navigateTo('/unirse');
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