import React from 'react'
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'
import Header from '../components/Header'
import Layout from '../containers/Layout'
import Accesorios from '../containers/Accesorios'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Profile from '../containers/Profile'
import Footer from '../containers/Footer'
import Menu from '../containers/Menu'
import PageAccesorio from '../components/PageAccesorio'
import '../js/carrusel'
import ProductosCelulares from '../components/ProductosCelulares'
import ProductosLaptop from '../components/ProductosLaptop'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/products' element={<Accesorios />} />
                    <Route exact path='/profile' element={<Profile />} />
                    <Route exact path='/pageAcce' element={<PageAccesorio />} />
                    {/* <Route exact path='/accesoriosCelulares' element={<AccesoriosCelular />} /> */}
                    <Route exact path='/accesoriosCelulares' element={<ProductosCelulares />} />
                    <Route exact path='/accesoriosLaptops' element={<ProductosLaptop />} />

                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Menu />
                <Footer />
            </Layout>
        </BrowserRouter>
    )
}
export default App