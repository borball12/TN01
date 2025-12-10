import React from 'react';
import CustomerRow from './CustomerRow';

export default function CustomerTable({ data }) {
  return (
    <>
      <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">รายการลูกค้า ({data.length} รายการ)</h2>
          <button className="text-sm text-blue-600 hover:underline font-medium">ดูทั้งหมด</button>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
              <thead className="bg-gradient-to-r from-red-600 to-red-500 text-white">
                  <tr>
                      <th className="p-4 font-semibold text-center w-24 first:rounded-tl-2xl">เวลา</th>
                      <th className="p-4 font-semibold">รหัสลูกค้า</th>
                      <th className="p-4 font-semibold">ชื่อลูกค้า</th>
                      <th className="p-4 font-semibold">พนักงานขาย</th>
                      <th className="p-4 font-semibold">วันที่สร้าง</th>
                      <th className="p-4 font-semibold text-center last:rounded-tr-2xl">จัดการ</th>
                  </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                  {data.map((item, index) => (
                      <CustomerRow key={index} item={item} />
                  ))}
              </tbody>
          </table>
      </div>
    </>
  );
}