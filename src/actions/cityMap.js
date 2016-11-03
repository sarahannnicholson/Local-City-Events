

export function getMap(cityName) {

  /* TODO  return dispatch => {
        fetch('/api/data')
        .then(response => response.json())
        .then(json => dispatch(getMapSuccess(json))
        .catch(json => dispatch(getMapFailed(json))
    } */
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
