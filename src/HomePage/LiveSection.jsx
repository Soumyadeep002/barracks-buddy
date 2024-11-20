import React from 'react'

import Hero from '../../public/images/main.png';



export default function LiveSection() {
  return (
    <section className='py-16 px-5'>
        <div className="bg-gray-300 md:w-[90%] lg:w-[70%] overflow-hidden gap-5 flex flex-col-reverse md:flex-row items-center mx-auto rounded-[2.5rem]">
            <div className="absolute left-5 sm:left-7 md:left-auto -translate-y-[28.5rem] md:-translate-y-[5rem] translate-x-5 flex gap-2 items-center ">
                <span className='w-3 h-3 rounded-full bg-red-600'></span>
                <h5 className='font-semibold text-xl'> Live</h5>
            </div>
            <div className="w-full md:w-2/5 pr-3">
             <img src={Hero} className='static md:absolute md:-translate-y-[7.9rem] lg:-translate-y-[7.9rem] xl:-translate-y-[7.9rem] md:translate-x-12 w-[20rem] lg:translate-x-12 xl:translate-x-12 aspect-auto mx-auto' alt="image" />
            </div>
            <div className="w-full md:w-3/5 px-3 flex flex-col justify-center item-center gap-5 py-10">
                <h1 className='bg-yellow-300 px-6 py-2 text-center font-bold text-sm md:text-xl mx-auto rounded-[9rem] w-fit'>
                    Written Training Program
                </h1>
                <h2 className='text-xl md:text-2xl lg:text-4xl font-bold mx-auto mt-2 text-center'>NDA | CDS | AFCAT</h2>
                <h3 className='text-sm md:text-lg xl:text-2xl font-semibold mx-auto mt-4 text-blue-900 text-center'>Batches starting from 20th December 2024.</h3>
                <h5 className="font-thin text-xs md:text-sm lg:text-lg mx-auto text-center">To Know more about Written Training Program </h5>
            </div>
        </div>
    </section>
  )
}
