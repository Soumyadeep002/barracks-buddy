import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../assets/images/main.png';
import Play from '../assets/images/Play Vector.svg';



export default function LiveSection() {
  return (
    <section className='py-16 px-5 md:w-[90%] lg:w-[71%] mx-auto'>
        <div className="flex items-center ml-4 mb-5 gap-4">
            <div className="bg-red-500 w-5 h-5 md:w-6 md:h-6 text-red-500 rounded-3xl"></div>
            <h1 className='font-bold text-3xl '>Live Batches: </h1>
        </div>
        <div className="bg-[#D9D9D9] overflow-hidden gap-5 flex flex-col-reverse md:flex-row items-center mx-auto rounded-[2.5rem]">
      
            <div className="w-full md:w-2/5 pr-3">
             <img src={Hero} className='static md:absolute md:-translate-y-[8.3rem] lg:-translate-y-[7.9rem] xl:-translate-y-[7.7rem] md:translate-x-12 w-[20rem] lg:translate-x-12 xl:translate-x-12 aspect-auto mx-auto' alt="image" />
            </div>
            <div className="w-full md:w-3/5 px-3 flex flex-col justify-center item-center gap-5 py-10">
                <Link to="/courses"><div className='bg-[#FFFB06] px-6 py-2 text-center flex justify-center items-center gap-3 w-fit mx-auto rounded-[9rem]'>
                    <div className='font-bold text-sm md:text-xl'>Written Training Program </div><img className='w-5 md:w-3 lg:w-5' src={Play} alt=""/>
                </div></Link>
                <h2 className='text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold mx-auto mt-2 text-center'>NDA | CDS | AFCAT</h2>
                <h3 className='text-sm sm:text-sm md:text-lg xl:text-2xl font-semibold mx-auto mt-4 text-blue-900 text-center'>Batches starting from 20th December 2024.</h3>
                <h5 className="font-thin text-xs md:text-sm lg:text-lg mx-auto text-center">To Know more about Written Training Program </h5>
            </div>
        </div>
    </section>
  )
}
