import React from 'react';
import { LayoutDashboard, Users, Receipt, FolderOpen, PieChart } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  selectedView: string;
  onViewChange: (view: string) => void;
}

export function Sidebar({ isOpen, selectedView, onViewChange }: SidebarProps) {
  const navItems = [
    { icon: LayoutDashboard, text: 'Dashboard', value: 'dashboard' },
    { icon: FolderOpen, text: 'Projects', value: 'projects' },
    { icon: Users, text: 'Team', value: 'team' },
    { icon: Receipt, text: 'Expenses', value: 'expenses' },
    { icon: PieChart, text: 'Reports', value: 'reports' },
  ];

  return (
    <div className={`${isOpen ? 'w-64' : 'w-0'} bg-white shadow-lg transition-all duration-300 overflow-hidden`}>
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <LayoutDashboard className="h-8 w-8 text-indigo-600" />
          <h1 className="text-xl font-bold text-gray-800">BudgetPro</h1>
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onViewChange(item.value)}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors ${
                selectedView === item.value ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.text}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}