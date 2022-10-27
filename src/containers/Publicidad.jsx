import React from 'react';
import '@styles/Publicidad.scss'
// import '../js/carrusel.js'

// constante para traer imagenes
const img = require.context('@img/botones/', true)
const first = require.context('@img/', true)

const Publicidad = () => {

    return (
        <section className="contenedor">

            <div className="atras botones">
                <img src={img(`./regresa.png`)} alt="" id='btn-right'/>
            </div>

            <div className="adelante botones">
                <img src={img(`./adelante.png`)} alt="" id='btn-left'/>
                                
            </div>

            <img src={first(`./developer_2.jpg`)} className='imagend' alt=""  />

        </section>
    );
};

export default Publicidad;