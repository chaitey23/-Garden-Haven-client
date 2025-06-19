import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';
const MainLayout = () => {
    return (
        <div>

            <div className='w-11/12 mx-auto'>
<Navbar></Navbar>
</div>


            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default MainLayout;