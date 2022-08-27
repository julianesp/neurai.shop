import React from 'react';
import '@styles/Publicidad.scss'

const imgs = require.context('@img/', true)

const Publicidad = () => {
    return (
        <section className="negocios">
            <ul className='negocios-contenedor'>
                <li>                    
                    <img src={imgs(`developer.jpg`)} alt="" />                    
                </li>
                <li>
                    <button>anuncio2</button>
                </li>
                <li>
                    <button>anuncio3</button>
                </li>
                <li>
                    <button>anuncio4</button>
                </li>
                <li>
                    <button>anuncio5</button>
                </li> 
            </ul>
        </section>
    );
};

export default Publicidad;