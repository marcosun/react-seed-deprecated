import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Dashboard from './Dashboard';
import OdAnalytics from './OdAnalytics';

export default function() {
  return (
    <Router>
      <div>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/odAnalytics" component={OdAnalytics}/>
      </div>
    </Router>
  );
};