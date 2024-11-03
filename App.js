import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BusinessPage from './pages/business/BusinessPage';
import FinancialPage from './pages/financial/FinancialPage';
import CommercePage from './pages/commerce/CommercePage';
import HospitalityPage from './pages/hospitality/HospitalityPage';
import EntertainmentPage from './pages/entertainment/EntertainmentPage';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Business</Link>
                            </li>
                            <li>
                                <Link to="/financial">Financial</Link>
                            </li>
                            <li>
                                <Link to="/commerce">Commerce</Link>
                            </li>
                            <li>
                                <Link to="/hospitality">Hospitality</Link>
                            </li>
                            <li>
                                <Link to="/entertainment">Entertainment</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main>
                    <Routes>
                        <Route path="/" element={<BusinessPage />} />
                        <Route path="/financial" element={<FinancialPage />} />
                        <Route path="/commerce" element={<CommercePage />} />
                        <Route path="/hospitality" element={<HospitalityPage />} />
                        <Route path="/entertainment" element={<EntertainmentPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
