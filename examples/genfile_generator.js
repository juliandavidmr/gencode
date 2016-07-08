var gencode = require('../index');

var input = {
	name: 'index.html',
	content: [{
		line: '<title>Example</title>',
		space: 0,
		tabs: 0
	}, {
		line: '<div class="header">',
	}, {
		line: '<div class="container">',
		space: 4,
		tabs: 1
	}, {
		line: '<div class="logo">',
		space: 5,
		tabs: 1
	}, {
		line: '<a href="/">Title</a>',
		space: 5,
		tabs: 1
	}, {
		line: '</div>',
		space: 5,
		tabs: 1
	}, {
		line: '<div class="header-right">',
		space: 5,
		tabs: 1
	}, {
		line: '<a href="/empresa"><span>Hello</span></a>',
		space: 5,
		tabs: 1
	}, {
		line: '</div>',
		space: 2,
		tabs: 1,
		repeat: 2
	}, {
		tabs: 2 //this is an error in strict mode.
	}]
};

/**
 * [generator description]
 * @param  {[json]} input [json input]
 * @param  {[boolean]} false [strict mode, ends the generation if an error is found.]
 * @return {[string]}       [output]
 */
gencode.generator(input, false).then((value) => {
	console.log("output: ", value);
}, function(err) {
	console.log("Error: ", err);
});
