import React, { useState } from "react";
import axios from "axios";
import { BaseUrl } from "../Enviroment/Enviroment";
import { Link, useNavigate } from 'react-router-dom';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';




export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState("password");

  const toggleInputType = () => {
    setShowPassword((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match!");
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      password_confirmation: formData.confirm_password, 
    };

    try {
      const response = await axios.post(`${BaseUrl}/api/auth/register`, payload);
      if (response.status === 200) {
        navigate('/otp');
        localStorage.setItem("gmail" , formData.email)
        localStorage.setItem("token" , response.data.access_token)
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-300">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Sign Up to Continue!
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 ml-3"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="pl-3 bg-gray-50 border-2 border-[#2F5325] text-gray-900 rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 ml-3"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="pl-3 bg-gray-50 border-2 border-[#2F5325] text-gray-900 rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 ml-3"
            >
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="pl-3 bg-gray-50 border-2 border-[#2F5325] text-gray-900 rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="+91 0000000"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 ml-3"
            >
              Password
            </label>
            <input
              type={showPassword}
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="••••••••"
              className="pl-3 bg-gray-50 border-2 -mb-5 border-[#2F5325] text-gray-900 rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required
            />
            <span className="cursor-pointer  relative left-[21.58rem] -top-4 " onClick={toggleInputType}>
            {showPassword === "password" ? <FontAwesomeIcon className='text-gray-600' icon={faEye} /> : <FontAwesomeIcon className='text-gray-600' icon={faEyeSlash} />}
            </span>
          </div>
          <div>
            <label
              htmlFor="confirm_password"
              className="block mb-2 text-sm font-medium text-gray-900 ml-3"
            >
              Confirm Password
            </label>
            <input
              type={showPassword}
              name="confirm_password"
              id="confirm_password"
              value={formData.confirm_password}
              onChange={handleInputChange}
              placeholder="••••••••"
              className="pl-3 bg-gray-50 border-2 border-[#2F5325] text-gray-900 rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-[#2F5325] font-medium rounded-3xl text-sm px-5 py-4 text-center"
          >
            Sign Up
          </button>
        </form>

        <Link to="/"><div className="mt-4 font-semibold text-[#2F5325]"><FontAwesomeIcon icon={faArrowLeft} className='mr-2 mt-0.5 ' />Back to Home</div></Link>

      </div>
    </div>
  );
}
