const googleMapsRequest = require('./externalRequests/google/googleMapsRequest');

module.exports = function(app){
    app.get('/coordinates', function(req, res){
        googleMapsRequest.getCoordinates(req.query.cityName)
          .then(function(coordinates){
              res.send(coordinates)
          })
          .catch(function(){
            res.status(500);
            res.send(null);
          });
    })
};
