import React from 'react';
import { ProjectList } from '../projects/ProjectList';
import { TeamMembers } from '../team/TeamMembers';
import { BudgetOverview } from '../budget/BudgetOverview';
import { RecentActivity } from '../activity/RecentActivity';
import { ProjectDetails } from '../projects/ProjectDetails';
import { TeamPage } from '../team/TeamPage';
import { ExpensesPage } from '../expenses/ExpensesPage';
import { ReportsPage } from '../reports/ReportsPage';

interface MainContentProps {
  selectedView: string;
  selectedProjectId: number | null;
  onProjectSelect: (id: number) => void;
  onProjectBack: () => void;
}

export function MainContent({ 
  selectedView, 
  selectedProjectId, 
  onProjectSelect, 
  onProjectBack 
}: MainContentProps) {
  const renderContent = () => {
    switch (selectedView) {
      case 'projects':
        return selectedProjectId ? (
          <ProjectDetails 
            projectId={selectedProjectId} 
            onBack={onProjectBack}
          />
        ) : (
          <ProjectList onViewProject={onProjectSelect} />
        );
      case 'team':
        return <TeamPage />;
      case 'expenses':
        return <ExpensesPage />;
      case 'reports':
        return <ReportsPage />;
      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <BudgetOverview />
              <ProjectList onViewProject={(id) => {
                onProjectSelect(id);
              }} />
            </div>
            <div className="space-y-6">
              <TeamMembers />
              <RecentActivity />
            </div>
          </div>
        );
    }
  };

  return (
    <main className="p-6">
      {renderContent()}
    </main>
  );
}