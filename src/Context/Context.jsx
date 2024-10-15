import React, { createContext, useState } from "react";
import discos from '../array-discos/arrayDiscos'; // Importa tu array de discos

export const DiscosContext = createContext();

export const DiscosProvider = ({ children }) => {
   const [listaDiscos] = useState(discos);

   return (
      <DiscosContext.Provider value={{ discos:listaDiscos }}>
         {children}
      </DiscosContext.Provider>
   );
};