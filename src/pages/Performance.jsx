import React from 'react'
import HeadingSection from '../components/common/HeadingSection'
import CTA from '../components/common/CTA'
import PerformanceImg from "../assets/images/performance_img.png"


const Performance = () => {
    return (
        <div className="space-y-24 my-20  px-5">
            <HeadingSection title="Performance" />
            <div className='space-y-16 lg:space-y-20 container mx-auto max-w-6xl'>
                <div className='flex flex-col gap-8 md:gap-12 '>
                    <img src={PerformanceImg} alt="PerformanceImg" className='object-contain' />
                    <p
                        className="!text-[#ACACAC] text-[12px] lg:text-[17px] "
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        ididunt ut labore et dolore magna aliqua.  mollit anim id est laborum.
                    </p>
                </div>
                <div className='flex flex-col gap-8 md:gap-12 '>
                    <img src={PerformanceImg} alt="PerformanceImg" className='object-contain' />
                    <p
                        className="!text-[#ACACAC] text-[12px] lg:text-[17px] "
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        ididunt ut labore et dolore magna aliqua.  mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <div>

            </div>
            <div className='mt-7'>
                <CTA />
            </div>
        </div>
    )
}

export default Performance