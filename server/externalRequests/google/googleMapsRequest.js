var request = require('request');

exports.getCoordinates = function(cityName) {

  return new Promise(function (resolve, reject){
      var parameters = {address: cityName};
      var options = {
        url: 'https://maps.googleapis.com/maps/api/geocode/json',
        qs: parameters
      };
      request.get(options, function(err, response, body) {
        if(err) { // Failed request, don't show UI component
          console.log(err);
          reject(err);
        }else{ // Get long and lat from response
          var firstCity = JSON.parse(body).results.shift();
          if(typeof firstCity !== 'undefined'){
            resolve({
              lng: firstCity.geometry.location.lng,
              lat: firstCity.geometry.location.lat
            });
          }
          else{ // CityName doesn't exist, send message to user
            resolve("Could not find city " + cityName)
          }
        }
      });
  })
};
