import React from 'react';
import '@styles/Anuncios.scss';
// import '@img/'

const Anuncios = () => {
    return (
        <section className='container'>
            {/* <div className="title">
                <h3>Tiendas del pueblo</h3>
            </div> */}

            <div className="stores">
                <ul className='store-listado'>
                    <li className='tipos'>
                        <img src='../assets/img/shop.png' alt="" /> 1
                    </li>
                    <li className='tipos'>
                        <img src='../assets/img/shop.png' alt="" /> 1
                    </li>
                    <li className='tipos'>
                        <img src='../assets/img/shop.png' alt="" /> 1
                    </li>
                    <li className='tipos'>
                        <img src='../assets/img/shop.png' alt="" /> 1
                    </li>
                    <li className='tipos'>
                        <img src='../assets/img/shop.png' alt="" /> 1
                    </li>
                    <li className='tipos'>
                        <img src='../assets/img/shop.png' alt="" /> 1
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Anuncios;