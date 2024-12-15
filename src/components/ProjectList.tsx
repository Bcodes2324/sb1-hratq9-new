import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { ProjectCard } from './projects/ProjectCard';
import { ProjectFilters } from './projects/ProjectFilters';
import { projects } from '../data/projects';

interface ProjectListProps {
  onViewProject: (projectId: number) => void;
}

export default function ProjectList({ onViewProject }: ProjectListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalBudget = filteredProjects.reduce((sum, project) => sum + project.budget, 0);
  const totalSpent = filteredProjects.reduce((sum, project) => sum + project.spent, 0);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Projects Overview</h2>
          <p className="text-sm text-gray-500 mt-1">
            {filteredProjects.length} active projects • ${totalSpent.toLocaleString()} spent of ${totalBudget.toLocaleString()} total budget
          </p>
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </button>
      </div>

      <ProjectFilters
        search={searchQuery}
        onSearchChange={setSearchQuery}
        status={statusFilter}
        onStatusChange={setStatusFilter}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onViewProject={() => onViewProject(project.id)}
          />
        ))}
      </div>
    </div>
  );
}