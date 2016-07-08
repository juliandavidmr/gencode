var gencode = require('../index');

var array = ['1', '2', '555543', '23423', 'Lorem ipsum', 'Lorem ipsum 2', 'Lorem ipsum 3', 231];

gencode.toFile(array, '/home/julian/Escritorio/test', 'array.txt', '\n').then((value) => {
	console.log("Result:\n", value);
}, function(err) {
	console.log("Error: ", err);
});
