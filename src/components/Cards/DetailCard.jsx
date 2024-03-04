import React from 'react'

const DetailCard = ({title, num, descp, className}) => {
  return (
    <div className={`bg-[#02539A40] rounded-3xl px-8 py-10 flex flex-col gap-4 w-full ${className}`}>
      <div className='py-4 rounded-2xl bg-[#02539A40] !w-[69px] shadow-xs'>
            <p className='text-white font-[600] text-[25px] text-center'>0{num}</p>
      </div>
      <p className='text-white font-[600] text-[22px] pt-1'>{title}</p>
      <p className='text-[#C9C9C9] -mt-1 font-[500] text-[13px] !max-w-[86%]'>
      {descp}
      </p>
    </div>
  )
}

export default DetailCard