import React, { useContext, useEffect } from 'react';
import { AuthContext } from './auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = async () => {
            await logout();
            navigate('/');
        };

        handleLogout();
    }, [logout, navigate]);

    return <div>Logging out...</div>;
};

export default Logout;