import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-black text-white'>
        <div className='flex gap-[86px] px-[180px] py-20'>
            <div className='flex flex-col gap-6'>
                <Link href={""} className='text-[24px] font-bold'>Exclosive</Link>
                <Link href={""} className='text-[20px] font-medium'>Subscribe</Link>
                <Link href={""} className='text-[16px]'>Get 10% off your first order</Link>
            </div>
            <div className='flex flex-col gap-4 max-w-[180px] text-wrap'>
                <Link href={""} className='text-[20px] font-medium'>Support</Link>
                <Link href={""} className='text-[16px]' >111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</Link>
                <Link href={""} className='text-[16px]' >exclusive@gmail.com</Link>
                <Link href={""} className='text-[16px]' >+88015-88888-9999</Link>
            </div>
            <div className='flex flex-col gap-4 max-w-[180px] text-wrap'>
                <Link href={""} className='text-[20px] font-medium'>Account</Link>
                <Link href={""} className='text-[16px]' >My Account</Link>
                <Link href={""} className='text-[16px]' >Login / Register</Link>
                <Link href={""} className='text-[16px]' >Cart</Link>
                <Link href={""} className='text-[16px]' >Wishlist</Link>
                <Link href={""} className='text-[16px]' >Shop</Link>
            </div>
            <div className='flex flex-col gap-4 max-w-[180px] text-wrap'>
                <Link href={""} className='text-[20px] font-medium'>Quick Link</Link>
                <Link href={""} className='text-[16px]' >Privacy Policy</Link>
                <Link href={""} className='text-[16px]' >Terms Of Use</Link>
                <Link href={""} className='text-[16px]' >FAQ</Link>
                <Link href={""} className='text-[16px]' >Contact</Link>
            </div>
            <div className='flex flex-col gap-4 max-w-[180px] text-wrap'>
                <Link href={""} className='text-[20px] font-medium'>Download App</Link>
                <Link href={""} className='text-[16px]' >Save $3 with App New User Only</Link>
                <Link href={""} className='text-[16px]' >Terms Of Use</Link>
                <Link href={""} className='text-[16px]' >FAQ</Link>
                <Link href={""} className='text-[16px]' >Contact</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer