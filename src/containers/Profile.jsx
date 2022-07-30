import React from 'react';
import '@styles/Profile.scss'

const Profile = () => {
    return (
        <section class="dev">
            <section class="img">
                <img src="@img/developer.jpg" alt="Desarrollador del sitio" />
            </section>

            <section class="description">
                <h2>Hola, soy Juli&aacute;n, desarrollador frontend</h2>
                <p>
                    Desde niño me ha gustado tocar guitarra, tambi&eacute;n me dedico a leer porque me gusta enterarme de
                    los hechos que han marcado la actualidad. <br/>Espero sea de su agrado mi sitio 😉
                </p>
            </section>

            <section class="portfolio">
                <h3>Mis proyectos</h3>
                <div class="empresa">
                    <img src="@img/empresas/logo-ico.png" alt="Logo CIRP" />
                    <button onclick="cirp()">
                        Visitar Cirp
                    </button>
                </div>
                <div class="empresa">
                    <img src="@img/empresas/awaspa.png" alt="Logo Awaspa" />
                    <button onclick="awaspa()">
                        Visitar Awaspa
                    </button>
                </div>
            </section>
        </section>
    );
};

export default Profile;