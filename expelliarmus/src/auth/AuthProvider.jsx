import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [user, setUser] = useState(localStorage.getItem('user') || null);

    function logout() {
        setToken(null);
        setUser(null);
    }

    useEffect(() => {
        localStorage.setItem('token', token);
    }, [token]);

    useEffect(() => {
        localStorage.setItem('userId', JSON.stringify(user));
    });

    return (
        <AuthContext.Provider value={{ token, setToken, logout, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;
