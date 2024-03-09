import React from 'react'
import PerformingAccs from "../../assets/images/p_accs.png";

const BestPerformance = () => {
  return (
    <div className='mt-10 lg:mt-32 container mx-auto flex flex-col gap-y-6 '>
      <div className="gap-4 lg:gap-7 flex flex-col items-center">
        <p
          className="text-center text-white font-[600]   leading-snug  !text-xl lg:max-w-4xl md:!text-2xl lg:!text-4xl"
        >
          <span className='text_gradient'>Top 5</span>{" "}
          Best-performing accounts
        </p>
      </div>
      <section className="py-8  flex justify-center "> {/* Added lg:justify-between */}
        <div className="flex items-center w-full ">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 justify-center lg:justify-between lg:grid-cols-3 w-full">
            <img src={PerformingAccs} alt="accounts_img" className='object-contain' />
            <img src={PerformingAccs} alt="accounts_img" className='object-contain' />
            <img src={PerformingAccs} alt="accounts_img" className='object-contain' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default BestPerformance