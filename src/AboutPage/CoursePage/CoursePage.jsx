import React, {useEffect} from 'react'
import CourseCard from './CourseCard'

export default function CoursePage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='py-32 md:py-36 lg:py-44 px-5'>
        <div className='w-full md:w-[95%] lg:w-[90%] xl:w-[85%] mx-auto'>
        <h1 className='font-bold text-3xl md:text-5xl ml-4 mb-5'>Our Courses: </h1>

        <div className=" bg-gray-300 rounded-[4rem] p-7 md:p-8 lg:p-10 mx-auto">
                <div className="bg-white rounded-[2.5rem] px-6 md:px-7 lg:px-8 py-10 flex flex-wrap items-center justify-center gap-6 md:gap-6 lg:gap-12">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
        </div>
        </div>
    </div>
  )
}
