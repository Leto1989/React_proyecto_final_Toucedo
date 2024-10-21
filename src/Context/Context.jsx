// Context.jsx
import React, { createContext, useState } from "react";
import discos from '../array-discos/arrayDiscos'; // Importa tu array de discos

export const DiscosContext = createContext();

export const DiscosProvider = ({ children }) => {
   const [listaDiscos] = useState(discos);
   const [carrito, setCarrito] = useState([]);

   
   const agregarAlCarrito = (disco) => {
     setCarrito((prevCarrito) => {
       const discoExistente = prevCarrito.find(item => item.id === disco.id);
       if (discoExistente) {
        
         return prevCarrito.map(item => 
           item.id === disco.id ? { ...item, cantidad: item.cantidad + 1 } : item
         );
       }
       
       return [...prevCarrito, { ...disco, cantidad: 1 }];
     });
   };

   return (
      <DiscosContext.Provider value={{ discos: listaDiscos, agregarAlCarrito, carrito }}>
         {children}
      </DiscosContext.Provider>
   );
};
