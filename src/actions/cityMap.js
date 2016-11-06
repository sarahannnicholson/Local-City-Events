import $ from 'jquery';
import * as constants from '../constants';

export function getMap(cityName) {

    const url = constants.ServerApiPaths.googleMap
    const postData = {
        cityName: cityName
    };

    const requestSettings = {
        url: url,
        data: postData,
        async: true,
        type: "GET",
        success: (json) => getMapSuccess(json),
        error: (jqxhr, textStatus, error) => {
            getMapFailed(jqxhr)
        }
    }

    $.get(requestSettings)
}

function getMapSuccess(data) {
  return {
    type: 'MAP_SUCCESS',
    data: data
}
}

function getMapFailed(error){
    return{
        type: 'MAP_FAILURE'
    }
}

function get(){

}

function post(){


}
