import React from "react";
// import '../js/productosAPI'
import useGetProductos from "../hooks/useGetProducts";
import ProductoArticulo from "./ProductoArticulo";

const API = '../js/productosAPI.js'

const Productos = () => {
    const productos = useGetProductos(API)
    
    return (
        <section className="containerProductos">
            <div className="productoDetalle">
                {productos.map(producto => (
                    <ProductoArticulo/>
                ))}
            </div>
        </section>
    );
}

export default Productos;