import React from 'react';
import '@styles/Publicidad.scss'
import '../js/carrusel'

// constante para traer imagenes
const img = require.context('@img/botones/', true)

const Publicidad = () => {
    return (
        <section className="carrousel">            
            <div className="grande">
                <img className='img'/>
                <img className='img'/>
                <img className='img'/>
                <img className='img'/>
                <img className='img'/>
            </div>

            {/* botones control */}
            <ul className='control'>
                    <img src={img(`./regresa.png`)} className='left' alt="" />
                    <img src={img(`./adelante.png`)} className='right' alt="" />
                {/* <li className='boton left'>
                    <img src={img(`./regresa.png`)} alt="" />
                </li>
                <li className='boton right'>
                    <img src={img(`./adelante.png`)} alt="" />
                </li> */}
            </ul>

            {/* <ul className="puntos">
                <li className="punto activo"></li>
                <li className="punto activo"></li>
                <li className="punto activo"></li>
                <li className="punto activo"></li>
                <li className="punto activo"></li>
            </ul> */}
        </section>
    );
};

export default Publicidad;