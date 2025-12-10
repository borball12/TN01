import React from 'react';

// Component ย่อยสำหรับ Input
const FilterInput = ({ label }) => (
    <div>
        <label className="block text-gray-700 font-bold mb-2 text-sm ml-1">{label}</label>
        <div className="relative group">
            <select className="w-full bg-gray-100 hover:bg-gray-200/70 border-0 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all appearance-none shadow-sm font-medium cursor-pointer">
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

export default function FilterSidebar() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 h-fit sticky top-6">
        <div className="flex items-center gap-2 mb-6">
            <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
            <h2 className="text-xl font-bold text-gray-800">ตัวกรองสินค้า</h2>
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
  );
}