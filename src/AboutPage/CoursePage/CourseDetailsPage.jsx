import React from 'react'
import Img from '../../assets/images/thumbnails/tb32.webp'
import fac2 from '../../assets/images/coursepage/exam.png'
import fac3 from '../../assets/images/coursepage/NOTES.svg'
import fac4 from '../../assets/images/coursepage/PERSONALITY DEVELOPMENT.svg'
import fac5 from '../../assets/images/coursepage/PYQ.svg'
import fac1 from '../../assets/images/coursepage/RECORDING.svg'
import fac6 from '../../assets/images/coursepage/STRUCTURED SCHEDULE.svg'




export default function CourseDetailsPage() {
  return (
    <div className='py-32 md:py-36 lg:py-44 px-5'>
    <div className='w-full md:w-[95%] lg:w-[90%] xl:w-[85%] mx-auto'>
        <div className=" bg-gray-300 rounded-[3.5rem] p-5 md:p-7 lg:p-8 mx-auto flex flex-col justify-center items-center">
            <h1 className='font-bold text-2xl md:text-4xl ml-4 mb-5'>Course Facilities</h1>
            <div className='bg-white rounded-[2.5rem] w-full px-6 md:px-7 lg:px-8 py-10 gap-8 flex flex-col  items-center text-justify'>
                <div className="flex flex-col md:flex-row-reverse gap-3 md:gap-6 lg:gap-12 my-4 md:my-6 lg:my-8">
                    <div className="left">
                        <img src={Img} className='rounded-[2rem] w-[30rem]' alt="thumbnail" />
                    </div>
                    <div className="right">
                        <div className="flex flex-col gap-y-5">
                            <div>
                                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-1 text-left'>NDA (National Defence Academy)</h1>
                                <h3 className='text-base md:text-lg lg:text-xl font-bold text-gray-500 mb-6'>NDA (National Defence Academy) and NA (Naval Academy)</h3>
                            </div>
                            <div>
                                <h1 className='text-2xl lg:text-3xl font-bold mb-1'>₹3400</h1>
                                <h5 className='text-red-500 text-xs lg:text-sm font-semibold mb-4'>*18% GST & Gateway fees are included in the final fee amount.</h5>
                            </div>
                            <button type="button" className='w-full md:w-fit flex flex-col gap-2 justify-center items-center px-8 md:px-10 lg:px-16 py-3 rounded-[1rem] bg-[#2F5325] text-white'>
                                <h3 className='text-lg md:text-xl font-bold'>Enroll Now</h3>
                                <h5 className='text-xs md:text-sm font-semibold'>Starts  20 Dec 2024</h5>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 w-full lg:w-[80%] mx-auto gap-6">
                    <div className='flex justify-center items-center gap-3'><img className='w-[2.5rem] md:w-[2.8rem] lg:w-[3rem]' src={fac1} alt="facilities"/><span className='font-bold text-[#2F5325] w-[6rem] text-sm'>Free Recorded Sessions</span></div>
                    <div className='flex justify-center items-center gap-3'><img className='w-[2.5rem] md:w-[2.8rem] lg:w-[3rem]' src={fac2} alt="facilities"/><span className='font-bold text-[#2F5325] w-[6rem] text-sm'>Exam Guessing Tips</span></div>
                    <div className='flex justify-center items-center gap-3'><img className='w-[2.5rem] md:w-[2.8rem] lg:w-[3rem]' src={fac3} alt="facilities"/><span className='font-bold text-[#2F5325] w-[6rem] text-sm'>Free Study Notes</span></div>
                    <div className='flex justify-center items-center gap-3'><img className='w-[2.5rem] md:w-[2.8rem] lg:w-[3rem]' src={fac4} alt="facilities"/><span className='font-bold text-[#2F5325] w-[6rem] text-sm'>Free Personality Development Program</span></div>
                    <div className='flex justify-center items-center gap-3'><img className='w-[2.5rem] md:w-[2.8rem] lg:w-[3rem]' src={fac5} alt="facilities"/><span className='font-bold text-[#2F5325] w-[6rem] text-sm'>PYQ Solving in Class</span></div>
                    <div className='flex justify-center items-center gap-3'><img className='w-[2.5rem] md:w-[2.8rem] lg:w-[3rem]' src={fac6} alt="facilities"/><span className='font-bold text-[#2F5325] w-[6rem] text-sm'>Structured Schedule</span></div>
                </div>
                <div className="w-full md:w-[90%] lg:w-[85%] xl:w-[80%] font-semibold px-2 md:px-5">
                    <ul className='text-justify flex flex-col gap-2'>
                    <li>1. Free Screening Course - Preparation for initial screening exams.</li>
                    <li>2. Free Study Notes - Comprehensive notes for all topics.</li>
                    <li>3. Free Personality Development Program - Enhancing personality for SSB.</li>
                    <li>4. Free Test Series - Regular practice with mock tests.</li>
                    <li>5. Free Recorded Sessions + Live Sessions - Access to both recorded and interactive live sessions.</li>
                    <li>6. Session on Effective Knowledge Use - Training to apply knowledge strategically.</li>
                    <li>7. Exam Guessing Tips - Techniques for making accurate guesses.</li>
                    <li>8. Previous Year Question (PYQ) Solving in Class - Practice with real exam questions.</li>
                    <li>9. Free Lifetime Mentorship - Ongoing guidance and support.</li>
                    <li>10. Supportive and Friendly Environment - Encouraging atmosphere for growth.</li>
                    <li>11. Weekly Tests with Performance Analysis - Test and review every Sunday.</li>
                    <li>12. 4-Month Structured Schedule - Planned schedule for efficient preparation.</li>
                    <li>13. Much More! - Additional resources for NDA success.</li>

                    </ul>
                </div>
            </div>
       
            </div>
        </div>
    </div>
  )
}
