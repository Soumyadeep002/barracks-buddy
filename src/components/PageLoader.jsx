import React from 'react'

import Logo from '../assets/images/logo.png'

export default function PageLoader() {
  return (
    <div className="flex items-center justify-center fixed z-[2999] w-screen h-screen bg-gray-100">
        <div className="relative w-28 h-28">
            <img src={Logo} alt="Barrack's Buddy Logo"
                className="absolute inset-0 w-[7rem] h-[7rem] mx-auto my-auto z-10" />
            <div
                className="absolute inset-0 border-4 border-t-[#2F5325] border-r-[#2F5325] border-transparent rounded-full animate-spin">
            </div>
        </div>
    </div>
  )
}
