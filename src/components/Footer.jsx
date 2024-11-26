import React from 'react';

import {Link} from 'react-router-dom';

import instagram from '../assets/images/instagram.svg';
import telegram from '../assets/images/telegram.svg';
import youtube from '../assets/images/youtube.svg';
import Logo from '../assets/images/logo/barrackbuddy-logo-1@2x.png'

const Footer = () => {
    return (
        <footer className="bg-[#2F5325]">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                {/* Logo Section */}
                <div className="md:flex gap-4 md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <button
                            type="button"
                            className="flex items-center space-x-2 py-0.5 px-3 text-sm font-medium text-[#2F5325] bg-white rounded-lg hover:bg-gray-100 hover:text-[#2F5325] focus:outline-none focus:ring-4 focus:ring-gray-100"
                        >
                            <img src={Logo} alt="Company Logo" className="w-10 h-10 md:w-14 lg:w-16 md:h-14 lg:h-16" />
                            <Link to="/" aria-label="Company Policy">
                                <span className='text-sm md:text-lg'>Barrack's Buddy</span>
                            </Link>
                        </button>
                    </div>

                    {/* Legal Section */}
                    <div className="grid grid-cols-2 gap-12 sm:gap-6 sm:grid-cols-2">
                        {/* Legal Policies */}
                        <div>
                            <h2 className="mb-5 text-lg font-semibold text-white uppercase dark:text-white">Legal Policies</h2>
                            <ul className="text-white dark:text-white font-medium">
                                <li className="mb-3">
                                    <Link to="/companypolicy" className="hover:underline">Terms &amp; Conditions</Link>
                                </li>
                                <li>
                                   <Link to="/companypolicy" className="hover:underline">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                        {/* Support */}
                        <div>
                            <h2 className="mb-5 text-lg font-semibold text-white uppercase dark:text-white">Support</h2>
                            <ul className="text-white dark:text-white font-medium">
                                <li className="mb-3">
                                    <Link to="/contact" className="hover:underline">Contact Us</Link>
                                </li>
                                <li>
                                    <a href="mailto:info@barracksbuddy.com" className="hover:underline">Email Us</a>
                                </li>
                            </ul>
                        </div>
                  
                    </div>
                </div>

                {/* Social Section */}
                <hr className="my-6 border-x-white sm:mx-auto dark:border-white lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-white sm:text-center dark:text-white">
                        © 2024 <a href="/about.html" className="hover:underline">Barrack's Buddy</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a
                            href="https://www.youtube.com/@BarracksBuddy"
                            className="text-white hover:text-white dark:hover:text-white"
                        >
                            <img className="w-6 h-6 hover:opacity-80" src={youtube} alt=""/>
                            <span className="sr-only">YouTube</span>
                        </a>
                        <a
                            href="https://t.me/barracksbuddy"
                            className="text-white hover:text-white dark:hover:text-white ms-5"
                        >
                            <img className="w-6 h-6 hover:opacity-80" src={telegram} alt=""/>
                            <span className="sr-only">Telegram</span>
                        </a>
                        <a
                            href="https://www.instagram.com/barracksbuddy"
                            className="text-white hover:text-white dark:hover:text-white ms-5"
                        >
                            <img className="w-6 h-6 hover:opacity-80" src={instagram} alt=""/>
                            <span className="sr-only">Instagram</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;