import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default({children})=>{
    const [userDetails, setUserDetails] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState("false");
    // useEffect(()=>{
        
    //     setUserDetails("user");
    //     setIsAuthenticated("hi");
        
    // },[]);
    
    return(
        <div>
            <AuthContext.Provider value={{userDetails, setUserDetails, isAuthenticated, setIsAuthenticated }}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}