import { useState } from 'react'
import Home from './Componentes/Home/Home'
import { DiscosProvider } from './Context/Context'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
      <DiscosProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/disco/:id'  />
          </Routes>
        </BrowserRouter>
      </DiscosProvider>
    </>
  )
}

export default App
