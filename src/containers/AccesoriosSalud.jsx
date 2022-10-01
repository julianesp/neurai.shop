import React, { useContext } from 'react';
import '@styles/AccesoriosCelular.scss';
import { NavLink } from 'react-router-dom';

const salud = require.context("@pictures/salud/", true);

const AccesoriosCelular = () => {
    return (
        <div className='celulares'>
            <h1>Accesorios Salud</h1>

            <section className='accesorios'>
                <section className="accesorios-tipo">

                    <ul className="contenedor">
                        <li className="caja">
                            <h3>Oxímetro</h3>
                            <img src={salud(`./oximetro/1.jpg`)}
                                alt="Oxímetro"
                            />
                            <NavLink to='/salud'>
                                <button>Ver</button>
                            </NavLink>
                        </li>                        
                    </ul>
                </section>
            </section>
        </div>
    );
};

export default AccesoriosCelular;