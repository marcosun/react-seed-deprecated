/**
 * This module specifies routes of this app
 * @module App/Router
 * @requires react
 * @requires react-router-dom
 * @requires react-loadable
 * @requires {@link module:Home}
 * @requires {@link module:Login}
 */
import React from 'react';
import {Route} from 'react-router-dom';
import loadable from 'react-loadable'; // Dynamically load component
import {object} from 'prop-types';

// Dynamically load reducer
import injectAsyncReducer from './injectAsyncReducer';

/**
 * App Router
 */
export default class Router extends React.Component {
  static contextTypes = {
    store: object,
  };

  /**
   * Allow dynamic load page component and its affiliated reducers
   * @param  {object} props - Props
   * @param  {object} context - Access store via context
   */
  constructor(props, context) {
    super(props);
    this.Home = loadable({
      loader: () => {
        injectAsyncReducer( // Aynchronously load reducer
          context.store,
          'home', // Reducer name
          require('./Home/reducer').default // Reducer function
        );

        return import('./Home/container');
      },
      loading: () => {
        return <div>Loading...</div>;
      },
    });
    this.Login = loadable({
      loader: () => {
        injectAsyncReducer( // Aynchronously load reducer
          context.store,
          'login', // Reducer name
          require('./Login/reducer').default // Reducer function
        );

        return import('./Login/container');
      },
      loading: () => {
        return <div>Loading...</div>;
      },
    });
  }

  /**
   * App router
   * @return {Component} - Router
   */
  render() {
    return (
      <div>
        <Route exact path="/index" component={this.Home} />
        <Route exact path="/login" component={this.Login} />
      </div>
    );
  }
}
