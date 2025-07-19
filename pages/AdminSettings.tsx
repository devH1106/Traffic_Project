import React, { useState } from 'react';
import { Camera, Users, Shield, Bell, Database, Settings } from 'lucide-react';

const AdminSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('cameras');

  const tabs = [
    { id: 'cameras', label: 'Camera Management', icon: Camera },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'security', label: 'Security Settings', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'system', label: 'System Config', icon: Settings }
  ];

  const renderCameraManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Camera Management</h3>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
          Add New Camera
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { id: 'CAM-001', name: 'Main Street Junction', ip: '192.168.1.101', status: 'Online', violations: 24 },
          { id: 'CAM-002', name: 'Highway Exit 5', ip: '192.168.1.102', status: 'Online', violations: 18 },
          { id: 'CAM-003', name: 'City Center Square', ip: '192.168.1.103', status: 'Offline', violations: 0 },
          { id: 'CAM-004', name: 'School Zone Area', ip: '192.168.1.104', status: 'Online', violations: 31 },
          { id: 'CAM-005', name: 'Commercial District', ip: '192.168.1.105', status: 'Online', violations: 12 },
          { id: 'CAM-006', name: 'Residential Area', ip: '192.168.1.106', status: 'Maintenance', violations: 0 }
        ].map((camera) => (
          <div key={camera.id} className="bg-gray-700 rounded-lg p-4 border border-gray-600">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium">{camera.name}</h4>
              <div className={`w-3 h-3 rounded-full ${
                camera.status === 'Online' ? 'bg-green-500' : 
                camera.status === 'Offline' ? 'bg-red-500' : 'bg-yellow-500'
              }`}></div>
            </div>
            
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>Camera ID:</span>
                <span className="text-white">{camera.id}</span>
              </div>
              <div className="flex justify-between">
                <span>IP Address:</span>
                <span className="text-white">{camera.ip}</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <span className={`${
                  camera.status === 'Online' ? 'text-green-400' : 
                  camera.status === 'Offline' ? 'text-red-400' : 'text-yellow-400'
                }`}>{camera.status}</span>
              </div>
              <div className="flex justify-between">
                <span>Violations Today:</span>
                <span className="text-white">{camera.violations}</span>
              </div>
            </div>

            <div className="flex space-x-2 mt-4">
              <button className="flex-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                Configure
              </button>
              <button className="flex-1 px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-xs transition-colors">
                Test
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderUserManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">User Management</h3>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
          Add New User
        </button>
      </div>

      <div className="bg-gray-700 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-600">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium">User</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Role</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Department</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Last Login</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {[
              { name: 'John Doe', email: 'john@traffic.gov', role: 'Administrator', dept: 'IT', lastLogin: '2 hours ago', status: 'Active' },
              { name: 'Jane Smith', email: 'jane@traffic.gov', role: 'Operator', dept: 'Traffic', lastLogin: '1 day ago', status: 'Active' },
              { name: 'Mike Johnson', email: 'mike@traffic.gov', role: 'Analyst', dept: 'Analytics', lastLogin: '3 days ago', status: 'Inactive' },
              { name: 'Sarah Wilson', email: 'sarah@traffic.gov', role: 'Supervisor', dept: 'Operations', lastLogin: '5 hours ago', status: 'Active' }
            ].map((user, index) => (
              <tr key={index} className="hover:bg-gray-650">
                <td className="px-4 py-3">
                  <div>
                    <div className="font-medium text-white">{user.name}</div>
                    <div className="text-sm text-gray-400">{user.email}</div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-300">{user.role}</td>
                <td className="px-4 py-3 text-sm text-gray-300">{user.dept}</td>
                <td className="px-4 py-3 text-sm text-gray-300">{user.lastLogin}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    user.status === 'Active' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex space-x-2">
                    <button className="px-2 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                      Edit
                    </button>
                    <button className="px-2 py-1 bg-red-600 hover:bg-red-700 rounded text-xs transition-colors">
                      Disable
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderSystemConfig = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">System Configuration</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
          <h4 className="font-medium mb-4">Detection Settings</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Helmet Detection</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Signal Violation Detection</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Speed Detection</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Lane Violation Detection</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </div>
          </div>
        </div>

        <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
          <h4 className="font-medium mb-4">Alert Thresholds</h4>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Confidence Threshold (%)</label>
              <input type="range" min="70" max="99" defaultValue="85" className="w-full" />
              <div className="text-xs text-gray-400 mt-1">Current: 85%</div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Alert Frequency (seconds)</label>
              <input type="number" defaultValue="30" className="w-full bg-gray-600 border border-gray-500 rounded px-3 py-2 text-sm" />
            </div>
          </div>
        </div>

        <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
          <h4 className="font-medium mb-4">Data Retention</h4>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Video Retention (days)</label>
              <input type="number" defaultValue="30" className="w-full bg-gray-600 border border-gray-500 rounded px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Log Retention (days)</label>
              <input type="number" defaultValue="365" className="w-full bg-gray-600 border border-gray-500 rounded px-3 py-2 text-sm" />
            </div>
          </div>
        </div>

        <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
          <h4 className="font-medium mb-4">System Performance</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">CPU Usage:</span>
              <span className="text-green-400">34%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Memory Usage:</span>
              <span className="text-yellow-400">67%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Storage:</span>
              <span className="text-blue-400">45% used</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Network:</span>
              <span className="text-green-400">Online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'cameras':
        return renderCameraManagement();
      case 'users':
        return renderUserManagement();
      case 'system':
        return renderSystemConfig();
      default:
        return (
          <div className="text-center py-12">
            <p className="text-gray-400">Configuration panel for {tabs.find(t => t.id === activeTab)?.label}</p>
            <p className="text-sm text-gray-500 mt-2">Coming soon...</p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Admin Settings</h2>

      <div className="flex space-x-1 bg-gray-700 rounded-lg p-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === tab.id 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-600'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default AdminSettings;