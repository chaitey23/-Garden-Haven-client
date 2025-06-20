import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Banner from '../Components/Banner/Banner';
const MainLayout = () => {
    return (
        <div className='overflow-x-hidden'>

            <div className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </div>
            <div>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default MainLayout;