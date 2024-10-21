// CartWidget.jsx
import React, { useContext } from 'react';
import { DiscosContext } from '../../Context/Context';
import './CartWidget.css';

const CartWidget = () => {
  const { carrito } = useContext(DiscosContext);

  const total = carrito.reduce((acc, disco) => acc + disco.precio * disco.cantidad, 0);

  return (
    <div className="cart-widget">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>No hay discos en el carrito</p>
      ) : (
        <ul>
          {carrito.map((disco) => (
            <li key={disco.id}>
              <img src={disco.portada} alt={disco.nombre} style={{ width: '50px', height: '50px' }} />
              <span>{disco.nombre} - ${disco.precio} x {disco.cantidad}</span>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default CartWidget;
