import React from 'react'
import Logo from "../../assets/images/logo.png"
import SocialTemp from "../../assets/images/social_temp.png"

const Footer = () => {
    return (
        <div className=' bg-[#021133] p-4 py-12'>
            <div className='container mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2'>
                <div className='space-y-10'>
                    <div className='flex flex-col gap-7'>
                        <div className="flex gap-4 items-center">
                            <img src={Logo} alt="logo" className='w-[40px] object-contain' />
                            <p className="text-lg font-semibold text-white">
                                Trade Factor
                            </p>
                        </div>
                        <p className='text-white font-[500] text-[12px] max-w-lg'>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit id dolor venenatis auctor maecena.</p>
                        <div>
                            <img src={SocialTemp} alt="social" className='object-contain w-[180px]' />
                        </div>
                    </div>
                    <p className='text-white font-[400] text-[12px]'>©2024 Trade Factor. | All Rights reserved.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 pt-2 gap-y-8'>
                    <div className="flex flex-col">
                        <p className="text-lg font-semibold text-white">
                            Resources
                        </p>
                        <div className='pt-4 lg:pt-7 space-y-2'>
                            <p className='text-white font-[400] text-[12px]'>Strategies</p>
                            <p className='text-white font-[400] text-[12px]'>Developers</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-semibold text-white">
                            Company
                        </p>
                        <div className='pt-4 lg:pt-7 space-y-2'>
                            <p className='text-white font-[400] text-[12px]'>Work with us</p>
                            <p className='text-white font-[400] text-[12px]'>About us</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg font-semibold text-white">
                            Legal
                        </p>
                        <div className='pt-4 lg:pt-7 space-y-2'>
                            <p className='text-white font-[400] text-[12px]'>Privacy Policy</p>
                            <p className='text-white font-[400] text-[12px]'>Terms & Conditions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer