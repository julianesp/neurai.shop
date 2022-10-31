import React, { useState } from "react";
import AccesoriosCelular from '@containers/AccesoriosCelular'

const ProductosCelulares = () => {

    const [productos, setProductos] = useState([
        {
            id: 1,
            nombre: 'Brazalete',
            img: '@pictures/celulares/brazalete/2.png',
            precio: 14000,
            descripcion: 'Evita golpes a tu celular'
        },
        // {
        //     id: 2,
        //     nombre: 'Correa',
        //     img: '../assets/img/sena.png',
        //     precio: 14000,
        //     descripcion: 'Evita golpes'
        // },
        // {
        //     id: 3,
        //     nombre: 'Funda iphone',
        //     img: '@pictures/celulares/brazalete/2.png',
        //     precio: 14000,
        //     descripcion: 'Evita golpes'
        // },
        // {
        //     id: 4,
        //     nombre: 'Micrófono',
        //     img: '@pictures/celulares/brazalete/1.png',
        //     precio: 14000,
        //     descripcion: 'Evita golpes'
        // },
    ]);

    return (
        <div className="products">
            {productos.map( (producto) => {
                return <AccesoriosCelular key={producto.id} nombre={producto.nombre} img={producto.img} descripcion={producto.descripcion} />               
            })}
        </div>
    )
}

export default ProductosCelulares;