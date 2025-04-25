
import React from "react";
import Header from "../components/fee-receipt/Header";
import StudentSearch from "../components/fee-receipt/StudentSearch";
import StudentDetails from "../components/fee-receipt/StudentDetails";
import FeeDashboard from "../components/fee-receipt/FeeDashboard";
import FeeInstallments from "../components/fee-receipt/FeeInstallments";
import FeeTable from "../components/fee-receipt/FeeTable";
import FeeSummary from "../components/fee-receipt/FeeSummary";
import PaymentOptions from "../components/fee-receipt/PaymentOptions";
import { useFeeManagement } from "../hooks/useFeeManagement";
import { useToast } from "@/components/ui/use-toast";

const FeeReceipt: React.FC = () => {
  const { feeData, isLoading, handleInputChange, handleReceivedAmountChange, saveFeeData } = useFeeManagement();
  const { toast } = useToast();

  const handleSave = async () => {
    try {
      await saveFeeData();
      toast({
        title: "Success",
        description: "Fee receipt saved successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save fee receipt",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-[rgba(244,244,244,1)] overflow-hidden pb-[258px] max-md:pb-[100px]">
      <Header />

      <div className="bg-[rgba(249,249,249,1)] flex w-full flex-col mt-[5px] pt-[15px] px-[35px] max-md:max-w-full max-md:px-5">
        <div className="text-black text-[22px] font-medium leading-none">
          Fee Receipt
        </div>
        <div className="flex w-[415px] max-w-full items-stretch text-lg font-medium text-center tracking-[0.1px] leading-none mt-[25px]">
          <button
            onClick={() => handleInputChange('feeType', 'normal')}
            className={`flex min-h-14 items-stretch justify-center flex-1 py-1 ${
              feeData.feeType === 'normal'
                ? 'bg-[rgba(8,34,83,1)] text-white'
                : 'bg-white text-[rgba(29,27,32,1)]'
            } border border-[rgba(121,116,126,1)] rounded-l-[5px]`}
          >
            <div className="self-stretch w-full gap-2 flex-1 h-full px-3 py-2.5">
              Normal
            </div>
          </button>
          <button
            onClick={() => handleInputChange('feeType', 'miscellaneous')}
            className={`flex min-h-14 items-stretch justify-center flex-1 py-1 ${
              feeData.feeType === 'miscellaneous'
                ? 'bg-[rgba(8,34,83,1)] text-white'
                : 'bg-white text-[rgba(29,27,32,1)]'
            } border border-[rgba(121,116,126,1)] rounded-r-[5px]`}
          >
            <div className="self-stretch w-full gap-2 flex-1 h-full px-3 py-2.5">
              Miscellaneous
            </div>
          </button>
        </div>

        <StudentSearch
          feeData={feeData}
          onInputChange={handleInputChange}
        />

        <div className="text-[rgba(201,201,201,1)] text-lg font-medium text-center ml-3.5 mt-3 max-md:ml-2.5">
          Regular, Admission student
        </div>

        <div className="bg-white self-stretch z-10 flex mb-[-231px] w-full flex-col items-stretch mt-4 pt-3 pb-[68px] max-md:max-w-full max-md:mb-2.5">
          <StudentDetails
            feeData={feeData}
            onInputChange={handleInputChange}
          />
          <FeeDashboard />
          <FeeInstallments
            feeData={feeData}
            onInputChange={handleInputChange}
          />
          <FeeTable
            feeData={feeData}
            onReceivedAmountChange={handleReceivedAmountChange}
          />
          <FeeSummary />
          <PaymentOptions
            feeData={feeData}
            onInputChange={handleInputChange}
            onSave={handleSave}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default FeeReceipt;

