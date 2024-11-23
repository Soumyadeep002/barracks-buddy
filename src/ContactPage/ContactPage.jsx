import React from 'react'

function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen px-4 sm:px-6 md:px-8 lg:px-[12%] pt-[73%] py-4 sm:py-6">
            <h1 className="text-2xl sm:text-3xl  md:text-4xl lg:text-[50px] font-semibold mb-4 pt-10">Contact Us:</h1>
            <div className="flex-grow bg-lightGrey rounded-2xl sm:rounded-[50px] p-4 sm:p-6 md:p-8 flex flex-col">
                <div className="flex-grow bg-white rounded-xl sm:rounded-[40px] p-4 sm:p-6 md:p-8 flex flex-col ">
                    <div className="space-y-4 sm:space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block font-semibold text-sm sm:text-base">Your email</label>
                            <input
                                type="email"
                                id="email"
                                className="border-2 rounded-lg border-black w-full p-2 sm:p-3"
                                placeholder="name@gmail.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="exam" className="block font-semibold text-sm sm:text-base">Exam:</label>
                            <input
                                type="text"
                                id="exam"
                                className="border-2 rounded-lg border-black w-full p-2 sm:p-3"
                                placeholder="NDA | CDS | CAPF | AFCAT"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="comment" className="block font-semibold text-sm sm:text-base">Leave a comment:</label>
                            <textarea
                                id="comment"
                                className="border-2 rounded-lg border-black w-full p-2 sm:p-3"
                                placeholder="Leave Your Comment"
                                rows="4"
                            ></textarea>
                        </div>
                    </div>
                    <div className="mt-6 sm:mt-8 ">
                        <button className=" bg-[#2f5325] w-full sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-full py-3 flex items-center justify-center transition-colors duration-300 hover:bg-opacity-90 mx-auto">
                            <span className=" text-black font-semibold text-sm sm:text-base">Send Message</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
