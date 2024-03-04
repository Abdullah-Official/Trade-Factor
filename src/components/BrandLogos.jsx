import React from 'react'
import Brand1 from "../assets/images/brand1.png"
import Brand2 from "../assets/images/brand2.png"
import Brand3 from "../assets/images/brand3.png"
import Brand4 from "../assets/images/brand4.png"
import Brand5 from "../assets/images/brand5.png"

const BrandLogos = () => {
    return (
        <div className='flex items-center justify-around overflow-x-auto max-w-full scrollbar-hide gap-4'>
            <div className="min-w-min">
                <img src={Brand1} alt="Brand1" className='object-contain brand_img' />
            </div>
            <div className="min-w-min">
                <img src={Brand2} alt="Brand2" className='object-contain brand_img' />
            </div>
            <div className="min-w-min">
                <img src={Brand3} alt="Brand3" className='object-contain brand_img' />
            </div>
            <div className="min-w-min">
                <img src={Brand4} alt="Brand4" className='object-contain brand_img' />
            </div>
            <div className="min-w-min">
                <img src={Brand5} alt="Brand5" className='object-contain brand_img' />
            </div>
        </div>

    )
}

export default BrandLogos