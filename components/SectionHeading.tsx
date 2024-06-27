import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

type Props = {};

const SectionHeading = (props: Props) => {
  return (
    <div className="w-[1170px] mx-auto">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-5">
          <div className="w-5 h-8 bg-secondary2 rounded"></div>
          <div>
            <span className="text-[16px] text-secondary2 font-semibold">
              Categories
            </span>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-[36px] text-text2 font-semibold">
            Browse By Category
          </span>

          <div className="flex gap-2 items-end">
            <span>
              <FaLongArrowAltLeft className="bg-secondary rounded-full box-content p-3" />
            </span>
            <span>
              <FaLongArrowAltRight className="bg-secondary rounded-full box-content p-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
