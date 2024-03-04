import React from 'react'

const HomeCard = ({img: HomeCardImg, title}) => {
  return (
    <div className='bg-[#02539A40] rounded-3xl px-6 py-8 flex flex-col gap-4  md:max-w-[350px]'>
        <img src={HomeCardImg} alt="HomeCardImg" className='object-contain w-full' />
        <p className='text-white font-[600] text-[16px] pt-1'>{title}</p>
        <p className='text-[#C9C9C9] -mt-1 font-[500] text-[13px]'>
        Lorem ipsum dolor sit amet consectetur adipiscing elit blandit id dolor venenatis auctor maecenas egestas arcu ut consectetur.
        </p>
    </div>
  )
}

export default HomeCard