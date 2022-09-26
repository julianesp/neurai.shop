import React from 'react';
import '@styles/Publicidad.scss'
import '../js/carrusel'

const Publicidad = () => {
    return (
        <section className="carrousel">            
            <div className="grande">
                <img className='img'/>
                <img src='../assets/img/developer.jpg' className='img'/>
                <img src='../assets/img/developer.jpg' className='img'/>
                <img src='../assets/img/developer.jpg' className='img'/>
                <img src='../assets/img/developer.jpg' className='img'/>
            </div>

            <ul className="puntos">
                <li className="punto activo"></li>
                <li className="punto"></li>
                <li className="punto"></li>
                <li className="punto"></li>
                <li className="punto"></li>
            </ul>
        </section>
    );
};

export default Publicidad;