import React, { useContext } from "react";
import { DiscosContext } from "../../Context/Context";


const normalizeName = (name) => {
  return name
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")  
    .replace(/\s+/g, '_')  
    .replace(/[^a-z0-9_-]/g, ''); 
};

const ListaDiscos = () => {
  const { listaDiscos } = useContext(DiscosContext);

  
  const discosURL = listaDiscos.map(disco => ({
    ...disco,
    URL: `/portadas/${normalizeName(disco.nombre)}.jpg`
  }));

  return (
    <div>
      {discosURL.map((disco) => (
        <div key={disco.id}>
          <h3>{disco.nombre}</h3>
          <img 
            src={disco.URL} 
            alt={disco.nombre}
            onError={(e) => {
              e.target.src = "/portadas/default.jpg";  
              e.target.alt = "Portada no disponible";
            }} 
          />
        </div>
      ))}
    </div>
  );
};

export default ListaDiscos;
