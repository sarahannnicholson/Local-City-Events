import {  Map } from 'immutable';
import {
  MAP_ERROR,
  MAP_SUCCESS,
  MAP_FAILURE
} from '../actions/cityDataAction';

const initialState = Map({
  coordinate: null,
  error: null,
  show: true
});

export default function mapReducer(state = initialState, action) {
  switch(action.type) {
    case MAP_ERROR:
      return state.merge({
        'coordinate': null,
        'error': action.payload,
        'show': true
      });
    case MAP_SUCCESS:
      return state.merge({
        'coordinate': action.payload,
        'error': null,
        'show': true
      });
    case MAP_FAILURE:
      return state.merge({
        'coordinate': null,
        'error': null,
        'show': false
      });
    default:
      return state;
  }
}
