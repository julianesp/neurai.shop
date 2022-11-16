import React from 'react';
import Acc from '../containers/Accesorios';
import Anuncios from '../containers/Anuncios';
import Publicidad from '../containers/Publicidad';

const Home = () => {
    return (
        <div className='main'>            
            <Publicidad />
            <Acc />
            <Anuncios />            
        </div>
    );
};

export default Home;