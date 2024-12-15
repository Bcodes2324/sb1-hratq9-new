import React, { useState } from 'react';
import { ReportFilters } from './ReportFilters';
import { ReportStats } from './ReportStats';
import { ReportCharts } from './ReportCharts';
import { ReportTable } from './ReportTable';

export function ReportsPage() {
  const [dateRange, setDateRange] = useState('month');
  const [selectedProject, setSelectedProject] = useState('all');

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Financial Reports</h1>
            <p className="text-sm text-gray-500 mt-1">Track your project expenses and budget allocation</p>
          </div>
        </div>

        <ReportFilters
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
          selectedProject={selectedProject}
          onProjectChange={setSelectedProject}
        />

        <ReportStats dateRange={dateRange} selectedProject={selectedProject} />
        
        <div className="mt-6">
          <ReportCharts dateRange={dateRange} selectedProject={selectedProject} />
        </div>

        <div className="mt-6">
          <ReportTable dateRange={dateRange} selectedProject={selectedProject} />
        </div>
      </div>
    </div>
  );
}