import React from 'react'
import Thumb from '../../../public/images/thumbnails/tb27.webp'

export default function CourseCard() {
  return (
   
              <>
                {/* {courses.map((course, index) => ( */}
                    <div className="bg-gray-100 w-[24rem] rounded-lg flex flex-col items-center justify-start p-2 sm:p-4 lg:p-6 drop-shadow-lg">
                        <img src={Thumb} className="w-full h-auto rounded-lg"/>
                        <div className="text-center mb-4">
                            <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">course.title</h1>
                            <h2 className="text-md font-medium text-gray-500 text-base md:text-lg lg:text-xl">course.subtitle</h2>
                        </div>
                        <div className="flex flex-col space-y-2 w-full">
                            {/* <button className="bg-gray-600 w-full font-semibold rounded-lg py-3 text-sm md:text-base lg:text-lg text-white flex items-center justify-center hover:bg-gray-800 transition duration-200">Explore Now</button> */}
                            <button className="bg-[#38612d] w-full font-semibold rounded-lg py-3 text-sm md:text-base lg:text-lg text-white flex items-center justify-center hover:bg-[#1f3618] transition duration-200">Explore Now</button>
                        </div>
                    </div>
                {/* ))} */}
                </>  
      
  )
}
