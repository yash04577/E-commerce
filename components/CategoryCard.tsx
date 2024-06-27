import React from 'react'
import { ImMobile } from "react-icons/im";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoWatchOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { LuHeadphones } from "react-icons/lu";
import { TbDeviceGamepad } from "react-icons/tb";

type Props = {}

const CategoryCard = (props: Props) => {
  return (
    <div className='w-[170px] h-[145px] border-2 border-[#0000004D] rounded flex flex-col gap-2 justify-center items-center'>
        <ImMobile  className='text-[80px]'/>
        <span>Phone</span>
    </div>
  )
}

export default CategoryCard