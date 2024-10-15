import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componentes/Home/Home';
import { DiscosProvider } from './Context/Context';
import ItemDetail from './Componentes/ItemDetail/ItemDetail';

function App() {
  return (
    <>
      <DiscosProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/disco/:id" element={<ItemDetail />} />
          </Routes>
        </BrowserRouter>
      </DiscosProvider>
    </>
  );
}

export default App;


