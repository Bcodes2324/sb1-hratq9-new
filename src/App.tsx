import React from 'react';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { MainContent } from './components/layout/MainContent';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [selectedView, setSelectedView] = React.useState('dashboard');
  const [selectedProjectId, setSelectedProjectId] = React.useState<number | null>(null);

  const handleViewChange = (view: string) => {
    setSelectedView(view);
    setSelectedProjectId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        isOpen={isSidebarOpen}
        selectedView={selectedView}
        onViewChange={handleViewChange}
      />
      <div className="flex-1">
        <Header 
          isSidebarOpen={isSidebarOpen}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <MainContent 
          selectedView={selectedView}
          selectedProjectId={selectedProjectId}
          onProjectSelect={setSelectedProjectId}
          onProjectBack={() => setSelectedProjectId(null)}
        />
      </div>
    </div>
  );
}

export default App;