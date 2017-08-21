import {  Map } from 'immutable';
import {
	SOCIAL_MEDIA_ERROR,
	SOCIAL_MEDI_SUCCESS
} from '../actions/cityDataAction';

const foursquareInitState = Map({
  venues: null,
  error: null,
  show: true
});

export default function foursquareReducer(state = foursquareInitState, action) {
  switch(action.type) {
    case SOCIAL_MEDIA_ERROR:
      return state.merge({
        'venues': null,
        'error': action.payload,
        'show': true
      });
    case SOCIAL_MEDI_SUCCESS:
      return state.merge({
        'venues': action.payload,
        'error': null,
        'show': true
      });
    default:
      return state;
  }
}
