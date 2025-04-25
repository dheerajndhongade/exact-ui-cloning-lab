import React from "react";

const FeeInstallments: React.FC = () => {
  return (
    <>
      <div className="bg-[rgba(249,249,249,1)] flex w-[1811px] max-w-full gap-5 flex-wrap justify-between ml-[22px] mr-[13px] mt-2.5 pl-[21px] pr-[79px] py-[3px] rounded-[5px_5px_0px_0px] max-md:mr-2.5 max-md:px-5">
        <div className="flex items-stretch gap-[40px_50px] text-lg text-[rgba(4,19,158,1)] font-normal leading-loose mt-[5px] max-md:max-w-full">
          <div>
            <div className="max-md:mr-0.5">1st Instalment</div>
            <div className="bg-[rgba(4,19,158,1)] flex shrink-0 h-0.5 mt-[5px] rounded-[10px]" />
          </div>
          <div className="basis-auto">2nd Instalment</div>
          <div className="basis-auto">3rd Instalment</div>
        </div>
        <div className="flex items-stretch gap-[22px] text-base text-[rgba(8,34,83,1)] font-semibold">
          <div className="grow my-auto">Enter total amount received:</div>
          <div className="bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.1)] flex w-[120px] shrink-0 h-[37px] rounded-[5px]" />
        </div>
      </div>
      <div className="flex w-full max-w-[1770px] items-stretch gap-[40px_50px] text-[rgba(8,34,83,1)] flex-wrap ml-[39px] mr-[37px] mt-[19px] max-md:max-w-full max-md:mr-2.5">
        <div className="flex items-stretch gap-6">
          <div className="flex flex-col text-sm font-normal whitespace-nowrap">
            <div className="z-10 flex w-[18px] shrink-0 h-[18px] rounded-sm border-[rgba(3,18,156,1)] border-solid border-2" />
            <div>1.</div>
          </div>
          <div className="text-base font-semibold">S.No </div>
        </div>
        <div className="flex items-stretch gap-[40px_100px] text-base font-semibold grow shrink basis-auto max-md:max-w-full">
          <div className="grow">Description</div>
          <div>Due Date</div>
          <div>Due Days</div>
          <div className="basis-auto">Total Fee Applicable</div>
          <div>Due Till Date</div>
          <div className="basis-auto">Balance Amount (INR)</div>
          <div className="basis-auto">Amount Received (INR)</div>
        </div>
      </div>
    </>
  );
};

export default FeeInstallments;
