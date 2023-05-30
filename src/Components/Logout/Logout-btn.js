import { useNavigate } from 'react-router-dom';
import React from 'react';
import Cookies from 'js-cookie';

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove('authorization');
        localStorage.removeItem('username , roles');
        window.location.reload();
        navigate('/');
    };



    return (
     
        <li><a href="" onClick={handleLogout}>Log out</a></li>
    );
}

export default Logout;