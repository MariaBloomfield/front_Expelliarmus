import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [user, setUser] = useState(localStorage.getItem('user') || null);
    const [gameId, setGameId] = useState(localStorage.getItem('gameId') || null);
    const [players, setPlayers] = useState(localStorage.getItem('players') || null);
    const [territoryId, setTerritoryId] = useState(localStorage.getItem('territoryId') || null);
    const [numterritories, setNumterritories] = useState(localStorage.getItem('numterritories') || null);
    const [datosterritory, setDatosterritory] = useState(localStorage.getItem('datosterritory') || null);

    function logout() {
        setToken(null);
        setUser(null);
        setGameId(null);
        setPlayers(null);
        setTerritoryId(null);
        setNumterritories(null);
        setDatosterritory(null);
        console.log("Se hizo logout");
    }

    useEffect(() => {
        localStorage.setItem('token', token);
    }, [token]);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    useEffect(() => {
        localStorage.setItem('gameId', JSON.stringify(gameId));
    }, [gameId]);

    useEffect(() => {
        localStorage.setItem('players', JSON.stringify(players));
    }, [players]);

    useEffect(() => {
        localStorage.setItem('territoryId', JSON.stringify(territoryId));
    }, [territoryId]);

    useEffect(() => {
        localStorage.setItem('numterritories', JSON.stringify(numterritories));
    }, [numterritories]);

    useEffect(() => {
        localStorage.setItem('datosterritory', JSON.stringify(datosterritory));
    }, [datosterritory]);

    return (
        <AuthContext.Provider value={{ token, setToken, logout, user, setUser, gameId, setGameId, players, setPlayers, territoryId, setTerritoryId, numterritories, setNumterritories, datosterritory, setDatosterritory }}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;
