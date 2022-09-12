import React, {useState} from 'react';

import '@styles/Menu.scss'
import { NavLink } from 'react-router-dom';

const Menu = () => {
    // the menu must inicializar in mode false to that no se show links
    const [toggle, setToggle] = useState(false)

    //creation of the set to change his state to true to show it
    const handleToggle = () => {
        setToggle(!toggle)
    }
    
    return (
        <div>
            <i className="icon-menu burger-button" id="burger-menu"></i>
    
            <ul className="nav" onClick={handleToggle}>
                <li>
                    <NavLink to='/'>
                        <button>Inicio</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/profile'>
                        <button>Sobre mí</button>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Menu;