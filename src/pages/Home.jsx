import React from 'react'
import HeroSection from '../components/HeroSection'
import HeroImg from "../assets/images/hero-img.png"
import HomeBG from "../assets/images/home_bg.png"
import BrandLogos from '../components/BrandLogos'
import CardsSection from '../components/CardsSection'
import BestPerformance from '../components/Home/BestPerformance'
import GetFundedProgram from '../components/Home/GetFundedProgram'
import CTA from '../components/common/CTA'

const Home = () => {
    return (
        <div >
            <div className="space-y-16 container my-20 h-full mx-auto px-5">
                <HeroSection />
                <div className=" my-20 space-y-10 flex flex-col w-full items-center">
                    <img src={HeroImg} alt="HeroImg" className="object-contain w-[90%] md:w-auto" />
                </div>
                <div>
                    <BrandLogos />
                </div>
                <div>
                    <CardsSection />
                </div>
                <div>
                    <BestPerformance />
                </div>
                <div>
                    <GetFundedProgram />
                </div>
                <div>
                    <CTA />
                </div>
            </div>
        </div>
    )
}

export default Home