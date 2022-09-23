import React from 'react';
import '@styles/AccesoriosLaptop.scss'

const ellas = require.context("@pictures/ellas", true);

const AccesoriosEllas = () => {
    return (
        <div className="ellas">
            <h1>Accesorios para mujeres</h1>

            <section className="accesorios">
                <section className="accesorios-tipo">
                    <ul className="contenedor">

                        <li className="caja">
                            <h3>Brochas maquillaje</h3>
                            <img
                                src={ellas(`./brochas/1.jpg`)}
                                alt="Brochas maquillaje"
                            />
                            <button>Ver</button>
                        </li>
                        
                    </ul>
                </section>
            </section>
        </div>

    );
};

export default AccesoriosEllas;