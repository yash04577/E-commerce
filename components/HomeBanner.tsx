import Link from 'next/link'
import React from 'react'
import bannerImage from "../assets/images/homeBanner.png";
import Image from 'next/image';

type Props = {}

const HomeBanner = (props: Props) => {
  return (
    <div className='flex gap-10 w-[1170px] mx-auto mb-[180px]'>
        <div className='border-r border-gray-500 pr-[100px]'>
            <div className='flex flex-col gap-4 text-[16px] text-text2 pt-10'>
                <Link href={""}>Woman's Fashion</Link>
                <Link href={""}>Man's Fashion</Link>
                <Link href={""}>Electronic</Link>
                <Link href={""}>Home & Lifestyle</Link>
                <Link href={""}>Medicine</Link>
                <Link href={""}>Sports & Outdoor</Link>
                <Link href={""}>Baby's Toys</Link>
                <Link href={""}>Grocires & Pets</Link>
                <Link href={""}>Health & Beauty</Link>
            </div>
        </div>
        <div className='flex justify-center items-center pt-10'>
            <div>
                <Image src={bannerImage} alt='bannerImage'/>
            </div>
        </div>
    </div>
  )
}

export default HomeBanner