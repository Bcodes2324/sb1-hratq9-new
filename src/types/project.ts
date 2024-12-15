export type ProjectStatusType =
  | 'Not Started'
  | 'In Progress'
  | 'On Track'
  | 'At Risk'
  | 'Delayed'
  | 'Completed';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  status: ProjectStatusType;
  budget: number;
  spent: number;
  dueDate: string;
  team: TeamMember[];
  tags: string[];
  progress: number;
}