import { combineReducers } from 'redux'
import routesReducer from './routes'
import mapReducer from './cityMap'

const makeRootReducer = combineReducers({
  routesReducer,
  mapReducer
});

export default makeRootReducer
