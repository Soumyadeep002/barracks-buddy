import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../public/images/logo/barrackbuddy-logo-1@2x.png'; 
import { BaseUrl } from '../Enviroment/Enviroment'; 

function ForgetPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${BaseUrl}/api/password/email`, {
        email: email,
      });

      if (response.status === 200) {
        setMessage('Email has been sent successfully!');
      }
    } catch (error) {
      setMessage('Error: Unable to send email. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full rounded-lg shadow dark:border sm:max-w-md xl:p-0 bg-gray-300">
        <div className="flex flex-col items-center p-6  space-y-2  md:space-y-6 sm:p-8">
          <Link to="/" className="text-2xl font-semibold">
            <img className="w-[12rem] h-[12rem]" src={Logo} alt="logo" />
          </Link>
          <h2 className="text-xl font-bold text-center">Forgot Password</h2>
          <form className="space-y-4 md:space-y-6 w-full" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 ml-3"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="pl-3 bg-gray-50 border-2 border-[#2F5325] text-gray-900 rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {message && (
              <div
                className={`text-sm font-medium p-2 rounded-3xl text-center ${
                  message.includes('successfully') ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#2F5325] text-white font-medium py-2 px-4 rounded-3xl"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordPage;
