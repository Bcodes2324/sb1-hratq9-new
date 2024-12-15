import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ExpensesList } from './ExpensesList';
import { ExpenseFilters } from './ExpenseFilters';
import { ExpenseStats } from './ExpenseStats';
import { ExpenseChart } from './ExpenseChart';

export function ExpensesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [dateRange, setDateRange] = useState('month');

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Expenses</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <ExpenseStats />
        
        <div className="mb-6">
          <ExpenseChart />
        </div>

        <ExpenseFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
        />

        <ExpensesList
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          dateRange={dateRange}
        />
      </div>
    </div>
  );
}