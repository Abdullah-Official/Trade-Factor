import React from 'react'
import HeadingSection from '../components/common/HeadingSection'
import CTA from '../components/common/CTA'
import CommonGrid from '../components/common/CommonGrid'
import Strategy1 from "../assets/images/strategy1.png"
import Strategy2 from "../assets/images/strategy2.png"


const Strategies = () => {
    return (
        <div className="space-y-24 my-20 container mx-auto px-5">
            <HeadingSection title="Strategies" />
            <div className='space-y-12 lg:space-y-20 '>
                <CommonGrid reverseRow={true} title="Nuova strategy" img={Strategy1} />
                <CommonGrid reverseRow={false} title="Strategy title" img={Strategy2} />
            </div>
            <div>
                <CTA />
            </div>
        </div>
    )
}

export default Strategies