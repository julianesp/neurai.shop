import React from 'react';
import Header from '../components/Header';
import Acc from '../containers/Accesorios';
import styles from '@styles/Home.scss'

const Home = () => {
    return (
        <div className='main'>
            <section className="accesorios">
                <Acc />
            </section>
            <section className="publicidad">
                <div className="text">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum sed itaque atque sint, modi distinctio officiis enim nesciunt ea repellendus reiciendis iste, culpa provident a nobis consequatur harum? Aperiam, quod!
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Home;