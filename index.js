var version = require('./package.json').version;

const greet = () => {
	console.log(`greetings from ${version}`);
}
const foo = () => {
	console.log(`bar`);
}

exports.foo = foo;
exports.greet = greet;