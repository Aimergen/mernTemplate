import { createContext, useEffect, useState } from "react";

export const CurrentUserContext =createContext(null);

export const CurrentUserProvider=({children})=>{
    const [currentUser, setCurrentUser]= useState(
        JSON.parse(localStorage.getItem('currentUser')) //localstorage deer bdag
    );

    useEffect(()=>{
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }, [currentUser]); 
    
    return (
      <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
        {children}
      </CurrentUserContext.Provider>
    );
};