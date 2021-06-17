var version = require('./package.json').version;

const greet = () => {
	console.log(`greetings from ${version}`);
}
const bar = () => {
	console.log(`bar`);
}


exports.bar = bar;
exports.greet = greet;
