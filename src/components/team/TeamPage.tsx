import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { TeamGrid } from './TeamGrid';
import { TeamFilters } from './TeamFilters';
import { TeamStats } from './TeamStats';
import { type TeamMember } from '../../types/team';

export function TeamPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Team</h1>
            <p className="text-sm text-gray-500 mt-1">Manage your team members and their roles</p>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Team Member
          </button>
        </div>

        <TeamStats />
        <TeamFilters 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedDepartment={selectedDepartment}
          onDepartmentChange={setSelectedDepartment}
        />
        <TeamGrid 
          searchQuery={searchQuery}
          selectedDepartment={selectedDepartment}
        />
      </div>
    </div>
  );
}