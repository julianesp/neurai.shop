import React from 'react';
import Header from '../components/Header';
import Acc from '../containers/Accesorios';
import Anuncios from '../components/Anuncios';
import styles from '@styles/Home.scss'

const Home = () => {
    return (
        <div className='main'>
            <section className="accesorio">
                <Acc />
            </section>
            <section className='anuncios'>
                <Anuncios />
            </section>
        </div>
    );
};

export default Home;