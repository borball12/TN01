import React from 'react';

export default function PendingQuotes() {
  return (
    <div className="max-w-7xl mx-auto p-6">
       <h1 className="text-2xl font-bold text-orange-500 mb-4">รายการรอดำเนินการ</h1>
       <div className="bg-white p-6 rounded-lg shadow-sm border">
          <p>ตารางรายการที่รออนุมัติจะอยู่ที่นี่...</p>
       </div>
    </div>
  );
}