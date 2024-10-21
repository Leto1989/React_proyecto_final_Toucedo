import {Link} from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
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
          <Link to='/cartWidget'> Carrito </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
