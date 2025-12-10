import { Routes, Route } from 'react-router-dom' 
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import CustomerSearch from './components/CustomerSearch'; 
import PendingQuotes from './components/PendingQuotes';
import TodayQuotations from './components/TodayQuotations';    
import ContactedCustomers from './components/ContactedCustomers'; 
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} /> 
        <Route path="/search" element={<CustomerSearch />} /> 
        <Route path="/pending" element={<PendingQuotes />} />
        <Route path="/today-quotes" element={<TodayQuotations />} />
        <Route path="/customers" element={<ContactedCustomers />} />
        <Route path="/products" element={<ProductDetails />} />

      </Routes>

    </div>
  )
}

export default App

//npm run dev