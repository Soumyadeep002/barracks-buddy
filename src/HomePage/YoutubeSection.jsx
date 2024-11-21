import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import img1 from '../../public/images/thumbnails/tb27.webp'
import img2 from '../../public/images/thumbnails/tb28.webp'
import img3 from '../../public/images/thumbnails/tb32.webp'
import img4 from '../../public/images/thumbnails/tb33.webp'
import img5 from '../../public/images/thumbnails/tb34.webp'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function YoutubeSection() {
  return (
    <section className='py-16 px-5 md:w-[90%] lg:w-[70%] mx-auto'>
        <h1 className='font-bold text-3xl ml-4 mb-5'>Latest on YouTube: </h1>
        <div className="bg-gray-300 px-5 overflow-hidden mx-auto rounded-[2.5rem] ">
        <Swiper
                            freeMode={true}
                            pagination={{ clickable: true }}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
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
                                slidesPerView: 3,
                                spaceBetween: 20,
                                },
                                1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                                },
                            }}
                            modules={[Autoplay]}
                            className="mx-auto my-5"
                            >

                        <SwiperSlide>
                            <img className="mx-auto rounded-[2.1rem]" src={img1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="mx-auto rounded-[2.1rem]" src={img2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="mx-auto rounded-[2.1rem]" src={img3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="mx-auto rounded-[2.1rem]" src={img4} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="mx-auto rounded-[2.15rem]" src={img5} alt="" />
                        </SwiperSlide>
                      

                    </Swiper>
          
        </div>
    </section>
  )
}
