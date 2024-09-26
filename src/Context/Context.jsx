import React, { Children } from "react";
import { createContext, useState } from "react";
import discos from '../array-discos/arrayDiscos'

export const DiscosContext = createContext();

export const DiscosProvider = ({children}) =>{
    const  [listaDiscos] = useState(discos);
    console.log(discos)

    return (
        <DiscosContext.Provider value={{discos: listaDiscos}}>
            {children}
        </DiscosContext.Provider>
    )
}