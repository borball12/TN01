import React from 'react';

export default function CustomerRow({ item }) {
  return (
    <tr className="hover:bg-blue-50/50 transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5 relative z-0 hover:z-10">
        <td className="p-4 text-blue-600 font-bold text-center">{item.time}</td>
        <td className="p-4 font-bold text-gray-800">{item.code}</td>
        <td className="p-4 font-bold text-gray-800 text-lg">{item.name}</td>
        <td className="p-4 text-gray-600 font-medium">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">D</div>
                {item.sales}
            </div>
        </td>
        <td className="p-4 text-gray-600 font-medium">{item.date}</td>
        <td className="p-4 text-center">
            <button className="bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white text-sm font-bold py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                ดูรายละเอียด
            </button>
        </td>
    </tr>
  );
}