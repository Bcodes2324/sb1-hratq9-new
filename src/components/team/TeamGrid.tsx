import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTeamMembers } from '../../hooks/useTeamMembers';

interface TeamGridProps {
  searchQuery: string;
  selectedDepartment: string;
}

export function TeamGrid({ searchQuery, selectedDepartment }: TeamGridProps) {
  const { teamMembers } = useTeamMembers();

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || member.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredMembers.map(member => (
        <div key={member.id} className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-start space-x-4">
            <img src={member.avatar} alt="" className="h-12 w-12 rounded-full" />
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-medium text-gray-900 truncate">{member.name}</h2>
              <p className="text-sm text-gray-500">{member.role}</p>
              <p className="text-sm text-indigo-600">{member.department}</p>
            </div>
          </div>
          
          <div className="mt-4 space-y-3">
            <div className="flex items-center text-sm text-gray-500">
              <Mail className="h-4 w-4 mr-2" />
              <a href={`mailto:${member.email}`} className="hover:text-indigo-600">{member.email}</a>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Phone className="h-4 w-4 mr-2" />
              <span>{member.phone}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{member.location}</span>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Active Projects</h3>
            <div className="flex flex-wrap gap-2">
              {member.projects.map((project, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                >
                  {project}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}