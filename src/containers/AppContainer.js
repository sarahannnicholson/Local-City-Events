import React, { Component, PropTypes } from 'react'
import { browserHistory, Router, Route, IndexRoute} from 'react-router'
import { Provider } from 'react-redux'

import HomeView from './HomeView'
import ResultsView from './ResultsView'

export default class AppContainer extends Component {
  static propTypes = {
    store  : PropTypes.object.isRequired
  };

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
            <Router history={browserHistory}>
              <Route path="/" component={HomeView}/>
              <Route path="/Results" component={ResultsView}/>
            </Router>
        </div>
      </Provider>
    )
  }
}
