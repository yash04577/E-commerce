import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

type Props = {}

const CustomerSupport = (props: Props) => {
  return (
    <div className='w-[1170px] flex gap-[88px] items-center justify-center mx-auto my-20'>
        
            <div className='flex flex-col justify-center items-center'>
                <div className=''>
                    <TbTruckDelivery className='text-[80px] box-border bg-black text-white rounded-full p-3'/>
                </div>
                <p className='text-[20px] font-semibold text-black'>FREE AND FAST DELIVERY</p>
                <p className='text-[14px] text-black'>Free delivery for all orders over $140</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className=''>
                    <TbTruckDelivery className='text-[80px] box-border bg-black text-white rounded-full p-3'/>
                </div>
                <p className='text-[20px] font-semibold text-black'>FREE AND FAST DELIVERY</p>
                <p className='text-[14px] text-black'>Free delivery for all orders over $140</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className=''>
                    <TbTruckDelivery className='text-[80px] box-border bg-black text-white rounded-full p-3'/>
                </div>
                <p className='text-[20px] font-semibold text-black'>FREE AND FAST DELIVERY</p>
                <p className='text-[14px] text-black'>Free delivery for all orders over $140</p>
            </div>
        {/* </div> */}
    </div>
  )
}

export default CustomerSupport