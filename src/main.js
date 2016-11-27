import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import AppContainer from './containers/AppContainer'
import makeRootReducer from './reducers/allReducers'
import { updateLocation } from './actions/routesAction'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk';

// ========================================================
// Store Instantiation
// ========================================================

const store = createStore(makeRootReducer, applyMiddleware(thunk));

store.unsubscribeHistory = browserHistory.listen(updateLocation(store));
// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root');

let render = () => {
  ReactDOM.render(
    <AppContainer store={store} />,
    MOUNT_NODE
  )
};

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEV__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open()
  }
}

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render;
    const renderError = (error) => {
      const RedBox = require('redbox-react').default;

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    };

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp()
      } catch (error) {
        renderError(error)
      }
    }
  }
}

// ========================================================
// Go!
// ========================================================
render()
