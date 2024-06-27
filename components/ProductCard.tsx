import Image from 'next/image'
import React from 'react'
import cardImage from "../assets/images/cardImage.png"
import fiveStartImage from "../assets/images/Fivestar.png"
import { CiHeart } from "react-icons/ci";

type Props = {}

const ProductCard = (props: Props) => {
  return (
    <div className='w-[270px] h-[350px]'>
        <div className='h-[250px] w-full relative flex justify-center items-center bg-secondary group'>
            <Image src={cardImage} alt='card image' className='' />   
            <span className='bg-secondary2 text-textColor px-3 py-1 rounded absolute left-3 top-3'>-40%</span>
            <span className='bg-white rounded-[100%] p-2 absolute right-3 top-3'>
                <CiHeart className='text-[24px]' />
            </span>
            <div>
                <button className='bg-button w-[270px] absolute bottom-0 left-0 text-white py-2 hidden group-hover:block'>Add To Cart</button>
            </div>
        </div>
        <div className='flex flex-col gap-1 px-3 mt-3'>
            <div>
                <span className='text-[16px] font-medium text-black'>HAVIT HV-G92 Gamepad</span>
            </div>
            <div className='flex gap-5'>
                <span className='text-[16px] text-secondary2 font-medium'>$120</span>
                <span className='text-[16px] text-text1 line-through font-medium'>$160</span>
            </div>
            <div className='flex items-center gap-2'>
                <span><Image src={fiveStartImage} alt='ratting' /></span>
                <span>(88)</span>
            </div>
        </div>
    </div>
  )
}

export default ProductCard