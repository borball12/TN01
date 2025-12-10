import React from 'react';

export default function MainCard({ children }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 min-h-[80vh] relative z-10">
      {children}
    </div>
  );
}