var somePromise = new Promise( (resolve, reject) => {
	setTimeout(() => {
		resolve('hey that worked!');
		reject('unable to fullfil');
	}, 2500);
});

somePromise.then((message) => {
	console.log('success:', message);
}, (erroMessage) => {
	console.log('error:', erroMessage);
});