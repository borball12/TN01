import React from 'react';

export default function BackgroundDecoration() {
  return (
    <>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none animate-blob"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none animate-blob animation-delay-2000"></div>
    </>
  );
}