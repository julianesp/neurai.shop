import React from 'react';
import '@styles/Footer.scss'
import dev from '@img/developer_2.jpg'
import sena1 from "@img/logos/sena.png"
import platzi from "@img/logos/platzi.jpg"
import park from '@img/presentacion/park.jpg'

const Footer = () => {
    return (
        <div className="footer">
            <img className='footer-img' src={park} alt="Parque Colón Putumayo" />

            <section className="info-dev">
                <img className='info-img' src={dev} alt="Desarrollador"/>
                <div className="education">
                    <h4>Desarrollado por:<br/>Julián España</h4>
                    <h5>Técnico en sistemas </h5>
                    {/* <img src={sena1} alt="Logo SENA"/> */}
                    <h5>Tecnólogo en Análisis de sistemas</h5>
                    {/* <img src={sena1} alt="Logo SENA"/> */}
                    <h5>Desarrollador Front-End</h5>
                    {/* <img src={platzi} alt="Logo Platzi"/> */}
                </div>
            </section>
        </div>
    );
};

export default Footer;