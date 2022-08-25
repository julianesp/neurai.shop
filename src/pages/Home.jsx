import React from 'react';
import Header from '../components/Header';
import styles from '@styles/Home.scss'
import Acc from '../containers/Accesorios';
import Anuncios from '../components/Anuncios';
import Publicidad from '../containers/Publicidad';

const Home = () => {
    return (
        <div className='main'>           

            <section className='accesorio'>
                <Publicidad />
                <Acc />
                <Anuncios />
            </section>
        </div>
    );
};

export default Home;