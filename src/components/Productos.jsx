import React, { useState } from "react";
// import Producto from '@components/Producto'
import Producto from '@containers/AccesoriosCelular'

const Productos = () => {

    const [productos, setProductos] = useState([
        {
            id: 1,
            nombre: 'Brazalete',
            img: 'https://cdn.pixabay.com/photo/2022/08/14/21/47/snake-7386684_960_720.jpg',
            precio: 14000,
            descripcion: 'Evita golpes'
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
                return <Producto key={producto.id} nombre={producto.nombre} img={producto.img} descripcion={producto.descripcion} />;
            })}
        </div>
    )
}

export default Productos;