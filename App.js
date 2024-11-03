import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BusinessPage from './pages/business/BusinessPage';
import FinancialPage from './pages/financial/FinancialPage';
import CommercePage from './pages/commerce/CommercePage';
import HospitalityPage from './pages/hospitality/HospitalityPage';
import EntertainmentPage from './pages/entertainment/EntertainmentPage';
import './App.css';

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
                    <Switch>
                        <Route path="/" exact component={BusinessPage} />
                        <Route path="/financial" component={FinancialPage} />
                        <Route path="/commerce" component={CommercePage} />
                        <Route path="/hospitality" component={HospitalityPage} />
                        <Route path="/entertainment" component={EntertainmentPage} />
                    </Switch>
                </main>
            </div>
        </Router>
    );
};

export default App;