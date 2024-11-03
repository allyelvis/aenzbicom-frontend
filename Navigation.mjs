import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EntertainmentPage from './pages/entertainment/EntertainmentPage';
import HospitalityPage from './pages/hospitality/HospitalityPage';
import CommercePage from './pages/commerce/CommercePage';
import FinancialPage from './pages/financial/FinancialPage';
import BusinessPage from './pages/business/BusinessPage';

const Navigation = () => (
    <Router>
        <nav>
            <ul>
<li><Link to="/entertainment">Entertainment Page</Link></li>
<li><Link to="/hospitality">Hospitality Page</Link></li>
<li><Link to="/commerce">Commerce Page</Link></li>
<li><Link to="/financial">Financial Page</Link></li>
<li><Link to="/business">Business Page</Link></li>
                {/* Links will be added here */}
            </ul>
        </nav>
        <Routes>
<Route path="/entertainment" element={<EntertainmentPage />} />
<Route path="/hospitality" element={<HospitalityPage />} />
<Route path="/commerce" element={<CommercePage />} />
<Route path="/financial" element={<FinancialPage />} />
<Route path="/business" element={<BusinessPage />} />
            {/* Routes will be added here */}
        </Routes>
    </Router>
);

export default Navigation;
