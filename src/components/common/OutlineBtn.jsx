import React from 'react'

const OutlineBtn = ({ title, variant }) => {
    return (
        variant === "outline" ? (
            <div
                className="flex w-fit rounded-full  mx-auto bg-gradient-to-tr from-[#45D1FD] to-[#02539A] p-[2.5px] shadow-lg">
                <button className="flex-1 text-[10px] md:text-[14px] text-white font-[500] bg-[#010B24] px-6 xl:px-8 py-3 rounded-full">
                    {title}
                </button>
            </div>
        ) : (
            <div
                className="flex w-fit rounded-full  mx-auto p-[2.5px] shadow-lg">
                <button className="flex-1 text-[10px] md:text-[14px] text-white font-[500] bg-[#02539A] px-6 xl:px-8 py-3.5 rounded-full">
                    {title}
                </button>
            </div>
        )
    )
}

export default OutlineBtn