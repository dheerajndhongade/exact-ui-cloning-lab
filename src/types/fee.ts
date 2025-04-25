
export interface FeeData {
  studentType: string;
  studentName: string;
  academicYear: string;
  selectedSibling: string;
  feeType: 'normal' | 'miscellaneous';
  receivedAmounts: { [key: string]: number };
  remarks: string;
  paymentMode: 'cash' | 'cheque' | 'online' | 'pdc' | 'card' | 'bank';
  paidBy: string;
  totalAmountReceived: number;
}

export interface FeeItem {
  id: number;
  description: string;
  dueDate: string;
  dueDays?: string;
  totalFee: number;
  dueTillDate: number;
  balanceAmount: number;
  status?: 'overdue' | 'paid' | 'pending';
}
