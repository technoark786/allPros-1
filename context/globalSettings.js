import { useContext, useState, useEffect } from 'react';
import api from '../lib/api';
import { useAuth } from './authContext';

const CONFIG_CONTEXT = React.createContext({ user: {} });

export const ConfigProvider = ({ children }) => {
    const [config, setConfig] = useState(initialConfigData);
    const [{businessId}] = useAuth()
    
    // const fetchData = async () => {
    //     const { data } = await api.get('/settings');
    //     setConfig({ dateFormat: data.dateFormat });
    // };
    // useEffect(() => {
    //     fetchData();
    // }, [businessId]);

    return (
        <CONFIG_CONTEXT.Provider value={[config, setConfig]}>
            {children}
        </CONFIG_CONTEXT.Provider>
    );
};

const initialConfigData = {
    dateFormat: 'MM/dd/yyyy',
};

export const useConfig = () => useContext(CONFIG_CONTEXT);
