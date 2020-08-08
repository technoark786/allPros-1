import React, { useEffect } from 'react';
// import api from '../lib/api';
import { useRouter } from 'next/router';
// import { useAuth } from '../context/authContext';

function logout(props) {
    const router = useRouter();
    // const [state, dispatch] = useAuth();
    const fetchData = () => {
        try {
            localStorage.removeItem("authToken")
            router.push('/login');
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (null);
}

export default logout;