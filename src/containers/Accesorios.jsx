import React from 'react'
import '@styles/Accesorios.scss'

//acceso directo a imagenes de celulares
const cellphoneImages = require.context('@pictures/celulares/', true)
const imgs = require.context('@pictures/', true)
//acceso directo a imagenes de laptops
// const laptopsImages = require.context('@pictures/laptops/', true)

const Accesorios = () => {
    return (
        <section class="accesorios-tipo">
            <div className="title">
                <h2>Celulares</h2>
                <img src={imgs(`./smartphone.png`)} alt="" />
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
                <li class="caja">
                    <h3>Soporte para celulares</h3>
                    <img src={cellphoneImages(`./soporte/1.jpg`)} alt="Soporte para celulares" />
                </li>
                <li class="caja">
                    <h3>Soporte ajustable</h3>
                    <img src={cellphoneImages(`./soportemovil/1.jpg`)} alt="Soporte ajustable" />
                </li>
                <li class="caja">
                    <h3>USB iPhone</h3>
                    <img src={cellphoneImages(`./usbiphone/1.jpg`)} alt="USB para iphone" />
                </li>
                <li class="caja">
                    <h3>Convertidor Tipo-C</h3>
                    <img src={cellphoneImages(`./inputtipoc/1.jpg`)} alt="Convertidor Tipo-C" />
                </li>
                <li class="caja">
                    <h3>USB Tipo-V</h3>
                    <img src={cellphoneImages(`./usbv/1.png`)} alt="Cable USB Tipo-V" />
                </li>
            </ul>
        </section>

    );
}


export default Accesorios