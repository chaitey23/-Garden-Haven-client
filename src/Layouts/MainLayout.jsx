import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import ScrollToTop from '../Components/ScrollToTop';
const MainLayout = () => {
    return (
        <div className='overflow-x-hidden'>
<ScrollToTop>
    
</ScrollToTop>
            <div className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </div>
            <div className='pt-20'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;