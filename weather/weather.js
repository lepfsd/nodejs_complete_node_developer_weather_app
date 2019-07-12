const request = require('request');

var getWeather = (lat, lng, callback) => {

	request({
		url: `https://api.darksky.net/forecast/d27818a53988ad9d41a394a6780da880/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		if(error) {
			callback('error to connect api.darksky.net/forecast');
		} else if (response.statusCode === 400) {
			callback('unable to fetch data');
		} else if (response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature,
				humidity: body.currently.humidity
			});
		}
	});
};

module.exports.getWeather = getWeather;

