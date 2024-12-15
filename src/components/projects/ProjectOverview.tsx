import React from 'react';
import { Clock, Users, Tag, BarChart } from 'lucide-react';
import { type Project } from '../../types/project';
import { ProjectStatus } from './ProjectStatus';

interface ProjectOverviewProps {
  project: Project;
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{project.name}</h1>
          <p className="text-gray-500 mt-1">{project.description}</p>
        </div>
        <ProjectStatus status={project.status} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Due Date</p>
              <p className="font-medium">{new Date(project.dueDate).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center space-x-3">
            <Users className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Team Size</p>
              <p className="font-medium">{project.team.length} members</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center space-x-3">
            <Tag className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Tags</p>
              <p className="font-medium">{project.tags.join(', ')}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center space-x-3">
            <BarChart className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Progress</p>
              <p className="font-medium">{project.progress}%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Budget Overview</h2>
        <div className="flex justify-between items-end mb-2">
          <div>
            <p className="text-sm text-gray-500">Total Budget</p>
            <p className="text-2xl font-bold text-gray-900">${project.budget.toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Spent</p>
            <p className="text-2xl font-bold text-gray-900">${project.spent.toLocaleString()}</p>
          </div>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${
              (project.spent / project.budget) > 0.9
                ? 'bg-red-500'
                : (project.spent / project.budget) > 0.7
                ? 'bg-yellow-500'
                : 'bg-green-500'
            }`}
            style={{ width: `${Math.min((project.spent / project.budget) * 100, 100)}%` }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {Math.round((project.spent / project.budget) * 100)}% of budget used
        </p>
      </div>
    </div>
  );
}