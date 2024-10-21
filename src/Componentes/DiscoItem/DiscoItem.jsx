import React, { useContext } from 'react';
import { DiscosContext } from '../../Context/Context';
import './DiscoItem.css'; // Asegúrate de tener un CSS para DiscoItem

const DiscoItem = ({ disco }) => {
  const { agregarAlCarrito } = useContext(DiscosContext);

  const handleAddToCart = () => {
    agregarAlCarrito(disco);
    alert(`${disco.nombre} ha sido agregado al carrito!`);
  };

  return (
    <div className="disco-item">
      <img src={disco.portada} alt={disco.nombre} style={{ width: '100px', height: '100px' }} />
      <h3>{disco.nombre}</h3>
      <p>Artista: {disco.artista}</p>
      <p>Precio: ${disco.precio}</p>
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  );
};

export default DiscoItem;