import React from 'react'
import FundedProgramImg from "../../assets/images/funded_prog.png"
import OutlineBtn from '../common/OutlineBtn'

const GetFundedProgram = () => {
    return (
        <div
            className={`gap-10 flex flex-col lg:flex-row !container !mx-auto `}
        >
            <div>
                <img
                    src={FundedProgramImg}
                    alt={"FundedProgramImg"}
                    className="object-contain"
                />
            </div>
            <div className="flex flex-col gap-y-4 justify-center md:max-w-xl lg:max-w-2xl">
                <div className="gap-8 flex flex-col items-center md:items-start">
                    <p
                        className=" text-white font-[600]   leading-snug  !text-2xl lg:max-w-4xl md:!text-3xl lg:!text-4xl"
                    >

                        Get funded{" "}
                        <span className='text-[#45D1FD]'>program</span>
                    </p>
                    <p className='text-[#ACACAC] -mt-1 font-[450] text-[13px] md:text-[16px] leading-[1.6rem]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.        </p>
                </div>
                <div className="flex w-full mt-4">
                    <div className="flex flex-row gap-4  max-w-3xl">
                        <div>
                            <OutlineBtn title="Get Started Free" variant={"outline"} />
                        </div>
                        <div>
                            <OutlineBtn title="Browser Features" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetFundedProgram