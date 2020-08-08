import { useReducer, useContext } from 'react';

const AUTH_CONTEXT = React.createContext({ user: {} });

const authReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_USER_TOKEN':
            return { ...state, userToken: action.payload };
        case 'UPDATE_OWNER_TOKEN':
            return { ...state, ownerToken: action.payload };
        case 'UPDATE_BUSINESS_TOKEN':
            return { ...state, businessToken: action.payload };
        case 'UPDATE_BUSINESS_ID':
            return { ...state, businessId: action.payload };
        default:
            throw new Error('Unexpected action');
    }
};

export const AuthProvider = ({ children }) => {
    const [user, dispatch] = useReducer(authReducer, initialAuthData);

    return (
        <AUTH_CONTEXT.Provider value={[user, dispatch]}>
            {children}
        </AUTH_CONTEXT.Provider>
    );
};

const initialAuthData = {
    userToken: undefined,
    ownerToken: undefined,
    businessToken: undefined,
    businessId: undefined
};

export const useAuth = () => useContext(AUTH_CONTEXT);
