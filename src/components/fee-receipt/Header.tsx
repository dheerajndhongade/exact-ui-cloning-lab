import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <div className="bg-white shadow-[0px_3px_3px_rgba(0,0,0,0.078)] flex w-full gap-5 flex-wrap justify-between px-[23px] py-[11px] max-md:max-w-full max-md:pr-5">
        <div className="flex items-stretch gap-[33px] mt-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/44950043ed0547b680db2d9b855525e8/9302bb211dd34f247f56e36cc97c5b95dcaf0744?placeholderIfAbsent=true"
            alt="Logo icon"
            className="aspect-[1] object-contain w-7 shrink-0"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/44950043ed0547b680db2d9b855525e8/2aa2916207d94634e2a001697d7c08cdeb52b799?placeholderIfAbsent=true"
            alt="Logo text"
            className="aspect-[4.18] object-contain w-[180px] shrink-0 max-w-full"
          />
        </div>
        <div className="flex items-center gap-[26px] max-md:max-w-full">
          <div className="justify-center items-stretch bg-white self-stretch flex gap-1 text-sm text-[#6B778C] font-medium leading-loose my-auto px-2 py-[9px] rounded-[5px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/44950043ed0547b680db2d9b855525e8/d4dde1169b1d7978653ef554ba6dcd3b6c27bbd3?placeholderIfAbsent=true"
              alt="Search icon"
              className="aspect-[1] object-contain w-5 fill-[rgba(255,255,255,0.00)] shrink-0"
            />
            <div className="basis-auto grow shrink">
              Search for modules, sections, pages directly...
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/44950043ed0547b680db2d9b855525e8/b7f8e2243ae492b5d1b386c142e2d75ac8fb8c98?placeholderIfAbsent=true"
            alt="Notification icon"
            className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto"
          />
          <div className="self-stretch flex items-start text-[10px] text-white font-bold whitespace-nowrap my-auto">
            <div className="bg-[rgba(8,34,83,1)] flex w-7 shrink-0 h-7 mt-[5px] rounded-[50%] max-md:-mr-2" />
            <div className="bg-[rgba(250,0,0,1)] w-[15px] h-[15px] px-[5px] rounded-[50%]">
              2
            </div>
          </div>
          <div className="self-stretch flex items-stretch gap-8">
            <div className="bg-[rgba(250,0,0,1)] flex flex-col items-center text-[10px] text-white font-bold whitespace-nowrap w-[15px] h-[15px] mt-[5px] rounded-[50%]">
              <div className="bg-[rgba(250,0,0,1)] w-[15px] h-[15px] px-0.5 rounded-[50%]">
                10
              </div>
            </div>
            <div>
              <div className="border flex items-stretch gap-[13px] px-3 py-1.5 rounded-sm border-[rgba(217,217,217,1)] border-solid">
                <div className="bg-[rgba(0,157,157,1)] flex min-h-8 flex-col items-center w-8 h-8 rounded-[100px]">
                  <div className="flex w-full items-center justify-center flex-1 h-full">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/44950043ed0547b680db2d9b855525e8/064451114e149cba533f9803d6df789382c27ca2?placeholderIfAbsent=true"
                      alt="User avatar"
                      className="aspect-[1] object-contain w-[18px] self-stretch my-auto"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-stretch font-normal whitespace-nowrap">
                  <div className="flex items-stretch gap-2.5 text-base text-black leading-none">
                    <div className="min-h-[22px] overflow-hidden">JD</div>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/44950043ed0547b680db2d9b855525e8/1ed9e6094d04dbbaf0ccc9597ab0e2d9f56329fe?placeholderIfAbsent=true"
                      alt="Dropdown icon"
                      className="aspect-[1.18] object-contain w-[13px] shrink-0 my-auto"
                    />
                  </div>
                  <div className="text-[rgba(112,112,112,1)] text-xs">
                    Teacher
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex w-full flex-col mt-[5px] pl-[26px] pr-20 py-3.5 max-md:max-w-full max-md:px-5">
        <div className="flex items-center overflow-hidden">
          <div className="self-stretch flex min-h-[22px] my-auto" />
        </div>
        <div className="text-[rgba(0,8,71,1)] text-[28px] font-bold leading-none mt-2.5">
          Fee Management
        </div>
      </div>
      <div className="flex flex-col relative min-h-14 w-[1913px] max-w-full mt-1.5 pt-[53px] pb-px px-[70px] max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/44950043ed0547b680db2d9b855525e8/1aa6a68f595472c24104f83d2ce68e0d0b21435f?placeholderIfAbsent=true"
          alt="Background"
          className="absolute h-full w-full object-cover inset-0"
        />
        <div className="relative w-[159px] shrink-0 h-0.5 border-black border-solid border-2" />
      </div>
    </>
  );
};

export default Header;
