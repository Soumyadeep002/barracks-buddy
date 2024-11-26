import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';  // Make sure axios is installed and imported
import { BaseUrl } from '../../Enviroment/Enviroment';
import Thumb from '../../../public/images/thumbnails/tb27.webp'

export default function CoursePayment() {
  const { id } = useParams(); // Get the course ID from the URL
  const [course, setCourse] = useState(null); // State to store course data

  // Fetch course data based on ID
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load
    const fetchCourseData = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/api/view-course/${id}`); // Adjust endpoint as needed
        setCourse(response.data.data); // Assuming response data is in response.data.data
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };

    fetchCourseData();
  }, [id]);

  // If course data is not loaded, show loading message
  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-start pt-32 pb-16 md:pt-40 lg:pt-56 md:pb-20 lg:pb-24">
      <div className="rounded-lg p-6 w-full max-w-4xl overflow-y-auto">
        <div>
          <h3 className="text-xl font-semibold mb-4 mt-6">Fees Structure:</h3>
          <div className="bg-gray-100 flex flex-col md:flex-row items-center bg-lightGrey rounded-[3rem] shadow-md">
            <div className="md:w-1/2  flex justify-center rounded-xl pb-6">
              <img src={Thumb} alt="Fee Structure" className="rounded-xl  w-full px-2 " />
            </div>
            {/* Payment Details Section */}
            <div className="md:w-1/2 mx-10 py-10">
              <p className="text-sm font-semibold">{course.title}</p>
              <div className="text-sm font-semibold mt-4">
                <div className="flex justify-between">
                  <span>Base Fee (₹)</span>
                  <span>₹{course.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (18%) on Base Fee (₹)</span>
                  <span>₹{(course.price * 0.18).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Gateway Fee (2%) on Final Price (₹)</span>
                  <span>₹{(course.price * 0.02).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Gateway Fee GST (18%) (₹)</span>
                  <span>₹{((course.price * 0.02) * 0.18).toFixed(2)}</span>
                </div>
                <hr className="my-4 border-black border-1 mx-auto" />
                <div className="flex justify-between font-semibold">
                  <span>Final Price</span>
                  <span>
                    ₹{(
                      course.price + (course.price * 0.18) + (course.price * 0.02) + ((course.price * 0.02) * 0.18)
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
              <button className="mt-6 bg-[#2F5325] text-white font-medium py-2 px-4 w-full rounded-xl">
                Proceed to Pay
              </button>
              <button className="mt-6 text-white font-medium py-2 px-4 w-full rounded-xl">
                <form>
                  <script
                    src="https://checkout.razorpay.com/v1/payment-button.js"
                    data-payment_button_id="pl_POrJz3YPXffM6s"
                    async
                  ></script>
                </form>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
