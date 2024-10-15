import { useContext } from "react";
import { DiscosContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom"; 
import './Home.css'

const Home = () => {
  const { discos = [] } = useContext(DiscosContext);

  const navigate = useNavigate();

  const handleVerDetalles = (id) => {
    console.log("Navegando al detalle del disco con id:", id);
    navigate(`/disco/${id}`);
  };

  return (
    <div className="home-container">
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
                className="portada"
              />
              <h2>{disco.nombre}</h2>
              <p>{disco.artista}</p>
              <p>Precio: ${disco.precio}</p>
              <button className="ver-detalles-btn" onClick={() => handleVerDetalles(disco.id)}>
                Ver detalles
              </button>
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