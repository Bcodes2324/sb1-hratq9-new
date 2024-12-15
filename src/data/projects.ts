import { type Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    name: 'Website Redesign',
    description: 'Complete overhaul of the company website with modern design and improved functionality',
    status: 'In Progress',
    budget: 45000,
    spent: 32000,
    dueDate: '2024-04-15',
    progress: 65,
    tags: ['Design', 'Development', 'UI/UX'],
    team: [
      {
        id: 1,
        name: 'Sarah Wilson',
        role: 'Project Manager',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
      },
      {
        id: 2,
        name: 'Michael Chen',
        role: 'Lead Developer',
        avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
      },
    ],
  },
  {
    id: 2,
    name: 'Mobile App Development',
    description: 'Native mobile application for iOS and Android platforms',
    status: 'On Track',
    budget: 80000,
    spent: 13200,
    dueDate: '2024-05-30',
    progress: 25,
    tags: ['Mobile', 'iOS', 'Android'],
    team: [
      {
        id: 3,
        name: 'Emma Thompson',
        role: 'Mobile Developer',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
      },
      {
        id: 4,
        name: 'David Kim',
        role: 'UI Designer',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
      },
    ],
  },
  {
    id: 3,
    name: 'Cloud Infrastructure Migration',
    description: 'Migrate existing infrastructure to cloud-based solutions',
    status: 'At Risk',
    budget: 120000,
    spent: 95000,
    dueDate: '2024-03-30',
    progress: 75,
    tags: ['Cloud', 'DevOps', 'Infrastructure'],
    team: [
      {
        id: 5,
        name: 'Alex Rodriguez',
        role: 'DevOps Engineer',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
      },
    ],
  },
  {
    id: 4,
    name: 'E-commerce Integration',
    description: 'Implement new payment gateway and inventory management system',
    status: 'Not Started',
    budget: 65000,
    spent: 0,
    dueDate: '2024-06-15',
    progress: 0,
    tags: ['E-commerce', 'Integration', 'Payment'],
    team: [
      {
        id: 6,
        name: 'Lisa Wang',
        role: 'Business Analyst',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80',
      },
    ],
  },
];