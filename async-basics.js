console.log('Starting App');

setTimeout( () => {
	console.log('inside of callback');
}, 2000);

setTimeout( () => {
	console.log('Second setTimeout');
}, 0);

console.log('Finish');