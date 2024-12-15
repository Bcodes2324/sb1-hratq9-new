import React from 'react';
import { Users, Briefcase, MapPin } from 'lucide-react';

export function TeamStats() {
  const stats = [
    {
      label: 'Total Members',
      value: '24',
      icon: Users,
      color: 'text-blue-600 bg-blue-100',
    },
    {
      label: 'Departments',
      value: '6',
      icon: Briefcase,
      color: 'text-green-600 bg-green-100',
    },
    {
      label: 'Locations',
      value: '4',
      icon: MapPin,
      color: 'text-purple-600 bg-purple-100',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg border p-4">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${stat.color}`}>
              <stat.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-xl font-semibold">{stat.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}