
import React from "react";
import { FeeData } from "@/types/fee";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PaymentOptionsProps {
  feeData: FeeData;
  onInputChange: (field: keyof FeeData, value: any) => void;
  onSave: () => Promise<void>;
  isLoading: boolean;
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({
  feeData,
  onInputChange,
  onSave,
  isLoading
}) => {
  const paymentModes = ['cash', 'cheque', 'online', 'pdc', 'card', 'bank'] as const;
  const paidByOptions = ['Father', 'Mother', 'Guardian'];

  return (
    <div className="flex w-full flex-col mt-[30px] px-[22px] max-md:max-w-full max-md:pl-5">
      <Textarea
        value={feeData.remarks}
        onChange={(e) => onInputChange('remarks', e.target.value)}
        placeholder="Remarks/ Comments"
        className="bg-[rgba(249,249,249,1)] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] min-h-[120px] text-sm"
      />
      
      <div className="flex w-full max-w-[1491px] items-stretch flex-wrap mt-10 gap-6 max-md:max-w-full">
        <div className="flex flex-col items-stretch text-lg">
          <div className="text-black font-semibold mb-4">Mode of Payment</div>
          <div className="flex gap-1">
            {paymentModes.map((mode) => (
              <Button
                key={mode}
                variant={feeData.paymentMode === mode ? "default" : "outline"}
                onClick={() => onInputChange('paymentMode', mode)}
                className="capitalize"
              >
                {mode}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-black text-base font-semibold">
            Paid By:
          </div>
          <Select
            value={feeData.paidBy}
            onValueChange={(value) => onInputChange('paidBy', value)}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select payer" />
            </SelectTrigger>
            <SelectContent>
              {paidByOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-stretch gap-4 text-lg font-medium text-center flex-wrap mt-10">
        <Button
          onClick={onSave}
          disabled={isLoading}
          className="bg-[rgba(8,34,83,1)] text-white px-8"
        >
          {isLoading ? 'Saving...' : 'Save & Print'}
        </Button>
        <Button
          variant="outline"
          className="border-[rgba(3,16,141,1)] text-[rgba(3,18,152,1)]"
        >
          Print Challan
        </Button>
        <Button
          variant="ghost"
          className="text-[rgba(3,18,156,1)]"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default PaymentOptions;

