/**
 * This module specifies routes of this app
 * @module App/Router
 * @requires react
 * @requires react-router-dom
 * @requires loadable-components
 * @requires {@link module:Home}
 * @requires {@link module:Login}
 */
import React from 'react';
import {Route} from 'react-router-dom';
import loadable from 'loadable-components';

// Require Pages
// import {Container as Home} from './Home';
// import {Container as Login} from './Login';
const Home = loadable(() => import('./Home/container'));
const Login = loadable(() => import('./Login/container'));

/**
 * @return {Router}
 */
export default function Router() {
  return (
    <div>
      <Route exact path="/index" component={Home} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}
