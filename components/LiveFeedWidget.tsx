import React, { useState } from 'react';
import { Play, Pause, Maximize, Camera, AlertTriangle } from 'lucide-react';

const LiveFeedWidget: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedCamera, setSelectedCamera] = useState('CAM-001');

  const cameras = [
    { id: 'CAM-001', name: 'Main Street Junction', status: 'online' },
    { id: 'CAM-002', name: 'Highway Exit 5', status: 'online' },
    { id: 'CAM-003', name: 'City Center Square', status: 'offline' },
    { id: 'CAM-004', name: 'School Zone Area', status: 'online' }
  ];

  const detectedViolations = [
    { id: 1, type: 'No Helmet', vehicle: 'MH12AB1234', confidence: 0.95, x: 45, y: 30 },
    { id: 2, type: 'Signal Jump', vehicle: 'MH12CD5678', confidence: 0.88, x: 70, y: 60 }
  ];

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center">
            <Camera className="w-5 h-5 mr-2" />
            Live Traffic Feed
          </h3>
          <div className="flex items-center space-x-2">
            <select 
              value={selectedCamera}
              onChange={(e) => setSelectedCamera(e.target.value)}
              className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-sm"
            >
              {cameras.map((camera) => (
                <option key={camera.id} value={camera.id}>
                  {camera.name} ({camera.status})
                </option>
              ))}
            </select>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative aspect-video bg-gray-900">
        {/* Video Feed Simulation */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
          <div className="text-center">
            <Camera className="w-16 h-16 text-gray-500 mx-auto mb-2" />
            <p className="text-gray-400">Live Feed: {cameras.find(c => c.id === selectedCamera)?.name}</p>
            <p className="text-sm text-green-400 mt-1">● LIVE - {isPlaying ? 'Recording' : 'Paused'}</p>
          </div>
        </div>

        {/* Detection Overlays */}
        {isPlaying && detectedViolations.map((violation) => (
          <div
            key={violation.id}
            className="absolute border-2 border-red-500 bg-red-500 bg-opacity-20"
            style={{
              left: `${violation.x}%`,
              top: `${violation.y}%`,
              width: '120px',
              height: '80px'
            }}
          >
            <div className="absolute -top-6 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded">
              {violation.type}
            </div>
            <div className="absolute -bottom-6 left-0 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
              {violation.vehicle}
            </div>
          </div>
        ))}

        {/* Live Status Indicator */}
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-white text-sm font-medium">LIVE</span>
        </div>

        {/* Violation Counter */}
        <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded-lg">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-sm">{detectedViolations.length} Active Violations</span>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-700">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="text-gray-400">Resolution:</span>
            <span className="ml-2 text-white">1920x1080</span>
          </div>
          <div>
            <span className="text-gray-400">FPS:</span>
            <span className="ml-2 text-white">30</span>
          </div>
          <div>
            <span className="text-gray-400">Bitrate:</span>
            <span className="ml-2 text-white">2.5 Mbps</span>
          </div>
          <div>
            <span className="text-gray-400">Uptime:</span>
            <span className="ml-2 text-green-400">99.8%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveFeedWidget;