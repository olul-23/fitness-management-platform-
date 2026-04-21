// frontend/src/components/UserProfile.js
export const UserProfile = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-xl">
      <h2 className="text-xl font-bold mb-4">步驟一：輸入基本資料</h2>
      <div className="grid grid-cols-2 gap-4">
        <input type="number" placeholder="年齡" className="border p-2 rounded" />
        <input type="number" placeholder="體重 (kg)" className="border p-2 rounded" />
        <select className="border p-2 rounded">
          <option>新手 (初次健身)</option>
          <option>中階 (持續半年)</option>
          <option>進階 (有固定課表)</option>
        </select>
      </div>
    </div>
  );
};
