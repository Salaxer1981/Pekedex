import { useState } from 'react'
import './App.css'
import Pokedex from './components/Pokedex'
import Items from './components/Items'
import Home from './components/Home'
import { HashRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './components/ProtectedRoutes'



function App() {


  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:id' element={<Items />} />
          </Route>

        </Routes>
        <footer>
          <p>By <strong>Alexander Cedeño</strong> | G-21 ACADEMLO</p>
        </footer>
      </HashRouter>
    </div>
  )
}

export default App
