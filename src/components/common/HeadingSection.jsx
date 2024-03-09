import React from 'react'
import OutlineBtn from './OutlineBtn'

const HeadingSection = ({ title, text, hideBtn, className }) => {
    return (
        <div className='flex items-center justify-center'>
            <div className={`flex flex-col items-center gap-7 text-center ${className}`}>
                <p
                    className={`mx-auto text_gradient font-[600]  w-full leading-snug  !text-3xl lg:max-w-4xl md:!text-4xl lg:!text-6xl`}
                >
                    {title}
                </p>
                <p
                    className="mx-auto lg:max-w-4xl !text-[#ACACAC] text-[12px] lg:text-[16px] "
                >
                    {text ? text : "Lorem ipsum dolor sit amet consectetur adipiscing elit blandit id dolor venenatis auctor maecenas egestas arcu ut consectetur."}
                </p>
                {!hideBtn && <OutlineBtn title="Get Started Free" variant={"outline"} />}
            </div>
        </div>
    )
}

export default HeadingSection