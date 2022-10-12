import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex flex-col justify-between px-5 py-5 md:px-32 lg:flex-row font-bold'>


            <h1 className='text-5xl text-lime-600'>Dynamic Quiz Contest</h1>

            <div className=' flex flex-col text-xl mt-5  lg:flex-row lg:mt-0'>
                <NavLink to="/home" className={({ isActive }) =>
                    isActive ? "text-blue-500 underline pl-5" : "text-blue-500 pl-5"
                }>Home</NavLink>
                <NavLink to="/statistics" className={({ isActive }) =>
                    isActive ? "text-blue-500 underline pl-5" : "text-blue-500 pl-5"
                }>Statastics</NavLink>
                <NavLink to="/blog" className={({ isActive }) =>
                    isActive ? "text-blue-500 underline pl-5" : "text-blue-500 pl-5"
                }>Blog</NavLink>
            </div>
        </div >
    );
};

export default Header;