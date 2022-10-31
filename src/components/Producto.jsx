import React from 'react';
import '@styles/ProductoArticulo.scss';

const Producto = ( product ) => {

	return (
		<div className="ProductItem">
			<h1>{product.nombre}</h1>
			<img src={product.img} alt="" />
			<p>{product.descripcion}</p>
		</div>
	);
}

export default Producto;
