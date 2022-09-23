import React from 'react';
import '@styles/AccesoriosLaptop.scss'

const laptopImages = require.context("@pictures/laptops", true);

const AccesoriosEllas = () => {
    return (
        <div className="ellas">
            <h1>Accesorios para mujeres</h1>

            <section className="accesorios">
                <section className="accesorios-tipo">
                    <ul className="contenedor">

                        <li className="caja">
                            <h3>Adaptador USB</h3>
                            <img
                                src={laptopImages(`./adaptadorusb/1.jpg`)}
                                alt="Adaptador USB"
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