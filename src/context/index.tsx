"use client";

import {createContext, useContext, useState} from "react";
import {UserInterface} from "@/interfaces/user.interface";

interface AppContextInterface {
    user: UserInterface;
    setUser: (user: UserInterface) => void;
}

const AppContext = createContext<AppContextInterface>(null);

export const ContextWrapper = ({children}) => {
    const [user, setUser] = useState<UserInterface>(null)

    return (
        <AppContext.Provider value={{user, setUser}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}
