import React from "react";
import '@js/productos'

const Productos = () => {
    const celulares = [
        {
            nombre: 'Brazalete',
            precio: 14000,
            descripcion: 'Evita golpes'
        },
        {
            nombre: 'Correa',
            precio: 14000,
            descripcion: 'Evita golpes'
        },
        {
            nombre: 'Funda iphone',
            precio: 14000,
            descripcion: 'Evita golpes'
        },
        {
            nombre: 'Micrófono',
            precio: 14000,
            descripcion: 'Evita golpes'
        },
    ]
    return (

        <div className="productoDetalle">
            {/* <p>titulo</p>
            <img src="" alt="" />
            <p>descripcion</p> */}
        </div>
    );
}

export default Productos;