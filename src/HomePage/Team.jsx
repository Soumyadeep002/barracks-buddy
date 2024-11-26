import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Member1 from '../assets/images/Members/Rahul Sharma.png'
import Member2 from '../assets/images/Members/Khanak Sharma.png'
import Member3 from '../assets/images/Members/Rupam Baidya.png'
import Member4 from '../assets/images/Members/Ashutosh Tripathi.png'
import Member5 from '../assets/images/Members/Raj Gupta.png'
import Member6 from '../assets/images/Members/Yogita Chaudhary.png'
import Member7 from '../assets/images/Members/Anjali Singh.png'
import Member8 from '../assets/images/Members/Amrita Pritam.png'
import Member9 from '../assets/images/Members/Bharti Atri.png'
import Member10 from '../assets/images/Members/Somya Tiwari.png'
import Member11 from '../assets/images/Members/Vaidehi Pandey.png'
import Member12 from '../assets/images/Members/Ritu Jakhar.png'
import Member13 from '../assets/images/Members/Vaibhav Panwar.png'
import Member14 from '../assets/images/Members/Mayank.png'
import Member15 from '../assets/images/Members/Soumyadeep Ganguly.png'
import Member16 from '../assets/images/Members/Sugata Ray Chaudhury.png'
import Member17 from '../assets/images/Members/Yash Maheshwari.png'
import Member18 from '../assets/images/Members/Aman Yadav.png'
import Member19 from '../assets/images/Members/Sanskar Gupta.png'

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
                            <img className="mx-auto" src={Member6} alt="" />
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
                        <SwiperSlide>
                            <img className="mx-auto" src={Member16} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="mx-auto" src={Member17} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="mx-auto" src={Member18} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="mx-auto" src={Member19} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
    </>
  )
}
