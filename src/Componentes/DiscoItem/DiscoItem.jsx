import React from 'react';
import { Link } from 'react-router-dom';
import './DiscoItem.css'

const DiscoItem = ({ disco }) => {
  return (
    <div className="disco-item">
      <Link to={`/disco/${disco.id}`}>
        <img src={disco.portada} alt={disco.nombre} style={{ width: '100px', height: '100px' }} />
        <h3>{disco.nombre}</h3>
        <p>Artista: {disco.artista}</p>
        <p>Precio: ${disco.precio}</p>
      </Link>
    </div>
  );
};

export default DiscoItem;