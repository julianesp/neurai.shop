import React from 'react'
import '@styles/Accesorios.scss'

//acceso directo a imagenes de celulares
const cellphoneImages = require.context('@pictures/celulares/', true)
//acceso directo a imagenes de laptops
// const laptopsImages = require.context('@pictures/laptops/', true)

const Accesorios = () => {
    return (
        <div>
            <section class="accesorios-tipo">
            <div className="visit">
                <h2>Celulares</h2>
                <button>Ver más</button>
            </div>

            <ul class="contenedor">
                <li class="caja">
                    <h3>Brazalete</h3>
                    <img src={cellphoneImages(`./brazalete/1.png`)} alt="Brazalete celulares" />
                    <button>Ver</button>
                </li>
                <li class="caja">
                    <h3>Correa reloj</h3>
                    <img src={cellphoneImages(`./correa/1.jpg`)} alt="Correa para reloj inteligente" />
                    <button>Ver</button>
                </li>
                <li class="caja">
                    <h3>Funda iPhone</h3>
                    <img src={cellphoneImages(`./fundaiphone/1.jpg`)} alt="Funda para iPhone" />
                    <button>Ver</button>
                </li>
                <li class="caja">
                    <h3>Micrófono</h3>
                    <img src={cellphoneImages(`./microfono/1.jpg`)} alt="Micrófono condensador" />
                </li>
                <li class="caja">
                    <h3>Memoria Sandisk 16 GB</h3>
                    <img src={cellphoneImages(`./sandisk16/1.jpg`)} alt="Memoria Sandisk 16 GB" />
                </li>
            </ul>
            </section>

            <section class="accesorios-tipo">
            <div className="visit">
                <h2>Celulares</h2>
                <button>Ver más</button>
            </div>

            <ul class="contenedor">
                <li class="caja">
                    <h3>Brazalete</h3>
                    <img src={cellphoneImages(`./brazalete/1.png`)} alt="Brazalete celulares" />
                    <button>Ver</button>
                </li>
                <li class="caja">
                    <h3>Correa reloj</h3>
                    <img src={cellphoneImages(`./correa/1.jpg`)} alt="Correa para reloj inteligente" />
                    <button>Ver</button>
                </li>
                <li class="caja">
                    <h3>Funda iPhone</h3>
                    <img src={cellphoneImages(`./fundaiphone/1.jpg`)} alt="Funda para iPhone" />
                    <button>Ver</button>
                </li>
                <li class="caja">
                    <h3>Micrófono</h3>
                    <img src={cellphoneImages(`./microfono/1.jpg`)} alt="Micrófono condensador" />
                </li>
                <li class="caja">
                    <h3>Memoria Sandisk 16 GB</h3>
                    <img src={cellphoneImages(`./sandisk16/1.jpg`)} alt="Memoria Sandisk 16 GB" />
                </li>
            </ul>
            </section>

            <section class="accesorios-tipo">
            <div className="visit">
                <h2>Celulares</h2>
                <button>Ver más</button>
            </div>

            <ul class="contenedor">
                <li class="caja">
                    <h3>Brazalete</h3>
                    <img src={cellphoneImages(`./brazalete/1.png`)} alt="Brazalete celulares" />
                    <button>Ver</button>
                </li>
                <li class="caja">
                    <h3>Correa reloj</h3>
                    <img src={cellphoneImages(`./correa/1.jpg`)} alt="Correa para reloj inteligente" />
                    <button>Ver</button>
                </li>
                <li class="caja">
                    <h3>Funda iPhone</h3>
                    <img src={cellphoneImages(`./fundaiphone/1.jpg`)} alt="Funda para iPhone" />
                    <button>Ver</button>
                </li>
                <li class="caja">
                    <h3>Micrófono</h3>
                    <img src={cellphoneImages(`./microfono/1.jpg`)} alt="Micrófono condensador" />
                </li>
                <li class="caja">
                    <h3>Memoria Sandisk 16 GB</h3>
                    <img src={cellphoneImages(`./sandisk16/1.jpg`)} alt="Memoria Sandisk 16 GB" />
                </li>
            </ul>
            </section>

            <section class="accesorios-tipo">
            <div className="visit">
                <h2>Celulares</h2>
                <button>Ver más</button>
            </div>

            <ul class="contenedor">
                <li class="caja">
                    <h3>Brazalete</h3>
                    <img src={cellphoneImages(`./brazalete/1.png`)} alt="Brazalete celulares" />
                    <button>Ver</button>
                </li>
                <li class="caja">
                    <h3>Correa reloj</h3>
                    <img src={cellphoneImages(`./correa/1.jpg`)} alt="Correa para reloj inteligente" />
                    <button>Ver</button>
                </li>
                <li class="caja">
                    <h3>Funda iPhone</h3>
                    <img src={cellphoneImages(`./fundaiphone/1.jpg`)} alt="Funda para iPhone" />
                    <button>Ver</button>
                </li>
                <li class="caja">
                    <h3>Micrófono</h3>
                    <img src={cellphoneImages(`./microfono/1.jpg`)} alt="Micrófono condensador" />
                </li>
                <li class="caja">
                    <h3>Memoria Sandisk 16 GB</h3>
                    <img src={cellphoneImages(`./sandisk16/1.jpg`)} alt="Memoria Sandisk 16 GB" />
                </li>
            </ul>
            </section>
        </div>
        

        
    );
}


export default Accesorios