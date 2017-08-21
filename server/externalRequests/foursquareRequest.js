var request = require('request');

exports.getPopularSpots = function(place) {

	return new Promise(function (resolve, reject){
		var parameters = {
			client_id: 'HXN22PBFJDZ54KIYKM1T1TFCXNREGFO33H3UYZIVVCWOZKRO',
			client_secret: 'PFTJWNZ5OTBBQ2LBAOK3W4CCL1EB4W2CELHKMLG3AP2E3C3K',
			v: '20130815',
			ll: place.lat + ',' + place.lng
		};
		var options = { url: 'https://api.foursquare.com/v2/venues/search', qs: parameters }

		request.get(options, function(err, response, body) {
			if(err) { // Failed to get a responce
				console.log("Foursquare API failed with error: " + err);
				reject(err);
			}else{ // Got response!
				var parsed_body = JSON.parse(body)
				if (parsed_body.meta.code === 200){ // Good Response from Foursquare
					var venues = parsed_body.response.venues
					var returnVenues = []
					for (var i in venues){
						var venue = venues[i]
						returnVenues.push({
							name: venue.name,
							location: {
								lat: venue.location.lat,
								lng: venue.location.lng
							}
						})
					}
					resolve(returnVenues)
				}else{ // Bad Response from Foursquare
					console.log("bad Foursquare request")
					reject()
				}
			}
		});
	})
};
