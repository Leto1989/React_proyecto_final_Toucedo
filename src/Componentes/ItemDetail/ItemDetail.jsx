import React, { useContext } from 'react';
import { DiscosContext } from "../../Context/Context";
import { useParams, useNavigate } from 'react-router-dom'; 
import './ItemDetail.css'

const ItemDetail = () => {
  const { id } = useParams(); 
  
  const { discos } = useContext(DiscosContext); 
  
  // Asegúrate de que el id sea un número y lo comparamos con disco.id
  const disco = discos.find(disco => disco.id === parseInt(id));
  console.log("Disco encontrado:", disco);

  if (!disco) {
    return (
      <div>
        <p>Disco no encontrado</p>
        <button onClick={() => navigate("/")}>Volver al catálogo</button>
      </div>
    );
  }

  return (
    <div className="item-detail">
      <h1>Detalles del Disco</h1>
      <img 
        src={disco.portada} 
        alt={disco.nombre} 
        style={{ width: '300px', height: '300px', borderRadius: '10px' }} 
      />
      <h2> {disco.nombre}</h2>
      <p>Artista: {disco.artista}</p>
      <p>País: {disco.pais}</p>
      <p>Año: {disco.lanzamiento}</p>
      <p>Género: {disco.genero}</p>
      <p>Precio: ${disco.precio}</p>
      <button onClick={() => navigate("/")}>Volver al catálogo</button>
    </div>
  );
};

export default ItemDetail;