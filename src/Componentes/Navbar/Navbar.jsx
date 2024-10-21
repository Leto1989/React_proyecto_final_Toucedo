import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DiscosContext } from '../../Context/Context';
import './Navbar.css';

const Navbar = () => {
  const { carrito } = useContext(DiscosContext);

  return (
    <nav>
      <ul>
        <h1>
          Garage
          <p> Tienda de discos online</p>
        </h1>
        
        <li>
          <Link to='/'> Home </Link>
        </li>
        <li>
          <Link to='/generos'> Géneros </Link>
        </li>
        <li>
          <Link to="/carrito">Carrito ({carrito.length})</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;