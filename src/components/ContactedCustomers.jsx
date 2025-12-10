import React from 'react';

// Import Components ย่อยเข้ามา
import BackgroundDecoration from './contacted-parts/BackgroundDecoration';
import MainCard from './contacted-parts/MainCard';
import BackButton from './contacted-parts/BackButton';
import PageHeader from './contacted-parts/PageHeader';
import FilterBar from './contacted-parts/FilterBar';
import CustomerTable from './contacted-parts/CustomerTable';

export default function ContactedCustomers() {
  // ข้อมูลสมมติ (Mock Data)
  const customers = [
    { id: 1, time: '10:00 น.', code: 'DAY208', name: 'สมชาย ทดสอบ', sales: 'เดวิด แฮนซั่ม', date: '10 พ.ย. 2025' },
    { id: 2, time: '10:15 น.', code: 'DAY209', name: 'วิชัย ใจดี', sales: 'เดวิด แฮนซั่ม', date: '10 พ.ย. 2025' },
    { id: 3, time: '10:30 น.', code: 'DAY210', name: 'มานี มีแชร์', sales: 'เดวิด แฮนซั่ม', date: '10 พ.ย. 2025' },
    { id: 4, time: '11:00 น.', code: 'DAY211', name: 'ปิติ พอใจ', sales: 'เดวิด แฮนซั่ม', date: '10 พ.ย. 2025' },
    { id: 5, time: '11:20 น.', code: 'DAY212', name: 'ชูใจ ชอบใจ', sales: 'เดวิด แฮนซั่ม', date: '10 พ.ย. 2025' },
    { id: 6, time: '13:00 น.', code: 'DAY213', name: 'แก้ว กล้าหาญ', sales: 'เดวิด แฮนซั่ม', date: '10 พ.ย. 2025' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 relative">
      <BackgroundDecoration />
      
      <MainCard>
        <BackButton />
        <PageHeader 
            title="ลูกค้าที่ซื้อของวันนี้" 
            subtitle="ตรวจสอบรายการลูกค้าที่ทำรายการในวันนี้" 
        />
        <FilterBar />
        {/* ส่งข้อมูล customers เข้าไปให้ตารางแสดงผล */}
        <CustomerTable data={customers} />
      </MainCard>
    </div>
  );
}