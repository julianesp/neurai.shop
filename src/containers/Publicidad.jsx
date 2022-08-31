import React from 'react';
import '@styles/Publicidad.scss'

const imgs = require.context('@img/', true)

const Publicidad = () => {
    return (
        <section className="negocios">
            <ul className='negocios-contenedor'>
                <li>                    
                    <img src={imgs(`./shop.png`)} alt="" />    
                </li>
                <li>                    
                    <img src={imgs(`./shop.png`)} alt="" />    
                </li>
                <li>                    
                    <img src={imgs(`./shop.png`)} alt="" />    
                </li>
                <li>                    
                    <img src={imgs(`./shop.png`)} alt="" />    
                </li>
            </ul>
        </section>
    );
};

export default Publicidad;