import React, { useState } from 'react';
import { Upload, ArrowLeft } from 'lucide-react';
import { DocumentList } from './projects/DocumentList';
import { EmptyDocuments } from './projects/EmptyDocuments';
import { ProjectOverview } from './projects/ProjectOverview';
import { ProjectExpenses } from './projects/ProjectExpenses';
import { ProjectTeam } from './projects/ProjectTeam';
import ExpenseForm from './ExpenseForm';
import { projects } from '../data/projects';

interface ProjectDetailsProps {
  projectId: number;
  onBack: () => void;
}

export default function ProjectDetails({ projectId, onBack }: ProjectDetailsProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [showMemberForm, setShowMemberForm] = useState(false);
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: 'Project Brief.pdf',
      size: '2.4 MB',
      uploadedBy: 'Sarah Wilson',
      date: '2024-02-15',
    }
  ]);

  const project = projects.find(p => p.id === projectId)!;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setDocuments(prev => [...prev, {
        id: prev.length + 1,
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        uploadedBy: 'Current User',
        date: new Date().toISOString().split('T')[0],
      }]);
    }
  };

  const handleDeleteDocument = (docId: number) => {
    setDocuments(prev => prev.filter(doc => doc.id !== docId));
  };

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Projects
      </button>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="border-b">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            {['overview', 'expenses', 'team', 'documents'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && <ProjectOverview project={project} />}
          
          {activeTab === 'expenses' && (
            <ProjectExpenses
              project={project}
              onAddExpense={() => setShowExpenseForm(true)}
              onDeleteExpense={(id) => console.log('Delete expense:', id)}
            />
          )}
          
          {activeTab === 'team' && (
            <ProjectTeam
              project={project}
              onAddMember={() => setShowMemberForm(true)}
            />
          )}
          
          {activeTab === 'documents' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-medium text-gray-900">Project Documents</h3>
                <label className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Document
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                    accept=".pdf,.doc,.docx,.xls,.xlsx"
                  />
                </label>
              </div>

              {documents.length > 0 ? (
                <DocumentList documents={documents} onDelete={handleDeleteDocument} />
              ) : (
                <EmptyDocuments />
              )}
            </div>
          )}
        </div>
      </div>

      {showExpenseForm && (
        <ExpenseForm
          onSubmit={(expense) => {
            console.log('New expense:', expense);
            setShowExpenseForm(false);
          }}
          onClose={() => setShowExpenseForm(false)}
        />
      )}
    </div>
  );
}