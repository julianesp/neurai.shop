import React from 'react';
import '@styles/AccesoriosLaptop.scss'

const librosUsados = require.context("@pictures/books/usados/", true);

const AccesoriosLaptop = () => {
    return (
        <div className="laptops">
            <h1>Libros usados</h1>

            <section className="accesorios">
                <section className="accesorios-tipo">
                    <ul className="contenedor">
                    <li className="caja">
                        <h3>Álgebra intermedia</h3>
                        <img src={librosUsados(`./algebra1.png`)} alt="Álgebra intermedia" />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>Circuitos eléctricos</h3>
                        <img
                            src={librosUsados(`./circuitos.png`)}
                            alt="Circuitos eléctricos"
                        />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>Programar en Java - Deitel</h3>
                        <img
                            src={librosUsados(`./java_1.png`)}
                            alt="Programar en Java - Deitel"
                        />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>Java - 7ma edición</h3>
                        <img src={librosUsados(`./java1.png`)} alt="Java - 7ma edición" />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>Programación básica</h3>
                        <img
                            src={librosUsados(`./javabasic1.png`)}
                            alt="Programación básica"
                        />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>Programación Orientada a Objetos</h3>
                        <img
                            src={librosUsados(`./poo_1.png`)}
                            alt="Programación Orientada a Objetos"
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