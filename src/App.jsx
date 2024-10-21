import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componentes/Home/Home';
import { DiscosProvider } from './Context/Context';
import ItemDetail from './Componentes/ItemDetail/ItemDetail';
import Carrito from './Componentes/CartWidget/CartWidget';
import Navbar from './Componentes/Navbar/Navbar';
import Generos from './Componentes/Generos/Generos';

function App() {
  return (
    <>
      <DiscosProvider>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/disco/:id" element={<ItemDetail />} />
            <Route path="/generos" element={<Generos/>} />
            <Route path="/cartWidget" element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </DiscosProvider>
    </>
  );
}

export default App;


