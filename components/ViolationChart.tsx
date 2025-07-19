import React from 'react';
import { TrendingUp } from 'lucide-react';

const ViolationChart: React.FC = () => {
  const chartData = [
    { day: 'Mon', violations: 45 },
    { day: 'Tue', violations: 52 },
    { day: 'Wed', violations: 38 },
    { day: 'Thu', violations: 61 },
    { day: 'Fri', violations: 55 },
    { day: 'Sat', violations: 47 },
    { day: 'Sun', violations: 42 }
  ];

  const maxViolations = Math.max(...chartData.map(d => d.violations));

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
          Weekly Violation Trends
        </h3>
        <select className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-sm">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 3 months</option>
        </select>
      </div>

      <div className="relative h-64">
        <div className="absolute inset-0 flex items-end justify-between space-x-2">
          {chartData.map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div 
                className="w-full bg-blue-500 rounded-t-sm hover:bg-blue-400 transition-colors cursor-pointer"
                style={{ 
                  height: `${(data.violations / maxViolations) * 100}%`,
                  minHeight: '4px'
                }}
                title={`${data.day}: ${data.violations} violations`}
              ></div>
              <span className="text-xs text-gray-400 mt-2">{data.day}</span>
            </div>
          ))}
        </div>

        {/* Y-axis labels */}
        <div className="absolute left-0 inset-y-0 flex flex-col justify-between text-xs text-gray-500 -ml-8">
          <span>{maxViolations}</span>
          <span>{Math.round(maxViolations * 0.75)}</span>
          <span>{Math.round(maxViolations * 0.5)}</span>
          <span>{Math.round(maxViolations * 0.25)}</span>
          <span>0</span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">Average Daily:</span>
          <span className="text-white">49 violations</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Peak Day:</span>
          <span className="text-white">Thursday (61)</span>
        </div>
      </div>
    </div>
  );
};

export default ViolationChart;