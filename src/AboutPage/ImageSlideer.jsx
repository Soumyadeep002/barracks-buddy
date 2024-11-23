import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import Img1 from '../../public/images/AboutSlider/Frame1.png'
import Img2 from '../../public/images/AboutSlider/Frame2.png'
import Img3 from '../../public/images/AboutSlider/Frame3.png'
import Img4 from '../../public/images/AboutSlider/Frame4.png'
import Img5 from '../../public/images/AboutSlider/Frame5.png'
import Img6 from '../../public/images/AboutSlider/Frame6.png'

export default function ImageSlideer() {
  return (
   <>
          <Swiper
       spaceBetween={30}
       pagination={{
         clickable: true,
         dynamicBullets: true,
       }}
        modules={[Pagination]}
        className="w-[12rem] sm:w-[18rem] md:w-[20rem] lg:w-[26rem] xl:w-[30rem] px-5 md:px-0"
      >
        <SwiperSlide>
            <img src={Img1} alt=""/>
        </SwiperSlide>

        <SwiperSlide>
            <img src={Img2} alt=""/>
        </SwiperSlide>

        <SwiperSlide>
            <img src={Img3} alt=""/>
        </SwiperSlide>

        <SwiperSlide>
            <img src={Img4} alt=""/>
        </SwiperSlide>

        <SwiperSlide>
            <img src={Img5} alt=""/>
        </SwiperSlide>

        <SwiperSlide>
            <img src={Img6} alt=""/>
        </SwiperSlide>

        

      </Swiper>
   </>
  )
}
