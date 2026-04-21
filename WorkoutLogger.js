import React, { useState } from 'react';

const WorkoutLogger = () => {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white mt-4">
      <h2 className="text-xl font-bold mb-4 text-blue-600">步驟三：記錄訓練</h2>
      <div className="space-y-3">
        <input type="text" placeholder="動作名稱 (如：臥推)" className="w-full p-2 border rounded" />
        <div className="flex gap-2">
          <input type="number" placeholder="重量 (kg)" className="w-1/3 p-2 border rounded" />
          <input type="number" placeholder="組數" className="w-1/3 p-2 border rounded" />
          <input type="number" placeholder="次數" className="w-1/3 p-2 border rounded" />
        </div>
        <button className="w-full bg-green-500 text-white py-2 rounded">儲存今日紀錄</button>
      </div>
    </div>
  );
};

export default WorkoutLogger;
