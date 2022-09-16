import React from 'react';
import '@styles/AccesoriosCelular.scss'
import useGetProductos from '../hooks/useGetProducts'; '../hooks/useGetProducts'

const API = '../js/productosAPI.js'

const AccesoriosCelular = () => {
    const products = useGetProductos(API)

    return (
        <div className='celulares'>
            <h1>Accesorios para celulares</h1>

            {/* Cargando accesorios desde array  */}
            {products.map(product => (
                {API}
            ))}

        </div>
    );
};

export default AccesoriosCelular;