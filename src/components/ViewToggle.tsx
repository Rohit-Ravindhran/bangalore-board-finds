
import React from 'react';
import { LayoutGrid, Layers } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface ViewToggleProps {
  currentView: 'card' | 'grid';
  onViewChange: (view: 'card' | 'grid') => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ currentView, onViewChange }) => {
  return (
    <div className="flex justify-center my-4">
      <div className="flex rounded-full overflow-hidden border divide-x">
        <button
          onClick={() => onViewChange('card')}
          className={`flex items-center px-4 py-2 ${
            currentView === 'card' 
              ? 'bg-primary bg-opacity-10 text-primary' 
              : 'bg-white text-gray-600'
          }`}
        >
          <Layers className="h-5 w-5 mr-2" />
          <span>Swipe View</span>
        </button>
        <button
          onClick={() => onViewChange('grid')}
          className={`flex items-center px-4 py-2 ${
            currentView === 'grid' 
              ? 'bg-orange-100 text-primary' 
              : 'bg-white text-gray-600'
          }`}
        >
          <LayoutGrid className="h-5 w-5 mr-2" />
          <span>Board View</span>
        </button>
      </div>
    </div>
  );
};

export default ViewToggle;
