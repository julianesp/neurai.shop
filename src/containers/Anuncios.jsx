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
                <div className="tipos">
                    <img src='../assets/img/shop.png' alt="" /> 1
                </div>
                <div className="tipos">
                    <img src='../assets/img/shop.png' alt="" /> 2
                </div>
                <div className="tipos">
                    <img src='../assets/img/shop.png' alt="" /> 3
                </div>
                <div className="tipos">
                    <img src='../assets/img/shop.png' alt="" /> 4
                </div>
                <div className="tipos">
                    <img src='../assets/img/shop.png' alt="" /> 5
                </div>
                <div className="tipos">
                    <img src='../assets/img/shop.png' alt="" /> 6
                </div>
            </div>
        </section>
    );
};

export default Anuncios;