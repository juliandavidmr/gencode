var createFile = require('create-file');
var file = require('snack-file');
var utils = require('./utils');

exports.showArray = function(array) {
	utils.showArray(array);
};

exports.generateBySpace = function(array, name, default_space) {
	return utils.generateBySpace(array, name, default_space);
};

exports.generateByTabs = function(array, name, default_tabs) {
	return utils.generateByTabs(array, name, default_tabs);
};

exports.generator = function(input, strict) {
	return new Promise((resolve, reject) => {
		var output = [];
		var tabs = input.tabs;
		var space = input.space | undefined;

		if (input.name) {
			input.content.map((item, i) => {
				if (item.line) {
					if (item.repeat || item.repeat > 0) {
						var aux = (utils.spatabs(item, i, tabs, space));
						for (var i = 0; i < item.repeat; i++) {
							output.push(aux)
						}
					} else {
						output.push(utils.spatabs(item, i));
					}
				} else {
					if (strict) {
						if (strict == true) {
							reject("Error: tag 'name' required.")
						}
					}
				}
			});
			resolve(output);
		} else {
			reject("Error: tag 'name' required.")
		}
	})
};

exports.generatorfull = function(input, dir, name) {
	return new Promise(function(resolve, reject) {
		try {
			if (file.isDirectory(dir)) {
				exports.generator(input, false).then((value) => {
          createFile(utils.concatFile(dir, name), utils.arrayToString(value), function (err) {
            // file either already exists or is now created (including non existing directories)
            console.log("Salida 1:", value);
          });
				}, function (err) {
          reject(err)
        });
			} else {
				reject("'" + dir + "' is not a directory")
			}
		} catch (err) {
      reject(err.message)
		}
	});
}
