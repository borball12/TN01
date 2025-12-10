import React from 'react';

export default function ActionButton({ children, color, onClick }) {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white",
    emerald: "bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white",
    red: "bg-red-50 text-red-600 hover:bg-red-600 hover:text-white"
  };

  return (
    <button 
      onClick={onClick}
      className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 ${colorClasses[color]}`}
    >
       {children}
    </button>
  );
}