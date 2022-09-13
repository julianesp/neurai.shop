import React from 'react';
import '@styles/Publicidad.scss'

const Publicidad = () => {
    return (
        <section className="carrousel">            
            <div className="grande">
                <img src='#' alt="" className='img'/>
                <img src='#' alt="" className='img'/>
                <img src='#' alt="" className='img'/>
                <img src='#' alt="" className='img'/>
                <img src='#' alt="" className='img'/>
            </div>

            <ul className="puntos">
                <li className="punto"></li>
                <li className="punto"></li>
            </ul>
        </section>
    );
};

export default Publicidad;