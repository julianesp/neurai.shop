import React from 'react';
// import '../src/styles/Profile.scss'
import Image from 'next/image';
import NavBar from '../components/NavBar/NavBar';

const Profile = () => {
    return (
        <div>
            <NavBar />
            <section className="dev">
                <section className="img">
                <Image 
                    alt='yo'
                    src='/assets/img/developer.jpg'
                    width={500} 
                    height={50}
                    />
                    {/* <img src={dev} alt="Desarrollador del sitio" /> */}
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
                        
                        <Image 
                            src='/assets/img/empresas/cirp.png' 
                            alt="Logo CIRP" 
                            width={50} 
                            height={50}
                            />
                            <a href="https://julianesp.github.io/cirp/" target="_blank" rel='noreferrer'>Visitar CIRP</a>
                        
                    </div>
                    <div className="empresa">
                        <Image 
                            src='/assets/img/empresas/awaspa.png' 
                            alt="Logo Awaspa" 
                            width={50} 
                            height={50}
                            />
                            <a href="https://julianesp.github.io/awaspa/" target='_blank' rel='noreferrer'>Visitar Awaspa</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;