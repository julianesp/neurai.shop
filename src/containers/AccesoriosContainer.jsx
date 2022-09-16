import React from 'react';
import AccesoriosCelular from '@containers/AccesoriosCelular'
import AccesoriosLaptop from '@containers/AccesoriosLaptop'

const AccesoriosContainer = ({ children }) => {

    return (
        <div className='contenedor'>
            <AccesoriosCelular />
            <AccesoriosLaptop /> 
        </div>
    );

}

export default AccesoriosContainer;