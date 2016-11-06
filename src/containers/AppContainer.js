import React, { Component, PropTypes } from 'react'
import { browserHistory, Router, Route, IndexRoute} from 'react-router'
import { Provider } from 'react-redux'

import CoreLayout from '../components/Layouts/CoreLayout'
import HomeView from '../components/Home/HomeView'
import CityEvents from '../containers/CityEvents'

class AppContainer extends Component {
  static propTypes = {
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
            <Router history={browserHistory}>
              <Route path="/" component={CoreLayout}>
                <IndexRoute component={HomeView} />
                <Route path="/CityEvents" component={CityEvents} />
              </Route>
            </Router>
        </div>
      </Provider>
    )
  }
}

export default AppContainer
