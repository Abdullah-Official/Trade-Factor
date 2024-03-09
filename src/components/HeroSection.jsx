import React from 'react'
import OutlineBtn from './common/OutlineBtn'

const HeroSection = () => {
    return (
        <header className="">
            <div className="grid mt-10 md:mt-16  w-full ">
                <div className="container mx-auto  text-center space-y-6">
                    <p
                        className="mx-auto text-white font-[600]  w-full leading-snug  !text-2xl lg:max-w-4xl md:!text-4xl lg:!text-6xl"
                    >
                        <span className='text_gradient'>Next-gen</span>{" "}
                        investing app for modern {" "}
                        <span className="text_gradient leading-snug ">
                            investors
                        </span>
                    </p>
                    <p
                        className="mx-auto lg:max-w-2xl !text-[#ACACAC] text-[14px] lg:text-[18px] "
                    >
                        Lorem ipsum dolor sit amet consectetur adipiscing elit blandit id dolor venenatis auctor maecenas egestas arcu ut consectetur.
                    </p>
                    <div className="flex items-center w-full">
                        <div className="flex flex-row gap-4 contaner mx-auto max-w-3xl">
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
        </header>
    )
}

export default HeroSection