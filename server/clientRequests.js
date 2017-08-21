const foursquaremRequest = require('./externalRequests/foursquareRequest');

module.exports = function(app){
	app.get('/socMedia', function(req, res){

		foursquaremRequest.getPopularSpots(req.query.place)
			.then(function(venues){
				res.send(venues)
		 	})
			.catch(function(){
				res.status(500);
				res.send(null);
			})
	})
};
