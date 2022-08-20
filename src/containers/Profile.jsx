import React from 'react';
import '@styles/Profile.scss'
import dev from "@img/developer.jpg"
import cirp from "@img/empresas/cirp.png"
import awaspa from "@img/empresas/awaspa.png"
const urlc = 'https://julianesp.github.io/cirp/'

const Profile = () => {
    return (
        <div>
            <section class="dev">
                <section class="img">
                    <img src={dev} alt="Desarrollador del sitio" />
                </section>

                <section class="description">
                    <h2>Hola, soy Juli&aacute;n, desarrollador frontend</h2>
                    <p>
                        Desde niño me ha gustado tocar guitarra, tambi&eacute;n me dedico a leer porque me gusta enterarme de
                        los hechos que han marcado la actualidad. <br />Espero sea de su agrado mi sitio 😉
                    </p>
                </section>

            </section>

            <section class="portfolio">
                <div className="title">
                    <h3>Mis proyectos</h3>
                </div>
                <div className="empresa-container">
                    <div class="empresa">
                        <img src={cirp} alt="Logo CIRP" />
                        <a href="https://julianesp.github.io/cirp/" target={'_blank'}>Visitar CIRP</a>
                    </div>
                    <div class="empresa">
                        <img src={awaspa} alt="Logo Awaspa" />
                        <a href="https://julianesp.github.io/awaspa/" target={'_blank'}>Visitar Awaspa</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;