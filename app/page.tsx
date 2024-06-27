import Category from "@/components/Category";
import HomeBanner from "@/components/HomeBanner";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Products from "@/components/Products";
import Image from "next/image";
import bannerImage from "../assets/images/banner.png";
import SectionHeading from "@/components/SectionHeading";
import arrival1Image from "../assets/images/arrival1.png";
import arrival2Image from "../assets/images/arrival2.png";
import arrival3Image from "../assets/images/arrival3.png";
import arrival4Image from "../assets/images/arrival4.png";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import CustomerSupport from "@/components/CustomerSupport";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white">
      <Navbar />
      <HomeBanner />
      <Products />
      <Category />
      <Products />
      <div className="w-[1170px] mx-auto mt-10 mb-20">
        <Image src={bannerImage} alt="banner image" />
      </div>
      <Products />

      <div>
        <SectionHeading />
        <div className="w-[1170px] mx-auto mt-10 mb-10 flex gap-[30px]">
          <div className="flex-1">
            <Image src={arrival1Image} alt="arr1" />
          </div>
          <div className="flex-1 flex flex-col gap-[30px]">
            <div>
              <Image src={arrival2Image} alt="arr1" />
            </div>
            <div className="flex gap-[30px]">
              <div>
                <Image src={arrival3Image} alt="arr1" />
              </div>
              <div>
                <Image src={arrival4Image} alt="arr1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CustomerSupport />
      <Footer />
      {/* <Category /> */}
    </div>
  );
}
