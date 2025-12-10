import React from 'react';

export default function CreditInfo({ info, status, term }) {
  // คำนวณ % เครดิตที่ใช้ไป
  const creditUsagePercent = (info.used / info.limit) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-10 -mt-10 opacity-50 pointer-events-none"></div>

      <div className="flex items-center gap-2 mb-6 relative z-10">
        <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg></div>
        <h2 className="text-xl font-bold text-slate-800">ข้อมูลเครดิตและวงเงิน</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {/* Credit Limit Box */}
        <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-2xl border border-blue-100 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <p className="font-bold text-blue-900 text-sm">วงเงินคงเหลือ</p>
            <span className="text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full font-bold">
               {Math.round(100 - creditUsagePercent)}%
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-blue-600">฿ {info.balance.toLocaleString()}</h2>
          <p className="text-xs text-slate-500 mt-1">จากวงเงินทั้งหมด ฿ {info.limit.toLocaleString()}</p>
          
          <div className="w-full bg-blue-200 h-2 rounded-full mt-4 overflow-hidden">
              <div className="bg-blue-600 h-full rounded-full" style={{ width: `${100 - creditUsagePercent}%` }}></div>
          </div>
        </div>

        {/* Outstanding Box */}
        <div className="bg-gradient-to-br from-red-50 to-white p-5 rounded-2xl border border-red-100 shadow-sm">
           <div className="flex justify-between items-start mb-2">
            <p className="font-bold text-red-900 text-sm">ยอดค้างชำระ</p>
            <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h2 className="text-3xl font-extrabold text-red-600">฿ {info.used.toLocaleString()}</h2>
          <div className="flex items-center gap-2 mt-2 bg-red-100/50 p-2 rounded-lg">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <p className="text-xs text-red-700 font-bold">ครบกำหนด: {info.dueDate}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex gap-6 text-sm border-t border-slate-100 pt-4">
         <div>
            <span className="text-slate-500 block text-xs">สถานะเครดิต</span>
            <span className="font-bold text-green-600">{status}</span>
         </div>
         <div>
            <span className="text-slate-500 block text-xs">Term การชำระเงิน</span>
            <span className="font-bold text-slate-800">{term}</span>
         </div>
      </div>
    </div>
  );
}