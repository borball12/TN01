import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductDetails() {
  // ข้อมูลสมมติ (Mock Data) สำหรับตาราง
  const products = Array(12).fill({
    code: 'G01010010105024042',
    name: 'กระจกใส 5 มม. 24x42 AGC',
    qty: 42,
    unit: 'แผ่น',
    type: 'G'
  });

  return (
    <div className="max-w-7xl mx-auto p-6 min-h-screen bg-gray-50/50">
      
      {/* 1. ปุ่มย้อนกลับ (Back Button) */}
      <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 hover:bg-white px-4 py-2 rounded-full mb-6 transition-all font-medium shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          ย้อนกลับหน้าหลัก
      </Link>

      {/* 2. หัวข้อหน้า */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-red-100 text-red-600 rounded-xl shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" /></svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-800">ตรวจสอบรายละเอียดสินค้า</h1>
      </div>

      {/* 3. ช่องค้นหา (Search Bar) - เพิ่มเงาและการลอยตัว */}
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

      {/* 4. ปุ่มเมนูใหญ่ 2 ปุ่ม - เพิ่ม Gradient, เงา, และ Hover Effect */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <button className="group relative bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-6 rounded-2xl shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1 hover:shadow-xl overflow-hidden">
              <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" opacity="0.5"/><path d="M2 6a4 4 0 014-4h12a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6z" fillRule="evenodd"/></svg>
              </div>
              <div className="relative z-10 flex flex-col items-start">
                  <span className="text-blue-100 font-medium mb-1">ข้อมูลสินค้า</span>
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

      {/* 5. ส่วนเนื้อหาหลัก (แบ่งซ้าย-ขวา) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* --- ฝั่งซ้าย: Filter (ตัวกรอง) - เพิ่มเงาและการ์ดสีขาว --- */}
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 h-fit sticky top-6">
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                <h2 className="text-xl font-bold text-gray-800">Filter</h2>
              </div>
              
              <div className="space-y-5">
                  <FilterInput label="เลือกสินค้า" />
                  <FilterInput label="ยี่ห้อ" />
                  <div className="border-t border-gray-100 pt-4 space-y-5">
                    <FilterInput label="กลุ่มสินค้า" />
                    <FilterInput label="กลุ่มย่อย" />
                  </div>
                   <div className="border-t border-gray-100 pt-4 space-y-5">
                    <FilterInput label="สี" />
                    <FilterInput label="ความหนา" />
                    <FilterInput label="ขนาด" />
                   </div>
              </div>
              <button className="w-full mt-6 bg-gray-800 hover:bg-black text-white py-3 rounded-xl font-bold transition-colors shadow-sm">ล้างตัวกรอง</button>
          </div>

          {/* --- ฝั่งขวา: ตารางสินค้า (Table) - เพิ่มเงา และปรับปรุง UI --- */}
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
              {/* Pagination หลอกๆ */}
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

      </div>
    </div>
  );
}

function FilterInput({ label }) {
    return (
        <div>
            <label className="block text-gray-700 font-bold mb-2 text-sm ml-1">{label}</label>
            <div className="relative group">
                <select 
                    className="w-full bg-gray-100 hover:bg-gray-200/70 border-0 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all appearance-none shadow-sm font-medium cursor-pointer"
                >
                    <option>ทั้งหมด</option>
                    <option>ตัวเลือก 1</option>
                    <option>ตัวเลือก 2</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400 group-hover:text-gray-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
}