import React, { useState } from 'react';
import lightLogo from '../assets/lightLogo.png';
import dummyProfilePic from '../assets/dummyProfilePicture.jpg';
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import SideBar from './SideBar';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to close sidebar when clicking outside
    const handleCloseSidebar = () => {
        setMenuOpen(false);
    };

    return (
        <>
            {/* Navbar */}
            <nav className='flex w-full h-16 justify-between items-center px-8 bg-white border-b border-gray-100 shadow-sm'>
                {/* Left Section - Logo */}
                <div className='flex items-center h-full'>
                    <img
                        src={lightLogo}
                        alt="logo"
                        className='w-40 sm:w-50 h-full object-cover object-center'
                    />
                </div>

                {/* Right Section - Icons */}
                <div className='flex sm:hidden items-center gap-6'>
                    <GiHamburgerMenu
                        className='w-6 h-6 text-black cursor-pointer'
                        title='Menu'
                        onClick={() => setMenuOpen(true)}
                    />
                </div>

                <div className='hidden sm:flex items-center gap-6'>
                    <motion.span whileHover={{ rotateZ: 80 }}>
                        <IoSettingsOutline
                            className='w-6 h-6 text-gray-500 cursor-pointer hover:text-indigo-600 transition-colors'
                            title='Settings'
                        />
                    </motion.span>
                    <IoIosSearch
                        className='w-6 h-6 text-gray-500 cursor-pointer hover:text-indigo-600 transition-colors md:hidden'
                        title='Search'
                    />
                    <div className='relative group'>
                        <img
                            src={dummyProfilePic}
                            alt="Profile"
                            className='w-10 h-10 rounded-full object-cover cursor-pointer border-2 border-transparent hover:border-indigo-200 transition-all'
                        />
                        {/* Add dropdown menu here if needed */}
                    </div>
                </div>
            </nav>

            {/* Sidebar & Overlay */}
            {menuOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-40"
                        onClick={handleCloseSidebar} // Close sidebar when clicking outside
                    ></div>

                    <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                </>
            )}
        </>
    );
};

export default NavBar;
