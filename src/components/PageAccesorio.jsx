/**
 * This is the format that se watched when users 
 * den click in the option "Ver"
 */

import React from 'react';
import '@styles/PageAccesorio.scss'

const PageAccesorio = () => {
    // alert('ready');
    return (
        <section className='container-accesorios'>
            <div className="title">
                <h1>title</h1>
            </div>

            <div className='imgs'>
                <p>image</p>
            </div>

            <div className='send'>
                <h3>Costo de envío</h3>
                <p>$5.000</p>

                <h4>Opciones de pago:</h4>
                <ul>
                    <li>Nequi</li>
                    <li>Efecty</li>
                    <li>A la mano</li>
                </ul>
            </div>

            <div className="descripcion">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ea temporibus dicta quasi praesentium nemo cupiditate eius incidunt aspernatur, ratione quia! Reprehenderit voluptatum vitae eveniet dolorum perspiciatis dignissimos facilis laudantium?
                </p>
            </div>
        </section>
    );
};

export default PageAccesorio;