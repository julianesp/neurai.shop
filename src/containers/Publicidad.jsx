import React from 'react';
import '@styles/Publicidad.scss'
import '../js/carrusel'

// constante para traer imagenes
const img = require.context('@img/botones/', true)
const publicidad = require.context('@img/presentacion/', true)

const Publicidad = () => {
    return (
        <section className="container-slider">            
            <div className="slider" id='slider'>

                <div className="slider__section">
                    <img className='slider__img' src={publicidad(`./park.jpg`)} />
                    
                </div>

                <div className="slider__section">
                    <img className='slider__img' src={publicidad(`./trabajo_1.png`)}/>
                    

                </div>
                <div className="slider__section">
                    <img className='slider__img' src={publicidad(`./park.jpg`)} />
                    

                </div>

                <div className="slider__section">
                    <img className='slider__img' src={publicidad(`./trabajo_1.png`)}/>
                    

                </div>
            </div>

            <div className="boton left">
                <img src={img(`./regresa.png`)} alt="" id='btn-right'/>
            </div>
            <div className="boton right">
                <img src={img(`./adelante.png`)} alt="" id='btn-left'/>
            </div>
        </section>
    );
};

export default Publicidad;