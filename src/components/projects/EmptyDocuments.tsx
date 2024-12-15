import React from 'react';
import { FileText } from 'lucide-react';

export function EmptyDocuments() {
  return (
    <div className="text-center py-12 bg-gray-50 rounded-lg">
      <FileText className="h-12 w-12 text-gray-400 mx-auto mb-3" />
      <p className="text-gray-500">No documents uploaded yet</p>
      <p className="text-sm text-gray-400 mt-1">Upload documents to share with your team</p>
    </div>
  );
}