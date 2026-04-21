import React, { useState } from 'react';

const MusclePicker = () => {
  const [selected, setSelected] = useState([]);

  const toggleMuscle = (muscle) => {
    setSelected(prev => prev.includes(muscle) ? prev.filter(m => m !== muscle) : [...prev, muscle]);
  };

  return (
    <div className="p-6 border rounded-lg shadow-md bg-white mt-4">
      <h2 className="text-xl font-bold mb-4 text-blue-600">步驟二：選擇健身部位</h2>
      <div className="flex gap-2 mb-4">
        {['胸', '背', '腿', '肩', '手'].map(m => (
          <button 
            key={m} 
            onClick={() => toggleMuscle(m)}
            className={`px-4 py-2 rounded ${selected.includes(m) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {m}
          </button>
        ))}
      </div>
      <div className="bg-blue-50 p-3 rounded">
        <strong>AI 建議內容：</strong>
        {selected.length > 0 ? ` 針對 ${selected.join(', ')} 部位，建議進行 5x5 強度訓練。` : " 請選擇部位"}
      </div>
    </div>
  );
};

export default MusclePicker;
