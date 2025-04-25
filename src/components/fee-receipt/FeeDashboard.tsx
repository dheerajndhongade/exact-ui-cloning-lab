import React from "react";

const FeeDashboard: React.FC = () => {
  return (
    <div className="bg-[rgba(243,243,250,1)] flex w-[1822px] max-w-full items-stretch gap-[40px_74px] text-black flex-wrap mt-2.5 mx-3 pl-[30px] pr-20 py-4 rounded-[5px] max-md:mr-2.5 max-md:px-5">
      <div className="text-lg font-semibold mt-[22px]">
        Fee Dashboard:
        <br />
        (INR)
      </div>
      <div className="flex items-stretch gap-2.5 flex-wrap grow shrink basis-auto max-md:max-w-full">
        <div className="bg-white flex flex-col px-[30px] py-[27px] rounded-md max-md:px-5">
          <div className="text-lg font-normal">Amount Due:</div>
          <div className="text-[28px] font-semibold text-center mt-[9px]">
            45
          </div>
        </div>
        <div className="bg-white flex flex-col pt-5 pb-8 px-[30px] rounded-md max-md:px-5">
          <div className="text-lg font-normal">Current Due:</div>
          <div className="text-[28px] font-semibold mt-2.5">89,000</div>
        </div>
        <div className="bg-white flex flex-col pt-5 pb-8 px-[30px] rounded-md max-md:px-5">
          <div className="text-lg font-normal">Due Till Date:</div>
          <div className="text-[28px] font-semibold mt-2.5">1,86,999</div>
        </div>
        <div className="bg-white flex flex-col whitespace-nowrap pt-[18px] pb-8 px-[30px] rounded-md max-md:px-5">
          <div className="text-lg font-normal">Concession:</div>
          <div className="text-[28px] font-semibold mt-3">10,000</div>
        </div>
        <div className="bg-white flex flex-col pt-[18px] pb-8 px-[30px] rounded-md max-md:px-5">
          <div className="text-lg font-normal">Balance Amount:</div>
          <div className="text-[28px] font-semibold mt-3">1,86,999</div>
        </div>
        <div className="bg-white text-lg font-normal pt-[18px] pb-[78px] px-[30px] rounded-md max-md:px-5">
          Amount Received:
        </div>
      </div>
    </div>
  );
};

export default FeeDashboard;
