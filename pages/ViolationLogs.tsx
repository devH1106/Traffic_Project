import React, { useState } from 'react';
import { Search, Filter, Download, Eye, Calendar } from 'lucide-react';

const ViolationLogs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterDate, setFilterDate] = useState('today');

  const violations = [
    {
      id: 'VL001',
      timestamp: '2024-01-15 14:23:45',
      vehicleNumber: 'MH12AB1234',
      violationType: 'No Helmet',
      location: 'Main Street Junction',
      camera: 'CAM-001',
      severity: 'High',
      status: 'Pending',
      confidence: '95%',
      fineAmount: 1000
    },
    {
      id: 'VL002',
      timestamp: '2024-01-15 14:18:32',
      vehicleNumber: 'MH12CD5678',
      violationType: 'Signal Jump',
      location: 'Highway Exit 5',
      camera: 'CAM-002',
      severity: 'Critical',
      status: 'Processed',
      confidence: '88%',
      fineAmount: 5000
    },
    {
      id: 'VL003',
      timestamp: '2024-01-15 14:15:21',
      vehicleNumber: 'MH12EF9012',
      violationType: 'Wrong Lane',
      location: 'City Center Square',
      camera: 'CAM-003',
      severity: 'Medium',
      status: 'Under Review',
      confidence: '92%',
      fineAmount: 2000
    },
    {
      id: 'VL004',
      timestamp: '2024-01-15 14:12:18',
      vehicleNumber: 'MH12GH3456',
      violationType: 'Speed Violation',
      location: 'School Zone Area',
      camera: 'CAM-004',
      severity: 'High',
      status: 'Processed',
      confidence: '91%',
      fineAmount: 3000
    },
    {
      id: 'VL005',
      timestamp: '2024-01-15 14:08:45',
      vehicleNumber: 'MH12IJ7890',
      violationType: 'No Helmet',
      location: 'Commercial District',
      camera: 'CAM-005',
      severity: 'High',
      status: 'Pending',
      confidence: '89%',
      fineAmount: 1000
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      default: return 'bg-green-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'processed': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'under review': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Violation Logs</h2>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </button>
          <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Export PDF
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by vehicle number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <select 
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="all">All Violation Types</option>
            <option value="no-helmet">No Helmet</option>
            <option value="signal-jump">Signal Jump</option>
            <option value="wrong-lane">Wrong Lane</option>
            <option value="speed-violation">Speed Violation</option>
          </select>

          <select 
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="this-week">This Week</option>
            <option value="this-month">This Month</option>
            <option value="custom">Custom Range</option>
          </select>

          <button className="bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 transition-colors flex items-center justify-center">
            <Filter className="w-4 h-4 mr-2" />
            Apply Filters
          </button>
        </div>
      </div>

      {/* Statistics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-2xl font-bold text-blue-400">156</div>
          <div className="text-sm text-gray-400">Total Violations</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-2xl font-bold text-green-400">89</div>
          <div className="text-sm text-gray-400">Processed</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-2xl font-bold text-yellow-400">45</div>
          <div className="text-sm text-gray-400">Pending</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-2xl font-bold text-orange-400">₹2,34,000</div>
          <div className="text-sm text-gray-400">Total Fines</div>
        </div>
      </div>

      {/* Violations Table */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">ID</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Timestamp</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Vehicle</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Violation</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Location</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Severity</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Fine</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {violations.map((violation) => (
                <tr key={violation.id} className="hover:bg-gray-700 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium text-blue-400">{violation.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{violation.timestamp}</td>
                  <td className="px-4 py-3 text-sm font-medium text-white">{violation.vehicleNumber}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{violation.violationType}</td>
                  <td className="px-4 py-3 text-sm text-gray-300">{violation.location}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-block w-2 h-2 rounded-full ${getSeverityColor(violation.severity)} mr-2`}></span>
                    <span className="text-sm text-gray-300">{violation.severity}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs text-white ${getStatusColor(violation.status)}`}>
                      {violation.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-green-400">₹{violation.fineAmount.toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-blue-400 hover:text-blue-300 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-green-400 hover:text-green-300 transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-gray-700 px-4 py-3 flex items-center justify-between border-t border-gray-600">
          <div className="text-sm text-gray-400">
            Showing 1 to 5 of 156 results
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-sm transition-colors">
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-600 rounded text-sm">1</button>
            <button className="px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-sm transition-colors">2</button>
            <button className="px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-sm transition-colors">3</button>
            <button className="px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-sm transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViolationLogs;