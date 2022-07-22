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
            <Layout>
                <Routes>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/header' component={Header} />
                    <Route exact path='/accesorios' component={Accesorios} />
                    <Route path='*' component={NotFound} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}
export default App