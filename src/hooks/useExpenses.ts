import { useState } from 'react';
import { type Expense } from '../types/expense';

export function useExpenses() {
  const [expenses] = useState<Expense[]>([
    {
      id: 1,
      description: 'Design Software Licenses',
      category: 'Software',
      amount: 2500,
      date: '2024-02-15',
      submittedBy: 'Sarah Wilson',
      status: 'Approved',
    },
    {
      id: 2,
      description: 'Team Lunch Meeting',
      category: 'Meals',
      amount: 150,
      date: '2024-02-18',
      submittedBy: 'Michael Chen',
      status: 'Pending',
    },
    {
      id: 3,
      description: 'Cloud Services',
      category: 'Services',
      amount: 1800,
      date: '2024-02-20',
      submittedBy: 'Emma Thompson',
      status: 'Approved',
    },
  ]);

  return { expenses };
}