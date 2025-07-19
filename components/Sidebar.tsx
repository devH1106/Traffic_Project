import React from 'react';
import { 
  LayoutDashboard, 
  Video, 
  AlertTriangle, 
  FileText, 
  Settings,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage, isOpen, setIsOpen }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'live-feed', label: 'Live Feed', icon: Video },
    { id: 'violation-logs', label: 'Violation Logs', icon: AlertTriangle },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'admin-settings', label: 'Admin Settings', icon: Settings },
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-gray-800 border-r border-gray-700 transition-all duration-300 z-30 ${
      isOpen ? 'w-64' : 'w-16'
    }`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {isOpen && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">TrafficWatch</span>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center px-4 py-3 text-left hover:bg-gray-700 transition-colors ${
                currentPage === item.id ? 'bg-blue-600 border-r-2 border-blue-400' : ''
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {isOpen && <span className="ml-3">{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;