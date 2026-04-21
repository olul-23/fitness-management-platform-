import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white mt-4">
      <h2 className="text-xl font-bold mb-4 text-blue-600">步驟四：成果總結</h2>
      <div className="space-y-2 text-gray-700">
        <p>📊 本週訓練次數：<span className="font-bold">4 次</span></p>
        <p>⚖️ 肌群比例：胸 (30%)、背 (30%)、腿 (40%)</p>
        <p>📈 重量進度：<span className="text-green-500">深蹲 +5kg (進步中)</span></p>
        <p>✅ 訓練完成率：<span className="font-bold text-blue-600">92%</span></p>
      </div>
      <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400">
        <strong>AI 建議：</strong> 下週建議增加背部訓練比重 5%。
      </div>
    </div>
  );
};

export default Dashboard;
