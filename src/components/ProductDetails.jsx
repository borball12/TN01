import React from 'react';
import { Link } from 'react-router-dom';

// Import Components ที่แยกไว้
import HeaderSection from './product-details-parts/HeaderSection';
import HeroButtons from './product-details-parts/HeroButtons';
import FilterSidebar from './product-details-parts/FilterSidebar';
import ProductTable from './product-details-parts/ProductTable';

export default function ProductDetails() {
  const products = Array(12).fill({
    code: 'G01010010105024042',
    name: 'กระจกใส 5 มม. 24x42 AGC',
    qty: 42,
    unit: 'แผ่น',
    type: 'G'
  });

  return (
    <div className="max-w-7xl mx-auto p-6 min-h-screen bg-gray-50/50">
      
      <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 hover:bg-white px-4 py-2 rounded-full mb-6 transition-all font-medium shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          ย้อนกลับหน้าหลัก
      </Link>

      <HeaderSection />
      
      <HeroButtons />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <FilterSidebar />
          <ProductTable products={products} />
      </div>
    </div>
  );
}