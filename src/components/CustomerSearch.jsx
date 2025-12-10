import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import Components ที่เราแยกไว้
import SearchBar from '../components/customer/SearchBar';
import CustomerProfile from '../components/customer/CustomerProfile';
import PurchaseHistory from '../components/customer/PurchaseHistory';
import CreditInfo from '../components/customer/CreditInfo';
import DraftList from '../components/customer/DraftList';

export default function CustomerSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  // --- Mock Data ---
  const customerProfile = {
    id: 'DAY208',
    name: 'สมชาย ทดสอบ',
    taxId: '0135560024243',
    phone: '089-123-4567',
    address: '123 ถ.สุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110',
    joinDate: '15 มกราคม 2024',
    type: 'Retail',
    creditStatus: 'ปกติ',
    creditTerm: '15 วัน'
  };

  const creditInfo = {
    limit: 100000,
    used: 25000,
    balance: 75000,
    dueDate: '20 พ.ย. 2025'
  };

  const purchaseHistory = [
    { date: '10 พ.ย. 2025', id: '#ORD-2025-1523', price: '15,750.00' },
    { date: '10 พ.ย. 2025', id: '#ORD-2025-1522', price: '15,750.00' },
    { date: '08 พ.ย. 2025', id: '#ORD-2025-1521', price: '15,750.00' },
  ];

  const drafts = [
    { id: 'QT-2025-DRAFT-001', items: 8, price: '125,000', updated: '9 พ.ย. 2025' },
    { id: 'QT-2025-DRAFT-002', items: 12, price: '45,000', updated: '9 พ.ย. 2025' },
  ];
  // -----------------

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 min-h-screen bg-slate-50 font-sans">
      
      {/* 1. Header & Navigation */}
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-4 transition-colors font-medium text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          ย้อนกลับหน้าหลัก
        </Link>
        
        <div className="flex items-center gap-3">
          <div className="bg-white p-2.5 rounded-xl shadow-sm border border-slate-200 text-blue-600">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800">ค้นหารายละเอียดลูกค้า</h1>
            <p className="text-slate-500 text-sm mt-1">จัดการข้อมูลลูกค้า, ประวัติการสั่งซื้อ และเอกสารร่าง</p>
          </div>
        </div>
      </div>

      {/* 2. Search Bar */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* 3. Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* --- Left Column --- */}
        <div className="space-y-6">
          <CustomerProfile profile={customerProfile} />
          <PurchaseHistory history={purchaseHistory} />
        </div>

        {/* --- Right Column --- */}
        <div className="lg:col-span-2 space-y-6">
          <CreditInfo 
            info={creditInfo} 
            status={customerProfile.creditStatus} 
            term={customerProfile.creditTerm} 
          />
          <DraftList drafts={drafts} />
        </div>

      </div>
    </div>
  );
}