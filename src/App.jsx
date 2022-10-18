import { useState } from 'react'
import { render } from "react-dom";
import {UserProvider} from './context/UserContext'
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './pages/Home'
import Fincas from './pages/Fincas'
import Obreros from './pages/Obreros'
import Ventas from './pages/Ventas'
import Compras from './pages/Compras';
import NewFinca from './pages/newFinca';
import Login from './pages/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'

function App() {
  const userData = {
    token: null,
    userName: null
  }
  return (
    <UserProvider>
      <BrowserRouter>
            <div className="flex flex-col h-screen w-full">
              <Header/>
                  <Routes>
                      <Route path="/" element={<Login/>} />
                      <Route path="/home" element={<Home/>} />
                      <Route path="fincas" element={<Fincas />} />
                      <Route path="obreros" element={<Obreros />} />
                      <Route path="compras" element={<Compras />} />
                      <Route path="ventas" element={<Ventas />} />
                      <Route path="newFinca" element={<NewFinca />} />
                  </Routes>
              <Footer/>
            </div>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
