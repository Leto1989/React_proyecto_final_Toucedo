import { useContext } from "react";
import { DiscosContext } from "../../Context/Context";
import { Link } from "react-router-dom"; 
import './Home.css'

const Home = () => {
  const { discos = [] } = useContext(DiscosContext);

  return (
    
    <div >
      <div className="titulo-catalogo">
      <h1>Catálogo</h1>
      </div>
      <div className="catalogo">
        {discos.length > 0 ? (
          discos.map((disco) => (
            <div key={disco.id} className="card">
              <img 
                src={disco.portada} 
                alt={disco.nombre} 
                style={{ width: '150px', height: '150px' }} 
                onError={'Portada no disponible'}
              />
              <h2>{disco.nombre}</h2>
              <p>{disco.artista}</p>
              <p>Precio: ${disco.precio}</p>
              <Link to={`/disco/${disco.id}`}>Ver detalles</Link>
            </div>
          ))
        ) : (
          <p>No se encontraron discos</p>
        )}
      </div>
    </div>
  );
};

export default Home;