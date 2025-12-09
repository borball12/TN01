import React from 'react';

export default function Navbar() {
  return (
    // กรอบหลัก: สีขาว, มีเงาด้านล่าง (shadow-md), จัดของให้ชิดซ้ายขวา (justify-between)
    <nav className="bg-white shadow-md px-8 py-3 flex justify-between items-center w-full">
      
      {/* --- ฝั่งซ้าย: โลโก้ --- */}
      <div className="flex items-center gap-3">
        {/* ตรงนี้คือกล่องสีแดงรูปตัว T (จำลองโลโก้) */}
        <div className="bg-red-600 w-10 h-8 flex items-center justify-center transform -skew-x-12 rounded-sm">
           <span className="text-white font-bold text-xl italic not-italic">T</span>
        </div>
        {/* ข้อความชื่อบริษัท */}
        <h1 className="text-red-600 font-bold text-xl tracking-wide uppercase">
          TANGNAM GLASS
        </h1>
      </div>

      {/* --- ฝั่งขวา: เมนูและโปรไฟล์ --- */}
      <div className="flex items-center gap-4">
        {/* ลิงก์หน้าหลัก */}
        <a href="#" className="text-gray-600 font-bold text-sm hover:text-black">
          หน้าหลัก
        </a>

        {/* เส้นขีดคั่นแนวตั้ง (|) */}
        <div className="h-6 w-px bg-gray-300 mx-1"></div>

        {/* ส่วนแสดงโปรไฟล์ */}
        <div className="flex items-center gap-3">
          {/* วงกลมสีแดง (Avatar) */}
          <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center text-white font-bold shadow-sm">
            I
          </div>
          {/* ชื่อและรหัส */}
          <div className="flex flex-col items-start leading-tight">
            <span className="text-xs font-bold text-gray-800">เดวิด แฮนซั่ม</span>
            <span className="text-xs text-gray-500 font-semibold">21113</span>
          </div>
        </div>

        {/* ปุ่มออกจากระบบ */}
        <button className="ml-4 bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2 px-6 rounded-md shadow-sm transition-colors duration-200">
          ออกจากระบบ
        </button>
      </div>
    </nav>
  );
}