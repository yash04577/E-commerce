import Link from 'next/link'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='border-b border-gray-500'>

        
        <div className='w-full h-12 bg-black flex justify-center items-center'>
            <div>
                <div className='flex gap-4'>
                    <span className='text-textColor'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                    <span className='text-textColor font-semibold'><Link href={""}>ShopNow</Link></span>
                </div>
            </div>
        </div>
        
        <div className='w-full h-[100px] flex justify-center'>
            <div className='flex justify-between w-[1170px] items-center'>
                <div>
                    <span className='text-text2 font-bold text-[24px]'>Exclusive</span>
                </div>
                <div className='text-text2 text-[16px] flex gap-12'>
                    <Link href={""}>Home</Link>
                    <Link href={""}>Contact</Link>
                    <Link href={""}>About</Link>
                    <Link href={""}>Signup</Link>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='bg-secondary flex justify-center items-center gap-[34px] relative'>
                        <input 
                            type="text" 
                            placeholder='What are you looking for?'
                            className='text-text2 text-[12px] py-2 pl-5 pr-8 rounded-md w-full'
                         />
                        <CiSearch className='absolute right-4' />
                    </div>
                    <CiHeart className='text-[20px] mx-5'/>
                    <IoCartOutline className='text-[20px]'/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar