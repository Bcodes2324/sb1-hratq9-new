export interface Expense {
  id: number;
  description: string;
  category: string;
  amount: number;
  date: string;
  submittedBy: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  receipt?: string;
}