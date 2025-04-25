import React from "react";

const FeeSummary: React.FC = () => {
  return (
    <>
      <div className="bg-[rgba(249,249,249,1)] flex flex-col text-lg text-[rgba(8,34,83,1)] font-bold whitespace-nowrap justify-center ml-[22px] mr-[13px] mt-[5px] px-[70px] py-[11px] max-md:max-w-full max-md:mr-2.5 max-md:px-5">
        <div className="flex w-[765px] max-w-full items-stretch gap-5 flex-wrap justify-between">
          <div className="flex flex-col">
            <div className="self-stretch">Concession</div>
            <div className="mt-[31px]">Fine</div>
            <div className="mt-[31px]">Discount</div>
          </div>
          <div className="flex flex-col items-stretch">
            <div className="self-center">1,28,987</div>
            <div className="bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.1)] mt-[23px] px-[18px] py-2 rounded-[5px] max-md:pr-5">
              1,28,987
            </div>
            <div className="bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.1)] mt-[15px] px-[18px] py-2 rounded-[5px] max-md:pr-5">
              1,28,987
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(243,243,250,1)] flex flex-col text-lg text-[rgba(8,34,83,1)] font-bold justify-center ml-[22px] mr-[13px] px-[70px] py-[15px] rounded-[5px] max-md:max-w-full max-md:mr-2.5 max-md:px-5">
        <div className="flex w-[1217px] max-w-full items-stretch gap-5 flex-wrap justify-between">
          <div>Sub Total</div>
          <div className="flex items-stretch gap-[40px_100px] whitespace-nowrap flex-wrap max-md:max-w-full">
            <div>1,28,987</div>
            <div>1,28,987</div>
            <div>1,28,987</div>
          </div>
        </div>
      </div>
      <div className="flex w-[296px] max-w-full flex-col items-stretch text-lg mr-5 mt-[33px] max-md:mr-2.5">
        <div className="flex items-stretch gap-3 text-[rgba(8,34,83,1)] font-bold">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/44950043ed0547b680db2d9b855525e8/51573e39e76803eb9d42ffaf3c9d73d82c4e5c69?placeholderIfAbsent=true"
            alt="Adjustment icon"
            className="aspect-[1] object-contain w-6 shrink-0"
          />
          <div className="basis-auto">Adjustment Applicable</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/44950043ed0547b680db2d9b855525e8/2f5d15ae1c0fc6751ef38d9d5edfb23b09922e03?placeholderIfAbsent=true"
            alt="Info icon"
            className="aspect-[1] object-contain w-5 shrink-0 my-auto"
          />
        </div>
        <button className="bg-[rgba(8,34,83,1)] self-stretch shadow-[0px_2px_0px_0px_rgba(0,0,0,0.04)] min-h-[45px] gap-2 overflow-hidden text-white font-semibold text-center leading-none mt-10 px-[15px] py-3 rounded-[5px] max-md:mr-[9px]">
          Calculate & Preview Receipt
        </button>
      </div>
    </>
  );
};

export default FeeSummary;
