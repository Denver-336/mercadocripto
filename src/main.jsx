import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { Cripto } from './component/pages/Cripto'
import { Home } from './component/pages/Home'
import { ListaCripto } from './component/pages/ListaCripto'
import Pagina404 from './component/pages/Pagina404'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
      </Route>

      <Route path='lista' element={<App />}>
        <Route index element={<ListaCripto />} />
        <Route path=':id' element={<Cripto />} />
      </Route>

      <Route path='*' element={<Pagina404 />} />
    </Routes>
  </BrowserRouter>

)
