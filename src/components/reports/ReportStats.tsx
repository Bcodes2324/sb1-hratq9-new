import React from 'react';
import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

interface ReportStatsProps {
  dateRange: string;
  selectedProject: string;
}

export function ReportStats({ dateRange, selectedProject }: ReportStatsProps) {
  const stats = [
    {
      label: 'Total Budget',
      value: '$125,000',
      change: '+8.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-600 bg-green-100',
    },
    {
      label: 'Total Spent',
      value: '$45,200',
      change: '+12.5%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-blue-600 bg-blue-100',
    },
    {
      label: 'Remaining',
      value: '$79,800',
      change: '-2.3%',
      trend: 'down',
      icon: TrendingDown,
      color: 'text-purple-600 bg-purple-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              <p className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change} from last {dateRange}
              </p>
            </div>
            <div className={`p-3 rounded-lg ${stat.color}`}>
              <stat.icon className="h-6 w-6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}