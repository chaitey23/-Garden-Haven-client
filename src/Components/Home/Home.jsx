import React from 'react';
import Banner from '../Banner/Banner';
import Gardeners from '../Gardeners/Gardeners';
const Home = () => {
    return (
        <>
        <Banner></Banner>
        <div className='w-11/12 mx-auto'>
            <Gardeners></Gardeners>
        </div>
        </>
    );
};

export default Home;