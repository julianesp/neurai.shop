import React from 'react';
import '@styles/Publicidad.scss'
import '../js/botones.js'

const imgs = require.context('@img/aleatorias/', true)

const Publicidad = () => {
    return (
        <section className="negocios">
            {/* <ul className='negocios-contenedor'>

                <div className="botones">
                </div>

                <div className="atras boton">
                    <img src={imgs(`./arrowLeft.png`)} alt="Flecha izquierda" />
                    atras
                </div>

                <div className="adelante boton">
                    <img src={imgs(`./arrowRight.png`)} alt="Flecha derecha" />
                </div>


                <img src={imgs(`./bosque.jpg`)} alt="" className='imgChange' />
                <li>            
                    <img src={imgs(`./shop.png`)} alt="" id='imagen' className='imgChange'/> 
                </li>
            </ul> */}

            <div className="negocios-contenedor">
                <div className="atras boton">
                    atras
                </div>

                <div className="adelante boton">
                    adelante
                </div>
                <img src={imgs(`./bosque.jpg`)} alt=""/>
            </div>
        </section>
    );
};

export default Publicidad;