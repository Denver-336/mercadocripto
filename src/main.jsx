import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { Cripto } from './component/pages/Cripto'
import { ListaCripto } from './component/pages/ListaCripto'
import Pagina404 from './component/pages/Pagina404'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/lista' element={<ListaCripto />} />
            <Route path='/cripto' element={<Cripto />} />
            <Route path='*' element={<Pagina404 />} />
            
        </Routes>
    </BrowserRouter>

)
