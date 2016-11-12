const googleMapsRequest = require('./externalRequests/google/googleMapsRequest');

module.exports = function(app){
    app.get('/googleMap', function(req, res){
        googleMapsRequest.getCoordinates(req.query.cityName).then(function(coordinates){
          res.send(coordinates)
        });
    })
};
