import React from 'react';
import '@styles/Publicidad.scss'


const anuncios = require.context("@img/presentacion/", true);

const Publicidad = () => {

    return (
        <div className="contenedorItems">
            <div className="itemCarrusel" id='itemCarrusel-1'>
                <div className="imgsPresentation" id='tarjetaCarrusel-1'>
                    {/* A */}
                    <img src={anuncios(`./park.jpg`)} alt="" />
                </div>

                <div className="flechas">                    
                    <a href="#itemCarrusel-3">
                        <i>I</i>
                    </a>
                    <a href="#itemCarrusel-2">
                        <i>D</i>
                    </a>
                </div>
            </div>            

            <div className="itemCarrusel" id='itemCarrusel-2'>
                <div className="imgsPresentation" id='tarjetaCarrusel-2'>
                    B
                    {/* <img src={anuncios(`./trabajo_1.png`)} alt="" /> */}
                </div>

                <div className="flechas">                    
                    <a href="#itemCarrusel-1">
                        <i>I</i>
                    </a>
                    <a href="#itemCarrusel-3">
                        <i>D</i>
                    </a>
                </div>
            </div>            

            <div className="itemCarrusel" id='itemCarrusel-3'>
                <div className="imgsPresentation" id='tarjetaCarrusel-3'>
                    C
                </div>

                <div className="flechas">                    
                    <a href="#itemCarrusel-2">
                        <i>I</i>
                    </a>
                    <a href="#itemCarrusel-1">
                        <i>D</i>
                    </a>
                </div>
            </div>            
        </div>
        // <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        //     <div className="carousel-indicators">
        //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        //     </div>
        //     <div className="carousel-inner">
        //         <div className="carousel-item active">
        //             <img src={publicidad(`./trabajo_1.png`)} className="d-block w-100" alt="..." />
        //             <div className="carousel-caption d-none d-md-block">
                        
        //             </div>
        //         </div>
        //         <div className="carousel-item">
        //             <img src={publicidad(`./anuncio.jpg`)} className="d-block w-100" alt="..." />
        //             <div className="carousel-caption d-none d-md-block">
        //             </div>
        //         </div>
        //         <div className="carousel-item">
        //             <img src={publicidad(`./park.jpg`)} className="d-block w-100" alt="..." />

        //             <div className="carousel-caption d-none d-md-block">
        //                 <h5>Parque Colón Putumayo</h5>
        //             </div>
        //         </div>
        //     </div>
        //     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span className="visually-hidden">Previous</span>
        //     </button>
        //     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span className="visually-hidden">Next</span>
        //     </button>
        // </div>
    )
};

export default Publicidad;