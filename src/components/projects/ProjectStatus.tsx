import React from 'react';
import { type ProjectStatusType } from '../../types/project';

interface ProjectStatusProps {
  status: ProjectStatusType;
}

export function ProjectStatus({ status }: ProjectStatusProps) {
  const statusStyles = {
    'Not Started': 'bg-gray-100 text-gray-800',
    'In Progress': 'bg-blue-100 text-blue-800',
    'On Track': 'bg-green-100 text-green-800',
    'At Risk': 'bg-yellow-100 text-yellow-800',
    'Delayed': 'bg-red-100 text-red-800',
    'Completed': 'bg-purple-100 text-purple-800',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}>
      {status}
    </span>
  );
}