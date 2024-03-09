import React from 'react'
import VideoImg from "../../assets/images/video_img.png"

const VideoSection = ({ title, text }) => {
    return (
        <div className='flex flex-col gap-7 md:gap-10 items-center justify-center'>
            <div className="flex flex-col items-center gap-7 text-center">
                <p
                    className={`mx-auto text_gradient font-[600]  w-full leading-snug  !text-3xl lg:max-w-4xl md:!text-4xl lg:!text-5xl`}
                >
                    {title}
                </p>
                <p
                    className="mx-auto lg:max-w-5xl !text-[#ACACAC] text-[12px] lg:text-[16px] "
                >
                    {text ? text : "Lorem ipsum dolor sit amet consectetur adipiscing elit blandit id dolor venenatis auctor maecenas egestas arcu ut consectetur."}
                </p>

            </div>
            <div className='max-w-5xl'>
            <img src={VideoImg} alt="VideoImg" className='object-contain rounded-3xl' />
            </div>
        </div>
    )
}

export default VideoSection