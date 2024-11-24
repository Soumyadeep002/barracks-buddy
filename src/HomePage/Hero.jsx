import React from 'react'
import {Link} from 'react-router-dom'
import Arrow from '../../public/images/arrow.svg'
import InstaLogo from '../../public/images/Instagram_logo_2016.svg 1.svg'
import TelegramLogo from '../../public/images/Telegram_logo.svg 1.svg'
import HeroImage from '../../public/images/photo-rahul-sharma-notes-1@2x.png'

export default function Hero() {
  return (
    <>
         <section id="hero" className="pb-16 pt-36 lg:pt-52">
            <div className="flex px-5 md:px-16 lg:px-32">
                <div className="flex flex-col w-full md:3/4 gap-8 lg:gap-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#2F5325] font-semibold" data-aos="fade-right" data-aos-duration="500" data-aos-delay="300" data-aos-easing="ease-in">Self Preparation Strategies</h1>
                    <h3 className="font-semibold text-2xl md:text-3xl" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" data-aos-easing="ease-in">NDA | CDS | CAPF | AFCAT</h3>
                    <h1 className="text-5xl md:text-6xl lg:text-8xl text-[#1A3718] font-semibold" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-easing="ease-in">थोड़ी पढ़ाई कर लें?</h1>
                    <div className="socials flex flex-col md:flex-row gap-4 mt-3 md:mt-6">
                        <a href="https://t.me/barracksbuddy"><div className="flex items-center md:justify-center gap-2" data-aos="fade-right" data-aos-duration="500" data-aos-delay="200" data-aos-easing="ease-in"><img src={TelegramLogo} alt="" /><span className="text-base md:text-lg lg:text-xl">@barracksbuddy</span></div></a>
                        <a href="https://www.instagram.com/barracksbuddy/"><div className="flex items-center md:justify-center gap-2" data-aos="fade-right" data-aos-duration="500" data-aos-delay="200" data-aos-easing="ease-in"><img src={InstaLogo} alt="" /><span className="text-base md:text-lg lg:text-xl">@barracksbuddy</span></div></a>
                    </div>
                </div>
                
            </div>
            <div className="bg-white h-fit w-full mt-28 md:mt-20 lg:mt-32 xl:mt-36">
                <div className=" absolute w-44 md:w-56 lg:w-72 xl:w-96 z-0 -translate-y-[10.89rem] md:-translate-y-44 lg:-translate-y-[15.45rem] xl:-translate-y-[29.5rem] left-auto right-1 sm:right-8 md:right-12 xl:right-28 duration-150">
                    <img className="ml-auto mr-6 " src={HeroImage} alt="hero" data-aos="fade-left" data-aos-duration="500" data-aos-delay="200" data-aos-easing="ease-in"/> 
                </div>
                <div className="bg-[#2F5325] gap-3 md:gap-5 flex flex-col xl:flex-row items-start my-auto w-[95%] md:w-[70%] lg:w-[70%] xl:w-[80%] ml-auto py-6 md:py-10 lg:py-12 pl-10 rounded-s-full overflow-hidden">
                    <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl my-auto font-semibold md:ml-8" data-aos="fade-right" data-aos-duration="500" data-aos-delay="200" data-aos-easing="ease-in">Free Notes:</h1>
                    <Link to="/free-notes"><img src={Arrow} className=" w-24 sm:w-24 md:w-48 lg:w-56 mx-2 my-auto" alt="arrow" data-aos="fade-right" data-aos-duration="500" data-aos-delay="400"/></Link>
                </div>
            </div>
        </section>
    </>
  )
}
