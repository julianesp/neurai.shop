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
    ]);

    return (
        <div className="products">
            {productos.map( (producto) => {
                return <AccesoriosCelular 
                key={producto.id} 
                nombre={producto.nombre} 
                img={producto.img} 
                descripcion={producto.descripcion} />               
            })}
        </div>
    )
}

export default ProductosCelulares;