import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        {children}
    </AppContext.Provider>;
}
