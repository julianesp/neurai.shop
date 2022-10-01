import React from 'react';
import '@styles/Anuncios.scss';

const tiendas = require.context("@img/", true);

const Anuncios = () => {    
    return (        
        <section className='container'>
            <div className="stores">
                <ul className='store-listado'>
                    <li className='tipos'>
                        <p>Pide tu lugar para mostrar tu tienda</p>
                        <img src={tiendas(`./store.png`)} alt="" />
                    </li>
                    <li className='tipos'>
                        <p>Pide tu lugar para mostrar tu tienda</p>
                        <img src={tiendas(`./store.png`)} alt="" /> 
                    </li>
                    <li className='tipos'>
                        <p>Pide tu lugar para mostrar tu tienda</p>
                        <img src={tiendas(`./store.png`)} alt="" /> 
                    </li>
                    <li className='tipos'>
                        <p>Pide tu lugar para mostrar tu tienda</p>
                        <img src={tiendas(`./store.png`)} alt="" /> 
                    </li>
                    <li className='tipos'>
                        <p>Pide tu lugar para mostrar tu tienda</p>
                        <img src={tiendas(`./store.png`)} alt="" /> 
                    </li>
                    <li className='tipos'>
                        <p>Pide tu lugar para mostrar tu tienda</p>
                        <img src={tiendas(`./store.png`)} alt="" /> 
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Anuncios;