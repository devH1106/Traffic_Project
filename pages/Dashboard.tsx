import React, { useState, useEffect } from 'react';
import StatsCard from '../components/StatsCard';
import ViolationChart from '../components/ViolationChart';
import LiveFeedWidget from '../components/LiveFeedWidget';
import RecentViolations from '../components/RecentViolations';
import { AlertTriangle, Eye, Calendar, TrendingUp } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState({
    today: 24,
    thisWeek: 156,
    thisMonth: 642,
    activeFeeds: 12
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
            Export Report
          </button>
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
            Settings
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Violations Today"
          value={stats.today}
          icon={AlertTriangle}
          trend="+12%"
          trendUp={false}
          color="red"
        />
        <StatsCard
          title="This Week"
          value={stats.thisWeek}
          icon={Calendar}
          trend="+8%"
          trendUp={true}
          color="orange"
        />
        <StatsCard
          title="This Month"
          value={stats.thisMonth}
          icon={TrendingUp}
          trend="+15%"
          trendUp={true}
          color="blue"
        />
        <StatsCard
          title="Active Feeds"
          value={stats.activeFeeds}
          icon={Eye}
          trend="100%"
          trendUp={true}
          color="green"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Feed */}
        <div className="lg:col-span-2">
          <LiveFeedWidget />
        </div>

        {/* Recent Violations */}
        <div>
          <RecentViolations />
        </div>
      </div>

      {/* Violation Trends Chart */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <ViolationChart />
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold mb-4">Violation Types Distribution</h3>
          <div className="space-y-3">
            {[
              { type: 'No Helmet', count: 45, percentage: 35 },
              { type: 'Signal Jump', count: 32, percentage: 25 },
              { type: 'Wrong Lane', count: 28, percentage: 22 },
              { type: 'Speed Violation', count: 23, percentage: 18 }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-300">{item.type}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-right w-8">{item.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;