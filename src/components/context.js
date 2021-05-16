import React, { useContext, useState } from "react";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [isloggedIn, setIsLoggedIn] = useState(false);
    const [accessKey, setAccessKey] = useState("");

    const signIn = (key) => {
        setIsLoggedIn(true);
        setAccessKey(key);
    };

    const signOut = () => {
        setIsLoggedIn(false);
        setAccessKey("");
    };

    return (
        <UserContext.Provider
            value={{
                isloggedIn,
                accessKey,
                signIn,
                signOut,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(UserContext);
};

export { UserContext, UserProvider };
