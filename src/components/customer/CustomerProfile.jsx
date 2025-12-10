import React from 'react';
import InfoRow from '../ui/InfoRow';

export default function CustomerProfile({ profile }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
        <h3 className="font-bold text-slate-800 flex items-center gap-2">
          <span className="w-2 h-6 bg-blue-500 rounded-full"></span>
          ข้อมูลลูกค้า
        </h3>
        <button className="text-blue-600 text-sm hover:underline">แก้ไข</button>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg ring-4 ring-blue-50">
            {profile.name.substring(0, 2)}
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-800">{profile.name}</h3>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="text-slate-500 text-sm font-medium">#{profile.id}</span>
              <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold border border-green-200">ACTIVE</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-sm">
          <InfoRow label="เลขผู้เสียภาษี" value={profile.taxId} />
          <InfoRow label="เบอร์โทรศัพท์" value={profile.phone} />
          
          <div className="flex flex-col gap-1">
             <span className="text-slate-500 text-xs">ที่อยู่จัดส่ง</span>
             <span className="text-slate-700 font-medium leading-relaxed">{profile.address}</span>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <p className="text-xs text-slate-500 mb-1">ประเภท</p>
              <p className="font-bold text-slate-800">{profile.type}</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <p className="text-xs text-slate-500 mb-1">วันที่สมัคร</p>
              <p className="font-bold text-slate-800">{profile.joinDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}