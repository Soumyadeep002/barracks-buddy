import React, { useState, useEffect } from 'react';
import { FiMenu, FiChevronRight, FiX, } from 'react-icons/fi';
import Logo from '../assets/images/logo.png';
import { BaseUrl } from '../Enviroment/Enviroment';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';






export default function Navbar() {
    const navigate = useNavigate();
    let getUserDetails;
    const [isAuthorized, setIsAuthorized] = useState(false);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [MobilemenuOpen, setMobileMenuOpen] = useState(false);



    useEffect(() => {
        const loggedInUser = {
            displayName: 'Test User',
            photoURL: '/images/profile.png',
        };
        checkAuthorization();

    }, []);


    const logOutCall = async () => {
        const token = localStorage.getItem('token');
        try {

            const response = await axios.post(
                `${BaseUrl}/api/logout`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.status === 200) {
                localStorage.removeItem("token")
                navigate("/")
                checkAuthorization()
                setIsAuthorized(false)
            }

        } catch (error) {

        }
    }

    const getUserCall = async () => {
        const token = localStorage.getItem('token');
        try {

            const response = await axios.post(
                `${BaseUrl}/api/me`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.status === 200) {
                getUserDetails = response.data
                setUser(response.data)
                // console.log(response.data);

            }

        } catch (error) {

        }
    }

    const checkAuthorization = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post(
                `${BaseUrl}/api/authguard`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.data.code === 200) {
                // console.log("Authorized");
                setIsAuthorized(true);
                getUserCall()
            }else{
                setIsAuthorized(false);
            }
        } catch (error) {
            // console.error("Authorization error:", error);
        } finally {
        }
    };
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!MobilemenuOpen);
    };

    const navigationToLogin = () => {
        navigate('/login')
    }

    return (
        <>
            <header className="fixed z-[1000] drop-shadow-2xl">
                <nav className="">
                    <div className="bg-[#2F5325] z-10 w-screen flex h-16 sm:h-20 md:h-[6rem] lg:h-[6.5rem] justify-between">
                        <div className="flex bg-white w-fit h-fit rounded-full border-4 border-[#1A3718] relative translate-x-8 translate-y-6 sm:translate-y-8 md:translate-y-8 lg:translate-y-8 lg:translate-x-32">
                            <Link to="/"><img src={Logo} className=" w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32  aspect-square " alt="logo" /></Link>
                        </div>
                        <div className="hidden md:flex md:w-5/6 lg:5/6 md:text-lg lg:text-xl mr-14 md:mr-5 lg:mr-5 xl:mr-20 text-white h-full items-center justify-end md:gap-x-5 lg:gap-x-6 xl:gap-x-12">
                            <Link to='/'><div>Home</div></Link>
                            <Link to='/about'><div>About Us</div></Link>
                            <Link to='/courses'><div>Courses</div></Link>
                            <Link to='/free-notes'><div>Free Notes</div></Link>
                            <Link to='/contact'><div>Contact Us</div></Link>

                            {
                                !isAuthorized && <button onClick={navigationToLogin} type='button' className='bg-white px-7 py-2 text-[#2F5325] rounded-lg font-semibold text-center' >Login</button>

                            }

                            {
                                isAuthorized && user && (
                                    <div onClick={toggleMenu}>
                                        <div className="bg-white flex gap-4 px-7 py-2 text-[#2F5325] rounded-lg font-semibold text-centerr">
                                            {user?.name.split(' ')[0] || 'User'} {/* Safely access name with a fallback */}
                                            <div>
                                                <FontAwesomeIcon icon={faChevronDown} />
                                            </div>
                                        </div>
                                    </div>
                                ) 
                            }



                        </div>

                        <div onClick={toggleMobileMenu} id="open-btn" className="mr-10 flex items-end md:hidden flex-col gap-2 my-auto cursor-pointer">
                            <div className="w-5 h-1 rounded-full bg-white"></div>
                            <div className="w-9 h-1 rounded-full bg-white"></div>
                            <div className="w-7 h-1 rounded-full bg-white"></div>
                        </div>
                    </div>


                </nav>
                {
                    isAuthorized && <div className={`hidden md:block absolute left-auto right-7 w-72 bg-white drop-shadow-lg rounded-b-lg ${menuOpen ? '' : 'md:hidden'}`} >
                        <div className='px-20 py-4 text-center hover:bg-gray-200 cursor-pointer font-semibold text-xl border-b-2 border-[#1A3718]'>Profile</div>
                        <div className='px-20 py-4 text-center hover:bg-gray-200 cursor-pointer font-semibold text-xl border-b-2 border-[#1A3718]'>Purchase</div>
                        <div className='px-20 py-4 text-center'>
                            <button onClick={logOutCall} type='button' className='bg-[#1A3718] text-white px-7 py-2 rounded-lg font-semibold'>Logout</button>
                        </div>
                    </div>
                }
            </header>


            <div id="mob-nav" className={`w-screen overflow-auto h-screen bg-[#1A3718] flex flex-col items-center  ${MobilemenuOpen ? '' : '-translate-x-[50rem]'} transition-transform duration-500 drop-shadow-2xl  md:hidden gap-5 fixed z-[1001] `}>
                <div id="close-btn" className="text-white ml-auto mr-12 mt-4 text-5xl cursor-pointer">
                    {/* <i className="fa-solid fa-angle-left"></i> */}
                    <button type="button" className='text-white text-sm' onClick={toggleMobileMenu}><FontAwesomeIcon className='text-4xl' icon={faChevronLeft} /></button>
                </div>
                <div id="nav-logo" className="w-20 h-20 sm:w-24 sm:h-24 border-4 border-[#2F5325] bg-white rounded-full">
                    <Link onClick={toggleMobileMenu} to='/'><img src={Logo} alt="logo" /></Link>
                </div>

                <div className="text-white flex flex-col justify-center items-center gap-9 mt-10 text-lg sm:text-xl">
                    <Link to='/' onClick={toggleMobileMenu}><div>Home</div></Link>
                    <Link to='/about' onClick={toggleMobileMenu}><div>About Us</div></Link>
                    <Link to='/courses' onClick={toggleMobileMenu}><div>Courses</div></Link>
                    <Link to='/free-notes' onClick={toggleMobileMenu}><div>Free Notes</div></Link>
                    <Link to='/contact' onClick={toggleMobileMenu}><div>Contact Us</div></Link>
                    {
                        !isAuthorized && <button type='button' onClick={navigationToLogin} className='bg-white px-7 py-2 text-[#2F5325] rounded-[0.5rem] font-semibold text-center'>Login</button>
                    }
                    {
                            isAuthorized && user && (
                                <div onClick={toggleMenu}>
                                    <div className="bg-white flex gap-4 px-7 py-2 text-[#2F5325] rounded-lg font-semibold text-centerr">
                                        {user?.name.split(' ')[0] || 'User'} {/* Safely access name with a fallback */}
                                        <div>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                    </div>
                                </div>
                            ) 
                        }
                </div>
                    {isAuthorized && <div className={`${menuOpen ? 'block' : 'hidden'} z-[99] absolute translate-y-[37rem] bg-white drop-shadow-lg rounded-lg md:hidden`} >
                        <div className='px-10 py-2 text-center hover:bg-gray-200 cursor-pointer font-semibold text-xl border-b-2 border-[#1A3718]'>Profile</div>
                        <div className='px-10 py-2 text-center hover:bg-gray-200 cursor-pointer font-semibold text-xl border-b-2 border-[#1A3718]'>Purchase</div>
                        <div className='px-10 py-2 text-center'>
                            <button onClick={logOutCall} type='button' className='bg-[#1A3718] text-white px-7 py-2 rounded-lg font-semibold'>Logout</button>
                        </div>
                    </div>
                    }


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
