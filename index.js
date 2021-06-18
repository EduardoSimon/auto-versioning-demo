var version = require('./package.json').version;

const greet = () => {
	console.log(`greetings from ${version}`);
}
const bar = () => {
	console.log(`bar`);
}
const fooo = () => {
	console.log('foo');
}

exports.fooo = fooo;
exports.bar = bar;
exports.greet = greet;
