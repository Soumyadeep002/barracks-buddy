import React, {useEffect} from 'react'
import ImageSlideer from './ImageSlideer'

export default function AboutSection() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className='py-32 md:py-36 lg:py-44 px-5'>
        <div className='w-full md:w-[95%] lg:w-[90%] xl:w-[85%] mx-auto'>
                <h1 className='font-bold text-3xl md:text-5xl ml-4 mb-5'>About Us: </h1>
            <div className=" bg-gray-300 rounded-[3.5rem] p-7 md:p-8 lg:p-10 mx-auto">
                    <div className="bg-white rounded-[2.5rem] px-6 md:px-7 lg:px-8 py-10 flex flex-col gap-3 md:gap-6 lg:gap-12 justify-center items-center text-justify">
                        <div id="upper" className="flex flex-col-reverse md:flex-row gap-5 md:gap-10">
                            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-3/5 flex justify-center items-center">
                                <p className='text-xl md:text-2xl font-semibold'>At Barrack’s Buddy, we see ourselves as your brothers and sisters, here to guide and support you with the experiences we’ve gained on the same journey you’re on as defense aspirants. We're not just trainers but a close-knit family of learners, committed to walking with you every step of the way.</p>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-2/5 flex items-start">
                                {/* <img className='rounded-[2rem] border-2 border-black mx-auto' src={image} alt="image Slider"/> */}
                                <ImageSlideer/>
                            </div>
                        </div>
                        
                        <div className="">
                            <p className='text-xl md:text-2xl font-semibold flex justify-center items-center'>Together, we believe in learning from each other and taking responsibility as a family. With personal involvement and guidance, we aim to shape your future, just like we once worked to shape our own. Here, you’re never alone—because we’ve been where you are, and we’re with you all the way.</p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
