import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactedCustomers() {
  // Mock Data
  const customers = [
    { id: 1, time: '10:00 น.', code: 'DAY208', name: 'สมชาย ทดสอบ', sales: 'เดวิด แฮนซั่ม', date: '10 พ.ย. 2025' },
    { id: 2, time: '10:15 น.', code: 'DAY209', name: 'วิชัย ใจดี', sales: 'เดวิด แฮนซั่ม', date: '10 พ.ย. 2025' },
    { id: 3, time: '10:30 น.', code: 'DAY210', name: 'มานี มีแชร์', sales: 'เดวิด แฮนซั่ม', date: '10 พ.ย. 2025' },
    { id: 4, time: '11:00 น.', code: 'DAY211', name: 'ปิติ พอใจ', sales: 'เดวิด แฮนซั่ม', date: '10 พ.ย. 2025' },
    { id: 5, time: '11:20 น.', code: 'DAY212', name: 'ชูใจ ชอบใจ', sales: 'เดวิด แฮนซั่ม', date: '10 พ.ย. 2025' },
    { id: 6, time: '13:00 น.', code: 'DAY213', name: 'แก้ว กล้าหาญ', sales: 'เดวิด แฮนซั่ม', date: '10 พ.ย. 2025' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 relative">
      
      {/* --- ฉากหลังตกแต่ง (Decorative Background Blobs) --- */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none animate-blob"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none animate-blob animation-delay-2000"></div>

      {/* --- การ์ดหลัก (Main Card) --- */}
      {/* เพิ่ม shadow-2xl, rounded-3xl และ border ให้ดูพรีเมียมขึ้น */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 min-h-[80vh] relative z-10">
        
        {/* ปุ่มย้อนกลับ */}
        <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg mb-4 transition-all font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            ย้อนกลับหน้าหลัก
        </Link>

        {/* ส่วนหัว */}
        <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100">
            <div className="bg-red-100 p-3 rounded-2xl text-red-600 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">ลูกค้าที่ซื้อของวันนี้</h1>
              <p className="text-gray-500">ตรวจสอบรายการลูกค้าที่ทำรายการในวันนี้</p>
            </div>
        </div>

        {/* --- ตัวกรองค้นหา (ปรับปรุงใหม่) --- */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-md border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                {/* ช่องค้นหา พร้อมไอคอน */}
                <div className="md:col-span-5">
                    <label className="block text-gray-700 font-bold text-sm mb-2 ml-1">ค้นหาข้อมูล</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                        <input 
                            type="text" 
                            placeholder="รหัสลูกค้า, ชื่อ หรือ เลขที่ใบเสนอราคา..." 
                            className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700 bg-gray-50/50 transition-all"
                        />
                    </div>
                </div>
                {/* ช่องเลือกพนักงาน พร้อมไอคอน */}
                <div className="md:col-span-5">
                    <label className="block text-gray-700 font-bold text-sm mb-2 ml-1">พนักงานขาย</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                           </svg>
                        </div>
                        <select className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700 bg-gray-50/50 transition-all appearance-none">
                            <option>ทั้งหมด</option>
                            <option>เดวิด แฮนซั่ม</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
                {/* ปุ่มค้นหา */}
                <div className="md:col-span-2">
                    <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                        ค้นหา
                    </button>
                </div>
            </div>
        </div>

        {/* --- ตารางข้อมูล --- */}
        <div className="mb-4 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">รายการลูกค้า (6 รายการ)</h2>
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
                    {customers.map((item, index) => (
                        // เพิ่ม Hover Effect แบบลอยขึ้น
                        <tr key={index} className="hover:bg-blue-50/50 transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5 relative z-0 hover:z-10">
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
                    ))}
                </tbody>
            </table>
        </div>

      </div>
    </div>
  );
}