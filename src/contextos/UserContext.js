import React , { createContext, useState } from 'react';

// 1. Crear el contexto
const UserContext = createContext();

// 2. Provider
const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null)

    const data = {
        userInfo,
        setUserInfo
    };

    return (
        <UserContext.Provider value={data}>
            { children }
        </UserContext.Provider>
    )
};

export { UserProvider };
export default UserContext;