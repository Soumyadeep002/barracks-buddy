import React,{useEffect} from 'react'

function ContactPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="w-full md:w-[90%] lg:w-[70%] mx-auto px-5 py-28 md:py-32 lg:py-44">
            <h1 className='font-bold text-3xl md:text-5xl ml-4 mb-5'>Contact Us: </h1>
            <div className="flex-grow bg-gray-300 rounded-2xl sm:rounded-[3.5rem] p-4 sm:p-6 md:p-8 flex flex-col">
                <div className="flex-grow bg-white rounded-xl sm:rounded-[2.5rem] p-4 sm:p-6 md:p-8 flex flex-col ">
                    <div className="space-y-4 sm:space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block font-semibold text-sm sm:text-base">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                className="border-2 rounded-lg border-black w-full p-2 sm:p-3"
                                placeholder="Enter your Full Name"
                            />
                        </div>
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
                            <label htmlFor="exam" className="block font-semibold text-sm sm:text-base">Preparing for</label>
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
                                placeholder="What do you think ?"
                                rows="4"
                            ></textarea>
                        </div>
                    </div>
                    <div className="mt-6 sm:mt-8 ">
                        <button className=" bg-[#2f5325] w-full sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-full py-3 flex items-center justify-center transition-colors duration-300 hover:bg-opacity-90 mx-auto">
                            <span className=" text-white font-semibold text-sm sm:text-base">Send Message</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
