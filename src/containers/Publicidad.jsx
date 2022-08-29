import React from 'react';
import '@styles/Publicidad.scss'

const imgs = require.context('@img/', true)
const parque = require.context('@img/presentacion/', true)

const Publicidad = () => {
    return (
        <section className="negocios">
            <ul className='negocios-contenedor'>
                <li>                    
                    <img src={parque(`./park.jpg`)} alt="" />
                </li>
                <li>
                    <img src={imgs(`./developer.jpg`)} alt="" />
                </li>
                <li>
                    <img src={imgs(`./developer.jpg`)} alt="" />
                </li>
                <li>
                    <img src={imgs(`./developer.jpg`)} alt="" />
                </li>
                <li>
                    <img src={imgs(`./developer.jpg`)} alt="" />
                </li> 
            </ul>
        </section>
    );
};

export default Publicidad;