import React from 'react';
import '@styles/Profile.scss'
import dev from "@img/developer.jpg"
import cirp from "@img/empresas/cirp.png"
import awaspa from "@img/empresas/awaspa.png"

const Profile = () => {
    return (
        <div>
            <section className="dev">
                <section className="img">
                    <img src={dev} alt="Desarrollador del sitio" />
                </section>

                <section className="description">
                    <h2>Hola, soy Juli&aacute;n, desarrollador frontend</h2>
                    <p>
                        Desde niño me ha gustado tocar guitarra, tambi&eacute;n me dedico a leer porque me gusta enterarme de
                        los hechos que han marcado la actualidad. <br />Espero sea de su agrado mi sitio 😉
                    </p>
                </section>

            </section>

            <section className="portfolio">
                <div className="title">
                    <h3>Mis proyectos</h3>
                </div>
                <div className="empresa-container">
                    <div className="empresa">
                        
                        <img src={cirp} alt="Logo CIRP" />
                        <a href="https://julianesp.github.io/cirp/" target={'_blank'}>Visitar CIRP</a>
                        
                    </div>
                    <div className="empresa">
                        <img src={awaspa} alt="Logo Awaspa" />
                        <a href="https://julianesp.github.io/awaspa/" target={'_blank'}>Visitar Awaspa</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;