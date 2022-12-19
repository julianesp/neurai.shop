import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Accesorios from './Accesorios';

const Home = () => {
    return (
        <div className='main'>            
            <NavBar />
            <Accesorios />
        </div>
    );
};

export default Home;