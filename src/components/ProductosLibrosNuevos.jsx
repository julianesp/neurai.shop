import React, { useState } from "react";
import LibrosNuevos from '@containers/LibrosNuevos'

const ProductosLaptop = () => {

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
                return <LibrosNuevos key={producto.id} nombre={producto.nombre} img={producto.img} descripcion={producto.descripcion} />;                
            })}
        </div>
    )
}

export default ProductosLaptop;