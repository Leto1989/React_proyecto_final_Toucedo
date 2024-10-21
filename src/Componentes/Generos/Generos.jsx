import React, { useContext, useState } from 'react';
import { DiscosContext } from '../../Context/Context';
import DiscoItem from '../DiscoItem/DiscoItem'; 
import './Generos.css'

const Generos = () => {
  const { discos } = useContext(DiscosContext);
  const [filtro, setFiltro] = useState(null);

  const generosUnicos = [...new Set(discos.map(disco => disco.genero))];
  const discosFiltrados = filtro ? discos.filter(disco => disco.genero === filtro) : [];

  return (
    <div className='generos-page'>
      <h1>Géneros</h1>
      <ul className='generos-list'>
        {generosUnicos.map((genero, index) => (
          <li key={index} onClick={() => setFiltro(genero)}>
            {genero}
          </li>
        ))}
      </ul>

      <div className='catalogo-filtrado'>
        {discosFiltrados.length > 0 ? (
          discosFiltrados.map(disco => (
            <DiscoItem key={disco.id} disco={disco} />
          ))
        ) : (
          <p>No hay discos en este género.</p>
        )}
      </div>
    </div>
  );
};

export default Generos;
