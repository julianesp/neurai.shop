import React from 'react';
import '@styles/Publicidad.scss'
import '../js/carrusel'

const Publicidad = () => {
    return (
        <section className="carrousel">            
            <div className="grande">
                <img src='../assets/img/developer.jpg' alt="imagen1" className='img'/>
                <img src='@img/' alt="imagen2" className='img'/>
                <img src='@img/sena.png' alt="imagen3" className='img'/>
                <img src='@img/' alt="imagen4" className='img'/>
                <img src='@img/' alt="imagen5" className='img'/>
            </div>

            <ul className="puntos">
                <li className="punto activo"></li>
                <li className="punto activo"></li>
                <li className="punto activo"></li>
                <li className="punto activo"></li>
                <li className="punto activo"></li>
            </ul>
        </section>
    );
};

export default Publicidad;