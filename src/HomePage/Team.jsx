import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Member1 from '../../public/images/Members/Rahul Sharma.png'
import Member2 from '../../public/images/Members/Khanak Sharma.png'
import Member3 from '../../public/images/Members/Rupam Baidya.png'
import Member4 from '../../public/images/Members/Aman Yadav.png'
import Member5 from '../../public/images/Members/Amrita Pritam.png'
import Member6 from '../../public/images/Members/Anjali Singh.png'
import Member7 from '../../public/images/Members/Ashutosh Tripathi.png'
import Member8 from '../../public/images/Members/Bharti Atri.png'
import Member9 from '../../public/images/Members/Raj Gupta.png'
import Member10 from '../../public/images/Members/Somya Tiwari.png'
import Member11 from '../../public/images/Members/Sanskar Gupta.png'
import Member12 from '../../public/images/Members/Soumyadeep Ganguly.png'
import Member13 from '../../public/images/Members/Vaibhav Panwar.png'
import Member14 from '../../public/images/Members/Yash Maheshwari.png'
import Member15 from '../../public/images/Members/Yogita Chaudhary.png'

export default function Team() {
  return (
    <>
          <div className="w-full md:w-[90%] lg:w-[70%] mx-auto py-10 sm:py-12 md:py-16 px-5">
          <h1 className='font-bold text-3xl ml-4 mb-5'>Our Team: </h1>
          <div className="flex justify-center items-center mx-auto">
                            <Swiper
                            freeMode={true}
                            pagination={{ clickable: true }}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                              }}
                            breakpoints={{
                                320: {
                                slidesPerView: 1,
                                spaceBetween: 5,
                                },
                                460: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                    },
                                720: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                                },
                                1024: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                                },
                            }}
                            modules={[Autoplay]}
                            className="mx-auto"
                            >
                        <SwiperSlide>
                            <img className="mx-auto" src={Member1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="mx-auto" src={Member2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="mx-auto" src={Member3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="mx-auto" src={Member4} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="mx-auto" src={Member5} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="mx-auto" src={Member7} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="mx-auto" src={Member8} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="mx-auto" src={Member9} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="mx-auto" src={Member10} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="mx-auto" src={Member11} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="mx-auto" src={Member12} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="mx-auto" src={Member13} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="mx-auto" src={Member14} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="mx-auto" src={Member15} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
    </>
  )
}
