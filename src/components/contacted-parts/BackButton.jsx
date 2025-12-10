import React from 'react';
import { Link } from 'react-router-dom';

export default function BackButton({ to = "/" }) {
  return (
    <Link 
      to={to} 
      className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg mb-4 transition-all font-medium"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
      ย้อนกลับหน้าหลัก
    </Link>
  );
}