import React from 'react';
import Header from '../components/Header';
import styles from '@styles/Home.scss'
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