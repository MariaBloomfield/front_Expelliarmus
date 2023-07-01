import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [user, setUser] = useState(localStorage.getItem('user') || null);
    const [gameId, setGameId] = useState(localStorage.getItem('gameId') || null);
    const [players, setPlayers] = useState(localStorage.getItem('players') || null);
    const [territoryId, setTerritoryId] = useState(localStorage.getItem('territoryId') || null);
    const [numterritories, setNumterritories] = useState(localStorage.getItem('numterritories') || 10);
    const [datosterritory, setDatosterritory] = useState(localStorage.getItem('datosterritory') || null);
    const [winner, setWinner] = useState(localStorage.getItem('winner') || null);
    const [armyInfo, setArmyinfo] = useState(() => {
        const storedArmyInfo = localStorage.getItem('armyInfo');
        return storedArmyInfo !== null ? JSON.parse(storedArmyInfo) : null;
    });
    const [attacks, setAttacks] = useState(localStorage.getItem('attacks') || 0);
    const [gameTurn, setGameTurn] = useState(localStorage.getItem('gameTurn') || 1);
    const [color, setColor] = useState(localStorage.getItem('color') || null);

    function logout() {
        setToken(null);
        setUser(null);
        setGameId(null);
        setPlayers(null);
        setTerritoryId(null);
        setNumterritories(10);
        setDatosterritory(null);
        setWinner(null);
        setAttacks(0);
        setColor(null);
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

    useEffect(() => {
        localStorage.setItem('winner', JSON.stringify(winner));
    }, [winner]);

    useEffect(() => {
        if (armyInfo !== null && armyInfo !== undefined) {
          localStorage.setItem('armyInfo', JSON.stringify(armyInfo));
        } else {
          localStorage.removeItem('armyInfo');
        }
    }, [armyInfo]);

    useEffect(() => {
        localStorage.setItem('attacks', JSON.stringify(attacks));
    }, [attacks]);

    useEffect(() => {
        localStorage.setItem('gameTurn', JSON.stringify(gameTurn));
    }, [gameTurn]);

    useEffect(() => {
        localStorage.setItem('color', JSON.stringify(color));
    }, [color]);
      
      
    return (
        <AuthContext.Provider value={{ token, setToken, logout, user, setUser, gameId, setGameId, players, setPlayers, territoryId, setTerritoryId, numterritories, setNumterritories, datosterritory, setDatosterritory, winner, setWinner, armyInfo, setArmyinfo, attacks, setAttacks, gameTurn, setGameTurn, color, setColor }}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;
