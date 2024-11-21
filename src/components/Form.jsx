import React, {useState, useEffect} from 'react';
import Logo from '/barracksbuddy.svg';
import axios from 'axios';

export default function Form() {

    const [studentid, setStudentid] = useState('');
    const [courseid, setCourseid] = useState('');
    const [amount, setAmount] = useState('');

    const handlePayment = async () => {
        try {
            
            const orderResponse = await axios.post('https://api.barracksbuddy.com/api/createid',{
                student_id: studentid,
                course_id: courseid,
                amount: amount
            });

            const orderId = orderResponse.data.order_id;

            // console.log(orderId);

            const options = {
                key: orderResponse.data.key,
                amount: amount * 100,
                currency: 'INR',
                description: 'This is test transaction',
                image: Logo,
                order_id: orderId,

                handler: async function (response){
                  
                    const verifyResponse = await axios.post('https://api.barracksbuddy.com/api/verifyid',{
                        payment_id:response.razorpay_payment_id,
                        student_id:studentid,
                        course_id:courseid,
                        amount: amount,
                        order_id: orderId
                    });
                    console.log(response);
                },
                prefill: {
                    email: 'soumyadeep@email.com',
                    contact: '4543543545',
                },
                notes: {
                    address: 'Your Address',
                },
                theme: {
                    color: '#3399cc',
                },
            };
            const rzp = new window.Razorpay(options)
            rzp.open();

        } catch (error) {
            console.log('error occured', error);
            
        }
    };

    useEffect(()=>{
        const script = document.createElement('script');
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    },[]);
 
  return (
    <>
        <form className="max-w-sm mx-auto">
            <div className="mb-5">
                <label htmlFor="student_id" className="block mb-2 text-sm font-medium text-gray-900">Student Id</label>
                <input type="text" id="student_id" name='student_id' value={studentid} onChange={(e) => setStudentid(e.target.value)} className="border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Student ID" required />
            </div>
            <div className="mb-5">
                <label htmlFor="course_id" className="block mb-2 text-sm font-medium text-gray-900">Course Id</label>
                <input type="text" id="course_id" name='course_id' value={courseid} onChange={(e) => setCourseid(e.target.value)} className="border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Course ID" required />
            </div>
            <div className="mb-5">
                <label htmlFor="amount" className="block mb-2 text-sm font-medium  text-gray-900">Amount</label>
                <input type="text" id="amount" name='amount' value={amount} onChange={(e) => setAmount(e.target.value)} className="border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amount" required />
            </div>
            <button type="button" onClick={handlePayment} className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Make Payment</button>
        </form>
    </>
  )
}
