import React from 'react';

export default function HeaderSection() {
  return (
    <>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-red-100 text-red-600 rounded-xl shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" /></svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-800">ตรวจสอบรายละเอียดสินค้า</h1>
      </div>

      <div className="relative mb-8 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-gray-400 group-focus-within:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
          </div>
          <input 
              type="text" 
              className="block w-full pl-12 pr-4 py-4 border-0 rounded-2xl shadow-md group-focus-within:shadow-lg ring-1 ring-gray-200 focus:ring-2 focus:ring-red-500 text-gray-700 text-lg bg-white transition-all" 
              placeholder="ค้นหาสินค้า... (เช่น ชื่อ, ยี่ห้อ, หรือกลุ่มสินค้า)"
          />
      </div>
    </>
  );
}