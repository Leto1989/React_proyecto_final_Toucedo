import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componentes/Home/Home';
import { DiscosProvider } from './Context/Context';

function App() {
  return (
    <>
      <DiscosProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/disco/:id" element={<p>Detalles del disco</p>} /> {/* Esta es la ruta para los detalles del disco */}
          </Routes>
        </BrowserRouter>
      </DiscosProvider>
    </>
  );
}

export default App;


