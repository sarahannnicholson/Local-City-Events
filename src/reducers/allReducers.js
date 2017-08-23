import { combineReducers } from 'redux'
import routesReducer from './routesReducer'
import mapReducer from './mapReducer'
import foursquareReducer from './socialMediaReducer'

const makeRootReducer = combineReducers({
	routesReducer,
	mapReducer,
	foursquareReducer
});

export default makeRootReducer
