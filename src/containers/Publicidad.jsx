import React from 'react';
import '@styles/Publicidad.scss'
import '../js/carrusel'

const Publicidad = () => {
    return (
        <section className="carrousel">            
            <div className="grande">
                <img src='../assets/img/developer.jpg' alt="imagen1" className='img'/>
                <img src='../assets/img/developer.jpg' alt="imagen2" className='img'/>
                <img src='../assets/img/developer.jpg' alt="imagen3" className='img'/>
                <img src='../assets/img/developer.jpg' alt="imagen4" className='img'/>
                <img src='../assets/img/developer.jpg' alt="imagen5" className='img'/>
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