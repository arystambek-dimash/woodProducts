import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const login = (username) => setUser({ name: username });
    const logout = () => setUser(null);

    const value = {
        user,
        login,
        logout
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
