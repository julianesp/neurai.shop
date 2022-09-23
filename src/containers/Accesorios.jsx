import React, { useContext, useState } from "react";
import "@styles/Accesorios.scss";
import { NavLink } from "react-router-dom";

//acceso directo a imagenes
const cellphoneImages = require.context("@pictures/celulares/", true);
const laptopImages = require.context("@pictures/laptops/", true);
const librosNew = require.context("@pictures/books/nuevos/", true);
const librosUsados = require.context("@pictures/books/usados/", true);
const salud = require.context("@pictures/salud/", true);
const ellas = require.context("@pictures/ellas/", true);

const Accesorios = () => {

    return (
        <section className="accesorios">
            <section className="accesorios-tipo">
                <div className="visit" id="img1">
                    <h2>Ellas</h2>                
                    <button>Ver más</button>                    
                </div>
                
                <ul className="contenedor">
                    <li className="caja">
                        <h3>Brochas maquillaje</h3>
                        <img
                            src={ellas(`./brochas/1.jpg`)}
                            alt="Brazalete celulares"
                        />
                        <button>Ver</button>
                    </li>
                </ul>

            </section>

            <section className="accesorios-tipo">
                <div className="visit" id="img2">
                    <h2>Celulares</h2>
                    <NavLink to='/accesoriosCelulares'>
                        <button>Ver más</button>
                    </NavLink>
                </div>

                <ul className="contenedor">
                    <li className="caja">
                        <h3>Brazalete</h3>
                        <img src={cellphoneImages(`./brazalete/1.png`)} alt="Brazalete celulares" />
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
                        <h3>Micrófono</h3>
                        <img
                            src={cellphoneImages(`./microfono/1.jpg`)}
                            alt="Micrófono condensador"
                        />
                    </li>
                    <li className="caja">
                        <h3>Memoria Sandisk 16 GB</h3>
                        <img
                            src={cellphoneImages(`./sandisk16/1.jpg`)}
                            alt="Memoria Sandisk 16 GB"
                        />
                    </li>
                </ul>
            </section>

            <section className="accesorios-tipo">
                <div className="visit" id="img3">
                    <h2>Computadores</h2>
                    <NavLink to='/accesoriosLaptops'>
                        <button>Ver más</button>
                    </NavLink>
                </div>

                <ul className="contenedor">
                    <li className="caja">
                        <h3>Adaptador USB</h3>
                        <img
                            src={laptopImages(`./adaptadorusb/1.jpg`)}
                            alt="Adaptador USB"
                        />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>Carcasa disco mecánico</h3>
                        <img
                            src={laptopImages(`./carcasa/1.jpg`)}
                            alt="Carcasa disco mecánico"
                        />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>Sandisk 16 gigas</h3>
                        <img
                            src={laptopImages(`./memoriausb3.0/1.png`)}
                            alt="Sandisk USB 3.0 16 gigas"
                        />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>Mouse inalámbrico</h3>
                        <img src={laptopImages(`./mouse/3.jpg`)} alt="Mouse inalámbrico" />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>Adaptador USB - Tipo C</h3>
                        <img
                            src={laptopImages(`./tipocadapter/1.jpg`)}
                            alt="Adaptador Tipo C - USB"
                        />
                        <button>Ver</button>
                    </li>
                </ul>
            </section>

            <section className="accesorios-tipo">
                <div className="visit" id="img4">
                    <h2>Libros nuevos</h2>
                    <button>Ver más</button>
                </div>

                <ul className="contenedor">
                    <li className="caja">
                        <h3>El empresario</h3>
                        <img src={librosNew(`./elon.jpg`)} alt="El empresario" />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>Ama y no sufras</h3>
                        <img src={librosNew(`./ama.jpg`)} alt="Ama y no sufras" />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>Enamórate de ti</h3>
                        <img src={librosNew(`./enamorate.png`)} alt="Enamórate de ti" />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>La Iliada</h3>
                        <img src={librosNew(`./iliada.jpg`)} alt="La Iliada" />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>Una vida con propósito</h3>
                        <img src={librosNew(`./proposito.jpg`)} alt="Una vida con propósito" />
                        <button>Ver</button>
                    </li>
                </ul>
            </section>

            <section className="accesorios-tipo">
                <div className="visit" id="img5">
                    <h2>Libros usados</h2>
                    <button>Ver más</button>
                </div>

                <ul className="contenedor">
                    <li className="caja">
                        <h3>Álgebra intermedia</h3>
                        <img src={librosUsados(`./algebra1.png`)} alt="Álgebra intermedia" />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>Fundamentos Circuitos</h3>
                        <img src={librosUsados(`./circuitos.png`)} alt="Fundamentos Circuitos" />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>Java 9na edición</h3>
                        <img src={librosUsados(`./java_1.png`)} alt="Java 9na edición" />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>Programación en Java</h3>
                        <img src={librosUsados(`./java1.png`)} alt="Programación en Java" />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>Java Orientado a objetos</h3>
                        <img src={librosUsados(`./poo_1.png`)} alt="Java Orientado a objetos" />
                        <button>Ver</button>
                    </li>
                </ul>
            </section>

            <section className="accesorios-tipo">
                <div className="visit" id="img6">
                    <h2>Salud</h2>
                    <button>Ver más</button>
                </div>

                <ul className="contenedor">
                    <li className="caja">
                        <h3>Oxímetro</h3>
                        <img src={salud(`./oximetro/1.jpg`)} alt="Oxímetro" />
                        <button>Ver</button>
                    </li>
                </ul>
            </section>

        </section>
    );
};

export default Accesorios;
