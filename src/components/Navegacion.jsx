import React from 'react';
import { NavLink } from "react-router-dom";

const Navegacion = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to='/' >Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/profile'>Mi perfil</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navegacion;

// export default function Navegacion() {
//     return(
//         <div>
//             <ul>
//                 <li>
//                     <NavLink to='/' >Inicio</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to='/profile'>Mi perfil</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to='/products'>Accesorios</NavLink>
//                 </li>
//             </ul>
//         </div>
//     )
// }