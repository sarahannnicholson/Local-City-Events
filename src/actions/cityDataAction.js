import $ from 'jquery';
import * as constants from '../constants';

export const MAP_ERROR = 'MAP_ERROR';
export const MAP_SUCCESS = 'MAP_SUCCESS';
export const MAP_FAILURE = 'MAP_FAILURE';

export const SOCIAL_MEDI_SUCCESS = 'SOCIAL_MEDI_SUCCESS';
export const SOCIAL_MEDI_FAILURE = 'SOCIAL_MEDI_FAILURE';

export function setPlaceAction(place){

	return function(dispatch) {
		dispatch(setPlace(place))
	}

	function setPlace(place){
		return {
			type: MAP_SUCCESS,
			payload: place
		}
	}
}


export function getSocMediaDataAction(place) {

	return function(dispatch) {
		const url = constants.ServerApiPaths.socMedia;
		const postData = {
			place: place
		};
		const requestSettings = {
			url: url,
			data: postData,
			type: "GET",
			success: (json) => dispatch(socMediaSuccess(json)),
			error: () => {
				socMediaFailed()
			}
		};

		$.get(requestSettings)
	}
}

function socMediaSuccess(data) {
	return {
		type: SOCIAL_MEDI_SUCCESS,
		payload: data
	}
}

function socMediaFailed(){
	return{
		type: SOCIAL_MEDI_FAILURE
	}
}
