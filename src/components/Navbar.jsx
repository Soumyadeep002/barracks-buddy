import React, { useState, useEffect } from 'react';
import { FiMenu, FiChevronRight,FiX,  } from 'react-icons/fi';
import Logo from '../../public/logo.png';



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";


export default function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

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


  return (
  <>
     <header className="fixed z-[1000] drop-shadow-2xl">
        <nav className="">
            <div className="bg-[#2F5325] z-10 w-screen flex h-16 sm:h-20 md:h-[6rem] lg:h-[6.5rem] justify-between">
                <div className="flex bg-white w-fit h-fit rounded-full border-4 border-[#1A3718] relative translate-x-8 translate-y-6 sm:translate-y-8 md:translate-y-8 lg:translate-y-8 lg:translate-x-32">
                    <a href="index.html"><img src={Logo} className=" w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32  aspect-square " alt="logo"/></a>
                </div>

                <div className="hidden md:flex md:w-5/6 lg:5/6 md:text-lg lg:text-xl mr-14 md:mr-5 lg:mr-5 xl:mr-20 text-white h-full items-center justify-end md:gap-x-5 lg:gap-x-6 xl:gap-x-12">

                    <a href="about.html"><div>About Us</div></a>
                    <a href="about.html"><div>About Us</div></a>
                    <a href="about.html"><div>About Us</div></a>
                    <a href="about.html"><div>About Us</div></a>
                    <a href="https://drive.google.com/drive/folders/1cDv-M8Vv3B4Nyn9wP_67v7OuchoyVusV?usp=drive_link"><div>Free Notes</div></a>
                    <a href="contact.html"><div>Contact Us</div></a>
                </div>

                <div onClick={toggleMenu} id="open-btn" className="mr-10 flex items-end md:hidden flex-col gap-2 my-auto cursor-pointer">
                    <div className="w-5 h-1 rounded-full bg-white"></div>
                    <div className="w-9 h-1 rounded-full bg-white"></div>
                    <div className="w-7 h-1 rounded-full bg-white"></div>
                </div>
            </div>
            
           
        </nav>
     </header>
    
        <div id="mob-nav" className={`w-screen h-screen bg-[#1A3718] flex flex-col items-center  ${menuOpen ? '' : '-translate-x-[50rem]'} transition-transform duration-500 drop-shadow-2xl  md:hidden gap-5 fixed z-[1001] `}>
            <div id="close-btn" className="text-white ml-auto mr-12 mt-4 text-5xl cursor-pointer">
                {/* <i className="fa-solid fa-angle-left"></i> */}
                <button type="button" className='text-white text-sm' onClick={toggleMenu}>Close</button>
            </div>
            <div id="nav-logo" className="w-16 h-16 sm:w-24 sm:h-24 border-4 border-[#2F5325] bg-white rounded-full">
                <a href="index.html"><img src={Logo} alt="logo"/></a>
            </div>
            
            <div className="text-white flex flex-col justify-center items-center gap-12 mt-10 text-lg sm:text-xl">
                <a href="about.html"><div>About Us</div></a>
                <a href="https://drive.google.com/drive/folders/1cDv-M8Vv3B4Nyn9wP_67v7OuchoyVusV?usp=drive_link"><div>Free Notes</div></a>
                <a href="contact.html"><div>Contact Us</div></a>
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
