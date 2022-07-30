import React from 'react';
import '@styles/Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <section className="info-dev">
                <h4 className="gradiente-text">Desarrollado por:<br/>Julián España</h4>
                <img src="assets/img/developer_2.jpg" alt="Desarrollador"/>
                <div className="education">
                    <h5>Técnico en sistemas </h5>
                    <img src="assets/img/logos/sena.png" alt="Logo SENA"/>
                    <h5>Tecnólogo en Análisis de sistemas</h5>
                    <img src="assets/img/logos/sena.png" alt="Logo SENA"/>
                    <h5>Desarrollador Front-End</h5>
                    <img src="assets/img/logos/platzi.jpg" alt="Logo Platzi"/>
                </div>
            </section>
        </div>
    );
};

export default Footer;