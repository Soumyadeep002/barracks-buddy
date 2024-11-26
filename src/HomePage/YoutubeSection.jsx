import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function YoutubeSection() {
  return (
    <section className='py-16 px-5 md:w-[90%] lg:w-[71%] mx-auto'>
        <h1 className='font-bold text-3xl ml-4 mb-5'>Latest on YouTube: </h1>
        <div className="bg-[#D9D9D9] px-5 overflow-hidden mx-auto rounded-[2.5rem] ">
        <Swiper
                            freeMode={true}
                            pagination={{ clickable: true }}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: true,
                              }}
                            breakpoints={{
                                320: {
                                slidesPerView: 1,
                                spaceBetween: 5,
                                },
                                460: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                    },
                                720: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                                },
                                1400: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                                },
                            }}
                            modules={[Autoplay]}
                            className="mx-auto my-5"
                            >

                        <SwiperSlide>
                            {/* <img className="mx-auto rounded-[2.1rem]" src={img1} alt="" /> */}
                            <iframe
                                className="w-full h-[15.5rem] rounded-[2.1rem]"
                                src={`https://www.youtube.com/embed/_cZIqamov4s`}
                                title={`YouTube video player 1`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* <img className="mx-auto rounded-[2.1rem]" src={img1} alt="" /> */}
                            <iframe
                                className="w-full h-[15.5rem] rounded-[2.1rem]"
                                src={`https://www.youtube.com/embed/e5S3ceN6oag`}
                                title={`YouTube video player 2`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* <img className="mx-auto rounded-[2.1rem]" src={img1} alt="" /> */}
                            <iframe
                                className="w-full h-[15.5rem] rounded-[2.1rem]"
                                src={`https://www.youtube.com/embed/gGLAkii3Z3U`}
                                title={`YouTube video player 3`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* <img className="mx-auto rounded-[2.1rem]" src={img1} alt="" /> */}
                            <iframe
                                className="w-full h-[15.5rem] rounded-[2.1rem]"
                                src={`https://www.youtube.com/embed/Fz_KhUGuLfM`}
                                title={`YouTube video player 4`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </SwiperSlide>

                      

                    </Swiper>
          
        </div>
    </section>
  )
}
