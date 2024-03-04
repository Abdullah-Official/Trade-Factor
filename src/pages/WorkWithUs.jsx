import React from 'react'
import HeadingSection from '../components/common/HeadingSection'
import CTA from '../components/common/CTA'
import OutlineBtn from '../components/common/OutlineBtn'

const WorkWithUs = () => {
    const inputStyle = `bg-transparent rounded-lg py-2.5 px-4 pl-5 pt-3 text-[12px] outline-none text-white placeholder:text-white border border-[#02539A]`
    return (
        <div className="space-y-24 my-20 container mx-auto px-5">
            <HeadingSection hideBtn={true} title="Work With Us" />
            <div className='space-y-12 lg:space-y-20 w-full flex justify-center'>
                <div className='max-w-5xl w-full bg-[#02539A40] p-12 rounded-3xl'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <input type="text" name="firstName" placeholder='First Name' className={`${inputStyle}`} />
                        <input type="text" name="lastName" placeholder='Last Name' className={`${inputStyle}`} />

                        <input type="email" name="email" placeholder='Email address' className={`${inputStyle}`} />

                        <input type="text" name="phone" placeholder='Phone' className={`${inputStyle}`} />
                        <textarea type="text" name="message" rows={4} placeholder='Message' className={`${inputStyle} col-span-full`} />

                    </div>
                    <div className='mt-10'>
                        <OutlineBtn title="Send Message" />
                    </div>
                </div>
            </div>
            <div>
                <CTA />
            </div>
        </div>
    )
}

export default WorkWithUs