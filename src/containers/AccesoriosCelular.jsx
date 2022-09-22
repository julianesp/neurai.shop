import React from 'react';
import '@styles/AccesoriosCelular.scss';
import { NavLink } from 'react-router-dom';

const cellphoneImages = require.context("@pictures/celulares/", true);

const AccesoriosCelular = () => {
    return (
        <div className='celulares'>
            <h1>Accesorios para celulares</h1>

            <section className='accesorios'>
                <section className="accesorios-tipo">

                    <ul className="contenedor">
                        <li className="caja">
                            <h3>Brazalete</h3>
                            <img src={cellphoneImages(`./brazalete/1.png`)}
                                alt="Brazalete celulares"
                            />
                            <NavLink to='/pageAcce'>
                                <button>Ver</button>
                            </NavLink>
                        </li>
                        <li className="caja">
                            <h3>Correa reloj</h3>
                            <img src={cellphoneImages(`./correa/1.jpg`)}
                                alt="Correa para reloj inteligente"/>
                            <button>Ver</button>

                        </li>
                        <li className="caja">
                            <h3>Funda iPhone</h3>
                            <img
                                src={cellphoneImages(`./fundaiphone/1.jpg`)}
                                alt="Funda para iPhone"
                            />
                            <button>Ver</button>
                        </li>
                        <li className="caja">
                            <h3>Puerto USB - Tipo C</h3>
                            <img
                                src={cellphoneImages(`./inputtipoc/1.jpg`)}
                                alt="Puerto USB - Tipo C"
                            />
                            <button>Ver</button>
                        </li>
                        <li className="caja">
                            <h3>Micrófono</h3>
                            <img
                                src={cellphoneImages(`./microfono/1.jpg`)}
                                alt="Micrófono condensador"
                            />
                            <button>Ver</button>
                        </li>
                        <li className="caja">
                            <h3>Memoria Sandisk 16 GB</h3>
                            <img
                                src={cellphoneImages(`./sandisk16/1.jpg`)}
                                alt="Memoria Sandisk 16 GB"
                            />
                            <button>Ver</button>
                        </li>
                        <li className="caja">
                            <h3>Soporte estático</h3>
                            <img
                                src={cellphoneImages(`./soporte/1.jpg`)}
                                alt="Soporte estático"
                            />
                            <button>Ver</button>
                        </li>
                        <li className="caja">
                            <h3>Soporte móvil</h3>
                            <img
                                src={cellphoneImages(`./soportemovil/1.jpg`)}
                                alt="Soporte móvil"
                            />
                            <button>Ver</button>
                        </li>
                        <li className="caja">
                            <h3>Cable USB iPhone</h3>
                            <img
                                src={cellphoneImages(`./usbiphone/1.jpg`)}
                                alt="Cable USB iPhone"
                            />
                            <button>Ver</button>
                        </li>
                        <li className="caja">
                            <h3>Cable USB - Micro A</h3>
                            <img
                                src={cellphoneImages(`./usbv/1.png`)}
                                alt="Cable USB - Micro A"
                            />
                            <button>Ver</button>
                        </li>
                        <li className="caja">
                            <h3>Vidrio templado</h3>
                            <img
                                src={cellphoneImages(`./vidrio/1.jpg`)}
                                alt="Vidrio templado"
                            />
                            <button>Ver</button>
                        </li>
                    </ul>
                </section>
            </section>
        </div>
    );
};

export default AccesoriosCelular;