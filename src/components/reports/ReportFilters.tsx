import React from 'react';
import { Download } from 'lucide-react';

interface ReportFiltersProps {
  dateRange: string;
  onDateRangeChange: (range: string) => void;
  selectedProject: string;
  onProjectChange: (project: string) => void;
}

export function ReportFilters({
  dateRange,
  onDateRangeChange,
  selectedProject,
  onProjectChange,
}: ReportFiltersProps) {
  const dateRanges = [
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'quarter', label: 'This Quarter' },
    { value: 'year', label: 'This Year' },
  ];

  const projects = ['all', 'Website Redesign', 'Mobile App', 'Cloud Migration'];

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-6">
      <div className="flex space-x-3">
        <select
          value={dateRange}
          onChange={(e) => onDateRangeChange(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          {dateRanges.map(range => (
            <option key={range.value} value={range.value}>{range.label}</option>
          ))}
        </select>
        <select
          value={selectedProject}
          onChange={(e) => onProjectChange(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          {projects.map(project => (
            <option key={project} value={project}>
              {project === 'all' ? 'All Projects' : project}
            </option>
          ))}
        </select>
      </div>
      <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
        <Download className="h-4 w-4 mr-2" />
        Export Report
      </button>
    </div>
  );
}