var createFile = require('create-file');
var file = require('snack-file');
var utils = require('./utils');


exports.utils = utils;

/**
 * [function view array]
 * @param  {[vector]} array [array of string or numbers]
 * @return {[type]}       [description]
 */
exports.showArray = function(array) {
	utils.showArray(array);
};

/**
 * [function description]
 * @param  {[type]} array         [description]
 * @param  {[type]} name          [description]
 * @param  {[type]} default_space [description]
 * @return {[type]}               [description]
 */
exports.generateBySpace = function(array, name, default_space) {
	return utils.generateBySpace(array, name, default_space);
};

/**
 * [function description]
 * @param  {[type]} array        [description]
 * @param  {[type]} name         [description]
 * @param  {[type]} default_tabs [description]
 * @return {[type]}              [description]
 */
exports.generateByTabs = function(array, name, default_tabs) {
	return utils.generateByTabs(array, name, default_tabs);
};

/**
 * [function procesa la entrada json]
 * @param  {[json]} input  [entrada json con line, space, tabs...]
 * @param  {[type]} strict [parar ejecucion ante un error o advertencia]
 * @return {[type]}        [array con salida procesada (espacios o tabs delante de cada linea)]
 */
exports.generator = function(input, strict) {
	return new Promise((resolve, reject) => {
		var output = [];

		if (input.name) {
			input.content.map((item, i) => {
				if (item.line) {
					if (item.repeat || item.repeat > 0) {
						var aux = (utils.spatabs(item, i));
						for (var i = 0; i < item.repeat; i++) {
							output.push(aux);
						}
					} else {
						output.push(utils.spatabs(item, i));
					}
				} else {
					if (strict) {
						if (strict == true) {
							reject("Error: tag 'line' required.")
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

/**
 * [function description]
 * @param  {[type]} input [description]
 * @param  {[type]} dir   [description]
 * @param  {[type]} name  [description]
 * @return {[type]}       [description]
 */
exports.generatorfull = function(input, dir) {
	return new Promise(function(resolve, reject) {
		if (input) {
			if (input.name) {
				try {
					if (file.isDirectory(dir)) {
						exports.generator(input, false).then((value) => {
							createFile(utils.concatFile(dir, input.name), utils.arrayToString(value, "\n"), function(err) {
								// file either already exists or is now created (including non existing directories)
								if (err) {
									reject(err);
								} else {
									resolve("successfull");
								}
							});
						}, function(err) {
							reject(err);
						});
					} else {
						reject("'" + dir + "' is not a directory");
					}
				} catch (err) {
					reject(err.message);
				}
			} else {
			  reject("'name' required");
			}
		} else {
		  reject("'input' required");
		}
	});
}


/**
 * [function Recibe un array simple de string --> se guarda en un archivo (dir)]
 * @param  {[type]} array     [description]
 * @param  {[type]} dir       [description]
 * @param  {[type]} name      [description]
 * @param  {[type]} separator [description]
 * @return {[type]}           [description]
 */
exports.toFile = function(array, dir, name, separator) {
	return new Promise(function(resolve, reject) {
		try {
			if (file.isDirectory(dir)) {
				createFile(utils.concatFile(dir, name), utils.arrayToString(array, separator), function(err) {
					// file either already exists or is now created (including non existing directories)
					if (err) {
						reject(err);
					} else {
						resolve("successfull")
					}
				});
			} else {
				reject("'" + dir + "' is not a directory")
			}
		} catch (err) {
			reject(err.message)
		}
	});
};
