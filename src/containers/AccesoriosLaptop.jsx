import React from 'react';
import '@styles/AccesoriosLaptop.scss'

const laptopImages = require.context("@pictures/laptops", true);

const AccesoriosLaptop = () => {
    return (
        <div className="laptops">
            <h1>Accesorios para computadoras</h1>

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
            </section>
            
        

        </div>
        
    );
};

export default AccesoriosLaptop;