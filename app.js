const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
	.options({
		/*a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		},*/
		lat: {
			demand: true,
			alias: 'lat',
			describe: 'lat to fetch weather for',
			string: false
		},
		lng: {
			demand: true,
			alias: 'lng',
			describe: 'lng to fetch weather for',
			string: false
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

weather.getWeather(37.8267,-122.4233, (errorMessage, weatherResults) => {
	if(errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(JSON.stringify(weatherResults, undefined, 2));
	}
});



