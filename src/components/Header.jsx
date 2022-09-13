import React, {useState} from 'react';
import Menu from '@containers/Menu'
import '@styles/Header.scss';
import logo from '@img/cerebro.svg';
import pages from '../js/pages'
import { NavLink } from "react-router-dom";
// llamando a libreria
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.2.1/hamburgers.min.css" />
//calling file js to menu
import '../js/menu';
{/* <script src="../js/menu.js" type='module'></script> */}

const Header = () => {
    

    return (
        <div className='header'>
            <div className="logo">
                <img src={logo} />
                <p>Neurai</p>
            </div>
            <nav className='header__contenedor hamburger hamburger--elastic is-active" type="button'>
                <div id="menu">
                    <ul>
                        <li>
                            <NavLink to='/' >
                                <button>Inicio</button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* <div id="menu">
                    <ul>
                        <li>
                            <NavLink to='/pageAcce'>
                                <button>Accesorios</button>
                            </NavLink>
                        </li>
                    </ul>
                </div> */}
                <div id="menu">
                    <ul>
                        <li>
                            <NavLink to='/profile'>
                                <button>Sobre mí</button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* <div id="menu">
                    <ul>
                        <li>
                            <button onClick={''}>Registro</button>
                        </li>
                    </ul>
                </div> */}
            </nav>
        </div>
    );
};

export default Header;