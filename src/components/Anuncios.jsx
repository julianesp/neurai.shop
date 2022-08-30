import React from 'react';
import '@styles/Anuncios.scss';
// import '@img/'

const Anuncios = () => {
    return (
        <section className='container'>
            <div className="title">
                <h3>Tiendas del pueblo</h3>
            </div>

            <div className="stores">
                <div className="contenido">
                    <img src='../assets/img/shop.png' alt="" />
                </div>
                <div className="contenido">
                    <img src='../assets/img/shop.png' alt="" />
                </div>
                <div className="contenido">
                    <img src='../assets/img/shop.png' alt="" />
                </div>
            </div>
        </section>
    );
};

export default Anuncios;