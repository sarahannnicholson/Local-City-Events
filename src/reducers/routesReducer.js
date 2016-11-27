import { LOCATION_CHANGE } from '../actions/routesAction';


const initialState = null;

export default function routesReducer (state = initialState, action) {
  switch(action.type) {
    case LOCATION_CHANGE:
      return action.payload;
    default:
      return state;
  }
}
