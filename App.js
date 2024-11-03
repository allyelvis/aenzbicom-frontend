import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BusinessComponent from './components/BusinessComponent';
import FinancialComponent from './components/FinancialComponent';
import CommerceComponent from './components/CommerceComponent';
import AccountingComponent from './components/AccountingComponent';
import HospitalityComponent from './components/HospitalityComponent';
import RetailComponent from './components/RetailComponent';
import EntertainmentComponent from './components/EntertainmentComponent';
import BusinessForm from './forms/BusinessForm';
import FinancialForm from './forms/FinancialForm';
import CommerceForm from './forms/CommerceForm';
import AccountingForm from './forms/AccountingForm';
import HospitalityForm from './forms/HospitalityForm';
import RetailForm from './forms/RetailForm';
import EntertainmentForm from './forms/EntertainmentForm';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/businesspage">BusinessPage</Link> |
                    <Link to="/financialpage">FinancialPage</Link> |
                    <Link to="/commercepage">CommercePage</Link> |
                    <Link to="/accountingpage">AccountingPage</Link> |
                    <Link to="/hospitalitypage">HospitalityPage</Link> |
                    <Link to="/retailpage">RetailPage</Link> |
                    <Link to="/entertainmentpage">EntertainmentPage</Link> |
                </nav>
                <Routes>
                    <Route path="/businesspage" element={<BusinessComponent />} />
                    <Route path="/financialpage" element={<FinancialComponent />} />
                    <Route path="/commercepage" element={<CommerceComponent />} />
                    <Route path="/accountingpage" element={<AccountingComponent />} />
                    <Route path="/hospitalitypage" element={<HospitalityComponent />} />
                    <Route path="/retailpage" element={<RetailComponent />} />
                    <Route path="/entertainmentpage" element={<EntertainmentComponent />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
