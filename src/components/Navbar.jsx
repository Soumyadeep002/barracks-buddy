import React, { useState, useEffect } from 'react';
import { FiMenu, FiChevronRight, FiX, } from 'react-icons/fi';
import Logo from '../../public/logo.png';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";


export default function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [MobilemenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const loggedInUser = {
            displayName: 'Test User',
            photoURL: '/images/profile.png',
        };
        setIsLoggedIn(false);
        setUser(loggedInUser);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!MobilemenuOpen);
    };


    return (
        <>
            <header className="fixed z-[1000] drop-shadow-2xl">
                <nav className="">
                    <div className="bg-[#2F5325] z-10 w-screen flex h-16 sm:h-20 md:h-[6rem] lg:h-[6.5rem] justify-between">
                        <div className="flex bg-white w-fit h-fit rounded-full border-4 border-[#1A3718] relative translate-x-8 translate-y-6 sm:translate-y-8 md:translate-y-8 lg:translate-y-8 lg:translate-x-32">
                            <Link to='/'><img src={Logo} className=" w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32  aspect-square " alt="logo" /></Link>
                        </div>

                        <div className="hidden md:flex md:w-5/6 lg:5/6 md:text-lg lg:text-xl mr-14 md:mr-5 lg:mr-5 xl:mr-20 text-white h-full items-center justify-end md:gap-x-5 lg:gap-x-6 xl:gap-x-12">
                            <Link to='/about'><div>About Us</div></Link>
                            <Link to='/courses'><div>Courses</div></Link>
                            <Link to='/free-notes'><div>Free Notes</div></Link>
                            <Link to='/contact'><div>Contact Us</div></Link>
                            <button type='button' className='bg-white px-7 py-2 text-[#2F5325] rounded-lg font-semibold text-center' onClick={toggleMenu}>Login</button>
                        </div>

                        <div onClick={toggleMobileMenu} id="open-btn" className="mr-10 flex items-end md:hidden flex-col gap-2 my-auto cursor-pointer">
                            <div className="w-5 h-1 rounded-full bg-white"></div>
                            <div className="w-9 h-1 rounded-full bg-white"></div>
                            <div className="w-7 h-1 rounded-full bg-white"></div>
                        </div>
                    </div>


                </nav>
                <div className={`hidden md:block absolute left-auto right-7 w-72 bg-white drop-shadow-lg rounded-b-lg ${menuOpen ? '' : 'md:hidden'}`} >
                    <div className='px-20 py-4 text-center hover:bg-gray-200 cursor-pointer font-semibold text-xl border-b-2 border-[#1A3718]'>Profile</div>
                    <div className='px-20 py-4 text-center hover:bg-gray-200 cursor-pointer font-semibold text-xl border-b-2 border-[#1A3718]'>Purchase</div>
                    <div className='px-20 py-4 text-center'>
                        <button type='button' className='bg-[#1A3718] text-white px-7 py-2 rounded-lg font-semibold'>Logout</button>
                    </div>
                </div>
            </header>


            <div id="mob-nav" className={`w-screen h-screen bg-[#1A3718] flex flex-col items-center  ${MobilemenuOpen ? '' : '-translate-x-[50rem]'} transition-transform duration-500 drop-shadow-2xl  md:hidden gap-5 fixed z-[1001] `}>
                <div id="close-btn" className="text-white ml-auto mr-12 mt-4 text-5xl cursor-pointer">
                    {/* <i className="fa-solid fa-angle-left"></i> */}
                    <button type="button" className='text-white text-sm' onClick={toggleMobileMenu}>Close</button>
                </div>
                <div id="nav-logo" className="w-16 h-16 sm:w-24 sm:h-24 border-4 border-[#2F5325] bg-white rounded-full">
                    <Link Link to='/'><img src={Logo} alt="logo" /></Link>
                </div>

                <div className="text-white flex flex-col justify-center items-center gap-12 mt-10 text-lg sm:text-xl">
                    <a href='/about'><div>About Us</div></a>
                    <a href='/courses'><div>Courses</div></a>
                    <a href='/free-notes'><div>Free Notes</div></a>
                    <a href='/'><div>Contact Us</div></a>
                    <button type='button' className='bg-white px-7 py-2 text-[#2F5325] rounded-[0.5rem] font-semibold text-center'>Login</button>
                </div>

                <div id="secondary-footer" className="pb-5 absolute text-white top-auto bottom-0">
                    <div className="flex flex-col justify-center items-center gap-7">
                        <div className="icons flex flex-row gap-x-6 text-2xl">
                            <a href="https://www.instagram.com/barracksbuddy/"><FontAwesomeIcon icon={faSquareInstagram} /></a>
                            <a href="https://www.youtube.com/@BarracksBuddy"><FontAwesomeIcon icon={faSquareYoutube} /></a>
                            <a href="https://t.me/barracksbuddy"><FontAwesomeIcon icon={faTelegram} /></a>
                        </div>
                        <p className='text-sm'>© Designd by Barracks Buddy (2024)</p>
                    </div>
                </div>

            </div>
        </>
    )
}
