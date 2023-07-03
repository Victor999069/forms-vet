import { useState } from "react";
import { AppContext } from "./AppContext";

export default function AppProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        {children}
    </AppContext.Provider>;
}
