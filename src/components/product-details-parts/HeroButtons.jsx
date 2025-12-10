import React from 'react';

export default function HeroButtons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <button className="group relative bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-6 rounded-2xl shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1 hover:shadow-xl overflow-hidden">
              <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" opacity="0.5"/><path d="M2 6a4 4 0 014-4h12a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6z" fillRule="evenodd"/></svg>
              </div>
              <div className="relative z-10 flex flex-col items-start">
                  <span className="text-blue-100 font-medium mb-1">เมนูลัด</span>
                  <h2 className="text-2xl font-bold">เลือกไซส์กระจกกึ่งมาตรฐาน</h2>
              </div>
          </button>
          
          <button className="group relative bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-6 rounded-2xl shadow-lg shadow-red-500/30 transition-all transform hover:-translate-y-1 hover:shadow-xl overflow-hidden">
              <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                 <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.035-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.035.84-1.875 1.875-1.875h.75c1.035 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.035.84-1.875 1.875-1.875h.75c1.035 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" /></svg>
              </div>
              <div className="relative z-10 flex flex-col items-start">
                  <span className="text-red-100 font-medium mb-1">ข้อมูลสินค้า</span>
                  <h2 className="text-2xl font-bold">น้ำหนักสินค้าอลูมิเนียม</h2>
              </div>
          </button>
      </div>
  );
}