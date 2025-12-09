import React from 'react';
import { Link } from 'react-router-dom';

export default function CustomerSearch() {
  // Mock Data: ข้อมูลสมมติสำหรับแสดงผล
  const purchaseHistory = [
    { date: '10 พฤศจิกายน 2025', id: '#ORD-2025-1523', price: '15,750.00' },
    { date: '10 พฤศจิกายน 2025', id: '#ORD-2025-1522', price: '15,750.00' },
    { date: '10 พฤศจิกายน 2025', id: '#ORD-2025-1521', price: '15,750.00' },
  ];

  const drafts = [
    { id: 'QT-2025-DRAFT-001', items: 8, price: '125,000', updated: '9 พ.ย. 2025' },
    { id: 'QT-2025-DRAFT-002', items: 8, price: '125,000', updated: '9 พ.ย. 2025' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 min-h-screen bg-gray-50/50"> 
      
      {/* 1. ปุ่มย้อนกลับ */}
      <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-6 transition-colors font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          ย้อนกลับหน้าหลัก
      </Link>

      {/* 2. หัวข้อหน้า */}
      <div className="flex items-center gap-3 mb-6">
          <div className="bg-white p-2 rounded-lg shadow-md text-red-600">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">ค้นหารายละเอียดลูกค้า</h1>
      </div>

      {/* 3. ช่องค้นหา (เพิ่ม shadow-md) */}
      <div className="bg-white p-2 rounded-xl shadow-md border border-gray-200 flex gap-2 mb-8 transition-shadow hover:shadow-lg">
          <input 
              type="text" 
              className="flex-1 px-4 py-3 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              placeholder="ค้นหาด้วย รหัสลูกค้า, ชื่อ หรือ เบอร์โทร....."
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-bold transition shadow-sm">
              ค้นหา
          </button>
      </div>

      {/* 4. Grid Layout แบ่งซ้าย-ขวา */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* --- ฝั่งซ้าย (1 ส่วน) --- */}
          <div className="space-y-6">
              
              {/* Card: ข้อมูลลูกค้า (เพิ่ม shadow-lg) */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-2 mb-4 text-gray-800 font-bold text-lg">
                      <div className="bg-blue-500 p-1.5 rounded-full text-white shadow-sm"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div>
                      จัดการข้อมูลลูกค้า
                  </div>
                  <hr className="mb-4 border-gray-100"/>
                  
                  {/* Profile Section */}
                  <div className="flex items-center gap-4 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-inner">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md border-2 border-white">
                          สท
                      </div>
                      <div>
                          <h3 className="font-bold text-lg text-gray-800">สมชาย ทดสอบ</h3>
                          <div className="flex items-center gap-2">
                              <span className="text-gray-500 font-medium">รหัส: DAY208</span>
                              <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-bold shadow-sm">ลูกค้าเครดิต</span>
                          </div>
                      </div>
                  </div>

                  {/* Info List */}
                  <div className="space-y-3 text-sm">
                      <div className="flex justify-between border-b border-gray-100 pb-2">
                          <span className="font-bold text-gray-700">รหัสลูกค้า:</span>
                          <span className="text-gray-600">DAY208</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-100 pb-2">
                          <span className="font-bold text-gray-700">ชื่อลูกค้า:</span>
                          <span className="text-gray-600">สมชาย ทดสอบ</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-100 pb-2">
                          <span className="font-bold text-gray-700">เบอร์โทรศัพท์:</span>
                          <span className="text-gray-600">089-123-4567</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-100 pb-2 flex-col gap-1">
                          <span className="font-bold text-gray-700">ที่อยู่:</span>
                          <span className="text-gray-600 text-right">123 ถ.สุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-100 pb-2">
                          <span className="font-bold text-gray-700">วันที่เป็นลูกค้า:</span>
                          <span className="text-gray-600">15 มกราคม 2024</span>
                      </div>
                      <div className="flex justify-between pt-1">
                          <span className="font-bold text-gray-700">ประเภทลูกค้า:</span>
                          <span className="text-gray-600">Retail</span>
                      </div>
                  </div>
              </div>

              {/* Card: ประวัติการซื้อ (เพิ่ม shadow-lg) */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-2 mb-4 text-gray-800 font-bold text-lg">
                      <div className="bg-blue-500 p-1.5 rounded-full text-white shadow-sm"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                      ประวัติการซื้อ
                  </div>
                  <hr className="mb-4 border-gray-100"/>

                  <div className="space-y-3">
                      {purchaseHistory.map((item, idx) => (
                          <div key={idx} className="bg-gray-50 p-4 rounded-lg flex justify-between items-center shadow-sm border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                              <div>
                                  <p className="text-xs text-gray-500">{item.date}</p>
                                  <p className="font-bold text-gray-800">{item.id}</p>
                                  <p className="text-green-600 font-bold text-sm">฿ {item.price}</p>
                              </div>
                              <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-1.5 rounded-md shadow-sm">
                                  ซื้อซ้ำ
                              </button>
                          </div>
                      ))}
                  </div>
              </div>

          </div>

          {/* --- ฝั่งขวา (2 ส่วน) --- */}
          <div className="lg:col-span-2 space-y-6">
              
              {/* Card: ข้อมูลเครดิต (เพิ่ม shadow-lg) */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-2 mb-4 text-gray-800 font-bold text-lg">
                      <div className="bg-blue-500 p-1.5 rounded-full text-white shadow-sm"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg></div>
                      ข้อมูลเครดิตและวงเงิน
                  </div>
                  <hr className="mb-6 border-gray-100"/>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {/* Box ฟ้า (เพิ่ม shadow-md) */}
                      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 shadow-md">
                          <p className="font-bold text-blue-800 text-sm">วงเงินเครดิตทั้งหมด</p>
                          <h2 className="text-3xl font-bold text-gray-900 mt-1">฿ 100,000</h2>
                          <p className="text-sm text-blue-700 mt-2 font-medium">เหลือวงเงิน: ฿ 75,000</p>
                      </div>
                      {/* Box แดง (เพิ่ม shadow-md) */}
                      <div className="bg-red-50 p-6 rounded-xl border border-red-100 shadow-md">
                          <p className="font-bold text-red-800 text-sm">ยอดค้างชำระ</p>
                          <h2 className="text-3xl font-bold text-gray-900 mt-1">฿ 25,000</h2>
                          <p className="text-sm text-red-700 mt-2 font-medium">ครบกำหนด: 20 พ.ย. 2025</p>
                      </div>
                  </div>

                  <div className="space-y-2 text-sm bg-gray-50 p-4 rounded-lg border border-gray-100 shadow-inner">
                      <div className="flex gap-4">
                          <span className="font-bold text-gray-700 w-32">สถานะเครดิต:</span>
                          <span className="text-gray-600">ปกติ</span>
                      </div>
                      <div className="flex gap-4">
                          <span className="font-bold text-gray-700 w-32">ระยะเวลาเครดิต:</span>
                          <span className="text-gray-600">15 วัน</span>
                      </div>
                  </div>
              </div>

              {/* Card: รอดำเนินการ (เพิ่ม shadow-lg) */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-2 mb-4 text-gray-800 font-bold text-lg">
                      <div className="bg-blue-500 p-1.5 rounded-full text-white shadow-sm"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div>
                      รอดำเนินการ - ใบเสนอราคาแบบร่าง
                  </div>
                  <hr className="mb-6 border-gray-100"/>

                  <div className="space-y-6">
                      {drafts.map((item, idx) => (
                          // เพิ่ม shadow-sm ให้กล่องย่อย และ hover:shadow-md
                          <div key={idx} className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 bg-white">
                              <div className="flex flex-wrap gap-3 items-center mb-2">
                                  <h3 className="text-xl font-bold text-gray-800">{item.id}</h3>
                                  <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-md font-bold shadow-sm">แบบร่าง</span>
                              </div>
                              <p className="text-gray-600 font-bold mb-4">สมชาย ทดสอบ <span className="text-gray-400 font-normal ml-2">รหัสลูกค้า: DAY208</span></p>

                              <div className="grid grid-cols-3 gap-4 mb-4 text-sm bg-gray-50 p-3 rounded-lg border border-gray-100">
                                  <div>
                                      <p className="text-gray-500 mb-1">จำนวนรายการ</p>
                                      <p className="font-bold text-gray-800">{item.items} รายการ</p>
                                  </div>
                                  <div>
                                      <p className="text-gray-500 mb-1">มูลค่ารวม</p>
                                      <p className="font-bold text-gray-800">฿ {item.price}</p>
                                  </div>
                                  <div>
                                      <p className="text-gray-500 mb-1">แก้ไขล่าสุด</p>
                                      <p className="font-bold text-gray-800">{item.updated}</p>
                                  </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg text-sm transition shadow-sm">แก้ไข</button>
                                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg text-sm transition shadow-sm">พิมพ์ใบเสนอราคา</button>
                                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg text-sm transition shadow-sm">ลบ</button>
                              </div>
                          </div>
                      ))}
                  </div>

              </div>
              
          </div>

      </div>
    </div>
  );
}