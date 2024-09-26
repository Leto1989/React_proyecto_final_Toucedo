import { useContext } from 'react';
import { DiscosContext } from '../../Context/Context';

const Home = () => {
  const { discos } = useContext(DiscosContext);

  // Verifica si los discos se están cargando
  console.log(discos);

  return (
    <div>
      <h1>Catálogo</h1>
      <div>
        {discos.length > 0 ? (
          discos.map((disco) => (
            <card key={disco.id}>
              <img 
                src={disco.portada} 
                alt={disco.nombre} 
                style={{ width: '150px', height: '150px' }} 
              />
              <p>{disco.nombre}</p>
              <p>{disco.artista}</p>
              <p>Precio: ${disco.precio}</p>
            </card>
          ))
        ) : (
          <p>No se encontraron discos</p>
        )}
      </div>
    </div>
  );
};

export default Home;
