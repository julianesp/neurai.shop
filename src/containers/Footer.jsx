import React from 'react';
import '@styles/Footer.scss'
import dev from '@img/developer_2.jpg'
import sena1 from "@img/logos/sena.png"
import platzi from "@img/logos/platzi.jpg"

const Footer = () => {
    return (
        <div className="footer">
            <section className="info-dev">
                <h4 className="gradiente-text">Desarrollado por:<br/>Julián España</h4>
                <img src={dev} alt="Desarrollador"/>
                <div className="education">
                    <h5>Técnico en sistemas </h5>
                    <img src={sena1} alt="Logo SENA"/>
                    <h5>Tecnólogo en Análisis de sistemas</h5>
                    <img src={sena1} alt="Logo SENA"/>
                    <h5>Desarrollador Front-End</h5>
                    <img src={platzi} alt="Logo Platzi"/>
                </div>
            </section>
        </div>
    );
};

export default Footer;