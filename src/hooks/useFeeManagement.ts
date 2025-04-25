
import { useState } from 'react';
import { FeeData, FeeItem } from '../types/fee';

const DEFAULT_FEE_DATA: FeeData = {
  studentType: 'regular',
  studentName: '',
  academicYear: '',
  selectedSibling: '',
  feeType: 'normal',
  receivedAmounts: {},
  remarks: '',
  paymentMode: 'cash',
  paidBy: '',
  totalAmountReceived: 0
};

export const useFeeManagement = () => {
  const [feeData, setFeeData] = useState<FeeData>(DEFAULT_FEE_DATA);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof FeeData, value: any) => {
    setFeeData(prev => ({ ...prev, [field]: value }));
  };

  const handleReceivedAmountChange = (itemId: string, amount: number) => {
    setFeeData(prev => ({
      ...prev,
      receivedAmounts: {
        ...prev.receivedAmounts,
        [itemId]: amount
      }
    }));
  };

  const saveFeeData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/fee-receipts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feeData)
      });

      if (!response.ok) {
        throw new Error('Failed to save fee data');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error saving fee data:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    feeData,
    isLoading,
    handleInputChange,
    handleReceivedAmountChange,
    saveFeeData
  };
};
