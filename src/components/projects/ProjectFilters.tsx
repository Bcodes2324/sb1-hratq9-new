import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { type ProjectStatusType } from '../../types/project';

interface ProjectFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
}

export function ProjectFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
}: ProjectFiltersProps) {
  const statuses: ('all' | ProjectStatusType)[] = [
    'all',
    'Not Started',
    'In Progress',
    'On Track',
    'At Risk',
    'Delayed',
    'Completed',
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="flex items-center gap-4">
        <SlidersHorizontal className="h-5 w-5 text-gray-400" />
        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
          className="rounded-lg border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          {statuses.map((s) => (
            <option key={s} value={s}>
              {s === 'all' ? 'All Statuses' : s}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}