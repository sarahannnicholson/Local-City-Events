import { combineReducers } from 'redux'
import routesReducer from './routesReducer'
import mapReducer from './cityMapReducer'

const makeRootReducer = combineReducers({
  routesReducer,
  mapReducer
});

export default makeRootReducer
