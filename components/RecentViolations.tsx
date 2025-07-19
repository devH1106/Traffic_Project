import React from 'react';
import { AlertTriangle, Clock, Car } from 'lucide-react';

const RecentViolations: React.FC = () => {
  const violations = [
    {
      id: 1,
      type: 'No Helmet',
      vehicle: 'MH12AB1234',
      time: '2 minutes ago',
      location: 'Main Street Junction',
      severity: 'high'
    },
    {
      id: 2,
      type: 'Signal Jump',
      vehicle: 'MH12CD5678',
      time: '5 minutes ago',
      location: 'Highway Exit 5',
      severity: 'critical'
    },
    {
      id: 3,
      type: 'Wrong Lane',
      vehicle: 'MH12EF9012',
      time: '8 minutes ago',
      location: 'City Center Square',
      severity: 'medium'
    },
    {
      id: 4,
      type: 'Speed Violation',
      vehicle: 'MH12GH3456',
      time: '12 minutes ago',
      location: 'School Zone Area',
      severity: 'high'
    },
    {
      id: 5,
      type: 'No Helmet',
      vehicle: 'MH12IJ7890',
      time: '15 minutes ago',
      location: 'Main Street Junction',
      severity: 'high'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-500 bg-red-500';
      case 'high': return 'text-orange-500 bg-orange-500';
      case 'medium': return 'text-yellow-500 bg-yellow-500';
      default: return 'text-green-500 bg-green-500';
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-lg font-semibold flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
          Recent Violations
        </h3>
      </div>

      <div className="p-4">
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {violations.map((violation) => (
            <div key={violation.id} className="bg-gray-700 rounded-lg p-3 hover:bg-gray-650 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className={`w-2 h-2 rounded-full ${getSeverityColor(violation.severity).split(' ')[1]} bg-opacity-100`}></div>
                    <span className="font-medium text-sm">{violation.type}</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Car className="w-3 h-3" />
                      <span>{violation.vehicle}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{violation.time}</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-1">{violation.location}</p>
                </div>
                
                <button className="text-blue-400 hover:text-blue-300 text-xs">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-4 py-2 text-sm text-blue-400 hover:text-blue-300 border border-gray-600 rounded-lg hover:border-blue-500 transition-colors">
          View All Violations
        </button>
      </div>
    </div>
  );
};

export default RecentViolations;