import React from 'react';
import { Search } from 'lucide-react';

interface TeamFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedDepartment: string;
  onDepartmentChange: (department: string) => void;
}

export function TeamFilters({
  searchQuery,
  onSearchChange,
  selectedDepartment,
  onDepartmentChange,
}: TeamFiltersProps) {
  const departments = ['all', 'Engineering', 'Design', 'Product', 'Marketing', 'Sales', 'Support'];

  return (
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search team members..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <select
        value={selectedDepartment}
        onChange={(e) => onDepartmentChange(e.target.value)}
        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        {departments.map(dept => (
          <option key={dept} value={dept}>
            {dept === 'all' ? 'All Departments' : dept}
          </option>
        ))}
      </select>
    </div>
  );
}