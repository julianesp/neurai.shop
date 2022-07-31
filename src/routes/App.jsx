import React from 'react'
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom'
import Header from '../components/Header'
import Layout from '../containers/Layout'
import Accesorios from '../containers/Accesorios'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Profile from '../containers/Profile'
import Footer from '../containers/Footer'
import Navegacion from '../components/Navegacion'
import Anuncios from '../components/Anuncios'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Header />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/products' element={<Accesorios />} />
                    <Route exact path='/profile' element={<Profile />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </Layout>
        </BrowserRouter>
    )
}
export default App