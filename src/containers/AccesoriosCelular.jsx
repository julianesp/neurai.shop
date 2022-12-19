import React, { useEffect, useState, useContext } from 'react';
import '@styles/AccesoriosCelular.scss';
import { NavLink } from 'react-router-dom';

const cellphoneImages = require.context("@pictures/celulares/", true);

const AccesoriosCelular = () => {
    return (
        <div className="celulares">
            <h1>Accesorios para celulares</h1>

            <section className="accesorios">
                <section className="accesorios-tipo">
                    <ul className="contenedor">
                        <li className="caja">
                            <h3>Brochas maquillaje</h3>
                            <img
                                src={cellphoneImages(`./correa/1.jpg`)}
                                alt="Brochas maquillaje"
                            />
                            <NavLink to='/pageAcce'>
                                <button>Ver</button>
                            </NavLink>
                        </li>
                    </ul>
                </section>
            </section>
        </div>

    );
};

export default AccesoriosCelular