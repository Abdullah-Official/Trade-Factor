import React from 'react'
import OutlineBtn from './OutlineBtn'

const CommonGrid = ({ reverseRow, title, img, hideBtn, text }) => {
    return (
        <div
            className={`gap-10 flex flex-col ${reverseRow ? "lg:flex-row" : "lg:flex-row-reverse"} !container !mx-auto `}
        >
            <div>
                <img
                    src={img}
                    alt={img}
                    className="object-contain"
                />
            </div>
            <div className="flex flex-col gap-y-4 justify-center md:max-w-xl lg:max-w-2xl">
                <div className="gap-8 flex flex-col i">
                    <p
                        className=" text_gradient font-[600]   leading-snug  !text-2xl lg:max-w-4xl md:!text-3xl lg:!text-5xl"
                    >
                        {title}
                    </p>
                    <p className='text-[#ACACAC] mt-2 font-[450] text-[13px] md:text-[16px] leading-[1.7rem]'>
                        {
                            text ? text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                    </p>
                </div>
                {!hideBtn && (
                    <div className="flex w-fit mt-4">
                        <OutlineBtn title="Copy or Follow" variant={"outline"} />

                    </div>
                )}
            </div>
        </div>
    )
}

export default CommonGrid