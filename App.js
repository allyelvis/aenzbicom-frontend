// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BusinessPage from './pages/BusinessPage';
import FinancialPage from './pages/FinancialPage';
import CommercePage from './pages/CommercePage';
import AccountingPage from './pages/AccountingPage';
import HospitalityPage from './pages/HospitalityPage';
import RetailPage from './pages/RetailPage';
import EntertainmentPage from './pages/EntertainmentPage';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/business">Business</Link> | 
                    <Link to="/financial">Financial</Link> | 
                    <Link to="/commerce">Commerce</Link> | 
                    <Link to="/accounting">Accounting</Link> | 
                    <Link to="/hospitality">Hospitality</Link> | 
                    <Link to="/retail">Retail</Link> | 
                    <Link to="/entertainment">Entertainment</Link> | 
                </nav>
                <Routes>
                    <Route path="/business" element={<BusinessPage />} />
                    <Route path="/financial" element={<FinancialPage />} />
                    <Route path="/commerce" element={<CommercePage />} />
                    <Route path="/accounting" element={<AccountingPage />} />
                    <Route path="/hospitality" element={<HospitalityPage />} />
                    <Route path="/retail" element={<RetailPage />} />
                    <Route path="/entertainment" element={<EntertainmentPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
