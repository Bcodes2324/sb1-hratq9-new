import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function ExpenseChart() {
  const data = [
    { month: 'Jan', amount: 12400 },
    { month: 'Feb', amount: 15200 },
    { month: 'Mar', amount: 17600 },
    { month: 'Apr', amount: 14300 },
    { month: 'May', amount: 16800 },
    { month: 'Jun', amount: 19200 },
  ];

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#4F46E5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}