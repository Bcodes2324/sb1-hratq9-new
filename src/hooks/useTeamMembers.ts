import { useState, useEffect } from 'react';
import { type TeamMember } from '../types/team';

export function useTeamMembers() {
  const [teamMembers] = useState<TeamMember[]>([
    {
      id: 1,
      name: 'Sarah Wilson',
      role: 'Project Manager',
      department: 'Product',
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
    {
      id: 3,
      name: 'Emma Thompson',
      role: 'UI Designer',
      department: 'Design',
      email: 'emma@example.com',
      phone: '+1 (555) 345-6789',
      location: 'London, UK',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
      projects: ['Design System', 'Mobile App'],
    },
  ]);

  return { teamMembers };
}