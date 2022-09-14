import React from "react";
import "@styles/Accesorios.scss";
import PageAccesorio from '@components/PageAccesorio';

//acceso directo a imagenes
const cellphoneImages = require.context("@pictures/celulares/", true);
const laptopImages = require.context("@pictures/laptops/", true);
const librosNewImages = require.context("@pictures/books/", true);
const salud = require.context("@pictures/salud/", true);

const Accesorios = () => {
    const openProducts = () => {
        function open(params) {
            console.log('clic');
            <PageAccesorio/>            
        }
        open()
    }

    return (
        <section className="accesorios">
            <section className="accesorios-tipo">
                <div className="visit">
                    <h2>Celulares</h2>
                    <button onClick={openProducts}>Ver más</button>
                </div>

                <ul className="contenedor">
                    <li className="caja">
                        <h3>Brazalete</h3>
                        <img
                            src={cellphoneImages(`./brazalete/1.png`)}
                            alt="Brazalete celulares"
                        />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>Correa reloj</h3>
                        <img
                            src={cellphoneImages(`./correa/1.jpg`)}
                            alt="Correa para reloj inteligente"
                        />
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
                <div className="visit">
                    <h2>Computadores</h2>
                    <button>Ver más</button>
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
                        <h3>Adaptador USB</h3>
                        <img
                            src={laptopImages(`./adaptadorusb/1.jpg`)}
                            alt="Adaptador USB"
                        />
                        <button>Ver</button>
                    </li>
                </ul>
            </section>

            <section className="accesorios-tipo">
                <div className="visit">
                    <h2>Libros nuevos</h2>
                    <button>Ver más</button>
                </div>

                <ul className="contenedor">
                    <li className="caja">
                        <h3>El empresario</h3>
                        <img src={librosNewImages(`./elon.png`)} alt="El empresario" />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>El empresario</h3>
                        <img src={librosNewImages(`./elon.png`)} alt="El empresario" />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>El empresario</h3>
                        <img src={librosNewImages(`./elon.png`)} alt="El empresario" />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>El empresario</h3>
                        <img src={librosNewImages(`./elon.png`)} alt="El empresario" />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>El empresario</h3>
                        <img src={librosNewImages(`./elon.png`)} alt="El empresario" />
                        <button>Ver</button>
                    </li>
                </ul>
            </section>

            <section className="accesorios-tipo">
                <div className="visit">
                    <h2>Libros usados</h2>
                    <button>Ver más</button>
                </div>

                <ul className="contenedor">
                    <li className="caja">
                        <h3>El empresario</h3>
                        <img src={librosNewImages(`./elon.png`)} alt="El empresario" />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>El empresario</h3>
                        <img src={librosNewImages(`./elon.png`)} alt="El empresario" />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>El empresario</h3>
                        <img src={librosNewImages(`./elon.png`)} alt="El empresario" />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>El empresario</h3>
                        <img src={librosNewImages(`./elon.png`)} alt="El empresario" />
                        <button>Ver</button>
                    </li>
                    <li className="caja">
                        <h3>El empresario</h3>
                        <img src={librosNewImages(`./elon.png`)} alt="El empresario" />
                        <button>Ver</button>
                    </li>
                </ul>
            </section>

            <section className="accesorios-tipo">
                <div className="visit">
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
