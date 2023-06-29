import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [user, setUser] = useState(localStorage.getItem('user') || null);
    const [gameId, setGameId] = useState(localStorage.getItem('gameId') || null);

    function logout() {
        setToken(null);
        setUser(null);
        setGameId(null);
    }

    useEffect(() => {
        localStorage.setItem('token', token);
    }, [token]);

    useEffect(() => {
        localStorage.setItem('userId', JSON.stringify(user));
    });

    useEffect(() => {
        localStorage.setItem('gameId', JSON.stringify(gameId));
    });

    return (
        <AuthContext.Provider value={{ token, setToken, logout, user, setUser, gameId, setGameId }}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;
