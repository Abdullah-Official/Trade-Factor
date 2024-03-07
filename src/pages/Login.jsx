import React from 'react'
import HeadingSection from '../components/common/HeadingSection'
import LoginImg from "../assets/images/login_img.png"
import OutlineBtn from '../components/common/OutlineBtn'
import { Checkbox } from "@material-tailwind/react";


const Login = () => {
    const inputStyle = `bg-transparent rounded-lg py-2.5 px-4 pl-5 pt-3 text-[12px] outline-none text-white placeholder:text-white !border-2 border-[#02539A]`

    return (
        <div className="space-y-24 my-20 container mx-auto px-5">
            <div className="grid grid-cols-1 items-center justify-between lg:grid-cols-2 gap-8">
                <div className='space-y-8 lg:space-y-12'>
                    <HeadingSection className={"!text-left"} hideBtn={true} title="Welcome Back!" />
                    <div className='max-w-5xl w-full bg-[#02539A40] px-4 py-10 md:p-12 pt-16 rounded-3xl'>
                        <div className='grid grid-cols-1 gap-6'>
                            <input type="text" name="firstName" placeholder='Email Address' className={`${inputStyle}`} />
                            <input type="text" name="password" placeholder='Password' className={`${inputStyle}`} />
                            <div className='flex justify-between items-center'>
                                <div className="flex  items-center">
                                    <Checkbox color="#0B3D69" className='border-[#0B3D69] shadow-sm' />
                                    <p className='text-white font-[400] text-[11px] md:text-[14px]'>Remember me</p>
                                </div>
                                <p className='text-white font-[400] text-[11px] md:text-[14px] cursor-pointer'>Forgot Password</p>
                            </div>
                        </div>
                        <div className='mt-8 w-full'>
                            <OutlineBtn title="Log In" color={"#45D1FD"} className={`!w-full !text-[#032D52]`} />
                        </div>
                        <div className='mt-10 text-center'>
                            <p className='text-white font-[400] text-[14px]'>
                                Don't you have an account? <span className='text-[#45D1FD] cursor-pointer'>Sign up</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        src={LoginImg}
                        alt={"LoginImg"}
                        className="object-contain hidden lg:block rounded-3xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default Login