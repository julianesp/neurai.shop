import React from 'react';
import Acc from '../containers/Accesorios';
import Anuncios from '../containers/Anuncios';
import Publicidad from '../containers/Publicidad';
import AccesoriosCelulares from '../containers/AccesoriosCelular'

const Home = () => {
    return (
        <div className='main'>            
            <Publicidad />
            <Acc />
            <Anuncios />
            {/* <AccesoriosCelulares /> */}
            
        </div>
    );
};

export default Home;