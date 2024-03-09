import React from 'react'
import HeadingSection from '../components/common/HeadingSection'
import CTA from '../components/common/CTA';
import AboutImg from "../assets/images/about_img.png"
import About1 from "../assets/images/abt1.png"
import About2 from "../assets/images/abt2.png"
import CommonGrid from '../components/common/CommonGrid'

const About = () => {
    return (
        <div className="space-y-24 my-20 container mx-auto px-5">
            <HeadingSection hideBtn={true} title="About Us" text={"Welcome to TradeFactor, your gateway to revolutionary trading solutions and strategies! We are a dynamic team of expert traders and skilled full stack developers based in Europe, united by our passion for the financial markets and cutting-edge technology."} />
            <div className='space-y-12 lg:space-y-20 w-full'>
                <div className='flex flex-col gap-8 md:gap-16 w-full  items-center  justify-center'>
                    <div className='max-w-5xl'>
                        <img src={AboutImg} alt="AboutImg" className='object-contain w-auto md:w-[900px]' />
                    </div>
                    <div className='space-y-7'>
                        <p
                            className="!text-[#ACACAC] text-[12px] lg:text-[17px] "
                        >
                            At TradeFactor, we understand that success in trading requires a winning combination of expertise and innovation. With this in mind, we have carefully curated a team of professionals from both the trading and tech industries, each bringing their unique strengths to the table.
                        </p>
                        <p
                            className="!text-[#ACACAC] text-[12px] lg:text-[17px] "
                        >
                            Our traders boast years of experience in the financial markets, with a proven track record of navigating the complexities of trading and consistently achieving profitable results. Combining their market insights and analytical skills, they have meticulously crafted robust trading strategies that stand the test of time.                    </p>
                        <p
                            className="!text-[#ACACAC] text-[12px] lg:text-[17px] "
                        >
                            On the other hand, our full stack developers are the driving force behind the seamless operation of TradeFactor. They have harnessed their technical prowess to create our groundbreaking platform, designed to manage multiple trading accounts with utmost efficiency. Through our cutting-edge technology, we offer light-speed copytrading services, enabling you to follow the footsteps of our expert traders effortlessly.
                        </p>
                    </div>
                </div>
            </div>
            <div className='space-y-12 lg:space-y-20 '>
                <CommonGrid
                    reverseRow={false}
                    title="Community"
                    img={About1}
                    hideBtn={true}
                    text="At TradeFactor, we are more than just a platform – we are a community of traders and investors who share a common goal: to thrive in the financial markets. Our mission is to empower traders of all levels with the tools and knowledge they need to make informed decisions and achieve financial success."
                />
                <CommonGrid
                    reverseRow={true}
                    title="Socialize"
                    img={About2}
                    hideBtn={true}
                    text="As we unveil our first platform, TradeFactor, we are brimming with excitement about the possibilities it brings. Our platform is not just about executing trades; it is about forging connections, sharing insights, and cultivating a supportive ecosystem that fosters growth and prosperity."
                />
            </div>
            <div>
                <CTA />
            </div>
        </div>
    )
}

export default About