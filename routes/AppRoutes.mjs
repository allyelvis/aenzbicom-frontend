import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BusinessPage from '../pages/business/BusinessPage';
import FinancialPage from '../pages/financial/FinancialPage';
import CommercePage from '../pages/commerce/CommercePage';
import HospitalityPage from '../pages/hospitality/HospitalityPage';
import EntertainmentPage from '../pages/entertainment/EntertainmentPage';

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={BusinessPage} />
                <Route path="/financial" component={FinancialPage} />
                <Route path="/commerce" component={CommercePage} />
                <Route path="/hospitality" component={HospitalityPage} />
                <Route path="/entertainment" component={EntertainmentPage} />
            </Switch>
        </Router>
    );
};

export default AppRoutes;
