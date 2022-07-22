import React from 'react';
import '@styles/Header.scss';
import logo from '@imagenes/cerebro.svg';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} />
            <nav className='header__contenedor'>
                <div id="menu">
                    <ul>
                        <li>
                            <button onClick={''}>Tienda</button>
                        </li>
                    </ul>
                </div>
                <div id="menu">
                    <ul>
                        <li>
                            <button onClick={''}>Mi perfil</button>
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
                <div id="menu">
                    <ul>
                        <li>
                            <button onClick={''}>Tiendas</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;