import React from 'react';
import { Link } from 'react-router-dom'; // <--- อย่าลืมบรรทัดนี้

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      
      {/* 1. ส่วนหัว (Hero Section) สีฟ้า */}
      <div className="bg-blue-500 rounded-2xl p-8 text-white flex justify-between items-center shadow-lg relative overflow-hidden">
        <div className="z-10">
            <p className="text-blue-100 text-sm mb-1">วันอาทิตย์ที่ 2 พฤศจิกายน 2568</p>
            <h1 className="text-4xl font-bold mb-2">สวัสดี, เดวิด แฮนซั่ม</h1>
            <p className="text-blue-100 mb-4">พนักงานรหัส: 21113</p>
            <p className="text-blue-200 text-sm font-light">ยินดีต้อนรับเข้าสู่ระบบจัดการใบเสนอราคา ระบบพร้อมให้บริการแล้ว</p>
        </div>
        {/* ไอคอนมือโบก (ใช้ Emoji หรือ SVG ก็ได้) */}
        <div className="text-6xl z-10">👋</div>
        
        {/* ลวดลายตกแต่งพื้นหลัง (Optional) */}
        <div className="absolute right-0 top-0 h-full w-1/3 bg-white opacity-5 transform skew-x-12"></div>
      </div>

      {/* 2. ส่วนสถิติ (Stats Grid) - 3 ช่องเท่ากัน */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: ใบเสนอราคา */}
{/* Card 1: ใบเสนอราคาวันนี้ (เปลี่ยนเป็น Link) */}
      <Link to="/today-quotes" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-40 cursor-pointer hover:shadow-md hover:border-blue-200 transition">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white mb-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </div>
          <div>
              <p className="text-gray-500 font-medium">ใบเสนอราคาวันนี้</p>
              <h2 className="text-4xl font-bold text-gray-800">19</h2>
              <p className="text-xs text-gray-400 mt-1">รายการทั้งหมด</p>
          </div>
      </Link>

{/* Card 2: ลูกค้าที่ติดต่อ (เปลี่ยนเป็น Link) */}
      <Link to="/customers" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-40 cursor-pointer hover:shadow-md hover:border-green-200 transition">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white mb-2">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </div>
          <div>
              <p className="text-gray-500 font-medium">ลูกค้าที่ติดต่อ</p>
              <h2 className="text-4xl font-bold text-gray-800">6</h2>
              <p className="text-xs text-gray-400 mt-1">รายการทั้งหมด</p>
          </div>
      </Link>
    {/* Card 3: รอดำเนินการ (แก้ไขให้กดได้) */}
        <Link to="/pending" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-40 cursor-pointer hover:shadow-md hover:border-orange-200 transition">
            <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center text-white mb-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
                <p className="text-gray-500 font-medium">รอดำเนินการ</p>
                <h2 className="text-4xl font-bold text-gray-800">5</h2>
                <p className="text-xs text-gray-400 mt-1">รายการทั้งหมด</p>
            </div>
        </Link>
      </div>

      {/* 3. ส่วน Action Grid (แถวกลาง) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card สีเหลือง (กินพื้นที่ 2 ส่วน) */}
<Link to="/products" className="md:col-span-2 bg-yellow-400 rounded-2xl p-6 text-white flex flex-col justify-center relative overflow-hidden h-40 shadow-sm cursor-pointer hover:bg-yellow-500 transition">
             {/* ไอคอนกล่อง */}
             <div className="absolute right-4 top-4 opacity-20 transform scale-150">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" /><path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
             </div>
             <h3 className="text-2xl font-bold z-10">ตรวจสอบรายละเอียดของสินค้า</h3>
             <p className="text-yellow-100 z-10">รายละเอียดของสินค้าต่างๆ</p>
             <div className="absolute bottom-6 right-6 flex items-center gap-1 font-bold z-10">
                เริ่มต้นเลย <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
             </div>
        </Link>

        {/* Card โปรโมชั่น (สีขาว) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-40">
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white mb-2">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
            </div>
            <div>
                <p className="text-gray-500 font-medium">โปรโมชั่น</p>
                <h2 className="text-4xl font-bold text-gray-800">2</h2>
                <p className="text-xs text-gray-400 mt-1">รายการทั้งหมด</p>
            </div>
        </div>
      </div>

      {/* 4. ส่วน Action Grid (แถวล่างสุด) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card สีแดง - สร้างใบเสนอราคา */}
        <div className="bg-red-500 rounded-2xl p-8 text-white h-48 flex flex-col justify-between relative shadow-sm cursor-pointer hover:bg-red-600 transition overflow-hidden">
            <div>
                 <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                 <h3 className="text-3xl font-bold">สร้างใบเสนอราคา</h3>
                 <p className="text-red-100">เริ่มสร้างใบเสนอราคาใหม่</p>
            </div>
            <div className="flex items-center gap-1 font-bold">
                เริ่มต้นเลย <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
        </div>

        {/* Card สีฟ้า - ค้นหาข้อมูล */}
        <Link to="/search" className="bg-blue-400 rounded-2xl p-8 text-white h-48 flex flex-col justify-between relative shadow-sm cursor-pointer hover:bg-blue-500 transition overflow-hidden">
            <div>
                 <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                 <h3 className="text-3xl font-bold">ค้นหาข้อมูลลูกค้า</h3>
                 <p className="text-blue-100">ตรวจสอบข้อมูลลูกค้าและประวัติการซื้อ</p>
            </div>
            <div className="flex items-center gap-1 font-bold">
                เริ่มต้นเลย <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
        </Link>
      </div>

    </div>
  );
}