import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import LiveFeed from './pages/LiveFeed';
import ViolationLogs from './pages/ViolationLogs';
import Reports from './pages/Reports';
import AdminSettings from './pages/AdminSettings';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'live-feed':
        return <LiveFeed />;
      case 'violation-logs':
        return <ViolationLogs />;
      case 'reports':
        return <Reports />;
      case 'admin-settings':
        return <AdminSettings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex">
        <Sidebar 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
        />
        <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
          <Navbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
          <main className="p-6">
            {renderPage()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;