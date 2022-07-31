import React from 'react';
import '@styles/Header.scss';
import logo from '@img/cerebro.svg';
import pages from '../js/pages'
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} />
            <nav className='header__contenedor'>
                <div id="menu">
                    <ul>
                        <li>
                            <NavLink to='/' >Inicio</NavLink>
                        </li>
                    </ul>
                </div>
                <div id="menu">
                    <ul>
                        <li>
                        <NavLink to='/profile'>Mi perfil</NavLink>
                        </li>
                    </ul>
                </div>
                <div id="menu">
                    <ul>
                        <li>
                            <button onClick={''}>Registro</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;