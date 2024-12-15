import React from 'react';
import { FileText, Download, Trash2 } from 'lucide-react';

interface Document {
  id: number;
  name: string;
  size: string;
  uploadedBy: string;
  date: string;
}

interface DocumentListProps {
  documents: Document[];
  onDelete: (id: number) => void;
}

export function DocumentList({ documents, onDelete }: DocumentListProps) {
  return (
    <div className="space-y-4">
      {documents.map((doc) => (
        <div key={doc.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-white rounded-lg">
              <FileText className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">{doc.name}</p>
              <p className="text-sm text-gray-500">
                Uploaded by {doc.uploadedBy} • {doc.size} • {doc.date}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-indigo-600 hover:text-indigo-700">
              <Download className="h-5 w-5" />
            </button>
            <button
              onClick={() => onDelete(doc.id)}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}