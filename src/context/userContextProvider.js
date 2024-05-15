import React, { createContext, useState } from "react";

const Context = createContext();

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(() => window.localStorage.getItem('loggedNoteappUser'));

    return <Context.Provider value={{ user, setUser }}>
        {children}
    </Context.Provider>;
}

export default Context;