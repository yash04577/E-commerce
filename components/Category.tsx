import React from 'react'
import SectionHeading from './SectionHeading'
import ProductCard from './ProductCard'
import { ImMobile } from "react-icons/im";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoWatchOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { LuHeadphones } from "react-icons/lu";
import { TbDeviceGamepad } from "react-icons/tb";
import CategoryCard from './CategoryCard';

type Props = {}

const Category = (props: Props) => {
  return (
    <div className='flex flex-col gap-10'>
        <SectionHeading />
        <div className='flex gap-4 w-[1170px] mx-auto'>

            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
        
        </div>
        <div className='w[1170px] mx-auto my-10 border-b border-gray-500'>
            <button className='text-[16px] font-medium text-textColor bg-button2 px-12 py-4 rounded'>View All Products</button>
        </div>
    </div>
  )
}

export default Category