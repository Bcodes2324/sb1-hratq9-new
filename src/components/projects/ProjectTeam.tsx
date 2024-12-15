import React from 'react';
import { Plus, Mail } from 'lucide-react';
import { type Project } from '../../types/project';

interface ProjectTeamProps {
  project: Project;
  onAddMember: () => void;
}

export function ProjectTeam({ project, onAddMember }: ProjectTeamProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-900">Team Members</h2>
        <button
          onClick={onAddMember}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.team.map((member) => (
          <div key={member.id} className="bg-white rounded-lg border p-4">
            <div className="flex items-center space-x-4">
              <img src={member.avatar} alt="" className="h-12 w-12 rounded-full" />
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                <Mail className="h-4 w-4 mr-1" />
                Contact
              </button>
              <button className="text-sm text-red-600 hover:text-red-700">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}