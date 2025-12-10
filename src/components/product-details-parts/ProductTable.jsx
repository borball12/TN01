import React from 'react';

export default function ProductTable({ products }) {
  return (
    <div className="lg:col-span-3 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gradient-to-r from-red-600 to-red-500 text-white text-lg">
                        <th className="p-4 font-semibold text-center border-r border-red-400/50 first:rounded-tl-lg">รหัสสินค้า</th>
                        <th className="p-4 font-semibold text-left border-r border-red-400/50 pl-6">ชื่อสินค้า</th>
                        <th className="p-4 font-semibold text-center border-r border-red-400/50">จำนวน</th>
                        <th className="p-4 font-semibold text-center border-r border-red-400/50">หน่วย</th>
                        <th className="p-4 font-semibold text-center last:rounded-tr-lg">ประเภท</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700 font-medium text-sm">
                    {products.map((item, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-red-50/30 transition-colors cursor-default">
                            <td className="p-4 text-center border-r border-gray-50 font-bold text-gray-800">{item.code}</td>
                            <td className="p-4 text-left border-r border-gray-50 pl-6 text-base">{item.name}</td>
                            <td className="p-4 text-center border-r border-gray-50">
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">{item.qty}</span>
                            </td>
                            <td className="p-4 text-center border-r border-gray-50">{item.unit}</td>
                            <td className="p-4 text-center">
                                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-bold">{item.type}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="p-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500 bg-gray-50/50">
            <p>แสดง 1-12 จาก 120 รายการ</p>
            <div className="flex gap-2">
                <button className="px-3 py-1 rounded-md border bg-white hover:bg-gray-50">ก่อนหน้า</button>
                <button className="px-3 py-1 rounded-md border bg-red-500 text-white font-bold">1</button>
                <button className="px-3 py-1 rounded-md border bg-white hover:bg-gray-50">2</button>
                <button className="px-3 py-1 rounded-md border bg-white hover:bg-gray-50">3</button>
                <button className="px-3 py-1 rounded-md border bg-white hover:bg-gray-50">ถัดไป</button>
            </div>
        </div>
    </div>
  );
}