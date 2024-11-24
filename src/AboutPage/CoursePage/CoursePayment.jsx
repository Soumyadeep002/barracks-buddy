import React from 'react'

export default function CoursePayment() {
  return (
        <div className="flex justify-center items-start pt-32 pb-16 md:pt-40 lg:pt-56 md:pb-20 lg:pb-24">
        <div className="rounded-lg p-6 w-full max-w-4xl overflow-y-auto">
            <div>
                {/* <!-- Fee Structure Section --> */}
                <h3 className="text-xl font-semibold mb-4">Fees Structure:</h3>
                <div className="bg-gray-100 flex flex-col md:flex-row items-center bg-lightGrey rounded-[3rem] shadow-md">

                    {/* <!-- Image Section --> */}
                    <div className="md:w-1/2 p-4 flext justify-center">
                        <img src="./NDA.png" alt="Fee Structure" className="rounded-lg w-full px-2 py-2" />
                    </div>

                    {/* <!-- Payment Details Section --> */}
                    <div className="md:w-1/2 mx-10 py-10">
                        <p className="text-sm font-semibold">NDA (National Defence Academy) and NA (Naval Academy)</p>
                        <div className="text-sm font-semibold mt-4">
                            <div className="flex justify-between">
                                <span>Base Fee (₹)</span>
                                <span>₹2813.36</span>
                            </div>
                            <div className="flex justify-between">
                                <span>GST (18%) on Base Fee (₹)</span>
                                <span>₹506.4</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Gateway Fee (2%) on Final Price (₹)</span>
                                <span>₹68.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Gateway Fee GST (18%) (₹)</span>
                                <span>₹12.24</span>
                            </div>
                            <hr className="my-4 border-black border-1 mx-auto" />

                            <div className="flex justify-between font-semibold">
                                <span>Final Price</span>
                                <span>₹3400</span>
                            </div>
                        </div>
                        <button className="mt-6 bg-[#2F5325] text-white font-medium py-2 px-4 w-full rounded-xl">
                            Proceed to Pay
                        </button>
                        <button className="mt-6  text-white font-medium py-2 px-4 w-full rounded-xl">
                            <form>
                                <script src="https://checkout.razorpay.com/v1/payment-button.js"
                                    data-payment_button_id="pl_POrJz3YPXffM6s" async> </script>
                            </form>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
