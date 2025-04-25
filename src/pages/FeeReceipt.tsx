import React from "react";
import Header from "../components/fee-receipt/Header";
import StudentSearch from "../components/fee-receipt/StudentSearch";
import StudentDetails from "../components/fee-receipt/StudentDetails";
import FeeDashboard from "../components/fee-receipt/FeeDashboard";
import FeeInstallments from "../components/fee-receipt/FeeInstallments";
import FeeTable from "../components/fee-receipt/FeeTable";
import FeeSummary from "../components/fee-receipt/FeeSummary";
import PaymentOptions from "../components/fee-receipt/PaymentOptions";

const FeeReceipt: React.FC = () => {
  return (
    <div className="bg-[rgba(244,244,244,1)] overflow-hidden pb-[258px] max-md:pb-[100px]">
      <Header />

      <div className="bg-[rgba(249,249,249,1)] flex w-full flex-col mt-[5px] pt-[15px] px-[35px] max-md:max-w-full max-md:px-5">
        <div className="text-black text-[22px] font-medium leading-none">
          Fee Receipt
        </div>
        <div className="flex w-[415px] max-w-full items-stretch text-lg font-medium text-center tracking-[0.1px] leading-none mt-[25px]">
          <div className="flex min-h-14 items-stretch text-white whitespace-nowrap justify-center flex-1 py-1">
            <div className="bg-[rgba(8,34,83,1)] border flex w-full flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%] rounded-[5px_0px_0px_5px] border-[rgba(121,116,126,1)] border-solid">
              <div className="self-stretch w-full gap-2 flex-1 h-full px-3 py-2.5">
                Normal
              </div>
            </div>
          </div>
          <div className="flex min-h-14 items-stretch text-[rgba(29,27,32,1)] justify-center flex-1 py-1">
            <div className="border flex w-full flex-col overflow-hidden items-stretch justify-center flex-1 shrink basis-[0%] rounded-[0px_5px_5px_0px] border-[rgba(121,116,126,1)] border-solid">
              <div className="self-stretch w-full gap-2 flex-1 h-full px-3 py-2.5">
                Miscellaneous{" "}
              </div>
            </div>
          </div>
        </div>

        <StudentSearch />

        <div className="text-[rgba(201,201,201,1)] text-lg font-medium text-center ml-3.5 mt-3 max-md:ml-2.5">
          Regular, Admission student
        </div>

        <div className="bg-white self-stretch z-10 flex mb-[-231px] w-full flex-col items-stretch mt-4 pt-3 pb-[68px] max-md:max-w-full max-md:mb-2.5">
          <StudentDetails />
          <FeeDashboard />
          <FeeInstallments />
          <FeeTable />
          <FeeSummary />
          <PaymentOptions />
        </div>
      </div>
    </div>
  );
};

export default FeeReceipt;
