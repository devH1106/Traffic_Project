import React from 'react';
import { Bell, User, Search } from 'lucide-react';

interface NavbarProps {
  setSidebarOpen: (open: boolean) => void;
  sidebarOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ setSidebarOpen, sidebarOpen }) => {
  return (
    <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold">Traffic Violation Detection System</h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search violations..."
              className="bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <button className="relative p-2 rounded-lg hover:bg-gray-700 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <span className="text-sm">Admin User</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;