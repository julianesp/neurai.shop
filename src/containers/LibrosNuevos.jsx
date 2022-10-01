import React from 'react';
import '@styles/AccesoriosLaptop.scss'

const librosNuevos = require.context("@pictures/books/nuevos/", true);

const AccesoriosLaptop = () => {
    return (
        <div className="laptops">
            <h1>Libros nuevos</h1>

            <section className="accesorios">
                <section className="accesorios-tipo">
                    <ul className="contenedor">
                    <li className="caja">
                        <h3>Ama y no sufras</h3>
                        <img
                            src={librosNuevos(`./ama.jpg`)}
                            alt="Ama y no sufras"
                        />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>EL empresario</h3>
                        <img
                            src={librosNuevos(`./elon.jpg`)}
                            alt="EL empresario"
                        />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>Enamórate de ti</h3>
                        <img
                            src={librosNuevos(`./enamorate.png`)}
                            alt="Enamórate de ti"
                        />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>La Iliada</h3>
                        <img src={librosNuevos(`./iliada.jpg`)} alt="La Iliada" />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>El propósito</h3>
                        <img
                            src={librosNuevos(`./proposito.jpg`)}
                            alt="El propósito"
                        />
                        <button>Ver</button>
                    </li>
                    </ul>
                </section>
            </section>
            
        

        </div>
        
    );
};

export default AccesoriosLaptop;