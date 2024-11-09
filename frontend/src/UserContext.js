import { useState, useContext, createContext, useEffect } from 'react'

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('currentUser');
        return savedUser ? JSON.parse(savedUser) : null
    });

    useEffect(() =>  {
        if (user !== null) {
            localStorage.setItem('currentUser', JSON.stringify(user));
        }
    }, [user]);
    

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)