import React from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import dev from '../assets/img/developer_2.jpg'
import cirp  from '../assets/img/empresas/cirp.png'
import awaspa  from '../assets/img/empresas/awaspa.png'

const Profile = () => {
    return (
        <div>
            <Layout>
                <section className="dev">
                    <section className="img">
                    <Image 
                        alt='yo'
                        src={dev}
                        width={500} 
                        height={50}
                        />
                    </section>

                    <section className="description">
                        <h2>Hola, soy Juli&aacute;n, desarrollador frontend</h2>
                        <p>
                            Desde niño me ha gustado tocar guitarra, tambi&eacute;n me dedico a leer porque me gusta enterarme de
                            los hechos que han marcado la actualidad. <br />Espero sea de su agrado mi sitio 😉
                        </p>
                    </section>

                    <section className='study'>
                        <h2>Mis logros</h2>
                    </section>

                </section>

                <section className="portfolio">
                    <div className="title">
                        <h3>Mis proyectos</h3>
                    </div>
                    <div className="empresa-container">
                        <div className="empresa">
                            
                            <Image 
                                src={cirp} 
                                alt="Logo CIRP" 
                                width={50} 
                                height={50}
                                />
                                <a href="https://julianesp.github.io/cirp/" target="_blank" rel='noreferrer'>Visitar CIRP</a>
                            
                        </div>
                        <div className="empresa">
                            <Image 
                                src={awaspa} 
                                alt="Logo Awaspa" 
                                width={50} 
                                height={50}
                                />
                                <a href="https://julianesp.github.io/awaspa/" target='_blank' rel='noreferrer'>Visitar Awaspa</a>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    );
};

export default Profile;