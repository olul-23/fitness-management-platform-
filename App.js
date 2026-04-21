import React from 'react';
import UserProfile from './UserProfile';
import MusclePicker from './MusclePicker';
import WorkoutLogger from './WorkoutLogger';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-black text-center mb-8">健身管理平台</h1>
      <div className="max-w-2xl mx-auto space-y-6">
        <UserProfile />
        <MusclePicker />
        <WorkoutLogger />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
