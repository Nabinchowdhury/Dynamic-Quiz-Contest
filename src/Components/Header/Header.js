import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between px-32 py-5 md: flex-col lg:flex-row font-bold'>


            <h1 className='text-5xl'>Dynamic Quiz Contest</h1>

            <div className='text-xl '>
                <NavLink to="/home" className={({ isActive }) =>
                    isActive ? "text-blue-500 underline pl-5" : "text-black pl-5"
                }>Home</NavLink>
                <NavLink to="/statistics" className={({ isActive }) =>
                    isActive ? "text-blue-500 underline pl-5" : "text-black pl-5"
                }>Statastics</NavLink>
                <NavLink to="/blog" className={({ isActive }) =>
                    isActive ? "text-blue-500 underline pl-5" : "text-black pl-5"
                }>Blog</NavLink>
            </div>
        </div >
    );
};

export default Header;