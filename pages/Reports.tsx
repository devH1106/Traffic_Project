import React, { useState } from 'react';
import { Download, Calendar, BarChart3, PieChart, TrendingUp } from 'lucide-react';

const Reports: React.FC = () => {
  const [reportType, setReportType] = useState('daily');
  const [dateRange, setDateRange] = useState('last-7-days');

  const reportTemplates = [
    {
      title: 'Daily Violation Summary',
      description: 'Summary of all violations detected in a single day',
      format: ['PDF', 'CSV', 'Excel'],
      icon: Calendar
    },
    {
      title: 'Weekly Analytics Report',
      description: 'Comprehensive weekly analysis with trends and patterns',
      format: ['PDF', 'Excel'],
      icon: BarChart3
    },
    {
      title: 'Violation Type Distribution',
      description: 'Breakdown of violations by type and severity',
      format: ['PDF', 'CSV'],
      icon: PieChart
    },
    {
      title: 'Camera Performance Report',
      description: 'Individual camera statistics and performance metrics',
      format: ['PDF', 'Excel'],
      icon: TrendingUp
    }
  ];

  const generateReport = (template: string, format: string) => {
    console.log(`Generating ${template} report in ${format} format`);
    // Simulate report generation
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Reports & Analytics</h2>
        <div className="flex items-center space-x-2">
          <select 
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2"
          >
            <option value="today">Today</option>
            <option value="last-7-days">Last 7 Days</option>
            <option value="last-30-days">Last 30 Days</option>
            <option value="last-3-months">Last 3 Months</option>
            <option value="custom">Custom Range</option>
          </select>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Reports Generated</p>
              <p className="text-2xl font-bold mt-1">347</p>
            </div>
            <div className="p-3 bg-blue-500 rounded-lg">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">This Month</p>
              <p className="text-2xl font-bold mt-1">45</p>
            </div>
            <div className="p-3 bg-green-500 rounded-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Automated Reports</p>
              <p className="text-2xl font-bold mt-1">23</p>
            </div>
            <div className="p-3 bg-orange-500 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Avg. Processing Time</p>
              <p className="text-2xl font-bold mt-1">2.3s</p>
            </div>
            <div className="p-3 bg-purple-500 rounded-lg">
              <PieChart className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Report Templates */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-lg font-semibold">Report Templates</h3>
          <p className="text-gray-400 text-sm mt-1">Generate and download various types of violation reports</p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reportTemplates.map((template, index) => {
              const Icon = template.icon;
              return (
                <div key={index} className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-blue-500 rounded-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-white">{template.title}</h4>
                      <p className="text-gray-400 text-sm mt-1">{template.description}</p>
                      
                      <div className="flex items-center space-x-2 mt-3">
                        {template.format.map((format) => (
                          <button
                            key={format}
                            onClick={() => generateReport(template.title, format)}
                            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors flex items-center"
                          >
                            <Download className="w-3 h-3 mr-1" />
                            {format}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-lg font-semibold">Recent Reports</h3>
        </div>

        <div className="p-6">
          <div className="space-y-3">
            {[
              { name: 'Daily Summary - Jan 15, 2024', type: 'Daily Report', format: 'PDF', size: '2.3 MB', date: '2024-01-15 16:30' },
              { name: 'Weekly Analytics - Week 2', type: 'Weekly Report', format: 'Excel', size: '1.8 MB', date: '2024-01-14 09:15' },
              { name: 'Violation Distribution - Dec 2023', type: 'Analysis', format: 'PDF', size: '3.1 MB', date: '2024-01-01 14:22' },
              { name: 'Camera Performance - CAM-001-005', type: 'Performance', format: 'CSV', size: '0.9 MB', date: '2023-12-31 11:45' }
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg hover:bg-gray-650 transition-colors">
                <div className="flex-1">
                  <h4 className="font-medium text-white">{report.name}</h4>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-gray-400">{report.type}</span>
                    <span className="text-xs text-gray-400">{report.format}</span>
                    <span className="text-xs text-gray-400">{report.size}</span>
                    <span className="text-xs text-gray-400">{report.date}</span>
                  </div>
                </div>
                <button className="p-2 text-blue-400 hover:text-blue-300 transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scheduled Reports */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Scheduled Reports</h3>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              Add Schedule
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-3">
            {[
              { name: 'Daily Summary Report', schedule: 'Every day at 6:00 PM', format: 'PDF', status: 'Active' },
              { name: 'Weekly Analytics', schedule: 'Every Monday at 9:00 AM', format: 'Excel', status: 'Active' },
              { name: 'Monthly Comprehensive Report', schedule: '1st of every month', format: 'PDF', status: 'Paused' }
            ].map((schedule, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-white">{schedule.name}</h4>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-gray-400">{schedule.schedule}</span>
                    <span className="text-xs text-gray-400">{schedule.format}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      schedule.status === 'Active' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                    }`}>
                      {schedule.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-xs transition-colors">
                    {schedule.status === 'Active' ? 'Pause' : 'Resume'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;