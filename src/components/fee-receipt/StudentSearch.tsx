
import React from "react";
import { FeeData } from "@/types/fee";

interface StudentSearchProps {
  feeData: FeeData;
  onInputChange: (field: keyof FeeData, value: any) => void;
}

const StudentSearch: React.FC<StudentSearchProps> = ({ feeData, onInputChange }) => {
  return (
    <div className="self-stretch flex w-full items-stretch gap-5 flex-wrap justify-between mt-5 max-md:max-w-full">
      <div className="flex items-stretch gap-2.5 flex-wrap">
        <div className="flex flex-col items-stretch text-black">
          <div className="text-lg font-semibold">Search By</div>
          <div className="bg-white shadow-[0px_3px_3px_rgba(0,0,0,0.161)] flex items-stretch gap-5 text-base font-medium justify-between mt-2.5 px-5 py-[17px] rounded-md">
            <div>Regular Student</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/44950043ed0547b680db2d9b855525e8/d2d283c040cf9af17749e39019eed9a022516342?placeholderIfAbsent=true"
              alt="Dropdown icon"
              className="aspect-[1.75] object-contain w-3.5 shrink-0 mt-[7px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit max-md:max-w-full">
          <div className="text-[rgba(201,201,201,1)] text-lg font-medium text-center ml-3 max-md:max-w-full">
            Application no. 2. Admission no, 3. Registration no. 4. Roll no
          </div>
          <div className="flex items-stretch gap-[30px] flex-wrap mt-2.5">
            <div className="flex items-stretch gap-2.5 text-base text-black flex-wrap grow shrink basis-auto">
              <div className="bg-white shadow-[0px_3px_3px_rgba(0,0,0,0.161)] flex items-stretch gap-[40px_57px] font-medium px-5 py-[17px] rounded-md">
                <div>Student Name</div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/44950043ed0547b680db2d9b855525e8/d2d283c040cf9af17749e39019eed9a022516342?placeholderIfAbsent=true"
                  alt="Dropdown icon"
                  className="aspect-[1.75] object-contain w-3.5 shrink-0 mt-[7px]"
                />
              </div>
              <div className="bg-white shadow-[0px_3px_3px_rgba(0,0,0,0.161)] flex items-stretch gap-[40px_100px] font-normal grow shrink basis-auto px-[23px] py-[15px] rounded-md max-md:pr-5">
                <div>Jayati Dave</div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/44950043ed0547b680db2d9b855525e8/d2d283c040cf9af17749e39019eed9a022516342?placeholderIfAbsent=true"
                  alt="Dropdown icon"
                  className="aspect-[1.75] object-contain w-3.5 shrink-0 my-auto"
                />
              </div>
            </div>
            <button 
              className="bg-[rgba(8,34,83,1)] text-lg text-white font-medium whitespace-nowrap text-center px-9 py-[13px] rounded-md max-md:px-5"
              onClick={() => onInputChange('studentName', 'Jayati Dave')}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-stretch text-base font-normal max-md:max-w-full">
        <div className="text-black ml-2.5">Scan/Search By Student ID</div>
        <div className="bg-white shadow-[0px_3px_3px_rgba(0,0,0,0.161)] border flex items-stretch gap-[17px] text-[rgba(173,170,170,1)] mt-2.5 px-4 py-[7px] rounded-md border-[rgba(22,129,255,1)] border-solid">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/44950043ed0547b680db2d9b855525e8/3378f550e65cf6d40b9baa03964bd0a47d4f5777?placeholderIfAbsent=true"
            alt="Scan icon"
            className="aspect-[1] object-contain w-[34px] fill-[rgba(255,255,255,0.00)] shrink-0"
          />
          <div className="grow shrink w-[360px] basis-auto my-auto">
            Scan student's ID barcode
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSearch;
