import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [user, setUser] = useState(localStorage.getItem('user') || null);
    const [gameId, setGameId] = useState(localStorage.getItem('gameId') || null);
    const [players, setPlayers] = useState(localStorage.getItem('players') || null);

    function logout() {
        setToken(null);
        setUser(null);
        // setGameId(null);
        console.log("Se hizo logout");
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

    useEffect(() => {
        localStorage.setItem('players', JSON.stringify(players));
    });

    return (
        <AuthContext.Provider value={{ token, setToken, logout, user, setUser, gameId, setGameId, players, setPlayers }}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;
