import React from 'react'
import OutlineBtn from './common/OutlineBtn'
import HomeCard from './Cards/HomeCard'
import HomeCardImg from "../assets/images/h_card_1.png"
import HomeCardImg2 from "../assets/images/h_card_2.png"
import HomeCardImg3 from "../assets/images/h_card_3.png"


const cardsData = [
    {
        title: "Choose a Strategy",
        img: HomeCardImg,
    },
    {
        title: "Connect Account",
        img: HomeCardImg2,
    },
    {
        title: "Start Trading",
        img: HomeCardImg3,
    },
]

const CardsSection = () => {
    return (
        <div className='mt-10 lg:mt-32 container mx-auto flex flex-col gap-y-6 '>
            <div className="gap-4 lg:gap-7 flex flex-col items-center">
                <p
                    className="text-center text-white font-[600]   leading-snug  !text-xl lg:max-w-4xl md:!text-2xl lg:!text-4xl"
                >
                    <span className='text-[#45D1FD]'>Get started</span>{" "}
                    easy as 1-2-3
                </p>
                <p
                    className="lg:max-w-2xl !text-[#ACACAC] text-[12px] lg:text-[14px] text-center "
                >
                    Lorem ipsum dolor sit amet consectetur adipiscing elit blandit id dolor venenatis auctor maecenas egestas arcu ut consectetur.
                </p>
            </div>
            <section className="py-8 px-8 flex justify-center "> {/* Added lg:justify-between */}
                <div className="flex items-center w-full ">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 justify-center lg:justify-between lg:grid-cols-3 w-full">
                        {
                            cardsData.map((v, i) => (
                                <HomeCard title={v.title} img={v.img} key={i} />
                            ))
                        }
                    </div>
                </div>
            </section>

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
    )
}

export default CardsSection