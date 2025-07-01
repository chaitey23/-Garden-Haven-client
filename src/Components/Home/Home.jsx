import React from 'react';
import Banner from '../Banner/Banner';
import Gardeners from '../Gardeners/Gardeners';
import GardeningFunFacts from '../GardeningFunFacts';
import Events from '../Events';
import TopGardeningTips from '../TopGardeningTips';

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className='w-11/12 mx-auto'>
        <Gardeners></Gardeners>
        <TopGardeningTips></TopGardeningTips>
        <GardeningFunFacts></GardeningFunFacts>
        <Events></Events>
      </div>
    </>
  );
};

export default Home;
