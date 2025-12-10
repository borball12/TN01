import React from 'react';

export default function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between items-center border-b border-dashed border-slate-200 pb-2">
      <span className="text-slate-500 text-xs">{label}</span>
      <span className="font-medium text-slate-700">{value}</span>
    </div>
  );
}