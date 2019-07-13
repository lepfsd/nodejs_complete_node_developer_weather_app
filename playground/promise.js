/*var somePromise = new Promise( (resolve, reject) => {
	setTimeout(() => {
		resolve('hey that worked!');
		reject('unable to fullfil');
	}, 2500);
});

somePromise.then((message) => {
	console.log('success:', message);
}, (erroMessage) => {
	console.log('error:', erroMessage);
}); */

var asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout( () => {
			if(typeof a === 'number' && typeof b === 'number') {
				resolve(a + b);
			} else {
				reject('arg must be numbers');
			}
		}, 1500);
	});
};

asyncAdd(3, 3).then( (res) => {
	console.log('result:', res);
	return asyncAdd(res, 33);
}).then((res) => {
	console.log('result2:', res);
}).catch((errorMessage) => {
	console.log(errorMessage);
});

