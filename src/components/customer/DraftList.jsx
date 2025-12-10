import React from 'react';
import ActionButton from '../ui/ActionButton';

export default function DraftList({ drafts }) {
  return (
    <div className="space-y-4">
      <h2 className="font-bold text-slate-800 text-lg flex items-center gap-2">
        <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
        เอกสารร่าง (Drafts)
        <span className="bg-slate-200 text-slate-600 text-xs px-2 py-0.5 rounded-full">{drafts.length}</span>
      </h2>

      {drafts.map((item, idx) => (
        <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
             <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-blue-600 hover:underline cursor-pointer">{item.id}</h3>
                  <span className="bg-orange-50 text-orange-600 text-[10px] px-2 py-1 rounded border border-orange-100 font-bold uppercase tracking-wider">Draft</span>
                </div>
                <p className="text-slate-500 text-sm">แก้ไขล่าสุดเมื่อ: {item.updated}</p>
             </div>
             <div className="text-right">
                <p className="text-2xl font-bold text-slate-800">฿ {item.price}</p>
                <p className="text-xs text-slate-400">{item.items} รายการสินค้า</p>
             </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
            <ActionButton color="blue" icon="edit">แก้ไขรายการ</ActionButton>
            <ActionButton color="emerald" icon="print">พิมพ์ใบเสนอราคา</ActionButton>
            <ActionButton color="red" icon="trash">ลบ</ActionButton>
          </div>
        </div>
      ))}
    </div>
  );
}