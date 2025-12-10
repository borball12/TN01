import React from 'react';
import { Link } from 'react-router-dom';

export default function PurchaseHistory({ history }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          <span className="w-2 h-6 bg-purple-500 rounded-full"></span>
          ประวัติการซื้อล่าสุด
        </h3>
        <Link to="#" className="text-slate-400 hover:text-blue-600 text-sm">ดูทั้งหมด &rarr;</Link>
      </div>
      
      <div className="p-4 space-y-3">
        {history.map((item, idx) => (
          <div key={idx} className="group bg-white p-3 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2">
                <p className="font-bold text-slate-800 text-sm">{item.id}</p>
                <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded font-medium">{item.date}</span>
              </div>
              <p className="text-green-600 font-bold text-sm mt-1">฿ {item.price}</p>
            </div>

            {/* ปุ่มซื้อซ้ำ */}
            <button className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors border border-blue-100 shadow-sm">
               ซื้อซ้ำ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}