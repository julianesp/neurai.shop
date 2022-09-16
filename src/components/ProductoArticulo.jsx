import React, { useContext } from 'react';
import '@styles/ProductoArticulo.scss';
import AppContext from '../context/AppContext';
import imagenProducto from '../assets/img/accesorios/books/electronica.jpeg';

const ProductoArticulo = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<img src={imagenProducto} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductoArticulo;
