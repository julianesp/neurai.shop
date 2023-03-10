
import React, { useState } from 'react';
import '@styles/PageAccesorio.scss'

const anuncios = require.context("@img/anuncios/", true);

const PageAccesorio = () => {

    // <div className="ProductItem">
    // 		<h1>{product.nombre}</h1>
    // 		<img src={product.img} alt="" />
    // 		<p>{product.descripcion}</p>
    // </div>

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
        <section className='container-accesorios'>
            <div className="title">
                <h1>title</h1>
            </div>

            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={anuncios(`./formateo.jpg`)} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={anuncios(`./frontend.jpg`)} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={anuncios(`./formateo.jpg`)} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="features">
                <p>caracteristicas</p>
            </div>

            <div className='send'>
                <div className="price">
                    <h2>Precio:</h2>
                    <p>$27.000</p>
                </div>

                <div className="payment">
                    <h3>Costo de env??o</h3>
                    <p>$5.000</p>

                    <h4>Opciones de pago:</h4>
                    <ul>
                        <li>Nequi</li>
                        <li>Efecty</li>
                        <li>A la mano</li>
                    </ul>
                </div>
            </div>

            <div className="descripcion">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ea temporibus dicta quasi praesentium nemo cupiditate eius incidunt aspernatur, ratione quia! Reprehenderit voluptatum vitae eveniet dolorum perspiciatis dignissimos facilis laudantium?
                </p>
            </div>

            <div className="record">
                <p>video</p>
            </div>

            {/* <div className="products">
                        {productos.map( (producto) => {
                            return <AccesoriosCelular key={producto.id} nombre={producto.nombre} img={producto.img} descripcion={producto.descripcion} />               
                        })}
            </div> */}
        </section>


    );
};

export default PageAccesorio;