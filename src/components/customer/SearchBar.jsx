import React from 'react';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-2 mb-8 focus-within:ring-4 focus-within:ring-blue-100 transition-all duration-300">
      <input 
        type="text" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 px-4 py-3 bg-transparent outline-none text-slate-700 placeholder-slate-400 text-lg"
        placeholder="ระบุรหัสลูกค้า, ชื่อ หรือ เบอร์โทรศัพท์..."
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-md shadow-blue-200 flex items-center justify-center gap-2">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        ค้นหา
      </button>
    </div>
  );
}