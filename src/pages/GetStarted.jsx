import React from 'react'
import HeadingSection from '../components/common/HeadingSection'
import CTA from '../components/common/CTA'
import CommonGrid from '../components/common/CommonGrid'
import IntroTf from "../assets/images/intro-tf.png"
import VideoSection from '../components/common/VideoSection'
import DetailCard from '../components/Cards/DetailCard'
import { detailCardsData } from '../utils/data'


const GetStarted = () => {
    return (
        <div className="space-y-24 my-20 container mx-auto px-5">
            <HeadingSection title="Get Started" hideBtn={true} />
            <div className='space-y-12 lg:space-y-20 '>
                <CommonGrid reverseRow={true} title={`Introduction to  Trade Factor`} img={IntroTf}
                    hideBtn={true}
                    text={[
                        "Introducing TradeFactor - where retail traders meet the pros! We're here to make trading easier and more rewarding for everyone. Want to follow the experts' moves? No problem, copy their trades for free! But if you're looking for that extra boost, you can join our affordable subscription plan and get real-time signals on our dedicated Telegram channel.",
                        "Whether you're a newbie or a seasoned trader, we've got you covered. Let's grow together, learn from the best, and make those gains! TradeFactor - where trading dreams become reality, together. Come join us, and let's thrive in the markets!"
                    ].map((paragraph, index) => (
                        <p key={index} className="pb-4">{paragraph}</p>
                    ))}
                />
                <div className='flex flex-col gap-12 md:mt-24'>
                    <VideoSection title={"Account Setup"} text="Trade with confidence, knowing you're part of a supportive community and enjoying the expertise of seasoned professionals. Let's take your trading journey to new heights together!" />

                </div>
                <div className="w-full flex flex-col gap-7 !my-28 ">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-between'>
                        {
                            detailCardsData.slice(0, 3).map((v, i) => (
                                <div key={i}>
                                    <DetailCard
                                        title={v.title}
                                        descp={v.descp}

                                        num={i + 1}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 w-full  gap-7'>

                        {
                            detailCardsData.slice(3, 5).map((v, i) => (
                                <div key={i}>
                                    <DetailCard
                                        title={v.title}
                                        descp={v.descp}

                                        num={i + 4}
                                        className={`!max-w-full`}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col gap-12 md:gap-24 '>
                    <VideoSection title={"Copy a Strategy"} text="If your new Live Trading Account has been accepted by TradeFactor, you can start trading. Pick a strategy and click the 'Copy' button to initiate copying the strategy. A new instance will be deployed, and you're all set! You will be able to monitor your account's performance from your client account Dashboard." />
                    <VideoSection title={"Follow a Strategy"}
                        text={[
                            "If you don't want us to manage every trade, no worries! You can still benefit from our real-time signals by subscribing to our dedicated Telegram channel. For each strategy you wish to follow, a small monthly fee will apply.",
                            "To start following a strategy, simply click the 'Follow' button on the corresponding strategy Dashboard. It's that easy! And the best part is, you have the freedom to unsubscribe at any time, giving you full control over your trading journey."
                        ].map((paragraph, index) => (
                            <p key={index} className="pb-4">{paragraph}</p>
                        ))}
                    />

                </div>
            </div>
            <div>
                <CTA />
            </div>
        </div>
    )
}

export default GetStarted