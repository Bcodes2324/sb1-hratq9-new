import React from 'react';
import { Clock, ArrowRight, Users } from 'lucide-react';
import { ProjectStatus } from './ProjectStatus';
import { type Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
  onViewProject: () => void;
}

export function ProjectCard({ project, onViewProject }: ProjectCardProps) {
  return (
    <div className="bg-white border rounded-lg p-6 transition-all hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{project.description}</p>
        </div>
        <ProjectStatus status={project.status} />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span>Due {new Date(project.dueDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{project.team.length} members</span>
          </div>
        </div>

        <div className="flex -space-x-2">
          {project.team.map((member, i) => (
            <img
              key={i}
              src={member.avatar}
              alt={member.name}
              className="h-8 w-8 rounded-full border-2 border-white"
              title={member.name}
            />
          ))}
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Budget spent</span>
            <span className="font-medium text-gray-900">
              ${project.spent.toLocaleString()} / ${project.budget.toLocaleString()}
            </span>
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
        </div>

        <button
          onClick={onViewProject}
          className="w-full mt-2 flex items-center justify-center space-x-2 py-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium hover:bg-indigo-50 rounded-md transition-colors"
        >
          <span>View Details</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}