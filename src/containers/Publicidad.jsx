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

            <div className="boton left">
                <img src={img(`./regresa.png`)} alt="" />
            </div>
            <div className="boton right">
                <img src={img(`./adelante.png`)} alt="" />
            </div>
        </section>
    );
};

export default Publicidad;