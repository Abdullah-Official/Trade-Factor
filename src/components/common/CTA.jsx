import React from 'react'
import BgCTA from "../../assets/images/bg_cta.png"
const CTA = () => {
    return (
        <div
            className={`flex justify-center p-3 lg:justify-end  container mx-auto object-contain w-full rounded-[40px]  md:h-[450px] bg-cover bg-no-repeat`}
            style={{
                background: "linear-gradient(88.89deg, rgba(69, 209, 253, 0) 1.91%, #02539A 56.03%)"
            }}
        >
            <div className="gap-8 flex flex-col max-w-2xl p-5 justify-center">
                <p
                    className=" text-white font-[600] leading-10  !text-2xl lg:max-w-lg md:!text-3xl lg:!text-4xl"
                >
                    Create your account and start trading today.
                </p>
                <p className='text-[#ffff] -mt-1 font-[450] text-[12px] md:text-[14px] leading-[1.6rem]'>
                    We partner with professional Forex & Commodities traders, providing you with the opportunity to follow their trades.
                </p>
                <div className="flex w-full">
                    <div className="flex flex-row gap-4 ">
                        <div>
                            <div
                                className="flex w-fit rounded-full  mx-auto border border-white p-[2.5px] shadow-lg">
                                <button className="flex-1 text-[10px] md:text-[14px] text-white font-[500] bg-transparent px-6 xl:px-8 py-3 rounded-full">
                                    Get Started Free
                                </button>
                            </div>
                        </div>
                        <div>
                            <div
                                className="flex w-fit rounded-full  mx-auto  p-[2.5px] shadow-lg">
                                <button className="flex-1 text-[10px] md:text-[14px] text-[#02539A] font-[600] bg-[#ffff] px-6 xl:px-10 py-3.5 rounded-full">
                                    View Pricing
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA