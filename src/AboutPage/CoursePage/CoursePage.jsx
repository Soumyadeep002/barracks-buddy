import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import axios from 'axios'; // Import axios
import { BaseUrl } from '../../Enviroment/Enviroment';
import Thumb from '../../../public/images/thumbnails/tb27.webp'
export default function CoursePage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getCourses();
  }, []);

  const getCourses = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/api/all-courses`);
      console.log(response.data.data);
      setCourses(response.data.data)
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  return (
    <div className=' py-20 md:py-36 lg:py-44 px-5'>
  <div className='w-full md:w-[95%] lg:w-[90%] xl:w-[85%] mx-auto'>
    <h1 className='font-bold text-3xl md:text-5xl ml-4 mb-5'>Our Courses: </h1>
    <div className="bg-gray-300 rounded-[4rem] p-7 md:p-8 lg:p-10 mx-auto">
      <div className="bg-white rounded-[2.5rem] px-6 md:px-7 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-gray-100 rounded-lg flex flex-col items-center justify-start p-2 sm:p-4 lg:p-6 drop-shadow-lg">
            <img src={Thumb} alt={course.title} className="w-full h-auto rounded-lg" />
            <div className="text-center mb-4">
              <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">{course.title}</h1>
              <h2 className="text-md font-medium text-gray-500 text-base md:text-lg lg:text-xl">{course.subtitle}</h2>
              <p className="text-md font-medium text-gray-700">Price: ₹{course.price}</p>
              <p className="text-sm font-light text-gray-500">Start Date: {course.start}</p>
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <button className="bg-[#38612d] w-full font-semibold rounded-lg py-3 text-sm md:text-base lg:text-lg text-white flex items-center justify-center hover:bg-[#1f3618] transition duration-200">
                Explore Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
}
