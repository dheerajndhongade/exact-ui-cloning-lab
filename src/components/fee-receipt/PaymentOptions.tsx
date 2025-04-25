import React from "react";

const PaymentOptions: React.FC = () => {
  return (
    <div className="flex w-full flex-col mt-[30px] px-[22px] max-md:max-w-full max-md:pl-5">
      <div className="bg-[rgba(249,249,249,1)] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] self-stretch text-sm text-[rgba(173,170,170,1)] font-normal pt-[17px] pb-[98px] px-[17px] rounded-[5px] max-md:max-w-full max-md:pr-5">
        Remarks/ Comments
      </div>
      <div className="flex w-full max-w-[1491px] items-stretch flex-wrap mt-10 max-md:max-w-full">
        <div className="flex flex-col items-stretch text-lg">
          <div className="text-black font-semibold">Mode of Payment</div>
          <div className="flex min-h-14 items-stretch text-white font-medium whitespace-nowrap text-center tracking-[0.1px] leading-none justify-center mt-5 py-1">
            <div className="bg-[rgba(8,34,83,1)] border flex w-full flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%] rounded-[5px_0px_0px_5px] border-[rgba(121,116,126,1)] border-solid">
              <div className="self-stretch w-full gap-2 flex-1 h-full px-3 py-2.5">
                Cash
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit mt-[11px] max-md:max-w-full">
          <div className="text-black text-base font-semibold mr-32 max-md:mr-2.5">
            Paid By:
          </div>
          <div className="flex w-full items-stretch gap-[40px_50px] flex-wrap mt-3 max-md:max-w-full">
            <div className="flex items-stretch text-lg text-[rgba(29,27,32,1)] font-medium text-center tracking-[0.1px] leading-none flex-wrap grow shrink basis-auto max-md:max-w-full">
              <div className="flex min-h-14 items-stretch justify-center py-1">
                <div className="border flex w-full flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%] border-[rgba(121,116,126,1)] border-solid">
                  <div className="self-stretch w-full gap-2 flex-1 h-full px-3 py-2.5">
                    Cheque/ DD
                  </div>
                </div>
              </div>
              <div className="flex min-h-14 items-stretch whitespace-nowrap justify-center py-1">
                <div className="border flex w-full flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%] border-[rgba(121,116,126,1)] border-solid">
                  <div className="self-stretch w-full gap-2 flex-1 h-full px-3 py-2.5">
                    Online
                  </div>
                </div>
              </div>
              <div className="flex min-h-14 items-stretch whitespace-nowrap justify-center py-1">
                <div className="border flex w-full flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%] border-[rgba(121,116,126,1)] border-solid">
                  <div className="self-stretch w-full gap-2 flex-1 h-full px-3 py-2.5">
                    PDC
                  </div>
                </div>
              </div>
              <div className="flex min-h-14 items-stretch whitespace-nowrap justify-center py-1">
                <div className="border flex w-full flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%] border-[rgba(121,116,126,1)] border-solid">
                  <div className="self-stretch w-full gap-2 flex-1 h-full px-3 py-2.5">
                    Card
                  </div>
                </div>
              </div>
              <div className="flex min-h-14 items-stretch justify-center py-1">
                <div className="border flex w-full flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%] rounded-[0px_5px_5px_0px] border-[rgba(121,116,126,1)] border-solid">
                  <div className="self-stretch w-full gap-2 flex-1 h-full px-3 py-2.5">
                    Bank Challan
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(249,249,249,1)] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] flex items-stretch gap-[40px_85px] text-base text-black font-normal whitespace-nowrap px-5 py-[13px] rounded-[5px]">
              <div>Mother</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/44950043ed0547b680db2d9b855525e8/ab96bb753a5df646f25098052f920c998a6f9e24?placeholderIfAbsent=true"
                alt="Dropdown icon"
                className="aspect-[1.72] object-contain w-3 shrink-0 my-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-stretch gap-10 text-lg font-medium text-center flex-wrap mt-[206px] max-md:mt-10">
        <button className="bg-[rgba(8,34,83,1)] text-white px-[52px] py-[13px] rounded-md max-md:px-5">
          Save & Print
        </button>
        <button className="bg-white border text-[rgba(3,18,152,1)] px-[23px] py-3.5 rounded-md border-[rgba(3,16,141,1)] border-solid max-md:px-5">
          Print Challan
        </button>
        <button className="text-[rgba(3,18,156,1)] my-auto">Cancel</button>
      </div>
    </div>
  );
};

export default PaymentOptions;
