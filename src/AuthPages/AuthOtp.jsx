import React, { useRef, useState } from "react";
import axios from "axios"; 
import Logo from "../../public/images/logo/barrackbuddy-logo-1@2x.png";
import { Link, useNavigate } from "react-router-dom";
import { BaseUrl } from "../enviroment/Enviroment"; 
export default function AuthOtp() {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const inputRefs = useRef([]); 
  const navigate = useNavigate();
  const handleKeyDown = (e) => {
    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      !e.metaKey
    ) {
      e.preventDefault();
    }

    if (e.key === "Delete" || e.key === "Backspace") {
      const index = inputRefs.current.indexOf(e.target);
      if (index > 0) {
        setOtp((prevOtp) => [
          ...prevOtp.slice(0, index - 1),
          "",
          ...prevOtp.slice(index),
        ]);
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleInput = (e) => {
    const { target } = e;
    const index = inputRefs.current.indexOf(target);
    if (target.value) {
      setOtp((prevOtp) => [
        ...prevOtp.slice(0, index),
        target.value,
        ...prevOtp.slice(index + 1),
      ]);
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (!new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
      return;
    }
    const digits = text.split("");
    setOtp(digits);
  };

 const handelResendOtp = async (e) =>{
    e.preventDefault(); 
    try {
        const response = await axios.post(`${BaseUrl}/api/resend-otp`, {
          email: localStorage.getItem("gmail"),
        });
  
     
      } catch (err) {
  
      } finally {
        setLoading(false); 
      }
    };

 

  const handleOtpSubmit = async (e) => {
    e.preventDefault(); 
    if (otp.some((digit) => digit === "")) {
      setError("Please complete the OTP.");
      return;
    }
    const otpCode = otp.join(""); 
    setLoading(true); 
    setError(null); 

    try {
      const response = await axios.post(`${BaseUrl}/api/verify-otp`, {
        email: localStorage.getItem("gmail"),
        otp: otpCode,
      });
      if (response.data.status === "true") { 
        navigate('/')

      } else {
      }
    } catch (err) {

    } finally {
      setLoading(false); 
    }
  };

  return (
    <section className="bg-white flex flex-col items-center justify-center min-h-screen">
      <Link to="/" className="flex items-center text-2xl font-semibold">
        <img className="w-[12rem] h-[12rem]" src={Logo} alt="logo" />
      </Link>
      <p className="pb-4 italic font-bold text-[#3b692f]">
        *THE OTP HAS BEEN SENT TO YOUR EMAIL
      </p>
      <div className="mb-2 font-semibold">Verify with OTP</div>
      <div className="container flex flex-col items-center">
        <form
          id="otp-form"
          className="flex gap-2 justify-center"
          onSubmit={handleOtpSubmit}
        >
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              onPaste={handlePaste}
              ref={(el) => (inputRefs.current[index] = el)}
              className="shadow-xs flex w-[64px] items-center justify-center rounded-lg border-2 border-gray-300 bg-white p-2 text-center text-2xl font-medium text-gray-5 outline-none sm:text-4xl dark:border-dark-3 dark:bg-white/5"
            />
          ))}
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>} 
        <p onClick={handelResendOtp} className="mt-2 cursor-pointer text-start text-sm font-semibold text-body-color">
          Resend Code
        </p>
        <div className="mt-6 sm:mt-8">
          <button
            type="submit"
            form="otp-form" 
            className={`bg-[#2f5325] rounded-full py-3 px-6 flex items-center justify-center transition-colors duration-300 hover:bg-opacity-90 mx-auto ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading} 
          >
            {loading ? (
              <span className="text-white font-semibold text-sm sm:text-base">
                Sending...
              </span>
            ) : (
              <span className="text-white font-semibold text-sm sm:text-base">
                Send OTP
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
