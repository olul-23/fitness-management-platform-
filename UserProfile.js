import React, { useState } from 'react';

const UserProfile = () => {
  return (
    <div className="p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4 text-blue-600">步驟一：個人基本資料</h2>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="性別" className="p-2 border rounded" />
        <input type="number" placeholder="年齡" className="p-2 border rounded" />
        <input type="number" placeholder="身高 (cm)" className="p-2 border rounded" />
        <input type="number" placeholder="體重 (kg)" className="p-2 border rounded" />
        <select className="p-2 border rounded col-span-2">
          <option>選擇模式：新手</option>
          <option>選擇模式：中階</option>
          <option>選擇模式：進階</option>
          <option>選擇模式：專業</option>
        </select>
      </div>
    </div>
  );
};

export default UserProfile;
