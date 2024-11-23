import React, {useState} from 'react'

export default function RegisterForm() {

    const [showPassword, setShowPassword] = useState('password');

    const toggleInputType = () => {
        setShowPassword((prevType) => (prevType === "password" ? "text" : "password"));
      };

  return (
    <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-300 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign Up to Continue !
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
             
                    <div>
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 ml-3">Name</label>
                        <input type="text" name="name" id="name" className="pl-3 bg-gray-50 border-2 border-[#2F5325] border-spacing-2 text-gray-900 rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="Your Name" required=""/>
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ml-3">Email</label>
                        <input type="email" name="email" id="email" className="pl-3 bg-gray-50 border-2 border-[#2F5325] border-spacing-2 text-gray-900 rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="name@company.com" required=""/>
                    </div>
                    <div>
                        <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 ml-3">Phone</label>
                        <input type="text" name="phone" id="phone" className="pl-3 bg-gray-50 border-2 border-[#2F5325] border-spacing-2 text-gray-900 rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="+91 0000000" required=""/>
                    </div>
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ml-3">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="pl-3 bg-gray-50 border-2 border-[#2F5325] border-spacing-2 text-gray-900 rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""/>
                        <button onClick={toggleInputType}>
                            {showPassword === "password" ? "Show" : "Hide"} Password
                        </button>
                    </div>
                    <div>
                        <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 ml-3">Confirm Password</label>
                        <input type="password" name="confirm_password" id="confirm_password" placeholder="••••••••" className="pl-3 bg-gray-50 border-2 border-[#2F5325] border-spacing-2 text-gray-900 rounded-3xl focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""/>
                    </div>

                <button type="submit" className="w-full text-white bg-[#2F5325] bg-primary-600 font-medium rounded-3xl text-sm px-5 py-4 text-center">Sign Up</button>
            
            </form>
        </div>
    </div>
  )
}
