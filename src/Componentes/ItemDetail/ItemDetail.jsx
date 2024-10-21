import React, { useContext } from 'react';
import { DiscosContext } from "../../Context/Context";
import { useParams, useNavigate } from 'react-router-dom'; 
import './ItemDetail.css';

const ItemDetail = () => {
  const { id } = useParams(); 
  const { discos } = useContext(DiscosContext); 
  const navigate = useNavigate();
  
  // Busca el disco por ID
  const disco = discos.find(disco => disco.id === parseInt(id));
  console.log("Disco encontrado:", disco); // Verifica si el disco se encuentra

  if (!disco) {
    return (
      <div>
        <p>Disco no encontrado</p>
        <button onClick={() => navigate("/")}>Volver al catálogo</button>
      </div>
    );
  }

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div className="item-detail">
      <h1>Detalles del Disco</h1>
      <img 
        src={disco.portada} 
        alt={disco.nombre} 
        style={{ width: '300px', height: '300px', borderRadius: '10px' }} 
      />
      <h2>{disco.nombre}</h2>
      <p>Artista: {disco.artista}</p>
      <p>País: {capitalizeFirstLetter(disco.pais)}</p>
      <p>Año: {disco.lanzamiento}</p>
      <p>Género: {capitalizeFirstLetter(disco.genero)}</p>
      <p>Precio: ${disco.precio}</p>
      <button onClick={() => navigate("/")}>Volver al catálogo</button>
    </div>
  );
};

export default ItemDetail;