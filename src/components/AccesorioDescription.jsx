import React from 'react';
import '@styles/ProductoArticulo.scss';

const Producto = ( product ) => {

	return (
		<div className="ProductDescription">
			<h1>{product.title}</h1>
			
			<img src={product.img} alt="" />
			<p>{product.caracteristicas}</p>
			<p>{product.precio}</p>
			<p>{product.descripcion}</p>
            <video src="#">{product.video}</video>
		</div>
	);
}

export default Producto;