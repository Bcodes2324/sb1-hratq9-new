import React, { useState } from 'react';
import { Plus, Mail, Phone, MapPin, Search } from 'lucide-react';

export default function TeamPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Wilson',
      role: 'Project Manager',
      department: 'Management',
      email: 'sarah@example.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, USA',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
      projects: ['Website Redesign', 'Mobile App'],
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Senior Developer',
      department: 'Engineering',
      email: 'michael@example.com',
      phone: '+1 (555) 234-5678',
      location: 'San Francisco, USA',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
      projects: ['API Integration', 'Cloud Migration'],
    },
    // Add more team members as needed
  ];

  const departments = ['all', 'Management', 'Engineering', 'Design', 'Marketing'];

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || member.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Team Directory</h1>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Team Member
          </button>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search team members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            {departments.map(dept => (
              <option key={dept} value={dept}>
                {dept.charAt(0).toUpperCase() + dept.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

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
    </div>
  );
}