import React, { useState } from 'react';
import { Camera, Play, Pause, Maximize2, Settings, Grid3X3 } from 'lucide-react';

const LiveFeed: React.FC = () => {
  const [selectedLayout, setSelectedLayout] = useState('single');
  const [selectedCamera, setSelectedCamera] = useState('CAM-001');

  const cameras = [
    { id: 'CAM-001', name: 'Main Street Junction', status: 'online', violations: 3 },
    { id: 'CAM-002', name: 'Highway Exit 5', status: 'online', violations: 1 },
    { id: 'CAM-003', name: 'City Center Square', status: 'offline', violations: 0 },
    { id: 'CAM-004', name: 'School Zone Area', status: 'online', violations: 2 },
    { id: 'CAM-005', name: 'Commercial District', status: 'online', violations: 0 },
    { id: 'CAM-006', name: 'Residential Area', status: 'online', violations: 1 }
  ];

  const renderCameraFeed = (camera: any, isMain = false) => (
    <div key={camera.id} className={`bg-gray-900 rounded-lg border border-gray-700 ${isMain ? 'aspect-video' : 'aspect-video'}`}>
      <div className="p-3 border-b border-gray-700 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${camera.status === 'online' ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className="text-sm font-medium">{camera.name}</span>
        </div>
        <div className="flex items-center space-x-2">
          {camera.violations > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              {camera.violations} violations
            </span>
          )}
          <button className="p-1 hover:bg-gray-700 rounded">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="relative h-48 lg:h-64 bg-gray-800 flex items-center justify-center">
        <Camera className="w-12 h-12 text-gray-600" />
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          LIVE
        </div>
        {camera.violations > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 border-2 border-red-400 rounded p-1">
            <span className="text-white text-xs">VIOLATION DETECTED</span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Live Feed Monitoring</h2>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => setSelectedLayout('single')}
            className={`p-2 rounded-lg transition-colors ${selectedLayout === 'single' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
          >
            <Maximize2 className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setSelectedLayout('grid')}
            className={`p-2 rounded-lg transition-colors ${selectedLayout === 'grid' ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'}`}
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
            Record All
          </button>
        </div>
      </div>

      {selectedLayout === 'single' ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="bg-gray-800 rounded-lg border border-gray-700">
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <select 
                    value={selectedCamera}
                    onChange={(e) => setSelectedCamera(e.target.value)}
                    className="bg-gray-700 border border-gray-600 rounded px-3 py-2"
                  >
                    {cameras.map((camera) => (
                      <option key={camera.id} value={camera.id}>
                        {camera.name} ({camera.status})
                      </option>
                    ))}
                  </select>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                      <Pause className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-video bg-gray-900 flex items-center justify-center">
                <Camera className="w-24 h-24 text-gray-600" />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded">
                  ● LIVE
                </div>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white p-2 rounded">
                  <div className="text-sm">Resolution: 1920x1080 | FPS: 30 | Bitrate: 2.5 Mbps</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <h3 className="font-semibold mb-3">Camera Controls</h3>
              <div className="space-y-2">
                <button className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors">
                  Take Screenshot
                </button>
                <button className="w-full p-2 bg-red-600 hover:bg-red-700 rounded transition-colors">
                  Start Recording
                </button>
                <button className="w-full p-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors">
                  Adjust Settings
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <h3 className="font-semibold mb-3">Detection Settings</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">Helmet Detection</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">Signal Violation</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">Lane Violation</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Speed Detection</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cameras.map((camera) => renderCameraFeed(camera))}
        </div>
      )}
    </div>
  );
};

export default LiveFeed;