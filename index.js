import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import AccountingComponent from './components/AccountingComponent';
import BusinessComponent from './components/BusinessComponent';
import CommerceComponent from './components/CommerceComponent';
import FinancialComponent from './components/FinancialComponent';
import HospitalityComponent from './components/HospitalityComponent';
import RetailComponent from './components/RetailComponent';
import EntertainmentComponent from './components/EntertainmentComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <App>
            <Routes>
                <Route path="/" element={<AccountingComponent />} />
                <Route path="/business" element={<BusinessComponent />} />
                <Route path="/commerce" element={<CommerceComponent />} />
                <Route path="/financial" element={<FinancialComponent />} />
                <Route path="/hospitality" element={<HospitalityComponent />} />
                <Route path="/retail" element={<RetailComponent />} />
                <Route path="/entertainment" element={<EntertainmentComponent />} />
            </Routes>
        </App>
    </Router>
);
