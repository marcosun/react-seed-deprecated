/**
 * This module specifies routes of this app
 * @module App/Router
 * @requires react
 * @requires react-router-dom
 * @requires {@link module:Dashboard}
 * @requires {@link module:Login}
 */
import React from 'react';
import {Route} from 'react-router-dom';

// Require Pages
import {Container as Dashboard} from './Dashboard';
import {Container as Login} from './Login';
/**
 * @return {Router}
 */
export default function Router() {
  return (
    <div>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}
