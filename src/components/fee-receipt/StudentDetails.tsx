import React from "react";

const StudentDetails: React.FC = () => {
  return (
    <div className="bg-[rgba(243,243,250,1)] mx-3 pl-[30px] pr-20 py-8 rounded-[5px] max-md:max-w-full max-md:mr-2.5 max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[39%] max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col items-stretch text-black max-md:max-w-full max-md:mt-10">
            <div className="flex items-stretch gap-[40px_80px] text-lg max-md:max-w-full">
              <div className="font-semibold grow shrink w-[110px]">
                Student Details:
              </div>
              <div className="flex flex-col items-stretch">
                <div className="font-semibold">
                  <span className="font-normal">Student Name:</span> Jayati Dave
                </div>
                <div className="font-normal mt-[17px]">
                  Class: <span className="font-semibold">4-A</span>
                </div>
              </div>
            </div>
            <div className="flex w-[193px] max-w-full flex-col items-stretch text-base mr-[39px] mt-[31px] max-md:mr-2.5">
              <div className="font-semibold">Academic Year</div>
              <div className="bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.1)] flex items-stretch gap-5 font-normal justify-between mt-[13px] px-[19px] py-[9px] rounded-[5px]">
                <div>2023-24 | 3-A</div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/44950043ed0547b680db2d9b855525e8/ab96bb753a5df646f25098052f920c998a6f9e24?placeholderIfAbsent=true"
                  alt="Dropdown icon"
                  className="aspect-[1.72] object-contain w-3 shrink-0 my-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[29%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col text-lg text-black font-semibold max-md:mt-10">
            <div className="self-stretch">
              <span className="font-normal">Parent/Guardian Name:</span> Name
              Surname
            </div>
            <div className="font-normal mt-[18px]">
              Has siblings: <span className="font-semibold">Yes</span>
            </div>
            <div className="text-base mt-[30px]">Select Sibling</div>
            <div className="bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.1)] flex w-[223px] max-w-full items-stretch gap-5 text-base font-normal justify-between mt-[13px] px-5 py-[9px] rounded-[5px]">
              <div>Name Surname</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/44950043ed0547b680db2d9b855525e8/ab96bb753a5df646f25098052f920c998a6f9e24?placeholderIfAbsent=true"
                alt="Dropdown icon"
                className="aspect-[1.72] object-contain w-3 shrink-0 my-auto"
              />
            </div>
          </div>
        </div>
        <div className="w-[17%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col text-lg text-black font-semibold max-md:mt-10">
            <div>
              <span className="font-normal">Roll no:</span> 009
            </div>
            <div className="font-normal mt-[18px]">
              Application no: <span className="font-semibold">Yes</span>
            </div>
            <div className="text-base mt-[30px]">Receipt Date </div>
            <div className="bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.1)] self-stretch text-base font-normal mt-[13px] px-5 py-[9px] rounded-[5px]">
              03 Jan 2024
            </div>
          </div>
        </div>
        <div className="w-[15%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch text-lg text-black max-md:mt-10">
            <div className="font-semibold">
              <span className="font-normal">Registration no:</span> 009
            </div>
            <div className="font-normal mt-[18px]">
              Admission no: <span className="font-semibold">Yes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
