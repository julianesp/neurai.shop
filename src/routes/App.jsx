import React from 'react'
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'
import Header from '../components/Header'
import Layout from '../containers/Layout'
import Accesorios from '../containers/Accesorios'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Accesorios />} />
                <Route path='/not' element={<NotFound />} />           
            </Routes>
        </BrowserRouter>
    )
}
export default App